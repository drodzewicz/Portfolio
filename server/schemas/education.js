export default {
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    { name: "institution", title: "Institution", type: "string" },
    {
      name: "yearStarted",
      title: "Year Started",
      type: "datetime",
    },
    {
      name: "yearEnded",
      title: "Year Ended",
      type: "datetime",
    },
    {
      name: "degree",
      title: "Degree",
      type: "string",
    },
    {
      name: "fieldOfStudy",
      title: "Field of Study",
      type: "string",
    },
    {
      name: "institutionLogo",
      title: "Institution Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
