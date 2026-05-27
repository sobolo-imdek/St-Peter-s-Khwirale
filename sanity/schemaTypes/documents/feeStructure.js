export default {
  name: "feeStructure",
  title: "Fee Structure",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Fee Structure Table",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "fees",
      title: "Fee Breakdown",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "category",
              title: "Category",
              type: "string",
              description: "E.g., Tuition, Administrative Levies, etc.",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "amount",
              title: "Amount",
              type: "string",
              description: "E.g., KES 12,500",
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: "category",
              subtitle: "amount",
            },
          },
        },
      ],
    },
  ],
};
