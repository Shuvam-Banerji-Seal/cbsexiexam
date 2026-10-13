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

test('exam hall lists all eight packages with correct metadata', async () => {
  await freshHall();
  const cards = await page.$$eval('.hall-card', els => els.map(e => e.textContent));
  assert.equal(cards.length, 8);
  assert.ok(cards[0].includes('July Examination'));
  assert.ok(cards[0].includes('120 Questions'));
  assert.ok(cards[1].includes('August 01 Examination'));
  assert.ok(cards[1].includes('150 Questions'));
  assert.ok(cards[1].includes('2h 30m'));
  assert.ok(cards[1].includes('SQL'));
  assert.ok(cards[2].includes('August 21 Examination'));
  assert.ok(cards[2].includes('120 Questions'));
  assert.ok(cards[2].includes('File'));
  assert.ok(cards[2].includes('pickle'));
  assert.ok(cards[3].includes('August 30 Examination'));
  assert.ok(cards[3].includes('120 Questions'));
  assert.ok(cards[3].includes('Computer Networks'));
  assert.ok(cards[3].includes('2h'));
  assert.ok(cards[4].includes('September 18 Examination'));
  assert.ok(cards[4].includes('70 Questions'));
  assert.ok(cards[4].includes('PYQ'));
  assert.ok(cards[4].includes('3h'));
  assert.ok(cards[5].includes('September 22 Examination'));
  assert.ok(cards[5].includes('50 Questions'));
  assert.ok(cards[5].includes('Second Sitting'));
  assert.ok(cards[5].includes('3h'));
  assert.ok(cards[6].includes('September 26 Examination'));
  assert.ok(cards[6].includes('50 Questions'));
  assert.ok(cards[6].includes('Third Sitting'));
  assert.ok(cards[7].includes('October 13 Examination'));
  assert.ok(cards[7].includes('Class IX'));
  assert.ok(cards[7].includes('120 Questions'));
  assert.ok(cards[7].includes('2h'));
  assert.ok(cards[7].includes('Max 480'));
  assert.ok(cards[7].includes('Input Devices — 10'));
  assert.ok(cards[7].includes('Communication Skills I — 8'));
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

test('August 21 flow: begin -> setup -> 120 questions with 2:00:00 timer', async () => {
  await freshHall();
  await page.click('.hall-card:nth-of-type(3) .btn-primary');
  await page.waitForSelector('.mode-card');
  await page.click('.btn-primary'); // Proceed to Examination
  await page.waitForSelector('.q-panel');
  const qMeta = await page.textContent('.q-number');
  assert.match(qMeta, /Question 1 of 120/);
  const timer = await page.textContent('#timer');
  assert.equal(timer, '2:00:00');
});

test('every August 21 diagram renders to a real SVG in the browser', async () => {
  await freshHall();
  await page.click('.hall-card:nth-of-type(3) .btn-primary');
  await page.waitForSelector('.mode-card');
  await page.click('.btn-primary');
  await page.waitForSelector('.q-panel');

  const diagramIdx = await page.evaluate(() =>
    State.questions.map((q, i) => (q.diagram ? i : -1)).filter(i => i >= 0));

  assert.ok(diagramIdx.length >= 4, `expected >= 4 diagram questions, got ${diagramIdx.length}`);

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

test('September 18 flow: 70 questions (50 MCQ + 20 written), 3h timer, written sheet + mailto', async () => {
  await freshHall();
  await page.click('.hall-card:nth-of-type(5) .btn-primary');
  await page.waitForSelector('.mode-card');
  await page.click('.btn-primary');
  await page.waitForSelector('.q-panel');

  const qMeta = await page.textContent('.q-number');
  assert.match(qMeta, /Question 1 of 70/);
  const timer = await page.textContent('#timer');
  assert.equal(timer, '3:00:00');

  // jump to the first written question (Q51) and verify textarea renders
  await page.evaluate(() => jumpTo(50));
  await page.waitForSelector('.answer-area');
  const marks = await page.textContent('.marks-tag');
  assert.ok(marks.includes('2 mark'), 'marks tag shows 2 marks');

  // type a written answer
  await page.click('.answer-area');
  await page.type('.answer-area', 'Push adds on top; Pop removes the topmost element.');
  const stored = await page.evaluate(() => Object.keys(State.written).length);
  assert.equal(stored, 1, 'written answer stored');

  // answer all MCQs correctly, then submit
  await page.evaluate(() => {
    State.questions.filter(q => q.type !== 'written').forEach(q => { State.answers[q.globalIndex] = q.answer; });
  });
  await page.evaluate(() => submit());
  await page.waitForSelector('.score-main');

  // objective score: 50 MCQs x 4 = 200
  const score = await page.textContent('.score-main');
  assert.equal(score, '200');

  // written sheet with email action appears, prefilled email address on the button
  await page.waitForSelector('.written-sheet');
  const btn = await page.textContent('.sheet-actions .btn-submit');
  assert.ok(btn.includes('sbs22ms076@iiserkol.ac.in'), 'email button shows the evaluation address');
  const answerInSheet = await page.inputValue('.sheet-area');
  assert.ok(answerInSheet.includes('Push adds on top'), 'written answer pre-loaded in the sheet');

  // mailto generation contains the address and subject
  const mailto = await page.evaluate(() => {
    return { email: State.exam.writtenSubmissionEmail, text: buildAnswerSheetText() };
  });
  assert.equal(mailto.email, 'sbs22ms076@iiserkol.ac.in');
  assert.ok(mailto.text.includes('Q51'), 'answer sheet numbers the written questions');
  assert.ok(mailto.text.includes('Name:'), 'answer sheet has a name field');

  // history keeps the written answers for the teacher/student record
  const storedWritten = await page.evaluate(() => {
    const h = JSON.parse(localStorage.getItem('cbsexam:september-18:history') || '[]');
    return h.length && Object.keys(h[0].written || {}).length;
  });
  assert.ok(storedWritten >= 1, 'history stores written answers');
});

test('September 22 & 26 flows: 50 questions each (30 MCQ + 20 written), 3h timer, written renders', async () => {
  for (const [cardIdx, expectedMarks] of [[6, '2 marks'], [7, '2 marks']]) {
    await freshHall();
    await page.click(`.hall-card:nth-of-type(${cardIdx}) .btn-primary`);
    await page.waitForSelector('.mode-card');
    await page.click('.btn-primary');
    await page.waitForSelector('.q-panel');

    const qMeta = await page.textContent('.q-number');
    assert.match(qMeta, /Question 1 of 50/);
    const timer = await page.textContent('#timer');
    assert.equal(timer, '3:00:00');

    // first written question sits at index 30 (Q31)
    await page.evaluate(() => jumpTo(30));
    await page.waitForSelector('.answer-area');
    const marks = await page.textContent('.marks-tag');
    assert.ok(marks.includes(expectedMarks), `written marks tag shows "${expectedMarks}"`);

    const paletteWritten = await page.$$eval('.p-btn.written-q', els => els.length);
    assert.equal(paletteWritten, 20, 'palette marks 20 written questions');
  }
});

async function openOctober13Setup() {
  await freshHall();
  await page.click('.hall-card:nth-of-type(8) .btn-primary');
  await page.waitForSelector('.mode-card');
}

test('October 13 (Class IX) flow: 13 subjects on setup, 120 questions, 2:00:00 timer', async () => {
  await openOctober13Setup();
  const subjects = await page.$$eval('.topic-row', els => els.length);
  assert.equal(subjects, 13, 'setup lists 13 subjects');
  await page.click('.btn-primary'); // Proceed to Examination
  await page.waitForSelector('.q-panel');
  assert.match(await page.textContent('.q-number'), /Question 1 of 120/);
  assert.equal(await page.textContent('#timer'), '2:00:00');
  const palette = await page.$$eval('.p-btn', els => els.length);
  assert.equal(palette, 120, 'palette has 120 buttons');
  const options = await page.$$eval('#qPanel .opt', els => els.length);
  assert.equal(options, 4, 'objective question shows four options');
});

test('every October 13 diagram renders to a real SVG in the browser', async () => {
  await openOctober13Setup();
  await page.click('.btn-primary');
  await page.waitForSelector('.q-panel');

  const diagramIdx = await page.evaluate(() =>
    State.questions.map((q, i) => (q.diagram ? i : -1)).filter(i => i >= 0));
  assert.ok(diagramIdx.length >= 4, `expected >= 4 diagram questions, got ${diagramIdx.length}`);

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

test('October 13 results: score, counts, topic breakdown, review filters and history are correct', async () => {
  await openOctober13Setup();
  await page.click('.btn-primary');
  await page.waitForSelector('.q-panel');

  // Answer Q1-Q3 through the real UI: Q1 and Q2 correctly, Q3 wrongly.
  const keys = await page.evaluate(() => State.questions.slice(0, 3).map(q => q.answer));
  const picks = [keys[0], keys[1], (keys[2] + 1) % 4];
  for (const pick of picks) {
    await page.click(`#qPanel .opt >> nth=${pick}`);
    assert.equal(await page.$$eval('#qPanel .opt.selected', els => els.length), 1, 'exam mode marks the selection');
    assert.equal(await page.$$eval('#qPanel .explain-box', els => els.length), 0, 'exam mode hides the answer');
    await page.click('#qPanel .q-actions .btn-ghost >> nth=1'); // Next →
  }

  // Remaining questions: Q4-Q61 correct, Q62-Q80 wrong, Q81-Q120 skipped
  // → 2 + 58 = 60 correct, 1 + 19 = 20 wrong, 40 skipped.
  await page.evaluate(() => {
    State.questions.forEach((q, i) => {
      if (i < 3) return;
      if (i <= 60) State.answers[q.globalIndex] = q.answer;
      else if (i < 80) State.answers[q.globalIndex] = (q.answer + 1) % q.options.length;
    });
    renderPalette();
  });
  assert.equal(await page.textContent('#statAns'), '80');
  assert.equal(await page.textContent('#statRem'), '40');

  // Conclude through the confirm dialog
  await page.click('.q-palette .btn-submit');
  await page.waitForSelector('.confirm-box');
  assert.ok((await page.textContent('.confirm-body')).includes('80 of 120'));
  await page.click('#cfSubmit');
  await page.waitForSelector('.score-main');

  // 60 × 4 − 20 × 1 = 220 out of 480, accuracy 60/120 = 50.0%
  assert.equal(await page.textContent('.score-main'), '220');
  const label = await page.textContent('.score-label');
  assert.ok(label.includes('October 13 Examination'), label);
  assert.ok(label.includes('out of 480'), label);
  assert.ok(label.includes('50.0% accuracy'), label);
  const cells = await page.$$eval('.score-cell-val', els => els.map(e => e.textContent.trim()));
  assert.deepEqual(cells, ['60', '20', '40', '220'], 'correct / incorrect / unanswered / score');
  assert.equal(await page.$$eval('.written-sheet', els => els.length), 0, 'no written sheet for an objective paper');

  // Topic breakdown: one row per subject — Q3 is the only miss in subject 1, subject 8 (Q61-Q70)
  // has just Q61 right, and subject 13 (Q111-Q120) was skipped entirely.
  const breakdown = await page.$$eval('.breakdown-item', els => els.map(e => e.textContent.replace(/\s+/g, ' ')));
  assert.equal(breakdown.length, 13);
  assert.ok(breakdown[0].includes('Communication Skills I') && breakdown[0].includes('7/8 correct'), breakdown[0]);
  assert.ok(breakdown[1].includes('8/8 correct'), breakdown[1]);
  assert.ok(breakdown[7].includes('Input Devices') && breakdown[7].includes('1/10 correct'), breakdown[7]);
  assert.ok(breakdown[12].includes('Number Systems') && breakdown[12].includes('0/10 correct'), breakdown[12]);

  // Review filters
  const reviewCount = async (label) => {
    await page.click(`.rv-btn:has-text("${label}")`);
    return page.$$eval('.review-item', els => els.length);
  };
  assert.equal(await reviewCount('Wrong'), 20);
  const wrongItem = await page.$eval('.review-item', el => ({
    correct: el.querySelectorAll('.opt.correct').length,
    incorrect: el.querySelectorAll('.opt.incorrect').length,
    options: el.querySelectorAll('.opt').length,
  }));
  assert.deepEqual(wrongItem, { correct: 1, incorrect: 1, options: 4 }, 'wrong answer shows key + pick');
  assert.equal(await reviewCount('Skipped'), 40);
  assert.equal(await reviewCount('Correct'), 60);
  assert.equal(await reviewCount('All'), 120);

  // History: hall card shows the attempt, and re-opening it reproduces the same result
  await gotoHall();
  const history = await page.textContent('.hall-card:nth-of-type(8) .hall-history');
  assert.ok(history.includes('220/480 · 50.0%'), history);
  await page.click('.hall-card:nth-of-type(8) .hall-link');
  await page.waitForSelector('.score-main');
  assert.equal(await page.textContent('.score-main'), '220');
  assert.equal(await page.$$eval('.breakdown-item', els => els.length), 13);
});

test('October 13 practice mode: single subject, no timer, instant verdict with explanation', async () => {
  await openOctober13Setup();
  await page.click('.mode-card[data-mode="practice"]');
  await page.click('.topic-row[data-topic="number-systems"]');
  await page.click('.btn-primary');
  await page.waitForSelector('.q-panel');

  assert.match(await page.textContent('.q-number'), /Question 1 of 10/);
  assert.equal(await page.$$eval('#timer', els => els.length), 0, 'practice mode has no timer');

  const key0 = await page.evaluate(() => State.questions[0].answer);
  await page.click(`#qPanel .opt >> nth=${key0}`);
  const verdict = await page.textContent('#qPanel .explain-box');
  assert.ok(verdict.includes('Correct'), verdict);
  assert.ok(verdict.includes('Octal'), 'explanation shown');

  await page.click('#qPanel .q-actions .btn-ghost >> nth=1'); // Next →
  const key1 = await page.evaluate(() => State.questions[1].answer);
  await page.click(`#qPanel .opt >> nth=${(key1 + 1) % 4}`);
  const verdict2 = await page.textContent('#qPanel .explain-box');
  assert.ok(verdict2.includes('Incorrect — the proper answer is ' + 'ABCD'[key1]), verdict2);
  assert.ok(verdict2.includes('11001'), 'worked conversion shown');
});
