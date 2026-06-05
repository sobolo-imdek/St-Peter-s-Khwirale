import { expect, test } from "@playwright/test";
import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { mockSanityApi, routes } from "./helpers.js";

test.describe("performance smoke tests", () => {
  test.beforeEach(async ({ page }) => {
    await mockSanityApi(page);
  });

  for (const route of routes) {
    test(`${route.path} loads within a basic local timing budget`, async ({ page }) => {
      await page.goto(route.path, { waitUntil: "load" });

      const timing = await page.evaluate(() => {
        const navigation = performance.getEntriesByType("navigation")[0];
        return {
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.startTime,
          load: navigation.loadEventEnd - navigation.startTime,
        };
      });

      expect(timing.domContentLoaded).toBeLessThan(3_000);
      expect(timing.load).toBeLessThan(5_000);
    });
  }

  test("production JavaScript chunks stay within the current budget", () => {
    const assetDir = join(process.cwd(), "dist", "assets");
    const jsFiles = readdirSync(assetDir).filter((file) => file.endsWith(".js"));
    const largestChunk = Math.max(
      ...jsFiles.map((file) => statSync(join(assetDir, file)).size)
    );

    expect(largestChunk).toBeLessThan(550_000);
  });
});
