import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://klynge.org",
  redirects: {
    "/about": "/medlem",
    "/about/articles": "/vedtekter",
    "/privacy": "/personvern",
    "/events/": "/aktiviteter",
    "/arrangementer": "/aktiviteter",
  },
  integrations: [sitemap(), mdx()],
});
