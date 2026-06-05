import { expect, test } from "@playwright/test";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { mockSanityApi, routes } from "./helpers.js";

test.describe("SEO smoke tests", () => {
  test.beforeEach(async ({ page }) => {
    await mockSanityApi(page);
  });

  for (const route of routes) {
    test(`${route.path} has basic metadata`, async ({ page }) => {
      await page.goto(route.path);

      await expect(page).toHaveTitle(/St Peter|Khwirale|SPKSS/i);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /.+/);
      await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", /.+/);
      await expect(page.locator('meta[property="og:description"]')).toHaveAttribute("content", /.+/);
      await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute("content", /summary_large_image/);
    });
  }

  test("public crawl files exist", () => {
    expect(existsSync(join(process.cwd(), "public", "robots.txt"))).toBeTruthy();
    expect(existsSync(join(process.cwd(), "public", "sitemap.xml"))).toBeTruthy();
  });
});
