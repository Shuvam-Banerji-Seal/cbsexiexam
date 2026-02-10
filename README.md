<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# CBSE Class XI Computer Science Examination Portal

A comprehensive examination platform for CBSE Class 11 Computer Science with advanced features for a seamless exam experience.

## Features

### 🎯 Complete Question Paper
- **38 Questions** across 5 sections covering all Computer Science topics
- **Section A**: 21 MCQs (1 mark each) - Fundamentals, Python basics, Boolean logic
- **Section B**: 7 Short Answer Questions (2 marks each)
- **Section C**: 5 Short Answer Questions (3 marks each)
- **Section D**: 3 Case Study Questions (4 marks each)
- **Section E**: 2 Programming Questions (5 marks each)

### 💾 Browser Caching & Progress Saving
- **Auto-save**: Every answer is automatically saved to browser localStorage
- **Network resilient**: Exam progress persists even if connection is lost
- **Resume capability**: Return to the exam anytime and continue from where you left off
- **Timer persistence**: Remaining time is saved and restored

### 🔒 Option Locking
- **Lock/Unlock buttons**: Prevent accidental answer changes
- **Visual indicators**: Locked questions show a green lock icon
- **Flexible control**: Lock only the answers you're confident about

### 📊 Comprehensive Results & Scoreboard
- **Detailed scoring**: Shows total score, percentage, and time taken
- **Question-by-question analysis**: Review each question with your answer
- **Correct answer display**: See the right answer for questions you got wrong
- **Explanations**: Detailed explanations for better understanding
- **Visual feedback**: Color-coded correct/incorrect indicators

### ⏱️ Timed Examination
- **3-hour duration**: Standard CBSE exam time limit
- **Live countdown**: Real-time timer display
- **Auto-submit**: Exam automatically submits when time expires
- **Warning alerts**: Visual alerts when time is running low

## Run Locally

**Prerequisites:** Node.js (v18 or higher)

1. Clone the repository:
   ```bash
   git clone https://github.com/Shuvam-Banerji-Seal/cbsexiexam.git
   cd cbsexiexam
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## Deployment

The application is automatically deployed to GitHub Pages using GitHub Actions:

1. Push to the `main` branch
2. GitHub Actions workflow builds the application
3. Deploys to GitHub Pages automatically

**Live URL**: [https://shuvam-banerji-seal.github.io/cbsexiexam/](https://shuvam-banerji-seal.github.io/cbsexiexam/)

### How It Works

The deployment process:
1. **Build**: Vite transpiles TypeScript/TSX files to JavaScript
2. **Bundle**: All assets are bundled into the `dist/` folder with proper paths (`/cbsexiexam/`)
3. **Deploy**: GitHub Actions uploads the `dist/` folder to GitHub Pages
4. **Serve**: GitHub Pages serves the compiled JavaScript files (not the source `.tsx` files)

This ensures proper MIME types and avoids the "disallowed MIME type" error that occurs when trying to load TypeScript files directly.

### Manual Deployment

You can also trigger deployment manually:
- Go to Actions tab in GitHub
- Select "Deploy to GitHub Pages" workflow
- Click "Run workflow"

### GitHub Pages Configuration

Ensure your repository settings are configured correctly:
1. Go to **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The site will be published at `https://<username>.github.io/cbsexiexam/`

### Troubleshooting

**MIME Type Error**: If you see an error like "Loading module from ... was blocked because of a disallowed MIME type", it means:
- The site is trying to load `.tsx` files directly instead of compiled `.js` files
- **Solution**: Ensure the site is deployed from the GitHub Actions workflow (which deploys the `dist/` folder)
- **Verify**: Check that GitHub Pages source is set to "GitHub Actions" in repository settings

**404 Errors**: If you encounter 404 errors on deployed site:
- Ensure the base path in `vite.config.ts` is set to `/cbsexiexam/`
- Check that the workflow successfully completed in the Actions tab

## Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type-safe development
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling via CDN
- **Lucide React** - Icon library
- **LocalStorage API** - Data persistence

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

**Note**: LocalStorage must be enabled for progress saving to work.

## License

This project is open source and available for educational purposes.
