import { test, expect } from '@playwright/test';
import { routes } from './helpers.js';

test.describe('Resilience & Chaos Tests', () => {
  test('site survives complete Sanity API failure (500 Error)', async ({ page }) => {
    // Intercept all Sanity network requests and forcibly fail them
    await page.route('https://*.sanity.io/**', async (route) => {
      await route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Internal Server Error (Simulated Chaos)' }),
      });
    });

    // Go to homepage
    await page.goto('/');

    // Assert that the site did NOT crash to a blank white screen
    // It should fall back to the default static data configured in the hooks
    await expect(page.locator("body")).toBeVisible();
    await expect(page.getByRole("banner")).toBeVisible();
    await expect(page.getByRole("heading", { name: /st peter|khwirale/i }).first()).toBeVisible();
    
    // Check that at least one Hero image rendered (fallback data)
    const images = await page.locator("img").count();
    expect(images).toBeGreaterThan(0);
  });

  test('site handles extremely slow API responses gracefully', async ({ page }) => {
    // Intercept Sanity requests and delay them by 5 seconds
    await page.route('https://*.sanity.io/**', async (route) => {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ result: null }), // Empty result to speed up render after delay
      });
    });

    // Start navigation (we don't await it immediately so we can check loading state)
    const navigationPromise = page.goto('/updates');

    // The header/footer should render immediately even if data is still fetching
    await expect(page.getByRole("banner")).toBeVisible();
    
    // Wait for the slow network to finish
    await navigationPromise;

    // The page should have survived the wait and rendered the empty state/fallback
    await expect(page.getByRole("heading", { name: /updates|events|news/i }).first()).toBeVisible();
  });
});
