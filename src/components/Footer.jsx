import { Link } from "react-router-dom";
import { schoolData } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-school-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* School Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-extrabold text-school-secondary mb-6 border-b border-school-secondary/30 pb-2">
              St Peter's Khwirale Secondary School
            </h3>
            <p className="text-white/80 font-bold text-sm italic italic">
              "Excellence in Spirit & Academic Truth"
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="text-school-secondary font-black uppercase text-[10px] tracking-[0.2em] mb-2">Our Mission</h4>
              <p className="text-sm text-gray-300 leading-relaxed">{schoolData.about.mission}</p>
            </div>
            <div>
              <h4 className="text-school-secondary font-black uppercase text-[10px] tracking-[0.2em] mb-2">Our Vision</h4>
              <p className="text-sm text-gray-300 leading-relaxed">{schoolData.about.vision}</p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-lg font-bold text-school-secondary mb-6 border-b border-school-secondary/30 pb-2">
            Core Values
          </h3>
          <ul className="grid grid-cols-1 gap-3">
            {schoolData.about.coreValues.map((value, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                <span className="text-school-secondary">◈</span> {value}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-school-secondary mb-6 border-b border-school-secondary/30 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="text-sm text-gray-300 hover:text-school-secondary transition-colors">Home Page</Link>
            </li>
            <li>
              <a href="https://education.go.ke" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-school-secondary transition-colors">Ministry of Education</a>
            </li>
            <li>
              <a href="https://www.knec.ac.ke" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-school-secondary transition-colors">KNEC Portal</a>
            </li>
            <li>
              <a href="https://www.tsc.go.ke" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-school-secondary transition-colors">TSC Kenya</a>
            </li>
            <li>
              <a href="https://kuccps.net" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-school-secondary transition-colors">KUCCPS Placement</a>
            </li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="text-lg font-bold text-school-secondary mb-6 border-b border-school-secondary/30 pb-2">
            Contact Us
          </h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-school-secondary">📍</span>
              {schoolData.contact.address}
            </li>
            <li className="flex items-center gap-3">
              <span className="text-school-secondary">📞</span>
              {schoolData.contact.phone}
            </li>
            <li className="flex items-center gap-3">
              <span className="text-school-secondary">✉️</span>
              {schoolData.contact.email}
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/10 text-center">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} {schoolData.name} · All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
