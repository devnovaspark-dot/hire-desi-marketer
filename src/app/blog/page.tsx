import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogListClient } from "@/components/blog/BlogListClient";
import { getAllBlogPosts, getAllCategories } from "@/lib/sanity/service";
import { TrendingUp, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Stories & Playbooks That Scale Agencies | Hire Desi Marketer",
  description:
    "Actionable blueprints on offshore digital marketing pods, paid media scaling, SEO in the AI search era, and agency margin optimization.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Stories & Playbooks That Scale Agencies | Hire Desi Marketer",
    description:
      "Actionable blueprints on offshore digital marketing pods, paid media scaling, SEO in the AI search era, and agency margin optimization.",
    url: "https://hiredesimarketer.com/blog",
    siteName: "Hire Desi Marketer",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-mesh-bg.svg",
        width: 1200,
        height: 630,
        alt: "Hire Desi Marketer Journal - Stories Worth Thinking About",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stories & Playbooks That Scale Agencies | Hire Desi Marketer",
    description:
      "Actionable blueprints on offshore digital marketing pods, paid media scaling, SEO in the AI search era, and agency margin optimization.",
    images: ["/images/blog-hero-bg.webp"],
  },
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  const categories = await getAllCategories();

  return (
    <div className="flex flex-col min-h-screen bg-[#F6F4EE]">
      {/* Sticky Floating Island Navigation Header */}
      <Header />

      <main className="flex-1">
        {/* ============================================================== */}
        {/* 1. Global Atmospheric Hero with Luxury Background Image        */}
        {/* ============================================================== */}
        <section className="relative overflow-hidden bg-[#040716] text-white pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 lg:pb-28">
          {/* Authentic High-Res Hero Background Image in WebP */}
          <div className="absolute inset-0 z-0 pointer-events-none select-none">
            <Image
              src="/images/blog-hero-bg.webp"
              alt="Hire Desi Marketer Atmospheric Gold Telemetry"
              fill
              priority
              className="object-cover object-center opacity-65"
            />
            {/* Luminous Ambient Backlight Spotlights (Global Theme) */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-gradient-to-r from-[#FFB020]/25 via-blue-600/15 to-transparent rounded-full blur-[130px] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#040716]/60 via-[#040716]/30 to-[#040716] pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#040716] to-transparent pointer-events-none" />
            {/* Specular Top Rim */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FFB020]/60 to-transparent" />
          </div>

          {/* Hero Content (Centered, Authoritative, Expansive) */}
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center space-y-6">
            {/* Unified Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-slate-200 shadow-sm mx-auto">
              <span className="w-2 h-2 rounded-full bg-[#FFB020] animate-pulse" />
              <span className="font-extrabold uppercase tracking-widest text-[#FFB020]">
                The Desi Marketer Journal
              </span>
              <span className="text-white/30">·</span>
              <span className="text-slate-300 font-medium">Bhubaneswar HQ</span>
              <span className="text-white/30">·</span>
              <span className="px-1.5 py-0.5 rounded-md bg-[#FFB020]/20 text-[#FFB020] text-[10px] font-black border border-[#FFB020]/30">
                EST. 2024
              </span>
            </div>

            {/* Main Headline with Signature Radiant Gold Gradient */}
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
              Stories &amp; Playbooks{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE28A] via-[#FFB020] to-[#E68A00] block sm:inline">
                Worth Thinking About.
              </span>
            </h1>

            {/* Concise Supporting Copy */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Direct performance data, battle-tested offshore blueprints, and growth playbooks engineered for US, UK, and global agencies scaling with dedicated Indian talent.
            </p>

            {/* Live Telemetry Badges (Global Style) */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs font-bold text-slate-300">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.07] border border-white/15 backdrop-blur-md">
                <TrendingUp className="w-3.5 h-3.5 text-[#FFB020]" />
                <span>+340% ROAS Verified</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.07] border border-white/15 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>48h Squad Onboarding</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.07] border border-white/15 backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FFB020]" />
                <span>Zero Fluff Guarantee</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 2. Main Content Canvas (Warm Cream #F6F4EE)                   */}
        {/* ============================================================== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <BlogListClient initialPosts={posts} categories={categories} />
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
