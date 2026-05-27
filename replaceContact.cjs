const fs = require('fs');

let c = fs.readFileSync('src/pages/Contact.jsx', 'utf8');

const target = `                <p className="flex items-start gap-3">
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

const replacement = `                <p className="flex items-start gap-3">
                  <span className="text-school-maroon">📍</span>
                  <span>Located 3km from Nambale town along Nambale-Amukura road,Busia County.<br />{schoolData.contact.address}</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-school-maroon">📞</span>
                  <a href={\`tel:\${settings.phone}\`} className="hover:text-school-maroon transition-colors">{settings.phone}</a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-school-maroon">✉️</span>
                  <a href={\`mailto:\${settings.email}\`} className="hover:text-school-maroon transition-colors">{settings.email}</a>
                </p>`;

c = c.replace(target, replacement);

fs.writeFileSync('src/pages/Contact.jsx', c);
console.log("Updated Contact.jsx");
