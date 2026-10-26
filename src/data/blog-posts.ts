import { BlogPost, BlogCategory, BlogAuthor } from "@/types/blog";

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    id: "all",
    title: "All Stories",
    slug: "all",
    description: "Browse all offshore digital marketing and growth playbooks.",
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
