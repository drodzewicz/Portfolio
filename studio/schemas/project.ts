import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
          title: 'Block',
        },
      ],
    }),
    defineField({
      name: 'demoURL',
      title: 'Project Demo',
      type: 'string',
    }),
    defineField({
      name: 'sourceCodeURL',
      title: 'Source Code',
      type: 'string',
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'skills'}],
        },
      ],
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
  ],
})
