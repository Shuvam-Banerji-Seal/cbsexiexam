import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: '/cbsexiexam/',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        {
          name: 'create-nojekyll',
          closeBundle() {
            // Create .nojekyll file for GitHub Pages
            const distPath = path.resolve(__dirname, 'dist');
            try {
              if (!fs.existsSync(distPath)) {
                fs.mkdirSync(distPath, { recursive: true });
              }
              fs.writeFileSync(path.join(distPath, '.nojekyll'), '');
            } catch (error) {
              console.warn('Failed to create .nojekyll file:', error);
            }
          }
        }
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
