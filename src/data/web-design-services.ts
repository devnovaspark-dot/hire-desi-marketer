export interface WebServiceItem {
  id: string;
  title: string;
  kicker: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface WebTechItem {
  name: string;
  category: "modern" | "cms";
  icon?: string;
  tag: string;
  description: string;
}

export interface WebIndustryItem {
  id: string;
  name: string;
  icon: string;
  description: string;
  popularSolutions: string[];
}

export interface WebProcessStep {
  step: number;
  title: string;
  tag: string;
  description: string;
  deliverables: string[];
}

export interface WebPricingModel {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  priceTag: string;
  idealFor: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  isPopular?: boolean;
}

export interface WebCaseStudy {
  id: string;
  clientName: string;
  category: "business" | "ecommerce" | "redesign" | "webapp";
  categoryLabel: string;
  industry: string;
  location: string;
  projectType: string;
  technologies: string[];
  requirements: string;
  challenges: string;
  solution: string;
  finalOutcome: string;
  metrics: { label: string; value: string }[];
  image: string;
  imageAlt: string;
}

export interface WebFaqItem {
  question: string;
  answer: string;
}

export const WEB_SERVICES: WebServiceItem[] = [
  {
    id: "custom-design",
    title: "Custom Website Design & Development",
    kicker: "Service 01 · Tailored Architecture",
    description:
      "Build professional, responsive websites tailored to your unique business requirements and brand identity from the ground up.",
    deliverables: [
      "Custom responsive UI/UX designed in Figma",
      "Pixel-perfect responsive coding across all device viewports",
      "Clean, modular semantic code architecture",
      "SEO-friendly structure with Schema markup",
      "Fast Core Web Vitals score (90+ on mobile & desktop)",
    ],
    icon: "palette",
  },
  {
    id: "website-redesign",
    title: "Website Redesign & Modernization",
    kicker: "Service 02 · Modern Transformation",
    description:
      "Transform outdated websites into modern, visually appealing, and conversion-focused digital experiences that reflect your current market authority.",
    deliverables: [
      "Comprehensive UI/UX audit & user friction analysis",
      "Modern brand aesthetic & design system revamp",
      "Preservation of existing SEO rankings & 301 redirect map",
      "Conversion rate optimization (CRO) layout updates",
      "Mobile-first navigation and layout refactoring",
    ],
    icon: "refresh",
  },
  {
    id: "ecommerce-development",
    title: "E-commerce Website Development",
    kicker: "Service 03 · Revenue Engines",
    description:
      "Create scalable online stores with seamless shopping experiences, secure payment integrations, and intuitive product management.",
    deliverables: [
      "Custom Shopify, WooCommerce, or Headless e-commerce build",
      "Frictionless 1-page checkout & multi-currency support",
      "Stripe, PayPal, Apple Pay & local gateway integrations",
      "Inventory, order, and ERP/CRM automation sync",
      "Upsell, cross-sell & cart abandonment sequence setup",
    ],
    icon: "shopping-bag",
  },
  {
    id: "cms-development",
    title: "CMS Website Development",
    kicker: "Service 04 · Easy Management",
    description:
      "Build easy-to-manage websites using popular content management systems so your marketing team can publish updates without touching code.",
    deliverables: [
      "Custom WordPress, Webflow, Shopify, or Sanity CMS builds",
      "Intuitive drag-and-drop / block-based visual editing",
      "Custom post types, taxonomies, and dynamic collections",
      "Zero-bloat plugin strategy for maximum security & speed",
      "Staff onboarding video documentation and handoff training",
    ],
    icon: "layout",
  },
  {
    id: "maintenance-enhancement",
    title: "Website Maintenance & Enhancement",
    kicker: "Service 05 · Ongoing Stability",
    description:
      "Improve existing websites through new features, functionality upgrades, bug fixes, security patches, and ongoing technical support.",
    deliverables: [
      "Scheduled core, theme, and plugin security updates",
      "Weekly automated off-site backups & disaster recovery",
      "Proactive 24/7 uptime & SSL monitoring",
      "Rapid turnaround for content changes and new landing pages",
      "Dedicated Slack / Teams communication channel",
    ],
    icon: "shield",
  },
  {
    id: "speed-optimization",
    title: "Website Speed & Performance Optimization",
    kicker: "Service 06 · Core Web Vitals",
    description:
      "Improve loading speed, Core Web Vitals, mobile responsiveness, and overall website performance to boost organic search rankings and ad conversions.",
    deliverables: [
      "Image compression, next-gen WebP/AVIF & responsive sizes",
      "Critical CSS generation & render-blocking script deferral",
      "Server caching, CDN setup & database query optimization",
      "LCP, INP, and CLS tuning for Google PageSpeed 90+",
      "Before & after benchmark audit performance report",
    ],
    icon: "zap",
  },
  {
    id: "custom-web-app",
    title: "Custom Web Application Development",
    kicker: "Service 07 · Advanced Logic",
    description:
      "Develop custom web applications, client portals, internal dashboards, SaaS MVPs, and business-specific digital solutions.",
    deliverables: [
      "Full-stack React / Next.js / Node.js / Laravel architectures",
      "Secure user authentication (OAuth, JWT, SSO, MFA)",
      "Database schema modeling (PostgreSQL, MongoDB, Supabase)",
      "Custom RESTful & GraphQL API integration",
      "Role-based access control (RBAC) & admin dashboards",
    ],
    icon: "code",
  },
  {
    id: "uiux-conversion",
    title: "UI/UX Design & Conversion Optimization",
    kicker: "Service 08 · Conversion Science",
    description:
      "Improve website navigation, wireframes, user journeys, micro-interactions, and conversion-focused design elements to turn visitors into buyers.",
    deliverables: [
      "Deep user persona research & competitor teardowns",
      "Figma wireframing, high-fidelity prototypes & design tokens",
      "Heatmap & session recording insights (Hotjar/Clarity)",
      "A/B testing layout variations for key landing pages",
      "Frictionless forms, sticky CTAs & clear value propositions",
    ],
    icon: "sparkles",
  },
];

export const MODERN_TECH: WebTechItem[] = [
  {
    name: "React.js",
    category: "modern",
    tag: "Frontend",
    description: "Component-based architecture for rich, interactive user interfaces",
  },
  {
    name: "Next.js",
    category: "modern",
    icon: "/icons/nextjs.svg",
    tag: "Full-Stack Framework",
    description: "Server-side rendering, hybrid static generation & peak SEO speed",
  },
  {
    name: "Node.js",
    category: "modern",
    tag: "Backend Runtime",
    description: "Scalable event-driven backend services and real-time APIs",
  },
  {
    name: "Laravel",
    category: "modern",
    tag: "PHP Framework",
    description: "Elegant, robust backend architecture with built-in security & ORM",
  },
  {
    name: "PHP",
    category: "modern",
    tag: "Core Backend",
    description: "Powering custom enterprise systems, WordPress & API integrations",
  },
  {
    name: "HTML5, CSS3 & JS",
    category: "modern",
    tag: "Core Standards",
    description: "Semantic standards-compliant code with cross-browser parity",
  },
  {
    name: "Tailwind CSS",
    category: "modern",
    tag: "Utility Styling",
    description: "High-velocity styling with zero runtime bloat and responsive ease",
  },
  {
    name: "Python / Django",
    category: "modern",
    tag: "Data & Backend",
    description: "Rapid, secure development for data-rich applications & AI tools",
  },
];

export const CMS_PLATFORMS: WebTechItem[] = [
  {
    name: "WordPress",
    category: "cms",
    icon: "/icons/wordpress.svg",
    tag: "Enterprise CMS",
    description: "Custom themes, ACF Pro structures, Gutenberg blocks & WooCommerce",
  },
  {
    name: "Shopify",
    category: "cms",
    icon: "/icons/shopify.svg",
    tag: "E-Commerce",
    description: "Liquid theme development, custom apps, checkout & scaling to 8 figures",
  },
  {
    name: "WooCommerce",
    category: "cms",
    tag: "Open E-Commerce",
    description: "Flexible, self-hosted e-commerce with zero recurring platform commissions",
  },
  {
    name: "Webflow",
    category: "cms",
    icon: "/icons/webflow.svg",
    tag: "Visual CMS",
    description: "High-end agency aesthetics, fluid interactions & clean semantic code",
  },
  {
    name: "Wix Studio",
    category: "cms",
    tag: "Agile Builder",
    description: "Fast-to-market business sites with responsive layouts and built-in apps",
  },
  {
    name: "Squarespace",
    category: "cms",
    tag: "Portfolio & Brand",
    description: "Clean aesthetic layouts for boutique agencies and consulting practices",
  },
  {
    name: "Drupal",
    category: "cms",
    tag: "Complex CMS",
    description: "Enterprise content management with strict governance and security",
  },
  {
    name: "Magento / Adobe",
    category: "cms",
    tag: "B2B / Large Catalog",
    description: "Complex e-commerce catalogs with multi-warehouse and wholesale pricing",
  },
];

export const WEB_INDUSTRIES: WebIndustryItem[] = [
  {
    id: "healthcare",
    name: "Healthcare & Medical",
    icon: "stethoscope",
    description: "HIPAA-compliant, patient-first dental, clinic & wellness portals with online appointment booking.",
    popularSolutions: ["Patient Booking Systems", "Doctor Profile Directories", "Insurance Clarification Hubs"],
  },
  {
    id: "realestate",
    name: "Real Estate & Property",
    icon: "home",
    description: "High-converting property listing websites with MLS/IDX sync, neighborhood guides, and lead capture.",
    popularSolutions: ["IDX / MLS Integration", "Interactive Property Maps", "Mortgage Calculators"],
  },
  {
    id: "ecommerce",
    name: "E-commerce & Retail",
    icon: "shopping-cart",
    description: "High-velocity online storefronts optimized for high average order value and frictionless mobile checkout.",
    popularSolutions: ["Shopify Plus Stores", "Subscription Models", "Omnichannel Inventory Sync"],
  },
  {
    id: "education",
    name: "Education & E-learning",
    icon: "graduation-cap",
    description: "LMS course platforms, university portals, and student onboarding websites with video streaming.",
    popularSolutions: ["Course Access Gating", "Student Dashboards", "Certificate Generation"],
  },
  {
    id: "finance",
    name: "Finance & Insurance",
    icon: "shield-check",
    description: "Trust-centric, bank-grade websites for accounting firms, wealth advisors, and fintech platforms.",
    popularSolutions: ["Financial Calculators", "Encrypted Form Submissions", "Regulatory Compliance"],
  },
  {
    id: "travel",
    name: "Travel & Hospitality",
    icon: "plane",
    description: "Immersive visual travel agencies, boutique hotel reservation systems, and tour itinerary hubs.",
    popularSolutions: ["Direct Room Reservation", "Seasonal Promo Engines", "Multilingual Support"],
  },
  {
    id: "professional-services",
    name: "Professional Services & Consulting",
    icon: "briefcase",
    description: "Authority-building digital presences for management consultants, agencies, and executive coaches.",
    popularSolutions: ["Lead Magnet Funnels", "Calendly / Sync Booking", "Client Case Study Portfolios"],
  },
  {
    id: "saas",
    name: "IT & SaaS Companies",
    icon: "cpu",
    description: "High-converting product landing pages, documentation portals, interactive pricing, and sign-up flows.",
    popularSolutions: ["Product Tour Interactive Demos", "Self-Serve Billing Portals", "Changelog & Knowledge Base"],
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Industrial",
    icon: "factory",
    description: "B2B product spec catalogs, RFQ (Request for Quote) workflows, and distributor locator portals.",
    popularSolutions: ["CAD / Spec Sheet Downloads", "Bulk RFQ Builders", "Distributor Partner Portals"],
  },
  {
    id: "automotive",
    name: "Automotive & Transportation",
    icon: "truck",
    description: "Dealership inventory display, logistics tracking portals, and fleet repair service booking engines.",
    popularSolutions: ["Vehicle Inventory Search", "Test Drive Booking", "Fleet Service Schedulers"],
  },
  {
    id: "food",
    name: "Food & Restaurant Businesses",
    icon: "utensils",
    description: "Vibrant restaurant menus, online ordering integrations, table booking, and franchise multi-location sites.",
    popularSolutions: ["Digital QR Menus", "DoorDash / UberEats Sync", "Table Reservation Concierge"],
  },
  {
    id: "legal",
    name: "Legal & Law Firms",
    icon: "scale",
    description: "Prestigious law practice websites establishing immediate trust, confidentiality, and case evaluation lead flows.",
    popularSolutions: ["Free Case Evaluation Forms", "Attorney Credentials Directory", "Practice Area Silos"],
  },
];

export const PROCESS_STEPS: WebProcessStep[] = [
  {
    step: 1,
    title: "Discovery & Requirement Analysis",
    tag: "Foundation & Scope",
    description:
      "We dive deep into your business goals, target audience (USA, Canada, UK, Australia), competitors, and exact functional requirements to define clear deliverables.",
    deliverables: ["Kickoff alignment meeting", "Technical requirements document", "Sitemap & architecture wireframe", "Fixed milestones & timeline"],
  },
  {
    step: 2,
    title: "Planning & Strategy",
    tag: "Blueprint & Tech Stack",
    description:
      "We select the optimal technology stack (Next.js, WordPress, Shopify, or Custom Stack), map data schemas, plan 301 redirects for redesigns, and finalize the roadmap.",
    deliverables: ["Technology stack selection", "Content strategy & wireflow", "Conversion funnel mapping", "SEO migration safeguards"],
  },
  {
    step: 3,
    title: "UI/UX Design",
    tag: "Visual Craft & Prototypes",
    description:
      "Our senior UI designers craft pixel-perfect wireframes and interactive Figma prototypes tailored to your brand identity, with revisions until you are 100% satisfied.",
    deliverables: ["Full design system & typography kit", "Interactive Figma mobile & desktop prototypes", "Accessibility & contrast verification", "Stakeholder approval signoff"],
  },
  {
    step: 4,
    title: "Development",
    tag: "Clean Code Engineering",
    description:
      "Our developers bring the approved designs to life using clean, modular, and maintainable code with strict adherence to security and performance benchmarks.",
    deliverables: ["Staging environment live preview", "Custom frontend & backend integration", "Third-party API & payment gateway setup", "Mobile responsiveness across viewports"],
  },
  {
    step: 5,
    title: "Testing & Quality Assurance",
    tag: "Rigorous Verification",
    description:
      "Every page, button, form, and script is rigorously tested across real devices, modern browsers, speed benchmarks, and security checklists.",
    deliverables: ["Cross-browser QA (Chrome, Safari, Firefox, Edge)", "Form delivery & notification verification", "Core Web Vitals 90+ speed audit", "SSL & security hardening"],
  },
  {
    step: 6,
    title: "Deployment & Launch",
    tag: "Flawless Go-Live",
    description:
      "Once you give final approval, we execute a seamless zero-downtime deployment, configure DNS, install analytics & GTM, and verify live search engine indexing.",
    deliverables: ["Zero-downtime production deployment", "DNS & SSL propagation", "Google Tag Manager & GA4 verification", "Google Search Console sitemap submission"],
  },
  {
    step: 7,
    title: "Ongoing Support & Maintenance",
    tag: "Long-Term Partnership",
    description:
      "We don't abandon you after launch. Our team provides ongoing technical support, proactive security patches, backups, and feature enhancements as your business scales.",
    deliverables: ["30-day post-launch warranty", "Scheduled security & core updates", "24/7 uptime monitoring", "Dedicated Slack/Teams support channel"],
  },
];

export const PRICING_MODELS: WebPricingModel[] = [
  {
    id: "fixed-cost",
    title: "Fixed-Cost Projects",
    subtitle: "Clear Scope & Timeline",
    badge: "Most Popular for New Sites",
    description:
      "Best for businesses with clearly defined project requirements looking for transparent, predictable pricing with milestone-based delivery.",
    priceTag: "Milestone-Based",
    idealFor: "New websites, complete redesigns, and defined e-commerce builds",
    features: [
      "Predefined project scope and agreed deliverables",
      "Strict project milestones and delivery timeline",
      "Transparent one-time project cost with zero surprise fees",
      "Dedicated Project Manager & UI/UX Designer",
      "Staging preview link before final signoff",
      "Complete code and asset ownership upon completion",
      "30-day complimentary post-launch support included",
    ],
    ctaText: "Get a Fixed-Cost Quote",
    ctaHref: "#lead-form",
    isPopular: true,
  },
  {
    id: "hourly",
    title: "Hourly Development",
    subtitle: "On-Demand Agility",
    badge: "Flexible Support",
    description:
      "Best for businesses requiring occasional development support, specific technical improvements, bug fixes, or ad-hoc customizations.",
    priceTag: "$12 - $20 / hr",
    idealFor: "Bug fixes, speed optimization, feature tweaks, and ad-hoc landing pages",
    features: [
      "Pay only for verified development hours utilized",
      "Flexible task allocation with quick turnarounds",
      "Time-tracked reports with clear task breakdown",
      "Ideal for existing WordPress, Shopify, or React sites",
      "No long-term contracts — scale hours up or down",
      "Direct Slack / WhatsApp communication",
      "Turnaround within 24-48 business hours",
    ],
    ctaText: "Hire Developers by the Hour",
    ctaHref: "#lead-form",
  },
  {
    id: "monthly-dedicated",
    title: "Monthly Dedicated Developers",
    subtitle: "Your Offshore Dev Wing",
    badge: "High Velocity & Volume",
    description:
      "Best for agencies, startups, and growing brands requiring dedicated full-time technical resources integrated directly into their internal workflow.",
    priceTag: "$1,299 - $2,499 / mo",
    idealFor: "Agencies, SaaS companies, and high-volume e-commerce brands",
    features: [
      "Dedicated full-time developer (160 hours / month)",
      "Senior engineer matched to your exact tech stack",
      "Western timezone sync (US, Canada, UK, Australia)",
      "Daily standups in your Slack, Teams, or Jira",
      "Seamless replacement guarantee if ever required",
      "Zero overhead costs (hardware, benefits, payroll managed)",
      "Save 70% compared to local domestic hiring",
    ],
    ctaText: "Discuss Monthly Hiring",
    ctaHref: "#lead-form",
  },
];

export const WEB_CASE_STUDIES: WebCaseStudy[] = [
  {
    id: "aesthetics-hub",
    clientName: "DermaLuxe Aesthetics",
    category: "redesign",
    categoryLabel: "Corporate Website Redesign",
    industry: "Medical Aesthetics & Dermatology",
    location: "Sydney, NSW · Australia",
    projectType: "Full Website Redesign & Lead Booking Engine",
    technologies: ["Next.js", "Tailwind CSS", "Figma", "GA4", "WhatsApp Automation"],
    requirements:
      "Transform an outdated, slow-loading WordPress site into an ultra-modern luxury digital storefront with frictionless online consultation scheduling.",
    challenges:
      "Previous site had an 8.4-second mobile load time, broken contact forms, high bounce rates (74%), and lacked mobile responsiveness for affluent clientele.",
    solution:
      "Engineered a headless Next.js responsive website with sub-second page loads, luxury typography, interactive treatment calculators, and 1-click WhatsApp concierge routing.",
    finalOutcome:
      "Mobile bounce rate decreased from 74% to 28%. Direct consultation bookings jumped 215% within the first 60 days of launch.",
    metrics: [
      { label: "Mobile Speed", value: "98/100" },
      { label: "Lead Increase", value: "+215%" },
      { label: "Bounce Rate", value: "28%" },
    ],
    image: "/images/case-study-aesthetic.webp",
    imageAlt: "DermaLuxe Aesthetics website redesign project showcase",
  },
  {
    id: "roastery-ecommerce",
    clientName: "Verve Artisan Roastery",
    category: "ecommerce",
    categoryLabel: "E-commerce Website Development",
    industry: "Specialty Coffee & Direct-to-Consumer",
    location: "Toronto, ON · Canada",
    projectType: "Custom Shopify Plus E-Commerce Store",
    technologies: ["Shopify Liquid", "Tailwind", "Klaviyo", "Recharge Subscriptions", "Stripe"],
    requirements:
      "Build a high-velocity direct-to-consumer online coffee store with custom recurring bean subscriptions and wholesale portal access.",
    challenges:
      "Client had fragmented sales across social media with no automated subscription management or recurring revenue infrastructure.",
    solution:
      "Developed a custom Shopify theme with a 3-step 'Find Your Roast' quiz, automated monthly subscriptions via Recharge, and optimized 1-page checkout.",
    finalOutcome:
      "Generated over $84,000 in monthly recurring subscription revenue within 4 months, with an average checkout conversion rate of 4.6%.",
    metrics: [
      { label: "Checkout Conv.", value: "4.6%" },
      { label: "MRR Generated", value: "$84K+" },
      { label: "Subscribers", value: "1,420+" },
    ],
    image: "/images/case-study-cafe.webp",
    imageAlt: "Verve Artisan Roastery custom e-commerce store build",
  },
  {
    id: "metro-dental",
    clientName: "Apex Smile Dental Centers",
    category: "business",
    categoryLabel: "Business Website Development",
    industry: "Healthcare & Dental Care",
    location: "Dallas–Fort Worth, TX · USA",
    projectType: "Multi-Location Healthcare Practice Portal",
    technologies: ["WordPress", "ACF Pro", "WP Engine", "Twilio Dynamic Call Tracking", "Schema.org"],
    requirements:
      "Develop a unified multi-location practice website for 4 clinic branches with emergency appointment booking and localized SEO architecture.",
    challenges:
      "Competitors dominated local search while the client's previous site had zero location-specific landing pages or call-tracking visibility.",
    solution:
      "Built custom WordPress theme with dynamic city landing pages, insurance checker tools, localized Schema markup, and instant online booking integration.",
    finalOutcome:
      "Achieved Top-3 rankings for 42 high-ticket dental keywords across Dallas-Fort Worth, generating 140+ verified monthly appointment calls.",
    metrics: [
      { label: "Monthly Calls", value: "140+" },
      { label: "Top-3 Keywords", value: "42" },
      { label: "Page Load Time", value: "1.1s" },
    ],
    image: "/images/case-study-dental.webp",
    imageAlt: "Apex Smile Dental multi-location practice website",
  },
  {
    id: "commercial-roofing",
    clientName: "Apex Shield Roofing Systems",
    category: "webapp",
    categoryLabel: "Custom Web Application Development",
    industry: "Construction & Commercial Roofing",
    location: "London · United Kingdom",
    projectType: "Instant Commercial Roof Estimator & Client Portal",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Google Maps API"],
    requirements:
      "Build an interactive roof area estimator tool that calculates approximate replacement costs and captures commercial facility manager leads.",
    challenges:
      "Sales reps spent 15+ hours per week manually calculating ballpark quotes for unqualified leads who never booked an on-site inspection.",
    solution:
      "Engineered an interactive satellite-integrated web application where clients select roof boundaries, pick materials, and receive a customized PDF estimate.",
    finalOutcome:
      "Saved 60+ rep hours monthly while capturing 85+ pre-qualified commercial roof replacement opportunities in the first quarter.",
    metrics: [
      { label: "Qualified Leads", value: "85+" },
      { label: "Time Saved", value: "60 hrs/mo" },
      { label: "Closing Rate", value: "+38%" },
    ],
    image: "/images/case-study-roofing.webp",
    imageAlt: "Apex Shield commercial roofing web application and lead portal",
  },
];

export const DIFFERENTIATORS = [
  {
    title: "Experienced Web Designers & Developers",
    description:
      "Our team consists of vetted senior designers and full-stack developers who build websites every day for Western businesses.",
    icon: "users",
    metric: "8+ Years Avg. Experience",
  },
  {
    title: "Expertise Across Multiple Technologies",
    description:
      "From React, Next.js, and Node to WordPress, Shopify, and Webflow — we build on the exact right platform for your business.",
    icon: "layers",
    metric: "15+ Modern Stacks",
  },
  {
    title: "Solutions Tailored to Your Business",
    description:
      "No generic, cookie-cutter templates. Every website is built specifically to address your audience, market, and conversion objectives.",
    icon: "crosshair",
    metric: "100% Custom Tailored",
  },
  {
    title: "Flexible Hiring & Pricing Models",
    description:
      "Choose fixed-cost projects, flexible hourly blocks, or dedicated full-time monthly developers to fit your budget.",
    icon: "dollar-sign",
    metric: "Fixed, Hourly & Monthly",
  },
  {
    title: "Transparent Communication & Live Shifts",
    description:
      "We sync live during US (EST/PST), Canadian, UK (GMT), and Australian (AEST) hours with daily Slack updates and video check-ins.",
    icon: "clock",
    metric: "Realtime Western Overlap",
  },
  {
    title: "Scalable Development Solutions",
    description:
      "Engineered with clean code and robust architecture so your website easily handles traffic spikes and grows with your company.",
    icon: "trending-up",
    metric: "Built for Enterprise Scale",
  },
  {
    title: "Quality Assurance & Rigorous Testing",
    description:
      "Every project undergoes multi-device responsive testing, browser parity checks, Core Web Vitals speed tuning, and form audits.",
    icon: "shield-check",
    metric: "90+ PageSpeed Benchmark",
  },
  {
    title: "Long-Term Technical Support",
    description:
      "We remain your dedicated technology partner long after launch for routine updates, security patches, and feature additions.",
    icon: "heart-handshake",
    metric: "30-Day Post-Launch Warranty",
  },
];

export const WEB_FAQS: WebFaqItem[] = [
  {
    question: "1. How much does it cost to design and develop a website?",
    answer:
      "The cost depends on your scope, features, and platform. A focused 5-to-8 page business website typically ranges from $999 to $2,500 on a fixed-cost basis. Custom e-commerce stores with extensive product catalogs and custom integrations generally range from $2,000 to $5,000. For ongoing tasks or specific fixes, we offer flexible hourly development at $12-$20/hr, or full-time monthly dedicated developers from $1,299/mo. Contact us for a detailed, transparent proposal with zero hidden fees.",
  },
  {
    question: "2. How long does it take to develop a business website?",
    answer:
      "A standard professional business website typically takes 2 to 4 weeks from kickoff to deployment. Larger e-commerce stores or complex custom web applications usually take 4 to 8 weeks. Because our team operates with agile sprints and continuous staging environments, you can preview and test your website in real-time throughout the entire build.",
  },
  {
    question: "3. Can you redesign or improve my existing website?",
    answer:
      "Yes, absolutely. We frequently help businesses modernize outdated websites, fix broken layouts, improve mobile responsiveness, and boost loading speeds without disrupting your ongoing operations. For redesigns, we create a complete 301 redirect mapping plan to ensure your existing Google search rankings and backlinks are 100% protected.",
  },
  {
    question: "4. Do you work with WordPress, Shopify, and WooCommerce?",
    answer:
      "Yes. We have deep expertise across the world's leading CMS and e-commerce platforms including WordPress (custom themes, ACF Pro, Gutenberg), Shopify & Shopify Plus (Liquid, custom apps, checkout extensions), WooCommerce, Webflow, and custom headless Next.js platforms. We advise you on the best platform based on your budget and internal team capabilities.",
  },
  {
    question: "5. Can you work with our existing development team?",
    answer:
      "Yes. Our developers integrate seamlessly into existing in-house engineering and marketing teams. We adapt to your workflows, use your Git repositories (GitHub, GitLab, Bitbucket), collaborate directly in your Slack or Teams workspace, and track tasks in your Jira, Trello, Asana, or ClickUp boards.",
  },
  {
    question: "6. Do you offer hourly and monthly developer hiring?",
    answer:
      "Yes. If you don't require a full fixed-cost project, you can hire our developers by the hour for specific bug fixes, landing pages, or plugin configurations. If you require continuous development throughput, our Monthly Dedicated Developer model provides a dedicated, full-time engineer (160 hours/month) dedicated solely to your tasks.",
  },
  {
    question: "7. Will my website be mobile-friendly and SEO-ready?",
    answer:
      "Every single website we build is 100% mobile-first and responsive across all device breakpoints (iPhone, Android, tablets, laptops, and ultra-wide desktops). We implement technical SEO best practices from the start: semantic HTML5 tags, Schema.org structured data markup, OpenGraph social cards, canonical URLs, XML sitemaps, and optimized Core Web Vitals.",
  },
  {
    question: "8. Do you provide website maintenance and ongoing support?",
    answer:
      "Yes. Every fixed-cost project includes 30 days of complimentary post-launch bug-fixing and warranty support. Beyond launch, we offer monthly maintenance packages covering weekly core/plugin updates, automated daily cloud backups, 24/7 uptime monitoring, security firewalls, and priority turnarounds for new pages or banners.",
  },
  {
    question: "9. Can you integrate third-party APIs and business tools?",
    answer:
      "Yes. We integrate CRMs (HubSpot, Salesforce, Zoho), email marketing tools (Klaviyo, Mailchimp, ActiveCampaign), payment gateways (Stripe, PayPal, Apple Pay, Authorize.net), booking systems (Calendly, Acuity, OpenTable), analytics (Google Tag Manager, GA4, Meta Pixel), and custom REST/GraphQL APIs.",
  },
  {
    question: "10. Do you work with clients in the USA, Canada, UK, and Australia?",
    answer:
      "Yes, over 95% of our clients are based in the USA, Canada, United Kingdom, and Australia. Our management and senior developers work in dedicated Western shifts (EST, PST, GMT, and AEST overlap). We communicate clearly in fluent English through Slack, email, WhatsApp, and live Zoom / Google Meet calls.",
  },
];
