const span = (text) => ({ _type: "span", text, marks: [] });

const block = (children, style = "normal", listItem) => ({
  _type: "block",
  style,
  markDefs: [],
  ...(listItem ? { listItem } : {}),
  children: Array.isArray(children) ? children.map(span) : [span(children)],
});

export const sectionDefaults = {
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
};
