const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const PORT = 4173;
const BASE = `http://127.0.0.1:${PORT}`;

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.json': 'application/json',
};

let server;
let browser;
let page;

before(async () => {
  server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split('?')[0]);
    const rel = urlPath === '/' ? 'index.html' : urlPath.replace(/^\/+/, '');
    const file = path.join(ROOT, rel);
    if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      res.writeHead(404); res.end('not found'); return;
    }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
    fs.createReadStream(file).pipe(res);
  });
  await new Promise(r => server.listen(PORT, '127.0.0.1', r));

  browser = await chromium.launch();
  page = await browser.newPage();
  page.on('pageerror', err => { throw new Error(`page error: ${err.message}`); });
  page.on('console', msg => {
    if (msg.type() === 'error') throw new Error(`console error: ${msg.text()}`);
  });
});

after(async () => {
  if (browser) await browser.close();
  if (server) await new Promise(r => server.close(r));
});

async function gotoHall() {
  await page.goto(BASE + '/');
  await page.waitForSelector('.hall-card');
}

async function freshHall() {
  await gotoHall();
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.waitForSelector('.hall-card');
}

test('exam hall lists both packages with correct metadata', async () => {
  await freshHall();
  const cards = await page.$$eval('.hall-card', els => els.map(e => e.textContent));
  assert.equal(cards.length, 2);
  assert.ok(cards[0].includes('July Examination'));
  assert.ok(cards[0].includes('120 Questions'));
  assert.ok(cards[1].includes('August 01 Examination'));
  assert.ok(cards[1].includes('150 Questions'));
  assert.ok(cards[1].includes('2h 30m'));
  assert.ok(cards[1].includes('SQL'));
});

test('August flow: begin -> setup -> 150 questions with 2:30:00 timer', async () => {
  await freshHall();
  await page.click('.hall-card:nth-of-type(2) .btn-primary');
  await page.waitForSelector('.mode-card');
  await page.click('.btn-primary'); // Proceed to Examination
  await page.waitForSelector('.q-panel');
  const qMeta = await page.textContent('.q-number');
  assert.match(qMeta, /Question 1 of 150/);
  const timer = await page.textContent('#timer');
  assert.equal(timer, '2:30:00');
});

test('every August diagram renders to a real SVG in the browser', async () => {
  await freshHall();
  await page.click('.hall-card:nth-of-type(2) .btn-primary');
  await page.waitForSelector('.mode-card');
  await page.click('.btn-primary');
  await page.waitForSelector('.q-panel');

  const diagramIdx = await page.evaluate(() =>
    State.questions.map((q, i) => (q.diagram ? i : -1)).filter(i => i >= 0));

  assert.ok(diagramIdx.length >= 12, `expected >= 12 diagram questions, got ${diagramIdx.length}`);

  const failures = [];
  for (const i of diagramIdx) {
    await page.evaluate(idx => { State.currentIndex = idx; renderQuestion(); }, i);
    try {
      await page.waitForSelector('#qPanel .mermaid-frame svg', { timeout: 8000 });
      const errored = await page.$$eval('#qPanel .mermaid-error', els => els.length);
      if (errored > 0) failures.push(`Q${i + 1}: rendered with error class`);
    } catch (e) {
      failures.push(`Q${i + 1}: no SVG rendered`);
    }
  }
  assert.deepEqual(failures, [], `diagram render failures: ${failures.join('; ')}`);
});

test('persistence: answer survives reload, resume restores it', async () => {
  await freshHall();
  await page.click('.hall-card:nth-of-type(2) .btn-primary');
  await page.waitForSelector('.mode-card');
  await page.click('.btn-primary');
  await page.waitForSelector('.q-panel');

  await page.evaluate(() => selectOption(1));
  const savedBefore = await page.evaluate(() => Object.keys(State.answers).length);
  assert.equal(savedBefore, 1);

  await page.reload();
  await page.waitForSelector('.hall-card');
  const resumeBtn = await page.$$eval('.hall-card:nth-of-type(2) .btn-primary', els =>
    els.map(e => e.textContent).find(t => t.includes('Resume')));
  assert.ok(resumeBtn, 'resume button present after reload');

  await page.click('.hall-card:nth-of-type(2) .btn-primary');
  await page.waitForSelector('.q-panel');
  const restored = await page.evaluate(() => ({
    count: Object.keys(State.answers).length,
    selected: document.querySelectorAll('.opt.selected').length,
  }));
  assert.equal(restored.count, 1, 'answers restored');
  assert.equal(restored.selected, 1, 'selection visually restored');
});

test('July flow still works as a package: 120 questions, 2:00:00 timer', async () => {
  await freshHall();
  await page.click('.hall-card:nth-of-type(1) .btn-primary');
  await page.waitForSelector('.mode-card');
  await page.click('.btn-primary');
  await page.waitForSelector('.q-panel');
  const qMeta = await page.textContent('.q-number');
  assert.match(qMeta, /Question 1 of 120/);
  const timer = await page.textContent('#timer');
  assert.equal(timer, '2:00:00');
});

test('submission produces a scorecard and stores history', async () => {
  await freshHall();
  await page.click('.hall-card:nth-of-type(2) .btn-primary');
  await page.waitForSelector('.mode-card');
  await page.click('.btn-primary');
  await page.waitForSelector('.q-panel');

  await page.evaluate(() => {
    State.answers = {};
    State.questions.forEach(q => { State.answers[q.globalIndex] = q.answer; });
  });
  await page.evaluate(() => submit());
  await page.waitForSelector('.score-main');
  const score = await page.textContent('.score-main');
  assert.equal(score, '600');

  await gotoHall();
  const historyText = await page.$$eval('.hall-card:nth-of-type(2) .hall-history', els =>
    els.map(e => e.textContent).join(' '));
  assert.ok(historyText.includes('600'), 'history shows best score');
});
