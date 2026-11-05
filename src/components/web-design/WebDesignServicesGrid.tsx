"use client";

import React, { useState } from "react";
import {
  Palette,
  RefreshCw,
  ShoppingBag,
  Layout,
  ShieldCheck,
  Zap,
  Code2,
  Sparkles,
  Check,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Monitor,
  Smartphone,
  CreditCard,
  Gauge,
  Sliders,
  CheckCircle2,
} from "lucide-react";
import { WEB_SERVICES, WebServiceItem } from "@/data/web-design-services";
import { cn } from "@/lib/utils";

const serviceIcons: Record<string, React.ReactNode> = {
  palette: <Palette className="w-5 h-5" />,
  refresh: <RefreshCw className="w-5 h-5" />,
  "shopping-bag": <ShoppingBag className="w-5 h-5" />,
  layout: <Layout className="w-5 h-5" />,
  shield: <ShieldCheck className="w-5 h-5" />,
  zap: <Zap className="w-5 h-5" />,
  code: <Code2 className="w-5 h-5" />,
  sparkles: <Sparkles className="w-5 h-5" />,
};

// Realistic UI Wireframe / Visual Component Mockup for each service
function ServiceVisualSnippet({ serviceId }: { serviceId: string }) {
  switch (serviceId) {
    case "custom-design":
      return (
        <div className="w-full bg-[#060B22] rounded-xl p-3 border border-white/10 text-white space-y-2 select-none">
          <div className="flex items-center justify-between border-b border-white/10 pb-1.5 text-[10px] text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>bespoke-canvas.fig</span>
            </span>
            <span className="text-[#FFB020] font-bold">1440px / 390px</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 pt-1">
            <div className="h-7 rounded bg-white/10 flex items-center justify-center text-[9px] font-bold text-slate-300">
              Hero UI
            </div>
            <div className="h-7 rounded bg-[#FFB020]/20 border border-[#FFB020]/30 flex items-center justify-center text-[9px] font-bold text-[#FFB020]">
              CTAs
            </div>
            <div className="h-7 rounded bg-white/10 flex items-center justify-center text-[9px] font-bold text-slate-300">
              Grid
            </div>
          </div>
        </div>
      );

    case "website-redesign":
      return (
        <div className="w-full bg-[#060B22] rounded-xl p-3 border border-white/10 text-white space-y-2 select-none">
          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono border-b border-white/10 pb-1.5">
            <span className="text-rose-400 line-through">Legacy 2018</span>
            <span className="text-[#FFB020] font-bold flex items-center gap-1">
              <span>Modern 2026 UX</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </span>
          </div>
          <div className="flex items-center justify-between gap-2 pt-1 text-[9px]">
            <span className="px-2 py-1 rounded bg-white/10 text-slate-300">301 SEO Map Preserved</span>
            <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
              +48% CRO Lift
            </span>
          </div>
        </div>
      );

    case "ecommerce-development":
      return (
        <div className="w-full bg-[#060B22] rounded-xl p-3 border border-white/10 text-white space-y-2 select-none">
          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono border-b border-white/10 pb-1.5">
            <span className="flex items-center gap-1 text-[#FFB020] font-bold">
              <CreditCard className="w-3 h-3 text-[#FFB020]" />
              <span>Stripe + Apple Pay</span>
            </span>
            <span className="text-emerald-400 font-bold">1-Click Checkout</span>
          </div>
          <div className="flex items-center justify-between gap-1.5 pt-1 text-[9px]">
            <span className="px-2 py-1 rounded bg-white/10 text-slate-300">Multi-Currency</span>
            <span className="px-2 py-1 rounded bg-white/10 text-slate-300">Cart Recovery</span>
            <span className="px-2 py-1 rounded bg-[#FFB020]/20 text-[#FFB020] border border-[#FFB020]/30 font-bold">
              Shopify/Woo
            </span>
          </div>
        </div>
      );

    case "cms-development":
      return (
        <div className="w-full bg-[#060B22] rounded-xl p-3 border border-white/10 text-white space-y-2 select-none">
          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono border-b border-white/10 pb-1.5">
            <span className="text-slate-300 flex items-center gap-1">
              <Layout className="w-3 h-3 text-[#FFB020]" />
              <span>Visual Editor &amp; ACF</span>
            </span>
            <span className="text-[#FFB020] font-bold">Zero Code Required</span>
          </div>
          <div className="grid grid-cols-2 gap-1.5 pt-1 text-[9px]">
            <span className="px-2 py-1 rounded bg-white/10 text-slate-300 text-center">Drag &amp; Drop Blocks</span>
            <span className="px-2 py-1 rounded bg-white/10 text-slate-300 text-center">Role Permissions</span>
          </div>
        </div>
      );

    case "maintenance-enhancement":
      return (
        <div className="w-full bg-[#060B22] rounded-xl p-3 border border-white/10 text-white space-y-2 select-none">
          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono border-b border-white/10 pb-1.5">
            <span className="flex items-center gap-1 text-emerald-400 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>99.98% Uptime SLA</span>
            </span>
            <span className="text-slate-400">24/7 Monitoring</span>
          </div>
          <div className="flex items-center justify-between gap-1.5 pt-1 text-[9px]">
            <span className="px-2 py-1 rounded bg-white/10 text-slate-300">Daily Cloud Backup</span>
            <span className="px-2 py-1 rounded bg-white/10 text-slate-300">Security Patching</span>
            <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
              Clean
            </span>
          </div>
        </div>
      );

    case "speed-performance":
      return (
        <div className="w-full bg-[#060B22] rounded-xl p-3 border border-white/10 text-white space-y-2 select-none">
          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono border-b border-white/10 pb-1.5">
            <span className="flex items-center gap-1 font-bold text-[#FFB020]">
              <Gauge className="w-3 h-3 text-[#FFB020]" />
              <span>Core Web Vitals</span>
            </span>
            <span className="text-emerald-400 font-black">99 / 100</span>
          </div>
          <div className="grid grid-cols-3 gap-1 pt-1 text-[9px] text-center font-mono">
            <span className="p-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">LCP 0.8s</span>
            <span className="p-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">FID 12ms</span>
            <span className="p-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">CLS 0.00</span>
          </div>
        </div>
      );

    case "custom-webapp":
      return (
        <div className="w-full bg-[#060B22] rounded-xl p-3 border border-white/10 text-white space-y-2 select-none">
          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono border-b border-white/10 pb-1.5">
            <span className="flex items-center gap-1 text-blue-400 font-bold">
              <Sliders className="w-3 h-3" />
              <span>Dashboard &amp; API Portal</span>
            </span>
            <span className="text-[#FFB020] font-bold">Multi-Tenant</span>
          </div>
          <div className="flex items-center justify-between gap-1.5 pt-1 text-[9px]">
            <span className="px-2 py-1 rounded bg-white/10 text-slate-300">RBAC Auth</span>
            <span className="px-2 py-1 rounded bg-white/10 text-slate-300">REST / GraphQL</span>
            <span className="px-2 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold">
              Fastify/Next
            </span>
          </div>
        </div>
      );

    case "uiux-cro":
      return (
        <div className="w-full bg-[#060B22] rounded-xl p-3 border border-white/10 text-white space-y-2 select-none">
          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono border-b border-white/10 pb-1.5">
            <span className="flex items-center gap-1 text-[#FFB020] font-bold">
              <Sparkles className="w-3 h-3 text-[#FFB020]" />
              <span>Conversion Science</span>
            </span>
            <span className="text-emerald-400 font-bold">A/B Testing</span>
          </div>
          <div className="flex items-center justify-between gap-1.5 pt-1 text-[9px]">
            <span className="px-2 py-1 rounded bg-white/10 text-slate-300">Heatmap Data</span>
            <span className="px-2 py-1 rounded bg-white/10 text-slate-300">Frictionless UX</span>
            <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
              +35% Leads
            </span>
          </div>
        </div>
      );

    default:
      return null;
  }
}

export function WebDesignServicesGrid() {
  const [showAll, setShowAll] = useState<boolean>(false);

  const displayedServices = showAll ? WEB_SERVICES : WEB_SERVICES.slice(0, 4);

  return (
    <div className="space-y-10">
      {/* Services Grid with Enhanced Card UI & Visual Snippets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
        {displayedServices.map((service) => (
          <div
            key={service.id}
            className="rounded-3xl p-6 bg-gradient-to-b from-white via-white to-[#FDFCFB] border border-[#E2DBD0] hover:border-[#FFB020]/60 shadow-[0_4px_20px_-4px_rgba(6,11,34,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(6,11,34,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Top Accent Gradient Border Glow */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FFB020]/0 to-transparent group-hover:via-[#FFB020] transition-all duration-500" />

            <div className="space-y-4">
              {/* Header Icon & Kicker */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#060B22] text-[#FFB020] flex items-center justify-center shadow-md group-hover:scale-105 group-hover:bg-[#FFB020] group-hover:text-[#060B22] transition-all duration-300">
                  {serviceIcons[service.icon] || <Code2 className="w-5 h-5" />}
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#B87A00] bg-[#FFB020]/15 px-2.5 py-1 rounded-full border border-[#FFB020]/25">
                  Solution 0{WEB_SERVICES.indexOf(service) + 1}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-1.5">
                <h3 className="font-display font-black text-lg text-[#0B1B3A] leading-snug group-hover:text-[#B87A00] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Visual Mockup Component inside Card */}
              <div className="pt-1">
                <ServiceVisualSnippet serviceId={service.id} />
              </div>

              {/* Key Deliverables */}
              <div className="pt-2 border-t border-[#E2DBD0] space-y-2">
                <div className="text-[11px] font-bold text-slate-700">
                  Key Deliverables:
                </div>
                <ul className="space-y-1.5 text-[11px] text-slate-600">
                  {service.deliverables.slice(0, 3).map((d, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#FFB020] mt-0.5 shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Direct CTA Link */}
            <div className="pt-4 border-t border-[#E2DBD0] mt-4">
              <a
                href="#lead-form"
                className="text-xs font-bold text-[#0B1B3A] group-hover:text-[#B87A00] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Discuss This Solution</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* View More / View Less Toggle Button */}
      <div className="flex items-center justify-center pt-2">
        <button
          type="button"
          onClick={() => setShowAll(!showAll)}
          className="btn-luxury-navy px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-wider inline-flex items-center gap-2.5 shadow-md hover:shadow-lg transition-all cursor-pointer group"
        >
          <span>
            {showAll
              ? "View Less Website Solutions"
              : `View All ${WEB_SERVICES.length} Website Solutions`}
          </span>
          {showAll ? (
            <ChevronUp className="w-4 h-4 text-[#FFB020] group-hover:-translate-y-0.5 transition-transform" />
          ) : (
            <ChevronDown className="w-4 h-4 text-[#FFB020] group-hover:translate-y-0.5 transition-transform" />
          )}
        </button>
      </div>
    </div>
  );
}
