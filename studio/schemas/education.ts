import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({name: 'institution', title: 'Institution', type: 'string'}),
    defineField({
      name: 'yearStarted',
      title: 'Year Started',
      type: 'datetime',
    }),
    defineField({
      name: 'yearEnded',
      title: 'Year Ended',
      type: 'datetime',
    }),
    defineField({
      name: 'degree',
      title: 'Degree',
      type: 'string',
    }),
    defineField({
      name: 'fieldOfStudy',
      title: 'Field of Study',
      type: 'string',
    }),
    defineField({
      name: 'institutionLogo',
      title: 'Institution Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
