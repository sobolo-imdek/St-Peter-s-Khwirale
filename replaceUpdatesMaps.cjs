const fs = require('fs');

let c = fs.readFileSync('src/pages/Updates.jsx', 'utf8');

const targetEvents = `                  {[
                    { date: "Oct 15", title: "Academics Day", type: "Main Event" },
                    { date: "Oct 28", title: "Inter-School Sports Meet", type: "Sports" },
                    { date: "Nov 12", title: "Parents Association Meeting", type: "Meeting" }
                  ].map((event, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100 group hover:bg-white hover:shadow-md transition-all">
                      <div className="flex-shrink-0 w-20 h-20 bg-school-primary rounded-xl flex flex-col items-center justify-center text-white font-bold">
                        <span className="text-sm uppercase opacity-70 leading-none mb-1">{event.date.split(' ')[0]}</span>
                        <span className="text-2xl leading-none">{event.date.split(' ')[1]}</span>
                      </div>
                      <div className="flex-grow">
                        <span className="text-xs font-bold uppercase tracking-widest text-school-secondary mb-2 block">{event.type}</span>
                        <h3 className="text-xl font-bold text-school-primary mb-2 group-hover:text-school-secondary transition-colors">{event.title}</h3>
                        <p className="text-gray-600 text-sm">Join us at the school main hall for this significant milestone in our academic calendar.</p>
                      </div>
                    </div>
                  ))}`;

const replacementEvents = `                  {events.length > 0 ? events.map((event, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100 group hover:bg-white hover:shadow-md transition-all">
                      <div className="flex-shrink-0 w-20 h-20 bg-school-primary rounded-xl flex flex-col items-center justify-center text-white font-bold">
                        <span className="text-sm uppercase opacity-70 leading-none mb-1">{event.publishedAt ? new Date(event.publishedAt).toLocaleDateString('en-US', { month: 'short' }) : '---'}</span>
                        <span className="text-2xl leading-none">{event.publishedAt ? new Date(event.publishedAt).toLocaleDateString('en-US', { day: 'numeric' }) : '---'}</span>
                      </div>
                      <div className="flex-grow">
                        <span className="text-xs font-bold uppercase tracking-widest text-school-secondary mb-2 block">{event.excerpt?.split(' - ')[0] || 'Event'}</span>
                        <h3 className="text-xl font-bold text-school-primary mb-2 group-hover:text-school-secondary transition-colors">{event.title}</h3>
                        <p className="text-gray-600 text-sm">{event.excerpt?.split(' - ')[1] || event.excerpt}</p>
                      </div>
                    </div>
                  )) : <div className="text-gray-500 italic">No upcoming events currently scheduled.</div>}`;

const targetNews = `                  {[
                    {
                      title: "Khwirale Senior Shines in Busia Mathematics Contest",
                      date: "Sept 12, 2025",
                      img: "/images/gallery/DSC_0111.webp"
                    },
                    {
                      title: "New Science Lab Commissioning by County Education Team",
                      date: "Aug 28, 2025",
                      img: "/images/gallery/DSC_0088.webp"
                    }
                  ].map((news, i) => (
                    <div key={i} className="bg-school-background rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
                      <div className="h-48 overflow-hidden">
                        <img src={news.img} alt={news.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-6">
                        <span className="text-xs text-gray-400 font-bold uppercase">{news.date}</span>
                        <h3 className="text-xl font-bold text-school-primary mt-2 leading-tight">{news.title}</h3>
                        <p className="text-gray-600 text-sm mt-4">We are immensely proud of our students and staff for their hard work and dedication which continues to lead us to excellence...</p>
                        <button className="mt-6 text-school-secondary font-bold text-sm uppercase flex items-center gap-2 hover:gap-3 transition-all">
                          Read More <span>→</span>
                        </button>
                      </div>
                    </div>
                  ))}`;

const replacementNews = `                  {news.length > 0 ? news.map((newsItem, i) => (
                    <div key={i} className="bg-school-background rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
                      <div className="h-48 overflow-hidden">
                        <img src={newsItem.imageUrl || "/images/gallery/DSC_0111.webp"} alt={newsItem.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-6">
                        <span className="text-xs text-gray-400 font-bold uppercase">{newsItem.publishedAt ? new Date(newsItem.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '---'}</span>
                        <h3 className="text-xl font-bold text-school-primary mt-2 leading-tight">{newsItem.title}</h3>
                        <p className="text-gray-600 text-sm mt-4">{newsItem.excerpt}</p>
                        <button className="mt-6 text-school-secondary font-bold text-sm uppercase flex items-center gap-2 hover:gap-3 transition-all">
                          Read More <span>→</span>
                        </button>
                      </div>
                    </div>
                  )) : <div className="text-gray-500 italic col-span-2">No news articles available.</div>}`;

const targetTenders = `                <div className="space-y-4 font-sans not-italic">
                  <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm flex items-center justify-between group cursor-pointer hover:border-school-secondary transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl">📄</div>
                      <div>
                        <h4 className="font-bold text-school-primary">Tender for Construction of Staff Quarters 2026</h4>
                        <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Ref: STPK/TN/2026/04 · Due: Dec 12, 2025</p>
                      </div>
                    </div>
                    <span className="text-school-secondary font-bold group-hover:scale-125 transition-transform">↓</span>
                  </div>
                  <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm flex items-center justify-between group cursor-pointer hover:border-school-secondary transition-colors opacity-60">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl">✅</div>
                      <div>
                        <h4 className="font-bold text-school-primary line-through">Prequalification of Suppliers for 2025 Financial Year</h4>
                        <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Status: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>`;

const replacementTenders = `                <div className="space-y-4 font-sans not-italic">
                  {tenders.length > 0 ? tenders.map((tender, i) => (
                    <a key={i} href={tender.fileUrl || '#'} target={tender.fileUrl ? "_blank" : "_self"} rel="noopener noreferrer" className={\`p-6 bg-white border border-gray-100 rounded-2xl shadow-sm flex items-center justify-between group cursor-pointer transition-colors \${tender.description?.includes('Closed') ? 'opacity-60' : 'hover:border-school-secondary'}\`}>
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
                  )) : <div className="text-gray-500 italic">No public notices or tenders available at the moment.</div>}
                </div>`;

const targetCareers = `                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-grow p-5 bg-white rounded-xl text-school-primary flex items-center justify-between hover:scale-[1.02] transition-transform cursor-pointer shadow-lg">
                      <div>
                        <h5 className="font-bold">Subject Teacher (Math/Physics)</h5>
                        <p className="text-xs opacity-60">Full-time · Experience Required</p>
                      </div>
                      <span className="text-school-secondary font-black">Apply</span>
                    </div>
                    <div className="flex-grow p-5 bg-white/10 rounded-xl flex items-center justify-center border border-dashed border-white/30 text-sm font-bold opacity-60">
                      More vacancies coming soon
                    </div>
                  </div>`;

const replacementCareers = `                  <div className="flex flex-col md:flex-row gap-4 flex-wrap">
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
                  </div>`;

c = c.replace(targetEvents, replacementEvents);
c = c.replace(targetNews, replacementNews);
c = c.replace(targetTenders, replacementTenders);
c = c.replace(targetCareers, replacementCareers);

fs.writeFileSync('src/pages/Updates.jsx', c);
console.log("Updated Updates.jsx maps successfully!");
