export default {
  name: "page",
  title: "Pages",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "heading",
      title: "Hero Heading",
      type: "string",
      description: "Main header text inside the top hero banner.",
    },
    {
      name: "subheading",
      title: "Hero Subheading",
      type: "text",
      rows: 2,
      description: "Sub-headline text inside the top hero banner.",
    },
    {
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
    },
    {
      name: "body",
      title: "Page Content",
      type: "blockContent",
      description: "Only the Home page keeps page-level content. Other pages use Page Sections.",
      hidden: ({ document }) => document?.slug?.current !== "home",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
    },
  },
};
