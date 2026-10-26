import { defineType, defineField, defineArrayMember } from 'sanity';

export const post = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Post Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'category' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main / Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and screen readers.',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Short Excerpt / Meta Description',
      type: 'text',
      rows: 3,
      description: 'Used in blog cards and Google SERP snippets.',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'readTimeMinutes',
      title: 'Estimated Read Time (Minutes)',
      type: 'number',
      initialValue: 6,
    }),
    defineField({
      name: 'featured',
      title: 'Feature as Hero Playbook?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverBadge',
      title: 'Cover Image Badge Label',
      type: 'string',
      initialValue: 'Verified Strategic Guide',
      placeholder: 'e.g. Verified Strategic Guide, Featured Playbook, 2026 Framework',
    }),
    defineField({
      name: 'keyTakeaways',
      title: 'Key Takeaways (Displayed in Sidebar & Executive Summary)',
      description: 'Add 3-5 high-impact summary bullets for fast executive scanning.',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'faqs',
      title: 'Post FAQs (Displayed in In-Article Accordion)',
      description: 'Frequently Asked Questions about this topic.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'FAQ',
          fields: [
            {
              name: 'question',
              type: 'string',
              title: 'Question',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'answer',
              type: 'text',
              rows: 3,
              title: 'Answer',
              validation: (Rule) => Rule.required(),
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'body',
      title: 'Article Body (Rich Blocks & Visual Elements)',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author ? `by ${author}` : '' };
    },
  },
});
