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
      - link "St Peter's Khwirale Senior School Logo St Peter's Khwirale" [ref=e6]:
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
        - heading "Competency Based Education" [level=1] [ref=e17]
        - paragraph [ref=e18]: Nurturing every learner's potential through practical and skills-based learning.
      - generic [ref=e19]:
        - complementary [ref=e20]:
          - generic [ref=e21]:
            - heading "CBE Chapters" [level=3] [ref=e22]
            - link "Pathways & Learning" [ref=e23]:
              - /url: "#pathways"
            - link "Admissions Process" [ref=e24]:
              - /url: "#admissions"
            - link "Fee Structure" [ref=e25]:
              - /url: "#fees"
            - link "Student Life & Welfare" [ref=e26]:
              - /url: "#student-life"
        - main [ref=e27]:
          - generic [ref=e29]:
            - text: Chapter 1
            - generic [ref=e30]:
              - generic [ref=e31]:
                - heading "Pathways & Learning" [level=2] [ref=e32]
                - paragraph [ref=e33]: The Competency-Based Curriculum (CBC) at St Peter's Khwirale Senior School is designed to foster a wide range of skills, ensuring that every student finds a path that matches their passion and potential.
                - paragraph [ref=e34]: Joining St Peter's Khwirale is a straightforward process managed with transparency and care.
              - generic [ref=e35]:
                - generic [ref=e36]:
                  - heading "STEM Pathway" [level=4] [ref=e37]
                  - paragraph [ref=e38]: Science, Technology, Engineering, and Mathematics focus for future innovators.
                - generic [ref=e39]:
                  - heading "Arts & Sports Science" [level=4] [ref=e40]
                  - paragraph [ref=e41]: Nurturing creative talent and physical excellence through specialized coaching.
          - generic [ref=e43]:
            - text: Chapter 2
            - heading "Admissions Process" [level=2] [ref=e44]
            - generic [ref=e45]:
              - paragraph [ref=e47]: Joining St Peter's Khwirale is a straightforward process managed with transparency and care.
              - generic [ref=e48]:
                - generic [ref=e49]:
                  - 'heading "Step 1: Application" [level=4] [ref=e51]'
                  - paragraph [ref=e52]: Collect admission forms from the school office or download them from our digital portal.
                - generic [ref=e53]:
                  - 'heading "Step 2: Interview & Assessment" [level=4] [ref=e55]'
                  - paragraph [ref=e56]: Students undergo a basic assessment to help us understand their learning needs.
                - generic [ref=e57]:
                  - 'heading "Step 3: Registration" [level=4] [ref=e59]'
                  - paragraph [ref=e60]: Upon successful assessment, complete formal registration and fee payment.
          - generic [ref=e62]:
            - text: Chapter 3
            - heading "Fee Structure" [level=2] [ref=e63]
            - generic [ref=e64]:
              - paragraph [ref=e66]: We maintain competitive and transparent fees to ensure quality education remains accessible.
              - table [ref=e68]:
                - rowgroup [ref=e69]:
                  - row "Category Standard Term Fee" [ref=e70]:
                    - columnheader "Category" [ref=e71]
                    - columnheader "Standard Term Fee" [ref=e72]
                - rowgroup [ref=e73]:
                  - row "Tuition & Learning Materials KES 12,500" [ref=e74]:
                    - cell "Tuition & Learning Materials" [ref=e75]
                    - cell "KES 12,500" [ref=e76]
                  - row "Administrative Levies KES 3,200" [ref=e77]:
                    - cell "Administrative Levies" [ref=e78]
                    - cell "KES 3,200" [ref=e79]
                  - row "Activity & Co-curricular KES 1,500" [ref=e80]:
                    - cell "Activity & Co-curricular" [ref=e81]
                    - cell "KES 1,500" [ref=e82]
                  - row "Medical & Insurance KES 800" [ref=e83]:
                    - cell "Medical & Insurance" [ref=e84]
                    - cell "KES 800" [ref=e85]
                  - row "PTA Project Fund KES 2,000" [ref=e86]:
                    - cell "PTA Project Fund" [ref=e87]
                    - cell "KES 2,000" [ref=e88]
              - paragraph [ref=e89]: "* Fees are subject to review by the BOM and PA. Contact the office for detailed breakdown."
          - generic [ref=e91]:
            - text: Chapter 4
            - generic [ref=e92]:
              - heading "Student Life & Welfare" [level=2] [ref=e93]
              - paragraph [ref=e94]: Student welfare is central to school life, with safe boarding, balanced meals, health support, and structured pastoral care.
            - generic [ref=e95]:
              - generic [ref=e96]:
                - generic [ref=e97]: 🏡
                - heading "Safe Boarding" [level=4] [ref=e98]
                - paragraph [ref=e99]: Modern dormitories providing a comfortable and structured environment for growth.
              - generic [ref=e100]:
                - generic [ref=e101]: 🍲
                - heading "Balanced Nutrition" [level=4] [ref=e102]
                - paragraph [ref=e103]: We provide healthy, balanced meals that fuel the bodies and minds of our learners.
              - generic [ref=e104]:
                - generic [ref=e105]: 🚑
                - heading "Student Health" [level=4] [ref=e106]
                - paragraph [ref=e107]: Dedicated school clinic with qualified staff to handle student wellbeing 24/7.
      - generic [ref=e109]:
        - heading "Ready to enroll in our CBE program?" [level=2] [ref=e110]
        - generic [ref=e111]:
          - link "Contact Admissions" [ref=e112]:
            - /url: /contact
          - link "Full Curriculum Details" [ref=e113]:
            - /url: /academics
  - contentinfo [ref=e114]:
    - generic [ref=e115]:
      - generic [ref=e116]:
        - generic [ref=e117]:
          - heading "St Peter's Khwirale Senior School" [level=3] [ref=e118]
          - paragraph [ref=e119]: "\"Excellence in Spirit & Academic Truth\""
        - generic [ref=e120]:
          - generic [ref=e121]:
            - heading "Our Mission" [level=4] [ref=e122]
            - paragraph [ref=e123]: To provide quality education that empowers learners to achieve their full potential in a dynamic world.
          - generic [ref=e124]:
            - heading "Our Vision" [level=4] [ref=e125]
            - paragraph [ref=e126]: A center of excellence in academic and character development.
      - generic [ref=e127]:
        - heading "Core Values" [level=3] [ref=e128]
        - list [ref=e129]:
          - listitem [ref=e130]:
            - generic [ref=e131]: ◈
            - text: Discipline
          - listitem [ref=e132]:
            - generic [ref=e133]: ◈
            - text: Integrity
          - listitem [ref=e134]:
            - generic [ref=e135]: ◈
            - text: Hard Work
          - listitem [ref=e136]:
            - generic [ref=e137]: ◈
            - text: Fear of God
      - generic [ref=e138]:
        - heading "Quick Links" [level=3] [ref=e139]
        - list [ref=e140]:
          - listitem [ref=e141]:
            - link "Home Page" [ref=e142]:
              - /url: /
          - listitem [ref=e143]:
            - link "Ministry of Education" [ref=e144]:
              - /url: https://education.go.ke
          - listitem [ref=e145]:
            - link "KNEC Portal" [ref=e146]:
              - /url: https://www.knec.ac.ke
          - listitem [ref=e147]:
            - link "TSC Kenya" [ref=e148]:
              - /url: https://www.tsc.go.ke
          - listitem [ref=e149]:
            - link "KUCCPS Placement" [ref=e150]:
              - /url: https://kuccps.net
      - generic [ref=e151]:
        - heading "Contact Us" [level=3] [ref=e152]
        - list [ref=e153]:
          - listitem [ref=e154]:
            - generic [ref=e155]: 📍
            - text: P.O. Box 160 - 50409, Busia, Kenya
          - listitem [ref=e156]:
            - generic [ref=e157]: 📞
            - text: +254 700 564298
          - listitem [ref=e158]:
            - generic [ref=e159]: ✉️
            - text: stpeterskhwiraleseccndaryshcool@gmail.com
        - generic [ref=e160]:
          - heading "Follow Us" [level=4] [ref=e161]
          - link "Facebook" [ref=e162]:
            - /url: https://web.facebook.com/SPKSS160
            - img [ref=e163]
            - generic [ref=e165]: Facebook
    - paragraph [ref=e167]: © 2026 St Peter's Khwirale Senior School · All Rights Reserved
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