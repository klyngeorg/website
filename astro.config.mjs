import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import partytown from "@astrojs/partytown";

export default defineConfig({
  site: "https://klynge.org",
  redirects: {
    "/about": "/medlem",
    "/about/articles": "/vedtekter",
    "/privacy": "/personvern",
    "/events/": "/aktiviteter",
    "/arrangementer": "/aktiviteter",
  },
  integrations: [
    sitemap({
      config: { forward: ["dataLayer.push"] },
    }),
    partytown(),
  ],
});

