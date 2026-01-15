// src/pages/About.jsx
import MainLayout from "../layouts/MainLayout";
import { schoolData } from "../data/content";

export default function About() {
  return (
    <MainLayout>
      <div className="bg-school-dark min-h-screen text-gray-800">

        {/* Header */}
        <section className="bg-school-maroon text-white py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-school-accent-cream opacity-90 max-w-2xl mx-auto px-4">
            Building character and intellect for a brighter future.
          </p>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-16 space-y-20">

          {/* History */}
          <section>
            <h2 className="text-3xl font-bold text-school-maroon mb-6 border-b border-gray-300 pb-2">Our History</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              {schoolData.about.history}
            </p>
          </section>

          {/* Mission & Vision */}
          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-md hover:border-school-maroon transition-colors">
              <h3 className="text-2xl font-bold text-school-maroon mb-4">Our Mission</h3>
              <p className="text-lg italic text-gray-600">"{schoolData.about.mission}"</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-md hover:border-school-maroon transition-colors">
              <h3 className="text-2xl font-bold text-school-maroon mb-4">Our Vision</h3>
              <p className="text-lg italic text-gray-600">"{schoolData.about.vision}"</p>
            </div>
          </section>

          {/* Core Values */}
          <section>
            <h2 className="text-3xl font-bold text-school-maroon mb-8 text-center">Core Values</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {schoolData.about.coreValues.map((value, index) => (
                <span key={index} className="px-6 py-3 bg-white rounded-full text-school-maroon font-semibold shadow-md border border-gray-200 hover:bg-school-maroon hover:text-white transition-colors cursor-default">
                  {value}
                </span>
              ))}
            </div>
          </section>

        </div>
      </div>
    </MainLayout>
  );
}
