// August 30 Examination package — Computer Networks (CBSE Unit 2).
// 6 topics · 120 questions · 2 hours · +4 / -1 marking.
// Topic files push into window.AUGUST30_TOPICS in script-tag order.
window.EXAM_AUGUST30 = {
  id: 'august-30',
  title: 'August 30 Examination',
  edition: 'Computer Networks — Topologies · Devices · Protocols · Web',
  date: 'circa August 30, 2026',
  description: 'One hundred and twenty questions on the evolution of networking, data communication and switching, transmission media, network devices, network types and topologies, IP addressing and DNS, network protocols (HTTP, FTP, PPP, SMTP, TCP/IP, POP3, HTTPS, TELNET, VoIP), and web services.',
  duration: 7200,
  scoring: { correct: 4, incorrect: -1 },
  topics: (window.AUGUST30_TOPICS || []).map(t => ({ ...t })),
};
