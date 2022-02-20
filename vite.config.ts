import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
// import typescript2 from "rollup-plugin-typescript2";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: "./src/ViewerPlugin.js",
      formats: ["es", "cjs"],
      name: "ViwerPlugin",
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
    },
    sourcemap: true,
    // Reduce bloat from legacy polyfills.
    target: "esnext",
    // Leave minification up to applications.
    minify: false,
  },
});
