# CBSE Computer Science Mock Test

A browser-based exam platform for CBSE Class XII Computer Science practice.  
Designed for both real-exam simulation and guided revision — no dependencies, no backend, entirely client-side.

## Examination Hall

The landing page is an **Examination Hall** where students select which paper to take. Each package carries its own syllabus, duration, and question count:

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

## Exam Mode
- Countdown timer per paper (2h July / 2h30m August / 2h August 21 & 30)
- JEE-style scoring: **+4** for correct, **–1** for incorrect
- Auto-submit when time expires

## Practice Mode
- No timer
- Instant answer reveal after every attempt
- Explanation shown immediately per question

## Results, Review & Persistence
- Final score, accuracy %, and JEE scorecard
- Topic-wise performance breakdown
- Full answer review with filters (All / Correct / Wrong / Skipped)
- **Everything is stored in the browser's localStorage**: in-progress attempts are autosaved (refresh/resume-safe), and the last 5 finished attempts are kept in a "Register of Past Attempts" with one-click result review and retake.

## Diagrams
ER diagrams and architecture figures are written in **Mermaid** and rendered to SVG at runtime. Every diagram in the question bank is validated by the test suite.

## UX
- Question palette for quick navigation
- Mark-for-review support
- Keyboard shortcuts (1–4 to pick answers, M to mark, arrow keys to navigate)
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
- **Data integrity** — question counts (120/150/120/120), valid answers/options/difficulty, no duplicates, full syllabus coverage per paper
- **Mermaid validation** — every `erDiagram` parsed with the real Mermaid parser; flowchart diagrams structurally checked
- **Browser e2e (Playwright)** — exam hall renders all four packages, every exam flow works, all diagrams render to real SVGs, answers persist across reloads and resume correctly, submission stores history

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
