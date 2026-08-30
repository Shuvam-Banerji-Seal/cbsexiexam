// August 30 Examination — Topic 6: Network Protocols & Web Services.
// 20 questions · CBSE Class XII Computer Science · Unit 2 Computer Networks.
window.AUGUST30_TOPICS = window.AUGUST30_TOPICS || [];
window.AUGUST30_TOPICS.push({
  key: "protocols-web-services",
  name: "Protocols & Web Services",
  questions: [
    {
      q: "HTTP, the protocol used to transfer web pages, stands for:",
      options: [
        "HyperText Transfer Protocol",
        "High Transfer Text Protocol",
        "HyperText Transmission Process",
        "Home Tool Transfer Protocol"
      ],
      answer: 0,
      explain: "HTTP is the request-response protocol of the World Wide Web — browsers use it to fetch pages from web servers.",
      diff: "E"
    },
    {
      q: "The main difference between HTTP and HTTPS is that HTTPS:",
      options: [
        "Is faster than HTTP",
        "Encrypts the communication for security using SSL/TLS",
        "Works only on private networks",
        "Can transfer only text files"
      ],
      answer: 1,
      explain: "HTTPS = HTTP over an encrypted (SSL/TLS) connection — that is why it is used for banking, shopping and logins.",
      diff: "M"
    },
    {
      q: "Which protocol is used to upload and download files to and from a server?",
      options: ["SMTP", "FTP", "POP3", "VoIP"],
      answer: 1,
      explain: "FTP (File Transfer Protocol) is designed specifically for transferring files between a client and a server.",
      diff: "E"
    },
    {
      q: "SMTP, used for sending email, stands for:",
      options: [
        "Simple Mail Transfer Protocol",
        "Send Mail To People",
        "Storage of Mail Transfer Process",
        "System Mail Transmission Path"
      ],
      answer: 0,
      explain: "SMTP (Simple Mail Transfer Protocol) handles outgoing mail — pushing your message to the mail server and between servers.",
      diff: "E"
    },
    {
      q: "POP3 is mainly used to:",
      options: [
        "Send emails",
        "Receive (retrieve) emails from a mail server to the client",
        "Transfer large files",
        "Make voice calls"
      ],
      answer: 1,
      explain: "POP3 (Post Office Protocol v3) downloads incoming mail from the server to the client device.",
      diff: "E"
    },
    {
      q: "Which statement correctly contrasts SMTP and POP3?",
      options: [
        "SMTP retrieves mail; POP3 sends it",
        "SMTP is used to send mail; POP3 is used to download mail from the server to the client",
        "Both are used only for web browsing",
        "SMTP is wireless; POP3 is wired"
      ],
      answer: 1,
      explain: "Think: SMTP = 'Send Mail To' (outgoing); POP3 = post office collection (incoming).",
      diff: "M"
    },
    {
      q: "A student can send emails but cannot receive them. Which protocol is most likely misconfigured?",
      options: ["SMTP", "POP3", "FTP", "HTTP"],
      answer: 1,
      explain: "Sending works (SMTP is fine), so the incoming-mail protocol — POP3 — must be the problem.",
      diff: "M"
    },
    {
      q: "TCP/IP is:",
      options: [
        "A single protocol for printing",
        "The fundamental suite of protocols on which the Internet works",
        "A type of network cable",
        "An email client"
      ],
      answer: 1,
      explain: "TCP/IP is the protocol suite of the Internet: IP moves packets between networks, TCP ensures reliable delivery.",
      diff: "E"
    },
    {
      q: "Within the TCP/IP suite, TCP is responsible for:",
      options: [
        "Assigning physical addresses",
        "Reliable, ordered delivery of data between applications",
        "Displaying web pages",
        "Converting digital signals to light"
      ],
      answer: 1,
      explain: "TCP breaks data into segments, numbers them, checks for errors and retransmits anything lost — a reliable, connection-oriented service.",
      diff: "M"
    },
    {
      q: "IP is often called a 'best-effort' protocol because it:",
      options: [
        "Guarantees every packet arrives in order",
        "Attempts delivery but does not guarantee it — reliability is handled by TCP",
        "Works only on fast networks",
        "Refuses to send large files"
      ],
      answer: 1,
      explain: "IP routes packets without guarantees (packets may be lost or reordered); TCP on top provides the reliability.",
      diff: "H"
    },
    {
      q: "PPP, used for direct point-to-point connections such as dial-up links, stands for:",
      options: [
        "Public Packet Protocol",
        "Point-to-Point Protocol",
        "Private Page Protocol",
        "Paired Port Protocol"
      ],
      answer: 1,
      explain: "PPP (Point-to-Point Protocol) encapsulates and transports data over a direct link between exactly two nodes.",
      diff: "E"
    },
    {
      q: "TELNET is a protocol used for:",
      options: [
        "Logging in remotely to another computer over a network",
        "Sending voice messages",
        "Sharing printers",
        "Compressing files"
      ],
      answer: 0,
      explain: "TELNET gives a text-based terminal session on a remote machine — you work on it as if sitting in front of it.",
      diff: "E"
    },
    {
      q: "Making a call through WhatsApp or Skype is an example of:",
      options: ["FTP", "VoIP", "SMTP", "TELNET"],
      answer: 1,
      explain: "Internet calling apps transmit digitised voice as IP packets — that is Voice over Internet Protocol.",
      diff: "M"
    },
    {
      q: "WWW stands for:",
      options: ["World Wide Web", "World Web Wide", "Wide World Web", "Web World Wide"],
      answer: 0,
      explain: "The World Wide Web is a system of interlinked hypertext documents accessed through the Internet.",
      diff: "E"
    },
    {
      q: "The key difference between HTML and XML is:",
      options: [
        "HTML tags are predefined for displaying content; XML lets users define their own tags to describe data",
        "XML is only for images",
        "HTML cannot be read by browsers",
        "XML replaced the Internet"
      ],
      answer: 0,
      explain: "HTML is about how content looks (fixed tag set); XML is about what the data is (custom tag set).",
      diff: "M"
    },
    {
      q: "In the URL https://www.cbse.gov.in/results/index.html, the part 'https' represents the:",
      options: [
        "Domain name",
        "Protocol used to access the resource",
        "Name of the web page",
        "IP address"
      ],
      answer: 1,
      explain: "The first part of a URL is the scheme/protocol — here secure HTTP.",
      diff: "M"
    },
    {
      q: "Web hosting is a service that:",
      options: [
        "Designs logos for companies",
        "Stores a website's files on a server permanently connected to the Internet so the site stays accessible",
        "Prints web pages",
        "Installs browsers on phones"
      ],
      answer: 1,
      explain: "Hosting providers rent space on always-on servers so that anyone on the Internet can reach your website.",
      diff: "E"
    },
    {
      q: "Software such as Google Chrome or Firefox, used to view web pages, is called a:",
      options: [
        "Web server",
        "Web browser",
        "Web hosting service",
        "Firewall"
      ],
      answer: 1,
      explain: "A web browser is the client program that requests pages and renders them on screen.",
      diff: "E"
    },
    {
      q: "A web server is:",
      options: [
        "The client's personal computer",
        "A computer that stores websites and delivers (serves) web pages when requested",
        "A browser extension",
        "A search engine"
      ],
      answer: 1,
      explain: "Web servers (running software like Apache or Nginx) wait for HTTP requests and respond with pages.",
      diff: "M"
    },
    {
      diagram: "flowchart LR\n  A[Sender] -->|SMTP| B[Mail Server]\n  B -->|POP3| C[Receiver]",
      diagramCaption: "Figure: The journey of an email",
      q: "In the diagram of an email's journey, protocol X (Sender to Mail Server) and protocol Y (Mail Server to Receiver) are:",
      options: [
        "X = POP3, Y = SMTP",
        "X = SMTP, Y = POP3",
        "X = FTP, Y = HTTP",
        "X = TELNET, Y = VoIP"
      ],
      answer: 1,
      explain: "The sender pushes mail out via SMTP; the receiver pulls it down from the server via POP3.",
      diff: "M"
    },
  ],
});
