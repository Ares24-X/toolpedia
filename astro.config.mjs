import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://toolpedia.win',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja', 'de', 'es'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
});
