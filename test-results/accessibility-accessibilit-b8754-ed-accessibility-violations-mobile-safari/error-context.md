# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.js >> accessibility smoke tests >> /about has no serious automated accessibility violations
- Location: tests\accessibility.spec.js:11:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 653

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
+           "details:nth-child(1) > summary > .gap-4.flex.items-center > .group-open\\:text-school-secondary-light.opacity-50.font-black",
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
+           "details:nth-child(2) > summary > .gap-4.flex.items-center > .group-open\\:text-school-secondary-light.opacity-50.font-black",
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
+           "details:nth-child(3) > summary > .gap-4.flex.items-center > .group-open\\:text-school-secondary-light.opacity-50.font-black",
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
+           "details:nth-child(4) > summary > .gap-4.flex.items-center > .group-open\\:text-school-secondary-light.opacity-50.font-black",
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
+           "details:nth-child(5) > summary > .gap-4.flex.items-center > .group-open\\:text-school-secondary-light.opacity-50.font-black",
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
+               "bgColor": "#64748b",
+               "contrastRatio": 2.3,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#800000",
+               "fontSize": "15.0pt (20px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.3 (foreground color: #800000, background color: #64748b, font size: 15.0pt (20px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"w-12 h-12 bg-school-secondary rounded-xl flex items-center justify-center text-school-primary font-bold text-xl\">01</div>",
+                 "target": Array [
+                   ".space-y-4:nth-child(1) > .w-12.h-12.justify-center",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.3 (foreground color: #800000, background color: #64748b, font size: 15.0pt (20px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<div class=\"w-12 h-12 bg-school-secondary rounded-xl flex items-center justify-center text-school-primary font-bold text-xl\">01</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".space-y-4:nth-child(1) > .w-12.h-12.justify-center",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#64748b",
+               "contrastRatio": 2.3,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#800000",
+               "fontSize": "15.0pt (20px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.3 (foreground color: #800000, background color: #64748b, font size: 15.0pt (20px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"w-12 h-12 bg-school-secondary rounded-xl flex items-center justify-center text-school-primary font-bold text-xl\">02</div>",
+                 "target": Array [
+                   ".space-y-4:nth-child(2) > .w-12.h-12.justify-center",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.3 (foreground color: #800000, background color: #64748b, font size: 15.0pt (20px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<div class=\"w-12 h-12 bg-school-secondary rounded-xl flex items-center justify-center text-school-primary font-bold text-xl\">02</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".space-y-4:nth-child(2) > .w-12.h-12.justify-center",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#64748b",
+               "contrastRatio": 2.3,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#800000",
+               "fontSize": "15.0pt (20px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.3 (foreground color: #800000, background color: #64748b, font size: 15.0pt (20px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"w-12 h-12 bg-school-secondary rounded-xl flex items-center justify-center text-school-primary font-bold text-xl\">03</div>",
+                 "target": Array [
+                   ".space-y-4:nth-child(3) > .w-12.h-12.justify-center",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.3 (foreground color: #800000, background color: #64748b, font size: 15.0pt (20px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<div class=\"w-12 h-12 bg-school-secondary rounded-xl flex items-center justify-center text-school-primary font-bold text-xl\">03</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".space-y-4:nth-child(3) > .w-12.h-12.justify-center",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f3f4f6",
+               "contrastRatio": 2.3,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9ca3af",
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.3 (foreground color: #9ca3af, background color: #f3f4f6, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a class=\"aspect-square bg-gray-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-200 hover:bg-gray-50 transition-colors\" href=\"/gallery\" data-discover=\"true\"><span class=\"text-gray-400 font-medium\">+55 More</span></a>",
+                 "target": Array [
+                   ".border-dashed",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.3 (foreground color: #9ca3af, background color: #f3f4f6, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-gray-400 font-medium\">+55 More</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".text-gray-400.font-medium",
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
+           "div:nth-child(1) > .text-\\[10px\\].tracking-\\[0\\.2em\\].mb-2",
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
+           "div:nth-child(2) > .text-\\[10px\\].tracking-\\[0\\.2em\\].mb-2",
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
      - generic [ref=e16]:
        - heading "About St Peter's Khwirale Senior School" [level=1] [ref=e17]
        - paragraph [ref=e18]: A comprehensive guide to our heritage, values, and community commitment.
      - generic [ref=e19]:
        - complementary [ref=e20]:
          - generic [ref=e22]:
            - link "Overview & FAQs" [ref=e23]:
              - /url: "#overview"
            - link "School History" [ref=e24]:
              - /url: "#history"
            - link "BOM & PA" [ref=e25]:
              - /url: "#bom-pa"
            - link "Service Charter" [ref=e26]:
              - /url: "#service-charter"
            - link "School Gallery" [ref=e27]:
              - /url: "#gallery"
            - link "Alumni Community" [ref=e28]:
              - /url: "#alumni"
        - main [ref=e29]:
          - generic [ref=e31]:
            - text: Chapter 1
            - generic [ref=e32]:
              - generic [ref=e33]:
                - heading "Overview & FAQs" [level=2] [ref=e34]
                - paragraph [ref=e35]: St Peter's Khwirale Senior School is a premier mixed day and boarding school located in the heart of Busia County. Since its inception, the school has been a beacon of academic excellence and character formation for students across the region.
              - generic [ref=e36]:
                - generic [ref=e37]:
                  - heading "Our Mission" [level=4] [ref=e38]
                  - paragraph [ref=e39]: To provide quality education that empowers learners to achieve their full potential in a dynamic world.
                - generic [ref=e40]:
                  - heading "Our Vision" [level=4] [ref=e41]
                  - paragraph [ref=e42]: A center of excellence in academic and character development.
              - heading "Frequently Asked Questions" [level=3] [ref=e43]
              - generic [ref=e44]:
                - group [ref=e45]:
                  - generic "01 How do I apply for grade 10 placement in 2027? ↓" [ref=e46] [cursor=pointer]:
                    - generic [ref=e47]:
                      - generic [ref=e48]: "01"
                      - generic [ref=e49]: How do I apply for grade 10 placement in 2027?
                    - generic [ref=e50]: ↓
                - group [ref=e51]:
                  - generic "02 Which pathways and elective tracks are available under the CBC? ↓" [ref=e52] [cursor=pointer]:
                    - generic [ref=e53]:
                      - generic [ref=e54]: "02"
                      - generic [ref=e55]: Which pathways and elective tracks are available under the CBC?
                    - generic [ref=e56]: ↓
                - group [ref=e57]:
                  - generic "03 What is the 2027 fee structure and how can I pay? ↓" [ref=e58] [cursor=pointer]:
                    - generic [ref=e59]:
                      - generic [ref=e60]: "03"
                      - generic [ref=e61]: What is the 2027 fee structure and how can I pay?
                    - generic [ref=e62]: ↓
                - group [ref=e63]:
                  - generic "04 How did our students perform in the 2025 KCSE exams? ↓" [ref=e64] [cursor=pointer]:
                    - generic [ref=e65]:
                      - generic [ref=e66]: "04"
                      - generic [ref=e67]: How did our students perform in the 2025 KCSE exams?
                    - generic [ref=e68]: ↓
                - group [ref=e69]:
                  - generic "05 What clubs, sports teams and extracurricular activities do you offer? ↓" [ref=e70] [cursor=pointer]:
                    - generic [ref=e71]:
                      - generic [ref=e72]: "05"
                      - generic [ref=e73]: What clubs, sports teams and extracurricular activities do you offer?
                    - generic [ref=e74]: ↓
          - generic [ref=e76]:
            - text: Chapter 2
            - heading "School History" [level=2] [ref=e77]
            - generic [ref=e78]:
              - generic [ref=e80]:
                - paragraph [ref=e81]: Founded in 2005, St Peter's Khwirale Senior School began as a humble community initiative to bring quality senior education closer to the people of Busia. Over the decades, we have grown into a center of academic prowess, consistently ranking among the top schools in the region.
                - paragraph [ref=e82]: From our first graduating class to our current status as a regional giant, the journey has been marked by resilience and the unwavering support of the Khwirale community. What started as a single block has expanded into a multi-facility campus including modern science labs, a computer center, and spacious sports fields.
              - list [ref=e85]:
                - listitem [ref=e86]:
                  - generic [ref=e88]: "2005"
                  - text: School founded with 40 students.
                - listitem [ref=e89]:
                  - generic [ref=e91]: "2012"
                  - text: First major infrastructure expansion.
                - listitem [ref=e92]:
                  - generic [ref=e94]: "2020"
                  - text: Recognized as Top Performer in Busia.
          - generic [ref=e96]:
            - text: Chapter 3
            - generic [ref=e98]:
              - heading "BOM & Parents Association" [level=2] [ref=e99]
              - heading "Board of Management" [level=3] [ref=e100]
              - paragraph [ref=e101]: Our Board of Management (BOM) consists of visionaries and professionals dedicated to the strategic growth of the school. They ensure that our resources are utilized effectively to provide the best environment for our learners.
              - list [ref=e102]:
                - listitem [ref=e103]: Strategic Development Oversight
                - listitem [ref=e104]: Financial Management & Transparency
                - listitem [ref=e105]: Infrastructure Planning
              - heading "Parents Association (PA)" [level=3] [ref=e106]
              - paragraph [ref=e107]: The PA serves as a vital bridge between the school administration and our parents. Through regular meetings and collaborative projects, they ensure that the parent's voice is heard and acted upon.
              - blockquote [ref=e108]: "Education is a three-legged stool: The Teacher, The Student, and The Parent."
          - generic [ref=e110]:
            - text: Chapter 4
            - generic [ref=e111]:
              - heading "Service Charter" [level=2] [ref=e112]
              - paragraph [ref=e113]: We commit to professional, efficient, and ethical service delivery to all our stakeholders.
            - generic [ref=e114]:
              - generic [ref=e115]:
                - generic [ref=e116]: "01"
                - heading "Commitment" [level=4] [ref=e117]
                - paragraph [ref=e118]: We commit to professional, efficient, and ethical service delivery to all our stakeholders.
              - generic [ref=e119]:
                - generic [ref=e120]: "02"
                - heading "Excellence" [level=4] [ref=e121]
                - paragraph [ref=e122]: Continuous improvement of our educational standards and administrative processes.
              - generic [ref=e123]:
                - generic [ref=e124]: "03"
                - heading "Access" [level=4] [ref=e125]
                - paragraph [ref=e126]: Providing clear communication channels for inquiries, feedback, and complaint resolution.
          - generic [ref=e128]:
            - generic [ref=e129]:
              - generic [ref=e130]:
                - text: Chapter 5
                - generic [ref=e131]:
                  - heading "School Gallery" [level=2] [ref=e132]
                  - paragraph [ref=e133]: Explore a glimpse of learning, leadership, activities, and daily school life at St Peter's Khwirale.
              - link "View Full Gallery →" [ref=e134]:
                - /url: /gallery
                - text: View Full Gallery
                - generic [ref=e135]: →
            - generic [ref=e136]:
              - img "St Peter's Khwirale School Gallery Image" [ref=e138] [cursor=pointer]
              - img "St Peter's Khwirale School Gallery Image" [ref=e140] [cursor=pointer]
              - img "St Peter's Khwirale School Gallery Image" [ref=e142] [cursor=pointer]
              - img "St Peter's Khwirale School Gallery Image" [ref=e144] [cursor=pointer]
              - img "St Peter's Khwirale School Gallery Image" [ref=e146] [cursor=pointer]
              - img "St Peter's Khwirale School Gallery Image" [ref=e148] [cursor=pointer]
              - img "St Peter's Khwirale School Gallery Image" [ref=e150] [cursor=pointer]
              - link "+55 More" [ref=e151]:
                - /url: /gallery
                - generic [ref=e152]: +55 More
          - generic [ref=e154]:
            - text: Chapter 6
            - heading "Alumni Community" [level=2] [ref=e156]
            - generic [ref=e157]:
              - generic [ref=e158]:
                - paragraph [ref=e159]: Our alumni are our greatest pride. Spread across the globe in various sectors — from medicine and engineering to arts and entrepreneurship — they continue to carry the "Endeavour to Excel" spirit.
                - paragraph [ref=e160]: The St Peter's Khwirale Senior School Alumni Association works to support current students through mentorship programs, scholarships, and infrastructure development. Join our network to give back and connect with former schoolmates.
              - link "Join Alumni Network" [ref=e162]:
                - /url: /alumni
      - generic [ref=e164]:
        - heading "Ready to be part of our story?" [level=2] [ref=e165]
        - generic [ref=e166]:
          - link "Visit Us" [ref=e167]:
            - /url: /contact
          - link "Learn About CBE" [ref=e168]:
            - /url: /cbe
  - contentinfo [ref=e169]:
    - generic [ref=e170]:
      - generic [ref=e171]:
        - generic [ref=e172]:
          - heading "St Peter's Khwirale Senior School" [level=3] [ref=e173]
          - paragraph [ref=e174]: "\"Excellence in Spirit & Academic Truth\""
        - generic [ref=e175]:
          - generic [ref=e176]:
            - heading "Our Mission" [level=4] [ref=e177]
            - paragraph [ref=e178]: To provide quality education that empowers learners to achieve their full potential in a dynamic world.
          - generic [ref=e179]:
            - heading "Our Vision" [level=4] [ref=e180]
            - paragraph [ref=e181]: A center of excellence in academic and character development.
      - generic [ref=e182]:
        - heading "Core Values" [level=3] [ref=e183]
        - list [ref=e184]:
          - listitem [ref=e185]:
            - generic [ref=e186]: ◈
            - text: Discipline
          - listitem [ref=e187]:
            - generic [ref=e188]: ◈
            - text: Integrity
          - listitem [ref=e189]:
            - generic [ref=e190]: ◈
            - text: Hard Work
          - listitem [ref=e191]:
            - generic [ref=e192]: ◈
            - text: Fear of God
      - generic [ref=e193]:
        - heading "Quick Links" [level=3] [ref=e194]
        - list [ref=e195]:
          - listitem [ref=e196]:
            - link "Home Page" [ref=e197]:
              - /url: /
          - listitem [ref=e198]:
            - link "Ministry of Education" [ref=e199]:
              - /url: https://education.go.ke
          - listitem [ref=e200]:
            - link "KNEC Portal" [ref=e201]:
              - /url: https://www.knec.ac.ke
          - listitem [ref=e202]:
            - link "TSC Kenya" [ref=e203]:
              - /url: https://www.tsc.go.ke
          - listitem [ref=e204]:
            - link "KUCCPS Placement" [ref=e205]:
              - /url: https://kuccps.net
      - generic [ref=e206]:
        - heading "Contact Us" [level=3] [ref=e207]
        - list [ref=e208]:
          - listitem [ref=e209]:
            - generic [ref=e210]: 📍
            - text: P.O. Box 160 - 50409, Busia, Kenya
          - listitem [ref=e211]:
            - generic [ref=e212]: 📞
            - text: +254 700 564298
          - listitem [ref=e213]:
            - generic [ref=e214]: ✉️
            - text: stpeterskhwiraleseccndaryshcool@gmail.com
        - generic [ref=e215]:
          - heading "Follow Us" [level=4] [ref=e216]
          - link "Facebook" [ref=e217]:
            - /url: https://web.facebook.com/SPKSS160
            - img [ref=e218]
            - generic [ref=e220]: Facebook
    - paragraph [ref=e222]: © 2026 St Peter's Khwirale Senior School · All Rights Reserved
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