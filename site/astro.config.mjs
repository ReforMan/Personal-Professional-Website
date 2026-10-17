import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://zoltanbotos.com',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' }
});
