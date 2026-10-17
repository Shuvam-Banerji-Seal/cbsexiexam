// October 28 Examination package — Class IX: Electronic Spreadsheet (LibreOffice Calc).
// 8 topics · 80 questions (8 × 10) · 90 minutes · +4 / -1 marking.
// Topic files push into window.OCT28_TOPICS in script-tag order.
window.EXAM_OCTOBER28 = {
  id: 'october-28',
  title: 'October 28 Examination',
  edition: 'Class IX — Electronic Spreadsheet · LibreOffice Calc',
  date: 'circa October 28, 2026',
  grade: 'IX',
  description: 'A Class IX paper of eighty objective questions on the electronic spreadsheet, set in LibreOffice Calc. It begins with the Calc window, workbooks and worksheets, cell addresses and ranges, and the entry of labels, values and formulas. It proceeds to arithmetic operators and their order, the functions SUM, AVERAGE, MAX, MIN, COUNT and IF, cell formatting and the fill handle, and relative, absolute and mixed references. It closes with charts and the choice of chart for the data at hand.',
  duration: 5400,
  scoring: { correct: 4, incorrect: -1 },
  topics: (window.OCT28_TOPICS || []).map(t => ({ ...t })),
};
