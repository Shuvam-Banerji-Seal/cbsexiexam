// August 30 Examination — Topic 1: Evolution of Networking & Data Communication.
// 20 questions · CBSE Class XII Computer Science · Unit 2 Computer Networks.
window.AUGUST30_TOPICS = window.AUGUST30_TOPICS || [];
window.AUGUST30_TOPICS.push({
  key: "evolution-data-communication",
  name: "Evolution & Data Communication",
  questions: [
    {
      q: "A computer network is best defined as:",
      options: [
        "A single computer working in isolation",
        "Two or more interconnected computing devices that can communicate and share resources",
        "A software application for browsing web pages",
        "A programming language used to build websites"
      ],
      answer: 1,
      explain: "A computer network is a collection of interconnected autonomous computing devices that can exchange data and share resources such as printers and files.",
      diff: "E"
    },
    {
      q: "ARPANET, the project that eventually led to the Internet, was funded by:",
      options: [
        "The National Science Foundation (NSF)",
        "The United States Department of Defense",
        "The Massachusetts Institute of Technology",
        "The United Nations"
      ],
      answer: 1,
      explain: "ARPANET (Advanced Research Projects Agency Network) began in 1969 as a project of the U.S. Department of Defense.",
      diff: "E"
    },
    {
      q: "ARPANET stands for:",
      options: [
        "Advanced Research Projects Agency Network",
        "Automated Processing and Research Access Network",
        "Applied Routing Protocol Analysis Network",
        "Advanced Remote Packet Analysis Network"
      ],
      answer: 0,
      explain: "ARPANET = Advanced Research Projects Agency Network, the first network to implement the TCP/IP protocol suite.",
      diff: "E"
    },
    {
      q: "The very first message sent over ARPANET in 1969 was supposed to be 'LOGIN', but the system crashed after sending:",
      options: ["L", "LO", "LOG", "LOGI"],
      answer: 1,
      explain: "The first ARPANET message was sent from UCLA to Stanford Research Institute; the system crashed after transmitting just 'LO'.",
      diff: "M"
    },
    {
      q: "NSFNET, which became the backbone of the early Internet, was developed in 1986 by:",
      options: [
        "The U.S. Department of Defense",
        "The National Science Foundation",
        "IBM and Microsoft",
        "CERN"
      ],
      answer: 1,
      explain: "NSFNET (National Science Foundation Network) was created in 1986 to connect universities to supercomputer centres.",
      diff: "E"
    },
    {
      q: "The Internet is best described as:",
      options: [
        "A private LAN owned by the government",
        "A worldwide 'network of networks' connecting millions of computers",
        "A single large mainframe computer",
        "A software program installed on every PC"
      ],
      answer: 1,
      explain: "The Internet is a global system of interconnected computer networks that use TCP/IP to link devices worldwide.",
      diff: "M"
    },
    {
      q: "Which of the following lists the five components of data communication?",
      options: [
        "Keyboard, mouse, monitor, printer, CPU",
        "Sender, receiver, message, communication media, protocols",
        "HTML, HTTP, FTP, SMTP, TCP",
        "Hub, switch, router, modem, gateway"
      ],
      answer: 1,
      explain: "Data communication has five components: the sender, the receiver, the message, the communication media, and the protocols (agreed rules).",
      diff: "E"
    },
    {
      q: "In data communication, which of the following is NOT one of the five components?",
      options: ["Sender", "Message", "Compiler", "Communication media"],
      answer: 2,
      explain: "A compiler is a language translator — the five components are sender, receiver, message, communication media and protocols.",
      diff: "M"
    },
    {
      q: "A network protocol is:",
      options: [
        "A type of cable",
        "A set of rules that govern how data is transmitted and received over a network",
        "A brand of computer",
        "A programming error"
      ],
      answer: 1,
      explain: "Protocols define the format, order and error handling of messages so devices from different makers can communicate.",
      diff: "E"
    },
    {
      q: "The bandwidth of a communication channel refers to:",
      options: [
        "The physical weight of the cable",
        "The capacity of the channel — how much data it can carry per unit time",
        "The number of computers connected",
        "The brand of the router"
      ],
      answer: 1,
      explain: "Bandwidth measures channel capacity — in Hz for analog signals and bits per second for digital transmission.",
      diff: "E"
    },
    {
      q: "Data transfer rate is normally measured in:",
      options: [
        "Bits per second (bps)",
        "Metres per second",
        "Hertz only",
        "Newtons"
      ],
      answer: 0,
      explain: "Data transfer rate = number of bits transmitted per second, expressed as bps, Kbps, Mbps or Gbps.",
      diff: "E"
    },
    {
      q: "A 10 MB file is transferred over a link at 2 Mbps (ignore overhead). Approximately how long does it take?",
      options: ["5 seconds", "20 seconds", "40 seconds", "80 seconds"],
      answer: 2,
      explain: "10 MB = 80 megabits (1 byte = 8 bits). At 2 Mbps, time = 80 ÷ 2 = 40 seconds.",
      diff: "H"
    },
    {
      q: "In circuit switching, before communication begins:",
      options: [
        "Data is broken into small packets",
        "A dedicated physical path is established between sender and receiver",
        "The message is stored on a web server",
        "The receiver must be offline"
      ],
      answer: 1,
      explain: "Traditional telephone networks use circuit switching — a dedicated path is set up first and held for the entire conversation.",
      diff: "E"
    },
    {
      q: "The switching technique used on the modern Internet is:",
      options: [
        "Circuit switching",
        "Message switching",
        "Packet switching",
        "Analog switching"
      ],
      answer: 2,
      explain: "The Internet uses packet switching — data is split into packets that are routed independently to the destination.",
      diff: "E"
    },
    {
      q: "In packet switching, data is:",
      options: [
        "Sent continuously over a reserved path",
        "Divided into small units called packets that may travel by different routes",
        "Transmitted only through optical fibre",
        "Always sent in exactly one piece"
      ],
      answer: 1,
      explain: "Each packet is numbered and routed independently; packets from the same message may take different paths.",
      diff: "M"
    },
    {
      q: "In packet switching, packets of the same message may arrive out of order because:",
      options: [
        "Packets always get corrupted in transit",
        "Different packets may take different routes with different delays",
        "The receiver's computer is too slow",
        "Circuit switching is used instead"
      ],
      answer: 1,
      explain: "Varying routes and congestion cause varying delays; sequence numbers let the receiver reassemble packets in the correct order.",
      diff: "H"
    },
    {
      q: "Which statement about circuit switching is TRUE?",
      options: [
        "It makes very efficient use of the link when no data is being sent",
        "The dedicated path stays reserved even when no data flows, wasting capacity",
        "It is the technique used by the Internet",
        "It cannot be used for voice calls"
      ],
      answer: 1,
      explain: "A reserved idle circuit wastes bandwidth — that is why bursty computer data favours packet switching.",
      diff: "M"
    },
    {
      q: "Broadband Internet refers to:",
      options: [
        "A very slow dial-up connection",
        "A high-speed, always-on Internet connection",
        "A network used only inside one room",
        "A type of web browser"
      ],
      answer: 1,
      explain: "Broadband = wide-band, high-capacity, always-on access — DSL, cable, fibre, satellite etc.",
      diff: "E"
    },
    {
      q: "An advantage of a DSL broadband connection is that:",
      options: [
        "It needs the telephone line exclusively, blocking calls",
        "Voice calls and data can be used on the same telephone line at the same time",
        "It works without any wire",
        "It is slower than dial-up"
      ],
      answer: 1,
      explain: "DSL uses higher frequencies than voice, so calls and data share the line simultaneously.",
      diff: "M"
    },
    {
      diagram: "flowchart LR\n  S[Sender] --> P1[Packet 1]\n  S --> P2[Packet 2]\n  P1 --> R1[Route A]\n  P2 --> R2[Route B]\n  R1 --> D[Receiver]\n  R2 --> D",
      diagramCaption: "Figure: Packet switching — packets travel by different routes to the same destination",
      q: "Which switching technique is shown in the diagram, where two packets of one message travel by different routes?",
      options: [
        "Circuit switching",
        "Packet switching",
        "Message switching",
        "Analog switching"
      ],
      answer: 1,
      explain: "The diagram shows packets taking independent routes — the hallmark of packet switching, the technique used on the Internet.",
      diff: "M"
    },
  ],
});
