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
};
