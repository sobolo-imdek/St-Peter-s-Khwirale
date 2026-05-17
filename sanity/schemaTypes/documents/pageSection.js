export default {
  name: "pageSection",
  title: "Page Sections",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Section Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "pageSlug",
      title: "Page Slug",
      type: "string",
      description: "Select which page this section belongs to.",
      options: {
        list: [
          { title: "About", value: "about" },
          { title: "Academics", value: "academics" },
          { title: "CBE & Admissions", value: "cbe" }
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "sectionKey",
      title: "Section Key",
      type: "string",
      description: "Select which specific section of the page this content represents.",
      options: {
        list: [
          { title: "School History (About Page)", value: "history" },
          { title: "Alumni Community (About Page)", value: "alumni" },
          { title: "BOM & Parents Association (About Page)", value: "bom-pa" },
          { title: "Academic Departments (Academics Page)", value: "departments" },
          { title: "Faculty & Staff (Academics Page)", value: "faculty" },
          { title: "Admissions Process (CBE Page)", value: "admissions" },
          { title: "Fee Structure Intro (CBE Page)", value: "fees" }
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "body",
      title: "Section Content",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "title",
      pageSlug: "pageSlug",
      sectionKey: "sectionKey",
    },
    prepare({ title, pageSlug, sectionKey }) {
      return {
        title,
        subtitle: `${pageSlug || "page"} / ${sectionKey || "section"}`,
      };
    },
  },
};
