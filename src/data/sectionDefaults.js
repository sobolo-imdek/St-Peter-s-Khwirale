const span = (text) => ({ _type: "span", text, marks: [] });

const block = (children, style = "normal", listItem) => ({
  _type: "block",
  style,
  markDefs: [],
  ...(listItem ? { listItem } : {}),
  children: Array.isArray(children) ? children.map(span) : [span(children)],
});

export const sectionDefaults = {
  "about:overview": {
    title: "Overview & FAQs",
    body: [
      block("Overview & FAQs", "h2"),
      block(
        "St Peter's Khwirale Senior School is a premier mixed day and boarding school located in the heart of Busia County. Since its inception, the school has been a beacon of academic excellence and character formation for students across the region."
      ),
    ],
  },
  "about:bom-pa": {
    title: "BOM & Parents Association",
    body: [
      block("BOM & Parents Association", "h2"),
      block("Board of Management", "h3"),
      block(
        "Our Board of Management (BOM) consists of visionaries and professionals dedicated to the strategic growth of the school. They ensure that our resources are utilized effectively to provide the best environment for our learners."
      ),
      block("Strategic Development Oversight", "normal", "bullet"),
      block("Financial Management & Transparency", "normal", "bullet"),
      block("Infrastructure Planning", "normal", "bullet"),
      block("Parents Association (PA)", "h3"),
      block(
        "The PA serves as a vital bridge between the school administration and our parents. Through regular meetings and collaborative projects, they ensure that the parent's voice is heard and acted upon."
      ),
      block(
        "Education is a three-legged stool: The Teacher, The Student, and The Parent.",
        "blockquote"
      ),
    ],
  },
  "about:history": {
    title: "School History",
    body: [
      block(
        "Founded in 2005, St Peter's Khwirale Senior School began as a humble community initiative to bring quality senior education closer to the people of Busia. Over the decades, we have grown into a center of academic prowess, consistently ranking among the top schools in the region."
      ),
      block(
        "From our first graduating class to our current status as a regional giant, the journey has been marked by resilience and the unwavering support of the Khwirale community. What started as a single block has expanded into a multi-facility campus including modern science labs, a computer center, and spacious sports fields."
      ),
    ],
  },
  "about:alumni": {
    title: "Alumni Community",
    body: [
      block(
        "Our alumni are our greatest pride. Spread across the globe in various sectors — from medicine and engineering to arts and entrepreneurship — they continue to carry the \"Endeavour to Excel\" spirit."
      ),
      block(
        "The St Peter's Khwirale Senior School Alumni Association works to support current students through mentorship programs, scholarships, and infrastructure development. Join our network to give back and connect with former schoolmates."
      ),
    ],
  },
  "about:service-charter": {
    title: "Service Charter",
    body: [
      block("Service Charter", "h2"),
      block(
        "We commit to professional, efficient, and ethical service delivery to all our stakeholders."
      ),
    ],
  },
  "about:gallery": {
    title: "School Gallery",
    body: [
      block("School Gallery", "h2"),
      block(
        "Explore a glimpse of learning, leadership, activities, and daily school life at St Peter's Khwirale."
      ),
    ],
  },
  "academics:curriculum": {
    title: "Curriculum Overview",
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
  "academics:departments": {
    title: "Academic Departments",
    body: [
      block(
        "Our school is organized into specialized departments that ensure focused instruction and subject-specific expertise."
      ),
    ],
  },
  "academics:faculty": {
    title: "Faculty & Teaching Staff",
    body: [
      block(
        "We take pride in our highly qualified and dedicated teaching staff. With over 45+ professional educators, we maintain an excellent teacher-to-student ratio."
      ),
    ],
  },
  "academics:results": {
    title: "Performance & Results",
    body: [
      block("Performance & Results", "h2"),
      block(
        "St Peter's Khwirale Senior School has consistently demonstrated academic prowess in national examinations, ranking as one of the best performing schools in Busia County."
      ),
    ],
  },
  "cbe:pathways": {
    title: "Pathways & Learning",
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
  "cbe:admissions": {
    title: "Admissions Process",
    body: [
      block(
        "Joining St Peter's Khwirale is a straightforward process managed with transparency and care."
      ),
    ],
  },
  "cbe:fees": {
    title: "Fee Structure",
    body: [
      block(
        "We maintain competitive and transparent fees to ensure quality education remains accessible."
      ),
    ],
  },
  "cbe:student-life": {
    title: "Student Life & Welfare",
    body: [
      block("Student Life & Welfare", "h2"),
      block(
        "Student welfare is central to school life, with safe boarding, balanced meals, health support, and structured pastoral care."
      ),
    ],
  },
  "updates:events": {
    title: "Upcoming Events",
    body: [
      block("Upcoming Events", "h2"),
      block("Stay informed about latest events, news, and opportunities at our school."),
      block(
        "Join us at the school main hall for significant milestones in our academic calendar."
      ),
    ],
  },
  "updates:news": {
    title: "News & Articles",
    body: [
      block("News & Articles", "h2"),
      block(
        "Read the latest stories, achievements, and announcements from our students, staff, and school community."
      ),
    ],
  },
  "updates:tenders": {
    title: "Tenders & Public Notices",
    body: [
      block("Tenders & Public Notices", "h2"),
      block(
        "Find current tenders, procurement notices, and public announcements from the school administration."
      ),
    ],
  },
  "updates:careers": {
    title: "Job Vacancies",
    body: [
      block("Job Vacancies", "h2"),
      block(
        "St Peter's Khwirale Senior School is always looking for passionate educators and staff to join our family."
      ),
    ],
  },
  "contact:contact": {
    title: "Get in Touch",
    body: [
      block("Get in Touch", "h2"),
      block(
        "We'd love to hear from you. Reach out to us for admissions, inquiries, or any questions."
      ),
    ],
  },
  "gallery:gallery": {
    title: "School Gallery",
    body: [
      block("School Gallery", "h2"),
      block("A glimpse into learning, leadership, activities, and daily school life."),
    ],
  },
};
