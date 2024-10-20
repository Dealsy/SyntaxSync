import { defineField, defineType } from "sanity";

export const homeType = defineType({
  name: "home",
  title: "Home Type",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the home page",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      description: "The subtitle of the home page",
    }),

    defineField({
      name: "content",
      title: "Content",
      type: "blockContent",
      description: "Rich text content for the home page",
    }),
  ],
});
