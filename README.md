# CBSE Computer Science Mock Test

A browser-based exam platform for CBSE Class XII Computer Science (083) and Class IX Computer Applications (165) / Information Technology (402) practice.  
Designed for both real-exam simulation and guided revision — no dependencies, no backend, entirely client-side.

## Examination Hall

The landing page is an **Examination Hall** where students select which paper to take. Papers are grouped by class (**Class IX** and **Class XII**) behind tabs that remember the student's choice, and a search box filters papers by title, description or subject. A ledger strip shows the number of papers and questions, the results on record and any attempts in progress. Each package carries its own syllabus, duration, and question count:

### July Examination — Full Syllabus Revision (120 Qs · 2h)
- **Revision of Python (Class XI)** – 30 questions  
- **Exception Handling** – 30 questions  
- **Functions in Python** – 30 questions  
- **Text File & Binary File Handling** – 30 questions  

### August 01 Examination — SQL, Databases & Relational Algebra (150 Qs · 2.5h)
- **Database Concepts & Components** – 25 questions (DBMS/RDBMS, DDL/DML/DCL/DBA languages, keys, integrity constraints)
- **Database Architecture & Three-Schema Design** – 25 questions (internal/conceptual/external levels, data independence)
- **ER Diagrams & Database Design** – 25 questions, 12 with rendered ER diagrams (symbols, cardinalities, ER→SQL)
- **Relational Algebra** – 25 questions (σ π ρ, set ops, natural/theta/equi joins, ⟕ ⟖ ⟗ outer joins)
- **SQL Commands** – 25 questions (CREATE/ALTER/INSERT/UPDATE/SELECT, ORDER BY, GROUP BY, HAVING, LIMIT, JOINs, subqueries)
- **Python & SQLite Integration** – 25 questions (connect/cursor/execute, fetchone/fetchall, commit/rollback, parameterized queries)

### August 21 Examination — Python File Programming (120 Qs · 2h)
- **File Fundamentals & Opening Modes** – 20 questions
- **Reading Text Files** – 20 questions
- **Writing Text Files** – 20 questions
- **File Pointer — seek() & tell()** – 20 questions
- **Binary Files & Pickle** – 20 questions
- **CSV Files** – 20 questions

### August 30 Examination — Computer Networks (120 Qs · 2h)
Full coverage of the CBSE Unit-2 syllabus:
- **Evolution & Data Communication** – 20 questions (ARPANET/NSFNET/Internet, sender-receiver-message-media-protocols, bandwidth & data transfer rate, circuit vs packet switching, broadband)
- **Network Types & Topologies** – 20 questions (PAN/LAN/MAN/WAN, Bus/Star/Tree plus mesh & ring, hybrid)
- **Transmission Media** – 20 questions (twisted pair, co-axial, fibre optic; radio, microwave, infrared)
- **Network Devices** – 20 questions (Modem, Ethernet card, RJ45, Repeater, Hub, Switch, Router, Gateway, WiFi card, MAC addresses)
- **IP Addressing & DNS** – 20 questions (IPv4 structure, octets, classes A–C, private/public ranges, loopback, DNS resolution)
- **Protocols & Web Services** – 20 questions (HTTP, HTTPS, FTP, PPP, SMTP, POP3, TCP/IP, TELNET, VoIP; WWW, HTML/XML, URL, browser, server, web hosting)

### September 18 Examination — CBSE Board PYQ Special (70 Qs · 3h · with written answers)
A full board-style paper assembled from actual CBSE Class XII Computer Science question papers (2022–2026), downloaded from the official CBSE question-paper archive and extracted into `pyq-extracted/`:
- **Section A — PYQ Objective (MCQ)** – 50 questions, auto-scored +4/−1 (Python strings/lists/dicts, operators, file handling, SQL, networking, assertion-reasoning)
- **Section B — PYQ Short Answer (2 Marks)** – 15 questions, written out
- **Section C — PYQ Long Answer (4–5 Marks)** – 5 questions, written out

**Written submission flow:** the student types answers in the portal; after submission an
**answer sheet** is generated with Copy / Download (.txt) / **Send by email** actions.
Written answers are emailed to **sbs22ms076@iiserkol.ac.in** for evaluation (mailto with
automatic subject and body; download-and-attach fallback for long answers). Every
question carries its source paper citation; all Python output answers were verified by
executing the code.

### September 22 Examination — CBSE Board PYQ Special · Second Sitting (50 Qs · 3h)
A second full paper with **completely new questions** from the CBSE papers (2022–2026):
- **Section A — PYQ Objective (MCQ)** – 30 questions (global/local scope, shell outputs, assertion-reasoning, SQL DDL/DML, IP addressing, devices)
- **Section B — PYQ Short Answer (2 Marks)** – 15 questions (dictionary methods, error correction, SQL table creation, CHAR vs VARCHAR, topology, find() vs index())
- **Section C — PYQ Long Answer (4–5 Marks)** – 5 questions (CKNG Auto network case study, Work–Contractor SQL, CLUB.CSV, MySQL ChangeStatus, binary DOCTORS.DAT)

### September 26 Examination — CBSE Board PYQ Special · Third Sitting (50 Qs · 3h)
A third full paper, again with **fresh questions** from the CBSE papers:
- **Section A — PYQ Objective (MCQ)** – 30 questions (slicing, degree/cardinality, file modes, SQL clauses, switching, transmission media)
- **Section B — PYQ Short Answer (2 Marks)** – 15 questions (EvenOdd error correction, PLANTINGS/HARVESTS SQL, branding MySQL connectivity, random-output analysis, JOIN outputs)
- **Section C — PYQ Long Answer (4–5 Marks)** – 5 questions (RESOURCES.DAT binary update, Amritsar University network case study, FruitStack, PRODUCTS SQL, States.csv → More.csv)

### October 13 Examination — Class IX: Employability Skills, Basics of IT & Number Systems (120 Qs · 2h)
An objective-only paper for **CBSE Class IX**, covering the Employability Skills units (Information Technology 402, Part A), Unit 1 *Basics of Information Technology* (Computer Applications 165), and computer fundamentals. Each subject can be practised on its own.

**Part A — Employability Skills (8 questions each)**
- **Communication Skills I** – verbal & non-verbal communication, the communication cycle, feedback, basic barriers
- **Self-Management Skills I** – self-awareness, strengths & weaknesses (SWOT), personal hygiene, grooming, time management
- **ICT Skills I** – booting, mouse & keyboard operations, hardware vs software, operating systems, file management
- **Entrepreneurial Skills I** – entrepreneurship, entrepreneurial qualities, product/service/hybrid business, the entrepreneur's role in society
- **Green Skills I** – renewable resources, sustainable development, the 3 Rs, conservation, pollution

**Part B — Basics of IT & Computer Fundamentals (10 questions each)**
- **Computer Characteristics & Components** – speed, diligence, versatility, GIGO, CPU (ALU, CU), the IPO cycle
- **Memory & Storage** – RAM, ROM (PROM/EPROM), cache, memory hierarchy, magnetic, optical & flash storage
- **Input Devices** – keyboard, scanner, MICR, OMR, OCR, barcode reader, joystick, light pen, biometric devices, touch screen
- **Output Devices** – monitor (VDU), soft/hard copy, impact & non-impact printers, plotter, projector, speakers, 3D printer
- **System & Application Software** – operating systems, device drivers, utilities, compilers, general vs specific purpose, open source
- **Networks, Wireless Communication & Cloud** – PAN, LAN, MAN, WAN, wired media, Wi-Fi, Bluetooth, cloud computing
- **Multimedia** – images (JPEG, GIF, raster vs vector), audio, video, frame rate, animation
- **Number Systems & Data Units** – binary, octal, hexadecimal, conversions, binary addition, bit/nibble/byte/KB/MB/GB/TB

Four questions use rendered diagrams: the communication cycle, a computer block diagram, the memory hierarchy, and a PAN. The answer key is spread evenly across A–D, and every arithmetic answer was checked by computation.

### October 20 Examination — Class IX: Cyber Safety, IT-ITeS Industry & Data Entry (80 Qs · 1h 30m)
Computer Applications (165) Unit 2 and Information Technology (402) Part B Units 1–2.
- **Safe Browsing & Social Networks** · **Passwords, Privacy & Confidentiality** · **Cyber Stalking, Bullying & Reporting** (cybercrime.gov.in, helpline 1930) · **Malware: Viruses, Adware & More**
- **IT, ITeS & the IT-BPM Industry** · **IT in Everyday Life** · **Keyboard & Keyboarding Skills** (home and guide keys, finger allocation, ergonomics) · **Mouse Operations & Typing Tutor** (Rapid Typing Tutor, typing speed)

### October 24 Examination — Class IX: Digital Documentation in LibreOffice Writer (80 Qs · 1h 30m)
Information Technology (402) Part B Unit 3 and the word-processor part of Computer Applications (165) Unit 3.
- **Word Processing & the Writer Window** · **Selecting & Editing Text** · **Find & Replace, Navigation & Proofing** · **Formatting Text**
- **Formatting Paragraphs & Lists** · **Page Layout, Headers, Footers & Objects** · **Working with Tables** · **Printing, Mail Merge & Review**

### October 28 Examination — Class IX: Electronic Spreadsheet in LibreOffice Calc (80 Qs · 1h 30m)
Information Technology (402) Part B Unit 4 and the spreadsheet part of Computer Applications (165) Unit 3. Formula questions show the cells as a small spreadsheet grid, and every result was computed.
- **Spreadsheets & the Calc Window** · **Cells, Addresses & Ranges** · **Entering Data: Labels, Values & Formulas** · **Formulas & Operators**
- **Functions: SUM, AVERAGE, MAX, MIN, COUNT & IF** · **Formatting Cells & the Fill Handle** · **Relative, Absolute & Mixed References** · **Charts in a Spreadsheet**

### October 31 Examination — Class IX: Digital Presentation in LibreOffice Impress (80 Qs · 1h 30m)
Information Technology (402) Part B Unit 5 and the presentation part of Computer Applications (165) Unit 3.
- **Presentations: Concept & Effectiveness** · **The Impress Window & Creating a Presentation** · **Working with Slides** · **Presentation Views**
- **Formatting Text & Slides** · **Animations, Sound & Rehearse Timings** · **Tables, Images & Drawing Objects** · **Slide Master & Transitions**

Each of the four 80-question papers has an exactly balanced answer key (20 per letter), 3–4 diagram questions, and was written against the official CBSE Class IX curriculum (cbseacademic.nic.in) and then fact-checked independently. Software questions follow the LibreOffice suite used by the CBSE IT (402) textbook.

## Exam Mode
- Countdown timer per paper (2h July / 2h30m August / 2h August 21 & 30 / 3h September papers / 2h October 13 / 1h30m October 20, 24, 28 & 31)
- JEE-style scoring: **+4** for correct, **–1** for incorrect
- Auto-submit when time expires

## Practice Mode
- No timer
- Instant answer reveal after every attempt
- Explanation shown immediately per question

## Results, Review & Persistence
- Score ring (marks out of the maximum), correct / incorrect / unanswered counts, questions attempted, accuracy on attempted questions, time used and marks lost to negative marking
- Subject-wise breakdown with a **"Revise first"** note naming the weakest subjects
- Full answer review with filters (All / Correct / Wrong / Skipped), and the **explanation for every question**
- **Practise the questions you missed**: one click starts an untimed practice round of only the wrong and skipped questions (it can be resumed like any attempt)
- **Everything is stored in the browser's localStorage**: in-progress attempts are autosaved (refresh/resume-safe), and the last 5 finished attempts are kept in a "Register of Past Attempts" with one-click result review and retake.

## Diagrams
ER diagrams and architecture figures are written in **Mermaid** and rendered to SVG at runtime. Every diagram in the question bank is validated by the test suite.

## UX
- Sticky exam header: the timer stays in view while scrolling, with a progress bar of answered questions
- Question palette grouped by subject, with All / Unanswered / Marked filters and a ★ on marked questions
- **Clear response** in exam mode: leaving a question blank costs nothing under −1 marking
- Setup screen: Select all / Clear for subjects, with a live summary of the questions and time
- Keyboard shortcuts (A–D or 1–4 to pick answers, M to mark, arrow keys to navigate); they never fire while typing a written answer
- Sound feedback + celebration effects on high scores

---

## Run Locally

```bash
# Just serve the static files
npm run dev
# or
npx serve . -p 3000
```

Then open `http://localhost:3000`

---

## Testing

```bash
npm test
```

The suite (`node --test`) covers:
- **Data integrity** — the data is loaded from `index.html`'s own script list (so an unregistered paper fails), question counts (120/150/120/120/70/50/50/120/80/80/80/80), valid answers/options/difficulty, no duplicates anywhere in the registry, full syllabus coverage per paper, written-question shape (marks, no options), and balanced A–D answer keys for the Class IX papers
- **Mermaid validation** — every `erDiagram` parsed with the real Mermaid parser; flowchart diagrams structurally checked
- **Browser e2e (Playwright)** — the exam hall groups all twelve packages by class, the class tabs and search filter it, every exam flow works, all diagrams render to real SVGs, answers persist across reloads and resume correctly, submission stores history, and the written-answer flow (textarea → answer sheet → mailto) is exercised end-to-end across the September papers
- **Results checking (Class IX paper)** — answers are entered through the real UI and the paper is concluded via the confirm dialog. The test checks the exact score (60 correct, 20 wrong, 40 skipped → 220/480, 50.0%), every subject's breakdown row, the Wrong/Skipped/Correct/All review filters, the saved history entry, and practice-mode instant verdicts. Each new Class IX paper is also sat in the browser (50 right, 10 wrong, 20 skipped → 190/320)
- **New UI** — Select all / Clear and the setup summary, A–D keys, Clear response, palette filters and subject groups, the progress bar and sticky timer, keyboard shortcuts never firing inside written answers, explanations in the review, and the "practise the questions you missed" round (including resuming it after a reload)

---

## Deployment

This repo uses **GitHub Pages** with a static-site workflow.

### Live URL
**https://shuvam-banerji-seal.github.io/cbsexiexam/**

### Auto-deploys on push to main
1. GitHub Actions workflow detects push to `main`  
2. Uploads repository root as the Pages artifact  
3. Site is live within ~2 minutes  

### Manual deploy
Go to **Actions → Deploy to GitHub Pages → Run workflow**

---

## License

For educational use only.

---

*Site designed and built by **Shuvam Banerji**.*
