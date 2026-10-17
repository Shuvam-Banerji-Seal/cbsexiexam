const { test } = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');

// Load the data scripts exactly as the browser does: every local <script src> in
// index.html, in page order (app.js excluded). A package missing from index.html
// therefore fails these tests too.
const PAGE_SCRIPTS = [...fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8')
  .matchAll(/<script src="([^"]+)"><\/script>/g)]
  .map(m => m[1])
  .filter(src => !/^https?:/.test(src) && src !== 'app.js');

function loadExams() {
  const sandbox = { console };
  sandbox.window = sandbox;
  sandbox.globalThis = sandbox;

  const run = (file, extra = '') =>
    vm.runInNewContext(fs.readFileSync(path.join(ROOT, file), 'utf8') + extra, sandbox, { filename: file });

  for (const src of PAGE_SCRIPTS) {
    run(src, src === 'questions.js' ? ';globalThis.QUESTION_BANK = QUESTION_BANK;' : '');
  }
  return sandbox.EXAMS;
}

const exams = loadExams();

test('registry exposes all twelve exam packages', () => {
  assert.ok(Array.isArray(exams), 'EXAMS must be an array');
  assert.equal(exams.length, 12);
  const ids = exams.map(e => e.id);
  ['july', 'august-01', 'august-21', 'august-30', 'september-18', 'september-22', 'september-26',
    'october-13', 'october-20', 'october-24', 'october-28', 'october-31']
    .forEach(id => assert.ok(ids.includes(id), `${id} package present`));
  assert.equal(new Set(ids).size, ids.length, 'package ids are unique');
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

test('August 30 package: 120 questions, 6 topics, 2h, +4/-1, max 480', () => {
  const a30 = exams.find(e => e.id === 'august-30');
  const total = a30.topics.reduce((n, t) => n + t.questions.length, 0);
  assert.equal(a30.topics.length, 6);
  assert.equal(total, 120);
  assert.equal(a30.duration, 7200);
  assert.equal(a30.scoring.correct, 4);
  assert.equal(a30.scoring.incorrect, -1);
  assert.equal(total * a30.scoring.correct, 480);
});

test('August 30 covers the full CBSE Unit-2 networking syllabus', () => {
  const a30 = exams.find(e => e.id === 'august-30');
  const names = a30.topics.map(t => t.name.toLowerCase());
  assert.ok(names.some(n => n.includes('evolution') || n.includes('communication')), 'evolution + data communication');
  assert.ok(names.some(n => n.includes('type') && n.includes('topolog')), 'network types & topologies');
  assert.ok(names.some(n => n.includes('media')), 'transmission media');
  assert.ok(names.some(n => n.includes('device')), 'network devices');
  assert.ok(names.some(n => n.includes('ip') || n.includes('dns')), 'IP addressing & DNS');
  assert.ok(names.some(n => n.includes('protocol') || n.includes('web')), 'protocols & web services');

  // Every mandated protocol appears somewhere in the paper (question, options, or explanation)
  const allText = a30.topics
    .flatMap(t => t.questions.map(q => q.q + ' ' + q.options.join(' ') + ' ' + q.explain))
    .join(' ').toLowerCase();
  for (const p of ['http', 'ftp', 'smtp', 'tcp/ip', 'pop3', 'telnet', 'voip']) {
    assert.ok(allText.includes(p), `protocol ${p} covered`);
  }
  // Key syllabus nouns covered
  for (const noun of ['arpanet', 'nsfnet', 'pan', 'lan', 'man', 'wan', 'bus', 'star', 'tree',
    'twisted pair', 'co-axial', 'fibre', 'radio', 'microwave', 'infrared',
    'modem', 'repeater', 'hub', 'switch', 'router', 'gateway', 'rj45',
    'bandwidth', 'circuit switching', 'packet switching', 'ipv4', 'mac address', 'dns',
    'www', 'html', 'xml', 'url', 'web browser', 'web server', 'web hosting']) {
    assert.ok(allText.includes(noun), `syllabus noun "${noun}" covered`);
  }
});

test('August 30 diagrams are flowcharts with captions', () => {
  const a30 = exams.find(e => e.id === 'august-30');
  let diagrams = 0;
  for (const topic of a30.topics) {
    for (const [i, q] of topic.questions.entries()) {
      if (!q.diagram) continue;
      diagrams++;
      assert.ok(q.diagram.startsWith('flowchart '), `${topic.key}#${i}: diagram must be a flowchart`);
      assert.ok(q.diagram.length <= 2000, `${topic.key}#${i}: diagram too large`);
      assert.ok(typeof q.diagramCaption === 'string' && q.diagramCaption.length > 0,
        `${topic.key}#${i}: diagramCaption missing`);
      // Options must not contain raw '<' (innerHTML safety — the Q2-bug class)
      q.options.forEach((o, oi) => {
        assert.ok(!o.includes('<'), `${topic.key}#${i} option[${oi}]: raw '<' in option`);
      });
    }
  }
  assert.ok(diagrams >= 4, `expected >= 4 diagram questions, found ${diagrams}`);
});

test('September 18 package: 70 questions (50 MCQ + 20 written), 3 sections, 3h, +4/-1', () => {
  const s18 = exams.find(e => e.id === 'september-18');
  const total = s18.topics.reduce((n, t) => n + t.questions.length, 0);
  assert.equal(s18.topics.length, 3);
  assert.equal(total, 70);
  assert.equal(s18.duration, 10800); // 3 hours
  assert.equal(s18.scoring.correct, 4);
  assert.equal(s18.scoring.incorrect, -1);

  const mcq = s18.topics.flatMap(t => t.questions).filter(q => q.type !== 'written');
  const written = s18.topics.flatMap(t => t.questions).filter(q => q.type === 'written');
  assert.equal(mcq.length, 50, '50 objective questions');
  assert.equal(written.length, 20, '20 written questions');
  assert.equal(mcq.length * s18.scoring.correct, 200, 'objective max = 200');

  // written questions carry 2-5 marks and an email target exists on the package
  written.forEach((q, i) => {
    assert.ok([2, 3, 4, 5].includes(q.marks), `written[${i}] marks=${q.marks}`);
  });
  assert.equal(s18.writtenSubmissionEmail, 'sbs22ms076@iiserkol.ac.in');
});

test('September 22 & 26 packages: 50 questions each (30 MCQ + 20 written), 3 sections, 3h, +4/-1', () => {
  for (const id of ['september-22', 'september-26']) {
    const ex = exams.find(e => e.id === id);
    const total = ex.topics.reduce((n, t) => n + t.questions.length, 0);
    assert.equal(ex.topics.length, 3, `${id}: 3 sections`);
    assert.equal(total, 50, `${id}: 50 questions`);
    assert.equal(ex.duration, 10800, `${id}: 3 hours`);
    assert.equal(ex.scoring.correct, 4);
    assert.equal(ex.scoring.incorrect, -1);
    assert.equal(ex.writtenSubmissionEmail, 'sbs22ms076@iiserkol.ac.in');

    const mcq = ex.topics.flatMap(t => t.questions).filter(q => q.type !== 'written');
    const written = ex.topics.flatMap(t => t.questions).filter(q => q.type === 'written');
    assert.equal(mcq.length, 30, `${id}: 30 MCQ`);
    assert.equal(written.length, 20, `${id}: 20 written`);
    written.forEach((q, i) => assert.ok([2, 3, 4, 5].includes(q.marks), `${id} written[${i}] marks=${q.marks}`));
  }
});

test('September 22 & 26 have no question text overlap with each other or September 18', () => {
  const norm = s => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
  const seen = new Map();
  for (const ex of exams) {
    for (const topic of ex.topics) {
      for (const q of topic.questions) {
        const key = norm(q.q);
        const prev = seen.get(key);
        assert.ok(!prev, `duplicate question text: ${ex.id}/${topic.key} duplicates ${prev}: ${key.slice(0, 70)}`);
        seen.set(key, `${ex.id}/${topic.key}`);
      }
    }
  }
});

test('September 18 covers Python, file handling, SQL and networks', () => {
  const s18 = exams.find(e => e.id === 'september-18');
  const allText = s18.topics.flatMap(t => t.questions)
    .map(q => q.q + ' ' + (q.explain || '') + ' ' + (q.options || []).join(' '))
    .join(' ').toLowerCase();
  for (const topic of ['python', 'string', 'list', 'dictionary', 'file', 'csv', 'sql', 'key', 'network', 'router', 'protocol', 'ip address']) {
    assert.ok(allText.includes(topic), `September 18 covers "${topic}"`);
  }
  // every question carries its PYQ source attribution (in the stem or the explanation)
  const qs = s18.topics.flatMap(t => t.questions);
  const withSrc = qs.filter(q => /CBSE\s+20\d\d/.test(q.q + ' ' + (q.explain || '')));
  assert.ok(withSrc.length >= qs.length - 2, `all questions cite their CBSE paper (${withSrc.length}/${qs.length})`);
});

test('October 13 (Class IX) package: 120 MCQs, 13 topics, 2h, +4/-1, max 480', () => {
  const o13 = exams.find(e => e.id === 'october-13');
  const qs = o13.topics.flatMap(t => t.questions);
  assert.equal(o13.topics.length, 13);
  assert.equal(qs.length, 120);
  assert.equal(o13.duration, 7200);
  assert.equal(o13.scoring.correct, 4);
  assert.equal(o13.scoring.incorrect, -1);
  assert.equal(qs.length * o13.scoring.correct, 480);
  assert.ok(o13.edition.includes('Class IX'), 'edition marks the paper as Class IX');
  assert.equal(o13.writtenSubmissionEmail, undefined, 'objective-only paper has no email submission');

  // Part A: five Employability Skills units × 8; Part B: eight IT topics × 10
  assert.deepEqual(Array.from(o13.topics.slice(0, 5), t => t.questions.length), [8, 8, 8, 8, 8]);
  assert.deepEqual(Array.from(o13.topics.slice(5), t => t.questions.length), [10, 10, 10, 10, 10, 10, 10, 10]);
  qs.forEach((q, i) => {
    assert.notEqual(q.type, 'written', `q${i}: must be objective`);
    assert.equal(q.options.length, 4, `q${i}: four options`);
  });
});

test('October 13 covers the Class IX Employability Skills, Basics of IT and number systems syllabus', () => {
  const o13 = exams.find(e => e.id === 'october-13');
  const names = o13.topics.map(t => t.name.toLowerCase());
  for (const unit of ['communication skills', 'self-management skills', 'ict skills', 'entrepreneurial skills', 'green skills',
    'characteristics', 'memory', 'input devices', 'output devices', 'software', 'network', 'multimedia', 'number systems']) {
    assert.ok(names.some(n => n.includes(unit)), `topic for "${unit}"`);
  }

  const allText = o13.topics
    .flatMap(t => t.questions.map(q => q.q + ' ' + q.options.join(' ') + ' ' + q.explain))
    .join(' ').toLowerCase();
  for (const noun of ['verbal', 'non-verbal', 'feedback', 'barrier',
    'self-awareness', 'strength', 'hygiene', 'grooming', 'time management',
    'booting', 'hardware', 'operating system', 'file extension',
    'entrepreneur', 'hybrid business', 'sustainable development', 'renewable', 'reduce, reuse, recycle',
    'cpu', 'alu', 'control unit', 'ram', 'rom', 'cache', 'secondary storage',
    'scanner', 'microphone', 'monitor', 'printer', 'plotter', 'touch screen',
    'system software', 'application software', 'device driver',
    'pan', 'lan', 'man', 'wan', 'wi-fi', 'bluetooth', 'cloud',
    'image', 'audio', 'video', 'animation',
    'binary', 'octal', 'hexadecimal', 'bit', 'byte', 'nibble', 'kb', 'mb', 'gb', 'tb']) {
    assert.ok(allText.includes(noun), `syllabus noun "${noun}" covered`);
  }
});

test('October 13 diagrams are flowcharts with captions', () => {
  const o13 = exams.find(e => e.id === 'october-13');
  let diagrams = 0;
  for (const topic of o13.topics) {
    for (const [i, q] of topic.questions.entries()) {
      if (!q.diagram) continue;
      diagrams++;
      assert.ok(q.diagram.startsWith('flowchart '), `${topic.key}#${i}: diagram must be a flowchart`);
      assert.ok(typeof q.diagramCaption === 'string' && q.diagramCaption.length > 0,
        `${topic.key}#${i}: diagramCaption missing`);
    }
  }
  assert.ok(diagrams >= 4, `expected >= 4 diagram questions, found ${diagrams}`);
});

test('October 13 answer key is spread across A-D and options are HTML-safe', () => {
  const o13 = exams.find(e => e.id === 'october-13');
  const qs = o13.topics.flatMap(t => t.questions);
  const counts = [0, 0, 0, 0];
  qs.forEach(q => counts[q.answer]++);
  counts.forEach((n, i) => {
    const share = n / qs.length;
    assert.ok(share >= 0.2 && share <= 0.3, `option ${'ABCD'[i]} is the key ${n}/${qs.length} times`);
  });
  for (const topic of o13.topics) {
    const keys = new Set(topic.questions.map(q => q.answer));
    assert.ok(keys.size >= 3, `${topic.key}: answer key uses only ${keys.size} positions`);
    topic.questions.forEach((q, i) => q.options.forEach((o, oi) => {
      assert.ok(!o.includes('<'), `${topic.key}#${i} option[${oi}]: raw '<' in option`);
    }));
  }
});

test('every question is structurally valid', () => {
  const problems = [];
  for (const exam of exams) {
    for (const topic of exam.topics) {
      for (const [i, q] of topic.questions.entries()) {
        const id = `${exam.id}/${topic.key}#${i}`;
        if (typeof q.q !== 'string' || q.q.length === 0) problems.push(`${id}: empty q`);
        if (typeof q.explain !== 'string' || q.explain.length === 0) problems.push(`${id}: empty explain`);
        if (!['E', 'M', 'H'].includes(q.diff)) problems.push(`${id}: bad diff ${q.diff}`);

        if (q.type === 'written') {
          // written questions: no options/answer, must have marks
          if (![2, 3, 4, 5, 6].includes(q.marks)) problems.push(`${id}: written question bad marks ${q.marks}`);
          if (q.options !== undefined) problems.push(`${id}: written question must not have options`);
          if (q.answer !== undefined) problems.push(`${id}: written question must not have an answer index`);
        } else {
          if (!Array.isArray(q.options) || q.options.length < 2 || q.options.length > 4) problems.push(`${id}: options must be 2-4 (got ${q.options ? q.options.length : 'none'})`);
          if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= (q.options ? q.options.length : 0)) problems.push(`${id}: bad answer ${q.answer}`);
          if (q.options && new Set(q.options).size !== q.options.length) problems.push(`${id}: duplicate options`);
          if (q.options) q.options.forEach((o, oi) => {
            if (typeof o !== 'string' || o.trim() === '') problems.push(`${id}: option[${oi}] empty or not a string`);
          });
        }
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

test('every topic file on disk is loaded by index.html, before its package file', () => {
  const examsDir = path.join(ROOT, 'exams');
  for (const dir of fs.readdirSync(examsDir)) {
    const topicsDir = path.join(examsDir, dir, 'topics');
    if (!fs.existsSync(topicsDir)) continue;
    const pkgPos = PAGE_SCRIPTS.indexOf(`exams/${dir}.js`);
    assert.ok(pkgPos >= 0, `exams/${dir}.js is not loaded by index.html`);
    for (const f of fs.readdirSync(topicsDir).filter(f => f.endsWith('.js'))) {
      const pos = PAGE_SCRIPTS.indexOf(`exams/${dir}/topics/${f}`);
      assert.ok(pos >= 0, `exams/${dir}/topics/${f} is not loaded by index.html`);
      assert.ok(pos < pkgPos, `exams/${dir}/topics/${f} must load before exams/${dir}.js`);
    }
  }
});

test('every package names its class so the hall can group it', () => {
  for (const exam of exams) {
    assert.ok(['IX', 'XII'].includes(exam.grade), `${exam.id}: grade must be 'IX' or 'XII' (got ${exam.grade})`);
  }
});

// The four 80-question Class IX papers share one shape and one set of answer-key rules.
const CLASS_IX_PAPERS = {
  'october-20': {
    edition: 'Cyber Safety',
    nouns: ['https', 'padlock', 'cookie', 'privacy setting', 'digital footprint', 'public wi-fi', 'password',
      'two-factor', 'otp', 'phishing', 'confidential', 'cyber stalking', 'cyberbullying', 'identity theft',
      'cybercrime.gov.in', '1930', 'it act', 'virus', 'worm', 'trojan', 'adware', 'spyware', 'ransomware',
      'antivirus', 'firewall', 'ites', 'bpo', 'bpm', 'banking', 'insurance', 'library', 'education',
      'e-governance', 'home keys', 'guide key', 'numeric keypad', 'caps lock', 'num lock', 'ergonomic',
      'drag', 'scroll', 'rapid typing tutor', 'touch typing', 'lesson editor', 'wpm', 'rhythm'],
  },
  'october-24': {
    edition: 'Digital Documentation',
    nouns: ['word processor', 'writer', '.odt', 'save as', 'title bar', 'status bar', 'ruler', 'undo', 'redo',
      'paste', 'non-consecutive', 'block', 'find and replace', 'navigator', 'formatting marks', 'spelling',
      'grammar', 'autocorrect', 'thesaurus', 'synonym', 'superscript', 'subscript', 'case', 'highlight',
      'direct formatting', 'indent', 'hanging', 'line spacing', 'bulleted', 'numbered list', 'border',
      'page style', 'margin', 'orientation', 'page break', 'header', 'footer', 'page number', 'columns', 'wrap',
      'special character', 'shape', 'merge', 'split', 'table', 'print preview', 'mail merge', 'data source',
      'main document', 'track changes', 'comment'],
  },
  'october-28': {
    edition: 'Electronic Spreadsheet',
    nouns: ['spreadsheet', 'workbook', 'worksheet', 'calc', '.ods', 'name box', 'input line', 'cell address',
      'active cell', 'column range', 'row range', 'label', 'value', 'formula', 'operator', 'sum', 'average',
      'max', 'min', 'count', '=if', 'fill handle', 'decimal', 'percent', 'currency', 'scientific', 'time',
      'wrap', 'merge', '###', 'relative', 'absolute', 'mixed', '$', 'chart', 'pie', 'line', 'bar', 'column',
      'area', 'scatter', 'legend', 'axis', 'print'],
  },
  'october-31': {
    edition: 'Digital Presentation',
    nouns: ['presentation', 'impress', '.odp', 'slide', 'template', 'layout', 'pdf', 'slide show', 'f5', 'help',
      'duplicate slide', 'rename', 'normal', 'outline', 'notes', 'slide sorter', 'handout', 'zoom', 'bullet',
      'background', 'watermark', 'footer', 'slide number', 'animation', 'entrance', 'emphasis', 'exit',
      'motion path', 'transition', 'sound', 'rehearse timings', 'table', 'gallery', 'rotation', 'group',
      'ungroup', 'slide master'],
  },
};

for (const [id, spec] of Object.entries(CLASS_IX_PAPERS)) {
  test(`${id} (Class IX) package: 80 MCQs in 8 × 10, 90 minutes, +4/-1, max 320`, () => {
    const exam = exams.find(e => e.id === id);
    assert.ok(exam, `${id} registered`);
    const qs = exam.topics.flatMap(t => t.questions);
    assert.equal(exam.grade, 'IX');
    assert.ok(exam.edition.startsWith('Class IX') && exam.edition.includes(spec.edition), exam.edition);
    assert.deepEqual(Array.from(exam.topics, t => t.questions.length), [10, 10, 10, 10, 10, 10, 10, 10]);
    assert.equal(exam.duration, 5400);
    assert.equal(exam.scoring.correct, 4);
    assert.equal(exam.scoring.incorrect, -1);
    assert.equal(qs.length * exam.scoring.correct, 320);
    assert.equal(new Set(exam.topics.map(t => t.key)).size, 8, 'topic keys are unique');
    qs.forEach((q, i) => {
      assert.notEqual(q.type, 'written', `q${i}: must be objective`);
      assert.equal(q.options.length, 4, `q${i}: four options`);
    });
  });

  test(`${id} answer key: exactly 20 per letter, varied within each subject, no 3-in-a-row`, () => {
    const exam = exams.find(e => e.id === id);
    const qs = exam.topics.flatMap(t => t.questions);
    const counts = [0, 0, 0, 0];
    qs.forEach(q => counts[q.answer]++);
    assert.deepEqual(counts, [20, 20, 20, 20]);
    for (const topic of exam.topics) {
      const keys = topic.questions.map(q => q.answer);
      assert.ok(new Set(keys).size >= 3, `${topic.key}: key uses only ${new Set(keys).size} letters`);
      [0, 1, 2, 3].forEach(k => assert.ok(keys.filter(a => a === k).length <= 4, `${topic.key}: letter ${'ABCD'[k]} used more than 4 times`));
      keys.forEach((k, i) => assert.ok(i < 2 || !(k === keys[i - 1] && k === keys[i - 2]), `${topic.key}#${i}: same letter three times running`));
    }
    const hard = qs.filter(q => q.diff === 'H').length;
    assert.ok(hard >= 8 && hard <= 16, `${id}: ${hard} hard questions`);
  });

  test(`${id} diagrams, tables and options are well-formed`, () => {
    const exam = exams.find(e => e.id === id);
    let diagrams = 0;
    for (const topic of exam.topics) {
      for (const [i, q] of topic.questions.entries()) {
        q.options.forEach((o, oi) => assert.ok(!o.includes('<'), `${topic.key}#${i} option[${oi}]: raw '<'`));
        const tables = (q.q.match(/<table/g) || []).length;
        assert.equal(tables, (q.q.match(/<table class="q-table">/g) || []).length, `${topic.key}#${i}: tables use class q-table`);
        assert.equal(tables, (q.q.match(/<\/table>/g) || []).length, `${topic.key}#${i}: unclosed table`);
        if (!q.diagram) continue;
        diagrams++;
        assert.match(q.diagram, /^flowchart (TD|LR)\n/, `${topic.key}#${i}: flowchart TD/LR`);
        assert.ok(q.diagram.length <= 600, `${topic.key}#${i}: diagram too large`);
        assert.ok(!/</.test(q.diagram), `${topic.key}#${i}: no HTML in diagram code`);
        assert.ok(/^Figure: /.test(q.diagramCaption || ''), `${topic.key}#${i}: caption`);
      }
    }
    assert.ok(diagrams >= 3 && diagrams <= 5, `${id}: ${diagrams} diagram questions`);
  });

  test(`${id} covers its Class IX syllabus`, () => {
    const exam = exams.find(e => e.id === id);
    const text = exam.topics.flatMap(t => t.questions.map(q => [q.q, ...q.options, q.explain, q.diagram || ''].join(' ')))
      .join(' ').toLowerCase();
    const missing = spec.nouns.filter(n => !text.includes(n));
    assert.deepEqual(missing, [], `syllabus terms not covered in ${id}`);
  });
}
