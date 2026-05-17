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
      title: "Fees List",
      type: "array",
      of: [
        {
          type: "object",
          name: "feeItem",
          title: "Fee Item",
          fields: [
            {
              name: "category",
              title: "Category",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "amount",
              title: "Amount",
              type: "string",
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
