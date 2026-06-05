import { expect, test } from "@playwright/test";
import { mockSanityApi, routes } from "./helpers.js";

test.describe("content QA smoke tests", () => {
  test.beforeEach(async ({ page }) => {
    await mockSanityApi(page);
  });

  for (const route of routes) {
    test(`${route.path} has working images and internal links`, async ({ page }) => {
      await page.goto(route.path);

      const brokenImages = await page.locator("img").evaluateAll((images) =>
        images
          .filter((image) => image.complete && image.naturalWidth === 0)
          .map((image) => image.getAttribute("src"))
      );

      expect(brokenImages).toEqual([]);

      const internalHrefs = await page.locator("a[href^='/']").evaluateAll((links) =>
        [...new Set(links.map((link) => link.getAttribute("href")?.split("#")[0]).filter(Boolean))]
      );

      for (const href of internalHrefs) {
        const response = await page.request.get(href);
        expect(response.status(), `${route.path} links to ${href}`).toBeLessThan(400);
      }
    });
  }

  test("contact form exposes required fields", async ({ page }) => {
    await page.goto("/contact");

    await expect(page.locator('input[name="name"]')).toHaveAttribute("required", "");
    await expect(page.locator('input[name="email"]')).toHaveAttribute("type", "email");
    await expect(page.locator('textarea[name="message"]')).toHaveAttribute("required", "");
    await expect(page.getByRole("button", { name: /send message/i })).toBeVisible();
  });
});
