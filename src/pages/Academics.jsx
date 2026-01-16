// src/pages/Academics.jsx
import MainLayout from "../layouts/MainLayout";
import { schoolData } from "../data/content";

export default function Academics() {
  return (
    <MainLayout>
      <div className="bg-school-dark min-h-screen text-gray-800">
        <section className="bg-white pt-6 pb-12 text-center border-b border-gray-200">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-school-maroon">Academic Excellence</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Providing diverse pathways for every learner.
          </p>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {schoolData.academics.curriculum.map((curr, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h2 className="text-3xl font-bold text-school-maroon mb-4">{curr.title}</h2>
                <p className="text-gray-700 mb-8 text-lg">{curr.description}</p>

                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                  {curr.subjects ? "Key Subjects" : "Pathways"}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {(curr.subjects || curr.pathways).map((item, idx) => (
                    <span key={idx} className="px-3 py-1 bg-school-dark text-school-maroon text-sm rounded border border-gray-200 font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
