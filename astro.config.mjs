import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://www.minecodes.de/",
  integrations: [tailwind(), partytown(), prefetch(), sitemap(), mdx()],
  vite: {
    ssr: {
      external: ["@11ty/eleventy-img", "svgo"],
    },
  },
});
