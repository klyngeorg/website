import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://klynge.org",
  integrations: [sitemap()],
});
