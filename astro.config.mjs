// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://space-apps-kushimoto.github.io',
  build: {
    // 旧サイト(Jekyll)と同じ URL を保つため、ファイル名どおりに出力する
    //   src/pages/schedule/index.astro             -> /schedule/index.html
    //   src/pages/[year]/[month]/[day]/[slug].astro -> /2025/09/27/judges-selection.html
    format: 'preserve',
  },
});
