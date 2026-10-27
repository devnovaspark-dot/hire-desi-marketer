import { DedicatedTeamTier, MatrixRow, PricingPlan } from "@/types";

export const ENGAGEMENT_MODELS: PricingPlan[] = [
  {
    id: "hourly",
    modelNumber: "Model 01",
    title: "Hourly Support",
    badge: "Maximum Flexibility",
    description:
      "Ideal for quick campaign setups, SEO sprint fixes, ad experiments, or variable monthly workloads with zero commitments.",
    price: "$8",
    period: "per hour",
    features: [
      "No long-term contracts or lock-in",
      "Unlimited hours — scale from 2 to 10 hrs/day",
      "Billed purely on verified time logged",
      "Ad setups, SEO fixes & creative designs",
      "Direct Slack messaging & shared Trello board",
    ],
    ctaLabel: "Start Hourly at $8/hr",
    ctaHref: "#calculator",
  },
  {
    id: "growth-bundle",
    modelNumber: "Model 02",
    title: "The Growth Bundle",
    badge: "Best for Small Business",
    description:
      "Our signature all-in-one monthly engine: Get found on Google, run profitable ads, and maintain a polished social presence.",
    price: "$999",
    period: "per month",
    recommended: true,
    features: [
      "SEO Essentials: On-page, technical & Google Business Profile",
      "Google & Meta Ads: Complete setup & weekly pacing",
      "Social Media: 12 high-impact posts/mo across 2 channels",
      "Creative Design: 8 custom graphics & 4 edited Reels",
      "Organic Content: 4 authoritative 1,500+ word SEO blogs",
      "Executive reporting: Monthly Looker dashboard & review call",
      "Month-to-month arrangement — cancel anytime",
    ],
    ctaLabel: "Start the $999 Plan",
    ctaHref: "/get-a-quote",
  },
  {
    id: "dedicated-team",
    modelNumber: "Model 03",
    title: "Dedicated Teams",
    badge: "Full Department",
    description:
      "A dedicated department working exclusively on your brand. Pick 3, 5, or 7 full-time specialists ready in 7 business days.",
    price: "Custom",
    period: "transparent quote",
    features: [
      "100% dedicated to your company (no context switching)",
      "Choice of 3, 5, or 7 vetted marketing specialists",
      "Dedicated Project Manager & single point of contact",
      "Full stack: SEO, Media Buyers, Social, Design & Tech",
      "Direct integration into your Slack & Zoom ecosystem",
      "Fast 24-hour custom proposal tailored to your stack",
    ],
    ctaLabel: "Explore Dedicated Teams",
    ctaHref: "#teams",
  },
];

export const DEDICATED_TEAM_TIERS: DedicatedTeamTier[] = [
  {
    size: 3,
    name: "Starter Team",
    description:
      "Best for local service and emerging e-commerce brands needing daily search visibility, ad management, and social engagement.",
    highlight: false,
    ctaText: "Request Starter Team Quote",
    roles: [
      { title: "SEO Specialist (Rankings & Map Pack)" },
      { title: "Performance Marketer (Google & Meta Ads)" },
      { title: "Social Media Marketer (Posting & Community)" },
      { title: "Overseen by COO · Monthly Strategy Review" },
    ],
  },
  {
    size: 5,
    name: "Growth Team",
    description:
      "Our most chosen department tier. A fully managed squad with a dedicated manager, continuous content, and multi-channel campaigns.",
    highlight: true,
    ctaText: "Request Growth Team Quote",
    roles: [
      { title: "Digital Marketing Manager (Single Point of Contact)" },
      { title: "Senior SEO Specialist (Audits & Keywords)" },
      { title: "Performance Media Buyer (Full Funnel Ads)" },
      { title: "Social Media & Community Marketer" },
      { title: "Dedicated Content Writer (Articles & Copy)" },
    ],
  },
  {
    size: 7,
    name: "Full-Stack Department",
    description:
      "A comprehensive digital growth engine including in-house design, video production, and full-stack landing page development.",
    highlight: false,
    ctaText: "Request Full-Stack Team Quote",
    roles: [
      { title: "Senior Marketing Project Manager" },
      { title: "SEO & AEO Search Lead" },
      { title: "Omnichannel Performance Media Buyer" },
      { title: "Social Media & Community Strategist" },
      { title: "Editorial & Conversion Copywriter" },
      { title: "Graphic Designer & Video Motion Editor" },
      { title: "Full-Stack Web Developer (Next.js & WordPress)" },
    ],
  },
];

export const ROLE_COMPARISON_MATRIX: MatrixRow[] = [
  {
    role: "Marketing / Project Manager",
    description: "Strategy, sprint planning & single point of contact",
    team3: "Add-on",
    team5: true,
    team7: true,
  },
  {
    role: "SEO Specialist",
    description: "Rankings, local search & technical health",
    team3: true,
    team5: true,
    team7: true,
  },
  {
    role: "Performance Marketer",
    description: "Google, Meta, LinkedIn & TikTok Ads optimization",
    team3: true,
    team5: true,
    team7: true,
  },
  {
    role: "Social Media Marketer",
    description: "Content calendar, daily distribution & engagement",
    team3: true,
    team5: true,
    team7: true,
  },
  {
    role: "Content Writer",
    description: "Blogs, conversion copy, emails & ad angles",
    team3: "Add-on",
    team5: true,
    team7: true,
  },
  {
    role: "Graphic Designer & Video Editor",
    description: "Ad creatives, Reels, YouTube shorts & visual assets",
    team3: "Add-on",
    team5: "Add-on",
    team7: true,
  },
  {
    role: "Full-Stack Web Developer",
    description: "Landing pages, site speed, tech SEO & integrations",
    team3: "Add-on",
    team5: "Add-on",
    team7: true,
  },
];
