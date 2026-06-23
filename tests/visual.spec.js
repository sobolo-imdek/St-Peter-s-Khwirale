import { test, expect } from '@playwright/test';
import { mockSanityApi, routes } from './helpers.js';

test.describe('Visual Regression Tests', () => {
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
      
      // Wait for images to load (avoid layout shifts during snapshot)
      await page.evaluate(() => Promise.all(
        Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))
      ));

      // Take a full-page screenshot and compare it to the baseline
      await expect(page).toHaveScreenshot({ fullPage: true, maxDiffPixelRatio: 0.05 });
    });
  }
});
