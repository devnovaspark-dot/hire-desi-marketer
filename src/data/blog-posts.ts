import { BlogPost, BlogCategory, BlogAuthor } from "@/types/blog";

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    id: "all",
    title: "All Insights",
    slug: "all",
    description: "Browse all offshore digital marketing and growth playbooks.",
  },
  {
    id: "offshore-scaling",
    title: "Offshore Marketing",
    slug: "offshore-scaling",
    description: "Strategies for scaling marketing capacity and reducing payroll friction.",
    color: "from-amber-500/20 to-orange-500/10",
  },
  {
    id: "seo-growth",
    title: "SEO & AI Search",
    slug: "seo-growth",
    description: "Ranking tactics, technical audits, and surviving Google search evolution.",
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    id: "paid-media",
    title: "Paid Ads & ROI",
    slug: "paid-media",
    description: "Meta ads, Google PPC, ROAS optimization, and high-ticket lead gen.",
    color: "from-emerald-500/20 to-teal-500/10",
  },
  {
    id: "agency-ops",
    title: "Agency Operations",
    slug: "agency-ops",
    description: "Building dedicated pods, SLA management, and Western timezone overlap.",
    color: "from-purple-500/20 to-indigo-500/10",
  },
];

export const BLOG_AUTHORS: Record<string, BlogAuthor> = {
  sankarsan: {
    id: "sankarsan",
    name: "Shankarsan Nayak",
    role: "Founder & CEO, Hire Desi Marketer",
    slug: "shankarsan-nayak",
    image: "/images/team-sankarsan.webp",
    bio: "Pioneering high-trust offshore marketing infrastructure in Bhubaneswar, India. Helps US, UK, and Australian agencies build dedicated digital execution pods.",
    linkedin: "https://www.linkedin.com/company/hire-desi-marketer",
  },
  pranjal: {
    id: "pranjal",
    name: "Pranjal Sharma",
    role: "Chief Operating Officer",
    slug: "pranjal-sharma",
    image: "/images/team-pranjal.webp",
    bio: "Leads technical workflows, SEO infrastructure, client delivery SLAs, and day-to-day operations across global client accounts.",
    linkedin: "https://www.linkedin.com/company/hire-desi-marketer",
  },
  bikram: {
    id: "bikram",
    name: "Bikram Keshari Sahu",
    role: "Operation Executive & Paid Media Lead",
    slug: "bikram-keshari-sahu",
    image: "/images/team-bikram.webp",
    bio: "Performance marketer managing $2M+ in cross-channel Meta and Google ad campaigns. Specializes in local service lead generation and ROAS maximization.",
    linkedin: "https://www.linkedin.com/company/hire-desi-marketer",
  },
};

/**
 * All mock blogs deleted as requested.
 * Real articles will be loaded directly from your Sanity Studio CMS!
 */
export const BLOG_POSTS: BlogPost[] = [];
