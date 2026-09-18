// September 18 Examination package — CBSE Board PYQ Special.
// 3 sections · 70 questions (50 MCQ + 20 written) · 3 hours · +4 / -1 marking on MCQs.
// Written answers are composed in the browser and emailed for evaluation.
// Topic files push into window.SEPT18_TOPICS in script-tag order.
window.EXAM_SEPTEMBER18 = {
  id: 'september-18',
  title: 'September 18 Examination',
  edition: 'CBSE Board PYQ Special — Objective + Written',
  date: 'circa September 18, 2026',
  description: 'A full board-style paper assembled from actual CBSE Class XII Computer Science question papers (2022–2026): 50 objective questions scored +4/−1, plus 20 short-answer and long-answer questions to be written out and emailed for evaluation. Covers Python, file handling, SQL and networks.',
  duration: 10800, // 3 hours
  scoring: { correct: 4, incorrect: -1 },
  writtenSubmissionEmail: 'sbs22ms076@iiserkol.ac.in',
  topics: (window.SEPT18_TOPICS || []).map(t => ({ ...t })),
};
