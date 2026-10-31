"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Lightbulb,
  AlertTriangle,
  Zap,
  BookmarkCheck,
  Quote,
  Copy,
  Check,
  ArrowRight,
  TrendingUp,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Table as TableIcon,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Layers,
  ZoomIn,
} from "lucide-react";
import { BlogContentBlock } from "@/types/blog";
import { cn } from "@/lib/utils";
import { ZoomableImage, useImageZoom } from "./ImageZoomContext";

interface PortableTextRendererProps {
  blocks: BlogContentBlock[];
  className?: string;
}

export function PortableTextRenderer({ blocks, className }: PortableTextRendererProps) {
  return (
    <div className={cn("space-y-8 text-base sm:text-lg leading-relaxed text-slate-800", className)}>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "richText":
            return (
              <div
                key={index}
                className="blog-prose prose prose-slate max-w-none text-[#1E293B] font-sans"
                dangerouslySetInnerHTML={{ __html: block.html }}
              />
            );

          case "callout":
            return <CalloutBlockView key={index} block={block} />;

          case "statHighlight":
            return <StatHighlightView key={index} block={block} />;

          case "comparison":
            return <ComparisonView key={index} block={block} />;

          case "inArticleCta":
            return <InArticleCtaView key={index} block={block} />;

          case "quote":
            return <QuoteView key={index} block={block} />;

          case "code":
            return <CodeBlockView key={index} block={block} />;

          case "image":
            return <ImageView key={index} block={block} />;

          case "gif":
            return <GifBlockView key={index} block={block} />;

          case "table":
            return <TableBlockView key={index} block={block} />;

          case "infographic":
            return <InfographicBlockView key={index} block={block} />;

          case "takeawayBox":
            return <TakeawayBoxBlockView key={index} block={block} />;

          case "faq":
            return <FaqBlockView key={index} block={block} />;

          case "carousel":
            return <CarouselBlockView key={index} block={block} />;

          default:
            return null;
        }
      })}
    </div>
  );
}

// 1. Elevated Callout Component
function CalloutBlockView({
  block,
}: {
  block: Extract<BlogContentBlock, { type: "callout" }>;
}) {
  const styles = {
    tip: {
      bg: "bg-emerald-50/80 border-emerald-200 text-emerald-900",
      badge: "bg-emerald-500/15 text-emerald-700 border-emerald-300",
      icon: Lightbulb,
      defaultTitle: "Pro Tip",
    },
    warning: {
      bg: "bg-amber-50/90 border-amber-300 text-amber-950",
      badge: "bg-amber-500/20 text-amber-800 border-amber-300",
      icon: AlertTriangle,
      defaultTitle: "Critical Note",
    },
    "growth-hack": {
      bg: "bg-blue-50/80 border-blue-200 text-blue-950",
      badge: "bg-blue-500/15 text-blue-700 border-blue-300",
      icon: Zap,
      defaultTitle: "Growth Strategy",
    },
    takeaway: {
      bg: "bg-[#060B22] text-white border-white/20 shadow-xl",
      badge: "bg-[#FFB020]/20 text-[#FFB020] border-[#FFB020]/40",
      icon: BookmarkCheck,
      defaultTitle: "Core Takeaway",
    },
  }[block.variant || "tip"];

  const Icon = styles.icon;

  return (
    <div
      className={cn(
        "my-8 p-6 sm:p-7 rounded-2xl border transition-all duration-200 relative overflow-hidden",
        styles.bg,
        block.variant === "takeaway" ? "skeuo-card-dark" : "shadow-sm"
      )}
    >
      <div className="flex items-start gap-4">
        <div
          className={cn(
            "p-2.5 rounded-xl border shrink-0 flex items-center justify-center mt-0.5",
            styles.badge
          )}
        >
          <Icon className="w-5 h-5" />
        </div>
        <div className="space-y-1.5 min-w-0">
          <h4
            className={cn(
              "font-display font-bold text-base sm:text-lg tracking-tight",
              block.variant === "takeaway" ? "text-white" : "text-[#0B1B3A]"
            )}
          >
            {block.title || styles.defaultTitle}
          </h4>
          <p
            className={cn(
              "text-sm sm:text-base leading-relaxed",
              block.variant === "takeaway" ? "text-slate-300" : "text-slate-700"
            )}
          >
            {block.content}
          </p>
        </div>
      </div>
    </div>
  );
}

// 2. High-Impact Stat Highlight Card
function StatHighlightView({
  block,
}: {
  block: Extract<BlogContentBlock, { type: "statHighlight" }>;
}) {
  return (
    <div className="my-10 p-7 sm:p-9 rounded-2xl skeuo-card-gold text-white relative overflow-hidden">
      <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-[#FFB020]/10 blur-3xl pointer-events-none" />
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFB020]/20 text-[#FFB020] text-xs font-black uppercase tracking-wider mb-2 border border-[#FFB020]/30">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Verified Metric</span>
          </div>
          <div className="font-display text-4xl sm:text-5xl font-extrabold text-[#FFB020] tracking-tight">
            {block.metric}
          </div>
        </div>

        <div className="sm:max-w-md space-y-1 text-left sm:text-right">
          <p className="text-base sm:text-lg font-bold text-white leading-snug">
            {block.label}
          </p>
          {block.subtext && (
            <p className="text-xs sm:text-sm text-slate-300">
              {block.subtext}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// 3. Structured Side-by-Side Comparison Module
function ComparisonView({
  block,
}: {
  block: Extract<BlogContentBlock, { type: "comparison" }>;
}) {
  return (
    <div className="my-10 space-y-4">
      {block.title && (
        <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0B1B3A] tracking-tight text-center">
          {block.title}
        </h3>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Column A */}
        <div className="p-6 rounded-2xl skeuo-card-light space-y-4">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
              {block.columnA.sublabel || "Traditional Route"}
            </div>
            <h4 className="font-display font-bold text-lg text-slate-800">
              {block.columnA.label}
            </h4>
          </div>
          <ul className="space-y-2.5 text-sm text-slate-600">
            {block.columnA.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column B (Winning / Highlighted) */}
        <div className="p-6 rounded-2xl skeuo-card-gold text-white space-y-4 relative">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FFB020] text-[#060B22] text-[10px] font-black uppercase tracking-wider">
            <Sparkles className="w-3 h-3" />
            Recommended
          </div>
          <div>
            <div className="text-xs font-extrabold uppercase tracking-wider text-[#FFB020]/90">
              {block.columnB.sublabel || "The Modern Solution"}
            </div>
            <h4 className="font-display font-bold text-lg text-white">
              {block.columnB.label}
            </h4>
          </div>
          <ul className="space-y-2.5 text-sm text-slate-200">
            {block.columnB.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFB020] mt-2 shrink-0 shadow-[0_0_8px_#FFB020]" />
                <span className="font-medium text-white">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// 4. In-Article High-Converting CTA Box
function InArticleCtaView({
  block,
}: {
  block: Extract<BlogContentBlock, { type: "inArticleCta" }>;
}) {
  return (
    <div className="my-12 p-8 sm:p-10 rounded-3xl skeuo-card-dark text-white text-center relative overflow-hidden border border-white/20">
      <div className="max-w-2xl mx-auto space-y-4 relative z-10">
        {block.badge && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#FFB020] text-xs font-black uppercase tracking-wider border border-white/15">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{block.badge}</span>
          </div>
        )}
        <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight leading-snug">
          {block.headline}
        </h3>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {block.description}
        </p>
        <div className="pt-2">
          <Link
            href={block.buttonLink}
            className="btn-luxury-gold btn-shimmer inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg"
          >
            <span>{block.buttonText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// 5. Stylized Blockquote
function QuoteView({
  block,
}: {
  block: Extract<BlogContentBlock, { type: "quote" }>;
}) {
  return (
    <blockquote className="my-10 p-7 sm:p-8 rounded-2xl bg-amber-500/5 border-l-4 border-[#FFB020] skeuo-card-light space-y-3">
      <div className="flex items-start gap-3">
        <Quote className="w-8 h-8 text-[#FFB020] shrink-0 rotate-180 opacity-80" />
        <p className="font-display italic text-lg sm:text-xl text-[#0B1B3A] font-semibold leading-relaxed">
          &ldquo;{block.text}&rdquo;
        </p>
      </div>
      <div className="text-right pt-2 border-t border-slate-200">
        <div className="font-bold text-sm text-[#0B1B3A]">{block.author}</div>
        {block.role && <div className="text-xs text-slate-500">{block.role}</div>}
      </div>
    </blockquote>
  );
}

// 6. Code Block with Copy Feedback
function CodeBlockView({
  block,
}: {
  block: Extract<BlogContentBlock, { type: "code" }>;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(block.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="my-8 rounded-2xl overflow-hidden border border-slate-800 bg-[#060B22] shadow-xl">
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-xs text-slate-300 font-mono">
        <span>{block.filename || block.language.toUpperCase()}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-5 overflow-x-auto text-xs sm:text-sm font-mono text-emerald-400 leading-relaxed bg-[#030614]">
        <code>{block.code}</code>
      </pre>
    </div>
  );
}

// 7. Responsive High-Def Image with Caption & Badge (with One-Click Zoom)
function ImageView({
  block,
}: {
  block: Extract<BlogContentBlock, { type: "image" }>;
}) {
  return (
    <ZoomableImage
      src={block.url}
      alt={block.alt}
      caption={block.caption}
      badge={block.badge}
    />
  );
}

// 7b. Animated GIF / Meme Block (with One-Click Zoom)
function GifBlockView({
  block,
}: {
  block: Extract<BlogContentBlock, { type: "gif" }>;
}) {
  const { openZoom } = useImageZoom();
  const widthClasses = {
    compact: "max-w-md",
    standard: "max-w-2xl",
    wide: "max-w-4xl",
  };

  const containerWidth = widthClasses[block.size || "standard"] || widthClasses.standard;

  return (
    <figure className={cn("my-10 mx-auto space-y-3", containerWidth)}>
      <div
        role="button"
        tabIndex={0}
        onClick={() =>
          openZoom({
            src: block.url,
            alt: block.alt,
            caption: block.caption,
            badge: block.badge,
          })
        }
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openZoom({
              src: block.url,
              alt: block.alt,
              caption: block.caption,
              badge: block.badge,
            });
          }
        }}
        className="group relative w-full rounded-2xl overflow-hidden skeuo-card-light border border-slate-200 shadow-lg bg-slate-900/5 backdrop-blur-sm cursor-zoom-in focus:outline-hidden focus:ring-2 focus:ring-[#FFB020]"
      >
        {/* GIF Media */}
        <div className="relative w-full flex items-center justify-center p-1 sm:p-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={block.url}
            src={block.url}
            alt={block.alt}
            loading="lazy"
            decoding="async"
            className="w-full h-auto rounded-xl object-contain shadow-sm group-hover:scale-[1.015] transition-transform duration-200 ease-out"
          />
        </div>

        {/* Optional Badge */}
        {block.badge && (
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#060B22]/90 backdrop-blur-md border border-[#FFB020]/40 text-[#FFB020] text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FFB020] animate-pulse" />
            {block.badge}
          </div>
        )}

        {/* Hover Zoom pill */}
        <div className="absolute bottom-3 right-14 z-20 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0 pointer-events-none">
          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#060B22]/90 text-[#FFB020] border border-[#FFB020]/40 text-[10px] font-black uppercase tracking-wider backdrop-blur-md shadow-xl">
            <ZoomIn className="w-3 h-3" />
            <span>Zoom</span>
          </div>
        </div>

        {/* Subtle GIF tag */}
        <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-bold text-white/90 tracking-widest uppercase pointer-events-none">
          GIF
        </div>
      </div>

      {/* Caption */}
      {block.caption && (
        <figcaption className="text-center text-xs sm:text-sm text-slate-500 font-medium italic">
          {block.caption}
        </figcaption>
      )}
    </figure>
  );
}

// 8. Custom Data Table Block
function TableBlockView({
  block,
}: {
  block: Extract<BlogContentBlock, { type: "table" }>;
}) {
  return (
    <div className="my-10 space-y-3">
      {block.caption && (
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0B1B3A]">
          <TableIcon className="w-4 h-4 text-[#FFB020]" />
          <span>{block.caption}</span>
        </div>
      )}
      <div className="overflow-x-auto rounded-2xl border border-[#E2DBD0] bg-white shadow-xs">
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="bg-[#060B22] text-[#FFB020] border-b border-[#0B1B3A]">
              {block.headers.map((header, idx) => (
                <th
                  key={idx}
                  className="py-3 px-4 sm:px-5 font-black uppercase tracking-wider text-[11px] sm:text-xs"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E2DBD0]">
            {block.rows.map((row, rIdx) => (
              <tr
                key={rIdx}
                className={cn(
                  "transition-colors duration-150 hover:bg-[#FFB020]/5",
                  rIdx % 2 === 0 ? "bg-white" : "bg-[#FAF8F5]"
                )}
              >
                {row.map((cell, cIdx) => (
                  <td
                    key={cIdx}
                    className={cn(
                      "py-3.5 px-4 sm:px-5 leading-normal",
                      cIdx === 0 ? "font-bold text-[#0B1B3A]" : "text-slate-700"
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// 9. Visual Infographic / Framework Card
function InfographicBlockView({
  block,
}: {
  block: Extract<BlogContentBlock, { type: "infographic" }>;
}) {
  return (
    <div className="my-12 p-6 sm:p-8 rounded-3xl skeuo-card-dark text-white space-y-6 relative overflow-hidden border border-[#FFB020]/30 shadow-2xl">
      <div className="space-y-1 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB020]/20 border border-[#FFB020]/40 text-[#FFB020] text-xs font-black uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Strategic Framework</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight mt-2">
          {block.title}
        </h3>
        {block.subtitle && (
          <p className="text-slate-300 text-xs sm:text-sm">
            {block.subtitle}
          </p>
        )}
      </div>

      <div
        className={cn(
          "grid gap-4 sm:gap-6 pt-2",
          block.steps.length === 2
            ? "grid-cols-1 md:grid-cols-2"
            : block.steps.length === 4
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            : "grid-cols-1 md:grid-cols-3"
        )}
      >
        {block.steps.map((step, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FFB020]/50 transition-all duration-200 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-xl bg-[#FFB020] text-[#060B22] font-black font-mono text-sm flex items-center justify-center shadow-md">
                  {step.stepNumber || String(idx + 1).padStart(2, "0")}
                </span>
                {step.badge && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-slate-300 border border-white/10">
                    {step.badge}
                  </span>
                )}
              </div>
              <h4 className="font-display font-bold text-base sm:text-lg text-white leading-snug">
                {step.title}
              </h4>
              {step.description && (
                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              )}
            </div>

            {step.bullets && step.bullets.length > 0 && (
              <ul className="space-y-1.5 pt-2 border-t border-white/10">
                {step.bullets.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    className="flex items-start gap-2 text-xs text-slate-300 leading-tight"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB020] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// 10. Key Takeaways Callout Box
function TakeawayBoxBlockView({
  block,
}: {
  block: Extract<BlogContentBlock, { type: "takeawayBox" }>;
}) {
  return (
    <div className="my-10 p-6 sm:p-7 rounded-3xl bg-white border-2 border-[#FFB020] shadow-md space-y-4 relative">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#FFB020]/20 border border-[#FFB020]/40 flex items-center justify-center text-[#FFB020]">
            <Lightbulb className="w-5 h-5 text-[#B87A00]" />
          </div>
          <h4 className="font-display font-black text-lg sm:text-xl text-[#0B1B3A] tracking-tight">
            {block.title || "Key Strategic Takeaways"}
          </h4>
        </div>
      </div>

      <ul className="space-y-2.5 pt-1">
        {block.bullets.map((bullet, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed"
          >
            <span className="w-2 h-2 rounded-full bg-[#FFB020] mt-2 shrink-0 shadow-xs" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {block.ctaText && block.ctaLink && (
        <div className="pt-3 border-t border-slate-100 flex justify-end">
          <Link
            href={block.ctaLink}
            className="btn-luxury-navy py-2 px-4 rounded-xl text-xs font-bold inline-flex items-center gap-1.5"
          >
            <span>{block.ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FFB020]" />
          </Link>
        </div>
      )}
    </div>
  );
}

// 11. In-Article FAQ Accordion Section
function FaqBlockView({
  block,
}: {
  block: Extract<BlogContentBlock, { type: "faq" }>;
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="my-12 p-6 sm:p-8 rounded-3xl bg-white border border-[#E2DBD0] shadow-sm space-y-6">
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FFB020]">
          <HelpCircle className="w-4 h-4 text-[#FFB020]" />
          <span>Frequently Asked Questions</span>
        </div>
        <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0B1B3A] tracking-tight">
          {block.title || "Frequently Asked Questions"}
        </h3>
        {block.subtitle && (
          <p className="text-slate-600 text-xs sm:text-sm">
            {block.subtitle}
          </p>
        )}
      </div>

      <div className="divide-y divide-slate-200">
        {block.items.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className="py-4">
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between gap-4 text-left font-display font-bold text-base sm:text-lg text-[#0B1B3A] hover:text-[#B87A00] transition-colors cursor-pointer"
              >
                <span>{item.question}</span>
                <span
                  className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200",
                    isOpen
                      ? "bg-[#060B22] text-[#FFB020] border-[#060B22] rotate-180"
                      : "bg-slate-100 text-slate-500 border-slate-200"
                  )}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
              {isOpen && (
                <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed pr-8 animate-fadeIn">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// 12. Interactive Multi-Slide Carousel Block
function CarouselBlockView({
  block,
}: {
  block: Extract<BlogContentBlock, { type: "carousel" }>;
}) {
  const { openZoom } = useImageZoom();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(block.autoplay ?? false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = block.items?.length || 0;
  const intervalSeconds = block.autoplayInterval || 5;

  const nextSlide = useCallback(() => {
    if (total === 0) return;
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    if (total === 0) return;
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay timer
  useEffect(() => {
    if (!isPlaying || total <= 1) return;
    const timer = setInterval(() => {
      nextSlide();
    }, intervalSeconds * 1000);
    return () => clearInterval(timer);
  }, [isPlaying, intervalSeconds, nextSlide, total]);

  // Touch Swipe Handlers for mobile users
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (total === 0) return null;

  const activeItem = block.items[currentIndex];
  if (!activeItem) return null;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={block.title || "Image Carousel"}
      onMouseEnter={() => block.autoplay && setIsPlaying(false)}
      onMouseLeave={() => block.autoplay && setIsPlaying(true)}
      className="my-12 rounded-3xl bg-gradient-to-b from-[#060B24] to-[#040716] border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.4)] text-white overflow-hidden relative"
    >
      {/* Top Header with title, slide counter, and action controls */}
      <div className="p-5 sm:p-7 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1 max-w-lg">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FFB020]/20 border border-[#FFB020]/40 text-[#FFB020] text-[11px] font-black uppercase tracking-wider">
            <Layers className="w-3 h-3" />
            <span>Interactive Gallery</span>
          </div>
          {block.title && (
            <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight">
              {block.title}
            </h3>
          )}
          {block.subtitle && (
            <p className="text-xs sm:text-sm text-slate-300">
              {block.subtitle}
            </p>
          )}
        </div>

        {/* Counter & Prev/Next Arrow buttons */}
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-bold text-slate-200">
            <span className="text-[#FFB020] font-black">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <span className="text-slate-500 mx-1">/</span>
            <span>{String(total).padStart(2, "0")}</span>
          </div>

          {block.autoplay && (
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-slate-200 hover:text-white transition-colors cursor-pointer"
              title={isPlaying ? "Pause autoplay" : "Start autoplay"}
              aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
            </button>
          )}

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FFB020] hover:text-[#060B22] border border-white/15 flex items-center justify-center text-white transition-all cursor-pointer group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FFB020] hover:text-[#060B22] border border-white/15 flex items-center justify-center text-white transition-all cursor-pointer group"
            >
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Viewport & Touch Area */}
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative overflow-hidden group select-none bg-[#020512]"
      >
        <div className="relative w-full min-h-[340px] sm:min-h-[460px] md:min-h-[520px] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
          {/* Ambient blurred backdrop matching the image colors */}
          <div
            className="absolute inset-0 opacity-20 filter blur-3xl scale-125 pointer-events-none transition-all duration-700 ease-out"
            style={{
              backgroundImage: `url(${activeItem.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />

          {/* Main Slide Image: object-contain ensures ZERO cut-out for any aspect ratio (with One-Click Zoom) */}
          <div
            role="button"
            tabIndex={0}
            onClick={() =>
              openZoom({
                src: activeItem.image,
                alt: activeItem.alt || activeItem.title,
                caption: activeItem.description,
                badge: activeItem.badge,
              })
            }
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openZoom({
                  src: activeItem.image,
                  alt: activeItem.alt || activeItem.title,
                  caption: activeItem.description,
                  badge: activeItem.badge,
                });
              }
            }}
            className="relative z-10 w-full h-full flex items-center justify-center cursor-zoom-in group/slide focus:outline-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={`${currentIndex}-${activeItem.image}`}
              src={activeItem.image}
              alt={activeItem.alt || activeItem.title || "Carousel slide image"}
              loading="lazy"
              decoding="async"
              className="max-h-[520px] w-auto max-w-full rounded-2xl object-contain shadow-2xl transition-transform duration-500 ease-out group-hover/slide:scale-[1.015]"
            />

            {/* Hover expand badge */}
            <div className="absolute bottom-3 right-3 z-30 opacity-0 group-hover/slide:opacity-100 transition-all duration-200 translate-y-1 group-hover/slide:translate-y-0 pointer-events-none">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#060B22]/90 text-[#FFB020] border border-[#FFB020]/40 text-xs font-black uppercase tracking-wider backdrop-blur-md shadow-xl">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Zoom</span>
              </div>
            </div>
          </div>

          {/* Top Left Slide Badge */}
          {activeItem.badge && (
            <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-[#060B22]/90 backdrop-blur-md border border-[#FFB020]/40 text-[#FFB020] text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#FFB020]" />
              <span>{activeItem.badge}</span>
            </div>
          )}

          {/* Floating Next/Prev on Image Hover */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#060B22]/85 hover:bg-[#FFB020] hover:text-[#060B22] text-white border border-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer shadow-xl"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#060B22]/85 hover:bg-[#FFB020] hover:text-[#060B22] text-white border border-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer shadow-xl"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Slide Details Panel (Title, Description, CTA) - Displayed below image, NEVER covering or cutting the image! */}
      {(activeItem.title || activeItem.description || (activeItem.ctaText && activeItem.ctaLink)) && (
        <div className="p-5 sm:p-7 bg-gradient-to-r from-[#060B24] to-[#040716] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            {activeItem.title && (
              <h4 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight leading-snug">
                {activeItem.title}
              </h4>
            )}
            {activeItem.description && (
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeItem.description}
              </p>
            )}
          </div>

          {activeItem.ctaText && activeItem.ctaLink && (
            <div className="shrink-0 pt-1 sm:pt-0">
              <Link
                href={activeItem.ctaLink}
                className="btn-luxury-gold px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
              >
                <span>{activeItem.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}
        </div>
      )}

      {/* Bottom Dot Track Navigation */}
      <div className="p-3 sm:p-4 bg-[#030614] border-t border-white/10 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto py-1">
          {block.items.map((_, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 cursor-pointer",
                  isActive
                    ? "w-8 bg-[#FFB020] shadow-[0_0_10px_rgba(255,176,32,0.6)]"
                    : "w-2 bg-white/20 hover:bg-white/50"
                )}
              />
            );
          })}
        </div>

        {/* Swipe Hint on Mobile */}
        <span className="text-[11px] text-slate-400 font-medium sm:hidden">
          Swipe left/right
        </span>
      </div>
    </div>
  );
}
