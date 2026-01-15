// src/pages/Contact.jsx
import MainLayout from "../layouts/MainLayout";
import { schoolData } from "../data/content";

export default function Contact() {
  return (
    <MainLayout>
      <div className="bg-school-dark min-h-screen text-gray-800">
        <section className="bg-school-maroon text-white py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-school-accent-cream opacity-90">
            We'd love to hear from you.
          </p>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-md">
              <h2 className="text-2xl font-bold text-school-maroon mb-6">Get in Touch</h2>
              <div className="space-y-4 text-lg">
                <p className="flex items-start gap-3">
                  <span className="text-school-maroon">📍</span>
                  <span>{schoolData.location}<br />{schoolData.contact.address}</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-school-maroon">📞</span>
                  <a href={`tel:${schoolData.contact.phone}`} className="hover:text-school-maroon transition-colors">{schoolData.contact.phone}</a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-school-maroon">✉️</span>
                  <a href={`mailto:${schoolData.contact.email}`} className="hover:text-school-maroon transition-colors">{schoolData.contact.email}</a>
                </p>
              </div>
            </div>

            {/* Simple Form (Static for now) */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-md">
              <h2 className="text-2xl font-bold text-school-maroon mb-6">Send a Message</h2>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:border-school-maroon transition-colors" />
                <input type="email" placeholder="Your Email" className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:border-school-maroon transition-colors" />
                <textarea rows="4" placeholder="Message" className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:border-school-maroon transition-colors"></textarea>
                <button type="button" className="w-full bg-school-maroon hover:bg-school-maroon-light text-white font-bold py-3 px-6 rounded-md transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="h-full min-h-[400px] bg-gray-200 rounded-xl overflow-hidden shadow-lg border border-gray-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.583389882353!2d34.36440263691689!3d0.4398129758156108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178021a00a184589%3A0xc61026048d087b32!2sKhwirale!5e0!3m2!1sen!2ske!4v1705600000000!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location Map"
              className="" // Removed grayscale invert for normal map usage
            ></iframe>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
