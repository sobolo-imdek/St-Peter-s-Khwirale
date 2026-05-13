export default {
  name: "galleryImage",
  title: "Gallery Images",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "School Life", value: "school-life" },
          { title: "Academics", value: "academics" },
          { title: "Sports", value: "sports" },
          { title: "Events", value: "events" },
          { title: "Facilities", value: "facilities" },
        ],
      },
    },
    {
      name: "featured",
      title: "Feature on Home Page",
      type: "boolean",
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "image",
    },
  },
};
