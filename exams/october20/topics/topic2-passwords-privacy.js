// October 20 Examination — Topic 2: Passwords, Privacy & Confidentiality.
// 10 questions · CBSE Class IX · Computer Applications (165), Unit 2: Cyber-safety.
window.OCT20_TOPICS = window.OCT20_TOPICS || [];
window.OCT20_TOPICS.push({
  key: "passwords-privacy",
  name: "Passwords, Privacy & Confidentiality",
  questions: [
    {
      q: "Which of the following is the <b>strongest</b> password?",
      options: ["Ananya2010", "password123", "qwerty123", "T9#mQ!r4vL@2"],
      answer: 3,
      explain: "A <b>strong password</b> is long and mixes capital letters, small letters, digits and symbols, with no name, birth year or common word. The others are easy to guess.",
      diff: "E"
    },
    {
      q: "Which of these is a <b>good</b> password habit?",
      options: ["Writing it on a sticky note stuck to the monitor", "Using a different password for each important account", "Using your pet's name for every account", "Telling it to a close friend in case you forget it"],
      answer: 1,
      explain: "Use a <b>different password for each important account</b> and never share it, even with friends. A password written beside the screen or based on a pet's name is easy for others to find or guess.",
      diff: "E"
    },
    {
      q: "When Tara logs in to her e-mail, the site asks for her password <b>and</b> a one-time code (OTP) sent to her phone. This security feature is called —",
      options: ["Two-factor authentication", "Auto-fill", "Private browsing", "Pop-up blocking"],
      answer: 0,
      explain: "<b>Two-factor authentication</b> checks two things: something you know (the password) and something you have (the phone that receives the OTP). A stolen password alone is then not enough to log in.",
      diff: "M"
    },
    {
      q: "A caller claiming to be from your bank asks you to read out the OTP you have just received, 'to stop your card from being blocked'. You should —",
      options: ["Read out the OTP quickly so the card is not blocked", "Share only the first three digits of the OTP", "Refuse and end the call, because banks never ask for your OTP", "Send the OTP by SMS instead of saying it aloud"],
      answer: 2,
      explain: "An <b>OTP is a secret</b>, just like a password. Banks never ask for it, so anyone who does is a fraudster, and sharing even part of it is unsafe.",
      diff: "E"
    },
    {
      q: "A fake e-mail that pretends to come from a trusted organisation and tricks people into revealing their passwords or bank details is called —",
      options: ["Firewall", "Phishing", "Encryption", "Backup"],
      answer: 1,
      explain: "<b>Phishing</b> uses fake e-mails, SMS or websites that look genuine to 'fish' for passwords, OTPs and card numbers.",
      diff: "E"
    },
    {
      diagram: "flowchart TD\n  A[Attacker sends a fake message that looks like it is from a bank] --> B[Victim clicks the link in the message]\n  B --> C[A fake login page opens]\n  C --> D[Victim types username and password]\n  D --> E[Attacker uses the stolen details]",
      diagramCaption: "Figure: The steps of a typical phishing attack",
      q: "The figure shows the steps of a typical <b>phishing</b> attack. At which step can the victim most easily stop the attack?",
      options: ["At step E, by changing the password a month later", "At step A, by replying to the message to ask if it is genuine", "At step C, by checking that the page loads quickly", "At step B, by not clicking the link and checking with the bank directly"],
      answer: 3,
      explain: "The attack depends on the victim <b>clicking the link</b> (step B). Contacting the bank through its official website or number breaks the chain. Replying to the attacker's own message proves nothing, and changing the password a month later is too late.",
      diff: "M"
    },
    {
      q: "A school office stores students' marks and parents' phone numbers. Keeping this information <b>confidential</b> means —",
      options: ["Sharing it only with people who are authorised to see it", "Posting it on the school's public website", "Deleting it after every examination", "Giving it to anyone who asks politely"],
      answer: 0,
      explain: "<b>Confidentiality</b> means private information is seen only by authorised people. The data is kept, but access to it is controlled.",
      diff: "M"
    },
    {
      q: "An e-mail from an unknown sender has an attachment named <code>Prize_Claim.pdf.exe</code>. What is the safest action?",
      options: ["Open it to see what prize has been won", "Do not open it; delete the e-mail or report it as phishing", "Forward it to friends to ask if it is real", "Save it to the desktop and open it later"],
      answer: 1,
      explain: "The name really ends in <b>.exe</b>, so it is a program pretending to be a PDF and may install malware. Unexpected attachments from unknown senders should not be opened or forwarded.",
      diff: "M"
    },
    {
      q: "An SMS claiming to be from a bank says: 'Your KYC has expired. Update now at <code>http://mybank-kyc-update.verify-now.xyz/login</code>'. What is the <b>clearest</b> sign that the link is fake?",
      options: ["The word login appears at the end of the link", "The link is typed entirely in small letters", "The message was sent late in the evening", "The real domain is verify-now.xyz, not the bank's own"],
      answer: 3,
      explain: "The part just before the first single slash ends in <b>verify-now.xyz</b>, so that is the website actually visited; 'mybank-kyc-update' is only a prefix the attacker chose. The plain http (no encryption) and the urgent tone are further warning signs.",
      diff: "H"
    },
    {
      q: "A gaming website that Neha uses is hacked, and its list of usernames and passwords is leaked. Neha uses the <b>same password</b> for her e-mail and her bank app. Why is she now at risk?",
      options: ["A virus from the gaming site will travel to her bank through the password", "Her bank account will be closed automatically", "Attackers can try the leaked password on her other accounts and get into them", "Leaked passwords stop working on every website"],
      answer: 2,
      explain: "Attackers try leaked passwords on <b>other popular sites</b>. Because Neha reused hers, one leak exposes every account. She should change these passwords, use a different one for each account and turn on two-factor authentication.",
      diff: "H"
    },
  ],
});
