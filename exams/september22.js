// September 22 Examination package — CBSE Board PYQ Special (Second Sitting).
// 3 sections · 50 questions (30 MCQ + 20 written) · 3 hours · +4 / -1 marking on MCQs.
// Written answers are composed in the browser and emailed for evaluation.
// Topic files push into window.SEPT22_TOPICS in script-tag order.
window.EXAM_SEPTEMBER22 = {
  id: 'september-22',
  title: 'September 22 Examination',
  edition: 'CBSE Board PYQ Special — Second Sitting',
  date: 'circa September 22, 2026',
  description: 'Second sitting of the board-style PYQ series: 30 objective questions scored +4/−1 plus 20 short-answer and long-answer questions to be written out and emailed for evaluation. Fresh questions from CBSE papers across Python, file handling (CSV/binary), SQL, MySQL connectivity and networks.',
  duration: 10800, // 3 hours
  scoring: { correct: 4, incorrect: -1 },
  writtenSubmissionEmail: 'sbs22ms076@iiserkol.ac.in',
  topics: (window.SEPT22_TOPICS || []).map(t => ({ ...t })),
};
