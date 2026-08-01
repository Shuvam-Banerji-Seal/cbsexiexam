const State = {
  exam: null,
  mode: 'exam',
  selectedTopics: [],
  questions: [],
  currentIndex: 0,
  answers: {},
  marked: new Set(),
  timerInterval: null,
  timeLeft: 0,
  submitted: false,
  started: false,
  totalTime: 0,
  startedAt: 0,
  savedAt: 0,
};

let questionCounter = 0;
let mermaidSeq = 0;

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function formatTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.innerHTML = str;
  return div.innerHTML;
}

function playSound(type) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'correct') {
      osc.frequency.value = 660;
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    } else if (type === 'incorrect') {
      osc.frequency.value = 180;
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } else if (type === 'submit') {
      [392, 523, 659].forEach((freq, i) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.connect(g);
        g.connect(ctx.destination);
        o.frequency.value = freq;
        g.gain.setValueAtTime(0.12, ctx.currentTime + i * 0.1);
        g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.1 + 0.2);
        o.start(ctx.currentTime + i * 0.1);
        o.stop(ctx.currentTime + i * 0.1 + 0.2);
      });
    }
  } catch (e) { /* audio not available */ }
}

function confetti() {
  const colors = ['#2B2521', '#A9812E', '#7A1F1F', '#5C4632', '#8C2F1E', '#55613C'];
  for (let i = 0; i < 60; i++) {
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = Math.random() * 100 + 'vw';
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDelay = Math.random() * 0.5 + 's';
    c.style.animationDuration = (2 + Math.random() * 2) + 's';
    c.style.width = (6 + Math.random() * 8) + 'px';
    c.style.height = (6 + Math.random() * 8) + 'px';
    c.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }
}

/* ==============================
   PERSISTENCE (localStorage)
   ============================== */
const store = {
  currentKey: (id) => `cbsexam:${id}:current`,
  historyKey: (id) => `cbsexam:${id}:history`,

  loadCurrent(id) {
    try { return JSON.parse(localStorage.getItem(this.currentKey(id))); } catch (e) { return null; }
  },
  saveCurrent(data) {
    try { localStorage.setItem(this.currentKey(data.examId), JSON.stringify(data)); } catch (e) {}
  },
  clearCurrent(id) {
    try { localStorage.removeItem(this.currentKey(id)); } catch (e) {}
  },
  loadHistory(id) {
    try { return JSON.parse(localStorage.getItem(this.historyKey(id))) || []; } catch (e) { return []; }
  },
  saveHistory(id, entries) {
    try { localStorage.setItem(this.historyKey(id), JSON.stringify(entries.slice(0, 5))); } catch (e) {}
  },
  addHistory(entry) {
    const entries = this.loadHistory(entry.examId);
    entries.unshift(entry);
    this.saveHistory(entry.examId, entries);
  },
};

/* ==============================
   CONFIRM DIALOG
   ============================== */
function showConfirm(msg, onOk) {
  const overlay = document.createElement('div');
  overlay.className = 'confirm-overlay';
  overlay.innerHTML = `
    <div class="confirm-box">
      <div class="confirm-title">Confirm Submission</div>
      <div class="confirm-body">${escapeHTML(msg)}</div>
      <div class="confirm-actions">
        <button class="btn-ghost" id="cfCancel">Return to Examination</button>
        <button class="btn-submit" id="cfSubmit">Submit Paper</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);

  overlay.querySelector('#cfCancel').onclick = () => overlay.remove();
  overlay.querySelector('#cfSubmit').onclick = () => { overlay.remove(); onOk(); };
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
}

function showAlert(msg) {
  const overlay = document.createElement('div');
  overlay.className = 'confirm-overlay';
  overlay.innerHTML = `
    <div class="alert-box">
      <span class="alert-icon">⏰</span>
      ${escapeHTML(msg)}
    </div>`;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.remove(), 3500);
}

/* ==============================
   EXAM HALL — pick an examination
   ============================== */
function init() { renderExamHall(); }

function examTotals(exam) {
  return exam.topics.reduce((n, t) => n + t.questions.length, 0);
}

function renderExamHall() {
  const app = $('#app');
  app.innerHTML = `
    <div class="landing">
      <div class="landing-header">
        <div class="landing-title">The Examination Hall<br/>Select Your Paper</div>
        <div class="landing-subtitle">Choose an examination from the register below. Each paper carries its own syllabus, duration, and question count. Attempts are preserved on this device — you may resume or retake at any time.</div>
      </div>

      <div class="hall-list" id="hallList"></div>
    </div>`;

  renderHallList();
}

function renderHallList() {
  const list = $('#hallList');
  list.innerHTML = window.EXAMS.map((exam, idx) => {
    const total = examTotals(exam);
    const maxMarks = total * exam.scoring.correct;
    const current = store.loadCurrent(exam.id);
    const history = store.loadHistory(exam.id);
    const last = history[0];

    let statusHtml = '';
    if (current) {
      const answered = Object.keys(current.answers || {}).length;
      statusHtml += `
        <button class="btn-primary hall-btn" onclick="resumeExam('${exam.id}')">
          <span>Resume Examination (${answered}/${total} answered)</span><span>→</span>
        </button>
        <button class="hall-ghost" onclick="abandonAttempt('${exam.id}')">Discard this attempt</button>`;
    } else {
      statusHtml += `
        <button class="btn-primary hall-btn" onclick="openExamSetup('${exam.id}')">
          <span>${last ? 'Begin Another Attempt' : 'Begin Examination'}</span><span>→</span>
        </button>`;
    }

    if (history.length > 0) {
      const best = history.reduce((b, e) => (e.results.score > b.results.score ? e : b), history[0]);
      statusHtml += `
        <div class="hall-history">
          <div class="hall-history-title">Register of Past Attempts (${history.length})</div>
          <div class="hall-history-row">
            <span class="hall-hr-label">Best score</span>
            <span class="hall-hr-val">${best.results.score}/${maxMarks} · ${best.results.percentage}%</span>
            <button class="hall-link" onclick="viewAttempt('${exam.id}', '${best.ts}')">View result →</button>
          </div>
          ${history.slice(0, 3).map(h => `
            <div class="hall-history-row">
              <span class="hall-hr-label">${new Date(h.ts).toLocaleDateString()} ${new Date(h.ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
              <span class="hall-hr-val">${h.results.score}/${maxMarks} · ${h.results.percentage}%</span>
              <button class="hall-link" onclick="viewAttempt('${exam.id}', '${h.ts}')">View result →</button>
            </div>`).join('')}
        </div>`;
    }

    return `
      <div class="hall-card">
        <div class="hall-card-head">
          <div class="hall-card-title">${exam.title}</div>
          <div class="hall-card-edition">${exam.edition}</div>
        </div>
        <div class="hall-meta">
          <span>${total} Questions</span><span class="sep">·</span>
          <span>${Math.floor(exam.duration / 3600)}h ${(exam.duration % 3600) / 60 ? ((exam.duration % 3600) / 60) + 'm' : ''}</span><span class="sep">·</span>
          <span>+${exam.scoring.correct} / −${Math.abs(exam.scoring.incorrect)}</span><span class="sep">·</span>
          <span>Max ${maxMarks}</span>
        </div>
        <div class="hall-desc">${exam.description}</div>
        <div class="hall-topics">${exam.topics.map(t => `<span class="hall-topic">${t.name} — ${t.questions.length}</span>`).join('')}</div>
        <div class="hall-actions">${statusHtml}</div>
      </div>`;
  }).join('');
}

/* ==============================
   SETUP — mode & topic selection
   ============================== */
function openExamSetup(examId) {
  const exam = window.EXAMS.find(e => e.id === examId);
  if (!exam) return;
  State.exam = exam;
  State.mode = 'exam';
  State.selectedTopics = [];

  const app = $('#app');
  app.innerHTML = `
    <div class="landing">
      <div class="landing-header">
        <div class="landing-title">${exam.title}</div>
        <div class="landing-subtitle">${exam.description}</div>
        <div class="landing-meta">
          <span>${examTotals(exam)} Questions</span><span class="sep">·</span>
          <span>${formatTime(exam.duration)}</span><span class="sep">·</span>
          <span>+${exam.scoring.correct} / −${Math.abs(exam.scoring.incorrect)}</span>
        </div>
      </div>

      <div class="mode-section">
        <div class="section-header"><span>Select Your Mode</span></div>
        <div class="mode-grid">
          <div class="mode-card selected" data-mode="exam" onclick="selectMode('exam')">
            <div class="mode-icon">§ ¶</div>
            <div class="mode-title">Examination Mode</div>
            <div class="mode-desc">Timed session with strict marking. No answers shown until the paper is concluded.</div>
          </div>
          <div class="mode-card" data-mode="practice" onclick="selectMode('practice')">
            <div class="mode-icon">✎ ⸎</div>
            <div class="mode-title">Practice Mode</div>
            <div class="mode-desc">Unlimited time. The correct answer and an explanation are revealed after each question.</div>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <span class="topic-label">— Choose Your Subjects —</span>
        <div class="topic-grid" id="topicOptions"></div>
      </div>

      <button class="btn-primary" onclick="startTest()">
        <span>Proceed to Examination</span>
        <span>→</span>
      </button>
      <button class="hall-ghost hall-ghost--center" onclick="renderExamHall()">← Back to the Examination Hall</button>
    </div>`;

  renderTopicOptions();
}

function renderTopicOptions() {
  const container = $('#topicOptions');
  if (!container || !State.exam) return;
  container.innerHTML = State.exam.topics.map(t => `
    <label class="topic-row" data-topic="${t.key}" tabindex="0" role="checkbox" aria-checked="false"
           onclick="toggleTopic('${t.key}', event)"
           onkeydown="if(event.key===' '||event.key==='Enter'){event.preventDefault();toggleTopic('${t.key}', event)}">
      <input type="checkbox" tabindex="-1" aria-hidden="true" style="pointer-events:none" />
      <span>${t.name}</span>
      <span class="topic-count">${t.questions.length} q.</span>
    </label>`).join('');
}

function selectMode(mode) {
  State.mode = mode;
  $$('.mode-card').forEach(c => c.classList.toggle('selected', c.dataset.mode === mode));
}

function toggleTopic(key, event) {
  event.preventDefault();
  const label = event.currentTarget;
  const checkbox = label.querySelector('input');
  if (State.selectedTopics.includes(key)) {
    State.selectedTopics = State.selectedTopics.filter(k => k !== key);
    checkbox.checked = false;
    label.classList.remove('selected');
    label.setAttribute('aria-checked', 'false');
  } else {
    State.selectedTopics.push(key);
    checkbox.checked = true;
    label.classList.add('selected');
    label.setAttribute('aria-checked', 'true');
  }
}

/* ==============================
   START TEST
   ============================== */
function buildPool(exam, selectedTopics) {
  let pool = [];
  questionCounter = 0;
  const addTopic = (topic) => {
    topic.questions.forEach(q => {
      pool.push({ ...q, globalIndex: questionCounter, topicKey: topic.key, topicName: topic.name });
      questionCounter++;
    });
  };
  if (selectedTopics.length === 0) {
    exam.topics.forEach(addTopic);
  } else {
    exam.topics.filter(t => selectedTopics.includes(t.key)).forEach(addTopic);
  }
  return pool;
}

function startTest() {
  if (!State.exam) return;
  const pool = buildPool(State.exam, State.selectedTopics);
  if (pool.length === 0) { alert('No questions selected.'); return; }

  State.questions = pool;
  State.currentIndex = 0;
  State.answers = {};
  State.marked = new Set();
  State.submitted = false;
  State.started = true;
  State.totalTime = State.mode === 'exam' ? State.exam.duration : 0;
  State.timeLeft = State.totalTime;
  State.startedAt = Date.now();
  State.savedAt = Date.now();
  persistCurrent();

  renderExam();
  if (State.mode === 'exam') startTimer();
}

function resumeExam(examId) {
  const exam = window.EXAMS.find(e => e.id === examId);
  const saved = store.loadCurrent(examId);
  if (!exam || !saved) { renderExamHall(); return; }

  State.exam = exam;
  State.mode = saved.mode;
  State.selectedTopics = saved.selectedTopics || [];
  State.questions = buildPool(exam, State.selectedTopics);
  State.currentIndex = saved.currentIndex || 0;
  State.answers = saved.answers || {};
  State.marked = new Set(saved.marked || []);
  State.submitted = false;
  State.started = true;
  State.totalTime = exam.duration;
  State.startedAt = saved.startedAt;
  State.savedAt = saved.savedAt;

  if (saved.mode === 'exam') {
    const elapsed = Math.max(0, Math.floor((Date.now() - (saved.savedAt || saved.startedAt)) / 1000));
    State.timeLeft = Math.max(0, (saved.timeLeft !== undefined ? saved.timeLeft : exam.duration) - elapsed);
  } else {
    State.timeLeft = 0;
  }

  renderExam();
  if (saved.mode === 'exam') {
    if (State.timeLeft <= 0) {
      showAlert('Time has elapsed. Your paper will be submitted automatically.');
      setTimeout(submit, 1200);
    } else {
      startTimer();
    }
  }
}

function abandonAttempt(examId) {
  store.clearCurrent(examId);
  renderExamHall();
}

/* ==============================
   TIMER
   ============================== */
let timerTicks = 0;

function startTimer() {
  if (State.timerInterval) clearInterval(State.timerInterval);
  timerTicks = 0;
  State.timerInterval = setInterval(() => {
    State.timeLeft--;
    timerTicks++;
    updateTimer();
    if (timerTicks % 15 === 0) persistCurrent();
    if (State.timeLeft <= 0) {
      clearInterval(State.timerInterval);
      showAlert('Time has elapsed. Your paper will be submitted automatically.');
      setTimeout(submit, 1200);
    }
  }, 1000);
}

function updateTimer() {
  const el = $('#timer');
  if (!el) return;
  el.textContent = formatTime(State.timeLeft);
  el.classList.toggle('warning', State.timeLeft <= 600 && State.timeLeft > 60);
  el.classList.toggle('danger', State.timeLeft <= 60);
}

function persistCurrent() {
  State.savedAt = Date.now();
  store.saveCurrent({
    examId: State.exam.id,
    mode: State.mode,
    selectedTopics: State.selectedTopics,
    startedAt: State.startedAt,
    savedAt: State.savedAt,
    answers: State.answers,
    marked: [...State.marked],
    currentIndex: State.currentIndex,
    timeLeft: State.timeLeft,
  });
}

/* ==============================
   MERMAID RENDERING
   ============================== */
function mermaidAvailable() {
  return typeof window.mermaid !== 'undefined';
}

async function renderMermaidBlocks(container) {
  const blocks = container.querySelectorAll('pre.mermaid');
  if (blocks.length === 0) return;
  if (!mermaidAvailable()) {
    blocks.forEach(b => b.classList.add('mermaid-offline'));
    return;
  }
  try {
    window.mermaid.initialize({ startOnLoad: false, theme: 'neutral', securityLevel: 'loose' });
  } catch (e) {}
  for (const el of blocks) {
    const code = el.textContent.trim();
    const id = 'mmd-' + (mermaidSeq++);
    try {
      const { svg } = await window.mermaid.render(id, code);
      const frame = document.createElement('div');
      frame.className = 'mermaid-frame';
      frame.innerHTML = svg;
      el.replaceWith(frame);
    } catch (err) {
      el.classList.add('mermaid-error');
    }
  }
}

/* ==============================
   RENDER EXAM
   ============================== */
function renderExam() {
  const app = $('#app');
  app.innerHTML = `
    <header class="exam-header">
      <div class="exam-brand">The Candidate Gazette</div>
      <span class="mode-tag ${State.mode}">${State.mode === 'exam' ? '§ Examination' : '✎ Practice'}</span>
      ${State.mode === 'exam' ? `<div class="timer-box" id="timer">${formatTime(State.timeLeft)}</div>` : ''}
    </header>

    <div class="exam-main">
      <div class="q-panel" id="qPanel"></div>
      <aside class="q-palette">
        <div class="palette-title">Question Index</div>
        <div class="palette-stats">
          <div class="palette-stat">
            <div class="p-stat-val" id="statAns">0</div>
            <div class="p-stat-lbl">Answered</div>
          </div>
          <div class="palette-stat">
            <div class="p-stat-val" id="statRem">${State.questions.length}</div>
            <div class="p-stat-lbl">Remaining</div>
          </div>
        </div>
        <div class="palette-legend">
          <div class="leg-item"><span class="leg-dot" style="background:var(--ink-black)"></span>Current</div>
          <div class="leg-item"><span class="leg-dot" style="background:#4a7c3f"></span>Answered</div>
          <div class="leg-item"><span class="leg-dot" style="background:var(--brass)"></span>Marked</div>
          <div class="leg-item"><span class="leg-dot" style="background:var(--paper-dark)"></span>Pending</div>
        </div>
        <div class="palette-grid" id="paletteGrid"></div>
        <button class="btn-submit" onclick="confirmSubmit()">Conclude Examination</button>
      </aside>
    </div>`;

  renderQuestion();
  renderPalette();
}

/* ==============================
   RENDER QUESTION
   ============================== */
function renderQuestion() {
  const q = State.questions[State.currentIndex];
  const panel = $('#qPanel');
  const userAnswer = State.answers[q.globalIndex];
  const isPractice = State.mode === 'practice';
  const showFeedback = isPractice && userAnswer !== undefined;

  let html = `
    <div class="q-meta">
      <span class="q-number">Question ${State.currentIndex + 1} of ${State.questions.length}</span>
      <div class="q-tags">
        <span class="q-topic">${q.topicName}</span>
        <span class="diff-tag diff-${q.diff}">${q.diff === 'E' ? 'Easy' : q.diff === 'M' ? 'Medium' : 'Hard'}</span>
      </div>
    </div>
    <div class="q-text">${q.q}</div>`;

  if (q.diagram) {
    html += `
      <div class="diagram-block">
        <pre class="mermaid">${escapeHTML(q.diagram)}</pre>
        ${q.diagramCaption ? `<div class="diagram-caption">${q.diagramCaption}</div>` : ''}
      </div>`;
  }

  html += `<div class="options">`;

  q.options.forEach((opt, i) => {
    let cls = 'opt';
    if (showFeedback) {
      cls += ' disabled';
      if (i === q.answer) cls += ' correct';
      else if (i === userAnswer) cls += ' incorrect';
    } else if (userAnswer === i) {
      cls += ' selected';
    }

    html += `
      <div class="${cls}" onclick="selectOption(${i})">
        <div class="opt-letter">${String.fromCharCode(65 + i)}</div>
        <div class="opt-text">${opt}</div>
      </div>`;
  });

  html += `</div>`;

  if (showFeedback) {
    const correctLetter = String.fromCharCode(65 + q.answer);
    const userLetter = userAnswer !== undefined ? String.fromCharCode(65 + userAnswer) : '—';
    const isCorrect = userAnswer === q.answer;
    html += `
      <div class="explain-box ${isCorrect ? 'correct-verdict' : 'incorrect-verdict'}">
        <strong>${isCorrect ? '✓ Correct — well answered' : '✗ Incorrect — the proper answer is ' + correctLetter}</strong>
        ${q.explain}
      </div>`;
  }

  html += `
    <div class="q-actions">
      <button class="btn-ghost" onclick="prevQuestion()" ${State.currentIndex === 0 ? 'disabled' : ''}>← Previous</button>
      <button class="btn-mark ${State.marked.has(q.globalIndex) ? 'marked' : ''}" onclick="toggleMark()">
        ${State.marked.has(q.globalIndex) ? '★ marked for review' : '☆ mark for review'}
      </button>
      <button class="btn-ghost" onclick="nextQuestion()" ${State.currentIndex === State.questions.length - 1 ? 'disabled' : ''}>Next →</button>
    </div>`;

  panel.innerHTML = html;
  renderPalette();
  renderMermaidBlocks(panel);
}

/* ==============================
   PALETTE
   ============================== */
function renderPalette() {
  const grid = $('#paletteGrid');
  if (!grid) return;

  grid.innerHTML = State.questions.map((q, i) => {
    const answered = State.answers[q.globalIndex] !== undefined;
    const marked = State.marked.has(q.globalIndex);
    const current = i === State.currentIndex;
    let cls = 'p-btn';
    if (current) cls += ' current';
    else if (answered && marked) cls += ' answered-marked';
    else if (answered) cls += ' answered';
    else if (marked) cls += ' marked';
    return `<button class="${cls}" onclick="jumpTo(${i})">${i + 1}</button>`;
  }).join('');

  const answeredCount = Object.keys(State.answers).length;
  const ansEl = $('#statAns');
  const remEl = $('#statRem');
  if (ansEl) ansEl.textContent = answeredCount;
  if (remEl) remEl.textContent = State.questions.length - answeredCount;
}

/* ==============================
   INTERACTIONS
   ============================== */
function selectOption(idx) {
  const q = State.questions[State.currentIndex];
  if (State.mode === 'practice' && State.answers[q.globalIndex] !== undefined) return;
  State.answers[q.globalIndex] = idx;
  if (State.mode === 'practice') {
    if (idx === q.answer) playSound('correct');
    else playSound('incorrect');
  }
  persistCurrent();
  renderQuestion();
}

function nextQuestion() {
  if (State.currentIndex < State.questions.length - 1) {
    State.currentIndex++;
    persistCurrent();
    renderQuestion();
  }
}

function prevQuestion() {
  if (State.currentIndex > 0) {
    State.currentIndex--;
    persistCurrent();
    renderQuestion();
  }
}

function jumpTo(idx) {
  State.currentIndex = idx;
  persistCurrent();
  renderQuestion();
}

function toggleMark() {
  const q = State.questions[State.currentIndex];
  State.marked.has(q.globalIndex) ? State.marked.delete(q.globalIndex) : State.marked.add(q.globalIndex);
  persistCurrent();
  renderQuestion();
}

document.addEventListener('keydown', (e) => {
  if (!State.started || State.submitted) return;
  if (e.key === 'ArrowRight') nextQuestion();
  else if (e.key === 'ArrowLeft') prevQuestion();
  else if (/^[1-4]$/.test(e.key)) {
    const idx = parseInt(e.key) - 1;
    if (idx < State.questions[State.currentIndex].options.length) selectOption(idx);
  } else if (e.key.toLowerCase() === 'm') toggleMark();
});

/* ==============================
   SUBMISSION
   ============================== */
function confirmSubmit() {
  const answered = Object.keys(State.answers).length;
  const total = State.questions.length;
  const unanswered = total - answered;
  let msg = `You have answered ${answered} of ${total} questions.`;
  if (unanswered > 0) msg += `\n\n${unanswered} question(s) remain unanswered.`;
  if (State.marked.size > 0) msg += `\n\n${State.marked.size} question(s) marked for review.`;
  msg += '\n\nConclude the examination now?';

  showConfirm(msg, submit);
}

function submit() {
  State.submitted = true;
  if (State.timerInterval) clearInterval(State.timerInterval);
  playSound('submit');

  const scoring = State.exam.scoring;
  let correct = 0, incorrect = 0, unanswered = 0;
  const topicStats = {};

  State.questions.forEach(q => {
    const ans = State.answers[q.globalIndex];
    if (!topicStats[q.topicName]) {
      topicStats[q.topicName] = { total: 0, correct: 0, incorrect: 0, unanswered: 0 };
    }
    topicStats[q.topicName].total++;
    if (ans === undefined) { unanswered++; topicStats[q.topicName].unanswered++; }
    else if (ans === q.answer) { correct++; topicStats[q.topicName].correct++; }
    else { incorrect++; topicStats[q.topicName].incorrect++; }
  });

  State.results = {
    correct, incorrect, unanswered, total: State.questions.length,
    topicStats,
    score: correct * scoring.correct + incorrect * scoring.incorrect,
    percentage: ((correct / State.questions.length) * 100).toFixed(1),
  };

  store.addHistory({
    examId: State.exam.id,
    ts: Date.now(),
    mode: State.mode,
    selectedTopics: State.selectedTopics,
    answers: State.answers,
    durationUsed: State.totalTime - State.timeLeft,
    results: State.results,
  });
  store.clearCurrent(State.exam.id);

  if (parseFloat(State.results.percentage) >= 70) confetti();
  renderResults();
}

/* ==============================
   RESULTS
   ============================== */
let reviewFilter = 'all';
let reviewSource = 'live';

function renderResults() {
  const r = State.results;
  const app = $('#app');
  const scoring = State.exam.scoring;
  const maxMarks = r.total * scoring.correct;

  app.innerHTML = `
    <div class="results-wrap">
      <div class="paper" style="margin-bottom:1.5rem;">
        <div class="crease"></div>
        <div class="coffee-stain coffee-stain--br"></div>

        <div class="scorecard-header">
          <div class="masthead-rule"></div>
          <div class="score-main">${r.score}</div>
          <div class="score-label">${State.exam.title} · out of ${maxMarks} · ${r.percentage}% accuracy</div>
          <div class="masthead-rule"></div>
        </div>

        <div class="score-grid">
          <div class="score-cell">
            <div class="score-cell-val" style="color: #4a7c3f;">${r.correct}</div>
            <div class="score-cell-lbl">Correct</div>
          </div>
          <div class="score-cell">
            <div class="score-cell-val" style="color: var(--ink-red);">${r.incorrect}</div>
            <div class="score-cell-lbl">Incorrect</div>
          </div>
          <div class="score-cell">
            <div class="score-cell-val" style="color: var(--brass);">${r.unanswered}</div>
            <div class="score-cell-lbl">Unanswered</div>
          </div>
          <div class="score-cell">
            <div class="score-cell-val">${r.score}</div>
            <div class="score-cell-lbl">JEE Score</div>
          </div>
        </div>
      </div>

      <hr class="section-divider" />

      <div class="section-heading">Subject-wise Analysis</div>
      ${Object.entries(r.topicStats).map(([name, stat]) => {
        const pct = (stat.correct / stat.total) * 100;
        const cls = pct >= 70 ? 'fill-good' : pct >= 40 ? 'fill-ok' : 'fill-poor';
        return `
          <div class="breakdown-item">
            <div class="breakdown-row">
              <span class="breakdown-name">${name}</span>
              <span class="breakdown-pct">${stat.correct}/${stat.total} correct (${pct.toFixed(0)}%)</span>
            </div>
            <div class="breakdown-bar">
              <div class="breakdown-fill ${cls}" style="width:${pct}%"></div>
            </div>
          </div>`;
      }).join('')}

      <hr class="section-divider" />

      <div class="section-heading">
        Answer Review
        <div class="review-filters">
          <button class="rv-btn ${reviewFilter === 'all' ? 'active' : ''}" onclick="setReviewFilter('all')">All</button>
          <button class="rv-btn ${reviewFilter === 'wrong' ? 'active' : ''}" onclick="setReviewFilter('wrong')">Wrong</button>
          <button class="rv-btn ${reviewFilter === 'unanswered' ? 'active' : ''}" onclick="setReviewFilter('unanswered')">Skipped</button>
          <button class="rv-btn ${reviewFilter === 'correct' ? 'active' : ''}" onclick="setReviewFilter('correct')">Correct</button>
        </div>
      </div>

      <div class="review-list" id="reviewList"></div>

      <button class="btn-restart" onclick="backToHall()">← Return to the Examination Hall</button>
    </div>`;

  renderReviewList();
}

function setReviewFilter(f) { reviewFilter = f; renderResults(); }

function renderReviewList() {
  const list = $('#reviewList');
  if (!list) return;

  const filtered = State.questions.filter(q => {
    const ans = State.answers[q.globalIndex];
    if (reviewFilter === 'wrong') return ans !== undefined && ans !== q.answer;
    if (reviewFilter === 'unanswered') return ans === undefined;
    if (reviewFilter === 'correct') return ans === q.answer;
    return true;
  });

  if (filtered.length === 0) {
    list.innerHTML = `<div style="text-align:center;padding:2rem;font-family:'Special Elite',monospace;font-size:0.9rem;color:var(--ink-sepia);">Nothing in this folio.</div>`;
    return;
  }

  list.innerHTML = filtered.map(q => {
    const ans = State.answers[q.globalIndex];
    const correctLetter = String.fromCharCode(65 + q.answer);
    let tag;
    if (ans === undefined) {
      tag = `<span class="rv-tag skipped-tag">Skipped</span>`;
    } else {
      const u = String.fromCharCode(65 + ans);
      tag = ans === q.answer
        ? `<span class="rv-tag correct-tag">✓ ${u}</span>`
        : `<span class="rv-tag wrong-tag">✗ ${u}</span>`;
    }
    const idx = State.questions.indexOf(q) + 1;
    const diagram = q.diagram
      ? `<div class="diagram-block diagram-block--review"><pre class="mermaid">${escapeHTML(q.diagram)}</pre></div>`
      : '';
    return `
      <div class="review-item">
        <div class="review-q"><strong style="color:var(--ink-black);margin-right:0.5rem;">Q${idx}.</strong> ${q.q}</div>
        ${diagram}
        <div class="review-tags">
          ${tag}
          <span class="rv-tag correct-ans">Ans: ${correctLetter}</span>
          <span class="rv-tag topic-tag">${q.topicName}</span>
        </div>
      </div>`;
  }).join('');

  renderMermaidBlocks(list);
}

function backToHall() {
  if (State.timerInterval) clearInterval(State.timerInterval);
  State.started = false;
  State.submitted = false;
  State.exam = null;
  renderExamHall();
}

function viewAttempt(examId, ts) {
  const exam = window.EXAMS.find(e => e.id === examId);
  const history = store.loadHistory(examId);
  const entry = history.find(h => String(h.ts) === String(ts));
  if (!exam || !entry) return;

  State.exam = exam;
  State.mode = entry.mode;
  State.selectedTopics = entry.selectedTopics || [];
  State.questions = buildPool(exam, State.selectedTopics);
  State.answers = entry.answers || {};
  State.marked = new Set();
  State.submitted = true;
  State.results = entry.results;
  reviewSource = 'history';
  reviewFilter = 'all';
  renderResults();
}

/* ==============================
   BOOT
   ============================== */
document.addEventListener('DOMContentLoaded', init);
