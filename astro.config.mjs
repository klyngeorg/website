import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://klynge.org",
  redirects: {
    "/about/articles": "/vedtekter",
    "/privacy": "/personvern",
  },
  integrations: [sitemap()],
});
