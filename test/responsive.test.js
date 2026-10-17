const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const PORT = 4180;
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
  page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  page.on('pageerror', err => { throw new Error(`page error: ${err.message}`); });
});

after(async () => {
  if (browser) await browser.close();
  if (server) await new Promise(r => server.close(r));
});

const overflowPx = () =>
  page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);

async function assertNoHorizontalOverflow(label) {
  const px = await overflowPx();
  assert.ok(px <= 1, `${label}: page overflows horizontally by ${px}px at 390px width`);
}

async function startAugust() {
  await page.goto(BASE + '/');
  await page.waitForSelector('.hall-card');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.waitForSelector('.hall-card');
  await page.click('.hall-card[data-exam="august-01"] .btn-primary');
  await page.waitForSelector('.mode-card');
  await page.click('.btn-primary');
  await page.waitForSelector('.q-panel');
}

test('mobile: exam hall has no horizontal overflow', async () => {
  await page.goto(BASE + '/');
  await page.waitForSelector('.hall-card');
  await assertNoHorizontalOverflow('exam hall');
  const cards = await page.$$eval('.hall-card', els => els.length);
  assert.equal(cards, 12);
  // class tabs span the width in one row and the search box sits below them
  const tabs = await page.$$eval('.hall-tab', els => els.map(e => Math.round(e.getBoundingClientRect().top)));
  assert.equal(new Set(tabs).size, 1, 'class tabs stay on one row');
  await page.click('.hall-tab[data-filter="IX"]');
  await assertNoHorizontalOverflow('exam hall (Class IX tab)');
  await page.click('.hall-tab[data-filter="all"]');
});

test('mobile: august setup screen has no horizontal overflow', async () => {
  await page.goto(BASE + '/');
  await page.waitForSelector('.hall-card');
  await page.click('.hall-card[data-exam="august-01"] .btn-primary');
  await page.waitForSelector('.mode-card');
  await assertNoHorizontalOverflow('exam setup');
  const gridCols = await page.$eval('.topic-grid', el => getComputedStyle(el).gridTemplateColumns.split(' ').length);
  assert.equal(gridCols, 1, 'topic grid stacks to one column');
});

test('mobile: exam screen, table questions, and timer fit', async () => {
  await startAugust();
  await assertNoHorizontalOverflow('exam screen');
  const timerVisible = await page.isVisible('#timer');
  assert.ok(timerVisible, 'timer visible');
  const mainCols = await page.$eval('.exam-main', el => getComputedStyle(el).gridTemplateColumns.split(' ').length);
  assert.equal(mainCols, 1, 'exam main stacks to one column');
  const paletteStatic = await page.$eval('.q-palette', el => getComputedStyle(el).position);
  assert.equal(paletteStatic, 'static', 'palette is static on mobile');

  const tableIdx = await page.evaluate(() =>
    State.questions.findIndex(q => q.q.includes('<table')));
  assert.ok(tableIdx >= 0, 'found a table-based question');
  await page.evaluate(idx => { State.currentIndex = idx; renderQuestion(); }, tableIdx);
  await assertNoHorizontalOverflow('table question');

  const diagramIdx = await page.evaluate(() =>
    State.questions.findIndex(q => q.diagram));
  await page.evaluate(idx => { State.currentIndex = idx; renderQuestion(); }, diagramIdx);
  await page.waitForSelector('.mermaid-frame svg', { timeout: 8000 });
  await assertNoHorizontalOverflow('diagram question');
});

let touchPage;

test('mobile touch: topic row selection is consistent everywhere (label, checkbox area, keyboard)', async () => {
  touchPage = await browser.newPage({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
  await touchPage.goto(BASE + '/');
  await touchPage.waitForSelector('.hall-card');
  await touchPage.tap('.hall-card[data-exam="august-01"] .btn-primary');
  await touchPage.waitForSelector('.mode-card');

  const rowState = (n) => touchPage.evaluate(i => {
    const row = document.querySelectorAll('.topic-row')[i];
    return {
      selected: [...State.selectedTopics],
      checked: row.querySelector('input').checked,
      cls: row.classList.contains('selected'),
      aria: row.getAttribute('aria-checked'),
    };
  }, n);

  // tap exactly where the checkbox sits (left edge) — must behave like the label
  const box = await touchPage.locator('.topic-row >> nth=0').boundingBox();
  await touchPage.touchscreen.tap(box.x + 12, box.y + box.height / 2);
  await touchPage.waitForTimeout(200);
  let s = await rowState(0);
  assert.ok(s.selected.includes('database-concepts'), 'state selected');
  assert.equal(s.checked, true, 'checkbox visual checked');
  assert.equal(s.cls, true, 'row highlighted');
  assert.equal(s.aria, 'true', 'aria-checked synced');

  await touchPage.touchscreen.tap(box.x + 12, box.y + box.height / 2);
  await touchPage.waitForTimeout(200);
  s = await rowState(0);
  assert.equal(s.selected.length, 0, 'deselected');
  assert.equal(s.checked, false, 'checkbox visual unchecked');

  // plain label tap
  await touchPage.tap('.topic-row >> nth=1');
  await touchPage.waitForTimeout(200);
  s = await rowState(1);
  assert.ok(s.selected.includes('three-schema-architecture'), 'label tap selects');
  assert.equal(s.checked, true, 'label tap checks box');

  // keyboard: Space selects, Enter deselects
  await touchPage.focus('.topic-row >> nth=2');
  await touchPage.keyboard.press('Space');
  await touchPage.waitForTimeout(200);
  s = await rowState(2);
  assert.ok(s.selected.includes('er-diagrams'), 'Space selects');
  assert.equal(s.checked, true, 'Space checks box');
  await touchPage.keyboard.press('Enter');
  await touchPage.waitForTimeout(200);
  s = await rowState(2);
  assert.ok(!s.selected.includes('er-diagrams'), 'Enter deselects');
  assert.equal(s.checked, false, 'Enter unchecks box');

  await touchPage.close();
});

test('mobile: results page has no horizontal overflow', async () => {
  await startAugust();
  await page.evaluate(() => {
    State.answers = {};
    State.questions.forEach(q => { State.answers[q.globalIndex] = q.answer; });
  });
  await page.evaluate(() => submit());
  await page.waitForSelector('.score-main');
  await assertNoHorizontalOverflow('results page');
});

test('mobile: Class IX (October 13) setup, diagram questions and results fit', async () => {
  await page.goto(BASE + '/');
  await page.waitForSelector('.hall-card');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.waitForSelector('.hall-card');
  await page.click('.hall-card[data-exam="october-13"] .btn-primary');
  await page.waitForSelector('.mode-card');
  assert.equal(await page.$$eval('.topic-row', els => els.length), 13);
  await assertNoHorizontalOverflow('Class IX setup (13 subjects)');

  await page.click('.btn-primary');
  await page.waitForSelector('.q-panel');
  await assertNoHorizontalOverflow('Class IX exam screen');

  const diagramIdx = await page.evaluate(() =>
    State.questions.map((q, i) => (q.diagram ? i : -1)).filter(i => i >= 0));
  for (const i of diagramIdx) {
    await page.evaluate(idx => { State.currentIndex = idx; renderQuestion(); }, i);
    await page.waitForSelector('#qPanel .mermaid-frame svg', { timeout: 8000 });
    await assertNoHorizontalOverflow(`Class IX diagram Q${i + 1}`);
  }

  await page.evaluate(() => {
    State.questions.forEach((q, i) => { if (i % 2 === 0) State.answers[q.globalIndex] = q.answer; });
  });
  await page.evaluate(() => submit());
  await page.waitForSelector('.score-main');
  await assertNoHorizontalOverflow('Class IX results page');
});

test('mobile: the four new Class IX papers — spreadsheet tables, diagrams and results fit', async () => {
  for (const id of ['october-20', 'october-24', 'october-28', 'october-31']) {
    await page.goto(BASE + '/');
    await page.waitForSelector('.hall-card');
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    await page.waitForSelector('.hall-card');
    await page.click(`.hall-card[data-exam="${id}"] .btn-primary`);
    await page.waitForSelector('.mode-card');
    assert.equal(await page.$$eval('.topic-row', els => els.length), 8, `${id}: 8 subjects`);
    await assertNoHorizontalOverflow(`${id} setup`);
    await page.click('.btn-primary');
    await page.waitForSelector('.q-panel');
    await assertNoHorizontalOverflow(`${id} exam screen`);

    const special = await page.evaluate(() =>
      State.questions.map((q, i) => (q.diagram || q.q.includes('q-table') ? i : -1)).filter(i => i >= 0));
    for (const i of special) {
      await page.evaluate(idx => { State.currentIndex = idx; renderQuestion(); }, i);
      if (await page.evaluate(idx => !!State.questions[idx].diagram, i)) {
        await page.waitForSelector('#qPanel .mermaid-frame svg', { timeout: 8000 });
      }
      await assertNoHorizontalOverflow(`${id} Q${i + 1}`);
    }

    await page.evaluate(() => { State.questions.forEach(q => { State.answers[q.globalIndex] = q.answer; }); submit(); });
    await page.waitForSelector('.score-main');
    assert.equal(await page.textContent('.score-main'), '320', `${id}: full marks are 320`);
    await assertNoHorizontalOverflow(`${id} results`);
  }
});
