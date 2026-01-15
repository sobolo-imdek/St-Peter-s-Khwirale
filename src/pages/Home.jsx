// src/pages/Home.jsx
import MainLayout from "../layouts/MainLayout";
import HeroCarousel from "../components/HeroCarousel";
import { schoolData } from "../data/content";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative z-30 bg-school-primary text-white py-16 md:py-20 min-h-[550px] md:min-h-[600px] flex items-center overflow-hidden shadow-lg mb-8">
        <HeroCarousel images={schoolData.hero.images} />

        <div className="relative z-30 max-w-7xl mx-auto px-4 w-full">
          <div className="text-left md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white drop-shadow-sm">
              {schoolData.hero.headline}
            </h1>
            <p className="text-lg md:text-2xl text-school-secondary mb-10 leading-relaxed font-light">
              {schoolData.hero.subheadline}
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="relative z-10 py-20 bg-white border-t-8 border-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-school-primary mb-6">
            Welcome to St Peter's Khwirale Secondary School
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            A public Mixed secondary school categorized as C4 under the new Competency-Based Education (CBE) curriculum. We are dedicated to empowering our students through quality education, discipline, and integrity, while providing a safe and supportive environment where every child can discover their potential and thrive.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Browse through our website to learn more about us, from our academic programs and vibrant student life to our achievements and community engagement.
          </p>
        </div>
      </section>

      {/* Identity Cards Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Motto */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow border-t-4 border-school-primary group">
              <div className="text-school-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0V5.625a2.25 2.25 0 11-4.5 0v7.125M12 5.625a2.25 2.25 0 11-4.5 0" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Motto</h3>
              <p className="text-gray-600 italic">"Endeavour to excel"</p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow border-t-4 border-school-secondary group">
              <div className="text-school-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Vision</h3>
              <p className="text-gray-600">To have a community where all children feel loved, respected and encouraged to develop to their full potential.</p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow border-t-4 border-school-primary group">
              <div className="text-school-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Mission</h3>
              <p className="text-gray-600">To provide quality education, childcare in a safe respectful inclusive environment that builds a foundation for lifelong learning.</p>
            </div>

            {/* Core Values */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow border-t-4 border-school-secondary group">
              <div className="text-school-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Core Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Diligence</li>
                <li>Team spirit</li>
                <li>Integrity</li>
                <li>Accountability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-school-primary text-center">A message from our principal</h2>

          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="w-full md:w-1/3">
              <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-2xl relative group border-4 border-school-secondary">
                {/* Fallback for missing image */}
                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                  <span className="text-6xl">👤</span>
                </div>
                {/* Real image tag */}
                <img
                  src={schoolData.principal.image}
                  alt={schoolData.principal.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-school-primary/90 p-6 backdrop-blur-sm">
                  <p className="text-white font-bold text-lg">{schoolData.principal.name}</p>
                  <p className="text-school-secondary text-sm">{schoolData.principal.title}</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3 text-left">
              <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-8 border-l-8 border-school-secondary pl-6 leading-relaxed whitespace-pre-line">
                "{schoolData.principal.message}"
              </blockquote>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about" className="inline-flex items-center justify-center gap-2 text-white bg-school-primary px-8 py-3 rounded-lg font-semibold hover:bg-school-primary-light transition-all shadow-md hover:scale-105 active:scale-95">
                  About Us
                  <span>→</span>
                </Link>
                <Link to="/about/history" className="inline-flex items-center justify-center gap-2 text-school-primary border-2 border-school-primary px-8 py-3 rounded-lg font-semibold hover:bg-school-primary hover:text-white transition-all shadow-sm hover:scale-105 active:scale-95">
                  School History
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
