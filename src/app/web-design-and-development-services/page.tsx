import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Star,
  Globe,
  Clock,
  Layers,
  Laptop,
  Code2,
  Palette,
  RefreshCw,
  ShoppingBag,
  Layout,
  Zap,
  Cpu,
  Check,
  DollarSign,
  Users,
  Crosshair,
  TrendingUp,
  HeartHandshake,
  ChevronRight,
  Shield,
  HelpCircle,
  Building,
  Briefcase,
  PhoneCall,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WebDesignLeadForm } from "@/components/web-design/WebDesignLeadForm";
import { WebDesignServicesGrid } from "@/components/web-design/WebDesignServicesGrid";
import { WebDesignTechStack } from "@/components/web-design/WebDesignTechStack";
import { WebDesignIndustriesGrid } from "@/components/web-design/WebDesignIndustriesGrid";
import { WebDesignProcessStream } from "@/components/web-design/WebDesignProcessStream";
import { WebDesignCaseStudies } from "@/components/web-design/WebDesignCaseStudies";
import { WebDesignFaqAccordion } from "@/components/web-design/WebDesignFaqAccordion";
import {
  WEB_SERVICES,
  WEB_INDUSTRIES,
  PRICING_MODELS,
  DIFFERENTIATORS,
  WEB_FAQS,
} from "@/data/web-design-services";

export const metadata: Metadata = {
  title: "Professional Web Design & Development Services | Hire Desi Marketer",
  description:
    "Professional website design and development services for growing businesses in USA, Canada, UK & Australia. Custom websites, redesigns, e-commerce, and dedicated developers.",
  keywords: [
    "web design and development services",
    "hire web developers india",
    "custom website design",
    "website redesign services",
    "ecommerce website development",
    "CMS development WordPress Shopify Webflow",
    "hire react nextjs developers",
    "affordable web development agency",
    "website speed optimization",
  ],
  alternates: {
    canonical: "https://www.hiredesimarketer.com/web-design-and-development-services",
  },
  openGraph: {
    title: "Professional Web Design & Development Services | Hire Desi Marketer",
    description:
      "Scalable, high-performing websites and digital experiences tailored to your business goals. Serving USA, Canada, UK & Australia.",
    url: "https://www.hiredesimarketer.com/web-design-and-development-services",
    siteName: "Hire Desi Marketer",
    locale: "en_US",
    type: "website",
  },
};

const differentiatorIcons: Record<string, React.ReactNode> = {
  users: <Users className="w-5 h-5" />,
  layers: <Layers className="w-5 h-5" />,
  crosshair: <Crosshair className="w-5 h-5" />,
  "dollar-sign": <DollarSign className="w-5 h-5" />,
  clock: <Clock className="w-5 h-5" />,
  "trending-up": <TrendingUp className="w-5 h-5" />,
  "shield-check": <ShieldCheck className="w-5 h-5" />,
  "heart-handshake": <HeartHandshake className="w-5 h-5" />,
};

export default function WebDesignServicesPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Design and Development Services",
    provider: {
      "@type": "Organization",
      name: "Hire Desi Marketer",
      url: "https://www.hiredesimarketer.com",
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Australia" },
    ],
    description:
      "Professional website design, redesign, e-commerce, and custom web development services tailored to growing businesses.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Website Solutions",
      itemListElement: WEB_SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
        },
      })),
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F6F4EE] text-[#0B1B3A]">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <Header />

      <main className="flex-1 pt-20 sm:pt-24 pb-16">
        {/* ================================================================ */}
        {/* 1. HERO SECTION – FITS IN A SINGLE WINDOW ABOVE THE FOLD         */}
        {/* ================================================================ */}
        <section className="relative overflow-hidden min-h-[calc(100vh-5rem)] flex items-center py-4 sm:py-6 lg:py-8">
          {/* Authentic Page Background Image Layer */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <Image
              src="/images/web-dev-hero-bg.jpg"
              alt="Hire Desi Marketer Web Design and Development Studio"
              fill
              priority
              className="object-cover object-center opacity-25"
            />
            {/* Soft Warm Luxury Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F6F4EE] via-[#F6F4EE]/90 to-[#F6F4EE]/75" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFB020]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              {/* Left Column (7 cols): Target Markets, Headline, Subtitle, 5 Key Selling Points, CTAs, Social Proof */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
                {/* Target Markets Banner */}
                <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1 rounded-full bg-[#060B22] text-white text-[11px] font-bold border border-white/10 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[#FFB020] font-black uppercase tracking-wider text-[10px]">
                    Target Markets:
                  </span>
                  <span className="text-slate-200">
                    🇺🇸 USA · 🇨🇦 Canada · 🇬🇧 UK · 🇦🇺 Australia
                  </span>
                </div>

                {/* Main Headline */}
                <div className="space-y-2">
                  <h1 className="font-display font-black text-2xl sm:text-4xl lg:text-[40px] xl:text-[44px] text-[#0B1B3A] tracking-tight leading-[1.12]">
                    Professional Website Design &amp; Development Services for{" "}
                    <span className="text-[#FFB020] bg-gradient-to-r from-[#B87A00] to-[#E68A00] bg-clip-text text-transparent">
                      Growing Businesses
                    </span>
                  </h1>

                  {/* Subheading */}
                  <p className="text-xs sm:text-sm lg:text-base text-slate-700 leading-relaxed max-w-2xl font-medium">
                    Whether you need a brand-new website, a complete redesign, or
                    improvements to your existing website, our team delivers
                    scalable, high-performing digital experiences tailored to your
                    business goals.
                  </p>
                </div>

                {/* Key Selling Points (Compact Inline Grid) */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                    Key Value Capabilities:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-slate-800">
                    <div className="flex items-center gap-2 p-1.5 px-2.5 rounded-xl bg-white/90 border border-[#E2DBD0] shadow-2xs backdrop-blur-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB020] shrink-0" />
                      <span className="truncate">Custom Website Design &amp; Development</span>
                    </div>
                    <div className="flex items-center gap-2 p-1.5 px-2.5 rounded-xl bg-white/90 border border-[#E2DBD0] shadow-2xs backdrop-blur-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB020] shrink-0" />
                      <span className="truncate">Website Redesign &amp; Modernization</span>
                    </div>
                    <div className="flex items-center gap-2 p-1.5 px-2.5 rounded-xl bg-white/90 border border-[#E2DBD0] shadow-2xs backdrop-blur-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB020] shrink-0" />
                      <span className="truncate">CMS &amp; E-commerce Development</span>
                    </div>
                    <div className="flex items-center gap-2 p-1.5 px-2.5 rounded-xl bg-white/90 border border-[#E2DBD0] shadow-2xs backdrop-blur-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB020] shrink-0" />
                      <span className="truncate">Performance, Speed &amp; Mobile Optimization</span>
                    </div>
                    <div className="sm:col-span-2 flex items-center gap-2 p-1.5 px-2.5 rounded-xl bg-white/90 border border-[#E2DBD0] shadow-2xs backdrop-blur-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB020] shrink-0" />
                      <span className="truncate">Dedicated Developers &amp; Flexible Engagement Models</span>
                    </div>
                  </div>
                </div>

                {/* Primary & Secondary CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href="#lead-form"
                    className="btn-luxury-gold btn-shimmer py-3 px-6 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>Get a Free Website Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#pricing-models"
                    className="btn-luxury-navy py-3 px-5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm border border-slate-700"
                  >
                    <span>Request a Project Estimate</span>
                  </a>
                </div>

                {/* Social Proof & Trust Badges */}
                <div className="pt-3 border-t border-[#E2DBD0] flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="font-bold text-[#0B1B3A]">4.9 / 5.0 Rating</span>
                  </div>
                  <span className="text-slate-300 hidden sm:inline">•</span>
                  <div className="flex items-center gap-1.5 font-semibold">
                    <Clock className="w-3.5 h-3.5 text-[#FFB020]" />
                    <span>Realtime US/UK/AU Timezone Shifts</span>
                  </div>
                  <span className="text-slate-300 hidden sm:inline">•</span>
                  <div className="flex items-center gap-1.5 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>100% Code Ownership</span>
                  </div>
                </div>
              </div>

              {/* Right Column (5 cols): Compact High-Converting Lead Form */}
              <div className="lg:col-span-5">
                <WebDesignLeadForm
                  formId="lead-form"
                  sourceTag="Web Design Landing Page - Hero Form"
                  title="Get a Free Website Consultation"
                  subtitle="Fill in your project scope below for an actionable roadmap."
                  variant="light"
                  compact={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* 2. COMPLETE WEBSITE DESIGN & DEVELOPMENT SERVICES               */}
        {/* ================================================================ */}
        <section id="services" className="py-20 bg-white border-y border-[#E2DBD0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFB020]/20 text-[#B87A00] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
                <span>Full-Spectrum Solutions</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-[40px] text-[#0B1B3A] tracking-tight leading-tight">
                Complete Website Solutions to Help Your Business Grow
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Your website is one of your most important business assets. We
                help businesses build, redesign, and optimize websites that
                deliver better user experiences, improve performance, and support
                business growth.
              </p>
            </div>

            {/* Dynamic Services Grid with View More/Less Toggle & Visual Snippets */}
            <WebDesignServicesGrid />
          </div>
        </section>

        {/* ================================================================ */}
        {/* 3. TECHNOLOGIES & PLATFORMS WE WORK WITH                          */}
        {/* ================================================================ */}
        <section id="tech-stack" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#060B22] text-[#FFB020] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
                <Code2 className="w-3.5 h-3.5 text-[#FFB020]" />
                <span>Modern Engineering &amp; Platforms</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-4xl text-[#0B1B3A] tracking-tight">
                Expertise Across Modern Web Technologies &amp; CMS Platforms
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Whether you want to build a website from scratch or improve your
                existing platform, our developers work with a wide range of
                technologies and content management systems.
              </p>
            </div>

            {/* Interactive Architecture & Ecosystem Studio (NO CARDS) */}
            <WebDesignTechStack />
          </div>
        </section>

        {/* ================================================================ */}
        {/* 4. INDUSTRIES WE SERVE                                            */}
        {/* ================================================================ */}
        <section id="industries" className="py-20 bg-white border-y border-[#E2DBD0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFB020]/20 text-[#B87A00] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
                <Building className="w-3.5 h-3.5 text-[#FFB020]" />
                <span>Specialized Domain Experience</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-4xl text-[#0B1B3A] tracking-tight">
                Website Solutions for Businesses Across Industries
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We understand that every industry has different website
                requirements, customer expectations, and business objectives. Our
                team develops tailored website solutions for businesses across
                multiple industries.
              </p>
            </div>

            {/* Dynamic Industries Grid with View More/Less Toggle */}
            <WebDesignIndustriesGrid />
          </div>
        </section>

        {/* ================================================================ */}
        {/* 5. OUR WEBSITE DESIGN & DEVELOPMENT PROCESS                       */}
        {/* ================================================================ */}
        <section id="process" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#060B22] text-[#FFB020] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB020]" />
                <span>Agile &amp; Transparent Delivery</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-4xl text-[#0B1B3A] tracking-tight">
                Our Proven Website Development Process
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We follow a structured development process to ensure every project
                is delivered with quality, transparency, and alignment with your
                business objectives.
              </p>
            </div>

            {/* Interactive Milestone Progression Pipeline (NO CARDS) */}
            <WebDesignProcessStream />
          </div>
        </section>

        {/* ================================================================ */}
        {/* 6. FLEXIBLE PRICING & ENGAGEMENT MODELS                           */}
        {/* ================================================================ */}
        <section
          id="pricing-models"
          className="py-20 bg-white border-y border-[#E2DBD0]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFB020]/20 text-[#B87A00] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
                <DollarSign className="w-3.5 h-3.5 text-[#FFB020]" />
                <span>Zero Lock-Ins · Transparent Pricing</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-4xl text-[#0B1B3A] tracking-tight">
                Flexible Hiring &amp; Pricing Models to Fit Your Budget
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Every website project is different. That's why we offer flexible
                engagement models depending on your project scope, timeline, and
                development requirements.
              </p>
            </div>

            {/* 3 Pricing Models Grid with Elevated Luxury Card UI */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {PRICING_MODELS.map((model) => (
                <div
                  key={model.id}
                  className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                    model.isPopular
                      ? "skeuo-card-dark text-white border-2 border-[#FFB020] shadow-2xl scale-102"
                      : "bg-gradient-to-b from-white via-white to-[#FDFCFB] text-[#0B1B3A] border border-[#E2DBD0] hover:border-[#FFB020]/60 shadow-[0_4px_20px_-4px_rgba(6,11,34,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(6,11,34,0.12)] hover:-translate-y-1"
                  }`}
                >
                  {model.isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 rounded-full bg-[#FFB020] text-[#060B22] text-[10px] font-black uppercase tracking-wider shadow-md">
                        {model.badge}
                      </span>
                    </div>
                  )}

                  <div className="space-y-6">
                    <div className="space-y-1.5 text-left">
                      <div
                        className={`text-xs font-black uppercase tracking-wider ${
                          model.isPopular ? "text-[#FFB020]" : "text-[#B87A00]"
                        }`}
                      >
                        {model.subtitle}
                      </div>
                      <h3
                        className={`font-display font-black text-2xl tracking-tight ${
                          model.isPopular ? "text-white" : "text-[#0B1B3A]"
                        }`}
                      >
                        {model.title}
                      </h3>
                      <div
                        className={`font-display font-black text-2xl sm:text-3xl pt-2 ${
                          model.isPopular ? "text-[#FFB020]" : "text-[#0B1B3A]"
                        }`}
                      >
                        {model.priceTag}
                      </div>
                    </div>

                    <p
                      className={`text-xs leading-relaxed ${
                        model.isPopular ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {model.description}
                    </p>

                    <div
                      className={`p-3 rounded-xl text-xs font-bold ${
                        model.isPopular
                          ? "bg-white/10 text-white"
                          : "bg-slate-50 text-slate-800 border border-[#E2DBD0]"
                      }`}
                    >
                      <span>Best for: </span>
                      <span className="font-normal">{model.idealFor}</span>
                    </div>

                    <div className="space-y-2.5 pt-2">
                      <div
                        className={`text-xs font-black uppercase tracking-wider ${
                          model.isPopular ? "text-slate-300" : "text-slate-700"
                        }`}
                      >
                        What's Included:
                      </div>
                      <ul className="space-y-2 text-xs">
                        {model.features.map((feat, i) => (
                          <li
                            key={i}
                            className={`flex items-start gap-2 leading-snug ${
                              model.isPopular ? "text-slate-200" : "text-slate-700"
                            }`}
                          >
                            <CheckCircle2
                              className={`w-4 h-4 shrink-0 mt-0.5 ${
                                model.isPopular ? "text-[#FFB020]" : "text-[#B87A00]"
                              }`}
                            />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8">
                    <a
                      href={model.ctaHref}
                      className={`w-full py-3.5 px-6 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer ${
                        model.isPopular
                          ? "btn-luxury-gold btn-shimmer"
                          : "btn-luxury-navy"
                      }`}
                    >
                      <span>{model.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* 7. OUR WORK / CASE STUDIES                                        */}
        {/* ================================================================ */}
        <section id="work" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#060B22] text-[#FFB020] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
                <Laptop className="w-3.5 h-3.5 text-[#FFB020]" />
                <span>Verified Client Outcomes</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-4xl text-[#0B1B3A] tracking-tight">
                Websites We've Designed &amp; Developed
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Explore how we help businesses transform their digital presence
                through strategic design, modern development, and performance-focused
                website solutions.
              </p>
            </div>

            <WebDesignCaseStudies />
          </div>
        </section>

        {/* ================================================================ */}
        {/* 8. WHY CHOOSE HIRE DESI MARKETER?                                 */}
        {/* ================================================================ */}
        <section
          id="why-choose-us"
          className="py-20 bg-white border-y border-[#E2DBD0]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFB020]/20 text-[#B87A00] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FFB020]" />
                <span>Key Differentiators</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-4xl text-[#0B1B3A] tracking-tight">
                Your Reliable Partner for Website Design &amp; Development
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We combine top-tier Indian engineering talent with strict Western
                accountability, delivering high-performance websites at a fraction
                of local agency costs.
              </p>
            </div>

            {/* 8 Differentiators Grid with Elevated Card UI */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {DIFFERENTIATORS.map((diff, i) => (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-gradient-to-b from-white via-white to-[#FDFCFB] border border-[#E2DBD0] hover:border-[#FFB020]/60 shadow-[0_4px_18px_-4px_rgba(6,11,34,0.05)] hover:shadow-[0_12px_28px_-6px_rgba(6,11,34,0.1)] hover:-translate-y-1 transition-all duration-300 space-y-3.5 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#060B22] text-[#FFB020] flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:bg-[#FFB020] group-hover:text-[#060B22] transition-all duration-300">
                      {differentiatorIcons[diff.icon] || <CheckCircle2 className="w-5 h-5" />}
                    </div>

                    <h3 className="font-display font-black text-base text-[#0B1B3A] leading-snug group-hover:text-[#B87A00] transition-colors">
                      {diff.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {diff.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#E2DBD0] text-[11px] font-black uppercase tracking-wider text-[#B87A00]">
                    {diff.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* 9. FINAL CTA SECTION WITH LEAD FORM                               */}
        {/* ================================================================ */}
        <section id="final-cta" className="py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl skeuo-card-dark text-white p-8 sm:p-14 border border-white/15 shadow-2xl relative overflow-hidden">
              {/* Background Ambient Glows */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB020]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
                {/* Left Column: Headline, Subheading, Supporting Text */}
                <div className="lg:col-span-6 space-y-6 text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-black uppercase tracking-wider border border-white/15 shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
                    <span>Get Started Today</span>
                  </div>

                  <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-[1.1]">
                    Ready to Build, Redesign or Upgrade Your Website?
                  </h2>

                  <p className="text-base text-slate-300 leading-relaxed">
                    Let's turn your website ideas into reality. Whether you're
                    starting from scratch, improving an existing website, or
                    looking for dedicated development support, our team is ready to
                    help.
                  </p>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <div className="text-xs font-bold text-[#FFB020] uppercase tracking-wider">
                      What Happens Next?
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Tell us about your project, and our team will get back to you
                      to discuss the right solution, provide a live wireframe
                      preview, and deliver a transparent fixed-cost or hourly
                      estimate.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Response in &lt; 24h</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Zero Obligation Consultation</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>NDA Confidentiality</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Final Lead Form */}
                <div className="lg:col-span-6">
                  <WebDesignLeadForm
                    formId="final-lead-form"
                    sourceTag="Web Design Landing Page - Final CTA Form"
                    title="Start Your Free Website Consultation"
                    subtitle="Share your requirements & our technical architects will prepare your scope."
                    variant="light"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* 10. FAQ SECTION                                                   */}
        {/* ================================================================ */}
        <section id="faq" className="py-20 bg-white border-t border-[#E2DBD0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <WebDesignFaqAccordion faqs={WEB_FAQS} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
