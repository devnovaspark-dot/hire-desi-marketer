import { BlogPost, BlogCategory, TocItem, BlogContentBlock } from "@/types/blog";
import { sanityFetch, isSanityConfigured } from "./client";
import { ALL_POSTS_QUERY, POST_BY_SLUG_QUERY, CATEGORIES_QUERY, POST_SLUGS_QUERY } from "./queries";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/data/blog-posts";

/**
 * Helper to generate an ID from text (for headings and TOC anchors)
 */
function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

/**
 * Transforms raw Sanity Portable Text body into our typed BlogContentBlock[]
 * and extracts TOC items from H2 and H3 blocks.
 */
function transformSanityBody(rawBody: any[]): {
  content: BlogContentBlock[];
  tableOfContents: TocItem[];
} {
  const content: BlogContentBlock[] = [];
  const tableOfContents: TocItem[] = [];

  if (!Array.isArray(rawBody)) {
    return { content, tableOfContents };
  }

  // Group continuous normal/heading blocks into richText html
  let currentHtmlBuffer: string[] = [];

  const flushHtmlBuffer = () => {
    if (currentHtmlBuffer.length > 0) {
      content.push({
        type: "richText",
        html: currentHtmlBuffer.join("\n"),
      });
      currentHtmlBuffer = [];
    }
  };

  for (const block of rawBody) {
    if (!block) continue;

    // Standard Portable Text Block
    if (block._type === "block") {
      const style = block.style || "normal";
      const text = block.children?.map((c: any) => c.text).join("") || "";

      if (style === "h2") {
        const id = slugify(text) || `section-${tableOfContents.length + 1}`;
        tableOfContents.push({ id, title: text, level: 2 });
        currentHtmlBuffer.push(
          `<h2 id="${id}" class="text-2xl sm:text-3xl font-display font-bold text-[#0B1B3A] mt-10 mb-4 tracking-tight">${text}</h2>`
        );
      } else if (style === "h3") {
        const id = slugify(text) || `subheading-${tableOfContents.length + 1}`;
        tableOfContents.push({ id, title: text, level: 3 });
        currentHtmlBuffer.push(
          `<h3 id="${id}" class="text-xl sm:text-2xl font-display font-bold text-[#0B1B3A] mt-8 mb-3 tracking-tight">${text}</h3>`
        );
      } else if (style === "blockquote") {
        currentHtmlBuffer.push(
          `<blockquote class="p-4 my-4 border-l-4 border-[#FFB020] bg-white rounded-r-xl italic text-slate-700">${text}</blockquote>`
        );
      } else {
        currentHtmlBuffer.push(
          `<p class="text-slate-700 leading-relaxed font-sans mb-4">${text}</p>`
        );
      }
      continue;
    }

    // Flush any pending HTML before rendering custom block
    flushHtmlBuffer();

    // 1. Data Table
    if (block._type === "customTable") {
      const headers = Array.isArray(block.headers) ? block.headers : [];
      const rows = Array.isArray(block.rows)
        ? block.rows.map((r: any) => (Array.isArray(r.cells) ? r.cells : []))
        : [];
      content.push({
        type: "table",
        caption: block.caption,
        headers,
        rows,
      });
      continue;
    }

    // 2. Infographic / Framework Card
    if (block._type === "infographicCard") {
      content.push({
        type: "infographic",
        title: block.title || "Strategic Framework",
        subtitle: block.subtitle,
        steps: Array.isArray(block.steps)
          ? block.steps.map((s: any, idx: number) => ({
              stepNumber: s.stepNumber || String(idx + 1).padStart(2, "0"),
              title: s.title || `Step ${idx + 1}`,
              description: s.description,
              bullets: Array.isArray(s.bullets) ? s.bullets : [],
              badge: s.badge,
            }))
          : [],
      });
      continue;
    }

    // 3. Key Takeaways Callout
    if (block._type === "takeawayBox") {
      content.push({
        type: "takeawayBox",
        title: block.title || "Key Strategic Takeaways",
        bullets: Array.isArray(block.bullets) ? block.bullets : [],
        ctaText: block.ctaText,
        ctaLink: block.ctaLink,
      });
      continue;
    }

    // 4. In-Article FAQ Accordion
    if (block._type === "articleFaq") {
      content.push({
        type: "faq",
        title: block.title,
        subtitle: block.subtitle,
        items: Array.isArray(block.items)
          ? block.items.map((i: any) => ({
              question: i.question || "",
              answer: i.answer || "",
            }))
          : [],
      });
      continue;
    }

    // 5. Callout Box
    if (block._type === "callout") {
      content.push({
        type: "callout",
        variant: block.variant || "tip",
        title: block.title,
        content: block.content || "",
      });
      continue;
    }

    // 6. Stat Highlight
    if (block._type === "statHighlight") {
      content.push({
        type: "statHighlight",
        metric: block.metric || "",
        label: block.label || "",
        subtext: block.subtext,
      });
      continue;
    }

    // 7. Comparison Box
    if (block._type === "comparison") {
      content.push({
        type: "comparison",
        title: block.title,
        columnA: block.columnA || { label: "In-House", items: [] },
        columnB: block.columnB || { label: "Desi Squad", items: [] },
      });
      continue;
    }

    // 8. In-Article CTA
    if (block._type === "inArticleCta") {
      content.push({
        type: "inArticleCta",
        badge: block.badge,
        headline: block.headline || "Ready to Scale?",
        description: block.description || "",
        buttonText: block.buttonText || "Get Started",
        buttonLink: block.buttonLink || "/#calculator",
      });
      continue;
    }

    // 9. Rich Image
    if (block._type === "richImage" || block._type === "image") {
      content.push({
        type: "image",
        url: block.url || block.asset?.url || "/images/Thumbnail.png",
        alt: block.alt || "Article graphic",
        caption: block.caption,
        badge: block.badge,
      });
      continue;
    }
  }

  flushHtmlBuffer();
  return { content, tableOfContents };
}

/**
 * Fetch all published blog posts.
 * Tries Sanity first if configured, then falls back to local data.
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  if (isSanityConfigured) {
    try {
      const sanityPosts = await sanityFetch<any[]>({
        query: ALL_POSTS_QUERY,
        revalidate: 60,
      });

      if (Array.isArray(sanityPosts) && sanityPosts.length > 0) {
        return sanityPosts.map((post) => ({
          id: post.id,
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt || "",
          publishedAt: post.publishedAt || "2026-01-01T00:00:00.000Z",
          updatedAt: post._updatedAt,
          coverImage: post.coverImage || "/images/Thumbnail.png",
          coverImageAlt: post.coverImageAlt || post.title,
          coverBadge: post.coverBadge || "Verified Strategic Guide",
          readTimeMinutes: post.readTimeMinutes || 6,
          featured: Boolean(post.featured),
          tags: Array.isArray(post.tags) ? post.tags : [],
          category: post.category || BLOG_CATEGORIES[0],
          author: post.author || {
            id: "founder",
            name: "Shankarsan Nayak",
            role: "Founder & CEO",
            slug: "shankarsan-nayak",
            image: "/images/team-sankarsan.webp",
            bio: "Pioneering high-trust offshore marketing infrastructure.",
          },
          tableOfContents: [],
          content: [],
          keyTakeaways: Array.isArray(post.keyTakeaways) ? post.keyTakeaways : [],
          faqs: Array.isArray(post.faqs) ? post.faqs : [],
        }));
      }
    } catch (err) {
      console.warn("[Sanity] Failed to query posts:", err);
    }
  }

  return BLOG_POSTS;
}

/**
 * Fetch a single blog post by its slug.
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  if (slug === "_init") {
    return {
      id: "preview-init",
      title: "Welcome to Hire Desi Marketer Journal",
      slug: "_init",
      excerpt: "Your Sanity Studio CMS is connected. As soon as you publish an article from Sanity Studio, it will appear here!",
      publishedAt: "2026-01-01T00:00:00.000Z",
      coverImage: "/images/blog-sample-cover.png",
      coverImageAlt: "Hire Desi Marketer Journal Preview",
      coverBadge: "Preview",
      readTimeMinutes: 1,
      featured: false,
      tags: ["Getting Started"],
      category: BLOG_CATEGORIES[0],
      author: {
        id: "founder",
        name: "Hire Desi Marketer",
        role: "Editorial Team",
        slug: "editorial-team",
        image: "/images/team-sankarsan.webp",
        bio: "Official editorial insights from Hire Desi Marketer.",
      },
      tableOfContents: [],
      content: [
        {
          type: "richText",
          html: "<p class='lead text-lg text-slate-700'>Your Sanity Studio CMS is connected and ready. As soon as an article is published from your Sanity Studio, it will appear live across the site.</p>",
        },
      ],
    };
  }

  if (isSanityConfigured) {
    try {
      const rawPost = await sanityFetch<any>({
        query: POST_BY_SLUG_QUERY,
        params: { slug },
        revalidate: 60,
      });

      if (rawPost) {
        const { content, tableOfContents } = transformSanityBody(rawPost.body || []);

        return {
          id: rawPost.id,
          title: rawPost.title,
          slug: rawPost.slug,
          excerpt: rawPost.excerpt || "",
          publishedAt: rawPost.publishedAt || "2026-01-01T00:00:00.000Z",
          updatedAt: rawPost._updatedAt,
          coverImage: rawPost.coverImage || "/images/Thumbnail.png",
          coverImageAlt: rawPost.coverImageAlt || rawPost.title,
          coverBadge: rawPost.coverBadge || "Verified Strategic Guide",
          readTimeMinutes: rawPost.readTimeMinutes || 6,
          featured: Boolean(rawPost.featured),
          tags: Array.isArray(rawPost.tags) ? rawPost.tags : [],
          category: rawPost.category || BLOG_CATEGORIES[0],
          author: rawPost.author || {
            id: "founder",
            name: "Shankarsan Nayak",
            role: "Founder & CEO",
            slug: "shankarsan-nayak",
            image: "/images/team-sankarsan.webp",
            bio: "Pioneering high-trust offshore marketing infrastructure.",
          },
          tableOfContents,
          content,
          keyTakeaways: Array.isArray(rawPost.keyTakeaways) ? rawPost.keyTakeaways : [],
          faqs: Array.isArray(rawPost.faqs) ? rawPost.faqs : [],
        };
      }
    } catch (err) {
      console.warn(`[Sanity] Failed to fetch post for slug ${slug}:`, err);
    }
  }

  // Fallback to local data
  const localPost = BLOG_POSTS.find((p) => p.slug === slug);
  return localPost || null;
}

/**
 * Fetch all categories.
 */
export async function getAllCategories(): Promise<BlogCategory[]> {
  if (isSanityConfigured) {
    try {
      const sanityCats = await sanityFetch<any[]>({
        query: CATEGORIES_QUERY,
        revalidate: 30,
      });

      if (Array.isArray(sanityCats) && sanityCats.length > 0) {
        return [
          { id: "all", title: "All Stories", slug: "all" },
          ...sanityCats.map((c) => ({
            id: c.id,
            title: c.title,
            slug: c.slug,
            description: c.description || "",
          })),
        ];
      }
    } catch (err) {
      console.warn("[Sanity] Failed to fetch categories:", err);
    }
  }

  return BLOG_CATEGORIES;
}
