import { defineConfig, devices } from "@playwright/test";

// Lighthouse, visual, and resilience have dedicated CI steps — exclude from default `playwright test`.
const explicitSpec = process.argv.find((arg) =>
  /[/\\][^/\\]+\.spec\.js$/.test(arg.replace(/\\/g, "/"))
);

export default defineConfig({
  testDir: "./tests",
  testMatch: "**/*.spec.js",
  testIgnore: explicitSpec
    ? []
    : ["**/lighthouse.spec.js", "**/visual.spec.js", "**/resilience.spec.js"],
  timeout: 30_000,
  expect: {
    timeout: 10_000,
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.2,
    },
  },
  snapshotPathTemplate: "{testDir}/{testFilePath}-snapshots/{arg}-{projectName}{ext}",
  use: {
    baseURL: "http://localhost:4173",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  webServer: {
    command: "npm run build && npm run preview -- --host localhost",
    url: "http://localhost:4173",
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
    {
      name: "mobile-chrome",
      use: { ...devices["Pixel 7"] },
    },
    {
      name: "mobile-safari",
      use: { ...devices["iPhone 14"] },
    },
  ],
});
