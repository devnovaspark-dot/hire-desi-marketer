import { defineType, defineArrayMember } from 'sanity';

/**
 * Portable Text Schema with Custom "Lego Blocks" for Writers.
 * This empowers writers to build magazine-grade articles with callouts,
 * stat highlights, comparison cards, and CTAs without writing any CSS.
 */
export const blockContent = defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2 (Section Heading)', value: 'h2' },
        { title: 'H3 (Subheading)', value: 'h3' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),

    // 1. Rich Image Block (WebP format required)
    defineArrayMember({
      type: 'image',
      name: 'richImage',
      title: 'Image (WebP format required)',
      description: 'Upload in-article images in modern WebP format (.webp) for fast loading.',
      options: {
        hotspot: true,
        accept: 'image/webp',
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Crucial for SEO and accessibility.',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
    }),

    // 2. Callout Box (Pro Tip / Warning / Growth Hack)
    defineArrayMember({
      type: 'object',
      name: 'callout',
      title: 'Callout Box (Tip / Warning / Hack)',
      fields: [
        {
          name: 'variant',
          type: 'string',
          title: 'Callout Style',
          options: {
            list: [
              { title: '💡 Pro Tip (Green / Emerald)', value: 'tip' },
              { title: '⚠️ Critical Note / Warning (Amber)', value: 'warning' },
              { title: '⚡ Growth Strategy (Blue)', value: 'growth-hack' },
              { title: '📌 Core Takeaway (Navy Luxury)', value: 'takeaway' },
            ],
            layout: 'radio',
          },
          initialValue: 'tip',
        },
        {
          name: 'title',
          type: 'string',
          title: 'Callout Title',
          placeholder: 'e.g. The Freelancer Fallacy',
        },
        {
          name: 'content',
          type: 'text',
          rows: 3,
          title: 'Content',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),

    // 3. Stat Highlight Card
    defineArrayMember({
      type: 'object',
      name: 'statHighlight',
      title: 'Big Metric / Stat Banner',
      fields: [
        {
          name: 'metric',
          type: 'string',
          title: 'Key Metric',
          placeholder: '+340% ROAS or $320k Saved',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'label',
          type: 'string',
          title: 'Metric Description / Label',
          placeholder: 'Average annual savings per marketing pod seat',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'subtext',
          type: 'string',
          title: 'Context / Subtext',
          placeholder: 'Verified across 40+ agency partner accounts in 2025–2026',
        },
      ],
    }),

    // 4. Comparison Table (In-house vs Offshore)
    defineArrayMember({
      type: 'object',
      name: 'comparison',
      title: 'Side-by-Side Comparison Box',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Comparison Title',
          placeholder: 'In-House US Hire vs. Dedicated Desi Squad',
        },
        {
          name: 'columnA',
          type: 'object',
          title: 'Column A (Traditional / Competitor)',
          fields: [
            { name: 'label', type: 'string', title: 'Header Label', initialValue: 'In-House US Hire' },
            { name: 'sublabel', type: 'string', title: 'Sublabel', initialValue: 'Traditional domestic model' },
            { name: 'items', type: 'array', of: [{ type: 'string' }], title: 'Bullet Points' },
          ],
        },
        {
          name: 'columnB',
          type: 'object',
          title: 'Column B (Winning Solution / Hire Desi Marketer)',
          fields: [
            { name: 'label', type: 'string', title: 'Header Label', initialValue: 'Dedicated Desi Marketer' },
            { name: 'sublabel', type: 'string', title: 'Sublabel', initialValue: 'Managed Indian Pod' },
            { name: 'items', type: 'array', of: [{ type: 'string' }], title: 'Bullet Points' },
          ],
        },
      ],
    }),

    // 5. In-Article CTA Banner
    defineArrayMember({
      type: 'object',
      name: 'inArticleCta',
      title: 'In-Article Lead Conversion CTA',
      fields: [
        {
          name: 'badge',
          type: 'string',
          title: 'Badge Text',
          initialValue: 'Free Growth Audit',
        },
        {
          name: 'headline',
          type: 'string',
          title: 'Headline',
          placeholder: 'Want our paid media leads to audit your Meta ad account?',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'description',
          type: 'text',
          rows: 2,
          title: 'Short Description',
        },
        {
          name: 'buttonText',
          type: 'string',
          title: 'Button Label',
          initialValue: 'Get Started',
        },
        {
          name: 'buttonLink',
          type: 'string',
          title: 'Button Link',
          initialValue: '/#quote',
        },
      ],
    }),

    // 6. Styled Quote with Author
    defineArrayMember({
      type: 'object',
      name: 'quoteBlock',
      title: 'Featured Quote Block',
      fields: [
        {
          name: 'text',
          type: 'text',
          rows: 3,
          title: 'Quote',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'author',
          type: 'string',
          title: 'Author Name',
        },
        {
          name: 'role',
          type: 'string',
          title: 'Role / Company',
        },
      ],
    }),

    // 7. Code Snippet
    defineArrayMember({
      type: 'object',
      name: 'codeSnippet',
      title: 'Code / Schema Snippet',
      fields: [
        {
          name: 'language',
          type: 'string',
          title: 'Language',
          options: {
            list: [
              { title: 'JSON / Schema', value: 'json' },
              { title: 'HTML', value: 'html' },
              { title: 'JavaScript', value: 'javascript' },
              { title: 'CSS', value: 'css' },
            ],
          },
          initialValue: 'json',
        },
        {
          name: 'filename',
          type: 'string',
          title: 'Filename (e.g. structured-article-schema.json)',
        },
        {
          name: 'code',
          type: 'text',
          rows: 8,
          title: 'Code Content',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),

    // 8. Custom Data Table (Editable Grid for Writers)
    defineArrayMember({
      type: 'object',
      name: 'customTable',
      title: 'Data & Comparison Table',
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Table Title / Caption',
          placeholder: 'e.g. 2026 Cost & Output Breakdown by Role',
        },
        {
          name: 'headers',
          type: 'array',
          of: [{ type: 'string' }],
          title: 'Column Headers',
          description: 'Define the table columns, e.g., ["Metric", "In-House US", "Desi Marketer Pod", "Variance"]',
        },
        {
          name: 'rows',
          type: 'array',
          title: 'Table Rows',
          of: [
            defineArrayMember({
              type: 'object',
              title: 'Row',
              fields: [
                {
                  name: 'cells',
                  type: 'array',
                  of: [{ type: 'string' }],
                  title: 'Cell Values (One per column)',
                },
              ],
            }),
          ],
        },
      ],
    }),

    // 9. Visual Infographic / Framework Card
    defineArrayMember({
      type: 'object',
      name: 'infographicCard',
      title: 'Visual Infographic / Process Framework',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Framework Title',
          placeholder: 'e.g. How AI Is Changing SEO',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'subtitle',
          type: 'string',
          title: 'Subtitle',
          placeholder: 'Core shifts every agency founder must master in 2026',
        },
        {
          name: 'steps',
          type: 'array',
          title: 'Framework Steps / Pillar Cards',
          of: [
            defineArrayMember({
              type: 'object',
              title: 'Pillar Card',
              fields: [
                { name: 'stepNumber', type: 'string', title: 'Step Number or Badge', initialValue: '01' },
                { name: 'title', type: 'string', title: 'Pillar Title', validation: (Rule) => Rule.required() },
                { name: 'description', type: 'text', rows: 2, title: 'Brief Summary' },
                { name: 'bullets', type: 'array', of: [{ type: 'string' }], title: 'Bullet Takeaways' },
              ],
            }),
          ],
        },
      ],
    }),

    // 10. Key Takeaways Box
    defineArrayMember({
      type: 'object',
      name: 'takeawayBox',
      title: '💡 Key Takeaways Callout',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Box Title',
          initialValue: 'Key Strategic Takeaways',
        },
        {
          name: 'bullets',
          type: 'array',
          of: [{ type: 'string' }],
          title: 'Key Points',
          validation: (Rule) => Rule.required().min(1),
        },
        {
          name: 'ctaText',
          type: 'string',
          title: 'Action Button Label (Optional)',
          placeholder: 'e.g. Calculate Squad Savings',
        },
        {
          name: 'ctaLink',
          type: 'string',
          title: 'Button Link',
          placeholder: 'e.g. /#calculator',
        },
      ],
    }),

    // 11. In-Article FAQ Accordion Section
    defineArrayMember({
      type: 'object',
      name: 'articleFaq',
      title: 'FAQ Accordion Section',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'FAQ Section Title',
          initialValue: 'Frequently Asked Questions',
        },
        {
          name: 'subtitle',
          type: 'string',
          title: 'Section Subtitle',
          initialValue: 'Everything you need to know about this strategy',
        },
        {
          name: 'items',
          type: 'array',
          title: 'Questions and Answers',
          of: [
            defineArrayMember({
              type: 'object',
              title: 'Q&A Item',
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
                  rows: 4,
                  title: 'Answer',
                  validation: (Rule) => Rule.required(),
                },
              ],
            }),
          ],
        },
      ],
    }),

    // 12. Interactive Carousel / Slider
    defineArrayMember({
      type: 'object',
      name: 'carousel',
      title: '🎠 Interactive Carousel / Slider',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Carousel Title (Optional)',
          placeholder: 'e.g. Campaign Creative Gallery or Performance Highlights',
        },
        {
          name: 'subtitle',
          type: 'string',
          title: 'Carousel Subtitle (Optional)',
          placeholder: 'e.g. Swipe through our high-converting ad variations and case snapshots',
        },
        {
          name: 'displayMode',
          type: 'string',
          title: 'Display Style',
          options: {
            list: [
              { title: 'Rich Card Slider (Image + Title + Description + Badge)', value: 'card' },
              { title: 'Standard Minimal Slider (Image + Caption)', value: 'standard' },
              { title: 'Full-Width Visual Showcase', value: 'full' },
            ],
            layout: 'radio',
          },
          initialValue: 'card',
        },
        {
          name: 'autoplay',
          type: 'boolean',
          title: 'Auto-advance Slides',
          description: 'Automatically rotate through slides every few seconds.',
          initialValue: false,
        },
        {
          name: 'autoplayInterval',
          type: 'number',
          title: 'Autoplay Interval (in seconds)',
          initialValue: 5,
        },
        {
          name: 'items',
          type: 'array',
          title: 'Slides / Carousel Items',
          description: 'Add, edit, and reorder slides for this carousel slider.',
          validation: (Rule) => Rule.required().min(1),
          of: [
            defineArrayMember({
              type: 'object',
              title: 'Slide',
              fields: [
                {
                  name: 'image',
                  type: 'image',
                  title: 'Slide Image (WebP recommended)',
                  options: {
                    hotspot: true,
                    accept: 'image/webp,image/png,image/jpeg',
                  },
                  fields: [
                    {
                      name: 'alt',
                      type: 'string',
                      title: 'Alternative Text',
                      description: 'Crucial for SEO and accessibility.',
                    },
                  ],
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'badge',
                  type: 'string',
                  title: 'Badge Label (Optional)',
                  placeholder: 'e.g. ROAS +420%, Step 01, Case Study, Meta Ads',
                },
                {
                  name: 'title',
                  type: 'string',
                  title: 'Slide Title (Optional)',
                  placeholder: 'e.g. Dynamic Product Ads for Luxury Apparel',
                },
                {
                  name: 'description',
                  type: 'text',
                  rows: 2,
                  title: 'Slide Description / Caption (Optional)',
                  placeholder: 'e.g. Generated $140k in 30 days using UGC video overlays.',
                },
                {
                  name: 'ctaText',
                  type: 'string',
                  title: 'CTA Button Label (Optional)',
                  placeholder: 'e.g. View Live Strategy',
                },
                {
                  name: 'ctaLink',
                  type: 'string',
                  title: 'CTA Button Link (Optional)',
                  placeholder: 'e.g. /get-a-quote or https://...',
                },
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'description',
                  media: 'image',
                },
              },
            }),
          ],
        },
      ],
      preview: {
        select: {
          title: 'title',
          subtitle: 'subtitle',
          items: 'items',
        },
        prepare(selection: Record<string, unknown>) {
          const { title, subtitle, items } = selection as {
            title?: string;
            subtitle?: string;
            items?: unknown[];
          };
          const count = Array.isArray(items) ? items.length : 0;
          return {
            title: title || 'Carousel Slider',
            subtitle: `${count} slide${count === 1 ? '' : 's'}${subtitle ? ` — ${subtitle}` : ''}`,
          };
        },
      },
    }),
  ],
});
