// ============== APP STATE ==============
const State = {
  mode: 'exam',                  // 'exam' or 'practice'
  selectedTopics: [],            // array of topic keys
  questions: [],                 // active question list (with globalIndex)
  currentIndex: 0,
  answers: {},                   // globalIndex -> selected option index
  marked: new Set(),             // globalIndex set
  timerInterval: null,
  timeLeft: 0,                   // seconds
  submitted: false,
  started: false,
  totalTime: 0,
};

let questionCounter = 0; // for assigning global indices

// ============== UTILITIES ==============
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
      osc.frequency.value = 880;
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    } else if (type === 'incorrect') {
      osc.frequency.value = 220;
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } else if (type === 'submit') {
      [523, 659, 784].forEach((freq, i) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.connect(g);
        g.connect(ctx.destination);
        o.frequency.value = freq;
        g.gain.setValueAtTime(0.15, ctx.currentTime + i * 0.1);
        g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.1 + 0.2);
        o.start(ctx.currentTime + i * 0.1);
        o.stop(ctx.currentTime + i * 0.1 + 0.2);
      });
    }
  } catch (e) { /* audio not available */ }
}

function confetti() {
  const colors = ['#6366f1', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#ec4899'];
  for (let i = 0; i < 80; i++) {
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = Math.random() * 100 + 'vw';
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDelay = Math.random() * 0.5 + 's';
    c.style.animationDuration = (2 + Math.random() * 2) + 's';
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }
}

// ============== APP INITIALIZATION ==============
function init() {
  renderLanding();
}

function renderLanding() {
  const app = $('#app');
  app.innerHTML = `
    <header class="header">
      <div class="header-inner">
        <div class="logo">
          <div class="logo-icon">π</div>
          <span>PythonExam Pro</span>
        </div>
      </div>
    </header>
    <div class="landing">
      <div class="landing-content">
        <h1>JEE-Style Mock Test<br/>Computer Science</h1>
        <p class="subtitle">120 multiple-choice questions across 4 topics. Pick a mode, choose your topics, and start practising.</p>
        
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value">120</div>
            <div class="stat-label">Questions</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">4</div>
            <div class="stat-label">Topics</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">3</div>
            <div class="stat-label">Difficulty Levels</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">2h</div>
            <div class="stat-label">Suggested Time</div>
          </div>
        </div>

        <div class="mode-selector">
          <div class="mode-card selected" data-mode="exam" onclick="selectMode('exam')">
            <div class="mode-icon">⏱️</div>
            <h3>Exam Mode</h3>
            <p>Strict 2-hour timer, no instant feedback. Submit when done or auto-submit on timeout. JEE-style scoring.</p>
          </div>
          <div class="mode-card" data-mode="practice" onclick="selectMode('practice')">
            <div class="mode-icon">📚</div>
            <h3>Practice Mode</h3>
            <p>No timer. Instant answer reveal with explanations after each question. Great for learning.</p>
          </div>
        </div>

        <div class="topic-filter">
          <h4>Select Topics (leave all unchecked for full test)</h4>
          <div class="topic-options" id="topicOptions"></div>
        </div>

        <button class="btn-primary" onclick="startTest()">
          <span>Start Test</span>
          <span>→</span>
        </button>
      </div>
    </div>
  `;
  renderTopicOptions();
}

function renderTopicOptions() {
  const container = $('#topicOptions');
  container.innerHTML = Object.entries(QUESTION_BANK).map(([key, topic]) => `
    <label class="topic-option" data-topic="${key}" onclick="toggleTopic('${key}', event)">
      <input type="checkbox" />
      <div>
        <div style="font-weight: 600;">${topic.name}</div>
        <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">${topic.questions.length} questions</div>
      </div>
    </label>
  `).join('');
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
  } else {
    State.selectedTopics.push(key);
    checkbox.checked = true;
    label.classList.add('selected');
  }
}

function startTest() {
  // Build question list
  let pool = [];
  questionCounter = 0;
  
  if (State.selectedTopics.length === 0) {
    // All topics in order
    Object.entries(QUESTION_BANK).forEach(([key, topic]) => {
      topic.questions.forEach(q => {
        pool.push({ ...q, globalIndex: questionCounter, topicKey: key, topicName: topic.name });
        questionCounter++;
      });
    });
  } else {
    State.selectedTopics.forEach(key => {
      const topic = QUESTION_BANK[key];
      topic.questions.forEach(q => {
        pool.push({ ...q, globalIndex: questionCounter, topicKey: key, topicName: topic.name });
        questionCounter++;
      });
    });
  }
  
  if (pool.length === 0) {
    alert('No questions selected.');
    return;
  }
  
  State.questions = pool;
  State.currentIndex = 0;
  State.answers = {};
  State.marked = new Set();
  State.submitted = false;
  State.started = true;
  State.totalTime = State.mode === 'exam' ? 7200 : 0; // 2 hours for exam
  State.timeLeft = State.totalTime;
  
  renderExam();
  
  if (State.mode === 'exam') {
    startTimer();
  }
}

// ============== TIMER ==============
function startTimer() {
  if (State.timerInterval) clearInterval(State.timerInterval);
  State.timerInterval = setInterval(() => {
    State.timeLeft--;
    updateTimerDisplay();
    
    if (State.timeLeft <= 0) {
      clearInterval(State.timerInterval);
      autoSubmit();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const el = $('#timer');
  if (!el) return;
  el.textContent = formatTime(State.timeLeft);
  el.classList.toggle('warning', State.timeLeft <= 600 && State.timeLeft > 60);
  el.classList.toggle('danger', State.timeLeft <= 60);
}

// ============== EXAM RENDERING ==============
function renderExam() {
  const app = $('#app');
  app.innerHTML = `
    <header class="header">
      <div class="header-inner">
        <div class="logo">
          <div class="logo-icon">π</div>
          <span>PythonExam Pro</span>
        </div>
        <span class="mode-badge ${State.mode}">${State.mode === 'exam' ? '⏱️ Exam Mode' : '📚 Practice Mode'}</span>
        ${State.mode === 'exam' ? `
          <div class="timer" id="timer">${formatTime(State.timeLeft)}</div>
        ` : ''}
      </div>
    </header>
    <div class="exam-area">
      <div class="question-panel" id="questionPanel"></div>
      <aside class="question-palette">
        <div class="palette-title">Question Palette</div>
        <div class="palette-stats">
          <div class="palette-stat">
            <div class="palette-stat-value" id="statAnswered">0</div>
            <div class="palette-stat-label">Answered</div>
          </div>
          <div class="palette-stat">
            <div class="palette-stat-value" id="statRemaining">${State.questions.length}</div>
            <div class="palette-stat-label">Remaining</div>
          </div>
        </div>
        <div class="palette-legend">
          <div class="legend-item"><span class="legend-dot" style="background: var(--gradient-primary);"></span>Current</div>
          <div class="legend-item"><span class="legend-dot" style="background: var(--success);"></span>Answered</div>
          <div class="legend-item"><span class="legend-dot" style="background: var(--warning);"></span>Marked</div>
          <div class="legend-item"><span class="legend-dot" style="background: var(--bg-elevated);"></span>Not Visited</div>
        </div>
        <div class="palette-grid" id="paletteGrid"></div>
        <button class="btn-submit" onclick="confirmSubmit()">Submit Test</button>
      </aside>
    </div>
  `;
  renderQuestion();
  renderPalette();
}

function renderQuestion() {
  const q = State.questions[State.currentIndex];
  const panel = $('#questionPanel');
  const userAnswer = State.answers[q.globalIndex];
  const isPractice = State.mode === 'practice';
  const showFeedback = isPractice && userAnswer !== undefined;
  
  let html = `
    <div class="question-meta">
      <span class="question-number">Question ${State.currentIndex + 1} of ${State.questions.length}</span>
      <div style="display: flex; gap: 8px; align-items: center;">
        <span class="question-topic">${q.topicName}</span>
        <span class="diff-badge diff-${q.diff}">${q.diff === 'E' ? 'Easy' : q.diff === 'M' ? 'Medium' : 'Hard'}</span>
      </div>
    </div>
    <div class="question-text">${q.q}</div>
    <div class="options">
  `;
  
  q.options.forEach((opt, i) => {
    let cls = 'option';
    if (showFeedback) {
      cls += ' disabled';
      if (i === q.answer) cls += ' correct';
      else if (i === userAnswer) cls += ' incorrect';
    } else {
      if (userAnswer === i) cls += ' selected';
    }
    
    html += `
      <div class="${cls}" onclick="selectOption(${i})">
        <div class="option-letter">${String.fromCharCode(65 + i)}</div>
        <div class="option-text">${opt}</div>
      </div>
    `;
  });
  
  html += `</div>`;
  
  if (showFeedback) {
    const correctLetter = String.fromCharCode(65 + q.answer);
    const userLetter = userAnswer !== undefined ? String.fromCharCode(65 + userAnswer) : '—';
    const isCorrect = userAnswer === q.answer;
    
    html += `
      <div class="explanation" style="border-left-color: ${isCorrect ? 'var(--success)' : 'var(--error)'};">
        <strong style="color: ${isCorrect ? 'var(--success)' : 'var(--error)'};">
          ${isCorrect ? '✓ Correct!' : '✗ Incorrect'} 
          ${userAnswer !== undefined ? `(You chose ${userLetter}, correct answer is ${correctLetter})` : ''}
        </strong>
        ${q.explain}
      </div>
    `;
  }
  
  html += `
    <div class="question-actions">
      <button class="btn-secondary" onclick="prevQuestion()" ${State.currentIndex === 0 ? 'disabled' : ''}>
        ← Previous
      </button>
      <button class="btn-mark ${State.marked.has(q.globalIndex) ? 'marked' : ''}" onclick="toggleMark()">
        ${State.marked.has(q.globalIndex) ? '★ Marked' : '☆ Mark for Review'}
      </button>
      <button class="btn-secondary" onclick="nextQuestion()" ${State.currentIndex === State.questions.length - 1 ? 'disabled' : ''}>
        Next →
      </button>
    </div>
  `;
  
  panel.innerHTML = html;
  renderPalette();
}

function renderPalette() {
  const grid = $('#paletteGrid');
  if (!grid) return;
  
  grid.innerHTML = State.questions.map((q, i) => {
    const answered = State.answers[q.globalIndex] !== undefined;
    const marked = State.marked.has(q.globalIndex);
    const current = i === State.currentIndex;
    
    let cls = 'palette-btn';
    if (current) cls += ' current';
    if (answered && marked) cls += ' answered-marked';
    else if (answered) cls += ' answered';
    else if (marked) cls += ' marked';
    
    return `<button class="${cls}" onclick="jumpTo(${i})">${i + 1}</button>`;
  }).join('');
  
  const answeredCount = Object.keys(State.answers).length;
  $('#statAnswered').textContent = answeredCount;
  $('#statRemaining').textContent = State.questions.length - answeredCount;
}

// ============== INTERACTIONS ==============
function selectOption(idx) {
  const q = State.questions[State.currentIndex];
  if (State.mode === 'practice' && State.answers[q.globalIndex] !== undefined) return;
  
  State.answers[q.globalIndex] = idx;
  
  if (State.mode === 'practice') {
    if (idx === q.answer) playSound('correct');
    else playSound('incorrect');
  }
  
  renderQuestion();
}

function nextQuestion() {
  if (State.currentIndex < State.questions.length - 1) {
    State.currentIndex++;
    renderQuestion();
  }
}

function prevQuestion() {
  if (State.currentIndex > 0) {
    State.currentIndex--;
    renderQuestion();
  }
}

function jumpTo(idx) {
  State.currentIndex = idx;
  renderQuestion();
}

function toggleMark() {
  const q = State.questions[State.currentIndex];
  if (State.marked.has(q.globalIndex)) State.marked.delete(q.globalIndex);
  else State.marked.add(q.globalIndex);
  renderQuestion();
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (!State.started || State.submitted) return;
  
  if (e.key === 'ArrowRight') nextQuestion();
  else if (e.key === 'ArrowLeft') prevQuestion();
  else if (/^[1-4]$/.test(e.key)) {
    const idx = parseInt(e.key) - 1;
    if (idx < State.questions[State.currentIndex].options.length) selectOption(idx);
  }
  else if (e.key.toLowerCase() === 'm') toggleMark();
});

// ============== SUBMISSION ==============
function confirmSubmit() {
  const answered = Object.keys(State.answers).length;
  const total = State.questions.length;
  const unanswered = total - answered;
  
  let msg = `You have answered ${answered} out of ${total} questions.`;
  if (unanswered > 0) msg += `\n\n${unanswered} question(s) are unanswered.`;
  if (State.marked.size > 0) msg += `\n\n${State.marked.size} question(s) marked for review.`;
  msg += '\n\nSubmit the test?';
  
  if (confirm(msg)) {
    submit();
  }
}

function autoSubmit() {
  alert('⏰ Time\'s up! Your test will be submitted automatically.');
  submit();
}

function submit() {
  State.submitted = true;
  if (State.timerInterval) clearInterval(State.timerInterval);
  
  playSound('submit');
  
  // Calculate scores
  let correct = 0, incorrect = 0, unanswered = 0;
  const topicStats = {};
  
  State.questions.forEach(q => {
    const ans = State.answers[q.globalIndex];
    if (!topicStats[q.topicName]) {
      topicStats[q.topicName] = { total: 0, correct: 0, incorrect: 0, unanswered: 0 };
    }
    topicStats[q.topicName].total++;
    
    if (ans === undefined) {
      unanswered++;
      topicStats[q.topicName].unanswered++;
    } else if (ans === q.answer) {
      correct++;
      topicStats[q.topicName].correct++;
    } else {
      incorrect++;
      topicStats[q.topicName].incorrect++;
    }
  });
  
  State.results = {
    correct, incorrect, unanswered, total: State.questions.length,
    topicStats,
    score: correct * 4 - incorrect * 1, // JEE marking
    percentage: ((correct / State.questions.length) * 100).toFixed(1),
  };
  
  if (State.results.percentage >= 70) confetti();
  
  renderResults();
}

// ============== RESULTS ==============
let currentReviewFilter = 'all';

function renderResults() {
  const r = State.results;
  const app = $('#app');
  
  app.innerHTML = `
    <div class="results">
      <div class="results-inner">
        <div class="scorecard">
          <div class="scorecard-title">Test Complete</div>
          <div class="score-main">${r.score}</div>
          <div class="score-sub">out of ${r.total * 4} • ${r.percentage}% accuracy</div>
          <div class="score-grid">
            <div class="score-stat">
              <div class="score-stat-value success">${r.correct}</div>
              <div class="score-stat-label">Correct</div>
            </div>
            <div class="score-stat">
              <div class="score-stat-value error">${r.incorrect}</div>
              <div class="score-stat-label">Incorrect</div>
            </div>
            <div class="score-stat">
              <div class="score-stat-value warning">${r.unanswered}</div>
              <div class="score-stat-label">Unanswered</div>
            </div>
            <div class="score-stat">
              <div class="score-stat-value">${(r.correct * 4) + (r.incorrect * -1)}</div>
              <div class="score-stat-label">JEE Score</div>
            </div>
          </div>
        </div>
        
        <div class="breakdown">
          <h3>Topic-wise Breakdown</h3>
          ${Object.entries(r.topicStats).map(([name, stat]) => {
            const pct = (stat.correct / stat.total) * 100;
            const cls = pct >= 70 ? 'good' : pct >= 40 ? 'ok' : 'poor';
            return `
              <div class="breakdown-item">
                <div class="breakdown-header">
                  <span class="breakdown-name">${name}</span>
                  <span class="breakdown-score">${stat.correct}/${stat.total} correct (${pct.toFixed(0)}%)</span>
                </div>
                <div class="breakdown-bar">
                  <div class="breakdown-fill ${cls}" style="width: ${pct}%"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
        
        <div class="review">
          <h3>
            <span>Answer Review</span>
            <div class="review-filter">
              <button class="filter-btn ${currentReviewFilter === 'all' ? 'active' : ''}" onclick="setReviewFilter('all')">All</button>
              <button class="filter-btn ${currentReviewFilter === 'wrong' ? 'active' : ''}" onclick="setReviewFilter('wrong')">Wrong</button>
              <button class="filter-btn ${currentReviewFilter === 'unanswered' ? 'active' : ''}" onclick="setReviewFilter('unanswered')">Skipped</button>
              <button class="filter-btn ${currentReviewFilter === 'correct' ? 'active' : ''}" onclick="setReviewFilter('correct')">Correct</button>
            </div>
          </h3>
          <div id="reviewList"></div>
        </div>
        
        <button class="btn-restart" onclick="restart()">Take Another Test →</button>
      </div>
    </div>
  `;
  
  renderReviewList();
}

function setReviewFilter(filter) {
  currentReviewFilter = filter;
  renderResults();
}

function renderReviewList() {
  const list = $('#reviewList');
  if (!list) return;
  
  const filtered = State.questions.filter(q => {
    const ans = State.answers[q.globalIndex];
    if (currentReviewFilter === 'wrong') return ans !== undefined && ans !== q.answer;
    if (currentReviewFilter === 'unanswered') return ans === undefined;
    if (currentReviewFilter === 'correct') return ans === q.answer;
    return true;
  });
  
  if (filtered.length === 0) {
    list.innerHTML = '<div style="text-align: center; padding: 32px; color: var(--text-muted);">No questions in this filter.</div>';
    return;
  }
  
  list.innerHTML = filtered.map((q, displayIdx) => {
    const ans = State.answers[q.globalIndex];
    const correctLetter = String.fromCharCode(65 + q.answer);
    
    let yourTag;
    if (ans === undefined) {
      yourTag = '<span class="review-tag your-answer skipped">Skipped</span>';
    } else {
      const userLetter = String.fromCharCode(65 + ans);
      if (ans === q.answer) {
        yourTag = `<span class="review-tag your-answer correct">✓ ${userLetter}</span>`;
      } else {
        yourTag = `<span class="review-tag your-answer wrong">✗ ${userLetter}</span>`;
      }
    }
    
    const realGlobalIdx = State.questions.indexOf(q);
    
    return `
      <div class="review-item">
        <div class="review-q">
          <strong style="color: var(--text-muted); margin-right: 8px;">Q${realGlobalIdx + 1}.</strong>
          ${q.q}
        </div>
        <div class="review-answers">
          ${yourTag}
          <span class="review-tag correct-answer">Correct: ${correctLetter}</span>
          <span class="review-tag" style="background: var(--bg-elevated); color: var(--text-muted);">${q.topicName}</span>
        </div>
      </div>
    `;
  }).join('');
}

function restart() {
  if (State.timerInterval) clearInterval(State.timerInterval);
  State.started = false;
  State.submitted = false;
  renderLanding();
}

// ============== BOOT ==============
document.addEventListener('DOMContentLoaded', init);