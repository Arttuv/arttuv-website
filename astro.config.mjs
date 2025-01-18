import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://arttuv.com',
  redirects: {
  },
  integrations: [sitemap({
    filter: (page) => !page.startsWith('https://arttuv.com/comments/'),
  })]
});