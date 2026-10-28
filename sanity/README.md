# Sanity CMS Architecture & Multi-Project Integration Guide

## 1. Multiple Projects Under a Single Sanity Email (Safe & Isolated)

> **Important Guarantee:** In Sanity, a single email account can own and manage **unlimited independent projects**. Your existing project will not be affected in any way.

### How to Create the Desi Marketer Project:
1. Log in to [sanity.io/manage](https://www.sanity.io/manage) with your existing email.
2. In the top-left project dropdown or dashboard header, click **"Create project"**.
3. Name the project: `hire-desi-marketer`.
4. Choose the free **Community plan** (or your existing team plan).
5. Default dataset: `production`.
6. Once created, note your new **Project ID** (e.g., `abc123xy`).

### Environment Variables:
Add the following to your `.env.local` in this repository:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID="your_new_project_id_here"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2024-01-01"
```

Because Next.js queries Sanity strictly using `NEXT_PUBLIC_SANITY_PROJECT_ID`, there is **zero risk of data cross-contamination** with your other project.

---

## 2. Empowering Writers with "Lego Block" Custom Styling

Traditional CMS WYSIWYG editors only offer Bold, Italic, and Links, which creates boring, unstyled walls of text. If writers paste raw HTML or inline CSS, they break mobile responsiveness.

Our solution is **Portable Text with Structured Custom Blocks**:
Writers choose structured visual blocks from the Sanity Studio editor dropdown, and Next.js automatically renders them using the site's skeuomorphic design system.

### Pre-Configured Custom Blocks for Writers:
1. **Data & Comparison Table (`customTable`)**:
   - Writers define custom column headers (e.g. `['Metric', 'In-House US', 'Desi Squad', 'Savings']`) and rows with individual cells.
   - Renders as a responsive, horizontally-scrollable table with midnight headers, alternating stripes, and crisp borders.
2. **Visual Infographic / Process Framework (`infographicCard`)**:
   - Writers configure 3–4 pillar steps with step numbers, titles, and bullet takeaways.
   - Renders as high-impact visual diagram cards (like "How AI is Changing SEO" and "Build an SEO Strategy That Works With AI").
3. **💡 Key Takeaways Box (`takeawayBox`)**:
   - Highlights key conclusions with bullet points and optional action button.
4. **In-Article FAQ Accordion (`articleFaq`)**:
   - Add collapsible Q&As directly within the article for SERP snippets & reader clarity.
5. **Callout Boxes (`callout`)**:
   - Variants: `💡 Pro Tip`, `⚠️ Critical Note`, `⚡ Growth Strategy`, `📌 Core Takeaway`.
6. **Stat Highlight Banner (`statHighlight`)**:
   - Metric (e.g. `+340% ROAS`), `Label`, and `Context Subtext`.
7. **Side-by-Side Comparison Box (`comparison`)**:
   - Column A (US In-House) vs Column B (Dedicated Desi Squad).
8. **In-Article Conversion CTA (`inArticleCta`)**:
   - Drops a high-converting "Request Free Audit" or "Build Custom Squad" card.
9. **🎠 Interactive Carousel / Slider (`carousel`)**:
   - Multi-slide interactive carousel with autoplay, custom slide badges, titles, descriptions, and CTA links.
   - Display modes: Rich Card Slider, Standard Minimal Slider, or Full-Width Visual Showcase.
10. **🎬 Animated GIF / Meme (`gifBlock`)**:
   - Upload animated `.gif` files or paste direct URLs from Giphy, Tenor, or the web.
   - Includes custom captions, SEO alt text, badge labels, and adjustable width (compact meme, standard, wide).
11. **Stylized Blockquotes (`quoteBlock`)** & **Code Snippets (`codeSnippet`)**.
12. **Automated "• On This Page" Table of Contents**:
   - Derived automatically with active scrollspy highlighting and section counter badge.

---

## 3. Connecting Next.js with Sanity

We have already created:
- `src/lib/sanity/client.ts` - Smart fetch client that falls back to `src/data/blog-posts.ts` when credentials are not yet configured.
- `src/lib/sanity/queries.ts` - Ready-to-use GROQ queries.
- `sanity/schemas/` - Full schema definitions ready to copy into Sanity Studio.
- `src/components/blog/PortableTextRenderer.tsx` - Custom component renderer mapping Sanity blocks to luxury styling.
