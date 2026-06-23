# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.js >> accessibility smoke tests >> / has no serious automated accessibility violations
- Location: tests\accessibility.spec.js:11:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 583

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
+               "bgColor": "#64748b",
+               "contrastRatio": 2.3,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#800000",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.3 (foreground color: #800000, background color: #64748b, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"absolute top-4 left-4 bg-school-secondary text-school-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider\">Academic</div>",
+                 "target": Array [
+                   "article:nth-child(1) > .aspect-video.relative.overflow-hidden > .top-4.left-4.px-3",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.3 (foreground color: #800000, background color: #64748b, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"absolute top-4 left-4 bg-school-secondary text-school-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider\">Academic</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "article:nth-child(1) > .aspect-video.relative.overflow-hidden > .top-4.left-4.px-3",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#64748b",
+               "contrastRatio": 2.3,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#800000",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.3 (foreground color: #800000, background color: #64748b, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"absolute top-4 left-4 bg-school-secondary text-school-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider\">Infrastructure</div>",
+                 "target": Array [
+                   "article:nth-child(2) > .aspect-video.relative.overflow-hidden > .top-4.left-4.px-3",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.3 (foreground color: #800000, background color: #64748b, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"absolute top-4 left-4 bg-school-secondary text-school-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider\">Infrastructure</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "article:nth-child(2) > .aspect-video.relative.overflow-hidden > .top-4.left-4.px-3",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#64748b",
+               "contrastRatio": 2.3,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#800000",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.3 (foreground color: #800000, background color: #64748b, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"absolute top-4 left-4 bg-school-secondary text-school-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider\">Student Life</div>",
+                 "target": Array [
+                   "article:nth-child(3) > .aspect-video.relative.overflow-hidden > .top-4.left-4.px-3",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.3 (foreground color: #800000, background color: #64748b, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"absolute top-4 left-4 bg-school-secondary text-school-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider\">Student Life</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "article:nth-child(3) > .aspect-video.relative.overflow-hidden > .top-4.left-4.px-3",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f9fafb",
+               "contrastRatio": 1.93,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#afb7c3",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.93 (foreground color: #afb7c3, background color: #f9fafb, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<details class=\"group bg-gray-50 rounded-2xl border border-gray-100 p-0 transition-all duration-300 open:bg-school-primary open:shadow-xl overflow-hidden\">",
+                 "target": Array [
+                   "details:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.93 (foreground color: #afb7c3, background color: #f9fafb, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<span class=\"text-school-secondary group-open:text-school-secondary-light font-black text-2xl opacity-50\">01</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "details:nth-child(1) > summary > .gap-4.flex.items-center > .group-open\\:text-school-secondary-light.opacity-50.text-2xl",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f9fafb",
+               "contrastRatio": 1.93,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#afb7c3",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.93 (foreground color: #afb7c3, background color: #f9fafb, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<details class=\"group bg-gray-50 rounded-2xl border border-gray-100 p-0 transition-all duration-300 open:bg-school-primary open:shadow-xl overflow-hidden\">",
+                 "target": Array [
+                   "details:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.93 (foreground color: #afb7c3, background color: #f9fafb, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<span class=\"text-school-secondary group-open:text-school-secondary-light font-black text-2xl opacity-50\">02</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "details:nth-child(2) > summary > .gap-4.flex.items-center > .group-open\\:text-school-secondary-light.opacity-50.text-2xl",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f9fafb",
+               "contrastRatio": 1.93,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#afb7c3",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.93 (foreground color: #afb7c3, background color: #f9fafb, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<details class=\"group bg-gray-50 rounded-2xl border border-gray-100 p-0 transition-all duration-300 open:bg-school-primary open:shadow-xl overflow-hidden\">",
+                 "target": Array [
+                   "details:nth-child(3)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.93 (foreground color: #afb7c3, background color: #f9fafb, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<span class=\"text-school-secondary group-open:text-school-secondary-light font-black text-2xl opacity-50\">03</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "details:nth-child(3) > summary > .gap-4.flex.items-center > .group-open\\:text-school-secondary-light.opacity-50.text-2xl",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f9fafb",
+               "contrastRatio": 1.93,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#afb7c3",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.93 (foreground color: #afb7c3, background color: #f9fafb, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<details class=\"group bg-gray-50 rounded-2xl border border-gray-100 p-0 transition-all duration-300 open:bg-school-primary open:shadow-xl overflow-hidden\">",
+                 "target": Array [
+                   "details:nth-child(4)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.93 (foreground color: #afb7c3, background color: #f9fafb, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<span class=\"text-school-secondary group-open:text-school-secondary-light font-black text-2xl opacity-50\">04</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "details:nth-child(4) > summary > .gap-4.flex.items-center > .group-open\\:text-school-secondary-light.opacity-50.text-2xl",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f9fafb",
+               "contrastRatio": 1.93,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#afb7c3",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.93 (foreground color: #afb7c3, background color: #f9fafb, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<details class=\"group bg-gray-50 rounded-2xl border border-gray-100 p-0 transition-all duration-300 open:bg-school-primary open:shadow-xl overflow-hidden\">",
+                 "target": Array [
+                   "details:nth-child(5)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.93 (foreground color: #afb7c3, background color: #f9fafb, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<span class=\"text-school-secondary group-open:text-school-secondary-light font-black text-2xl opacity-50\">05</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "details:nth-child(5) > summary > .gap-4.flex.items-center > .group-open\\:text-school-secondary-light.opacity-50.text-2xl",
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
+           "div:nth-child(1) > h4",
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
+           "div:nth-child(2) > h4",
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
+           ".mt-8 > h4",
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
+                   ".bg-\\[\\#1877F2\\]",
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
+           ".bg-\\[\\#1877F2\\] > span",
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
      - generic [ref=e15]:
        - generic [ref=e16]:
          - img "St Peter's Khwirale Modern Infrastructure" [ref=e18]
          - img "Students in Science Laboratory" [ref=e21]
          - img "Sports and Co-curricular Activities" [ref=e24]
        - generic:
          - button "Previous Slide" [ref=e26] [cursor=pointer]:
            - img [ref=e27]
          - button "Next Slide" [ref=e29] [cursor=pointer]:
            - img [ref=e30]
        - generic [ref=e33]:
          - button "Go to slide 1" [ref=e34] [cursor=pointer]
          - button "Go to slide 2" [ref=e35] [cursor=pointer]
          - button "Go to slide 3" [ref=e36] [cursor=pointer]
      - generic [ref=e38]:
        - heading "Excellence in Spirit & Academic Truth" [level=1] [ref=e39]
        - paragraph [ref=e40]: Empowering the next generation of leaders through a holistic education rooted in discipline, faith, and knowledge.
    - generic [ref=e43]:
      - heading "Welcome to St Peter's Khwirale Senior School" [level=2] [ref=e44]
      - paragraph [ref=e45]: A public Mixed Senior School categorized as C4 under the new Competency-Based Education (CBE) curriculum. We are dedicated to empowering our students through quality education, discipline, and integrity, while providing a safe and supportive environment where every child can discover their potential and thrive.
      - paragraph [ref=e46]: Browse through our website to learn more about us, from our academic programs and vibrant student life to our achievements and community engagement.
    - generic [ref=e49]:
      - generic [ref=e50]:
        - img [ref=e52]
        - heading "Motto" [level=3] [ref=e54]
        - paragraph [ref=e55]: "\"Endeavour to excel\""
      - generic [ref=e56]:
        - img [ref=e58]
        - heading "Vision" [level=3] [ref=e61]
        - paragraph [ref=e62]: To have a community where all children feel loved, respected and encouraged to develop to their full potential.
      - generic [ref=e63]:
        - img [ref=e65]
        - heading "Mission" [level=3] [ref=e67]
        - paragraph [ref=e68]: To provide quality education, childcare in a safe respectful inclusive environment that builds a foundation for lifelong learning.
      - generic [ref=e69]:
        - img [ref=e71]
        - heading "Core Values" [level=3] [ref=e73]
        - list [ref=e74]:
          - listitem [ref=e75]: Diligence
          - listitem [ref=e76]: Team spirit
          - listitem [ref=e77]: Integrity
          - listitem [ref=e78]: Accountability
    - generic [ref=e80]:
      - heading "A message from our principal" [level=2] [ref=e81]
      - generic [ref=e82]:
        - generic [ref=e84]:
          - generic [ref=e86]: 👤
          - img "Annastancia Otawa" [ref=e87]
          - generic [ref=e88]:
            - paragraph [ref=e89]: Annastancia Otawa
            - paragraph [ref=e90]: Principal
        - generic [ref=e91]:
          - blockquote [ref=e92]: "\"At St. Peter's Khwirale Senior School , we take pride in being more than just an institution of learning — we are a family dedicated to shaping the minds and character of our students. Our commitment is to provide a holistic education that nurtures discipline, academic excellence, and integrity while empowering our students to face the future with confidence. We believe that education is a partnership between the school, parents, and the wider community. With the dedication of our teachers, the support of parents, and the enthusiasm of our students, we continue to build a strong foundation for success. Our focus goes beyond academics, as we encourage participation in sports, clubs, leadership opportunities, and community service to ensure that every child develops their unique potential. As Principal, my vision is to see every student of St. Peter's Khwirale Senior School leave our gates not only with knowledge but also with values, resilience, and a sense of responsibility to society. I warmly welcome you to be part of our journey, whether as a parent, alumna, partner, or friend of the school. Together, we can continue to make St. Peter's Khwirale Senior School a beacon of excellence in education and personal growth.\""
          - generic [ref=e93]:
            - link "About Us →" [ref=e94]:
              - /url: /about
              - text: About Us
              - generic [ref=e95]: →
            - link "School History" [ref=e96]:
              - /url: /about/history
    - generic [ref=e98]:
      - heading "Explore more about our school" [level=2] [ref=e99]
      - paragraph [ref=e100]: Discover our rich history, academic programs, extracurricular activities, and vibrant school life.
      - generic [ref=e101]:
        - link "📚 Our Departments Explore our diverse academic departments and focused learning areas." [ref=e102]:
          - /url: /academics#departments
          - generic [ref=e103]: 📚
          - heading "Our Departments" [level=3] [ref=e104]
          - paragraph [ref=e105]: Explore our diverse academic departments and focused learning areas.
        - link "💳 Fee Structure Contact us for detailed information about school fees and payment methods." [ref=e106]:
          - /url: /contact
          - generic [ref=e107]: 💳
          - heading "Fee Structure" [level=3] [ref=e108]
          - paragraph [ref=e109]: Contact us for detailed information about school fees and payment methods.
        - link "🏆 KCSE Results Celebrating our academic excellence and consistent top performers." [ref=e110]:
          - /url: /academics#results
          - generic [ref=e111]: 🏆
          - heading "KCSE Results" [level=3] [ref=e112]
          - paragraph [ref=e113]: Celebrating our academic excellence and consistent top performers.
        - link "📅 Upcoming Events Stay updated with our school calendar and upcoming social activities." [ref=e114]:
          - /url: /updates#events
          - generic [ref=e115]: 📅
          - heading "Upcoming Events" [level=3] [ref=e116]
          - paragraph [ref=e117]: Stay updated with our school calendar and upcoming social activities.
    - generic [ref=e119]:
      - heading "A glimpse into our school" [level=2] [ref=e120]
      - generic [ref=e121]:
        - img "St Peter's Khwirale School Gallery Image" [ref=e123] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e125] [cursor=pointer]
        - img "St Peter's Khwirale School Gallery Image" [ref=e127] [cursor=pointer]
      - link "View Full Gallery →" [ref=e128]:
        - /url: /gallery
        - text: View Full Gallery
        - generic [ref=e129]: →
    - generic [ref=e131]:
      - generic [ref=e132]:
        - generic [ref=e133]:
          - heading "School News & Education Updates" [level=2] [ref=e134]
          - paragraph [ref=e135]: Stay informed with the latest happenings, academic milestones, and educational announcements from St Peter's Khwirale.
        - link "All Updates →" [ref=e136]:
          - /url: /updates
          - text: All Updates
          - generic [ref=e137]: →
      - generic [ref=e138]:
        - article [ref=e139]:
          - generic [ref=e140]:
            - img "KCSE Prep" [ref=e141]
            - generic [ref=e142]: Academic
          - generic [ref=e143]:
            - time [ref=e144]: January 15, 2025
            - heading "Preparation for 2025 KCSE Exams Commences" [level=3] [ref=e145]
            - paragraph [ref=e146]: Our candidates have officially begun their intensive revision bootcamps. The faculty is committed to ensuring every student reaches their target.
            - link "Read More →" [ref=e147]:
              - /url: /updates
              - text: Read More
              - generic [ref=e148]: →
        - article [ref=e149]:
          - generic [ref=e150]:
            - img "Boarding Facilities" [ref=e151]
            - generic [ref=e152]: Infrastructure
          - generic [ref=e153]:
            - time [ref=e154]: January 10, 2025
            - heading "New Science Laboratory Commissioned" [level=3] [ref=e155]
            - paragraph [ref=e156]: We are proud to announce the completion of our state-of-the-art physics laboratory, equipped to handle the new CBE curriculum requirements.
            - link "Read More →" [ref=e157]:
              - /url: /updates
              - text: Read More
              - generic [ref=e158]: →
        - article [ref=e159]:
          - generic [ref=e160]:
            - img "Sports Day" [ref=e161]
            - generic [ref=e162]: Student Life
          - generic [ref=e163]:
            - time [ref=e164]: December 20, 2024
            - heading "Annual Inter-House Sports Extravaganza" [level=3] [ref=e165]
            - paragraph [ref=e166]: A look back at the thrilling competitions and sportsmanship displayed during our end-of-year sports festival. Congratulations to Simba House!
            - link "Read More →" [ref=e167]:
              - /url: /updates
              - text: Read More
              - generic [ref=e168]: →
      - link "View All News →" [ref=e170]:
        - /url: /updates
        - text: View All News
        - generic [ref=e171]: →
    - generic [ref=e173]:
      - heading "Frequently Asked Questions" [level=2] [ref=e174]
      - paragraph [ref=e175]: Find quick answers about admissions, fees, school life, and more.
      - generic [ref=e176]:
        - group [ref=e177]:
          - generic "01 How do I apply for grade 10 placement in 2027? ↓" [ref=e178] [cursor=pointer]:
            - generic [ref=e179]:
              - generic [ref=e180]: "01"
              - generic [ref=e181]: How do I apply for grade 10 placement in 2027?
            - generic [ref=e182]: ↓
        - group [ref=e183]:
          - generic "02 Which pathways and elective tracks are available under the CBC? ↓" [ref=e184] [cursor=pointer]:
            - generic [ref=e185]:
              - generic [ref=e186]: "02"
              - generic [ref=e187]: Which pathways and elective tracks are available under the CBC?
            - generic [ref=e188]: ↓
        - group [ref=e189]:
          - generic "03 What is the 2027 fee structure and how can I pay? ↓" [ref=e190] [cursor=pointer]:
            - generic [ref=e191]:
              - generic [ref=e192]: "03"
              - generic [ref=e193]: What is the 2027 fee structure and how can I pay?
            - generic [ref=e194]: ↓
        - group [ref=e195]:
          - generic "04 How did our students perform in the 2025 KCSE exams? ↓" [ref=e196] [cursor=pointer]:
            - generic [ref=e197]:
              - generic [ref=e198]: "04"
              - generic [ref=e199]: How did our students perform in the 2025 KCSE exams?
            - generic [ref=e200]: ↓
        - group [ref=e201]:
          - generic "05 What clubs, sports teams and extracurricular activities do you offer? ↓" [ref=e202] [cursor=pointer]:
            - generic [ref=e203]:
              - generic [ref=e204]: "05"
              - generic [ref=e205]: What clubs, sports teams and extracurricular activities do you offer?
            - generic [ref=e206]: ↓
      - generic [ref=e207]:
        - paragraph [ref=e208]: Didn't find what you're looking for? Visit our full FAQ section for more information.
        - link "View All Questions →" [ref=e209]:
          - /url: /about#overview
          - text: View All Questions
          - generic [ref=e210]: →
    - generic [ref=e212]:
      - heading "Our Partners" [level=2] [ref=e213]
      - generic [ref=e215]:
        - generic [ref=e216]:
          - img "Ministry of Education"
        - img "KNEC" [ref=e218]
        - img "TSC Logo" [ref=e220]
        - img "KICD" [ref=e222]
  - contentinfo [ref=e223]:
    - generic [ref=e224]:
      - generic [ref=e225]:
        - generic [ref=e226]:
          - heading "St Peter's Khwirale Senior School" [level=3] [ref=e227]
          - paragraph [ref=e228]: "\"Excellence in Spirit & Academic Truth\""
        - generic [ref=e229]:
          - generic [ref=e230]:
            - heading "Our Mission" [level=4] [ref=e231]
            - paragraph [ref=e232]: To provide quality education that empowers learners to achieve their full potential in a dynamic world.
          - generic [ref=e233]:
            - heading "Our Vision" [level=4] [ref=e234]
            - paragraph [ref=e235]: A center of excellence in academic and character development.
      - generic [ref=e236]:
        - heading "Core Values" [level=3] [ref=e237]
        - list [ref=e238]:
          - listitem [ref=e239]:
            - generic [ref=e240]: ◈
            - text: Discipline
          - listitem [ref=e241]:
            - generic [ref=e242]: ◈
            - text: Integrity
          - listitem [ref=e243]:
            - generic [ref=e244]: ◈
            - text: Hard Work
          - listitem [ref=e245]:
            - generic [ref=e246]: ◈
            - text: Fear of God
      - generic [ref=e247]:
        - heading "Quick Links" [level=3] [ref=e248]
        - list [ref=e249]:
          - listitem [ref=e250]:
            - link "Home Page" [ref=e251]:
              - /url: /
          - listitem [ref=e252]:
            - link "Ministry of Education" [ref=e253]:
              - /url: https://education.go.ke
          - listitem [ref=e254]:
            - link "KNEC Portal" [ref=e255]:
              - /url: https://www.knec.ac.ke
          - listitem [ref=e256]:
            - link "TSC Kenya" [ref=e257]:
              - /url: https://www.tsc.go.ke
          - listitem [ref=e258]:
            - link "KUCCPS Placement" [ref=e259]:
              - /url: https://kuccps.net
      - generic [ref=e260]:
        - heading "Contact Us" [level=3] [ref=e261]
        - list [ref=e262]:
          - listitem [ref=e263]:
            - generic [ref=e264]: 📍
            - text: P.O. Box 160 - 50409, Busia, Kenya
          - listitem [ref=e265]:
            - generic [ref=e266]: 📞
            - text: +254 700 564298
          - listitem [ref=e267]:
            - generic [ref=e268]: ✉️
            - text: stpeterskhwiraleseccndaryshcool@gmail.com
        - generic [ref=e269]:
          - heading "Follow Us" [level=4] [ref=e270]
          - link "Facebook" [ref=e271]:
            - /url: https://web.facebook.com/SPKSS160
            - img [ref=e272]
            - generic [ref=e274]: Facebook
    - paragraph [ref=e276]: © 2026 St Peter's Khwirale Senior School · All Rights Reserved
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