export default {
  name: "experiences",
  title: "Experiences",
  type: "document",
  fields: [
    {
      name: "companyName",
      title: "Company Name",
      type: "string",
    },
    {
      name: "country",
      title: "Country",
      type: "string",
    },
    {
      name: "city",
      title: "City",
      type: "string",
    },
    {
      name: "dateStarted",
      title: "Date Started",
      type: "datetime",
    },
    {
      name: "dateFinished",
      title: "Date Finished",
      type: "datetime",
    },
    {
      name: "position",
      title: "Position",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "skills" }],
    },
    {
      name: "companyLogo",
      title: "Company Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
