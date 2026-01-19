// src/pages/Contact.jsx
import MainLayout from "../layouts/MainLayout";
import { schoolData } from "../data/content";
import SEO from "../components/SEO";

export default function Contact() {
  return (
    <MainLayout>
      <SEO
        title="Contact Us"
        description="Get in touch with St Peter's Khwirale Senior School for admissions, inquiries, or any questions."
      />
      <div className="bg-school-background min-h-screen text-gray-800">
        {/* Hero Section */}
        <section
          className="relative bg-school-primary text-white pt-16 pb-32 text-center overflow-hidden"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url("/images/gallery/DSC_0127.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center 35%',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 relative z-10 pt-2 pb-6">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg" style={{ color: '#800000' }}>
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto font-bold drop-shadow-md" style={{ color: '#F5F5DC' }}>
              We'd love to hear from you. Reach out to us for admissions, inquiries, or any questions.
            </p>
          </div>
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

                {/* Social Media */}
                <div className="pt-4 mt-4 border-t border-gray-200">
                  <p className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wider">Follow Us</p>
                  <a
                    href={schoolData.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#0d65d9] text-white px-5 py-3 rounded-lg transition-all hover:scale-105 shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span className="font-bold">Visit our Facebook Page</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-md">
              <h2 className="text-2xl font-bold text-school-maroon mb-6">Send a Message</h2>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const name = formData.get('name');
                  const email = formData.get('email');
                  const message = formData.get('message');

                  const subject = `Message from ${name} via Website`;
                  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

                  window.location.href = `mailto:${schoolData.contact.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
                }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:border-school-maroon transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:border-school-maroon transition-colors"
                />
                <textarea
                  rows="4"
                  name="message"
                  placeholder="Message"
                  required
                  className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:border-school-maroon transition-colors"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-school-maroon hover:bg-school-maroon-light text-white font-bold py-3 px-6 rounded-md transition-colors"
                >
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
