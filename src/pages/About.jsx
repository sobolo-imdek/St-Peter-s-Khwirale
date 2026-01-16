import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";
import { schoolData } from "../data/content";

const sections = [
  { id: "overview", title: "Overview & FAQs" },
  { id: "history", title: "School History" },
  { id: "bom-pa", title: "BOM & PA" },
  { id: "service-charter", title: "Service Charter" },
  { id: "gallery", title: "School Gallery" },
  { id: "alumni", title: "Alumni Community" },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("overview");

  const { hash } = useLocation();

  // Scroll to hash on load or hash change
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  // Handle active section on scroll
  useEffect(() => {
    const handleScroll = () => {
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
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MainLayout>
      <div className="bg-school-background min-h-screen">
        {/* Hero Section */}
        <section className="bg-school-primary text-white py-24 text-center">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              About St Peter’s Khwirale
            </h1>
            <p className="text-xl md:text-2xl text-school-secondary opacity-90 max-w-3xl mx-auto leading-relaxed font-light">
              A comprehensive guide to our heritage, values, and community commitment.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12 relative">
          {/* Sticky Navigation - Desktop & Mobile Jump-to */}
          <aside className="lg:w-1/4">
            <div className="sticky top-28 space-y-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 px-2">
                Chapters
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
            {/* Overview & FAQs */}
            <section id="overview" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                <span className="text-school-secondary font-bold tracking-widest uppercase text-sm">Chapter 1</span>
                <h2 className="text-3xl md:text-4xl mb-8 mt-2">Overview & FAQs</h2>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    St Peter’s Khwirale Secondary School is a premier mixed day and boarding school located in the heart of Busia County.
                    Since its inception, the school has been a beacon of academic excellence and character formation for students across the region.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 my-10">
                    <div className="bg-school-background p-6 rounded-2xl border-l-4 border-school-primary">
                      <h4 className="font-bold text-school-primary mb-2">Our Mission</h4>
                      <p className="text-sm italic">{schoolData.about.mission}</p>
                    </div>
                    <div className="bg-school-background p-6 rounded-2xl border-l-4 border-school-secondary">
                      <h4 className="font-bold text-school-primary mb-2">Our Vision</h4>
                      <p className="text-sm italic">{schoolData.about.vision}</p>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-school-primary mt-12 mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <details className="group border-b border-gray-100 pb-4">
                      <summary className="font-bold cursor-pointer list-none flex justify-between items-center group-open:text-school-primary transition-colors">
                        What are the school's core values?
                        <span className="group-open:rotate-180 transition-transform">↓</span>
                      </summary>
                      <p className="mt-4 text-gray-500">Our foundation is built on Discipline, Integrity, Hard Work, and the Fear of God. These values guide every decision and interaction within our community.</p>
                    </details>
                    <details className="group border-b border-gray-100 pb-4">
                      <summary className="font-bold cursor-pointer list-none flex justify-between items-center group-open:text-school-primary transition-colors">
                        Does the school offer boarding facilities?
                        <span className="group-open:rotate-180 transition-transform">↓</span>
                      </summary>
                      <p className="mt-4 text-gray-500">Yes, we provide modern boarding facilities for both boys and girls, ensuring a safe and conducive environment for study and personal growth.</p>
                    </details>
                  </div>
                </div>
              </div>
            </section>

            {/* School History */}
            <section id="history" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                <span className="text-school-secondary font-bold tracking-widest uppercase text-sm">Chapter 2</span>
                <h2 className="text-3xl md:text-4xl mb-8 mt-2">School History</h2>
                <div className="flex flex-col md:flex-row gap-12">
                  <div className="md:w-1/2 space-y-6 text-gray-600">
                    <p>
                      {schoolData.about.history}
                    </p>
                    <p>
                      From our first graduating class to our current status as a regional giant, the journey has been marked by resilience and the unwavering support of the Khwirale community.
                      What started as a single block has expanded into a multi-facility campus including modern science labs, a computer center, and spacious sports fields.
                    </p>
                  </div>
                  <div className="md:w-1/2 bg-gray-50 rounded-2xl p-8 relative">
                    <div className="absolute top-0 left-8 h-full w-1 bg-school-secondary/20"></div>
                    <ul className="space-y-8 relative">
                      <li className="pl-10 relative">
                        <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-school-primary border-4 border-white"></div>
                        <span className="block font-bold text-school-primary">2005</span>
                        <span className="text-sm text-gray-500">School founded with 40 students.</span>
                      </li>
                      <li className="pl-10 relative">
                        <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-school-secondary border-4 border-white"></div>
                        <span className="block font-bold text-school-primary">2012</span>
                        <span className="text-sm text-gray-500">First major infrastructure expansion.</span>
                      </li>
                      <li className="pl-10 relative">
                        <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-school-primary border-4 border-white"></div>
                        <span className="block font-bold text-school-primary">2020</span>
                        <span className="text-sm text-gray-500">Recognized as Top Performer in Busia.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* BOM & PA */}
            <section id="bom-pa" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 italic bg-gradient-to-br from-white to-gray-50">
                <span className="text-school-secondary font-bold tracking-widest uppercase text-sm font-sans not-italic">Chapter 3</span>
                <h2 className="text-3xl md:text-4xl mb-8 mt-2 font-sans not-italic">BOM & Parents Association</h2>
                <div className="grid md:grid-cols-2 gap-12 font-sans not-italic">
                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-school-primary">Board of Management</h4>
                    <p className="text-gray-600">
                      Our Board of Management (BOM) consists of visionaries and professionals dedicated to the strategic growth of the school.
                      They ensure that our resources are utilized effectively to provide the best environment for our learners.
                    </p>
                    <ul className="space-y-2 text-school-primary-light font-medium">
                      <li>• Strategic Development Oversight</li>
                      <li>• Financial Management & Transparency</li>
                      <li>• Infrastructure Planning</li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-school-primary">Parents Association (PA)</h4>
                    <p className="text-gray-600">
                      The PA serves as a vital bridge between the school administration and our parents.
                      Through regular meetings and collaborative projects, they ensure that the parent's voice is heard and acted upon.
                    </p>
                    <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                      <p className="text-sm italic text-gray-500">"Education is a three-legged stool: The Teacher, The Student, and The Parent."</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Service Charter */}
            <section id="service-charter" className="scroll-mt-32">
              <div className="bg-school-primary text-white p-8 md:p-12 rounded-3xl shadow-xl">
                <span className="text-school-secondary font-bold tracking-widest uppercase text-sm">Chapter 4</span>
                <h2 className="text-3xl md:text-4xl mb-8 mt-2 text-white">Service Charter</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-school-secondary rounded-xl flex items-center justify-center text-school-primary font-bold text-xl">01</div>
                    <h4 className="font-bold">Commitment</h4>
                    <p className="text-sm opacity-80 leading-relaxed">We commit to professional, efficient, and ethical service delivery to all our stakeholders.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-school-secondary rounded-xl flex items-center justify-center text-school-primary font-bold text-xl">02</div>
                    <h4 className="font-bold">Excellence</h4>
                    <p className="text-sm opacity-80 leading-relaxed">Continuous improvement of our educational standards and administrative processes.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-school-secondary rounded-xl flex items-center justify-center text-school-primary font-bold text-xl">03</div>
                    <h4 className="font-bold">Access</h4>
                    <p className="text-sm opacity-80 leading-relaxed">Providing clear communication channels for inquiries, feedback, and complaint resolution.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Gallery Preview */}
            <section id="gallery" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                  <div>
                    <span className="text-school-secondary font-bold tracking-widest uppercase text-sm">Chapter 5</span>
                    <h2 className="text-3xl md:text-4xl mt-2">School Gallery</h2>
                  </div>
                  <Link to="/gallery" className="text-school-primary font-bold hover:text-school-secondary transition-colors flex items-center gap-2">
                    View Full Gallery <span>→</span>
                  </Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden hover:opacity-90 transition-opacity">
                    <img src="/images/hero/hero1.jpg" alt="Gallery 1" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden hover:opacity-90 transition-opacity">
                    <img src="/images/hero/hero2.jpg" alt="Gallery 2" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden hover:opacity-90 transition-opacity">
                    <img src="/images/hero/hero3.jpg" alt="Gallery 3" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-200">
                    <span className="text-gray-400 font-medium">+100 More</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Alumni Community */}
            <section id="alumni" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-school-secondary opacity-10 rounded-bl-full"></div>
                <span className="text-school-secondary font-bold tracking-widest uppercase text-sm">Chapter 6</span>
                <h2 className="text-3xl md:text-4xl mb-8 mt-2">Alumni Community</h2>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    Our alumni are our greatest pride. Spread across the globe in various sectors — from medicine and engineering to arts and entrepreneurship — they continue to carry the "Endeavour to Excel" spirit.
                  </p>
                  <p>
                    The St Peter's Khwirale Alumni Association works to support current students through mentorship programs, scholarships, and infrastructure development.
                    Join our network to give back and connect with former schoolmates.
                  </p>
                  <div className="mt-8">
                    <Link to="/alumni" className="inline-block bg-school-primary text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all">
                      Join Alumni Network
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>

        {/* Footer CTA */}
        <section className="py-20 mt-12 bg-gray-50 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 italic text-school-primary">Ready to be part of our story?</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="bg-school-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-school-primary-light transition-all shadow-xl">
                Visit Us
              </Link>
              <Link to="/cbe" className="bg-white text-school-primary border-2 border-school-primary px-10 py-4 rounded-xl font-bold hover:bg-school-background transition-all">
                Learn About CBE
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
