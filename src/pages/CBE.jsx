import React, { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import useSanityPage from "../hooks/useSanityPage";

const sections = [
  { id: "pathways", title: "Pathways & Learning" },
  { id: "admissions", title: "Admissions Process" },
  { id: "fees", title: "Fee Structure" },
  { id: "student-life", title: "Student Life & Welfare" },
];

export default function CBE() {
  const [activeTab, setActiveTab] = useState("pathways");
  const page = useSanityPage("cbe");

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
      <SEO
        title={page.title}
        description={page.seoDescription}
      />
      <div className="bg-school-background min-h-screen">
        {/* Hero Section */}
        <section
          className="relative bg-school-primary text-white pt-16 pb-32 text-center overflow-hidden"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url("/images/gallery/players.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center 35%',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 relative z-10 pt-2 pb-6">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg" style={{ color: '#800000' }}>
              {page.heading}
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto font-bold drop-shadow-md" style={{ color: '#F5F5DC' }}>
              {page.subheading}
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12 relative">
          {/* Sticky Navigation */}
          <aside className="lg:w-1/4">
            <div className="sticky top-28 space-y-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 px-2">
                CBE Chapters
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
            {/* Pathways & Learning */}
            <section id="pathways" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                <span className="text-school-secondary font-bold tracking-widest uppercase text-sm">Chapter 1</span>
                <h2 className="text-3xl md:text-4xl mb-8 mt-2 text-school-primary">Pathways & Learning</h2>
                <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                  <p>
                    The Competency-Based Curriculum (CBC) at St Peter's Khwirale Senior School is designed to foster a wide range of skills,
                    ensuring that every student finds a path that matches their passion and potential.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 my-10">
                    <div className="bg-school-background p-6 rounded-2xl border-l-4 border-school-primary">
                      <h4 className="font-bold text-school-primary mb-2">STEM Pathway</h4>
                      <p className="text-sm italic text-gray-600">Science, Technology, Engineering, and Mathematics focus for future innovators.</p>
                    </div>
                    <div className="bg-school-background p-6 rounded-2xl border-l-4 border-school-secondary">
                      <h4 className="font-bold text-school-primary mb-2">Arts & Sports Science</h4>
                      <p className="text-sm italic text-gray-600">Nurturing creative talent and physical excellence through specialized coaching.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Admissions Process */}
            <section id="admissions" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                <span className="text-school-secondary font-bold tracking-widest uppercase text-sm">Chapter 2</span>
                <h2 className="text-3xl md:text-4xl mb-8 mt-2 text-school-primary">Admissions Process</h2>
                <div className="space-y-6 text-gray-700">
                  <p className="text-lg leading-relaxed font-medium">
                    Joining St Peter's Khwirale is a straightforward process managed with transparency and care.
                  </p>
                  <div className="relative pl-8 border-l-2 border-school-secondary space-y-8">
                    <div className="relative">
                      <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-school-secondary border-4 border-white"></div>
                      <h4 className="font-bold text-school-primary">Step 1: Application</h4>
                      <p className="text-sm text-gray-600">Collect admission forms from the school office or download them from our digital portal.</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-school-primary border-4 border-white"></div>
                      <h4 className="font-bold text-school-primary">Step 2: Interview & Assessment</h4>
                      <p className="text-sm text-gray-600">Students undergo a basic assessment to help us understand their learning needs.</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-school-secondary border-4 border-white"></div>
                      <h4 className="font-bold text-school-primary">Step 3: Registration</h4>
                      <p className="text-sm text-gray-600">Upon successful assessment, complete formal registration and fee payment.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Fee Structure */}
            <section id="fees" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 italic bg-gradient-to-br from-white to-gray-50">
                <span className="text-school-secondary font-bold tracking-widest uppercase text-sm font-sans not-italic">Chapter 3</span>
                <h2 className="text-3xl md:text-4xl mb-8 mt-2 font-sans not-italic text-school-primary">Fee Structure</h2>
                <div className="prose prose-lg text-gray-700 max-w-none space-y-6 font-sans not-italic">
                  <p>
                    We maintain competitive and transparent fees to ensure quality education remains accessible.
                  </p>
                  <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                    <table className="w-full text-left border-collapse">
                      <thead className="bg-school-primary text-white">
                        <tr>
                          <th className="p-4 font-bold">Category</th>
                          <th className="p-4 font-bold">Standard Term Fee</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="p-4 text-gray-600">Tuition & Learning Materials</td>
                          <td className="p-4 font-bold text-school-primary">KES 12,500</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="p-4 text-gray-600">Administrative Levies</td>
                          <td className="p-4 font-bold text-school-primary">KES 3,200</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="p-4 text-gray-600">Activity & Development</td>
                          <td className="p-4 font-bold text-school-primary">KES 2,800</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm opacity-60">* Fees are subject to review by the BOM and PA. Contact the office for detailed breakdown.</p>
                </div>
              </div>
            </section>

            {/* Student Life & Welfare */}
            //work on the text colour Here
            <section id="student-life" className="scroll-mt-32">
              <div className="bg-school-primary text-white p-8 md:p-12 rounded-3xl shadow-xl">
                <span className="text-school-secondary font-bold tracking-widest uppercase text-sm">Chapter 4</span>
                <h2 className="text-3xl md:text-4xl mb-8 mt-2 text-white">Student Life & Welfare</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="text-3xl mb-4 block">🏡</span>
                    <h4 className="font-bold mb-2">Safe Boarding</h4>
                    <p className="text-sm opacity-80 leading-relaxed">Modern dormitories providing a comfortable and structured environment for growth.</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="text-3xl mb-4 block">🍲</span>
                    <h4 className="font-bold mb-2">Balanced Nutrition</h4>
                    <p className="text-sm opacity-80 leading-relaxed">We provide healthy, balanced meals that fuel the bodies and minds of our learners.</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="text-3xl mb-4 block">🚑</span>
                    <h4 className="font-bold mb-2">Student Health</h4>
                    <p className="text-sm opacity-80 leading-relaxed">Dedicated school clinic with qualified staff to handle student wellbeing 24/7.</p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>

        {/* Footer CTA */}
        <section className="py-20 mt-12 bg-gray-50 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 italic text-school-primary">Ready to enroll in our CBE program?</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="bg-school-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-school-primary-light transition-all shadow-xl">
                Contact Admissions
              </Link>
              <Link to="/academics" className="bg-white text-school-primary border-2 border-school-primary px-10 py-4 rounded-xl font-bold hover:bg-school-background transition-all">
                Full Curriculum Details
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
