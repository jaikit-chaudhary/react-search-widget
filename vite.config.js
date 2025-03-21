import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {},
  },
  build: {
    lib: {
      entry: "src/SearchWidget.jsx",
      name: "SearchWidget",
      fileName: (format) => `search-widget.${format}.js`,
      formats: ["umd"],
    },
    rollupOptions: {
      // Remove the external line to bundle React with your widget
      output: {
        name: "SearchWidget",
      },
    },
  },
});