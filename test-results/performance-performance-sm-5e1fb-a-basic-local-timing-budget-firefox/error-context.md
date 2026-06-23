# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: performance.spec.js >> performance smoke tests >> /about loads within a basic local timing budget
- Location: tests\performance.spec.js:12:5

# Error details

```
Error: expect(received).toBeLessThan(expected)

Expected: < 3000
Received:   3516
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
        - heading "About St Peter's Khwirale Senior School" [level=1] [ref=e35]
        - paragraph [ref=e36]: A comprehensive guide to our heritage, values, and community commitment.
      - generic [ref=e37]:
        - complementary [ref=e38]:
          - generic [ref=e39]:
            - heading "Chapters" [level=3] [ref=e40]
            - generic [ref=e41]:
              - link "Overview & FAQs" [ref=e42] [cursor=pointer]:
                - /url: "#overview"
              - link "School History" [ref=e43] [cursor=pointer]:
                - /url: "#history"
              - link "BOM & PA" [ref=e44] [cursor=pointer]:
                - /url: "#bom-pa"
              - link "Service Charter" [ref=e45] [cursor=pointer]:
                - /url: "#service-charter"
              - link "School Gallery" [ref=e46] [cursor=pointer]:
                - /url: "#gallery"
              - link "Alumni Community" [ref=e47] [cursor=pointer]:
                - /url: "#alumni"
        - main [ref=e48]:
          - generic [ref=e50]:
            - text: Chapter 1
            - generic [ref=e51]:
              - generic [ref=e52]:
                - heading "Overview & FAQs" [level=2] [ref=e53]
                - paragraph [ref=e54]: St Peter's Khwirale Senior School is a premier mixed day and boarding school located in the heart of Busia County. Since its inception, the school has been a beacon of academic excellence and character formation for students across the region.
              - generic [ref=e55]:
                - generic [ref=e56]:
                  - heading "Our Mission" [level=4] [ref=e57]
                  - paragraph [ref=e58]: To provide quality education that empowers learners to achieve their full potential in a dynamic world.
                - generic [ref=e59]:
                  - heading "Our Vision" [level=4] [ref=e60]
                  - paragraph [ref=e61]: A center of excellence in academic and character development.
              - heading "Frequently Asked Questions" [level=3] [ref=e62]
              - generic [ref=e63]:
                - group [ref=e64]:
                  - generic "01 How do I apply for grade 10 placement in 2027? ↓" [ref=e65] [cursor=pointer]:
                    - generic [ref=e66]:
                      - generic [ref=e67]: "01"
                      - generic [ref=e68]: How do I apply for grade 10 placement in 2027?
                    - generic [ref=e69]: ↓
                - group [ref=e70]:
                  - generic "02 Which pathways and elective tracks are available under the CBC? ↓" [ref=e71] [cursor=pointer]:
                    - generic [ref=e72]:
                      - generic [ref=e73]: "02"
                      - generic [ref=e74]: Which pathways and elective tracks are available under the CBC?
                    - generic [ref=e75]: ↓
                - group [ref=e76]:
                  - generic "03 What is the 2027 fee structure and how can I pay? ↓" [ref=e77] [cursor=pointer]:
                    - generic [ref=e78]:
                      - generic [ref=e79]: "03"
                      - generic [ref=e80]: What is the 2027 fee structure and how can I pay?
                    - generic [ref=e81]: ↓
                - group [ref=e82]:
                  - generic "04 How did our students perform in the 2025 KCSE exams? ↓" [ref=e83] [cursor=pointer]:
                    - generic [ref=e84]:
                      - generic [ref=e85]: "04"
                      - generic [ref=e86]: How did our students perform in the 2025 KCSE exams?
                    - generic [ref=e87]: ↓
                - group [ref=e88]:
                  - generic "05 What clubs, sports teams and extracurricular activities do you offer? ↓" [ref=e89] [cursor=pointer]:
                    - generic [ref=e90]:
                      - generic [ref=e91]: "05"
                      - generic [ref=e92]: What clubs, sports teams and extracurricular activities do you offer?
                    - generic [ref=e93]: ↓
          - generic [ref=e95]:
            - text: Chapter 2
            - heading "School History" [level=2] [ref=e96]
            - generic [ref=e97]:
              - generic [ref=e99]:
                - paragraph [ref=e100]: Founded in 2005, St Peter's Khwirale Senior School began as a humble community initiative to bring quality senior education closer to the people of Busia. Over the decades, we have grown into a center of academic prowess, consistently ranking among the top schools in the region.
                - paragraph [ref=e101]: From our first graduating class to our current status as a regional giant, the journey has been marked by resilience and the unwavering support of the Khwirale community. What started as a single block has expanded into a multi-facility campus including modern science labs, a computer center, and spacious sports fields.
              - list [ref=e104]:
                - listitem [ref=e105]:
                  - generic [ref=e107]: "2005"
                  - text: School founded with 40 students.
                - listitem [ref=e108]:
                  - generic [ref=e110]: "2012"
                  - text: First major infrastructure expansion.
                - listitem [ref=e111]:
                  - generic [ref=e113]: "2020"
                  - text: Recognized as Top Performer in Busia.
          - generic [ref=e115]:
            - text: Chapter 3
            - generic [ref=e117]:
              - heading "BOM & Parents Association" [level=2] [ref=e118]
              - heading "Board of Management" [level=3] [ref=e119]
              - paragraph [ref=e120]: Our Board of Management (BOM) consists of visionaries and professionals dedicated to the strategic growth of the school. They ensure that our resources are utilized effectively to provide the best environment for our learners.
              - list [ref=e121]:
                - listitem [ref=e122]: Strategic Development Oversight
                - listitem [ref=e123]: Financial Management & Transparency
                - listitem [ref=e124]: Infrastructure Planning
              - heading "Parents Association (PA)" [level=3] [ref=e125]
              - paragraph [ref=e126]: The PA serves as a vital bridge between the school administration and our parents. Through regular meetings and collaborative projects, they ensure that the parent's voice is heard and acted upon.
              - blockquote [ref=e127]: "Education is a three-legged stool: The Teacher, The Student, and The Parent."
          - generic [ref=e129]:
            - text: Chapter 4
            - generic [ref=e130]:
              - heading "Service Charter" [level=2] [ref=e131]
              - paragraph [ref=e132]: We commit to professional, efficient, and ethical service delivery to all our stakeholders.
            - generic [ref=e133]:
              - generic [ref=e134]:
                - generic [ref=e135]: "01"
                - heading "Commitment" [level=4] [ref=e136]
                - paragraph [ref=e137]: We commit to professional, efficient, and ethical service delivery to all our stakeholders.
              - generic [ref=e138]:
                - generic [ref=e139]: "02"
                - heading "Excellence" [level=4] [ref=e140]
                - paragraph [ref=e141]: Continuous improvement of our educational standards and administrative processes.
              - generic [ref=e142]:
                - generic [ref=e143]: "03"
                - heading "Access" [level=4] [ref=e144]
                - paragraph [ref=e145]: Providing clear communication channels for inquiries, feedback, and complaint resolution.
          - generic [ref=e147]:
            - generic [ref=e148]:
              - generic [ref=e149]:
                - text: Chapter 5
                - generic [ref=e150]:
                  - heading "School Gallery" [level=2] [ref=e151]
                  - paragraph [ref=e152]: Explore a glimpse of learning, leadership, activities, and daily school life at St Peter's Khwirale.
              - link "View Full Gallery →" [ref=e153] [cursor=pointer]:
                - /url: /gallery
                - text: View Full Gallery
                - generic [ref=e154]: →
            - generic [ref=e155]:
              - img "St Peter's Khwirale School Gallery Image" [ref=e157] [cursor=pointer]
              - img "St Peter's Khwirale School Gallery Image" [ref=e159] [cursor=pointer]
              - img "St Peter's Khwirale School Gallery Image" [ref=e161] [cursor=pointer]
              - img "St Peter's Khwirale School Gallery Image" [ref=e163] [cursor=pointer]
              - img "St Peter's Khwirale School Gallery Image" [ref=e165] [cursor=pointer]
              - img "St Peter's Khwirale School Gallery Image" [ref=e167] [cursor=pointer]
              - img "St Peter's Khwirale School Gallery Image" [ref=e169] [cursor=pointer]
              - link "+55 More" [ref=e170] [cursor=pointer]:
                - /url: /gallery
                - generic [ref=e171]: +55 More
          - generic [ref=e173]:
            - text: Chapter 6
            - heading "Alumni Community" [level=2] [ref=e175]
            - generic [ref=e176]:
              - generic [ref=e177]:
                - paragraph [ref=e178]: Our alumni are our greatest pride. Spread across the globe in various sectors — from medicine and engineering to arts and entrepreneurship — they continue to carry the "Endeavour to Excel" spirit.
                - paragraph [ref=e179]: The St Peter's Khwirale Senior School Alumni Association works to support current students through mentorship programs, scholarships, and infrastructure development. Join our network to give back and connect with former schoolmates.
              - link "Join Alumni Network" [ref=e181] [cursor=pointer]:
                - /url: /alumni
      - generic [ref=e183]:
        - heading "Ready to be part of our story?" [level=2] [ref=e184]
        - generic [ref=e185]:
          - link "Visit Us" [ref=e186] [cursor=pointer]:
            - /url: /contact
          - link "Learn About CBE" [ref=e187] [cursor=pointer]:
            - /url: /cbe
  - contentinfo [ref=e188]:
    - generic [ref=e189]:
      - generic [ref=e190]:
        - generic [ref=e191]:
          - heading "St Peter's Khwirale Senior School" [level=3] [ref=e192]
          - paragraph [ref=e193]: "\"Excellence in Spirit & Academic Truth\""
        - generic [ref=e194]:
          - generic [ref=e195]:
            - heading "Our Mission" [level=4] [ref=e196]
            - paragraph [ref=e197]: To provide quality education that empowers learners to achieve their full potential in a dynamic world.
          - generic [ref=e198]:
            - heading "Our Vision" [level=4] [ref=e199]
            - paragraph [ref=e200]: A center of excellence in academic and character development.
      - generic [ref=e201]:
        - heading "Core Values" [level=3] [ref=e202]
        - list [ref=e203]:
          - listitem [ref=e204]:
            - generic [ref=e205]: ◈
            - text: Discipline
          - listitem [ref=e206]:
            - generic [ref=e207]: ◈
            - text: Integrity
          - listitem [ref=e208]:
            - generic [ref=e209]: ◈
            - text: Hard Work
          - listitem [ref=e210]:
            - generic [ref=e211]: ◈
            - text: Fear of God
      - generic [ref=e212]:
        - heading "Quick Links" [level=3] [ref=e213]
        - list [ref=e214]:
          - listitem [ref=e215]:
            - link "Home Page" [ref=e216] [cursor=pointer]:
              - /url: /
          - listitem [ref=e217]:
            - link "Ministry of Education" [ref=e218] [cursor=pointer]:
              - /url: https://education.go.ke
          - listitem [ref=e219]:
            - link "KNEC Portal" [ref=e220] [cursor=pointer]:
              - /url: https://www.knec.ac.ke
          - listitem [ref=e221]:
            - link "TSC Kenya" [ref=e222] [cursor=pointer]:
              - /url: https://www.tsc.go.ke
          - listitem [ref=e223]:
            - link "KUCCPS Placement" [ref=e224] [cursor=pointer]:
              - /url: https://kuccps.net
      - generic [ref=e225]:
        - heading "Contact Us" [level=3] [ref=e226]
        - list [ref=e227]:
          - listitem [ref=e228]:
            - generic [ref=e229]: 📍
            - text: P.O. Box 160 - 50409, Busia, Kenya
          - listitem [ref=e230]:
            - generic [ref=e231]: 📞
            - text: +254 700 564298
          - listitem [ref=e232]:
            - generic [ref=e233]: ✉️
            - text: stpeterskhwiraleseccndaryshcool@gmail.com
        - generic [ref=e234]:
          - heading "Follow Us" [level=4] [ref=e235]
          - link "Facebook" [ref=e236] [cursor=pointer]:
            - /url: https://web.facebook.com/SPKSS160
            - img [ref=e237]
            - generic [ref=e239]: Facebook
    - paragraph [ref=e241]: © 2026 St Peter's Khwirale Senior School · All Rights Reserved
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