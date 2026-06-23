# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: performance.spec.js >> performance smoke tests >> /contact loads within a basic local timing budget
- Location: tests\performance.spec.js:12:5

# Error details

```
Error: expect(received).toBeLessThan(expected)

Expected: < 3000
Received:   3855
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
        - heading "Get in Touch" [level=1] [ref=e35]
        - paragraph [ref=e36]: We'd love to hear from you. Reach out to us for admissions, inquiries, or any questions.
      - generic [ref=e38]:
        - heading "Get in Touch" [level=2] [ref=e39]
        - paragraph [ref=e40]: We'd love to hear from you. Reach out to us for admissions, inquiries, or any questions.
      - generic [ref=e41]:
        - generic [ref=e42]:
          - generic [ref=e43]:
            - heading "Get in Touch" [level=2] [ref=e44]
            - generic [ref=e45]:
              - paragraph [ref=e46]:
                - generic [ref=e47]: 📍
                - generic [ref=e48]:
                  - text: Khwirale, Busia County
                  - text: P.O. Box 160 - 50409, Busia, Kenya
                  - generic [ref=e49]: Located 3km from Nambale town along Nambale-Amukura road, Busia County.
              - paragraph [ref=e50]:
                - generic [ref=e51]: 📞
                - link "+254 700 564298" [ref=e52] [cursor=pointer]:
                  - /url: tel:+254 700 564298
              - paragraph [ref=e53]:
                - generic [ref=e54]: ✉️
                - link "stpeterskhwiraleseccndaryshcool@gmail.com" [ref=e55] [cursor=pointer]:
                  - /url: mailto:stpeterskhwiraleseccndaryshcool@gmail.com
              - generic [ref=e56]:
                - paragraph [ref=e57]: Follow Us
                - link "Visit our Facebook Page" [ref=e58] [cursor=pointer]:
                  - /url: https://web.facebook.com/SPKSS160
                  - img [ref=e59]
                  - generic [ref=e61]: Visit our Facebook Page
          - generic [ref=e62]:
            - heading "Send a Message" [level=2] [ref=e63]
            - generic [ref=e64]:
              - textbox "Your Name" [ref=e65]
              - textbox "Your Email" [ref=e66]
              - textbox "Message" [ref=e67]
              - button "Send Message" [ref=e68] [cursor=pointer]
        - iframe [ref=e70]:
          
  - contentinfo [ref=e71]:
    - generic [ref=e72]:
      - generic [ref=e73]:
        - generic [ref=e74]:
          - heading "St Peter's Khwirale Senior School" [level=3] [ref=e75]
          - paragraph [ref=e76]: "\"Excellence in Spirit & Academic Truth\""
        - generic [ref=e77]:
          - generic [ref=e78]:
            - heading "Our Mission" [level=4] [ref=e79]
            - paragraph [ref=e80]: To provide quality education that empowers learners to achieve their full potential in a dynamic world.
          - generic [ref=e81]:
            - heading "Our Vision" [level=4] [ref=e82]
            - paragraph [ref=e83]: A center of excellence in academic and character development.
      - generic [ref=e84]:
        - heading "Core Values" [level=3] [ref=e85]
        - list [ref=e86]:
          - listitem [ref=e87]:
            - generic [ref=e88]: ◈
            - text: Discipline
          - listitem [ref=e89]:
            - generic [ref=e90]: ◈
            - text: Integrity
          - listitem [ref=e91]:
            - generic [ref=e92]: ◈
            - text: Hard Work
          - listitem [ref=e93]:
            - generic [ref=e94]: ◈
            - text: Fear of God
      - generic [ref=e95]:
        - heading "Quick Links" [level=3] [ref=e96]
        - list [ref=e97]:
          - listitem [ref=e98]:
            - link "Home Page" [ref=e99] [cursor=pointer]:
              - /url: /
          - listitem [ref=e100]:
            - link "Ministry of Education" [ref=e101] [cursor=pointer]:
              - /url: https://education.go.ke
          - listitem [ref=e102]:
            - link "KNEC Portal" [ref=e103] [cursor=pointer]:
              - /url: https://www.knec.ac.ke
          - listitem [ref=e104]:
            - link "TSC Kenya" [ref=e105] [cursor=pointer]:
              - /url: https://www.tsc.go.ke
          - listitem [ref=e106]:
            - link "KUCCPS Placement" [ref=e107] [cursor=pointer]:
              - /url: https://kuccps.net
      - generic [ref=e108]:
        - heading "Contact Us" [level=3] [ref=e109]
        - list [ref=e110]:
          - listitem [ref=e111]:
            - generic [ref=e112]: 📍
            - text: P.O. Box 160 - 50409, Busia, Kenya
          - listitem [ref=e113]:
            - generic [ref=e114]: 📞
            - text: +254 700 564298
          - listitem [ref=e115]:
            - generic [ref=e116]: ✉️
            - text: stpeterskhwiraleseccndaryshcool@gmail.com
        - generic [ref=e117]:
          - heading "Follow Us" [level=4] [ref=e118]
          - link "Facebook" [ref=e119] [cursor=pointer]:
            - /url: https://web.facebook.com/SPKSS160
            - img [ref=e120]
            - generic [ref=e122]: Facebook
    - paragraph [ref=e124]: © 2026 St Peter's Khwirale Senior School · All Rights Reserved
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