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
    body: [
      block("Overview & FAQs", "h2"),
      block(
        "St Peter's Khwirale Senior School is a premier mixed day and boarding school located in the heart of Busia County. Since its inception, the school has been a beacon of academic excellence and character formation for students across the region."
      ),
    ],
  },
  academics: {
    title: "Academics",
    heading: "Academic Excellence",
    subheading: "Providing diverse pathways for every learner.",
    seoDescription:
      "Explore our academic programs, curriculum, departments, and consistent top performance results in national examinations.",
    body: [
      block("Curriculum Overview", "h2"),
      block(
        "Our school is organized into specialized departments that ensure focused instruction and subject-specific expertise."
      ),
      block(
        "We take pride in our highly qualified and dedicated teaching staff. With over 45+ professional educators, we maintain an excellent teacher-to-student ratio."
      ),
    ],
  },
  cbe: {
    title: "CBE & Admissions",
    heading: "Competency Based Education",
    subheading:
      "Nurturing every learner's potential through practical and skills-based learning.",
    seoDescription:
      "Information on Competency Based Education pathways, admission process, fee structure, and student life at St Peter's Khwirale.",
    body: [
      block("Pathways & Learning", "h2"),
      block(
        "The Competency-Based Curriculum (CBC) at St Peter's Khwirale Senior School is designed to foster a wide range of skills, ensuring that every student finds a path that matches their passion and potential."
      ),
      block(
        "Joining St Peter's Khwirale is a straightforward process managed with transparency and care."
      ),
    ],
  },
  updates: {
    title: "School Updates",
    heading: "School Updates",
    subheading: "Stay informed about latest events, news, and opportunities at our school.",
    seoDescription:
      "Stay informed with the latest school news, upcoming events, tenders, and job vacancies.",
    body: [
      block("Upcoming Events", "h2"),
      block("Stay informed about latest events, news, and opportunities at our school."),
      block(
        "Join us at the school main hall for significant milestones in our academic calendar."
      ),
    ],
  },
  contact: {
    title: "Contact Us",
    heading: "Get in Touch",
    subheading:
      "We'd love to hear from you. Reach out to us for admissions, inquiries, or any questions.",
    seoDescription:
      "Get in touch with St Peter's Khwirale Senior School for admissions, inquiries, or any questions.",
    body: [
      block("Get in Touch", "h2"),
      block(
        "We'd love to hear from you. Reach out to us for admissions, inquiries, or any questions."
      ),
    ],
  },
  gallery: {
    title: "Gallery",
    heading: "School Gallery",
    subheading: "A glimpse into learning, leadership, activities, and daily school life.",
    seoDescription:
      "View photos from St Peter's Khwirale Senior School, including school events, student life, facilities, and activities.",
    body: [
      block("School Gallery", "h2"),
      block("A glimpse into learning, leadership, activities, and daily school life."),
    ],
  },
};
