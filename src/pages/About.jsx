// src/pages/About.jsx
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";
import { navLinks } from "../data/navLinks";

export default function About() {
  const aboutLink = navLinks.find(link => link.title === "About");
  const subtopics = aboutLink?.submenu || [];

  return (
    <MainLayout>
      <div className="bg-school-background min-h-screen text-gray-800">
        {/* Header */}
        <section className="bg-school-primary text-white py-20 text-center">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white drop-shadow-sm">
              About St Peter’s Khwirale
            </h1>
            <p className="text-xl md:text-2xl text-school-secondary opacity-90 max-w-3xl mx-auto leading-relaxed font-light">
              Nurturing character, discipline, and academic excellence since 2005.
            </p>
          </div>
        </section>

        {/* Subtopics Directory */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subtopics.map((topic, index) => (
                <Link
                  key={index}
                  to={topic.path}
                  className="group bg-white p-8 rounded-2xl shadow-md border-b-4 border-school-secondary hover:border-school-primary hover:-translate-y-2 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-school-primary group-hover:text-school-primary-light transition-colors">
                      {topic.title}
                    </h2>
                    <span className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity text-school-primary">→</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed italic">
                    Explore more about our {topic.title.toLowerCase()} and how it shapes our school community.
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-school-primary text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 italic">"Endeavour to Excel"</h2>
            <p className="text-lg opacity-80 mb-10 leading-relaxed">
              We are committed to providing a holistic education that prepares our students for global leadership.
            </p>
            <Link to="/contact" className="bg-white text-school-primary px-10 py-4 rounded-xl font-bold hover:bg-school-secondary transition-all shadow-xl">
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
