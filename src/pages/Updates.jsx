import React, { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import useSanityPage from "../hooks/useSanityPage";
import PageBody from "../components/PageBody";
import PageLoader from "../components/PageLoader";
import useSanitySection from "../hooks/useSanitySection";
import useSanityUpdatesLists from "../hooks/useSanityUpdatesLists";

const sections = [
  { id: "events", title: "Upcoming Events" },
  { id: "news", title: "News & Articles" },
  { id: "tenders", title: "Tenders & Public Notices" },
  { id: "careers", title: "Job Vacancies" },
];

export default function Updates() {
  const [activeTab, setActiveTab] = useState("events");
  const page = useSanityPage("updates");
  const eventsSection = useSanitySection("updates", "events");
  const newsSection = useSanitySection("updates", "news");
  const tendersSection = useSanitySection("updates", "tenders");
  const careersSection = useSanitySection("updates", "careers");
  const { events, news, tenders, careers, isLoading: listsLoading } = useSanityUpdatesLists();

  // Handle active section on scroll with throttling
  useEffect(() => {
    let timeoutId = null;
    const handleScroll = () => {
      if (timeoutId) return;

      timeoutId = setTimeout(() => {
        const scrollPosition = window.scrollY + 200;
        for (const section of sections) {
          const element = document.getElementById(section.id);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveTab(section.id);
              break;
            }
          }
        }
        timeoutId = null;
      }, 100); // 100ms throttle
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  if (page.isLoading) return <PageLoader />;

  return (
    <MainLayout>
      <SEO
        title={page.title}
        description={page.seoDescription}
      />
      <div className="bg-school-background min-h-screen">
        {/* Hero Section */}
        <section
          className="relative bg-school-primary text-white pt-16 pb-32 text-center overflow-hidden"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url("/images/gallery/DSC_0094.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center 35%',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 relative z-10 pt-2 pb-6">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg text-white">
              {page.heading}
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto font-bold drop-shadow-md text-gray-100">
              {page.subheading}
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12 relative">
          {/* Sticky Navigation */}
          <aside className="lg:w-1/4">
            <div className="sticky top-28 space-y-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 px-2">
                Updates Chapters
              </h3>
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`block px-4 py-3 rounded-xl transition-all font-medium ${activeTab === section.id
                    ? "bg-school-primary text-white shadow-md transform scale-105"
                    : "text-gray-600 hover:bg-gray-50 hover:text-school-primary"
                    }`}
                >
                  {section.title}
                </a>
              ))}
            </div>
          </aside>

          {/* Detailed Content Chapters */}
          <main className="lg:w-3/4 space-y-24">
            {/* Upcoming Events */}
            <section id="events" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                <span className="text-school-secondary font-bold tracking-widest uppercase text-sm">Chapter 1</span>
                <PageBody body={eventsSection.body} className="mb-8" />
                <div className="space-y-6">
                  {[
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
                  ))}
                </div>
              </div>
            </section>

            {/* News & Articles */}
            <section id="news" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                <span className="text-school-secondary font-bold tracking-widest uppercase text-sm">Chapter 2</span>
                <PageBody body={newsSection.body} className="mb-8" />
                <div className="grid md:grid-cols-2 gap-8">
                  {[
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
                  ))}
                </div>
              </div>
            </section>

            {/* Tenders & Public Notices */}
            <section id="tenders" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 italic bg-gradient-to-br from-white to-gray-50">
                <span className="text-school-secondary font-bold tracking-widest uppercase text-sm font-sans not-italic">Chapter 3</span>
                <PageBody body={tendersSection.body} className="mb-8 font-sans not-italic" />
                <div className="space-y-4 font-sans not-italic">
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
                </div>
              </div>
            </section>

            {/* Job Vacancies */}
            <section id="careers" className="scroll-mt-32">
              <div className="bg-school-primary text-white p-8 md:p-12 rounded-3xl shadow-xl">
                <span className="text-school-secondary font-bold tracking-widest uppercase text-sm">Chapter 4</span>
                <PageBody body={careersSection.body} className="mb-8 [&_h2]:!text-white [&_p]:!text-white/80" />
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                  <h4 className="text-xl font-bold mb-4 text-school-secondary tracking-wide italic">Join our team of dedicated professionals!</h4>
                  <div className="flex flex-col md:flex-row gap-4">
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
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>

        {/* Footer CTA */}
        <section className="py-20 mt-12 bg-gray-50 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 italic text-school-primary">Have something to share or ask?</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="bg-school-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-school-primary-light transition-all shadow-xl">
                Contact Admin Office
              </Link>
              <Link to="/gallery" className="bg-white text-school-primary border-2 border-school-primary px-10 py-4 rounded-xl font-bold hover:bg-school-background transition-all">
                See Latest Photos
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
