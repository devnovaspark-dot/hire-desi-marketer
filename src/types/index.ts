export interface NavLink {
  label: string;
  href: string;
  isCta?: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tools: {
    name: string;
    icon: string;
  }[];
  deliverables: string[];
  gradient?: string;
}

export interface CaseStudy {
  id: string;
  industry: string;
  location: string;
  clientType: string;
  servicesTag: string;
  challenge: string;
  whatWeDid: string[];
  measuredWeekly: string[];
  mockupImage: string;
  mockupAlt: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  badge?: string;
  bio?: string;
}

export interface Department {
  title: string;
  roles: string;
  leadIcon?: string;
}

export interface TimezoneLocation {
  id: string;
  city: string;
  country: string;
  timezone: string;
  region: string;
  isHq?: boolean;
}

export interface PricingPlan {
  id: string;
  modelNumber: string;
  title: string;
  badge?: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  recommended?: boolean;
}

export interface DedicatedTeamTier {
  size: number;
  name: string;
  description: string;
  roles: { title: string; icon?: string }[];
  highlight?: boolean;
  ctaText: string;
}

export interface MatrixRow {
  role: string;
  description: string;
  team3: boolean | string;
  team5: boolean | string;
  team7: boolean | string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  company?: string;
  country: string;
  serviceInterest: string;
  message?: string;
}
