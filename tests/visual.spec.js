import { test, expect } from '@playwright/test';
import { mockSanityApi, routes } from './helpers.js';

test.describe('Visual Regression Tests', () => {
  test.describe.configure({ timeout: 60_000 });

  test.beforeEach(async ({ page }) => {
    // We mock the API to ensure data consistency between visual runs.
    // Dynamic data (like a new news post) would otherwise break the visual snapshot.
    await mockSanityApi(page);
  });

  for (const route of routes) {
    test(`Visual snapshot of ${route.path || 'home'} page`, async ({ page }) => {
      await page.goto(route.path);
      
      // Wait for the main heading to be visible, ensuring the page has loaded
      await expect(page.getByRole("heading", { name: route.heading }).first()).toBeVisible();
      
      // Wait for images to load, but don't hang if an asset never resolves.
      await page.evaluate(async () => {
        const pending = Array.from(document.images).filter((img) => !img.complete);
        await Promise.all(
          pending.map(
            (img) =>
              new Promise((resolve) => {
                const done = () => resolve();
                img.addEventListener('load', done, { once: true });
                img.addEventListener('error', done, { once: true });
                setTimeout(done, 5_000);
              })
          )
        );
      });

      // Take a full-page screenshot and compare it to the baseline
      await expect(page).toHaveScreenshot({ maxDiffPixelRatio: 0.2 });
    });
  }
});
