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
+ Received  + 688

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
+                 "html": "<div class=\"bg-white p-4 lg:p-6 rounded-2xl shadow-sm border border-gray-100 overflow-x-auto lg:overflow-visible\">",
+                 "target": Array [
+                   ".lg\\:p-6",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.53 (foreground color: #9ca3af, background color: #ffffff, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<h3 class=\"text-sm font-bold text-gray-400 uppercase tracking-widest mb-2 lg:mb-4 px-2 hidden lg:block\">Chapters</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".lg\\:mb-4",
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
      - generic [ref=e34]:
        - heading "About St Peter's Khwirale Senior School" [level=1] [ref=e35]
        - paragraph [ref=e36]: A comprehensive guide to our heritage, values, and community commitment.
      - generic [ref=e37]:
        - complementary [ref=e38]:
          - generic [ref=e39]:
            - heading "Chapters" [level=3] [ref=e40]
            - generic [ref=e41]:
              - link "Overview & FAQs" [ref=e42]:
                - /url: "#overview"
              - link "School History" [ref=e43]:
                - /url: "#history"
              - link "BOM & PA" [ref=e44]:
                - /url: "#bom-pa"
              - link "Service Charter" [ref=e45]:
                - /url: "#service-charter"
              - link "School Gallery" [ref=e46]:
                - /url: "#gallery"
              - link "Alumni Community" [ref=e47]:
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
              - link "View Full Gallery →" [ref=e153]:
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
              - link "+55 More" [ref=e170]:
                - /url: /gallery
                - generic [ref=e171]: +55 More
          - generic [ref=e173]:
            - text: Chapter 6
            - heading "Alumni Community" [level=2] [ref=e175]
            - generic [ref=e176]:
              - generic [ref=e177]:
                - paragraph [ref=e178]: Our alumni are our greatest pride. Spread across the globe in various sectors — from medicine and engineering to arts and entrepreneurship — they continue to carry the "Endeavour to Excel" spirit.
                - paragraph [ref=e179]: The St Peter's Khwirale Senior School Alumni Association works to support current students through mentorship programs, scholarships, and infrastructure development. Join our network to give back and connect with former schoolmates.
              - link "Join Alumni Network" [ref=e181]:
                - /url: /alumni
      - generic [ref=e183]:
        - heading "Ready to be part of our story?" [level=2] [ref=e184]
        - generic [ref=e185]:
          - link "Visit Us" [ref=e186]:
            - /url: /contact
          - link "Learn About CBE" [ref=e187]:
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
            - link "Home Page" [ref=e216]:
              - /url: /
          - listitem [ref=e217]:
            - link "Ministry of Education" [ref=e218]:
              - /url: https://education.go.ke
          - listitem [ref=e219]:
            - link "KNEC Portal" [ref=e220]:
              - /url: https://www.knec.ac.ke
          - listitem [ref=e221]:
            - link "TSC Kenya" [ref=e222]:
              - /url: https://www.tsc.go.ke
          - listitem [ref=e223]:
            - link "KUCCPS Placement" [ref=e224]:
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
          - link "Facebook" [ref=e236]:
            - /url: https://web.facebook.com/SPKSS160
            - img [ref=e237]
            - generic [ref=e239]: Facebook
    - paragraph [ref=e241]: © 2026 St Peter's Khwirale Senior School · All Rights Reserved
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