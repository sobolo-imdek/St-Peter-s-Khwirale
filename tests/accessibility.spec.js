import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { mockSanityApi, routes } from "./helpers.js";

test.describe("accessibility smoke tests", () => {
  test.beforeEach(async ({ page }) => {
    await mockSanityApi(page);
  });

  for (const route of routes) {
    test(`${route.path} has no serious automated accessibility violations`, async ({ page }) => {
      await page.goto(route.path);
      await expect(page.getByRole("heading", { name: route.heading }).first()).toBeVisible();

      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();

      const seriousViolations = results.violations.filter((violation) =>
        ["serious", "critical"].includes(violation.impact)
      );

      expect(seriousViolations).toEqual([]);
    });
  }
});
