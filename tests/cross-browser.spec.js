import { expect, test } from "@playwright/test";
import { mockSanityApi, routes } from "./helpers.js";

test.describe("public site cross-browser smoke tests", () => {
  test.beforeEach(async ({ page }) => {
    await mockSanityApi(page);
  });

  for (const route of routes) {
    test(`${route.path} renders without browser errors`, async ({ page }) => {
      const browserErrors = [];

      page.on("pageerror", (error) => {
        browserErrors.push(error.message);
      });

      page.on("console", (message) => {
        if (message.type() === "error") {
          browserErrors.push(message.text());
        }
      });

      await page.goto(route.path);
      await expect(page.locator("body")).toBeVisible();
      await expect(page.getByRole("banner")).toBeVisible();
      await expect(page.getByRole("contentinfo")).toBeVisible();
      await expect(page.getByRole("heading", { name: route.heading }).first()).toBeVisible();
      await expect(page.locator("img").first()).toBeVisible();

      expect(browserErrors).toEqual([]);
    });
  }

  test("desktop navigation can move between key pages", async ({ page, isMobile }) => {
    test.skip(isMobile, "Desktop navigation is hidden on mobile viewports.");

    await page.goto("/");
    await page.getByRole("navigation").getByRole("link", { name: "About" }).click();
    await expect(page).toHaveURL(/\/about$/);

    await page.getByRole("navigation").getByRole("link", { name: "Contact Us" }).click();
    await expect(page).toHaveURL(/\/contact$/);
    await expect(page.getByRole("heading", { name: /contact|get in touch|send a message/i }).first()).toBeVisible();
  });

  test("mobile menu opens and navigates", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Mobile menu button is only visible on mobile viewports.");

    await page.goto("/");
    await page.getByRole("button", { name: /open menu/i }).click();
    await page.getByRole("link", { name: "Contact Us", exact: true }).click();

    await expect(page).toHaveURL(/\/contact$/);
    await expect(page.getByRole("heading", { name: /contact|get in touch|send a message/i }).first()).toBeVisible();
  });
});
