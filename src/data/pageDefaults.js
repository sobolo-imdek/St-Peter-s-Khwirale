const span = (text) => ({ _type: "span", text, marks: [] });

const block = (children, style = "normal") => ({
  _type: "block",
  style,
  markDefs: [],
  children: Array.isArray(children) ? children.map(span) : [span(children)],
});

export const pageDefaults = {
  home: {
    title: "Home",
    heading: "Welcome to St Peter's Khwirale Senior School",
    seoDescription:
      "Welcome to St Peter's Khwirale Senior School. We are dedicated to empowering our students through quality education, discipline, and integrity.",
    body: [
      block("Welcome to St Peter's Khwirale Senior School", "h2"),
      block(
        "A public Mixed Senior School categorized as C4 under the new Competency-Based Education (CBE) curriculum. We are dedicated to empowering our students through quality education, discipline, and integrity, while providing a safe and supportive environment where every child can discover their potential and thrive."
      ),
      block(
        "Browse through our website to learn more about us, from our academic programs and vibrant student life to our achievements and community engagement."
      ),
    ],
  },
  about: {
    title: "About Us",
    heading: "About St Peter's Khwirale Senior School",
    subheading: "A comprehensive guide to our heritage, values, and community commitment.",
    seoDescription:
      "Learn about St Peter's Khwirale Senior School history, mission, vision, and core values. Meet our principal and leadership team.",
    body: [],
  },
  academics: {
    title: "Academics",
    heading: "Academic Excellence",
    subheading: "Providing diverse pathways for every learner.",
    seoDescription:
      "Explore our academic programs, curriculum, departments, and consistent top performance results in national examinations.",
    body: [],
  },
  cbe: {
    title: "CBE & Admissions",
    heading: "Competency Based Education",
    subheading:
      "Nurturing every learner's potential through practical and skills-based learning.",
    seoDescription:
      "Information on Competency Based Education pathways, admission process, fee structure, and student life at St Peter's Khwirale.",
    body: [],
  },
  updates: {
    title: "School Updates",
    heading: "School Updates",
    subheading: "Stay informed about latest events, news, and opportunities at our school.",
    seoDescription:
      "Stay informed with the latest school news, upcoming events, tenders, and job vacancies.",
    body: [],
  },
  contact: {
    title: "Contact Us",
    heading: "Get in Touch",
    subheading:
      "We'd love to hear from you. Reach out to us for admissions, inquiries, or any questions.",
    seoDescription:
      "Get in touch with St Peter's Khwirale Senior School for admissions, inquiries, or any questions.",
    body: [],
  },
  gallery: {
    title: "Gallery",
    heading: "School Gallery",
    subheading: "A glimpse into learning, leadership, activities, and daily school life.",
    seoDescription:
      "View photos from St Peter's Khwirale Senior School, including school events, student life, facilities, and activities.",
    body: [],
  },
};
