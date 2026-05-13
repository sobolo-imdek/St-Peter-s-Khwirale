export default {
  name: "download",
  title: "Downloads",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Admissions", value: "admissions" },
          { title: "Fees", value: "fees" },
          { title: "Academics", value: "academics" },
          { title: "Tender", value: "tender" },
          { title: "General", value: "general" },
        ],
      },
      initialValue: "general",
    },
    {
      name: "file",
      title: "File",
      type: "file",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
    },
  },
};
