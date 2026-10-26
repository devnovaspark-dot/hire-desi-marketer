import { defineType, defineField } from 'sanity';

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Category Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'order',
      title: 'Display Order / Priority',
      type: 'number',
      description: 'Lower numbers appear first in the header pills (e.g. 1, 2, 3). Defaults to 0.',
      initialValue: 0,
    }),
    defineField({
      name: 'color',
      title: 'Accent Color / Gradient Key',
      type: 'string',
      placeholder: 'from-amber-500/20 to-orange-500/10',
    }),
  ],
});
