import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/gdsc_frontend/',s
  build: {
    outDir: 'dist'
  }
});

