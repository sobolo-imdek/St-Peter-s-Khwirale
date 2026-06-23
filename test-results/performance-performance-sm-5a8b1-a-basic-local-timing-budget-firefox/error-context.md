# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: performance.spec.js >> performance smoke tests >> /gallery loads within a basic local timing budget
- Location: tests\performance.spec.js:12:5

# Error details

```
Error: expect(received).toBeLessThan(expected)

Expected: < 3000
Received:   3036
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e5]:
      - link "St Peter's Khwirale Senior School Logo St Peter's Khwirale Senior School" [ref=e6] [cursor=pointer]:
        - /url: /
        - img "St Peter's Khwirale Senior School Logo" [ref=e7]
        - generic [ref=e8]:
          - text: St Peter's
          - generic [ref=e9]: Khwirale Senior School
      - navigation [ref=e10]:
        - link "Home" [ref=e12] [cursor=pointer]:
          - /url: /
        - link "About" [ref=e14] [cursor=pointer]:
          - /url: /about
          - text: About
          - img [ref=e15]
        - link "Academics" [ref=e18] [cursor=pointer]:
          - /url: /academics
          - text: Academics
          - img [ref=e19]
        - link "CBE" [ref=e22] [cursor=pointer]:
          - /url: /cbe
          - text: CBE
          - img [ref=e23]
        - link "Updates" [ref=e26] [cursor=pointer]:
          - /url: /updates
          - text: Updates
          - img [ref=e27]
        - link "Contact Us" [ref=e30] [cursor=pointer]:
          - /url: /contact
  - main [ref=e31]:
    - generic [ref=e32]:
      - generic [ref=e34]:
        - heading "School Gallery" [level=2] [ref=e35]
        - paragraph [ref=e36]: A glimpse into learning, leadership, activities, and daily school life.
      - generic [ref=e38]:
        - img "St Peter's Khwirale School Gallery Image" [ref=e40] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e42] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e44] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e46] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e48] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e50] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e52] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e54] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e56] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e58] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e60] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e62] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e64] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e66] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e68] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e70] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e72] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e74] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e76] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e78] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e80] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e82] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e84] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e86] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e88] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e90] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e92] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e94] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e96] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e98] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e100] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e102] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e104] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e106] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e108] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e110] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e112] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e114] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e116] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e118] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e120] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e122] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e124] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e126] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e128] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e130] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e132] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e134] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e136] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e138] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e140] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e142] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e144] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e146] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e148] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e150] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e152] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e154] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e156] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e158] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e160] [cursor=pointer]
        - img "St Peter's Khwirale Sports Team" [ref=e162] [cursor=pointer]
      - text: //add controls on the gallery to the left and right of the image when it is selected
  - contentinfo [ref=e163]:
    - generic [ref=e164]:
      - generic [ref=e165]:
        - generic [ref=e166]:
          - heading "St Peter's Khwirale Senior School" [level=3] [ref=e167]
          - paragraph [ref=e168]: "\"Excellence in Spirit & Academic Truth\""
        - generic [ref=e169]:
          - generic [ref=e170]:
            - heading "Our Mission" [level=4] [ref=e171]
            - paragraph [ref=e172]: To provide quality education that empowers learners to achieve their full potential in a dynamic world.
          - generic [ref=e173]:
            - heading "Our Vision" [level=4] [ref=e174]
            - paragraph [ref=e175]: A center of excellence in academic and character development.
      - generic [ref=e176]:
        - heading "Core Values" [level=3] [ref=e177]
        - list [ref=e178]:
          - listitem [ref=e179]:
            - generic [ref=e180]: ◈
            - text: Discipline
          - listitem [ref=e181]:
            - generic [ref=e182]: ◈
            - text: Integrity
          - listitem [ref=e183]:
            - generic [ref=e184]: ◈
            - text: Hard Work
          - listitem [ref=e185]:
            - generic [ref=e186]: ◈
            - text: Fear of God
      - generic [ref=e187]:
        - heading "Quick Links" [level=3] [ref=e188]
        - list [ref=e189]:
          - listitem [ref=e190]:
            - link "Home Page" [ref=e191] [cursor=pointer]:
              - /url: /
          - listitem [ref=e192]:
            - link "Ministry of Education" [ref=e193] [cursor=pointer]:
              - /url: https://education.go.ke
          - listitem [ref=e194]:
            - link "KNEC Portal" [ref=e195] [cursor=pointer]:
              - /url: https://www.knec.ac.ke
          - listitem [ref=e196]:
            - link "TSC Kenya" [ref=e197] [cursor=pointer]:
              - /url: https://www.tsc.go.ke
          - listitem [ref=e198]:
            - link "KUCCPS Placement" [ref=e199] [cursor=pointer]:
              - /url: https://kuccps.net
      - generic [ref=e200]:
        - heading "Contact Us" [level=3] [ref=e201]
        - list [ref=e202]:
          - listitem [ref=e203]:
            - generic [ref=e204]: 📍
            - text: P.O. Box 160 - 50409, Busia, Kenya
          - listitem [ref=e205]:
            - generic [ref=e206]: 📞
            - text: +254 700 564298
          - listitem [ref=e207]:
            - generic [ref=e208]: ✉️
            - text: stpeterskhwiraleseccndaryshcool@gmail.com
        - generic [ref=e209]:
          - heading "Follow Us" [level=4] [ref=e210]
          - link "Facebook" [ref=e211] [cursor=pointer]:
            - /url: https://web.facebook.com/SPKSS160
            - img [ref=e212]
            - generic [ref=e214]: Facebook
    - paragraph [ref=e216]: © 2026 St Peter's Khwirale Senior School · All Rights Reserved
```

# Test source

```ts
  1  | import { expect, test } from "@playwright/test";
  2  | import { readdirSync, statSync } from "node:fs";
  3  | import { join } from "node:path";
  4  | import { mockSanityApi, routes } from "./helpers.js";
  5  | 
  6  | test.describe("performance smoke tests", () => {
  7  |   test.beforeEach(async ({ page }) => {
  8  |     await mockSanityApi(page);
  9  |   });
  10 | 
  11 |   for (const route of routes) {
  12 |     test(`${route.path} loads within a basic local timing budget`, async ({ page }) => {
  13 |       await page.goto(route.path, { waitUntil: "load" });
  14 | 
  15 |       const timing = await page.evaluate(() => {
  16 |         const navigation = performance.getEntriesByType("navigation")[0];
  17 |         return {
  18 |           domContentLoaded: navigation.domContentLoadedEventEnd - navigation.startTime,
  19 |           load: navigation.loadEventEnd - navigation.startTime,
  20 |         };
  21 |       });
  22 | 
> 23 |       expect(timing.domContentLoaded).toBeLessThan(3_000);
     |                                       ^ Error: expect(received).toBeLessThan(expected)
  24 |       expect(timing.load).toBeLessThan(5_000);
  25 |     });
  26 |   }
  27 | 
  28 |   test("production JavaScript chunks stay within the current budget", () => {
  29 |     const assetDir = join(process.cwd(), "dist", "assets");
  30 |     const jsFiles = readdirSync(assetDir).filter((file) => file.endsWith(".js"));
  31 |     const largestChunk = Math.max(
  32 |       ...jsFiles.map((file) => statSync(join(assetDir, file)).size)
  33 |     );
  34 | 
  35 |     expect(largestChunk).toBeLessThan(550_000);
  36 |   });
  37 | });
  38 | 
```