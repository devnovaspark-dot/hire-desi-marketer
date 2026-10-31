import { defineField, defineType } from 'sanity';

export const carouselSlide = defineType({
  name: 'carouselSlide',
  title: 'Carousel Slide',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Slide Image (or GIF)',
      type: 'image',
      description: 'Upload an image (.webp, .png, .jpg) or animated .gif file for this slide.',
      options: {
        hotspot: true,
        accept: 'image/webp,image/png,image/jpeg,image/gif',
      },
    }),
    defineField({
      name: 'alt',
      title: 'Alternative Text',
      type: 'string',
      description: 'Crucial for SEO and accessibility (describe what appears in this slide).',
      placeholder: 'e.g. Screenshot of high-converting Meta Ad creative',
    }),
    defineField({
      name: 'badge',
      title: 'Badge Label (Optional)',
      type: 'string',
      placeholder: 'e.g. ROAS +420%, Step 01, Case Study, Meta Ads',
    }),
    defineField({
      name: 'title',
      title: 'Slide Title (Optional)',
      type: 'string',
      placeholder: 'e.g. Dynamic Product Ads for Luxury Apparel',
    }),
    defineField({
      name: 'description',
      title: 'Slide Description / Caption (Optional)',
      type: 'text',
      rows: 2,
      placeholder: 'e.g. Generated $140k in 30 days using UGC video overlays.',
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Label (Optional)',
      type: 'string',
      placeholder: 'e.g. View Live Strategy',
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Button Link (Optional)',
      type: 'string',
      placeholder: 'e.g. /get-a-quote or https://...',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      alt: 'alt',
      media: 'image',
    },
    prepare({ title, alt, media }) {
      return {
        title: title || alt || 'Slide Image',
        subtitle: alt ? `Alt: ${alt}` : 'Carousel slide',
        media: media,
      };
    },
  },
});

