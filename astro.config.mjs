import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './remark-reading-time.mjs';

import mdx from '@astrojs/mdx';

export default defineConfig({
  site: "https://spandey.me",
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkReadingTime]
  },
});