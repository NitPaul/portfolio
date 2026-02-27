import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      jpg: { quality: 80 },
      jpeg: { quality: 80 },
      png: { quality: 80 },
      webp: { quality: 80 },
    }),
    viteCompression({ algorithm: "gzip", threshold: 1024 }),
    viteCompression({ algorithm: "brotliCompress", threshold: 1024 }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "framer-motion": ["framer-motion"],
          "lucide": ["lucide-react"],
        },
      },
    },
    cssCodeSplit: true,
    target: "esnext",
    minify: "esbuild",
  },
});
