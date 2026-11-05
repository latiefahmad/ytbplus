import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://ytbplus.latiefahmad.com",
  vite: { plugins: [tailwindcss()] },
});
