// July Examination package — wraps the original 120-question bank.
// 4 topics · 2 hours · +4 / -1 marking.
window.EXAM_JULY = {
  id: 'july',
  title: 'July Examination',
  edition: 'Full Syllabus — Revision',
  date: 'circa July 2026',
  description: 'One hundred and twenty questions across Python fundamentals, exception handling, functions, and file handling.',
  duration: 7200,
  scoring: { correct: 4, incorrect: -1 },
  topics: Object.entries(QUESTION_BANK).map(([key, t]) => ({
    key,
    name: t.name,
    questions: t.questions,
  })),
};
