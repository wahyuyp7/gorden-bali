import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { site } from "./src/data/site.js";

export default defineConfig({
  site: site.domain,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
