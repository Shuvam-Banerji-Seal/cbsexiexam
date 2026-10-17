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

// [id, class, strings the hall card must show], in the order the hall lists them.
const HALL = [
  ['october-13', 'IX', ['October 13 Examination', 'Employability Skills', '120 Questions', '2h', 'Max 480', 'Input Devices — 10', 'Communication Skills I — 8']],
  ['october-20', 'IX', ['October 20 Examination', 'Cyber Safety', '80 Questions', '1h 30m', 'Max 320']],
  ['october-24', 'IX', ['October 24 Examination', 'Digital Documentation', '80 Questions', '1h 30m', 'Max 320']],
  ['october-28', 'IX', ['October 28 Examination', 'Electronic Spreadsheet', '80 Questions', '1h 30m', 'Max 320']],
  ['october-31', 'IX', ['October 31 Examination', 'Digital Presentation', '80 Questions', '1h 30m', 'Max 320']],
  ['july', 'XII', ['July Examination', '120 Questions', '2h', 'Max 480']],
  ['august-01', 'XII', ['August 01 Examination', '150 Questions', '2h 30m', 'SQL']],
  ['august-21', 'XII', ['August 21 Examination', '120 Questions', 'File', 'pickle']],
  ['august-30', 'XII', ['August 30 Examination', '120 Questions', 'Computer Networks', '2h']],
  ['september-18', 'XII', ['September 18 Examination', '70 Questions', '50 objective + 20 written', 'PYQ', '3h', 'Max 200']],
  ['september-22', 'XII', ['September 22 Examination', '50 Questions', 'Second Sitting', '3h']],
  ['september-26', 'XII', ['September 26 Examination', '50 Questions', 'Third Sitting', '3h']],
];
const idsOf = (grade) => HALL.filter(h => h[1] === grade).map(h => h[0]);
const hallIds = () => page.$$eval('.hall-card', els => els.map(e => e.dataset.exam));

test('exam hall groups all twelve packages by class with correct metadata', async () => {
  await freshHall();
  const groups = await page.$$eval('.hall-group', els => els.map(g => ({
    grade: g.dataset.grade,
    ids: [...g.querySelectorAll('.hall-card')].map(c => c.dataset.exam),
  })));
  assert.deepEqual(groups, [{ grade: 'IX', ids: idsOf('IX') }, { grade: 'XII', ids: idsOf('XII') }]);

  for (const [id, grade, texts] of HALL) {
    const text = (await page.textContent(`.hall-card[data-exam="${id}"]`)).replace(/\s+/g, ' ');
    assert.ok(text.includes(`Class ${grade}`), `${id}: class badge`);
    for (const t of texts) assert.ok(text.includes(t), `${id}: card should show "${t}" — got: ${text.slice(0, 300)}`);
  }

  const ledger = (await page.$$eval('.ledger-cell', els => els.map(e =>
    `${e.querySelector('.ledger-val').textContent} ${e.querySelector('.ledger-lbl').textContent}`))).join(' · ');
  const totalQs = await page.evaluate(() => EXAMS.reduce((n, e) => n + e.topics.reduce((m, t) => m + t.questions.length, 0), 0));
  assert.ok(ledger.includes('12 Papers'), ledger);
  assert.ok(ledger.includes(`${totalQs.toLocaleString('en-IN')} Questions`), ledger);
  assert.ok(ledger.includes('0 Results on record') && ledger.includes('0 In progress'), ledger);
  assert.match(await page.textContent('.masthead-dateline'), /No\. 12/);

  // Subject chips sit in a collapsed <details>; opening it shows them.
  const card = '.hall-card[data-exam="october-13"]';
  assert.equal(await page.isVisible(`${card} .hall-topic`), false, 'subjects start collapsed');
  await page.click(`${card} .hall-subjects summary`);
  assert.equal(await page.isVisible(`${card} .hall-topic`), true, 'subjects expand on click');
});

test('exam hall: class tabs and search filter the register, and the tab choice is remembered', async () => {
  await freshHall();
  assert.equal(await page.getAttribute('.hall-tab.active', 'data-filter'), 'all');
  assert.equal((await hallIds()).length, 12);

  await page.click('.hall-tab[data-filter="IX"]');
  assert.deepEqual(await hallIds(), idsOf('IX'));
  assert.equal(await page.getAttribute('.hall-tab[data-filter="IX"]', 'aria-selected'), 'true');
  await page.reload();
  await page.waitForSelector('.hall-card');
  assert.deepEqual(await hallIds(), idsOf('IX'), 'Class IX tab is remembered after reload');

  await page.click('.hall-tab[data-filter="XII"]');
  assert.deepEqual(await hallIds(), idsOf('XII'));

  await page.click('.hall-tab[data-filter="all"]');
  await page.fill('#hallSearch', 'PICKLE');
  assert.deepEqual(await hallIds(), ['august-21', 'september-26'], 'search is case-insensitive and reads subjects');
  await page.fill('#hallSearch', 'no such paper');
  assert.equal((await hallIds()).length, 0);
  assert.ok((await page.textContent('.hall-empty')).includes('no such paper'));
  await page.click('.hall-empty .hall-link');
  assert.equal((await hallIds()).length, 12, 'clearing the search restores the register');
});

test('August flow: begin -> setup -> 150 questions with 2:30:00 timer', async () => {
  await freshHall();
  await page.click('.hall-card[data-exam="august-01"] .btn-primary');
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
  await page.click('.hall-card[data-exam="august-01"] .btn-primary');
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
  await page.click('.hall-card[data-exam="august-21"] .btn-primary');
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
  await page.click('.hall-card[data-exam="august-21"] .btn-primary');
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
  await page.click('.hall-card[data-exam="august-01"] .btn-primary');
  await page.waitForSelector('.mode-card');
  await page.click('.btn-primary');
  await page.waitForSelector('.q-panel');

  await page.evaluate(() => selectOption(1));
  const savedBefore = await page.evaluate(() => Object.keys(State.answers).length);
  assert.equal(savedBefore, 1);

  await page.reload();
  await page.waitForSelector('.hall-card');
  const resumeBtn = await page.$$eval('.hall-card[data-exam="august-01"] .btn-primary', els =>
    els.map(e => e.textContent).find(t => t.includes('Resume')));
  assert.ok(resumeBtn, 'resume button present after reload');

  await page.click('.hall-card[data-exam="august-01"] .btn-primary');
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
  await page.click('.hall-card[data-exam="july"] .btn-primary');
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
  await page.click('.hall-card[data-exam="august-01"] .btn-primary');
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
  const historyText = await page.$$eval('.hall-card[data-exam="august-01"] .hall-history', els =>
    els.map(e => e.textContent).join(' '));
  assert.ok(historyText.includes('600'), 'history shows best score');
});

test('September 18 flow: 70 questions (50 MCQ + 20 written), 3h timer, written sheet + mailto', async () => {
  await freshHall();
  await page.click('.hall-card[data-exam="september-18"] .btn-primary');
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
  for (const [examId, expectedMarks] of [['september-22', '2 marks'], ['september-26', '2 marks']]) {
    await freshHall();
    await page.click(`.hall-card[data-exam="${examId}"] .btn-primary`);
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
  await page.click('.hall-card[data-exam="october-13"] .btn-primary');
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
  assert.ok((await page.textContent('.score-kicker')).includes('October 13 Examination'));
  assert.ok(label.includes('out of 480'), label);
  assert.ok(label.includes('50.0% of questions correct'), label);
  const facts = (await page.textContent('.score-facts')).replace(/\s+/g, ' ');
  assert.ok(facts.includes('80 of 120 attempted'), facts);
  assert.ok(facts.includes('75.0% right when attempted'), facts);
  assert.ok(facts.includes('20 marks lost to negative marking'), facts);
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
  const history = await page.textContent('.hall-card[data-exam="october-13"] .hall-history');
  assert.ok(history.includes('220/480 · 50.0%'), history);
  await page.click('.hall-card[data-exam="october-13"] .hall-link');
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

test('setup: Select all / Clear and a live summary of the chosen subjects', async () => {
  await openOctober13Setup();
  const summary = () => page.textContent('#topicSummary').then(t => t.replace(/\s+/g, ' '));
  assert.ok((await summary()).includes('Full paper — all 13 subjects · 120 questions · 2:00:00 on the clock'), await summary());

  await page.click('.topic-row[data-topic="communication-skills"]');
  await page.click('.topic-row[data-topic="number-systems"]');
  assert.ok((await summary()).includes('2 of 13 subjects · 18 questions'), await summary());

  await page.click('.topic-tool:has-text("Select all")');
  assert.equal(await page.$$eval('.topic-row.selected', els => els.length), 13);
  assert.ok((await summary()).includes('Full paper'), await summary());

  await page.click('.topic-tool:has-text("Clear")');
  assert.equal(await page.$$eval('.topic-row.selected', els => els.length), 0);
  await page.click('.mode-card[data-mode="practice"]');
  assert.ok((await summary()).includes('untimed practice'), await summary());
});

test('exam screen: letter keys, clear response, palette groups and filters, progress bar, sticky timer', async () => {
  await openOctober13Setup();
  await page.click('.btn-primary');
  await page.waitForSelector('.q-panel');

  // 13 subject headings in the palette, 120 buttons
  assert.equal(await page.$$eval('.palette-group', els => els.length), 13);
  assert.equal(await page.$$eval('.p-btn', els => els.length), 120);

  // A–D keys answer like 1–4; Clear response removes the answer (no negative mark when blank)
  await page.keyboard.press('c');
  assert.equal(await page.evaluate(() => State.answers[0]), 2);
  assert.equal(await page.getAttribute('#qPanel .opt >> nth=2', 'aria-checked'), 'true');
  await page.click('.btn-clear');
  assert.equal(await page.evaluate(() => State.answers[0]), undefined);
  assert.equal(await page.$$eval('.btn-clear', els => els.length), 0, 'clear button hides when nothing is chosen');
  await page.keyboard.press('a');
  await page.keyboard.press('m');
  await page.keyboard.press('ArrowRight');
  await page.keyboard.press('4');
  assert.deepEqual(await page.evaluate(() => [State.answers[0], State.answers[1], [...State.marked]]), [0, 3, [0]]);

  // progress bar tracks answered questions
  const width = await page.$eval('#progressFill', el => el.style.width);
  assert.equal(parseFloat(width).toFixed(3), (2 / 120 * 100).toFixed(3));

  // palette filters
  await page.click('.pf-btn[data-pf="marked"]');
  assert.deepEqual(await page.$$eval('.p-btn', els => els.map(e => e.textContent)), ['1', '2'], 'marked Q1 + current Q2');
  await page.click('.pf-btn[data-pf="pending"]');
  assert.equal(await page.$$eval('.p-btn', els => els.length), 119, '118 unanswered + the current one');
  await page.click('.pf-btn[data-pf="all"]');
  assert.ok(await page.$eval('.p-btn >> nth=0', el => el.classList.contains('answered-marked')));

  // the header (and timer) stays pinned while the page scrolls
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  const headerTop = await page.$eval('.exam-header', el => Math.round(el.getBoundingClientRect().top));
  assert.equal(headerTop, 0, 'exam header is sticky');
  assert.ok(await page.isVisible('#timer'));
});

test('written answers: typing digits, "m" and arrows stays in the textarea (no shortcuts fire)', async () => {
  await freshHall();
  await page.click('.hall-card[data-exam="september-18"] .btn-primary');
  await page.waitForSelector('.mode-card');
  await page.click('.btn-primary');
  await page.waitForSelector('.q-panel');
  await page.evaluate(() => jumpTo(50));
  await page.click('.answer-area');
  const text = 'Push adds 1 item, then m marks 2 to 4';
  await page.keyboard.type(text);
  await page.keyboard.press('ArrowLeft');
  await page.keyboard.press('ArrowRight');
  assert.equal(await page.inputValue('.answer-area'), text);
  assert.match(await page.textContent('.q-number'), /Question 51 of 70/);
  assert.equal(await page.evaluate(() => State.marked.size), 0);
  assert.equal(await page.evaluate(() => State.written[50]), text);

  // the hall counts the written answer when offering to resume
  await page.evaluate(() => backToHall());
  await page.waitForSelector('.hall-card');
  const resume = (await page.textContent('.hall-card[data-exam="september-18"] .btn-primary')).replace(/\s+/g, ' ');
  assert.ok(resume.includes('(1/70 answered)'), resume);
  assert.ok((await page.textContent('.hall-card[data-exam="september-18"] .hall-badge')).includes('In progress'));
});

test('results: explanations in the review, and "practise the questions you missed" runs a mistakes-only round', async () => {
  await openOctober13Setup();
  await page.click('.btn-primary');
  await page.waitForSelector('.q-panel');
  // 100 right, 5 wrong, 15 skipped
  await page.evaluate(() => {
    State.questions.forEach((q, i) => {
      if (i < 100) State.answers[q.globalIndex] = q.answer;
      else if (i < 105) State.answers[q.globalIndex] = (q.answer + 1) % 4;
    });
    renderPalette();
  });
  await page.click('.q-palette .btn-submit');
  await page.click('#cfSubmit');
  await page.waitForSelector('.score-ring');
  assert.equal(await page.textContent('.score-main'), '395');
  assert.equal(await page.$$eval('.review-explain', els => els.length), 120, 'every reviewed MCQ shows its explanation');
  assert.ok((await page.textContent('.review-explain >> nth=0')).includes('Why'));
  const revise = await page.$$eval('.revise-note', els => els.map(e => e.textContent));
  assert.equal(revise.length, 1, 'weak subjects are called out');
  assert.ok(revise[0].includes('Number Systems'), revise[0]);

  await page.click('.result-practise');
  await page.waitForSelector('.q-panel');
  assert.match(await page.textContent('.q-number'), /Question 1 of 20/);
  assert.equal(await page.$$eval('#timer', els => els.length), 0, 'mistakes round is untimed practice');
  assert.ok((await page.textContent('.exam-paper-name')).includes('Mistakes'));
  const first = await page.evaluate(() => State.questions[0].globalIndex);
  assert.equal(first, 100, 'the first missed question is Q101');

  // the round survives a reload and resumes with the same 20 questions
  await page.keyboard.press('1');
  await page.reload();
  await page.waitForSelector('.hall-card');
  const resume = (await page.textContent('.hall-card[data-exam="october-13"] .btn-primary')).replace(/\s+/g, ' ');
  assert.ok(resume.includes('Resume Practice (1/20 answered)'), resume);
  await page.click('.hall-card[data-exam="october-13"] .btn-primary');
  await page.waitForSelector('.q-panel');
  assert.match(await page.textContent('.q-number'), /of 20/);

  await page.click('.q-palette .btn-submit');
  await page.click('#cfSubmit');
  await page.waitForSelector('.score-ring');
  assert.ok((await page.textContent('.score-kicker')).includes('Mistakes practice'));
  await page.click('.btn-restart');
  await page.waitForSelector('.hall-card');
  const history = (await page.textContent('.hall-card[data-exam="october-13"] .hall-history')).replace(/\s+/g, ' ');
  assert.ok(history.includes('/80') && history.includes('practice · mistakes'), history);
  assert.ok(history.includes('395/480'), history);
});

for (const id of ['october-20', 'october-24', 'october-28', 'october-31']) {
  test(`${id} (Class IX): 8 subjects, 80 questions, 1:30:00, every diagram and table renders, results add up`, async () => {
    await freshHall();
    await page.click(`.hall-card[data-exam="${id}"] .btn-primary`);
    await page.waitForSelector('.mode-card');
    assert.equal(await page.$$eval('.topic-row', els => els.length), 8);
    await page.click('.btn-primary');
    await page.waitForSelector('.q-panel');
    assert.match(await page.textContent('.q-number'), /Question 1 of 80/);
    assert.equal(await page.textContent('#timer'), '1:30:00');
    assert.equal(await page.$$eval('.palette-group', els => els.length), 8);

    const failures = [];
    const diagramIdx = await page.evaluate(() => State.questions.map((q, i) => (q.diagram ? i : -1)).filter(i => i >= 0));
    assert.ok(diagramIdx.length >= 3, `${id}: ${diagramIdx.length} diagrams`);
    for (const i of diagramIdx) {
      await page.evaluate(idx => { State.currentIndex = idx; renderQuestion(); }, i);
      try {
        await page.waitForSelector('#qPanel .mermaid-frame svg', { timeout: 8000 });
        if (await page.$$eval('#qPanel .mermaid-error', els => els.length)) failures.push(`Q${i + 1}: error class`);
      } catch (e) {
        failures.push(`Q${i + 1}: no SVG rendered`);
      }
    }
    assert.deepEqual(failures, [], `${id} diagram failures`);

    const tableIdx = await page.evaluate(() => State.questions.map((q, i) => (q.q.includes('q-table') ? i : -1)).filter(i => i >= 0));
    for (const i of tableIdx) {
      await page.evaluate(idx => { State.currentIndex = idx; renderQuestion(); }, i);
      const border = await page.$eval('#qPanel .q-table td', el => getComputedStyle(el).borderTopStyle);
      assert.equal(border, 'solid', `${id} Q${i + 1}: spreadsheet table is styled`);
    }
    if (id === 'october-28') assert.ok(tableIdx.length >= 6, `Calc paper shows cell tables (${tableIdx.length})`);

    // 50 right, 10 wrong, 20 skipped → 50×4 − 10 = 190 / 320
    await page.evaluate(() => {
      State.questions.forEach((q, i) => {
        if (i < 50) State.answers[q.globalIndex] = q.answer;
        else if (i < 60) State.answers[q.globalIndex] = (q.answer + 2) % 4;
      });
      renderPalette();
    });
    await page.click('.q-palette .btn-submit');
    await page.click('#cfSubmit');
    await page.waitForSelector('.score-ring');
    assert.equal(await page.textContent('.score-main'), '190');
    assert.deepEqual(await page.$$eval('.score-cell-val', els => els.map(e => e.textContent.trim())), ['50', '10', '20', '190']);
    assert.ok((await page.textContent('.score-label')).includes('out of 320 · 62.5% of questions correct'));
    assert.equal(await page.$$eval('.breakdown-item', els => els.length), 8);
    assert.ok((await page.textContent('.result-practise')).includes('30 questions you missed'));
  });
}
