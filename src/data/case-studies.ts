import { CaseStudy } from "@/types";

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "dental-clinic",
    industry: "Dental Clinic",
    location: "Toronto, ON · Canada",
    clientType: "Multi-Location Family Dental Practice",
    servicesTag: "Google Ads · 60-Sec Landing Page · Call Tracking",
    challenge:
      "Broad, poorly targeted searches were draining the advertising budget, while untracked phone calls left leadership without clear visibility into which campaigns were generating paying patients.",
    whatWeDid: [
      "Ran geo-targeted Google Ads for implants, Invisalign, and emergency dental care.",
      "Optimised mobile pages for easy bookings and insurance clarity.",
      "Integrated dynamic call tracking and GA4 server-side conversions.",
      "Refined negative keywords and target CPA bidding to reduce wasted spend.",
    ],
    measuredWeekly: [
      "Verified booked appointments",
      "Cost per qualified lead (CPL)",
      "Blended Return on Ad Spend (ROAS)",
      "First-time caller conversion rate",
    ],
    mockupImage: "/images/case-study-dental.webp",
    mockupAlt:
      "Illustrative campaign architecture: Dental clinic landing page and Google search ad structure",
  },
  {
    id: "roofing-contractor",
    industry: "Roofing Contractor",
    location: "Dallas–Fort Worth, TX · USA",
    clientType: "Residential Roofing & Storm-Damage Specialist",
    servicesTag: "Local SEO · Google Business Profile · Organic Content",
    challenge:
      "Completely invisible in the local Google Map Pack across key sub-markets during peak hail and storm season, losing lucrative insurance-backed emergency claims to neighboring competitors.",
    whatWeDid: [
      "Full Google Business Profile audit, geo-tagged photo uploads, and weekly localized service updates",
      "Individual city-by-city service area landing pages optimized for high-urgency storm repair keywords",
      "Automated SMS/Email review collection sequence for completed homeowner jobs",
      "4 high-intent educational guides published monthly addressing insurance claim navigation",
    ],
    measuredWeekly: [
      "Local 3-Pack rank across 8 target ZIP codes",
      "Direct organic phone calls & direction requests",
      "Page-1 keyword volume for high-ticket terms",
      "Net-new 5-star customer reviews",
    ],
    mockupImage: "/images/case-study-roofing.webp",
    mockupAlt:
      "Illustrative campaign architecture: Roofing contractor localized keyword tracking and profile optimization",
  },
  {
    id: "cafe-roastery",
    industry: "Café & Roastery",
    location: "Sydney, NSW · Australia",
    clientType: "Artisan Specialty Café & Direct-to-Consumer Roastery",
    servicesTag: "Social Media · Short-Form Reels · Promo Tracking",
    challenge:
      "Posting was sporadic with near-zero video presence. Brand engagement had plateaued and weekday morning foot traffic wasn't keeping pace with increasing overhead costs.",
    whatWeDid: [
      "Structured monthly content calendar with all creative assets reviewed and approved in one monthly call",
      "Production of 4 crisp short-form Reels per week spotlighting barista technique and seasonal specials",
      "Vibrant menu launch graphics and localized Instagram geo-targeted reach campaigns",
      "Digital weekday barcode offer redemptions to directly attribute café visits to social campaigns",
    ],
    measuredWeekly: [
      "Local account reach & 3-second Reel views",
      "Engagement rate per post vs. industry benchmarks",
      "In-store weekday offer redemptions",
      "Net-new local follower growth",
    ],
    mockupImage: "/images/case-study-cafe.webp",
    mockupAlt:
      "Illustrative campaign architecture: Specialty café content calendar and short-form video creative pacing",
  },
  {
    id: "aesthetic-clinic",
    industry: "Aesthetic Clinic",
    location: "Dubai · UAE",
    clientType: "Premium Dermatology & Medical Aesthetics Practice",
    servicesTag: "Meta Ads · Website Redesign · WhatsApp Automation",
    challenge:
      "An outdated web experience caused high bounce rates, while incoming consultation leads sat in an email inbox for 48+ hours — resulting in cold leads and heavy no-show rates.",
    whatWeDid: [
      "Speed-optimized mobile-first clinical redesign highlighting practitioner credentials and before/after standards",
      "High-aesthetic Meta (Instagram & Facebook) lead generation campaigns targeted by expat demographics",
      "Instant 60-second WhatsApp lead notification and auto-responder booking concierge",
      "Automated SMS & WhatsApp retargeting sequence to re-engage consultation drop-offs",
    ],
    measuredWeekly: [
      "Cost per qualified consultation lead",
      "Total confirmed doctor consultations",
      "Average lead response speed (reduced to < 3 mins)",
      "Consultation attendance / show-up rate",
    ],
    mockupImage: "/images/case-study-aesthetic.webp",
    mockupAlt:
      "Illustrative campaign architecture: Medical aesthetics clinic mobile redesign and WhatsApp lead routing",
  },
];
