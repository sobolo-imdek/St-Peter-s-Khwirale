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
          { title: "CBE & Admissions", value: "cbe" },
          { title: "Updates", value: "updates" },
          { title: "Contact", value: "contact" },
          { title: "Gallery", value: "gallery" }
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
          { title: "Overview & FAQs (About Page)", value: "overview" },
          { title: "School History (About Page)", value: "history" },
          { title: "Alumni Community (About Page)", value: "alumni" },
          { title: "BOM & Parents Association (About Page)", value: "bom-pa" },
          { title: "Service Charter (About Page)", value: "service-charter" },
          { title: "School Gallery (About Page)", value: "gallery" },
          { title: "Curriculum Overview (Academics Page)", value: "curriculum" },
          { title: "Academic Departments (Academics Page)", value: "departments" },
          { title: "Faculty & Staff (Academics Page)", value: "faculty" },
          { title: "Performance & Results (Academics Page)", value: "results" },
          { title: "Pathways & Learning (CBE Page)", value: "pathways" },
          { title: "Admissions Process (CBE Page)", value: "admissions" },
          { title: "Fee Structure Intro (CBE Page)", value: "fees" },
          { title: "Student Life & Welfare (CBE Page)", value: "student-life" },
          { title: "Upcoming Events (Updates Page)", value: "events" },
          { title: "News & Articles (Updates Page)", value: "news" },
          { title: "Tenders & Public Notices (Updates Page)", value: "tenders" },
          { title: "Job Vacancies (Updates Page)", value: "careers" },
          { title: "Contact Intro (Contact Page)", value: "contact" },
          { title: "Gallery Intro (Gallery Page)", value: "gallery" }
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
