# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.js >> accessibility smoke tests >> /cbe has no serious automated accessibility violations
- Location: tests\accessibility.spec.js:11:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 496

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
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.53,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9ca3af",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.53 (foreground color: #9ca3af, background color: #ffffff, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"sticky top-28 space-y-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100\">",
+                 "target": Array [
+                   ".top-28",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.53 (foreground color: #9ca3af, background color: #ffffff, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<h3 class=\"text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 px-2\">CBE Chapters</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".text-gray-400",
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
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.3 (foreground color: #64748b, background color: #800000, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-school-primary text-white p-8 md:p-12 rounded-3xl shadow-xl\">",
+                 "target": Array [
+                   ".shadow-xl.p-8.md\\:p-12",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.3 (foreground color: #64748b, background color: #800000, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-school-secondary font-bold tracking-widest uppercase text-sm\">Chapter 4</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".shadow-xl.p-8.md\\:p-12 > .tracking-widest.uppercase",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#860d0d",
+               "contrastRatio": 1.08,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#800000",
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.08 (foreground color: #800000, background color: #860d0d, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors\">",
+                 "target": Array [
+                   ".bg-white\\/5.hover\\:bg-white\\/10.border-white\\/10:nth-child(1)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"bg-school-primary text-white p-8 md:p-12 rounded-3xl shadow-xl\">",
+                 "target": Array [
+                   ".shadow-xl.p-8.md\\:p-12",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.08 (foreground color: #800000, background color: #860d0d, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<h4 class=\"font-bold mb-2\">Safe Boarding</h4>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".bg-white\\/5.hover\\:bg-white\\/10.border-white\\/10:nth-child(1) > .mb-2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#860d0d",
+               "contrastRatio": 1.08,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#800000",
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.08 (foreground color: #800000, background color: #860d0d, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors\">",
+                 "target": Array [
+                   ".bg-white\\/5.hover\\:bg-white\\/10.border-white\\/10:nth-child(2)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"bg-school-primary text-white p-8 md:p-12 rounded-3xl shadow-xl\">",
+                 "target": Array [
+                   ".shadow-xl.p-8.md\\:p-12",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.08 (foreground color: #800000, background color: #860d0d, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<h4 class=\"font-bold mb-2\">Balanced Nutrition</h4>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".bg-white\\/5.hover\\:bg-white\\/10.border-white\\/10:nth-child(2) > .mb-2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#860d0d",
+               "contrastRatio": 1.08,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#800000",
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.08 (foreground color: #800000, background color: #860d0d, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors\">",
+                 "target": Array [
+                   ".bg-white\\/5.hover\\:bg-white\\/10.border-white\\/10:nth-child(3)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"bg-school-primary text-white p-8 md:p-12 rounded-3xl shadow-xl\">",
+                 "target": Array [
+                   ".shadow-xl.p-8.md\\:p-12",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.08 (foreground color: #800000, background color: #860d0d, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<h4 class=\"font-bold mb-2\">Student Health</h4>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".bg-white\\/5.hover\\:bg-white\\/10.border-white\\/10:nth-child(3) > .mb-2",
+         ],
+       },
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
+           ".text-xl.font-extrabold.border-school-secondary\\/30",
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
+           "div:nth-child(1) > .font-black.text-\\[10px\\].tracking-\\[0\\.2em\\]",
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
+           "div:nth-child(2) > .font-black.text-\\[10px\\].tracking-\\[0\\.2em\\]",
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
+           "div:nth-child(2) > .border-school-secondary\\/30.pb-2",
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
+           "div:nth-child(3) > .border-school-secondary\\/30.pb-2",
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
+           "div:nth-child(4) > .border-school-secondary\\/30.pb-2",
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
+           ".mt-8 > .font-black.text-\\[10px\\].tracking-\\[0\\.2em\\]",
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
+           ".inline-flex > span",
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
        - heading "Competency Based Education" [level=1] [ref=e35]
        - paragraph [ref=e36]: Nurturing every learner's potential through practical and skills-based learning.
      - generic [ref=e37]:
        - complementary [ref=e38]:
          - generic [ref=e39]:
            - heading "CBE Chapters" [level=3] [ref=e40]
            - link "Pathways & Learning" [ref=e41] [cursor=pointer]:
              - /url: "#pathways"
            - link "Admissions Process" [ref=e42] [cursor=pointer]:
              - /url: "#admissions"
            - link "Fee Structure" [ref=e43] [cursor=pointer]:
              - /url: "#fees"
            - link "Student Life & Welfare" [ref=e44] [cursor=pointer]:
              - /url: "#student-life"
        - main [ref=e45]:
          - generic [ref=e47]:
            - text: Chapter 1
            - generic [ref=e48]:
              - generic [ref=e49]:
                - heading "Pathways & Learning" [level=2] [ref=e50]
                - paragraph [ref=e51]: The Competency-Based Curriculum (CBC) at St Peter's Khwirale Senior School is designed to foster a wide range of skills, ensuring that every student finds a path that matches their passion and potential.
                - paragraph [ref=e52]: Joining St Peter's Khwirale is a straightforward process managed with transparency and care.
              - generic [ref=e53]:
                - generic [ref=e54]:
                  - heading "STEM Pathway" [level=4] [ref=e55]
                  - paragraph [ref=e56]: Science, Technology, Engineering, and Mathematics focus for future innovators.
                - generic [ref=e57]:
                  - heading "Arts & Sports Science" [level=4] [ref=e58]
                  - paragraph [ref=e59]: Nurturing creative talent and physical excellence through specialized coaching.
          - generic [ref=e61]:
            - text: Chapter 2
            - heading "Admissions Process" [level=2] [ref=e62]
            - generic [ref=e63]:
              - paragraph [ref=e65]: Joining St Peter's Khwirale is a straightforward process managed with transparency and care.
              - generic [ref=e66]:
                - generic [ref=e67]:
                  - 'heading "Step 1: Application" [level=4] [ref=e69]'
                  - paragraph [ref=e70]: Collect admission forms from the school office or download them from our digital portal.
                - generic [ref=e71]:
                  - 'heading "Step 2: Interview & Assessment" [level=4] [ref=e73]'
                  - paragraph [ref=e74]: Students undergo a basic assessment to help us understand their learning needs.
                - generic [ref=e75]:
                  - 'heading "Step 3: Registration" [level=4] [ref=e77]'
                  - paragraph [ref=e78]: Upon successful assessment, complete formal registration and fee payment.
          - generic [ref=e80]:
            - text: Chapter 3
            - heading "Fee Structure" [level=2] [ref=e81]
            - generic [ref=e82]:
              - paragraph [ref=e84]: We maintain competitive and transparent fees to ensure quality education remains accessible.
              - table [ref=e86]:
                - rowgroup [ref=e87]:
                  - row "Category Standard Term Fee" [ref=e88]:
                    - columnheader "Category" [ref=e89]
                    - columnheader "Standard Term Fee" [ref=e90]
                - rowgroup [ref=e91]:
                  - row "Tuition & Learning Materials KES 12,500" [ref=e92]:
                    - cell "Tuition & Learning Materials" [ref=e93]
                    - cell "KES 12,500" [ref=e94]
                  - row "Administrative Levies KES 3,200" [ref=e95]:
                    - cell "Administrative Levies" [ref=e96]
                    - cell "KES 3,200" [ref=e97]
                  - row "Activity & Co-curricular KES 1,500" [ref=e98]:
                    - cell "Activity & Co-curricular" [ref=e99]
                    - cell "KES 1,500" [ref=e100]
                  - row "Medical & Insurance KES 800" [ref=e101]:
                    - cell "Medical & Insurance" [ref=e102]
                    - cell "KES 800" [ref=e103]
                  - row "PTA Project Fund KES 2,000" [ref=e104]:
                    - cell "PTA Project Fund" [ref=e105]
                    - cell "KES 2,000" [ref=e106]
              - paragraph [ref=e107]: "* Fees are subject to review by the BOM and PA. Contact the office for detailed breakdown."
          - generic [ref=e109]:
            - text: Chapter 4
            - generic [ref=e110]:
              - heading "Student Life & Welfare" [level=2] [ref=e111]
              - paragraph [ref=e112]: Student welfare is central to school life, with safe boarding, balanced meals, health support, and structured pastoral care.
            - generic [ref=e113]:
              - generic [ref=e114]:
                - generic [ref=e115]: 🏡
                - heading "Safe Boarding" [level=4] [ref=e116]
                - paragraph [ref=e117]: Modern dormitories providing a comfortable and structured environment for growth.
              - generic [ref=e118]:
                - generic [ref=e119]: 🍲
                - heading "Balanced Nutrition" [level=4] [ref=e120]
                - paragraph [ref=e121]: We provide healthy, balanced meals that fuel the bodies and minds of our learners.
              - generic [ref=e122]:
                - generic [ref=e123]: 🚑
                - heading "Student Health" [level=4] [ref=e124]
                - paragraph [ref=e125]: Dedicated school clinic with qualified staff to handle student wellbeing 24/7.
      - generic [ref=e127]:
        - heading "Ready to enroll in our CBE program?" [level=2] [ref=e128]
        - generic [ref=e129]:
          - link "Contact Admissions" [ref=e130] [cursor=pointer]:
            - /url: /contact
          - link "Full Curriculum Details" [ref=e131] [cursor=pointer]:
            - /url: /academics
  - contentinfo [ref=e132]:
    - generic [ref=e133]:
      - generic [ref=e134]:
        - generic [ref=e135]:
          - heading "St Peter's Khwirale Senior School" [level=3] [ref=e136]
          - paragraph [ref=e137]: "\"Excellence in Spirit & Academic Truth\""
        - generic [ref=e138]:
          - generic [ref=e139]:
            - heading "Our Mission" [level=4] [ref=e140]
            - paragraph [ref=e141]: To provide quality education that empowers learners to achieve their full potential in a dynamic world.
          - generic [ref=e142]:
            - heading "Our Vision" [level=4] [ref=e143]
            - paragraph [ref=e144]: A center of excellence in academic and character development.
      - generic [ref=e145]:
        - heading "Core Values" [level=3] [ref=e146]
        - list [ref=e147]:
          - listitem [ref=e148]:
            - generic [ref=e149]: ◈
            - text: Discipline
          - listitem [ref=e150]:
            - generic [ref=e151]: ◈
            - text: Integrity
          - listitem [ref=e152]:
            - generic [ref=e153]: ◈
            - text: Hard Work
          - listitem [ref=e154]:
            - generic [ref=e155]: ◈
            - text: Fear of God
      - generic [ref=e156]:
        - heading "Quick Links" [level=3] [ref=e157]
        - list [ref=e158]:
          - listitem [ref=e159]:
            - link "Home Page" [ref=e160] [cursor=pointer]:
              - /url: /
          - listitem [ref=e161]:
            - link "Ministry of Education" [ref=e162] [cursor=pointer]:
              - /url: https://education.go.ke
          - listitem [ref=e163]:
            - link "KNEC Portal" [ref=e164] [cursor=pointer]:
              - /url: https://www.knec.ac.ke
          - listitem [ref=e165]:
            - link "TSC Kenya" [ref=e166] [cursor=pointer]:
              - /url: https://www.tsc.go.ke
          - listitem [ref=e167]:
            - link "KUCCPS Placement" [ref=e168] [cursor=pointer]:
              - /url: https://kuccps.net
      - generic [ref=e169]:
        - heading "Contact Us" [level=3] [ref=e170]
        - list [ref=e171]:
          - listitem [ref=e172]:
            - generic [ref=e173]: 📍
            - text: P.O. Box 160 - 50409, Busia, Kenya
          - listitem [ref=e174]:
            - generic [ref=e175]: 📞
            - text: +254 700 564298
          - listitem [ref=e176]:
            - generic [ref=e177]: ✉️
            - text: stpeterskhwiraleseccndaryshcool@gmail.com
        - generic [ref=e178]:
          - heading "Follow Us" [level=4] [ref=e179]
          - link "Facebook" [ref=e180] [cursor=pointer]:
            - /url: https://web.facebook.com/SPKSS160
            - img [ref=e181]
            - generic [ref=e183]: Facebook
    - paragraph [ref=e185]: © 2026 St Peter's Khwirale Senior School · All Rights Reserved
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