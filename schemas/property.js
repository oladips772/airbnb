/** @format */
export default {
  name: "property",
  title: "Property",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "geopoint",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "propertyImage" }],
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "pricePerNight",
      title: "Price Per Night",
      type: "number",
    },
    {
      name: "beds",
      title: "Beds",
      type: "number",
    },
    {
      name: "bedrooms",
      title: "Bedrooms",
      type: "number",
    },
    {
      name: "propertyType",
      title: "Property Type",
      type: "string",
      options: {
        list: [
          { title: "Apartment", value: "Apartment" },
          { title: "House", value: "House" },
          { title: "Townhouse", value: "Townhouse" },
          { title: "Duplex", value: "Duplex" },
          { title: "Condo", value: "Condo" },
        ],
        layout: "radio",
      },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
    {
      name: "host",
      title: "host",
      type: "host",
    },
    {
      name: "reviews",
      title: "Reviews",
      type: "array",
      of: [{ type: "review" }],
    },
    {
      name: "id",
      title: "ID",
      type: "number",
    },
  ],
};
