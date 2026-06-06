# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.js >> accessibility smoke tests >> /updates has no serious automated accessibility violations
- Location: tests\accessibility.spec.js:11:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 566

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
+         "html": "<h3 class=\"text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 px-2\">Updates Chapters</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".px-2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafaf9",
+               "contrastRatio": 2.43,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9ca3af",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafaf9, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-school-background rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all\">",
+                 "target": Array [
+                   ".hover\\:shadow-lg.bg-school-background.rounded-2xl:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafaf9, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-xs text-gray-400 font-bold uppercase\">Sept 12, 2025</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".hover\\:shadow-lg.bg-school-background.rounded-2xl:nth-child(1) > .p-6 > .text-gray-400.text-xs.uppercase",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafaf9",
+               "contrastRatio": 2.43,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9ca3af",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafaf9, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-school-background rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all\">",
+                 "target": Array [
+                   ".hover\\:shadow-lg.bg-school-background.rounded-2xl:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafaf9, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-xs text-gray-400 font-bold uppercase\">Aug 28, 2025</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".hover\\:shadow-lg.bg-school-background.rounded-2xl:nth-child(2) > .p-6 > .text-gray-400.text-xs.uppercase",
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
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#64748b",
+               "fontSize": "15.0pt (20px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.92 (foreground color: #64748b, background color: #8d1a1a, font size: 15.0pt (20px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20\">",
+                 "target": Array [
+                   ".backdrop-blur-sm",
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
+   Element has insufficient color contrast of 1.92 (foreground color: #64748b, background color: #8d1a1a, font size: 15.0pt (20px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h4 class=\"text-xl font-bold mb-4 text-school-secondary tracking-wide italic\">Join our team of dedicated professionals!</h4>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".tracking-wide",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 4.19,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#b36666",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.19 (foreground color: #b36666, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"flex-grow p-5 bg-white rounded-xl text-school-primary flex items-center justify-between hover:scale-[1.02] transition-transform cursor-pointer shadow-lg\">",
+                 "target": Array [
+                   ".hover\\:scale-\\[1\\.02\\]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.19 (foreground color: #b36666, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-xs opacity-60\">Full-time · Experience Required</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".opacity-60.text-xs",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#942828",
+               "contrastRatio": 3.65,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#d1a3a3",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.65 (foreground color: #d1a3a3, background color: #942828, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"flex-grow p-5 bg-white/10 rounded-xl flex items-center justify-center border border-dashed border-white/30 text-sm font-bold opacity-60\">More vacancies coming soon</div>",
+                 "target": Array [
+                   ".border-dashed",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20\">",
+                 "target": Array [
+                   ".backdrop-blur-sm",
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
+   Element has insufficient color contrast of 3.65 (foreground color: #d1a3a3, background color: #942828, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"flex-grow p-5 bg-white/10 rounded-xl flex items-center justify-center border border-dashed border-white/30 text-sm font-bold opacity-60\">More vacancies coming soon</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".border-dashed",
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
+           ".font-extrabold.border-school-secondary\\/30.pb-2",
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
+           "div:nth-child(1) > .text-\\[10px\\].tracking-\\[0\\.2em\\].font-black",
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
+           "div:nth-child(2) > .text-\\[10px\\].tracking-\\[0\\.2em\\].font-black",
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
+           ".text-\\[10px\\].tracking-\\[0\\.2em\\].mb-4",
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
        - heading "School Updates" [level=1] [ref=e35]
        - paragraph [ref=e36]: Stay informed about latest events, news, and opportunities at our school.
      - generic [ref=e37]:
        - complementary [ref=e38]:
          - generic [ref=e39]:
            - heading "Updates Chapters" [level=3] [ref=e40]
            - link "Upcoming Events" [ref=e41] [cursor=pointer]:
              - /url: "#events"
            - link "News & Articles" [ref=e42] [cursor=pointer]:
              - /url: "#news"
            - link "Tenders & Public Notices" [ref=e43] [cursor=pointer]:
              - /url: "#tenders"
            - link "Job Vacancies" [ref=e44] [cursor=pointer]:
              - /url: "#careers"
        - main [ref=e45]:
          - generic [ref=e47]:
            - text: Chapter 1
            - generic [ref=e48]:
              - heading "Upcoming Events" [level=2] [ref=e49]
              - paragraph [ref=e50]: Stay informed about latest events, news, and opportunities at our school.
              - paragraph [ref=e51]: Join us at the school main hall for significant milestones in our academic calendar.
            - generic [ref=e52]:
              - generic [ref=e53]:
                - generic [ref=e54]:
                  - generic [ref=e55]: Oct
                  - generic [ref=e56]: "15"
                - generic [ref=e57]:
                  - generic [ref=e58]: Main Event
                  - heading "Academics Day" [level=3] [ref=e59]
                  - paragraph [ref=e60]: Join us at the school main hall for this significant milestone in our academic calendar.
              - generic [ref=e61]:
                - generic [ref=e62]:
                  - generic [ref=e63]: Oct
                  - generic [ref=e64]: "28"
                - generic [ref=e65]:
                  - generic [ref=e66]: Sports
                  - heading "Inter-School Sports Meet" [level=3] [ref=e67]
                  - paragraph [ref=e68]: Join us at the school main hall for this significant milestone in our academic calendar.
              - generic [ref=e69]:
                - generic [ref=e70]:
                  - generic [ref=e71]: Nov
                  - generic [ref=e72]: "12"
                - generic [ref=e73]:
                  - generic [ref=e74]: Meeting
                  - heading "Parents Association Meeting" [level=3] [ref=e75]
                  - paragraph [ref=e76]: Join us at the school main hall for this significant milestone in our academic calendar.
          - generic [ref=e78]:
            - text: Chapter 2
            - generic [ref=e79]:
              - heading "News & Articles" [level=2] [ref=e80]
              - paragraph [ref=e81]: Read the latest stories, achievements, and announcements from our students, staff, and school community.
            - generic [ref=e82]:
              - generic [ref=e83]:
                - img "Khwirale Senior Shines in Busia Mathematics Contest" [ref=e85]
                - generic [ref=e86]:
                  - text: Sept 12, 2025
                  - heading "Khwirale Senior Shines in Busia Mathematics Contest" [level=3] [ref=e87]
                  - paragraph [ref=e88]: We are immensely proud of our students and staff for their hard work and dedication which continues to lead us to excellence...
                  - button "Read More →" [ref=e89] [cursor=pointer]:
                    - text: Read More
                    - generic [ref=e90]: →
              - generic [ref=e91]:
                - img "New Science Lab Commissioning by County Education Team" [ref=e93]
                - generic [ref=e94]:
                  - text: Aug 28, 2025
                  - heading "New Science Lab Commissioning by County Education Team" [level=3] [ref=e95]
                  - paragraph [ref=e96]: We are immensely proud of our students and staff for their hard work and dedication which continues to lead us to excellence...
                  - button "Read More →" [ref=e97] [cursor=pointer]:
                    - text: Read More
                    - generic [ref=e98]: →
          - generic [ref=e100]:
            - text: Chapter 3
            - generic [ref=e101]:
              - heading "Tenders & Public Notices" [level=2] [ref=e102]
              - paragraph [ref=e103]: Find current tenders, procurement notices, and public announcements from the school administration.
            - generic [ref=e104]:
              - generic [ref=e105] [cursor=pointer]:
                - generic [ref=e106]:
                  - generic [ref=e107]: 📄
                  - generic [ref=e108]:
                    - heading "Tender for Construction of Staff Quarters 2026" [level=4] [ref=e109]
                    - paragraph [ref=e110]: "Ref: STPK/TN/2026/04 · Due: Dec 12, 2025"
                - generic [ref=e111]: ↓
              - generic [ref=e113] [cursor=pointer]:
                - generic [ref=e114]: ✅
                - generic [ref=e115]:
                  - heading "Prequalification of Suppliers for 2025 Financial Year" [level=4] [ref=e116]
                  - paragraph [ref=e117]: "Status: Closed"
          - generic [ref=e119]:
            - text: Chapter 4
            - generic [ref=e120]:
              - heading "Job Vacancies" [level=2] [ref=e121]
              - paragraph [ref=e122]: St Peter's Khwirale Senior School is always looking for passionate educators and staff to join our family.
            - generic [ref=e123]:
              - heading "Join our team of dedicated professionals!" [level=4] [ref=e124]
              - generic [ref=e125]:
                - generic [ref=e126] [cursor=pointer]:
                  - generic [ref=e127]:
                    - heading "Subject Teacher (Math/Physics)" [level=5] [ref=e128]
                    - paragraph [ref=e129]: Full-time · Experience Required
                  - generic [ref=e130]: Apply
                - generic [ref=e131]: More vacancies coming soon
      - generic [ref=e133]:
        - heading "Have something to share or ask?" [level=2] [ref=e134]
        - generic [ref=e135]:
          - link "Contact Admin Office" [ref=e136] [cursor=pointer]:
            - /url: /contact
          - link "See Latest Photos" [ref=e137] [cursor=pointer]:
            - /url: /gallery
  - contentinfo [ref=e138]:
    - generic [ref=e139]:
      - generic [ref=e140]:
        - generic [ref=e141]:
          - heading "St Peter's Khwirale Senior School" [level=3] [ref=e142]
          - paragraph [ref=e143]: "\"Excellence in Spirit & Academic Truth\""
        - generic [ref=e144]:
          - generic [ref=e145]:
            - heading "Our Mission" [level=4] [ref=e146]
            - paragraph [ref=e147]: To provide quality education that empowers learners to achieve their full potential in a dynamic world.
          - generic [ref=e148]:
            - heading "Our Vision" [level=4] [ref=e149]
            - paragraph [ref=e150]: A center of excellence in academic and character development.
      - generic [ref=e151]:
        - heading "Core Values" [level=3] [ref=e152]
        - list [ref=e153]:
          - listitem [ref=e154]:
            - generic [ref=e155]: ◈
            - text: Discipline
          - listitem [ref=e156]:
            - generic [ref=e157]: ◈
            - text: Integrity
          - listitem [ref=e158]:
            - generic [ref=e159]: ◈
            - text: Hard Work
          - listitem [ref=e160]:
            - generic [ref=e161]: ◈
            - text: Fear of God
      - generic [ref=e162]:
        - heading "Quick Links" [level=3] [ref=e163]
        - list [ref=e164]:
          - listitem [ref=e165]:
            - link "Home Page" [ref=e166] [cursor=pointer]:
              - /url: /
          - listitem [ref=e167]:
            - link "Ministry of Education" [ref=e168] [cursor=pointer]:
              - /url: https://education.go.ke
          - listitem [ref=e169]:
            - link "KNEC Portal" [ref=e170] [cursor=pointer]:
              - /url: https://www.knec.ac.ke
          - listitem [ref=e171]:
            - link "TSC Kenya" [ref=e172] [cursor=pointer]:
              - /url: https://www.tsc.go.ke
          - listitem [ref=e173]:
            - link "KUCCPS Placement" [ref=e174] [cursor=pointer]:
              - /url: https://kuccps.net
      - generic [ref=e175]:
        - heading "Contact Us" [level=3] [ref=e176]
        - list [ref=e177]:
          - listitem [ref=e178]:
            - generic [ref=e179]: 📍
            - text: P.O. Box 160 - 50409, Busia, Kenya
          - listitem [ref=e180]:
            - generic [ref=e181]: 📞
            - text: +254 700 564298
          - listitem [ref=e182]:
            - generic [ref=e183]: ✉️
            - text: stpeterskhwiraleseccndaryshcool@gmail.com
        - generic [ref=e184]:
          - heading "Follow Us" [level=4] [ref=e185]
          - link "Facebook" [ref=e186] [cursor=pointer]:
            - /url: https://web.facebook.com/SPKSS160
            - img [ref=e187]
            - generic [ref=e189]: Facebook
    - paragraph [ref=e191]: © 2026 St Peter's Khwirale Senior School · All Rights Reserved
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