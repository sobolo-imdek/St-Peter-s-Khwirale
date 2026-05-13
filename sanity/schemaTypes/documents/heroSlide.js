export default {
  name: "heroSlide",
  title: "Hero Slides",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Internal Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "headline",
      title: "Headline",
      type: "string",
    },
    {
      name: "subheadline",
      title: "Subheadline",
      type: "text",
      rows: 2,
    },
    {
      name: "image",
      title: "Slide Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "string",
        },
      ],
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    },
    {
      name: "isActive",
      title: "Show On Website",
      type: "boolean",
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "headline",
      media: "image",
    },
  },
};
