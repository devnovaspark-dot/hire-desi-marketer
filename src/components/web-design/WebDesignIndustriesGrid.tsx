"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Stethoscope,
  ShoppingBag,
  Cpu,
  Home,
  Briefcase,
  GraduationCap,
  ShieldCheck,
  Plane,
  Factory,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import StarBorder from "@/components/ui/StarBorder";
import FlexCarousel, {
  FlexCarouselHandle,
  CarouselItem,
} from "@/components/ui/FlexCarousel";

interface SectorItem {
  id: string;
  shortLabel: string;
  name: string;
  icon: React.ReactNode;
  previewImage: string;
  previewUrl: string;
  categoryTag: string;
  metric: string;
  complianceSla: string;
  headline: string;
  description: string;
  keyFeatures: string[];
  moreFeatures?: string[];
}

const SECTORS: SectorItem[] = [
  {
    id: "healthcare",
    shortLabel: "Healthcare",
    name: "Healthcare & Medical",
    icon: <Stethoscope className="w-4 h-4" />,
    previewImage: "/images/ref-onemedical.jpg",
    previewUrl: "onemedical.com/patient-portal",
    categoryTag: "HIPAA-Ready & Accessible",
    metric: "+140% Online Bookings",
    complianceSla: "HIPAA & ADA WCAG 2.1 Compliant",
    headline: "Patient-First Portals & Frictionless Scheduling",
    description:
      "HIPAA-compliant clinic websites and patient portals featuring real-time doctor scheduling, encrypted intake forms, and sub-second mobile speed.",
    keyFeatures: [
      "Real-Time Doctor Scheduling Engine",
      "HIPAA-Encrypted Patient Intake Forms",
      "EHR & Google Calendar Two-Way Sync",
    ],
    moreFeatures: [
      "Automated SMS Appointment Reminders",
      "Telehealth Virtual Waiting Room Embed",
      "Insurance Eligibility Pre-Check Funnel",
    ],
  },
  {
    id: "ecommerce",
    shortLabel: "E-Commerce",
    name: "E-Commerce & DTC",
    icon: <ShoppingBag className="w-4 h-4" />,
    previewImage: "/images/ref-allbirds.jpg",
    previewUrl: "allbirds.com/storefront",
    categoryTag: "Shopify Plus & Headless",
    metric: "4.6% Avg. Checkout Conv.",
    complianceSla: "PCI-DSS Level 1 & SOC-2",
    headline: "High-Speed Storefronts Built for Maximum AOV",
    description:
      "Custom Shopify Plus and headless storefronts with sub-second catalog browsing, slide-out carts with free shipping bars, and 1-tap checkout.",
    keyFeatures: [
      "Sub-Second Edge Product Catalog Pages",
      "Instant Slide-Out Micro-Cart with Upsells",
      "1-Tap Apple Pay, Shop Pay & Stripe Checkout",
    ],
    moreFeatures: [
      "Dynamic Multi-Currency Geolocation",
      "Automated ERP & Inventory Webhook Sync",
      "Klaviyo Abandoned Cart API Triggers",
    ],
  },
  {
    id: "saas",
    shortLabel: "SaaS & Cloud",
    name: "IT, SaaS & Cloud",
    icon: <Cpu className="w-4 h-4" />,
    previewImage: "/images/ref-linear.jpg",
    previewUrl: "linear.app/craft",
    categoryTag: "Modern Developer UI",
    metric: "3.8x Free-to-Paid Lift",
    complianceSla: "SOC-2 Type II & GDPR Ready",
    headline: "Product Marketing Sites & Developer Hubs",
    description:
      "Dark-mode-native product websites with interactive UI feature tours, live code snippets, interactive pricing sliders, and 60-second sign-up flows.",
    keyFeatures: [
      "Interactive Product Demo Walkthroughs",
      "Dynamic Tiered Pricing Calculators",
      "Fast 60s Developer Onboarding Funnels",
    ],
    moreFeatures: [
      "Automated GitHub & Figma Asset Sync",
      "Self-Serve Team Seat Expansion Flows",
      "Interactive API Documentation Playground",
    ],
  },
  {
    id: "realestate",
    shortLabel: "Real Estate",
    name: "Real Estate & Property",
    icon: <Home className="w-4 h-4" />,
    previewImage: "/images/journal-desk-hero.webp",
    previewUrl: "luxuryestates.hdm.preview/listings",
    categoryTag: "MLS / IDX Integration",
    metric: "3.2x Buyer Inquiries",
    complianceSla: "RETS / RESO Web API Certified",
    headline: "Luxury Brokerage & Commercial Portals",
    description:
      "High-end property portals featuring automated MLS/IDX synchronization, interactive neighborhood map discovery, virtual 3D tour embeds, and private viewing schedulers.",
    keyFeatures: [
      "Automated RETS/RESO MLS/IDX Sync",
      "Interactive Neighborhood Map Search",
      "VIP Private Viewing Concierge Scheduler",
    ],
    moreFeatures: [
      "Interactive Mortgage & Tax Calculators",
      "Virtual 3D Matterport Walkthrough Embeds",
      "Automated Buyer Lead Scoring to CRM",
    ],
  },
  {
    id: "professional-services",
    shortLabel: "B2B Advisory",
    name: "Professional Services",
    icon: <Briefcase className="w-4 h-4" />,
    previewImage: "/images/ref-mckinsey.jpg",
    previewUrl: "mckinsey.com/insights",
    categoryTag: "Executive Authority",
    metric: "+180% Qualified RFPs",
    complianceSla: "Enterprise NDA & Bilateral Security",
    headline: "Corporate Authority & High-Ticket Lead Engines",
    description:
      "Editorial corporate presences that convey prestige, showcase proprietary methodologies and case study metrics, and route high-ticket enterprise inquiries.",
    keyFeatures: [
      "Executive Case Study & Methodology Hub",
      "Gated Industry Research & RFP Capture",
      "Direct Senior Partner Calendar Integration",
    ],
    moreFeatures: [
      "Whitepaper PDF Lead Generation Gating",
      "Interactive ROI Assessment Calculators",
      "Account-Based Marketing (ABM) Landers",
    ],
  },
  {
    id: "education",
    shortLabel: "Education",
    name: "Education & Academies",
    icon: <GraduationCap className="w-4 h-4" />,
    previewImage: "/images/blog-hero-bg.webp",
    previewUrl: "academy.hdm.preview/courses",
    categoryTag: "LMS & Video Streaming",
    metric: "68% Course Completion",
    complianceSla: "FERPA & COPPA Educational Compliance",
    headline: "E-Learning Academies & Course Portals",
    description:
      "Interactive LMS platforms featuring structured curriculum directories, video streaming CDN integrations, student dashboards, and frictionless enrollment funnels.",
    keyFeatures: [
      "Interactive Syllabus & Course Directory",
      "Buffer-Free Video Streaming CDN Player",
      "1-Click Student Enrollment & Payment",
    ],
    moreFeatures: [
      "Student Progress Tracking & Quizzes",
      "Automated PDF Certificate Generation",
      "Cohort Community & Discussion Forum",
    ],
  },
  {
    id: "fintech",
    shortLabel: "Finance & Wealth",
    name: "FinTech & Wealth Advisory",
    icon: <ShieldCheck className="w-4 h-4" />,
    previewImage: "/images/1200_1000px.webp",
    previewUrl: "wealthadvisors.hdm.preview",
    categoryTag: "Bank-Grade Encryption",
    metric: "99.99% Audit Score",
    complianceSla: "FINRA / SEC Regulatory Compliant",
    headline: "Trust-Centric Wealth & Advisory Platforms",
    description:
      "Ultra-secure, regulatory-compliant web portals for asset managers, accounting practices, and fintech startups requiring institutional trust.",
    keyFeatures: [
      "Bank-Grade 256-bit Encrypted Client Portals",
      "Interactive Retirement & Tax Calculators",
      "FINRA/SEC Compliant Archival Logging",
    ],
    moreFeatures: [
      "Secure Document Vault with E-Sign",
      "Biometric Two-Factor Authentication",
      "Real-Time Portfolio Value Telemetry",
    ],
  },
  {
    id: "hospitality",
    shortLabel: "Travel & Hospitality",
    name: "Boutique Hotels & Travel",
    icon: <Plane className="w-4 h-4" />,
    previewImage: "/images/case-study-cafe.webp",
    previewUrl: "luxurytravel.hdm.preview",
    categoryTag: "Direct Booking Engine",
    metric: "+220% Direct Bookings",
    complianceSla: "OTA Direct Sync & Zero Commission",
    headline: "Visual Travel Portals & Direct Booking Engines",
    description:
      "Visual storytelling websites for boutique hotels, resorts, and tour operators with integrated reservation calendars that bypass expensive OTA commissions.",
    keyFeatures: [
      "Direct Commission-Free Reservation Engine",
      "Dynamic Seasonal Pricing & Add-on Upsells",
      "Multi-Language & Multi-Currency Switcher",
    ],
    moreFeatures: [
      "Instagram Live Story Integration",
      "Interactive Local Itinerary Guide",
      "1-Tap WhatsApp Concierge Routing",
    ],
  },
  {
    id: "manufacturing",
    shortLabel: "Industrial",
    name: "Manufacturing & Industrial",
    icon: <Factory className="w-4 h-4" />,
    previewImage: "/images/case-study-roofing.webp",
    previewUrl: "industrial-corp.hdm.preview",
    categoryTag: "B2B RFQ & Spec Catalogs",
    metric: "+165% Wholesale RFQs",
    complianceSla: "ISO 9001 Specification Compliant",
    headline: "B2B Product Catalogs & Bulk RFQ Engines",
    description:
      "Enterprise industrial websites featuring searchable technical spec sheets, CAD file downloads, multi-location distributor locators, and bulk quote builders.",
    keyFeatures: [
      "Searchable Technical Spec & CAD Downloads",
      "Custom Bulk RFQ (Request for Quote) Builder",
      "Global Distributor & Dealer Locator Map",
    ],
    moreFeatures: [
      "ERP Inventory Availability Lookups",
      "Automated Wholesale Tier Pricing",
      "Customer Portal for Re-Order Tracking",
    ],
  },
];

const CAROUSEL_ITEMS: CarouselItem[] = SECTORS.map((s) => ({
  src: s.previewImage,
  alt: `${s.name} specialized domain blueprint`,
  title: s.name,
  subtitle: s.categoryTag,
  id: s.id,
}));

export function WebDesignIndustriesGrid() {
  const [selectedSectorIndex, setSelectedSectorIndex] = useState<number>(0);
  const [showMoreSpecs, setShowMoreSpecs] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<FlexCarouselHandle>(null);
  const autoScrollTimerRef = useRef<NodeJS.Timeout | null>(null);
  const hasAutoScrolledRef = useRef<boolean>(false);

  const activeSector = SECTORS[selectedSectorIndex] || SECTORS[0];

  // Monitor when Section 03 is visible on screen
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Clean up auto-scroll timer on unmount
  useEffect(() => {
    return () => {
      if (autoScrollTimerRef.current) {
        clearTimeout(autoScrollTimerRef.current);
      }
    };
  }, []);

  // Handle carousel index change: When item 9 (index 8) is reached, auto scroll down to Section 04 (#process)
  const handleCarouselChange = (index: number) => {
    setSelectedSectorIndex(index);

    // Index 8 is the 9th sector (09 / 09)
    if (index === SECTORS.length - 1) {
      if (!hasAutoScrolledRef.current) {
        if (autoScrollTimerRef.current) {
          clearTimeout(autoScrollTimerRef.current);
        }
        setIsAutoScrolling(true);
        // Wait 3 seconds on blueprint 9 so the user can inspect it, then smoothly scroll down
        autoScrollTimerRef.current = setTimeout(() => {
          hasAutoScrolledRef.current = true;
          setIsAutoScrolling(false);
          const nextSection = document.getElementById("process");
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
          }
        }, 3000);
      }
    } else {
      if (autoScrollTimerRef.current && !hasAutoScrolledRef.current) {
        clearTimeout(autoScrollTimerRef.current);
        setIsAutoScrolling(false);
      }
    }
  };

  const handleSectorSelect = (index: number) => {
    setSelectedSectorIndex(index);
    carouselRef.current?.goTo(index);

    if (index === SECTORS.length - 1) {
      if (autoScrollTimerRef.current) {
        clearTimeout(autoScrollTimerRef.current);
      }
      setIsAutoScrolling(true);
      autoScrollTimerRef.current = setTimeout(() => {
        setIsAutoScrolling(false);
        const nextSection = document.getElementById("process");
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 3000);
    }
  };

  return (
    <div
      ref={containerRef}
      className="space-y-6 sm:space-y-8 max-w-7xl mx-auto text-left select-none relative"
    >
      {/* ==================================================================== */}
      {/* 1. SECTOR SELECTOR PILLS & ARROWS (ZERO CARDS, PURE FLUID PILLS)     */}
      {/* ==================================================================== */}
      <div className="flex flex-col items-center gap-3">
        {/* Horizontal Navigation Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full sm:flex-wrap sm:justify-center px-1 pb-1">
          {SECTORS.map((sector, index) => {
            const isSelected = index === selectedSectorIndex;

            return (
              <button
                key={sector.id}
                type="button"
                onClick={() => handleSectorSelect(index)}
                className={cn(
                  "px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer select-none inline-flex items-center gap-2 border shrink-0 sm:shrink",
                  isSelected
                    ? "bg-[#060B22] text-[#FFB020] border-[#FFB020] shadow-md shadow-slate-900/10 font-black scale-105"
                    : "bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-50 border-[#E2DBD0]"
                )}
              >
                <span>{sector.icon}</span>
                <span>{sector.shortLabel}</span>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFB020] shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Minimalist Navigation & Auto-Scroll Status Bar */}
        <div className="flex items-center justify-between w-full max-w-2xl px-2 pt-1 text-xs text-slate-500">
          <button
            type="button"
            onClick={() => carouselRef.current?.prev()}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white hover:bg-slate-50 border border-[#E2DBD0] text-slate-700 hover:text-black transition-colors cursor-pointer text-xs font-semibold shadow-2xs"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Previous</span>
          </button>

          <div className="flex items-center gap-2 text-center">
            <span
              className={cn(
                "w-2 h-2 rounded-full",
                isAutoScrolling ? "bg-[#FFB020] animate-ping" : "bg-emerald-600 animate-pulse"
              )}
            />
            <span className="font-mono text-[11px] text-slate-600 font-medium">
              {isAutoScrolling
                ? "Blueprint 9/9 reached • Scrolling down..."
                : `Blueprint 0${selectedSectorIndex + 1} of 09 (Auto-advancing)`}
            </span>
          </div>

          <button
            type="button"
            onClick={() => carouselRef.current?.next()}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white hover:bg-slate-50 border border-[#E2DBD0] text-slate-700 hover:text-black transition-colors cursor-pointer text-xs font-semibold shadow-2xs"
          >
            <span>Next</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 2. FLEX CAROUSEL (ZERO CARDS, ZERO BROWSER FRAMES, PURE LIQUID GLASS)*/}
      {/* ==================================================================== */}
      <div className="relative w-full h-[320px] sm:h-[460px] lg:h-[500px] overflow-hidden sm:overflow-visible my-2">
        <FlexCarousel
          ref={carouselRef}
          items={CAROUSEL_ITEMS}
          preset="liquid"
          autoplay={isInView}
          interval={3}
          cardHeight={0.68}
          gap={18}
          radius={18}
          bend={0.34}
          reach={0.36}
          dispersion={0.45}
          liquid={0.12}
          squeeze={0.2}
          captions={true}
          focusOnClick={true}
          onChange={handleCarouselChange}
          className="w-full h-full"
        />
      </div>

      {/* ==================================================================== */}
      {/* 3. UNBOXED BLUEPRINT SPECIFICATIONS (NO ENCLOSING BOX, NO CARD)     */}
      {/* ==================================================================== */}
      <div className="pt-6 sm:pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-[#E2DBD0]">
        {/* Left Column (7 cols): Architecture Overview & SLA */}
        <div className="lg:col-span-7 space-y-3.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10.5px] font-black uppercase tracking-wider text-[#060B22] bg-[#FFB020] px-3 py-1 rounded-full font-mono shadow-xs">
              {activeSector.categoryTag}
            </span>

            <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              {activeSector.metric}
            </span>

            <span className="text-xs font-mono text-slate-500 font-medium">
              Blueprint 0{selectedSectorIndex + 1} of 09
            </span>
          </div>

          <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0B1B3A] tracking-tight leading-snug">
            {activeSector.headline}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-2xl">
            {activeSector.description}
          </p>

          {/* Compliance & SLA Line */}
          <div className="inline-flex items-center gap-2.5 text-xs text-slate-700 font-semibold pt-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{activeSector.complianceSla}</span>
          </div>
        </div>

        {/* Right Column (5 cols): Capabilities Checklist & Action CTA */}
        <div className="lg:col-span-5 space-y-4 lg:border-l lg:border-[#E2DBD0] lg:pl-8">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-wider text-slate-600">
              <span>Industry-Specific Inclusions:</span>
              <span className="text-[#060B22] font-mono font-bold">
                {showMoreSpecs ? "6 Inclusions" : "3 Inclusions"}
              </span>
            </div>

            <div className="space-y-2 text-xs">
              {activeSector.keyFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-medium text-[12.5px] leading-snug text-slate-800">
                    {feat}
                  </span>
                </div>
              ))}

              {/* Expandable Features */}
              {showMoreSpecs &&
                activeSector.moreFeatures &&
                activeSector.moreFeatures.map((feat, i) => (
                  <div
                    key={`more-${i}`}
                    className="flex items-start gap-2 animate-in fade-in slide-in-from-top-1 duration-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium text-[12.5px] leading-snug text-slate-800">
                      {feat}
                    </span>
                  </div>
                ))}
            </div>

            {/* View More / Fewer Inclusions Toggle */}
            {activeSector.moreFeatures && (
              <button
                type="button"
                onClick={() => setShowMoreSpecs(!showMoreSpecs)}
                className="pt-1 text-[11.5px] font-bold text-slate-700 hover:text-[#060B22] transition-colors cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>
                  {showMoreSpecs
                    ? "View Fewer Deliverables ↑"
                    : "View More Deliverables (+3 More) ↓"}
                </span>
              </button>
            )}
          </div>

          {/* Action CTA Button with StarBorder */}
          <div className="pt-2">
            <StarBorder
              as={Link}
              href="/get-a-quote"
              className="w-full py-3.5 px-6 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer text-center group"
              radius={12}
              color="#FFB020"
              trailColor="#FFB020"
              backgroundColor="#060B22"
              textColor="#FFFFFF"
              borderColor="rgba(255, 176, 32, 0.5)"
              sparkle={true}
              glow={0.8}
            >
              <span>Request {activeSector.shortLabel} Blueprint</span>
              <ArrowRight className="w-4 h-4 text-[#FFB020] group-hover:translate-x-1 transition-transform" />
            </StarBorder>
          </div>
        </div>
      </div>
    </div>
  );
}
