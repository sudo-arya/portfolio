import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "./public/resumes/",
  // Other configuration options...
  optimizeDeps: {
    include: ["pdfjs-dist/build/pdf.worker.min.js"], // If you're using pdfjs, include it in the optimized dependencies
  },
  // Configure MIME types if necessary
  server: {
    // Specify MIME types for specific file extensions
    mimeTypes: {
      ".pdf": "application/pdf",
    },
  },
});

