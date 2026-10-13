// October 13 Examination package — Class IX: Employability Skills, Basics of IT & Number Systems.
// 13 topics · 120 questions (Part A 5 × 8 + Part B 8 × 10) · 2 hours · +4 / -1 marking.
// Topic files push into window.OCT13_TOPICS in script-tag order.
window.EXAM_OCTOBER13 = {
  id: 'october-13',
  title: 'October 13 Examination',
  edition: 'Class IX — Employability Skills · Basics of IT · Number Systems',
  date: 'circa October 13, 2026',
  description: 'A Class IX paper of one hundred and twenty objective questions. Part A covers the Employability Skills units — communication, self-management, ICT, entrepreneurial and green skills. Part B covers the basics of information technology: the characteristics and components of a computer, memory and storage, input and output devices, system and application software, networks, Wi-Fi, Bluetooth and the cloud, and multimedia. It ends with number systems, binary representation and data units.',
  duration: 7200,
  scoring: { correct: 4, incorrect: -1 },
  topics: (window.OCT13_TOPICS || []).map(t => ({ ...t })),
};
