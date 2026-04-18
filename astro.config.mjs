import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://arttuv.com',
  redirects: {
    '/writings/agile-still-relevant-in-2024': '/writings/agile-still-relevant',
  },
  integrations: [sitemap({
    filter: (page) => !page.startsWith('https://arttuv.com/comments/') && !page.startsWith('https://arttuv.com/tags/'),
  })]
});