/**
 * Lighthouse performance audit via Playwright
 *
 * Runs the full Lighthouse CLI against your locally-served production build
 * and asserts that all four key scores meet the defined thresholds.
 *
 * Requirements:
 *  - Run `npm run build` before this test (the preview server serves dist/)
 *  - Chromium only (Lighthouse requires Chrome DevTools Protocol)
 *
 * Thresholds (adjust to your target):
 *  - Performance  ≥ 70   (images are large JPEGs; a realistic starting bar)
 *  - Accessibility ≥ 85
 *  - Best Practices ≥ 85
 *  - SEO           ≥ 90
 */
import { test, expect } from '@playwright/test';
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { execSync } from 'node:child_process';

const THRESHOLDS = {
  performance: 70,
  accessibility: 85,
  'best-practices': 85,
  seo: 90,
};

const REPORT_DIR = join(process.cwd(), 'test-results', 'lighthouse');
const ROUTES_TO_AUDIT = ['/', '/about', '/academics', '/contact'];

test.describe('Lighthouse audits', () => {
  test.beforeAll(() => {
    mkdirSync(REPORT_DIR, { recursive: true });
  });

  for (const route of ROUTES_TO_AUDIT) {
    test(`${route || '/'} meets Lighthouse score thresholds`, async ({ page }, testInfo) => {
      // Only run on Chromium — Lighthouse requires CDP
      test.skip(
        testInfo.project.name !== 'chromium',
        'Lighthouse requires Chromium (CDP).'
      );

      const url = `http://localhost:4173${route}`;
      const safeName = route.replace(/\//g, '_').replace(/^_/, '') || 'home';
      const reportPath = join(REPORT_DIR, `${safeName}.json`);

      // Run Lighthouse via CLI and capture JSON output
      const lighthouseCmd = [
        'npx lighthouse',
        `"${url}"`,
        '--output=json',
        `--output-path="${reportPath}"`,
        '--chrome-flags="--headless --no-sandbox --disable-gpu"',
        '--only-categories=performance,accessibility,best-practices,seo',
        '--quiet',
      ].join(' ');

      try {
        execSync(lighthouseCmd, { stdio: 'pipe', timeout: 120_000 });
      } catch (err) {
        // Lighthouse exits non-zero when scores are low — still parse report
        if (!err.stdout && !err.stderr) throw err;
      }

      const reportJson = JSON.parse(
        execSync(`type "${reportPath}"`, { encoding: 'utf8', shell: true }).trim()
      );

      const scores = {};
      const categories = reportJson?.lhr?.categories || reportJson?.categories || {};

      for (const [key, value] of Object.entries(categories)) {
        scores[key] = Math.round((value.score ?? 0) * 100);
      }

      console.log(`\nLighthouse scores for ${route}:`, scores);

      // Attach scores to the Playwright report
      await testInfo.attach('lighthouse-scores', {
        body: JSON.stringify(scores, null, 2),
        contentType: 'application/json',
      });
      await testInfo.attach('lighthouse-report', {
        path: reportPath,
        contentType: 'application/json',
      });

      // Assert each threshold
      for (const [category, threshold] of Object.entries(THRESHOLDS)) {
        const score = scores[category];
        expect(
          score,
          `${route} — ${category} score ${score} is below threshold of ${threshold}`
        ).toBeGreaterThanOrEqual(threshold);
      }
    });
  }
});
