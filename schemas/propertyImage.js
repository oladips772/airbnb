/** @format */
export default {
  name: "propertyImage",
  title: "Property Image",
  type: "image",
  fields: [
    {
      name: "caption",
      title: "Caption",
      type: "string",
      options: {
        isHighlight: true,
      },
    },
  ],
  options: {
    hotspot: true,
  },
};
