export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "schoolName",
      title: "School Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "whatsapp",
      title: "WhatsApp",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "text",
      rows: 3,
    },
    {
      name: "motto",
      title: "Motto",
      type: "string",
    },
    {
      name: "vision",
      title: "Vision",
      type: "text",
      rows: 3,
    },
    {
      name: "mission",
      title: "Mission",
      type: "text",
      rows: 3,
    },
  ],
  preview: {
    select: {
      title: "schoolName",
      subtitle: "email",
    },
  },
};
