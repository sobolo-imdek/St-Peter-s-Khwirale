const fs = require('fs');

let c = fs.readFileSync('src/pages/Contact.jsx', 'utf8');

// 1. Add the import for useSanitySettings
if (!c.includes('useSanitySettings')) {
  c = c.replace(
    'import useSanitySection from "../hooks/useSanitySection";',
    'import useSanitySection from "../hooks/useSanitySection";\nimport useSanitySettings from "../hooks/useSanitySettings";'
  );
}

// 2. Add the hook call
if (!c.includes('const { settings } = useSanitySettings();')) {
  c = c.replace(
    'const contactSection = useSanitySection("contact", "contact");',
    'const contactSection = useSanitySection("contact", "contact");\n  const { settings } = useSanitySettings();'
  );
}

// 3. Replace the Get in Touch section exactly
const targetGetInTouch = `            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-md">
              <h2 className="text-2xl font-bold text-school-maroon mb-6">Get in Touch</h2>
              <div className="space-y-4 text-lg">
                <p className="flex items-start gap-3">
                  <span className="text-school-maroon">📍</span>
                  <span>{schoolData.location}<br />{schoolData.contact.address}</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-school-maroon">📞</span>
                  <a href={\`tel:\${schoolData.contact.phone}\`} className="hover:text-school-maroon transition-colors">{schoolData.contact.phone}</a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-school-maroon">✉️</span>
                  <a href={\`mailto:\${schoolData.contact.email}\`} className="hover:text-school-maroon transition-colors">{schoolData.contact.email}</a>
                </p>`;

const replacementGetInTouch = `            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-md">
              <h2 className="text-2xl font-bold text-school-maroon mb-6">Get in Touch</h2>
              <div className="space-y-4 text-lg">
                <p className="flex items-start gap-3">
                  <span className="text-school-maroon">📍</span>
                  <span>
                    {schoolData.location}<br />
                    {schoolData.contact.address}<br />
                    <span className="text-sm text-gray-500 mt-2 block font-medium">Located 3km from Nambale town along Nambale-Amukura road, Busia County.</span>
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-school-maroon">📞</span>
                  <a href={\`tel:\${settings.phone}\`} className="hover:text-school-maroon transition-colors">{settings.phone}</a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-school-maroon">✉️</span>
                  <a href={\`mailto:\${settings.email}\`} className="hover:text-school-maroon transition-colors">{settings.email}</a>
                </p>`;

c = c.replace(targetGetInTouch, replacementGetInTouch);

fs.writeFileSync('src/pages/Contact.jsx', c);
console.log("Contact.jsx successfully updated!");
