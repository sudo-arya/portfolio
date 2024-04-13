import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "public",
  // Other configuration options...
  optimizeDeps: {
    include: ["pdfjs-dist/build/pdf.worker.min.js"], // If you're using pdfjs, include it in the optimized dependencies
  },
  server: {
    // Specify MIME types for specific file extensions
    // This ensures that PDF files are served with the correct MIME type
    // Adjust the MIME type based on your server's requirements
    mimeTypes: {
      ".pdf": "application/pdf",
    },
  },
});
