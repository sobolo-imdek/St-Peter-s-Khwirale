import { Link } from "react-router-dom";
import { schoolData } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-school-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* School Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-extrabold text-slate-200 mb-6 border-b border-slate-200/30 pb-2">
              St Peter's Khwirale Senior School
            </h3>
            <p className="text-white/80 font-bold text-sm italic italic">
              "Excellence in Spirit & Academic Truth"
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="text-slate-200 font-black uppercase text-[10px] tracking-[0.2em] mb-2">Our Mission</h4>
              <p className="text-sm text-gray-300 leading-relaxed">{schoolData.about.mission}</p>
            </div>
            <div>
              <h4 className="text-slate-200 font-black uppercase text-[10px] tracking-[0.2em] mb-2">Our Vision</h4>
              <p className="text-sm text-gray-300 leading-relaxed">{schoolData.about.vision}</p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-lg font-bold text-slate-200 mb-6 border-b border-slate-200/30 pb-2">
            Core Values
          </h3>
          <ul className="grid grid-cols-1 gap-3">
            {schoolData.about.coreValues.map((value, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                <span className="text-slate-200">◈</span> {value}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-slate-200 mb-6 border-b border-slate-200/30 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="text-sm text-gray-300 hover:text-slate-200 transition-colors">Home Page</Link>
            </li>
            <li>
              <a href="https://education.go.ke" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-slate-200 transition-colors">Ministry of Education</a>
            </li>
            <li>
              <a href="https://www.knec.ac.ke" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-slate-200 transition-colors">KNEC Portal</a>
            </li>
            <li>
              <a href="https://www.tsc.go.ke" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-slate-200 transition-colors">TSC Kenya</a>
            </li>
            <li>
              <a href="https://kuccps.net" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-slate-200 transition-colors">KUCCPS Placement</a>
            </li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="text-lg font-bold text-slate-200 mb-6 border-b border-slate-200/30 pb-2">
            Contact Us
          </h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-slate-200">📍</span>
              {schoolData.contact.address}
            </li>
            <li className="flex items-center gap-3">
              <span className="text-slate-200">📞</span>
              {schoolData.contact.phone}
            </li>
            <li className="flex items-center gap-3">
              <span className="text-slate-200">✉️</span>
              {schoolData.contact.email}
            </li>
          </ul>

          {/* Social Media */}
          <div className="mt-8">
            <h4 className="text-slate-200 font-black uppercase text-[10px] tracking-[0.2em] mb-4">Follow Us</h4>
            <a
              href={schoolData.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1557B0] hover:bg-[#0d4a96] text-white px-4 py-2 rounded-lg transition-all hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="font-bold text-sm">Facebook</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/10 text-center">
        <p className="text-xs text-gray-300">
          © {new Date().getFullYear()} {schoolData.name} · All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
