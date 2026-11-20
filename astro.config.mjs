import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://shabbirhussain7.github.io',
  trailingSlash: 'always',
  // Keep source whitespace: HTML compression drops the space before a link that starts a line.
  compressHTML: false,
  build: {
    // GitHub Pages' Jekyll step drops directories starting with "_", so avoid Astro's default "_astro".
    assets: 'assets',
    // One small stylesheet: inline it so each page is a single request plus fonts.
    inlineStylesheets: 'always',
  },
});
