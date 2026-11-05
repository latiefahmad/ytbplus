import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages serves a project site from /<repo>/, so links and assets need
// that prefix. A custom domain (or a user site) serves from the root instead.
const base = process.env.SITE_BASE ?? "/ytbplus";
const site = process.env.SITE_URL ?? "https://latiefahmad.github.io";

export default defineConfig({
  site,
  base,
  vite: { plugins: [tailwindcss()] },
});
