# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.js >> accessibility smoke tests >> /gallery has no serious automated accessibility violations
- Location: tests\accessibility.spec.js:11:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 303

- Array []
+ Array [
+   Object {
+     "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
+     "help": "Elements must meet minimum color contrast ratio thresholds",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright",
+     "id": "color-contrast",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#800000",
+               "contrastRatio": 2.3,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#64748b",
+               "fontSize": "15.0pt (20px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.3 (foreground color: #64748b, background color: #800000, font size: 15.0pt (20px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<footer class=\"bg-school-primary text-white pt-16 pb-8\">",
+                 "target": Array [
+                   "footer",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.3 (foreground color: #64748b, background color: #800000, font size: 15.0pt (20px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h3 class=\"text-xl font-extrabold text-school-secondary mb-6 border-b border-school-secondary/30 pb-2\">St Peter's Khwirale Senior School</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".text-xl",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#800000",
+               "contrastRatio": 2.3,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#64748b",
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.3 (foreground color: #64748b, background color: #800000, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<footer class=\"bg-school-primary text-white pt-16 pb-8\">",
+                 "target": Array [
+                   "footer",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.3 (foreground color: #64748b, background color: #800000, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<h4 class=\"text-school-secondary font-black uppercase text-[10px] tracking-[0.2em] mb-2\">Our Mission</h4>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div:nth-child(1) > .mb-2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#800000",
+               "contrastRatio": 2.3,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#64748b",
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.3 (foreground color: #64748b, background color: #800000, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<footer class=\"bg-school-primary text-white pt-16 pb-8\">",
+                 "target": Array [
+                   "footer",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.3 (foreground color: #64748b, background color: #800000, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<h4 class=\"text-school-secondary font-black uppercase text-[10px] tracking-[0.2em] mb-2\">Our Vision</h4>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div:nth-child(2) > .mb-2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#800000",
+               "contrastRatio": 2.3,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#64748b",
+               "fontSize": "13.5pt (18px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.3 (foreground color: #64748b, background color: #800000, font size: 13.5pt (18px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<footer class=\"bg-school-primary text-white pt-16 pb-8\">",
+                 "target": Array [
+                   "footer",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.3 (foreground color: #64748b, background color: #800000, font size: 13.5pt (18px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<h3 class=\"text-lg font-bold text-school-secondary mb-6 border-b border-school-secondary/30 pb-2\">Core Values</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div:nth-child(2) > h3",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#800000",
+               "contrastRatio": 2.3,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#64748b",
+               "fontSize": "13.5pt (18px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.3 (foreground color: #64748b, background color: #800000, font size: 13.5pt (18px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<footer class=\"bg-school-primary text-white pt-16 pb-8\">",
+                 "target": Array [
+                   "footer",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.3 (foreground color: #64748b, background color: #800000, font size: 13.5pt (18px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<h3 class=\"text-lg font-bold text-school-secondary mb-6 border-b border-school-secondary/30 pb-2\">Quick Links</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div:nth-child(3) > h3",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#800000",
+               "contrastRatio": 2.3,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#64748b",
+               "fontSize": "13.5pt (18px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.3 (foreground color: #64748b, background color: #800000, font size: 13.5pt (18px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<footer class=\"bg-school-primary text-white pt-16 pb-8\">",
+                 "target": Array [
+                   "footer",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.3 (foreground color: #64748b, background color: #800000, font size: 13.5pt (18px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<h3 class=\"text-lg font-bold text-school-secondary mb-6 border-b border-school-secondary/30 pb-2\">Contact Us</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div:nth-child(4) > h3",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#800000",
+               "contrastRatio": 2.3,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#64748b",
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.3 (foreground color: #64748b, background color: #800000, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<footer class=\"bg-school-primary text-white pt-16 pb-8\">",
+                 "target": Array [
+                   "footer",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.3 (foreground color: #64748b, background color: #800000, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<h4 class=\"text-school-secondary font-black uppercase text-[10px] tracking-[0.2em] mb-4\">Follow Us</h4>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".mb-4",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#1877f2",
+               "contrastRatio": 4.23,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ffffff",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.23 (foreground color: #ffffff, background color: #1877f2, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a href=\"https://web.facebook.com/SPKSS160\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#0d65d9] text-white px-4 py-2 rounded-lg transition-all hover:scale-105 shadow-lg\">",
+                 "target": Array [
+                   ".inline-flex",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.23 (foreground color: #ffffff, background color: #1877f2, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-bold text-sm\">Facebook</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".inline-flex > .font-bold",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.color",
+       "wcag2aa",
+       "wcag143",
+       "TTv5",
+       "TT13.c",
+       "EN-301-549",
+       "EN-9.1.4.3",
+       "ACT",
+       "RGAAv4",
+       "RGAA-3.2.1",
+     ],
+   },
+ ]
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e5]:
      - link "St Peter's Khwirale Senior School Logo St Peter's Khwirale" [ref=e6] [cursor=pointer]:
        - /url: /
        - img "St Peter's Khwirale Senior School Logo" [ref=e7]
        - generic [ref=e8]:
          - text: St Peter's
          - generic [ref=e9]: Khwirale
      - button "Open menu" [ref=e10] [cursor=pointer]:
        - img [ref=e11]
  - main [ref=e13]:
    - generic [ref=e14]:
      - generic [ref=e16]:
        - heading "School Gallery" [level=2] [ref=e17]
        - paragraph [ref=e18]: A glimpse into learning, leadership, activities, and daily school life.
      - generic [ref=e20]:
        - img "St Peter's Khwirale School Gallery Image" [ref=e22] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e24] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e26] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e28] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e30] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e32] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e34] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e36] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e38] [cursor=pointer]
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
        - img "St Peter's Khwirale Sports Team" [ref=e144] [cursor=pointer]
      - text: //add controls on the gallery to the left and right of the image when it is selected
  - contentinfo [ref=e145]:
    - generic [ref=e146]:
      - generic [ref=e147]:
        - generic [ref=e148]:
          - heading "St Peter's Khwirale Senior School" [level=3] [ref=e149]
          - paragraph [ref=e150]: "\"Excellence in Spirit & Academic Truth\""
        - generic [ref=e151]:
          - generic [ref=e152]:
            - heading "Our Mission" [level=4] [ref=e153]
            - paragraph [ref=e154]: To provide quality education that empowers learners to achieve their full potential in a dynamic world.
          - generic [ref=e155]:
            - heading "Our Vision" [level=4] [ref=e156]
            - paragraph [ref=e157]: A center of excellence in academic and character development.
      - generic [ref=e158]:
        - heading "Core Values" [level=3] [ref=e159]
        - list [ref=e160]:
          - listitem [ref=e161]:
            - generic [ref=e162]: ◈
            - text: Discipline
          - listitem [ref=e163]:
            - generic [ref=e164]: ◈
            - text: Integrity
          - listitem [ref=e165]:
            - generic [ref=e166]: ◈
            - text: Hard Work
          - listitem [ref=e167]:
            - generic [ref=e168]: ◈
            - text: Fear of God
      - generic [ref=e169]:
        - heading "Quick Links" [level=3] [ref=e170]
        - list [ref=e171]:
          - listitem [ref=e172]:
            - link "Home Page" [ref=e173] [cursor=pointer]:
              - /url: /
          - listitem [ref=e174]:
            - link "Ministry of Education" [ref=e175] [cursor=pointer]:
              - /url: https://education.go.ke
          - listitem [ref=e176]:
            - link "KNEC Portal" [ref=e177] [cursor=pointer]:
              - /url: https://www.knec.ac.ke
          - listitem [ref=e178]:
            - link "TSC Kenya" [ref=e179] [cursor=pointer]:
              - /url: https://www.tsc.go.ke
          - listitem [ref=e180]:
            - link "KUCCPS Placement" [ref=e181] [cursor=pointer]:
              - /url: https://kuccps.net
      - generic [ref=e182]:
        - heading "Contact Us" [level=3] [ref=e183]
        - list [ref=e184]:
          - listitem [ref=e185]:
            - generic [ref=e186]: 📍
            - text: P.O. Box 160 - 50409, Busia, Kenya
          - listitem [ref=e187]:
            - generic [ref=e188]: 📞
            - text: +254 700 564298
          - listitem [ref=e189]:
            - generic [ref=e190]: ✉️
            - text: stpeterskhwiraleseccndaryshcool@gmail.com
        - generic [ref=e191]:
          - heading "Follow Us" [level=4] [ref=e192]
          - link "Facebook" [ref=e193] [cursor=pointer]:
            - /url: https://web.facebook.com/SPKSS160
            - img [ref=e194]
            - generic [ref=e196]: Facebook
    - paragraph [ref=e198]: © 2026 St Peter's Khwirale Senior School · All Rights Reserved
```

# Test source

```ts
  1  | import AxeBuilder from "@axe-core/playwright";
  2  | import { expect, test } from "@playwright/test";
  3  | import { mockSanityApi, routes } from "./helpers.js";
  4  | 
  5  | test.describe("accessibility smoke tests", () => {
  6  |   test.beforeEach(async ({ page }) => {
  7  |     await mockSanityApi(page);
  8  |   });
  9  | 
  10 |   for (const route of routes) {
  11 |     test(`${route.path} has no serious automated accessibility violations`, async ({ page }) => {
  12 |       await page.goto(route.path);
  13 |       await expect(page.getByRole("heading", { name: route.heading }).first()).toBeVisible();
  14 | 
  15 |       const results = await new AxeBuilder({ page })
  16 |         .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
  17 |         .analyze();
  18 | 
  19 |       const seriousViolations = results.violations.filter((violation) =>
  20 |         ["serious", "critical"].includes(violation.impact)
  21 |       );
  22 | 
> 23 |       expect(seriousViolations).toEqual([]);
     |                                 ^ Error: expect(received).toEqual(expected) // deep equality
  24 |     });
  25 |   }
  26 | });
  27 | 
```