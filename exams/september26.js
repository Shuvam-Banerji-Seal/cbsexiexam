// September 26 Examination package — CBSE Board PYQ Special (Third Sitting).
// 3 sections · 50 questions (30 MCQ + 20 written) · 3 hours · +4 / -1 marking on MCQs.
// Written answers are composed in the browser and emailed for evaluation.
// Topic files push into window.SEPT26_TOPICS in script-tag order.
window.EXAM_SEPTEMBER26 = {
  id: 'september-26',
  title: 'September 26 Examination',
  edition: 'CBSE Board PYQ Special — Third Sitting',
  date: 'circa September 26, 2026',
  description: 'Third sitting of the board-style PYQ series: 30 objective questions scored +4/−1 plus 20 written questions for email evaluation. Fresh questions from CBSE papers covering Python, dictionaries, file handling, SQL, binary files (pickle) and networking case studies.',
  duration: 10800, // 3 hours
  scoring: { correct: 4, incorrect: -1 },
  writtenSubmissionEmail: 'sbs22ms076@iiserkol.ac.in',
  topics: (window.SEPT26_TOPICS || []).map(t => ({ ...t })),
};
