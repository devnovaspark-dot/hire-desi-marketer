import { ServiceCategory } from "@/types";

export const TECH_STACK_TAGS = [
  { label: "AI Search (GEO / AEO)", description: "Optimized for ChatGPT, Perplexity & AI Overviews" },
  { label: "Performance Max", description: "Google PMax asset groups & audience signals" },
  { label: "Advantage+", description: "Meta Advantage+ Shopping & Catalog campaigns" },
  { label: "Server-side Tracking", description: "First-party CAPI & Stape server tagging" },
  { label: "Short-form Video", description: "Retention-first Reels, TikToks & YouTube Shorts" },
  { label: "AI Automation", description: "Custom GPTs, Zapier & Make lead routing" },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "paid-media",
    title: "Paid Media",
    subtitle: "Search, Social & Video Ads",
    description:
      "High-intent search campaigns, audience retargeting, and scalable creative testing built to lower your customer acquisition cost (CAC).",
    tools: [
      { name: "Google Ads", icon: "/icons/google-ads.svg" },
      { name: "Meta Ads", icon: "/icons/meta-ads.svg" },
      { name: "LinkedIn Ads", icon: "/icons/linkedin-ads.svg" },
      { name: "TikTok Ads", icon: "/icons/tiktok-ads.svg" },
      { name: "YouTube Ads", icon: "/icons/youtube-ads.svg" },
    ],
    deliverables: [
      "Account architecture & campaign setups",
      "High-converting ad copy & angle testing",
      "Daily bid adjustments & negative keyword mining",
      "Custom weekly ROAS & CPA pacing reports",
    ],
  },
  {
    id: "seo-analytics",
    title: "SEO & Analytics",
    subtitle: "Rankings, Tracking & Attribution",
    description:
      "Technical audits, localized keyword domination, and rock-solid conversion tracking so you never wonder where a lead originated.",
    tools: [
      { name: "Google Search Console", icon: "/icons/gsc.svg" },
      { name: "Semrush", icon: "/icons/semrush.svg" },
      { name: "Google Analytics 4", icon: "/icons/ga4.svg" },
      { name: "Google Tag Manager", icon: "/icons/gtm.svg" },
      { name: "Looker Studio", icon: "/icons/looker.svg" },
      { name: "Hotjar", icon: "/icons/hotjar.svg" },
    ],
    deliverables: [
      "Technical SEO audits & Core Web Vitals fixes",
      "Local Map-Pack & Google Business Profile ranking",
      "Server-side GA4 events & conversion tracking",
      "Live Looker Studio executive dashboards",
    ],
  },
  {
    id: "ai-content",
    title: "AI & Content Marketing",
    subtitle: "AI-Assisted, Human-Polished Copy",
    description:
      "Modern editorial production combining generative AI research velocity with seasoned human editorial craft for organic authority.",
    tools: [
      { name: "ChatGPT", icon: "/icons/chatgpt.svg" },
      { name: "Claude", icon: "/icons/claude.svg" },
      { name: "Gemini", icon: "/icons/gemini.svg" },
      { name: "Perplexity", icon: "/icons/perplexity.svg" },
      { name: "Notion", icon: "/icons/notion.svg" },
    ],
    deliverables: [
      "Long-form SEO-driven authority articles",
      "AEO answers engineered for AI search engines",
      "High-converting email sequences & newsletters",
      "Landing page frameworks & persuasive copy",
    ],
  },
  {
    id: "social-creative",
    title: "Social & Creative Studio",
    subtitle: "Reels, Ad Creatives & Brand Kit",
    description:
      "Stop thumb scrolls with modern aesthetics, short-form video hooks, and cohesive brand templates crafted for international audiences.",
    tools: [
      { name: "Instagram", icon: "/icons/instagram.svg" },
      { name: "Canva", icon: "/icons/canva.svg" },
      { name: "Figma", icon: "/icons/figma.svg" },
      { name: "Photoshop", icon: "/icons/photoshop.svg" },
      { name: "Premiere Pro", icon: "/icons/premiere.svg" },
    ],
    deliverables: [
      "Fast-paced vertical Reels, TikToks & Shorts",
      "Static & carousel ad creative variations",
      "Monthly approved social content calendars",
      "Brand identity kits, icons & design assets",
    ],
  },
  {
    id: "crm-automation",
    title: "CRM & Automations",
    subtitle: "Pipelines, Lead Routing & Workflows",
    description:
      "Connect your lead forms directly to instant notifications, CRM stages, and automated follow-ups before leads turn cold.",
    tools: [
      { name: "HubSpot", icon: "/icons/hubspot.svg" },
      { name: "Salesforce", icon: "/icons/salesforce.svg" },
      { name: "Mailchimp", icon: "/icons/mailchimp.svg" },
      { name: "Zapier", icon: "/icons/zapier.svg" },
      { name: "Make", icon: "/icons/make.svg" },
    ],
    deliverables: [
      "Instant WhatsApp, SMS & email lead notifications",
      "Automated multi-step nurture drip campaigns",
      "CRM pipeline setup & deal stage automations",
      "Custom Zapier & Make webhook integrations",
    ],
  },
  {
    id: "web-commerce",
    title: "Web & E-Commerce",
    subtitle: "Fast Landing Pages & Storefronts",
    description:
      "Clean, modern web interfaces and lightning-fast landing pages engineered specifically to turn clicks into booked appointments and sales.",
    tools: [
      { name: "WordPress", icon: "/icons/wordpress.svg" },
      { name: "Shopify", icon: "/icons/shopify.svg" },
      { name: "Webflow", icon: "/icons/webflow.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "Elementor", icon: "/icons/elementor.svg" },
    ],
    deliverables: [
      "60-second high-intent booking landing pages",
      "Shopify CRO improvements & catalog hygiene",
      "Mobile speed optimizations under 1.5 seconds",
      "No-code CMS templates for effortless edits",
    ],
  },
];
