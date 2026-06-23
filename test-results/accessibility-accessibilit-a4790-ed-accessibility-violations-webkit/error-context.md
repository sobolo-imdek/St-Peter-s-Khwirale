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
      - link "St Peter's Khwirale Senior School Logo St Peter's Khwirale Senior School" [ref=e6]:
        - /url: /
        - img "St Peter's Khwirale Senior School Logo" [ref=e7]
        - generic [ref=e8]:
          - text: St Peter's
          - generic [ref=e9]: Khwirale Senior School
      - navigation [ref=e10]:
        - link "Home" [ref=e12]:
          - /url: /
        - link "About" [ref=e14]:
          - /url: /about
          - text: About
          - img [ref=e15]
        - link "Academics" [ref=e18]:
          - /url: /academics
          - text: Academics
          - img [ref=e19]
        - link "CBE" [ref=e22]:
          - /url: /cbe
          - text: CBE
          - img [ref=e23]
        - link "Updates" [ref=e26]:
          - /url: /updates
          - text: Updates
          - img [ref=e27]
        - link "Contact Us" [ref=e30]:
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
            - link "About Us →" [ref=e112]:
              - /url: /about
              - text: About Us
              - generic [ref=e113]: →
            - link "School History" [ref=e114]:
              - /url: /about/history
    - generic [ref=e116]:
      - heading "Explore more about our school" [level=2] [ref=e117]
      - paragraph [ref=e118]: Discover our rich history, academic programs, extracurricular activities, and vibrant school life.
      - generic [ref=e119]:
        - link "📚 Our Departments Explore our diverse academic departments and focused learning areas." [ref=e120]:
          - /url: /academics#departments
          - generic [ref=e121]: 📚
          - heading "Our Departments" [level=3] [ref=e122]
          - paragraph [ref=e123]: Explore our diverse academic departments and focused learning areas.
        - link "💳 Fee Structure Contact us for detailed information about school fees and payment methods." [ref=e124]:
          - /url: /contact
          - generic [ref=e125]: 💳
          - heading "Fee Structure" [level=3] [ref=e126]
          - paragraph [ref=e127]: Contact us for detailed information about school fees and payment methods.
        - link "🏆 KCSE Results Celebrating our academic excellence and consistent top performers." [ref=e128]:
          - /url: /academics#results
          - generic [ref=e129]: 🏆
          - heading "KCSE Results" [level=3] [ref=e130]
          - paragraph [ref=e131]: Celebrating our academic excellence and consistent top performers.
        - link "📅 Upcoming Events Stay updated with our school calendar and upcoming social activities." [ref=e132]:
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
      - link "View Full Gallery →" [ref=e146]:
        - /url: /gallery
        - text: View Full Gallery
        - generic [ref=e147]: →
    - generic [ref=e149]:
      - generic [ref=e150]:
        - generic [ref=e151]:
          - heading "School News & Education Updates" [level=2] [ref=e152]
          - paragraph [ref=e153]: Stay informed with the latest happenings, academic milestones, and educational announcements from St Peter's Khwirale.
        - link "All Updates →" [ref=e154]:
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
            - link "Read More →" [ref=e165]:
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
            - link "Read More →" [ref=e175]:
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
            - link "Read More →" [ref=e185]:
              - /url: /updates
              - text: Read More
              - generic [ref=e186]: →
      - link "View All News →" [ref=e188]:
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
        - link "View All Questions →" [ref=e227]:
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
            - link "Home Page" [ref=e269]:
              - /url: /
          - listitem [ref=e270]:
            - link "Ministry of Education" [ref=e271]:
              - /url: https://education.go.ke
          - listitem [ref=e272]:
            - link "KNEC Portal" [ref=e273]:
              - /url: https://www.knec.ac.ke
          - listitem [ref=e274]:
            - link "TSC Kenya" [ref=e275]:
              - /url: https://www.tsc.go.ke
          - listitem [ref=e276]:
            - link "KUCCPS Placement" [ref=e277]:
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
          - link "Facebook" [ref=e289]:
            - /url: https://web.facebook.com/SPKSS160
            - img [ref=e290]
            - generic [ref=e292]: Facebook
    - paragraph [ref=e294]: © 2026 St Peter's Khwirale Senior School · All Rights Reserved
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