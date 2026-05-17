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
      description: "Example: about, academics, cbe, updates, contact, gallery.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "sectionKey",
      title: "Section Key",
      type: "string",
      description: "Example: bom-pa, history, service-charter.",
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
