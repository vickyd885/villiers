// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project-page deployment: https://<org-or-user>.github.io/villiers/
  // Update `site` below with the real GitHub Pages URL once the repo has an owner/org.
  base: '/villiers',
  vite: {
    plugins: [tailwindcss()]
  }
});