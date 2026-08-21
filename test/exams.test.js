const { test } = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');

function loadExams() {
  const sandbox = { console };
  sandbox.window = sandbox;
  sandbox.globalThis = sandbox;

  const run = (file, extra = '') =>
    vm.runInNewContext(fs.readFileSync(path.join(ROOT, file), 'utf8') + extra, sandbox, { filename: file });

  run('questions.js', ';globalThis.QUESTION_BANK = QUESTION_BANK;');
  fs.readdirSync(path.join(ROOT, 'exams/august/topics'))
    .filter(f => f.endsWith('.js'))
    .sort()
    .forEach(f => run('exams/august/topics/' + f));
  fs.readdirSync(path.join(ROOT, 'exams/august21/topics'))
    .filter(f => f.endsWith('.js'))
    .sort()
    .forEach(f => run('exams/august21/topics/' + f));
  run('exams/july.js');
  run('exams/august.js');
  run('exams/august21.js');
  run('exams/index.js');
  return sandbox.EXAMS;
}

const exams = loadExams();

test('registry exposes all three exam packages', () => {
  assert.ok(Array.isArray(exams), 'EXAMS must be an array');
  assert.equal(exams.length, 3);
  const ids = exams.map(e => e.id);
  assert.ok(ids.includes('july'), 'july package present');
  assert.ok(ids.includes('august-01'), 'august-01 package present');
  assert.ok(ids.includes('august-21'), 'august-21 package present');
});

test('July package keeps its original 120 questions, 4 topics, 2h, +4/-1', () => {
  const july = exams.find(e => e.id === 'july');
  const total = july.topics.reduce((n, t) => n + t.questions.length, 0);
  assert.equal(july.topics.length, 4);
  assert.equal(total, 120);
  assert.equal(july.duration, 7200);
  assert.equal(july.scoring.correct, 4);
  assert.equal(july.scoring.incorrect, -1);
});

test('August 01 package: 150 questions, 6 topics, 2.5h, +4/-1, max 600', () => {
  const aug = exams.find(e => e.id === 'august-01');
  const total = aug.topics.reduce((n, t) => n + t.questions.length, 0);
  assert.equal(aug.topics.length, 6);
  assert.equal(total, 150);
  assert.equal(aug.duration, 9000);
  assert.equal(aug.scoring.correct, 4);
  assert.equal(aug.scoring.incorrect, -1);
  assert.equal(total * aug.scoring.correct, 600);
});

test('August covers all mandated syllabus areas', () => {
  const aug = exams.find(e => e.id === 'august-01');
  const names = aug.topics.map(t => t.name.toLowerCase());
  assert.ok(names.some(n => n.includes('concept') || n.includes('component')));
  assert.ok(names.some(n => n.includes('schema') || n.includes('architect')));
  assert.ok(names.some(n => n.includes('er')));
  assert.ok(names.some(n => n.includes('algebra')));
  assert.ok(names.some(n => n.includes('sql')));
  assert.ok(names.some(n => n.includes('sqlite') || n.includes('python')));
});

test('August 21 package: 120 questions, 6 topics, 2h, +4/-1, max 480', () => {
  const a21 = exams.find(e => e.id === 'august-21');
  const total = a21.topics.reduce((n, t) => n + t.questions.length, 0);
  assert.equal(a21.topics.length, 6);
  assert.equal(total, 120);
  assert.equal(a21.duration, 7200);
  assert.equal(a21.scoring.correct, 4);
  assert.equal(a21.scoring.incorrect, -1);
  assert.equal(total * a21.scoring.correct, 480);
});

test('August 21 covers all mandated file-handling syllabus areas', () => {
  const a21 = exams.find(e => e.id === 'august-21');
  const names = a21.topics.map(t => t.name.toLowerCase());
  assert.ok(names.some(n => n.includes('fundamental') || n.includes('mode')));
  assert.ok(names.some(n => n.includes('reading')));
  assert.ok(names.some(n => n.includes('writing')));
  assert.ok(names.some(n => n.includes('pointer') || n.includes('seek')));
  assert.ok(names.some(n => n.includes('binary') || n.includes('pickle')));
  assert.ok(names.some(n => n.includes('csv')));
});

test('August 21 diagrams are flowcharts with captions (SVG rendering covered in render.test.js)', () => {
  const a21 = exams.find(e => e.id === 'august-21');
  let diagrams = 0;
  for (const topic of a21.topics) {
    for (const [i, q] of topic.questions.entries()) {
      if (!q.diagram) continue;
      diagrams++;
      assert.ok(q.diagram.startsWith('flowchart '), `${topic.key}#${i}: diagram must be a flowchart`);
      assert.ok(q.diagram.length <= 2000, `${topic.key}#${i}: diagram too large`);
      assert.ok(typeof q.diagramCaption === 'string' && q.diagramCaption.length > 0,
        `${topic.key}#${i}: diagramCaption missing`);
    }
  }
  assert.ok(diagrams >= 4, `expected >= 4 diagram questions, found ${diagrams}`);
});

test('every question is structurally valid', () => {
  const problems = [];
  for (const exam of exams) {
    for (const topic of exam.topics) {
      for (const [i, q] of topic.questions.entries()) {
        const id = `${exam.id}/${topic.key}#${i}`;
        if (typeof q.q !== 'string' || q.q.length === 0) problems.push(`${id}: empty q`);
        if (!Array.isArray(q.options) || q.options.length !== 4) problems.push(`${id}: options != 4`);
        if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3) problems.push(`${id}: bad answer ${q.answer}`);
        if (!['E', 'M', 'H'].includes(q.diff)) problems.push(`${id}: bad diff ${q.diff}`);
        if (typeof q.explain !== 'string' || q.explain.length === 0) problems.push(`${id}: empty explain`);
        if (new Set(q.options).size !== 4) problems.push(`${id}: duplicate options`);
        if (q.diagram && typeof q.diagram !== 'string') problems.push(`${id}: diagram not a string`);
        if (q.diagram && q.diagram.length > 2000) problems.push(`${id}: diagram too large`);
      }
    }
  }
  assert.deepEqual(problems, []);
});

test('no duplicate questions across the whole registry', () => {
  const seen = new Map();
  for (const exam of exams) {
    for (const topic of exam.topics) {
      for (const q of topic.questions) {
        const key = q.q.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
        if (seen.has(key)) {
          assert.fail(`duplicate question text in ${exam.id}/${topic.key} and ${seen.get(key)}: ${key.slice(0, 80)}`);
        }
        seen.set(key, `${exam.id}/${topic.key}`);
      }
    }
  }
});

test('every August ER diagram parses with the real mermaid parser', async () => {
  const mermaid = (await import('mermaid')).default;
  mermaid.initialize({ startOnLoad: false });
  const aug = exams.find(e => e.id === 'august-01');
  const failures = [];
  let checked = 0;
  for (const topic of aug.topics) {
    for (const [i, q] of topic.questions.entries()) {
      if (!q.diagram) continue;
      if (q.diagram.trimStart().startsWith('erDiagram')) {
        checked++;
        try {
          await mermaid.parse(q.diagram);
        } catch (e) {
          failures.push(`${topic.key}#${i}: ${e.message.split('\n')[0]}`);
        }
      }
    }
  }
  assert.ok(checked >= 12, `expected >= 12 erDiagram questions, found ${checked}`);
  assert.deepEqual(failures, [], 'erDiagram parse failures');
});
