import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  MessageCircle,
  ShieldCheck,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { BouncingGlassBall } from "@/components/ui/BouncingGlassBall";

export const metadata: Metadata = {
  title: "Thank You! | Hire Desi Marketer",
  description:
    "We have received your growth goals and quote request. Our senior marketing strategists will prepare your custom 90-day roadmap within 24 hours.",
  alternates: {
    canonical: "https://www.hiredesimarketer.com/thank-you-get-a-quote",
  },
  openGraph: {
    title: "Thank You! | Hire Desi Marketer",
    description:
      "We have received your growth goals and quote request. Our senior marketing strategists will prepare your custom 90-day roadmap within 24 hours.",
    url: "https://www.hiredesimarketer.com/thank-you-get-a-quote",
    images: ["/images/1200_1000px.webp"],
  },
};

export default function ThankYouGetAQuotePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#0B1B3A] selection:bg-[#FFB020] selection:text-[#060B22] overflow-x-hidden justify-between">
      {/* Floating Global Navigation Header */}
      <Header />

      {/* Main Stage: Centered Single-Window Viewport Stage */}
      <main className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 pt-24 sm:pt-28 pb-6">
        {/* Balanced, Proportional Luxury Skeuomorphic Card */}
        <div className="w-full max-w-[620px] rounded-3xl skeuo-card-dark border-2 border-white/20 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.85),inset_0_1px_2px_rgba(255,255,255,0.25)] relative overflow-hidden p-7 sm:p-9 lg:p-10 flex flex-col items-center text-center">
          
          {/* Subtle Ambient Lighting Flares */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-emerald-500/15 blur-[90px] pointer-events-none" />
          <div className="absolute bottom-0 right-4 w-60 h-60 rounded-full bg-[#FFB020]/10 blur-[80px] pointer-events-none" />

          {/* =========================================================================
              THE BUTTERY-SMOOTH 3D BOUNCING GLASS CHECKMARK BALL
              ========================================================================= */}
          <div className="w-full flex justify-center relative z-10 my-2">
            <BouncingGlassBall />
          </div>

          {/* Minimal Clean Headline & Subtitle */}
          <div className="relative z-10 max-w-lg mx-auto mb-5">
            <h1 className="font-display text-2xl sm:text-3xl lg:text-[2rem] font-black text-white tracking-tight leading-snug mb-2 drop-shadow-md">
              Thank You!{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB020] via-[#FFD166] to-[#FFE28A]">
                Your Plan is in Motion.
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed drop-shadow-sm">
              We&apos;ve received your marketing brief. A senior strategist is reviewing your scope
              and will deliver your custom 90-day roadmap and transparent quote in &lt; 24h.
            </p>
          </div>

          {/* 3 Compact Tactile Skeuomorphic Reassurance Badges */}
          <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 text-xs font-semibold text-slate-200 mb-7 flex-wrap">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#040819] border border-white/10 border-t-white/20 border-b-black/80 shadow-[inset_0_1px_2px_rgba(0,0,0,0.6),0_1px_0_rgba(255,255,255,0.08)]">
              <Clock className="w-3.5 h-3.5 text-[#FFB020]" />
              <span>&lt; 24h Delivery</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#040819] border border-white/10 border-t-white/20 border-b-black/80 shadow-[inset_0_1px_2px_rgba(0,0,0,0.6),0_1px_0_rgba(255,255,255,0.08)]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Mutual NDA</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#040819] border border-white/10 border-t-white/20 border-b-black/80 shadow-[inset_0_1px_2px_rgba(0,0,0,0.6),0_1px_0_rgba(255,255,255,0.08)]">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Zero Lock-In</span>
            </div>
          </div>

          {/* 3D Tactile Skeuomorphic Action Buttons with Shimmer */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-lg">
            <Link
              href="/"
              className="w-full sm:w-auto flex-1 btn-luxury-gold btn-shimmer py-3.5 px-6 rounded-full font-display font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
              <span>Back to Homepage</span>
            </Link>

            <a
              href="https://wa.me/918280788689?text=Hi%20Hire%20Desi%20Marketer%2C%20I%20just%20submitted%20a%20quote%20request%20and%20wanted%20to%20connect%20with%20a%20senior%20strategist."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 btn-skeuo-whatsapp btn-shimmer py-3.5 px-6 rounded-full font-display font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-white stroke-[2.5]" />
              <span className="text-white font-black">Chat on WhatsApp</span>
            </a>
          </div>

          {/* Embedded 3D Tactile Skeuomorphic WhatsApp Button Styles */}
          <style>{`
            .btn-skeuo-whatsapp {
              position: relative;
              overflow: hidden;
              isolation: isolate;
              background: linear-gradient(180deg, #28E06A 0%, #159C50 48%, #0C6B35 100%) !important;
              color: #FFFFFF !important;
              font-weight: 900 !important;
              border: 1px solid #10B981 !important;
              border-top: 1.5px solid #A7F3D0 !important;
              border-bottom: 2.5px solid #064E26 !important;
              box-shadow: 
                0 4px 14px rgba(16, 185, 129, 0.45),
                0 1px 3px rgba(0, 0, 0, 0.25),
                inset 0 1px 0 rgba(255, 255, 255, 0.75) !important;
              transition: transform 0.15s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.15s cubic-bezier(0.16, 1, 0.3, 1), background 0.15s ease !important;
              text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5) !important;
            }

            .btn-skeuo-whatsapp:hover {
              background: linear-gradient(180deg, #42EB7E 0%, #1BB35D 48%, #0E7D3F 100%) !important;
              transform: translateY(-1.5px);
              border-bottom-width: 3px !important;
              box-shadow: 
                0 6px 20px rgba(16, 185, 129, 0.6),
                0 2px 5px rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.9) !important;
            }

            .btn-skeuo-whatsapp:active {
              transform: translateY(1px);
              border-bottom-width: 1px !important;
              box-shadow: 
                0 2px 6px rgba(16, 185, 129, 0.3),
                inset 0 2px 3px rgba(0, 0, 0, 0.3) !important;
            }
          `}</style>
        </div>
      </main>

      {/* Sleek Minimal Copyright & Trust Bar (Prevents Marketing Footer from Peeking) */}
      <footer className="w-full border-t border-[#E2DBD0] py-3.5 px-4 text-center text-xs text-[#5A6680] bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-semibold text-slate-700">
              Bhubaneswar HQ · Active Shifts (EST · PST · GMT Overlap)
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>© 2026 Hire Desi Marketer</span>
            <span>·</span>
            <span>Direct WhatsApp: +91 8280788689</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
