import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Other configuration options...
  server: {
    // Specify MIME types for specific file extensions
    // This ensures that PDF files are served with the correct MIME type
    // Adjust the MIME type based on your server's requirements
    mimeTypes: {
      ".pdf": "application/pdf",
    },
  },
});
