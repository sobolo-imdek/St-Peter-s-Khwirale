const fs = require('fs');

let c = fs.readFileSync('src/pages/Updates.jsx', 'utf8');

if (!c.includes('useSanityUpdatesLists')) {
    // 1. Add import
    c = c.replace(
        /import useSanitySection from "\.\.\/hooks\/useSanitySection";/,
        'import useSanitySection from "../hooks/useSanitySection";\nimport useSanityUpdatesLists from "../hooks/useSanityUpdatesLists";'
    );

    // 2. Call hook
    c = c.replace(
        /const careersSection = useSanitySection\("updates", "careers"\);/,
        'const careersSection = useSanitySection("updates", "careers");\n  const { events, news, tenders, careers, isLoading: listsLoading } = useSanityUpdatesLists();'
    );

    // 3. Replace Events Map
    c = c.replace(
        /\{\[\s*\{\s*date:\s*"Oct 15",[\s\S]*?\]\.map\(\(event,\s*i\)\s*=>\s*\(/,
        `{events.length > 0 ? events.map((event, i) => (`
    );

    c = c.replace(
        /<span className="text-sm uppercase opacity-70 leading-none mb-1">\{event\.date\.split\(' '\)\[0\]\}<\/span>/g,
        `<span className="text-sm uppercase opacity-70 leading-none mb-1">{new Date(event.publishedAt).toLocaleDateString('en-US', { month: 'short' })}</span>`
    );

    c = c.replace(
        /<span className="text-2xl leading-none">\{event\.date\.split\(' '\)\[1\]\}<\/span>/g,
        `<span className="text-2xl leading-none">{new Date(event.publishedAt).toLocaleDateString('en-US', { day: 'numeric' })}</span>`
    );

    c = c.replace(
        /\{event\.type\}/g,
        `{event.excerpt?.split(' - ')[0] || 'Event'}`
    );

    c = c.replace(
        /<p className="text-gray-600 text-sm">Join us at the school main hall for this significant milestone in our academic calendar\.<\/p>/,
        `<p className="text-gray-600 text-sm">{event.excerpt?.split(' - ')[1] || event.excerpt}</p>`
    );

    // 4. Replace News Map
    c = c.replace(
        /\{\[\s*\{\s*title:\s*"Khwirale Senior Shines[\s\S]*?\]\.map\(\(news,\s*i\)\s*=>\s*\(/,
        `{news.length > 0 ? news.map((newsItem, i) => (`
    );

    c = c.replace(
        /news\.img/g,
        `newsItem.imageUrl || "/images/gallery/DSC_0111.webp"`
    );
    
    c = c.replace(
        /news\.title/g,
        `newsItem.title`
    );

    c = c.replace(
        /news\.date/g,
        `new Date(newsItem.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })`
    );

    c = c.replace(
        /<p className="text-gray-600 text-sm mt-4">We are immensely proud of our students and staff for their hard work and dedication which continues to lead us to excellence\.\.\.<\/p>/,
        `<p className="text-gray-600 text-sm mt-4">{newsItem.excerpt}</p>`
    );

    // 5. Replace Tenders (Downloads)
    c = c.replace(
        /<div className="space-y-4 font-sans not-italic">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/,
        `<div className="space-y-4 font-sans not-italic">
                  {tenders.length > 0 ? tenders.map((tender, i) => (
                    <a key={i} href={tender.fileUrl} target="_blank" rel="noopener noreferrer" className={\`p-6 bg-white border border-gray-100 rounded-2xl shadow-sm flex items-center justify-between group cursor-pointer transition-colors \${tender.description?.includes('Closed') ? 'opacity-60' : 'hover:border-school-secondary'}\`}>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl">
                           {tender.description?.includes('Closed') ? '✅' : '📄'}
                        </div>
                        <div>
                          <h4 className={\`font-bold text-school-primary \${tender.description?.includes('Closed') ? 'line-through' : ''}\`}>{tender.title}</h4>
                          <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{tender.description}</p>
                        </div>
                      </div>
                      {!tender.description?.includes('Closed') && <span className="text-school-secondary font-bold group-hover:scale-125 transition-transform">↓</span>}
                    </a>
                  )) : (
                    <div className="text-gray-500 italic">No public notices or tenders available at the moment.</div>
                  )}
                </div>
              </div>
            </section>`
    );

    // 6. Replace Careers
    c = c.replace(
        /<div className="flex flex-col md:flex-row gap-4">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/,
        `<div className="flex flex-col md:flex-row gap-4 flex-wrap">
                    {careers.length > 0 ? careers.map((career, i) => (
                      <div key={i} className="flex-grow p-5 bg-white rounded-xl text-school-primary flex items-center justify-between hover:scale-[1.02] transition-transform cursor-pointer shadow-lg min-w-[300px]">
                        <div>
                          <h5 className="font-bold">{career.title}</h5>
                          <p className="text-xs opacity-60">{career.excerpt}</p>
                        </div>
                        <span className="text-school-secondary font-black">Apply</span>
                      </div>
                    )) : (
                      <div className="flex-grow p-5 bg-white/10 rounded-xl flex items-center justify-center border border-dashed border-white/30 text-sm font-bold opacity-60">
                        More vacancies coming soon
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>`
    );

    // Fallbacks for maps
    c = c.replace(
        /\]\.map\(\(event, i\) => \(/,
        `: <div className="text-gray-500 italic">No upcoming events currently scheduled.</div>}`
    );
    
    // Wait, the fallbacks above replace the end of the hardcoded map. I need to make sure I don't break the JSX.
    // Let's use the tool properly to test.
    fs.writeFileSync('src/pages/Updates.jsx', c);
    console.log("Updates.jsx modified");
}
