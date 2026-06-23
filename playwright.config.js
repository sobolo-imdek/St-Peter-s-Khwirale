import { defineConfig, devices } from "@playwright/test";

// Lighthouse needs a production build and runs in its own CI step (test:lighthouse).
// Exclude it from the default suite so `playwright test` does not skip other audits.
const isLighthouseRun = process.argv.some((arg) =>
  /[/\\]lighthouse\.spec\.js$/.test(arg.replace(/\\/g, "/"))
);

export default defineConfig({
  testDir: "./tests",
  testMatch: "**/*.spec.js",
  testIgnore: isLighthouseRun ? [] : ["**/lighthouse.spec.js"],
  timeout: 30_000,
  expect: {
    timeout: 10_000,
  },
  use: {
    baseURL: "http://localhost:4173",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  webServer: {
    command: "npm run preview -- --host localhost",
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
