# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.js >> accessibility smoke tests >> /academics has no serious automated accessibility violations
- Location: tests\accessibility.spec.js:11:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 484

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
+         "html": "<h3 class=\"text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 px-2\">Academics Chapters</h3>",
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
+               "bgColor": "#f3f4f6",
+               "contrastRatio": 4.39,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#6b7280",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.39 (foreground color: #6b7280, background color: #f3f4f6, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-gray-100 aspect-square rounded-2xl flex flex-col items-center justify-center p-4 text-center\"><span class=\"text-4xl mb-2 font-bold text-school-primary\">45+</span><span class=\"text-xs uppercase font-bold text-gray-500\">Teachers</span></div>",
+                 "target": Array [
+                   ".bg-gray-100.aspect-square.justify-center:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.39 (foreground color: #6b7280, background color: #f3f4f6, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-xs uppercase font-bold text-gray-500\">Teachers</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".bg-gray-100.aspect-square.justify-center:nth-child(1) > .text-gray-500.uppercase.text-xs",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f3f4f6",
+               "contrastRatio": 4.39,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#6b7280",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.39 (foreground color: #6b7280, background color: #f3f4f6, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-gray-100 aspect-square rounded-2xl flex flex-col items-center justify-center p-4 text-center\"><span class=\"text-4xl mb-2 font-bold text-school-primary\">15</span><span class=\"text-xs uppercase font-bold text-gray-500\">Departments</span></div>",
+                 "target": Array [
+                   ".bg-gray-100.aspect-square.justify-center:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.39 (foreground color: #6b7280, background color: #f3f4f6, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-xs uppercase font-bold text-gray-500\">Departments</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".bg-gray-100.aspect-square.justify-center:nth-child(2) > .text-gray-500.uppercase.text-xs",
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
+                   ".shadow-xl.md\\:p-12.rounded-3xl",
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
+           ".shadow-xl.md\\:p-12.rounded-3xl > .tracking-widest.uppercase.text-school-secondary",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#8d1a1a",
+               "contrastRatio": 1.92,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#64748b",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.92 (foreground color: #64748b, background color: #8d1a1a, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20\">",
+                 "target": Array [
+                   ".bg-white\\/10",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"bg-school-primary text-white p-8 md:p-12 rounded-3xl shadow-xl\">",
+                 "target": Array [
+                   ".shadow-xl.md\\:p-12.rounded-3xl",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.92 (foreground color: #64748b, background color: #8d1a1a, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<h4 class=\"font-bold mb-4 uppercase text-xs tracking-widest text-school-secondary\">Latest Achievement</h4>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".bg-white\\/10 > h4",
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
+           ".font-extrabold.text-xl.border-school-secondary\\/30",
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
+           "div:nth-child(2) > .border-school-secondary\\/30.pb-2.border-b",
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
+           "div:nth-child(3) > .border-school-secondary\\/30.pb-2.border-b",
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
+           "div:nth-child(4) > .border-school-secondary\\/30.pb-2.border-b",
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
        - heading "Academic Excellence" [level=1] [ref=e17]
        - paragraph [ref=e18]: Providing diverse pathways for every learner.
      - generic [ref=e19]:
        - complementary [ref=e20]:
          - generic [ref=e21]:
            - heading "Academics Chapters" [level=3] [ref=e22]
            - link "Curriculum Overview" [ref=e23] [cursor=pointer]:
              - /url: "#curriculum"
            - link "Departments Overview" [ref=e24] [cursor=pointer]:
              - /url: "#departments"
            - link "Faculty & Teachers" [ref=e25] [cursor=pointer]:
              - /url: "#faculty"
            - link "Performance & Results" [ref=e26] [cursor=pointer]:
              - /url: "#results"
        - main [ref=e27]:
          - generic [ref=e29]:
            - text: Chapter 1
            - generic [ref=e30]:
              - heading "Curriculum Overview" [level=2] [ref=e31]
              - paragraph [ref=e32]: Our school is organized into specialized departments that ensure focused instruction and subject-specific expertise.
              - paragraph [ref=e33]: We take pride in our highly qualified and dedicated teaching staff. With over 45+ professional educators, we maintain an excellent teacher-to-student ratio.
            - generic [ref=e34]:
              - generic [ref=e35]:
                - heading "8-4-4 System" [level=3] [ref=e36]
                - paragraph [ref=e37]: The traditional rigorous curriculum preparing students for university entrance (KCSE).
                - generic [ref=e38]:
                  - generic [ref=e39]: Mathematics
                  - generic [ref=e40]: English
                  - generic [ref=e41]: Kiswahili
                  - generic [ref=e42]: Sciences
                  - generic [ref=e43]: Humanities
                  - generic [ref=e44]: Technicals
              - generic [ref=e45]:
                - heading "CBC Navigation" [level=3] [ref=e46]
                - paragraph [ref=e47]: Competency Based Curriculum focusing on nurturing every learner's potential.
                - generic [ref=e48]:
                  - generic [ref=e49]: STEM
                  - generic [ref=e50]: Arts & Sports Science
                  - generic [ref=e51]: Social Sciences
          - generic [ref=e53]:
            - text: Chapter 2
            - heading "Academic Departments" [level=2] [ref=e54]
            - generic [ref=e55]:
              - paragraph [ref=e57]: Our school is organized into specialized departments that ensure focused instruction and subject-specific expertise.
              - generic [ref=e58]:
                - generic [ref=e59]:
                  - generic [ref=e60]: 📐
                  - text: Mathematics Department
                - generic [ref=e61]:
                  - generic [ref=e62]: 🔬
                  - text: Science Department
                - generic [ref=e63]:
                  - generic [ref=e64]: 📚
                  - text: Languages Department
                - generic [ref=e65]:
                  - generic [ref=e66]: 🌍
                  - text: Humanities Department
                - generic [ref=e67]:
                  - generic [ref=e68]: 🎨
                  - text: Technical & Creative Arts
                - generic [ref=e69]:
                  - generic [ref=e70]: ⚽
                  - text: Games & Sports Department
          - generic [ref=e72]:
            - text: Chapter 3
            - heading "Faculty & Teaching Staff" [level=2] [ref=e73]
            - generic [ref=e74]:
              - generic [ref=e75]:
                - paragraph [ref=e77]: We take pride in our highly qualified and dedicated teaching staff. With over 45+ professional educators, we maintain an excellent teacher-to-student ratio.
                - generic [ref=e78]:
                  - paragraph [ref=e79]: "\"Our teachers don't just teach subjects; they mentor future leaders.\""
                  - heading "— Annastancia Otawa, Principal" [level=4] [ref=e80]
              - generic [ref=e81]:
                - generic [ref=e82]:
                  - generic [ref=e83]: 45+
                  - generic [ref=e84]: Teachers
                - generic [ref=e85]:
                  - generic [ref=e86]: "15"
                  - generic [ref=e87]: Departments
          - generic [ref=e89]:
            - text: Chapter 4
            - generic [ref=e90]:
              - generic [ref=e91]:
                - generic [ref=e92]:
                  - heading "Performance & Results" [level=2] [ref=e93]
                  - paragraph [ref=e94]: St Peter's Khwirale Senior School has consistently demonstrated academic prowess in national examinations, ranking as one of the best performing schools in Busia County.
                - list [ref=e95]:
                  - listitem [ref=e96]:
                    - generic [ref=e97]: 🏆
                    - generic [ref=e98]: "2024 KCSE: 98% Transition Rate"
                  - listitem [ref=e99]:
                    - generic [ref=e100]: 📈
                    - generic [ref=e101]: Consistently Improving Mean Grade
              - generic [ref=e102]:
                - heading "Latest Achievement" [level=4] [ref=e103]
                - paragraph [ref=e104]: "\"Highest subject average in Mathematics & Sciences across the sub-county for two consecutive years.\""
      - generic [ref=e106]:
        - heading "Interested in joining our academic program?" [level=2] [ref=e107]
        - generic [ref=e108]:
          - link "Admission Enquiry" [ref=e109] [cursor=pointer]:
            - /url: /contact
          - link "Browse Faculty Gallery" [ref=e110] [cursor=pointer]:
            - /url: /gallery
  - contentinfo [ref=e111]:
    - generic [ref=e112]:
      - generic [ref=e113]:
        - generic [ref=e114]:
          - heading "St Peter's Khwirale Senior School" [level=3] [ref=e115]
          - paragraph [ref=e116]: "\"Excellence in Spirit & Academic Truth\""
        - generic [ref=e117]:
          - generic [ref=e118]:
            - heading "Our Mission" [level=4] [ref=e119]
            - paragraph [ref=e120]: To provide quality education that empowers learners to achieve their full potential in a dynamic world.
          - generic [ref=e121]:
            - heading "Our Vision" [level=4] [ref=e122]
            - paragraph [ref=e123]: A center of excellence in academic and character development.
      - generic [ref=e124]:
        - heading "Core Values" [level=3] [ref=e125]
        - list [ref=e126]:
          - listitem [ref=e127]:
            - generic [ref=e128]: ◈
            - text: Discipline
          - listitem [ref=e129]:
            - generic [ref=e130]: ◈
            - text: Integrity
          - listitem [ref=e131]:
            - generic [ref=e132]: ◈
            - text: Hard Work
          - listitem [ref=e133]:
            - generic [ref=e134]: ◈
            - text: Fear of God
      - generic [ref=e135]:
        - heading "Quick Links" [level=3] [ref=e136]
        - list [ref=e137]:
          - listitem [ref=e138]:
            - link "Home Page" [ref=e139] [cursor=pointer]:
              - /url: /
          - listitem [ref=e140]:
            - link "Ministry of Education" [ref=e141] [cursor=pointer]:
              - /url: https://education.go.ke
          - listitem [ref=e142]:
            - link "KNEC Portal" [ref=e143] [cursor=pointer]:
              - /url: https://www.knec.ac.ke
          - listitem [ref=e144]:
            - link "TSC Kenya" [ref=e145] [cursor=pointer]:
              - /url: https://www.tsc.go.ke
          - listitem [ref=e146]:
            - link "KUCCPS Placement" [ref=e147] [cursor=pointer]:
              - /url: https://kuccps.net
      - generic [ref=e148]:
        - heading "Contact Us" [level=3] [ref=e149]
        - list [ref=e150]:
          - listitem [ref=e151]:
            - generic [ref=e152]: 📍
            - text: P.O. Box 160 - 50409, Busia, Kenya
          - listitem [ref=e153]:
            - generic [ref=e154]: 📞
            - text: +254 700 564298
          - listitem [ref=e155]:
            - generic [ref=e156]: ✉️
            - text: stpeterskhwiraleseccndaryshcool@gmail.com
        - generic [ref=e157]:
          - heading "Follow Us" [level=4] [ref=e158]
          - link "Facebook" [ref=e159] [cursor=pointer]:
            - /url: https://web.facebook.com/SPKSS160
            - img [ref=e160]
            - generic [ref=e162]: Facebook
    - paragraph [ref=e164]: © 2026 St Peter's Khwirale Senior School · All Rights Reserved
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