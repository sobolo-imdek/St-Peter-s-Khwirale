import React, { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";
import { schoolData } from "../data/content";
import SEO from "../components/SEO";
import useSanityPage from "../hooks/useSanityPage";
import PageBody from "../components/PageBody";
import PageLoader from "../components/PageLoader";

const sections = [
  { id: "curriculum", title: "Curriculum Overview" },
  { id: "departments", title: "Departments Overview" },
  { id: "faculty", title: "Faculty & Teachers" },
  { id: "results", title: "Performance & Results" },
];

import useSanitySection from "../hooks/useSanitySection";

export default function Academics() {
  const [activeTab, setActiveTab] = useState("curriculum");
  const page = useSanityPage("academics");
  const curriculumSection = useSanitySection("academics", "curriculum");
  const departmentsSection = useSanitySection("academics", "departments");
  const facultySection = useSanitySection("academics", "faculty");
  const resultsSection = useSanitySection("academics", "results");

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
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url("/images/gallery/DSC_0111.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center 35%',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 relative z-10 pt-2 pb-6">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg" style={{ color: '#800000' }}>{page.heading}</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto font-bold drop-shadow-md" style={{ color: '#F5F5DC' }}>
              {page.subheading}
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12 relative">
          {/* Sticky Navigation */}
          <aside className="lg:w-1/4">
            <div className="sticky top-28 space-y-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-sm font-bold text-gray-600 uppercase tracking-widest mb-4 px-2">
                Academics Chapters
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
            {/* Curriculum Overview */}
            <section id="curriculum" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                <span className="text-school-secondary font-bold tracking-widest uppercase text-sm">Chapter 1</span>
                <PageBody body={curriculumSection.body} className="mb-8" />
                <div className="grid md:grid-cols-2 gap-8">
                  {schoolData.academics.curriculum.map((curr, index) => (
                    <div key={index} className="bg-school-background rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
                      <h3 className="text-2xl font-bold text-school-primary mb-4">{curr.title}</h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">{curr.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {(curr.subjects || curr.pathways).map((item, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white text-school-primary text-xs rounded-full border border-school-primary/20 font-bold">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Departments Overview */}
            <section id="departments" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                <span className="text-school-secondary font-bold tracking-widest uppercase text-sm">Chapter 2</span>
                <h2 className="text-3xl md:text-4xl mb-8 mt-2">Academic Departments</h2>
                <div className="space-y-6 text-gray-600">
                  <PageBody body={departmentsSection.body} className="text-lg leading-relaxed mb-6" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: "Mathematics Department", icon: "📐" },
                      { name: "Science Department", icon: "🔬" },
                      { name: "Languages Department", icon: "📚" },
                      { name: "Humanities Department", icon: "🌍" },
                      { name: "Technical & Creative Arts", icon: "🎨" },
                      { name: "Games & Sports Department", icon: "⚽" }
                    ].map((dept, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 font-bold text-school-primary">
                        <span className="text-2xl">{dept.icon}</span>
                        {dept.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Faculty & Teachers */}
            <section id="faculty" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                <span className="text-school-secondary font-bold tracking-widest uppercase text-sm">Chapter 3</span>
                <h2 className="text-3xl md:text-4xl mb-8 mt-2">Faculty & Teaching Staff</h2>
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="md:w-1/2 space-y-6">
                    <PageBody body={facultySection.body} className="text-lg text-gray-600 leading-relaxed mb-6" />
                    <div className="bg-school-primary text-white p-6 rounded-2xl shadow-lg">
                      <p className="italic mb-4">"Our teachers don't just teach subjects; they mentor future leaders."</p>
                      <h4 className="font-bold">— Annastancia Otawa, Principal</h4>
                    </div>
                  </div>
                  <div className="md:w-1/2 grid grid-cols-2 gap-4">
                    <div className="bg-gray-100 aspect-square rounded-2xl flex flex-col items-center justify-center p-4 text-center">
                      <span className="text-4xl mb-2 font-bold text-school-primary">45+</span>
                      <span className="text-xs uppercase font-bold text-gray-600">Teachers</span>
                    </div>
                    <div className="bg-gray-100 aspect-square rounded-2xl flex flex-col items-center justify-center p-4 text-center">
                      <span className="text-4xl mb-2 font-bold text-school-primary">15</span>
                      <span className="text-xs uppercase font-bold text-gray-600">Departments</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Performance & Results */}
            <section id="results" className="scroll-mt-32">
              <div className="bg-school-primary text-white p-8 md:p-12 rounded-3xl shadow-xl">
                <span className="text-slate-200 font-bold tracking-widest uppercase text-sm">Chapter 4</span>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <PageBody body={resultsSection.body} className="[&_h2]:!text-white [&_p]:!text-white/90" />
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3">
                        <span className="text-slate-200 text-xl">🏆</span>
                        <span className="font-bold">2024 KCSE: 98% Transition Rate</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-slate-200 text-xl">📈</span>
                        <span className="font-bold">Consistently Improving Mean Grade</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                    <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-slate-200">Latest Achievement</h4>
                    <p className="text-2xl font-bold italic leading-tight">
                      "Highest subject average in Mathematics & Sciences across the sub-county for two consecutive years."
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>

        {/* Footer CTA */}
        <section className="py-20 mt-12 bg-gray-50 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 italic text-school-primary">Interested in joining our academic program?</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="bg-school-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-school-primary-light transition-all shadow-xl">
                Admission Enquiry
              </Link>
              <Link to="/gallery" className="bg-white text-school-primary border-2 border-school-primary px-10 py-4 rounded-xl font-bold hover:bg-school-background transition-all">
                Browse Faculty Gallery
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
