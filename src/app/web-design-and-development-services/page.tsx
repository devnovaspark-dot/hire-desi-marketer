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
  Lock,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WebDesignLeadForm } from "@/components/web-design/WebDesignLeadForm";
import { WebDesignServicesGrid } from "@/components/web-design/WebDesignServicesGrid";
import { WebDesignTechStack } from "@/components/web-design/WebDesignTechStack";
import { WebDesignIndustriesGrid } from "@/components/web-design/WebDesignIndustriesGrid";
import { WebDesignProcessStream } from "@/components/web-design/WebDesignProcessStream";
import { WebDesignCaseStudies } from "@/components/web-design/WebDesignCaseStudies";
import { WebDesignTeamShowcase } from "@/components/web-design/WebDesignTeamShowcase";
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
    <div className="flex flex-col min-h-screen bg-[#F6F4EE] text-[#0B1B3A] w-full max-w-full overflow-x-clip">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <Header />

      <main className="flex-1 pt-18 sm:pt-22 pb-12 w-full max-w-full overflow-x-clip">
        {/* ================================================================ */}
        {/* 1. HERO SECTION – HIGH-CONVERTING BESPOKE AGENCY ARCHITECTURE     */}
        {/* ================================================================ */}
        <section className="relative overflow-hidden py-4 sm:py-8 lg:py-10 bg-[#F6F4EE]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              {/* Left Column (7 cols): Target Markets, Headline, Subtitle, 4 High-Impact Badges, CTAs, Social Proof */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
                {/* Target Markets Banner with Live Timezone Status */}
                <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#060B22] text-white text-[11px] font-bold border border-white/10 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[#FFB020] font-black uppercase tracking-wider text-[10px]">
                    Target Markets:
                  </span>
                  <span className="text-slate-200">
                    🇺🇸 USA · 🇨🇦 Canada · 🇬🇧 UK · 🇦🇺 Australia
                  </span>
                  <span className="hidden sm:inline text-white/30">|</span>
                  <span className="hidden sm:inline-flex items-center gap-1 text-emerald-400 font-semibold text-[10px]">
                    Live Timezone Overlap
                  </span>
                </div>

                {/* Main Headline with Luxury Gradient Highlights */}
                <div className="space-y-2">
                  <h1 className="font-display font-black text-2xl sm:text-4xl lg:text-[40px] xl:text-[44px] text-[#0B1B3A] tracking-tight leading-[1.12]">
                    Professional Website Design &amp; Development for{" "}
                    <span className="relative inline-block">
                      <span className="relative z-10 bg-gradient-to-r from-[#B87A00] via-[#E68A00] to-[#FFB020] bg-clip-text text-transparent">
                        Growing Businesses
                      </span>
                      <span className="absolute bottom-1 left-0 right-0 h-2.5 bg-[#FFB020]/20 -rotate-1 rounded-sm -z-0" />
                    </span>
                  </h1>

                  {/* Subheading */}
                  <p className="text-xs sm:text-sm lg:text-base text-slate-700 leading-relaxed max-w-2xl font-medium">
                    Whether you need a brand-new website, a complete modern redesign, or continuous dedicated development, our engineers deliver scalable, high-converting digital platforms tailored to your revenue goals.
                  </p>
                </div>

                {/* Key Selling Points (4 High-Impact Visual Badges in 2x2 grid) */}
                <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                  <div className="flex items-start sm:items-center gap-2 sm:gap-2.5 p-2 sm:px-3 rounded-xl bg-white/95 border border-[#E2DBD0] shadow-2xs hover:border-[#FFB020]/50 transition-colors">
                    <div className="w-6 h-6 rounded-lg bg-[#FFB020]/20 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                      <Palette className="w-3.5 h-3.5 text-[#B87A00]" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-bold text-slate-800 block text-[11px] sm:text-xs leading-tight truncate">Custom UI/UX &amp; Dev</span>
                      <span className="text-[9px] sm:text-[10px] text-slate-500 block truncate">Bespoke wireframes</span>
                    </div>
                  </div>
                  <div className="flex items-start sm:items-center gap-2 sm:gap-2.5 p-2 sm:px-3 rounded-xl bg-white/95 border border-[#E2DBD0] shadow-2xs hover:border-[#FFB020]/50 transition-colors">
                    <div className="w-6 h-6 rounded-lg bg-[#FFB020]/20 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                      <RefreshCw className="w-3.5 h-3.5 text-[#B87A00]" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-bold text-slate-800 block text-[11px] sm:text-xs leading-tight truncate">Redesign &amp; Speed</span>
                      <span className="text-[9px] sm:text-[10px] text-slate-500 block truncate">Core Web Vitals 90+</span>
                    </div>
                  </div>
                  <div className="flex items-start sm:items-center gap-2 sm:gap-2.5 p-2 sm:px-3 rounded-xl bg-white/95 border border-[#E2DBD0] shadow-2xs hover:border-[#FFB020]/50 transition-colors">
                    <div className="w-6 h-6 rounded-lg bg-[#FFB020]/20 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                      <ShoppingBag className="w-3.5 h-3.5 text-[#B87A00]" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-bold text-slate-800 block text-[11px] sm:text-xs leading-tight truncate">CMS &amp; E-Commerce</span>
                      <span className="text-[9px] sm:text-[10px] text-slate-500 block truncate">Shopify, WP &amp; Headless</span>
                    </div>
                  </div>
                  <div className="flex items-start sm:items-center gap-2 sm:gap-2.5 p-2 sm:px-3 rounded-xl bg-white/95 border border-[#E2DBD0] shadow-2xs hover:border-[#FFB020]/50 transition-colors">
                    <div className="w-6 h-6 rounded-lg bg-[#FFB020]/20 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                      <Users className="w-3.5 h-3.5 text-[#B87A00]" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-bold text-slate-800 block text-[11px] sm:text-xs leading-tight truncate">Dedicated Dev Squad</span>
                      <span className="text-[9px] sm:text-[10px] text-slate-500 block truncate">Fixed milestones</span>
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
        <section id="services" className="py-10 sm:py-14 lg:py-16 bg-white border-y border-[#E2DBD0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
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

            {/* Dynamic Services Grid with Dedicated Browser Preview Windows */}
            <WebDesignServicesGrid />
          </div>
        </section>

        {/* ================================================================ */}
        {/* 3. TECHNOLOGIES & PLATFORMS WE WORK WITH                          */}
        {/* ================================================================ */}
        <section id="tech-stack" className="py-10 sm:py-14 lg:py-16 scroll-mt-24 sm:scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
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

            {/* Interactive Architecture & Ecosystem Studio */}
            <WebDesignTechStack />
          </div>
        </section>

        {/* ================================================================ */}
        {/* 4. INDUSTRIES WE SERVE                                            */}
        {/* ================================================================ */}
        <section id="industries" className="py-10 sm:py-14 lg:py-16 bg-white border-y border-[#E2DBD0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
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

            {/* Dynamic Industries Grid with Sector Website Mockup Thumbnails */}
            <WebDesignIndustriesGrid />
          </div>
        </section>

        {/* ================================================================ */}
        {/* 5. OUR WEBSITE DESIGN & DEVELOPMENT PROCESS                       */}
        {/* ================================================================ */}
        <section id="process" className="py-10 sm:py-14 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
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

            {/* Interactive Milestone Progression Pipeline */}
            <WebDesignProcessStream />
          </div>
        </section>

        {/* ================================================================ */}
        {/* 6. FLEXIBLE PRICING & ENGAGEMENT MODELS                           */}
        {/* ================================================================ */}
        <section
          id="pricing-models"
          className="py-10 sm:py-14 lg:py-16 bg-white border-y border-[#E2DBD0]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
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

            {/* 3 Pricing Models Grid with Pixel-Perfect Alignment */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              {PRICING_MODELS.map((model) => (
                <div
                  key={model.id}
                  className={`rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col justify-between transition-all duration-300 relative h-full ${
                    model.isPopular
                      ? "skeuo-card-dark text-white border-2 border-[#FFB020] shadow-xl ring-4 ring-[#FFB020]/15"
                      : "bg-white text-[#0B1B3A] border border-[#E2DBD0] hover:border-[#FFB020]/60 shadow-[0_4px_20px_-4px_rgba(6,11,34,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(6,11,34,0.12)] hover:-translate-y-1"
                  }`}
                >
                  {/* Top Badge Row */}
                  <div className="h-7 mb-3 flex items-center">
                    {model.isPopular ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFB020] text-[#060B22] text-[10px] font-black uppercase tracking-wider shadow-sm">
                        <Sparkles className="w-3 h-3" />
                        <span>{model.badge}</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider border border-slate-200">
                        {model.badge}
                      </span>
                    )}
                  </div>

                  <div className="space-y-5 flex-1 flex flex-col">
                    {/* Header */}
                    <div className="space-y-1 text-left min-h-[110px] flex flex-col justify-between">
                      <div
                        className={`text-xs font-black uppercase tracking-wider ${
                          model.isPopular ? "text-[#FFB020]" : "text-[#B87A00]"
                        }`}
                      >
                        {model.subtitle}
                      </div>
                      <h3
                        className={`font-display font-black text-2xl tracking-tight leading-snug line-clamp-2 min-h-[3.5rem] flex items-center ${
                          model.isPopular ? "text-white" : "text-[#0B1B3A]"
                        }`}
                      >
                        {model.title}
                      </h3>
                      <div
                        className={`font-display font-black text-2xl sm:text-3xl pt-1 ${
                          model.isPopular ? "text-[#FFB020]" : "text-[#0B1B3A]"
                        }`}
                      >
                        {model.priceTag}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="min-h-[52px] flex items-start">
                      <p
                        className={`text-xs leading-relaxed ${
                          model.isPopular ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        {model.description}
                      </p>
                    </div>

                    {/* Best for box */}
                    <div
                      className={`p-3 rounded-xl text-xs font-bold min-h-[58px] flex items-center ${
                        model.isPopular
                          ? "bg-white/10 text-white"
                          : "bg-slate-50 text-slate-800 border border-[#E2DBD0]"
                      }`}
                    >
                      <div>
                        <span>Best for: </span>
                        <span className="font-normal">{model.idealFor}</span>
                      </div>
                    </div>

                    {/* Features list */}
                    <div className="space-y-2.5 pt-2 flex-1 flex flex-col">
                      <div
                        className={`text-xs font-black uppercase tracking-wider ${
                          model.isPopular ? "text-slate-300" : "text-slate-700"
                        }`}
                      >
                        What's Included:
                      </div>
                      <ul className="space-y-2 text-xs flex-1">
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

                  {/* Bottom Button */}
                  <div className="pt-6 mt-auto">
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
        {/* 7. OUR WORK / CASE STUDIES (DUAL-DEVICE RESPONSIVE SHOWCASE)      */}
        {/* ================================================================ */}
        <section id="work" className="py-10 sm:py-14 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
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
        {/* 8. WHY CHOOSE HIRE DESI MARKETER? (CAMPUS & TEAM SHOWCASE)        */}
        {/* ================================================================ */}
        <section
          id="why-choose-us"
          className="py-10 sm:py-14 lg:py-16 bg-white border-y border-[#E2DBD0]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFB020]/20 text-[#B87A00] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FFB020]" />
                <span>Key Differentiators &amp; Verified Infrastructure</span>
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

            {/* Authentic Engineering Campus Photo & Leadership Team Showcase */}
            <WebDesignTeamShowcase />

            {/* 8 Differentiators Grid with Elevated Card UI (Compact 2-col on mobile) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 pt-2 sm:pt-4">
              {DIFFERENTIATORS.map((diff, i) => (
                <div
                  key={i}
                  className="p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-[#E2DBD0] hover:border-[#FFB020] shadow-[0_4px_18px_-4px_rgba(6,11,34,0.04)] hover:shadow-[0_14px_30px_-6px_rgba(255,176,32,0.12)] hover:-translate-y-1 transition-all duration-300 space-y-3 sm:space-y-4 flex flex-col justify-between group relative overflow-hidden text-left"
                >
                  {/* Decorative Number Watermark in Background Corner */}
                  <span className="absolute top-2 right-2.5 sm:top-3 sm:right-4 font-display font-black text-xl sm:text-3xl text-slate-100 group-hover:text-[#FFB020]/15 transition-colors select-none pointer-events-none">
                    0{i + 1}
                  </span>

                  {/* Top Glow Accent Bar */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-[#FFB020] transition-all duration-300" />

                  <div className="space-y-2 sm:space-y-3 relative z-10">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#060B22] text-[#FFB020] border border-[#FFB020]/25 flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:bg-[#FFB020] group-hover:text-[#060B22] transition-all duration-300">
                      {differentiatorIcons[diff.icon] || <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />}
                    </div>

                    <h3 className="font-display font-black text-xs sm:text-base text-[#0B1B3A] leading-snug group-hover:text-[#B87A00] transition-colors line-clamp-2">
                      {diff.title}
                    </h3>

                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed line-clamp-3 sm:line-clamp-none">
                      {diff.description}
                    </p>
                  </div>

                  <div className="pt-2 sm:pt-3 border-t border-slate-100 flex items-center justify-between relative z-10">
                    <span className="hidden sm:inline text-[10px] font-black uppercase tracking-wider text-slate-400">
                      Verified Standard
                    </span>
                    <span className="px-1.5 sm:px-2.5 py-0.5 rounded-full bg-[#FFB020]/15 text-[#B87A00] font-black text-[9px] sm:text-[11px] border border-[#FFB020]/25 truncate">
                      {diff.metric}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* 9. FINAL CTA SECTION WITH LEAD FORM & TEAM ASSURANCE             */}
        {/* ================================================================ */}
        <section id="final-cta" className="py-8 sm:py-14 lg:py-16 relative overflow-hidden scroll-mt-24 sm:scroll-mt-28">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="rounded-2xl sm:rounded-3xl skeuo-card-dark text-white p-3.5 sm:p-8 lg:p-12 border border-white/15 shadow-2xl relative overflow-hidden">
              {/* Background Ambient Glows */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB020]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-center relative z-10">
                {/* Left Column: Headline, Subheading, Team Avatar Stack */}
                <div className="lg:col-span-6 space-y-3.5 sm:space-y-6 text-left">
                  <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/10 text-slate-200 text-[10px] sm:text-xs font-black uppercase tracking-wider border border-white/15 shadow-xs">
                    <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFB020]" />
                    <span>Get Started Today</span>
                  </div>

                  <h2 className="font-display font-black text-xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-[1.15]">
                    Ready to Build, Redesign or Upgrade Your Website?
                  </h2>

                  <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
                    Let's turn your website ideas into reality. Whether you're
                    starting from scratch, improving an existing website, or
                    looking for dedicated development support, our team is ready to
                    help.
                  </p>

                  {/* Team Avatars & Direct Architect Access */}
                  <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 sm:gap-4">
                    <div className="flex -space-x-2.5 sm:-space-x-3 overflow-hidden shrink-0">
                      <div className="inline-block h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-2 ring-[#060B22] overflow-hidden relative">
                        <Image
                          src="/images/team-sankarsan.webp"
                          alt="Sankarsan Nayak"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="inline-block h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-2 ring-[#060B22] overflow-hidden relative">
                        <Image
                          src="/images/team-pranjal.webp"
                          alt="Pranjal Sharma"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="inline-block h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-2 ring-[#060B22] overflow-hidden relative">
                        <Image
                          src="/images/team-bikram.webp"
                          alt="Bikram Keshari Sahu"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] sm:text-xs font-bold text-white leading-tight">
                        Direct Access to Senior Web Architects
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-[#FFB020] font-semibold mt-0.5">
                        Free scoping roadmap &amp; fixed milestone quotation
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 pt-1 text-[11px] sm:text-xs text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                      <span>Response in &lt; 24h</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                      <span>Zero Obligation</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                      <span>Strict NDA</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Final Lead Form (Compact, 2-Col Mobile, Zero Crop) */}
                <div className="lg:col-span-6 scroll-mt-24 sm:scroll-mt-28">
                  <WebDesignLeadForm
                    formId="final-lead-form"
                    sourceTag="Web Design Landing Page - Final CTA Form"
                    title="Start Your Free Consultation"
                    subtitle="Share your requirements & our technical architects will prepare your scope."
                    variant="light"
                    compact={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* 10. FAQ SECTION                                                   */}
        {/* ================================================================ */}
        <section id="faq" className="py-10 sm:py-14 lg:py-16 bg-white border-t border-[#E2DBD0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <WebDesignFaqAccordion faqs={WEB_FAQS} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
