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
import { WebDesignHero } from "@/components/web-design/WebDesignHero";
import { WebDesignLeadForm } from "@/components/web-design/WebDesignLeadForm";
import BentoGrid from "@/components/blocks/bento-grid";
import { WebDesignServicesGrid } from "@/components/web-design/WebDesignServicesGrid";
import { MarketingWebsiteSynergy } from "@/components/web-design/MarketingWebsiteSynergy";
import { WebDesignTechStack } from "@/components/web-design/WebDesignTechStack";
import { WebDesignIndustriesGrid } from "@/components/web-design/WebDesignIndustriesGrid";
import { WebDesignProcessStream } from "@/components/web-design/WebDesignProcessStream";
import { WebDesignCaseStudies } from "@/components/web-design/WebDesignCaseStudies";
import { WebDesignEngagementModels } from "@/components/web-design/WebDesignEngagementModels";
import { WebDesignWhyChooseUs } from "@/components/web-design/WebDesignWhyChooseUs";
import { WebDesignTeamShowcase } from "@/components/web-design/WebDesignTeamShowcase";
import { WebDesignFaqAccordion } from "@/components/web-design/WebDesignFaqAccordion";
import {
  WEB_SERVICES,
  WEB_INDUSTRIES,
  WEB_FAQS,
} from "@/data/web-design-services";

export const metadata: Metadata = {
  title: "Professional Web Design & Development Services | Hire Desi Marketer",
  description:
    "Professional website design and development services for growing businesses worldwide across key industries. Custom websites, redesigns, e-commerce, and dedicated developers.",
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
      "Scalable, high-performing websites and digital experiences tailored to your business goals and industry requirements.",
    url: "https://www.hiredesimarketer.com/web-design-and-development-services",
    siteName: "Hire Desi Marketer",
    locale: "en_US",
    type: "website",
  },
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
    <div suppressHydrationWarning className="flex flex-col min-h-screen bg-[#060B22] text-[#0B1B3A] w-full max-w-full overflow-x-clip">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <Header />

      <main className="flex-1 pt-0 pb-12 w-full max-w-full overflow-x-clip">
        {/* ================================================================ */}
        {/* 1. HERO SECTION – HIGH-CONVERTING BESPOKE AGENCY ARCHITECTURE     */}
        {/* ================================================================ */}
        <WebDesignHero />

        {/* ================================================================ */}
        {/* 2. COMPLETE WEBSITE DESIGN & DEVELOPMENT SERVICES               */}
        {/* ================================================================ */}
        <section
          id="services"
          className="py-10 sm:py-14 lg:py-18 bg-[#060B22] text-white border-y border-[#FFB020]/20 relative overflow-hidden"
        >
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto space-y-3 pb-6 border-b border-white/10">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-[#FFB020] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
                <span>01 · Bespoke Digital Architecture</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                Complete Website Solutions Built to Grow Your Business.
              </h2>
              <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
                Bespoke Figma UI/UX design, modern full-stack engineering, and conversion rate optimization.
              </p>
            </div>

            {/* React Bits Bento Grid Architecture */}
            <BentoGrid />
          </div>
        </section>

        {/* ================================================================ */}
        {/* 3. THE MARKETING + WEBSITE RELATIONSHIP                           */}
        {/* ================================================================ */}
        <MarketingWebsiteSynergy />

        {/* ================================================================ */}
        {/* 4. TECHNOLOGIES & PLATFORMS WE WORK WITH                          */}
        {/* ================================================================ */}
        <section id="tech-stack" className="py-8 sm:py-12 lg:py-16 bg-[#FAF8F5] scroll-mt-24 sm:scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3 pb-6 border-b border-[#E2DBD0]">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#060B22] text-[#FFB020] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
                <Cpu className="w-3.5 h-3.5 text-[#FFB020]" />
                <span>02 · Modern Frameworks &amp; CMS Architecture</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0B1B3A] tracking-tight leading-tight">
                Battle-Tested Frameworks &amp; Modern CMS Architecture.
              </h2>
              <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
                Whether you require a headless Next.js web application or a flexible Shopify / WordPress build, we architect for sub-second speeds and zero technical debt.
              </p>
            </div>

            {/* Interactive Architecture & Ecosystem Studio */}
            <WebDesignTechStack />
          </div>
        </section>

        {/* ================================================================ */}
        {/* 5. INDUSTRIES WE SERVE                                            */}
        {/* ================================================================ */}
        <section id="industries" className="py-8 sm:py-12 lg:py-16 bg-white border-y border-[#E2DBD0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-2.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFB020]/20 text-[#B87A00] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
                <Building className="w-3.5 h-3.5 text-[#FFB020]" />
                <span>03 · Specialized Domain Blueprints</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0B1B3A] tracking-tight">
                Tailored Digital Experiences Across Key Sectors
              </h2>
              <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
                We engineer industry-specific user journeys—from HIPAA-compliant patient booking to sub-second headless e-commerce checkouts.
              </p>
            </div>

            {/* Dynamic Industries Grid with Sector Website Mockup Thumbnails */}
            <WebDesignIndustriesGrid />
          </div>
        </section>

        {/* ================================================================ */}
        {/* 6. OUR WEBSITE DESIGN & DEVELOPMENT PROCESS                       */}
        {/* ================================================================ */}
        <section id="process" className="py-8 sm:py-12 lg:py-16 bg-[#FAF8F5] border-t border-[#E2DBD0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3 pb-6 border-b border-[#E2DBD0]">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#060B22] text-[#FFB020] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB020]" />
                <span>04 · Disciplined Agile Delivery</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0B1B3A] tracking-tight leading-tight">
                From Discovery to High-Impact Launch in 7 Predictable Sprints.
              </h2>
              <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
                Zero black-box development. Follow real-time staging builds, Loom video walkthroughs, and weekly milestone demos.
              </p>
            </div>

            {/* Interactive Milestone Progression Pipeline */}
            <WebDesignProcessStream />
          </div>
        </section>

        {/* ================================================================ */}
        {/* 7. FLEXIBLE ENGAGEMENT MODELS (ZERO PRICING)                     */}
        {/* ================================================================ */}
        <section
          id="engagement-models"
          className="py-8 sm:py-12 lg:py-16 bg-[#060B22] text-white border-y border-[#FFB020]/20 scroll-mt-24 sm:scroll-mt-28 relative overflow-hidden"
        >
          {/* Subtle ambient luxury gold/navy background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FFB020]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto space-y-2.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#FFB020] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
                <Layers className="w-3.5 h-3.5 text-[#FFB020]" />
                <span>05 · Collaboration Framework</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                Flexible Engagement Models Built for Scope Certainty
              </h2>
              <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
                Choose the collaboration structure that best fits your goals, bandwidth, and development roadmap. Zero long-term lock-in.
              </p>
            </div>

            {/* Interactive 3-Card PixelCard Grid */}
            <WebDesignEngagementModels />
          </div>
        </section>

        {/* ================================================================ */}
        {/* 8. WEBSITE INSPIRATION & LIVE DESIGN REFERENCES                  */}
        {/* ================================================================ */}
        <section id="work" className="py-8 sm:py-12 lg:py-16 bg-[#FAF8F5] scroll-mt-24 sm:scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3 pb-6 border-b border-[#E2DBD0]">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#060B22] text-[#FFB020] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
                <Laptop className="w-3.5 h-3.5 text-[#FFB020]" />
                <span>06 · Design Craft &amp; References</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0B1B3A] tracking-tight leading-tight">
                Website Inspirations &amp; Verified Production Benchmarks.
              </h2>
              <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
                Explore live digital benchmarks across healthcare, e-commerce, high-growth SaaS, and enterprise consulting that inspire our engineering standards.
              </p>
            </div>

            <WebDesignCaseStudies />
          </div>
        </section>

        {/* ================================================================ */}
        {/* 9. THE 4 ARCHITECTURAL PILLARS (SINGLE-WINDOW REAL PILLARS)       */}
        {/* ================================================================ */}
        <section
          id="why-choose-us"
          className="py-5 sm:py-7 lg:py-8 bg-[#FAF8F5] border-y border-[#E2DBD0] scroll-mt-24 sm:scroll-mt-28"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <WebDesignWhyChooseUs />
          </div>
        </section>

        {/* ================================================================ */}
        {/* 10. AUTHENTIC IN-HOUSE CAMPUS & LEADERSHIP SHOWCASE              */}
        {/* ================================================================ */}
        <section
          id="campus-showcase"
          className="py-8 sm:py-12 bg-white border-b border-[#E2DBD0]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <WebDesignTeamShowcase />
          </div>
        </section>

        {/* ================================================================ */}
        {/* 9. FINAL CTA SECTION WITH DUAL PANE LEAD FORM & TEAM ASSURANCE   */}
        {/* ================================================================ */}
        <section id="lead-form" className="py-8 sm:py-14 lg:py-16 bg-[#FAF8F5] relative overflow-hidden scroll-mt-20 sm:scroll-mt-24">
          <div id="final-cta" className="sr-only" />
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
        {/* 11. FAQ SECTION                                                  */}
        {/* ================================================================ */}
        <section id="faq" className="py-8 sm:py-12 lg:py-16 bg-white border-t border-[#E2DBD0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <WebDesignFaqAccordion faqs={WEB_FAQS} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
