// src/pages/Home.jsx
import MainLayout from "../layouts/MainLayout";
import HeroCarousel from "../components/HeroCarousel";
import { schoolData } from "../data/content";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop"; // Assuming ScrollToTop is a component
import SEO from "../components/SEO";
import PageBody from "../components/PageBody";
import useSanityPage from "../hooks/useSanityPage";

export default function Home() {
  const page = useSanityPage("home");

  return (
    <MainLayout>
      <SEO
        title={page.title}
        description={page.seoDescription}
      />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative z-30 bg-school-primary text-white pb-6 md:pb-20 min-h-[380px] md:min-h-[700px] overflow-hidden">
        <HeroCarousel images={schoolData.hero.images} />

        <div className="absolute z-30 max-w-7xl mx-auto px-4 flex flex-col inset-0 items-center justify-center md:justify-end md:items-start md:pb-56">
          <div className="text-center md:text-left max-w-4xl md:w-1/2">
            <h1 className="text-3xl md:text-6xl font-extrabold mb-6 tracking-tight text-white drop-shadow-lg">
              {schoolData.hero.headline}
            </h1>
            <p className="text-lg md:text-2xl leading-relaxed font-light drop-shadow-md text-[#F5F5DC]">
              {schoolData.hero.subheadline}
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="relative z-10 py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <PageBody body={page.body} />
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
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  loading="lazy"
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
      {/* Explore More Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-school-primary mb-4">
            Explore more about our school
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover our rich history, academic programs, extracurricular activities, and vibrant school life.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/academics#departments"
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform text-center">📚</div>
              <h3 className="text-xl font-bold mb-2 text-school-primary">Our Departments</h3>
              <p className="text-sm text-gray-500">Explore our diverse academic departments and focused learning areas.</p>
            </Link>

            <Link
              to="/contact"
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform text-center">💳</div>
              <h3 className="text-xl font-bold mb-2 text-school-primary">Fee Structure</h3>
              <p className="text-sm text-gray-500">Contact us for detailed information about school fees and payment methods.</p>
            </Link>

            <Link
              to="/academics#results"
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform text-center">🏆</div>
              <h3 className="text-xl font-bold mb-2 text-school-primary">KCSE Results</h3>
              <p className="text-sm text-gray-500">Celebrating our academic excellence and consistent top performers.</p>
            </Link>

            <Link
              to="/updates#events"
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform text-center">📅</div>
              <h3 className="text-xl font-bold mb-2 text-school-primary">Upcoming Events</h3>
              <p className="text-sm text-gray-500">Stay updated with our school calendar and upcoming social activities.</p>
            </Link>
          </div>
        </div>
      </section>
      {/* School Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-school-primary mb-12">
            A glimpse into our school
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[0, 5, 10].map((idx) => schoolData.gallery[idx]).map((img, index) => (
              <div key={index} className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer">
                <img
                  src={typeof img === 'string' ? img : img.src}
                  alt={typeof img === 'string' ? `School gallery preview ${index + 1}` : img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-school-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-school-primary-light transition-all shadow-lg hover:scale-105"
          >
            View Full Gallery
            <span>→</span>
          </Link>
        </div>
      </section>
      {/* News & Updates Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-school-primary mb-4">
                School News & Education Updates
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Stay informed with the latest happenings, academic milestones, and educational announcements from St Peter's Khwirale.
              </p>
            </div>
            <Link to="/updates" className="text-school-primary font-bold hover:text-school-secondary transition-colors flex items-center gap-2 mb-2">
              All Updates <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* News Card 1 */}
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="/images/hero/hero2.webp"
                  alt="KCSE Prep"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-school-secondary text-school-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Academic
                </div>
              </div>
              <div className="p-6">
                <time className="text-sm text-gray-500 mb-2 block font-medium">January 15, 2025</time>
                <h3 className="text-xl font-bold text-school-primary mb-3 group-hover:text-school-secondary transition-colors">
                  Preparation for 2025 KCSE Exams Commences
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                  Our candidates have officially begun their intensive revision bootcamps. The faculty is committed to ensuring every student reaches their target.
                </p>
                <Link to="/updates" className="text-school-primary font-bold text-sm flex items-center gap-1 group/link">
                  Read More <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </article>

            {/* News Card 2 */}
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="/images/hero/hero1.webp"
                  alt="Boarding Facilities"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-school-secondary text-school-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Infrastructure
                </div>
              </div>
              <div className="p-6">
                <time className="text-sm text-gray-500 mb-2 block font-medium">January 10, 2025</time>
                <h3 className="text-xl font-bold text-school-primary mb-3 group-hover:text-school-secondary transition-colors">
                  New Science Laboratory Commissioned
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                  We are proud to announce the completion of our state-of-the-art physics laboratory, equipped to handle the new CBE curriculum requirements.
                </p>
                <Link to="/updates" className="text-school-primary font-bold text-sm flex items-center gap-1 group/link">
                  Read More <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </article>

            {/* News Card 3 */}
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="/images/hero/hero3.webp"
                  alt="Sports Day"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-school-secondary text-school-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Student Life
                </div>
              </div>
              <div className="p-6">
                <time className="text-sm text-gray-500 mb-2 block font-medium">December 20, 2024</time>
                <h3 className="text-xl font-bold text-school-primary mb-3 group-hover:text-school-secondary transition-colors">
                  Annual Inter-House Sports Extravaganza
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                  A look back at the thrilling competitions and sportsmanship displayed during our end-of-year sports festival. Congratulations to Simba House!
                </p>
                <Link to="/updates" className="text-school-primary font-bold text-sm flex items-center gap-1 group/link">
                  Read More <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </article>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/updates"
              className="inline-flex items-center gap-2 bg-school-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-school-primary-light transition-all shadow-lg hover:scale-105"
            >
              View All News
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-school-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Find quick answers about admissions, fees, school life, and more.
          </p>

          <div className="text-left space-y-4 mb-12">
            {[
              {
                q: "How do I apply for grade 10 placement in 2027?",
                a: "You can view our admission criteria, required documents and online application steps on our Admissions page.",
                link: "/admissions"
              },
              {
                q: "Which pathways and elective tracks are available under the CBC?",
                a: "Explore the full list of Competency‑Based Curriculum pathways, CBC project requirements and subject combinations on our CBE Explainer page.",
                link: "/cbe/pathways"
              },
              {
                q: "What is the 2027 fee structure and how can I pay?",
                a: "See a detailed breakdown of tuition, boarding and development levies, plus M‑Pesa and bank transfer options on our Fees page.",
                link: "/admissions/fees"
              },
              {
                q: "How did our students perform in the 2025 KCSE exams?",
                a: "Review the 2024 KCSE overall performance, subject averages and past years’ trends on our KCSE Results page.",
                link: "/academics/results"
              },
              {
                q: "What clubs, sports teams and extracurricular activities do you offer?",
                a: "Find out about our debate, STEM, drama clubs and sports teams (football, athletics, etc.) on the Student Life page.",
                link: "/student-life"
              }
            ].map((faq, index) => (
              <details key={index} className="group bg-gray-50 rounded-2xl border border-gray-100 p-0 transition-all duration-300 open:bg-school-primary open:shadow-xl overflow-hidden">
                <summary className="flex justify-between items-center p-6 font-bold text-lg text-school-primary group-open:text-white cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <span className="text-school-secondary group-open:text-school-secondary-light font-black text-2xl opacity-50">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="leading-tight">{faq.q}</span>
                  </div>
                  <span className="text-black group-open:text-white text-2xl transition-transform duration-300 group-open:rotate-180 font-black">
                    ↓
                  </span>
                </summary>
                <div className="px-6 pb-6 space-y-4 animate-fadeIn">
                  <p className="text-gray-600 group-open:text-white/90 leading-relaxed italic border-l-4 border-school-secondary group-open:border-white/30 pl-4 bg-white/5 p-4 rounded-lg">
                    {faq.a}
                  </p>
                  <div className="pt-2">
                    <Link
                      to={faq.link}
                      className="inline-flex items-center gap-2 bg-school-secondary text-school-primary px-6 py-2 rounded-full font-bold hover:bg-white hover:scale-105 transition-all shadow-md group-open:shadow-none"
                    >
                      Visit Page <span>→</span>
                    </Link>
                  </div>
                </div>
              </details>
            ))}
          </div>

          <div className="bg-school-background p-8 rounded-3xl border border-gray-100">
            <p className="text-gray-700 mb-6 font-medium">
              Didn't find what you're looking for? Visit our full FAQ section for more information.
            </p>
            <Link
              to="/about#overview"
              className="inline-flex items-center gap-2 bg-school-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-school-primary-light transition-all shadow-lg hover:scale-105"
            >
              View All Questions
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-school-primary mb-12">
            Our Partners
          </h2>
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex flex-wrap md:flex-nowrap justify-around items-center py-12 px-8 gap-12">
              <div className="h-48 flex items-center justify-center p-2">
                <img
                  src="/images/partners/moe.webp"
                  alt="Ministry of Education"
                  className="h-full w-auto object-contain"
                  loading="lazy"
                  onError={(e) => { e.target.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Coat_of_arms_of_Kenya_%28Official%29.svg/200px-Coat_of_arms_of_Kenya_%28Official%29.svg.png"; }}
                />
              </div>

              <div className="h-48 flex items-center justify-center p-2">
                <img
                  src="/images/partners/knec.webp"
                  alt="KNEC"
                  className="h-full w-auto object-contain"
                  onError={(e) => { e.target.src = "https://www.knec.ac.ke/wp-content/uploads/2021/07/knec-logo.png"; }}
                />
              </div>

              <div className="h-48 flex items-center justify-center p-2">
                <img
                  src="/images/partners/tsc.webp"
                  alt="TSC Logo"
                  className="h-full w-auto object-contain"
                  onError={(e) => { e.target.src = "https://www.tsc.go.ke/images/logo.png"; }}
                />
              </div>

              <div className="h-48 flex items-center justify-center p-2">
                <img
                  src="/images/partners/kicd.webp"
                  alt="KICD"
                  className="h-full w-auto object-contain"
                  onError={(e) => { e.target.src = "https://kicd.ac.ke/wp-content/uploads/2017/10/kicd-logo.png"; }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
