export interface BlogCategory {
  id: string;
  title: string;
  slug: string;
  description?: string;
  color?: string;
}

export interface BlogAuthor {
  id: string;
  name: string;
  role: string;
  slug: string;
  image: string;
  bio: string;
  linkedin?: string;
}

export type CustomBlockType =
  | "richText"
  | "callout"
  | "statHighlight"
  | "comparison"
  | "inArticleCta"
  | "quote"
  | "code"
  | "image"
  | "table"
  | "infographic"
  | "faq"
  | "takeawayBox"
  | "carousel";

export interface RichTextBlock {
  type: "richText";
  html: string;
}

export interface CalloutBlock {
  type: "callout";
  variant: "tip" | "warning" | "growth-hack" | "takeaway";
  title?: string;
  content: string;
}

export interface StatHighlightBlock {
  type: "statHighlight";
  metric: string;
  label: string;
  subtext?: string;
}

export interface ComparisonBlock {
  type: "comparison";
  title?: string;
  columnA: {
    label: string;
    sublabel?: string;
    items: string[];
    isHighlighted?: boolean;
  };
  columnB: {
    label: string;
    sublabel?: string;
    items: string[];
    isHighlighted?: boolean;
  };
}

export interface InArticleCtaBlock {
  type: "inArticleCta";
  badge?: string;
  headline: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface QuoteBlock {
  type: "quote";
  text: string;
  author: string;
  role?: string;
}

export interface CodeBlock {
  type: "code";
  language: string;
  code: string;
  filename?: string;
}

export interface ImageBlock {
  type: "image";
  url: string;
  alt: string;
  caption?: string;
  badge?: string;
}

export interface GifBlock {
  type: "gif";
  url: string;
  alt: string;
  caption?: string;
  badge?: string;
  size?: "standard" | "wide" | "compact";
}

export interface TableBlock {
  type: "table";
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface InfographicStep {
  stepNumber: string;
  title: string;
  description?: string;
  bullets?: string[];
  badge?: string;
}

export interface InfographicBlock {
  type: "infographic";
  title: string;
  subtitle?: string;
  steps: InfographicStep[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqBlock {
  type: "faq";
  title?: string;
  subtitle?: string;
  items: FaqItem[];
}

export interface TakeawayBoxBlock {
  type: "takeawayBox";
  title?: string;
  bullets: string[];
  ctaText?: string;
  ctaLink?: string;
}

export interface CarouselSlide {
  image: string;
  alt?: string;
  title?: string;
  description?: string;
  badge?: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface CarouselBlock {
  type: "carousel";
  title?: string;
  subtitle?: string;
  displayMode?: "standard" | "card" | "full";
  autoplay?: boolean;
  autoplayInterval?: number;
  items: CarouselSlide[];
}

export type BlogContentBlock =
  | RichTextBlock
  | CalloutBlock
  | StatHighlightBlock
  | ComparisonBlock
  | InArticleCtaBlock
  | QuoteBlock
  | CodeBlock
  | ImageBlock
  | GifBlock
  | TableBlock
  | InfographicBlock
  | FaqBlock
  | TakeawayBoxBlock
  | CarouselBlock;

export interface TocItem {
  id: string;
  title: string;
  level: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  coverImage: string;
  coverImageAlt: string;
  coverBadge?: string;
  readTimeMinutes: number;
  category: BlogCategory;
  author: BlogAuthor;
  featured?: boolean;
  tableOfContents: TocItem[];
  content: BlogContentBlock[];
  tags: string[];
  keyTakeaways?: string[];
  faqs?: FaqItem[];
}
