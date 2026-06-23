# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: performance.spec.js >> performance smoke tests >> / loads within a basic local timing budget
- Location: tests\performance.spec.js:12:5

# Error details

```
Error: expect(received).toBeLessThan(expected)

Expected: < 3000
Received:   3694
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
      - generic [ref=e33]:
        - generic [ref=e34]:
          - img "St Peter's Khwirale Modern Infrastructure" [ref=e36]
          - img "Students in Science Laboratory" [ref=e39]
          - img "Sports and Co-curricular Activities" [ref=e42]
        - generic:
          - button "Previous Slide" [ref=e44] [cursor=pointer]:
            - img [ref=e45]
          - button "Next Slide" [ref=e47] [cursor=pointer]:
            - img [ref=e48]
        - generic [ref=e51]:
          - button "Go to slide 1" [ref=e52] [cursor=pointer]
          - button "Go to slide 2" [ref=e53] [cursor=pointer]
          - button "Go to slide 3" [ref=e54] [cursor=pointer]
      - generic [ref=e56]:
        - heading "Excellence in Spirit & Academic Truth" [level=1] [ref=e57]
        - paragraph [ref=e58]: Empowering the next generation of leaders through a holistic education rooted in discipline, faith, and knowledge.
    - generic [ref=e61]:
      - heading "Welcome to St Peter's Khwirale Senior School" [level=2] [ref=e62]
      - paragraph [ref=e63]: A public Mixed Senior School categorized as C4 under the new Competency-Based Education (CBE) curriculum. We are dedicated to empowering our students through quality education, discipline, and integrity, while providing a safe and supportive environment where every child can discover their potential and thrive.
      - paragraph [ref=e64]: Browse through our website to learn more about us, from our academic programs and vibrant student life to our achievements and community engagement.
    - generic [ref=e67]:
      - generic [ref=e68]:
        - img [ref=e70]
        - heading "Motto" [level=3] [ref=e72]
        - paragraph [ref=e73]: "\"Endeavour to excel\""
      - generic [ref=e74]:
        - img [ref=e76]
        - heading "Vision" [level=3] [ref=e79]
        - paragraph [ref=e80]: To have a community where all children feel loved, respected and encouraged to develop to their full potential.
      - generic [ref=e81]:
        - img [ref=e83]
        - heading "Mission" [level=3] [ref=e85]
        - paragraph [ref=e86]: To provide quality education, childcare in a safe respectful inclusive environment that builds a foundation for lifelong learning.
      - generic [ref=e87]:
        - img [ref=e89]
        - heading "Core Values" [level=3] [ref=e91]
        - list [ref=e92]:
          - listitem [ref=e93]: Diligence
          - listitem [ref=e94]: Team spirit
          - listitem [ref=e95]: Integrity
          - listitem [ref=e96]: Accountability
    - generic [ref=e98]:
      - heading "A message from our principal" [level=2] [ref=e99]
      - generic [ref=e100]:
        - generic [ref=e102]:
          - generic [ref=e104]: 👤
          - img "Annastancia Otawa" [ref=e105]
          - generic [ref=e106]:
            - paragraph [ref=e107]: Annastancia Otawa
            - paragraph [ref=e108]: Principal
        - generic [ref=e109]:
          - blockquote [ref=e110]: "\"At St. Peter's Khwirale Senior School , we take pride in being more than just an institution of learning — we are a family dedicated to shaping the minds and character of our students. Our commitment is to provide a holistic education that nurtures discipline, academic excellence, and integrity while empowering our students to face the future with confidence. We believe that education is a partnership between the school, parents, and the wider community. With the dedication of our teachers, the support of parents, and the enthusiasm of our students, we continue to build a strong foundation for success. Our focus goes beyond academics, as we encourage participation in sports, clubs, leadership opportunities, and community service to ensure that every child develops their unique potential. As Principal, my vision is to see every student of St. Peter's Khwirale Senior School leave our gates not only with knowledge but also with values, resilience, and a sense of responsibility to society. I warmly welcome you to be part of our journey, whether as a parent, alumna, partner, or friend of the school. Together, we can continue to make St. Peter's Khwirale Senior School a beacon of excellence in education and personal growth.\""
          - generic [ref=e111]:
            - link "About Us →" [ref=e112] [cursor=pointer]:
              - /url: /about
              - text: About Us
              - generic [ref=e113]: →
            - link "School History" [ref=e114] [cursor=pointer]:
              - /url: /about/history
    - generic [ref=e116]:
      - heading "Explore more about our school" [level=2] [ref=e117]
      - paragraph [ref=e118]: Discover our rich history, academic programs, extracurricular activities, and vibrant school life.
      - generic [ref=e119]:
        - link "📚 Our Departments Explore our diverse academic departments and focused learning areas." [ref=e120] [cursor=pointer]:
          - /url: /academics#departments
          - generic [ref=e121]: 📚
          - heading "Our Departments" [level=3] [ref=e122]
          - paragraph [ref=e123]: Explore our diverse academic departments and focused learning areas.
        - link "💳 Fee Structure Contact us for detailed information about school fees and payment methods." [ref=e124] [cursor=pointer]:
          - /url: /contact
          - generic [ref=e125]: 💳
          - heading "Fee Structure" [level=3] [ref=e126]
          - paragraph [ref=e127]: Contact us for detailed information about school fees and payment methods.
        - link "🏆 KCSE Results Celebrating our academic excellence and consistent top performers." [ref=e128] [cursor=pointer]:
          - /url: /academics#results
          - generic [ref=e129]: 🏆
          - heading "KCSE Results" [level=3] [ref=e130]
          - paragraph [ref=e131]: Celebrating our academic excellence and consistent top performers.
        - link "📅 Upcoming Events Stay updated with our school calendar and upcoming social activities." [ref=e132] [cursor=pointer]:
          - /url: /updates#events
          - generic [ref=e133]: 📅
          - heading "Upcoming Events" [level=3] [ref=e134]
          - paragraph [ref=e135]: Stay updated with our school calendar and upcoming social activities.
    - generic [ref=e137]:
      - heading "A glimpse into our school" [level=2] [ref=e138]
      - generic [ref=e139]:
        - img "St Peter's Khwirale School Gallery Image" [ref=e141] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e143] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e145] [cursor=pointer]
      - link "View Full Gallery →" [ref=e146] [cursor=pointer]:
        - /url: /gallery
        - text: View Full Gallery
        - generic [ref=e147]: →
    - generic [ref=e149]:
      - generic [ref=e150]:
        - generic [ref=e151]:
          - heading "School News & Education Updates" [level=2] [ref=e152]
          - paragraph [ref=e153]: Stay informed with the latest happenings, academic milestones, and educational announcements from St Peter's Khwirale.
        - link "All Updates →" [ref=e154] [cursor=pointer]:
          - /url: /updates
          - text: All Updates
          - generic [ref=e155]: →
      - generic [ref=e156]:
        - article [ref=e157]:
          - generic [ref=e158]:
            - img "KCSE Prep" [ref=e159]
            - generic [ref=e160]: Academic
          - generic [ref=e161]:
            - time [ref=e162]: January 15, 2025
            - heading "Preparation for 2025 KCSE Exams Commences" [level=3] [ref=e163]
            - paragraph [ref=e164]: Our candidates have officially begun their intensive revision bootcamps. The faculty is committed to ensuring every student reaches their target.
            - link "Read More →" [ref=e165] [cursor=pointer]:
              - /url: /updates
              - text: Read More
              - generic [ref=e166]: →
        - article [ref=e167]:
          - generic [ref=e168]:
            - img "Boarding Facilities" [ref=e169]
            - generic [ref=e170]: Infrastructure
          - generic [ref=e171]:
            - time [ref=e172]: January 10, 2025
            - heading "New Science Laboratory Commissioned" [level=3] [ref=e173]
            - paragraph [ref=e174]: We are proud to announce the completion of our state-of-the-art physics laboratory, equipped to handle the new CBE curriculum requirements.
            - link "Read More →" [ref=e175] [cursor=pointer]:
              - /url: /updates
              - text: Read More
              - generic [ref=e176]: →
        - article [ref=e177]:
          - generic [ref=e178]:
            - img "Sports Day" [ref=e179]
            - generic [ref=e180]: Student Life
          - generic [ref=e181]:
            - time [ref=e182]: December 20, 2024
            - heading "Annual Inter-House Sports Extravaganza" [level=3] [ref=e183]
            - paragraph [ref=e184]: A look back at the thrilling competitions and sportsmanship displayed during our end-of-year sports festival. Congratulations to Simba House!
            - link "Read More →" [ref=e185] [cursor=pointer]:
              - /url: /updates
              - text: Read More
              - generic [ref=e186]: →
      - link "View All News →" [ref=e188] [cursor=pointer]:
        - /url: /updates
        - text: View All News
        - generic [ref=e189]: →
    - generic [ref=e191]:
      - heading "Frequently Asked Questions" [level=2] [ref=e192]
      - paragraph [ref=e193]: Find quick answers about admissions, fees, school life, and more.
      - generic [ref=e194]:
        - group [ref=e195]:
          - generic "01 How do I apply for grade 10 placement in 2027? ↓" [ref=e196] [cursor=pointer]:
            - generic [ref=e197]:
              - generic [ref=e198]: "01"
              - generic [ref=e199]: How do I apply for grade 10 placement in 2027?
            - generic [ref=e200]: ↓
        - group [ref=e201]:
          - generic "02 Which pathways and elective tracks are available under the CBC? ↓" [ref=e202] [cursor=pointer]:
            - generic [ref=e203]:
              - generic [ref=e204]: "02"
              - generic [ref=e205]: Which pathways and elective tracks are available under the CBC?
            - generic [ref=e206]: ↓
        - group [ref=e207]:
          - generic "03 What is the 2027 fee structure and how can I pay? ↓" [ref=e208] [cursor=pointer]:
            - generic [ref=e209]:
              - generic [ref=e210]: "03"
              - generic [ref=e211]: What is the 2027 fee structure and how can I pay?
            - generic [ref=e212]: ↓
        - group [ref=e213]:
          - generic "04 How did our students perform in the 2025 KCSE exams? ↓" [ref=e214] [cursor=pointer]:
            - generic [ref=e215]:
              - generic [ref=e216]: "04"
              - generic [ref=e217]: How did our students perform in the 2025 KCSE exams?
            - generic [ref=e218]: ↓
        - group [ref=e219]:
          - generic "05 What clubs, sports teams and extracurricular activities do you offer? ↓" [ref=e220] [cursor=pointer]:
            - generic [ref=e221]:
              - generic [ref=e222]: "05"
              - generic [ref=e223]: What clubs, sports teams and extracurricular activities do you offer?
            - generic [ref=e224]: ↓
      - generic [ref=e225]:
        - paragraph [ref=e226]: Didn't find what you're looking for? Visit our full FAQ section for more information.
        - link "View All Questions →" [ref=e227] [cursor=pointer]:
          - /url: /about#overview
          - text: View All Questions
          - generic [ref=e228]: →
    - generic [ref=e230]:
      - heading "Our Partners" [level=2] [ref=e231]
      - generic [ref=e233]:
        - generic [ref=e234]:
          - img "Ministry of Education"
        - img "KNEC" [ref=e236]
        - img "TSC Logo" [ref=e238]
        - img "KICD" [ref=e240]
  - contentinfo [ref=e241]:
    - generic [ref=e242]:
      - generic [ref=e243]:
        - generic [ref=e244]:
          - heading "St Peter's Khwirale Senior School" [level=3] [ref=e245]
          - paragraph [ref=e246]: "\"Excellence in Spirit & Academic Truth\""
        - generic [ref=e247]:
          - generic [ref=e248]:
            - heading "Our Mission" [level=4] [ref=e249]
            - paragraph [ref=e250]: To provide quality education that empowers learners to achieve their full potential in a dynamic world.
          - generic [ref=e251]:
            - heading "Our Vision" [level=4] [ref=e252]
            - paragraph [ref=e253]: A center of excellence in academic and character development.
      - generic [ref=e254]:
        - heading "Core Values" [level=3] [ref=e255]
        - list [ref=e256]:
          - listitem [ref=e257]:
            - generic [ref=e258]: ◈
            - text: Discipline
          - listitem [ref=e259]:
            - generic [ref=e260]: ◈
            - text: Integrity
          - listitem [ref=e261]:
            - generic [ref=e262]: ◈
            - text: Hard Work
          - listitem [ref=e263]:
            - generic [ref=e264]: ◈
            - text: Fear of God
      - generic [ref=e265]:
        - heading "Quick Links" [level=3] [ref=e266]
        - list [ref=e267]:
          - listitem [ref=e268]:
            - link "Home Page" [ref=e269] [cursor=pointer]:
              - /url: /
          - listitem [ref=e270]:
            - link "Ministry of Education" [ref=e271] [cursor=pointer]:
              - /url: https://education.go.ke
          - listitem [ref=e272]:
            - link "KNEC Portal" [ref=e273] [cursor=pointer]:
              - /url: https://www.knec.ac.ke
          - listitem [ref=e274]:
            - link "TSC Kenya" [ref=e275] [cursor=pointer]:
              - /url: https://www.tsc.go.ke
          - listitem [ref=e276]:
            - link "KUCCPS Placement" [ref=e277] [cursor=pointer]:
              - /url: https://kuccps.net
      - generic [ref=e278]:
        - heading "Contact Us" [level=3] [ref=e279]
        - list [ref=e280]:
          - listitem [ref=e281]:
            - generic [ref=e282]: 📍
            - text: P.O. Box 160 - 50409, Busia, Kenya
          - listitem [ref=e283]:
            - generic [ref=e284]: 📞
            - text: +254 700 564298
          - listitem [ref=e285]:
            - generic [ref=e286]: ✉️
            - text: stpeterskhwiraleseccndaryshcool@gmail.com
        - generic [ref=e287]:
          - heading "Follow Us" [level=4] [ref=e288]
          - link "Facebook" [ref=e289] [cursor=pointer]:
            - /url: https://web.facebook.com/SPKSS160
            - img [ref=e290]
            - generic [ref=e292]: Facebook
    - paragraph [ref=e294]: © 2026 St Peter's Khwirale Senior School · All Rights Reserved
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