import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import babel from "vite-plugin-babel";
import path from "path";
const __dirname = path.resolve();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), babel()],
  resolve: {
    alias: {
      "/": path.resolve(__dirname),
      "*": path.resolve(__dirname, "src"),
      app: path.resolve(__dirname, "src/app"),
      pages: path.resolve(__dirname, "src/pages"),
      features: path.resolve(__dirname, "src/features"),
      entities: path.resolve(__dirname, "src/entities"),
      shared: path.resolve(__dirname, "src/shared"),
    },
  },
});
