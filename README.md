# CBSE Computer Science Mock Test

A browser-based exam platform for CBSE Class XII Computer Science practice.  
Designed for both real-exam simulation and guided revision — no dependencies, no backend, entirely client-side.

## Features

### 120 MCQs · 4 Topics
- **Revision of Python (Class XI)** – 30 questions  
- **Exception Handling** – 30 questions  
- **Functions in Python** – 30 questions  
- **Text File & Binary File Handling** – 30 questions  

### Exam Mode
- 2-hour countdown timer  
- JEE-style scoring: **+4** for correct, **–1** for incorrect  
- Auto-submit when time expires  

### Practice Mode
- No timer  
- Instant answer reveal after every attempt  
- Explanation shown immediately per question  

### Results & Review
- Final score, accuracy %, and JEE scorecard  
- Topic-wise performance breakdown  
- Full answer review with filters (All / Correct / Wrong / Skipped)  

### UX
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
