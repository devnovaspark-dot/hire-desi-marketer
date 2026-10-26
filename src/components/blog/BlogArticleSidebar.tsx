"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Share2,
  Copy,
  Check,
  ArrowRight,
  List,
  Sparkles,
  ShieldCheck,
  Phone,
  Clock,
  TrendingUp,
} from "lucide-react";
import { TocItem, BlogAuthor, BlogPost } from "@/types/blog";
import { cn } from "@/lib/utils";


function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.652-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
  );
}

interface BlogArticleSidebarProps {
  toc: TocItem[];
  title: string;
  slug: string;
  author?: BlogAuthor;
  keyTakeaways?: string[];
  trendingPosts?: BlogPost[];
}

export function BlogArticleSidebar({
  toc,
  title,
  slug,
  author,
  keyTakeaways,
  trendingPosts,
}: BlogArticleSidebarProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (!toc || toc.length === 0) return;

    const handleScroll = () => {
      // Viewport offset line below floating navbar
      const activationOffset = 160;
      let current = "";

      for (let i = 0; i < toc.length; i++) {
        const el = document.getElementById(toc[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= activationOffset) {
            current = toc[i].id;
          } else {
            break;
          }
        }
      }

      // Default to first heading if near top of document
      if (!current && toc.length > 0) {
        current = toc[0].id;
      }

      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [toc]);

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 110;
      const rect = element.getBoundingClientRect();
      const offsetPosition = window.pageYOffset + rect.top - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      window.history.replaceState(null, "", `#${id}`);
      setActiveId(id);
    }
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareOnWhatsApp = () => {
    if (typeof window !== "undefined") {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(`Great read: ${title}`);
      window.open(`https://api.whatsapp.com/send?text=${text}%20${url}`, "_blank");
    }
  };

  const shareOnLinkedIn = () => {
    if (typeof window !== "undefined") {
      const url = encodeURIComponent(window.location.href);
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank");
    }
  };

  return (
    <aside className="space-y-6 sticky top-28">
      {/* 1. On This Page (Exact Reference Structure) */}
      {toc && toc.length > 0 && (
        <div className="p-6 rounded-3xl skeuo-card-light space-y-3.5 border border-[#E2DBD0]">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2 text-sm font-bold text-[#0B1B3A]">
              <span className="w-2 h-2 rounded-full bg-[#0B1B3A]" />
              <span>On This Page</span>
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
              {toc.length}
            </span>
          </div>

          <nav className="space-y-1">
            {toc.map((item) => {
              const isActive = activeId === item.id;
              const isH3 = item.level === 3;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleTocClick(e, item.id)}
                  className={cn(
                    "block py-1.5 transition-all duration-150 leading-snug cursor-pointer select-none",
                    isH3 ? "pl-5 text-xs text-slate-500 hover:text-slate-800" : "text-sm",
                    isActive
                      ? "border-l-2 border-[#0B1B3A] pl-2.5 font-bold text-[#0B1B3A] bg-[#0B1B3A]/5 rounded-r-md"
                      : "text-slate-600 hover:text-[#0B1B3A] hover:pl-1"
                  )}
                >
                  <span className="line-clamp-2">{item.title.replace(/^\d+\.\s*/, "")}</span>
                </a>
              );
            })}
          </nav>
        </div>
      )}

      {/* 2. Key Takeaways Card */}
      {keyTakeaways && keyTakeaways.length > 0 && (
        <div className="p-6 rounded-3xl skeuo-card-light space-y-3.5 border border-[#E2DBD0]">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0B1B3A] border-b border-slate-100 pb-2.5">
            <span className="text-base">💡</span>
            <span>Key Takeaways</span>
          </div>

          <ul className="space-y-2.5">
            {keyTakeaways.map((takeaway, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs leading-relaxed text-slate-700"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFB020] mt-1.5 shrink-0" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 3. Trending Stories */}
      {trendingPosts && trendingPosts.length > 0 && (
        <div className="p-6 rounded-3xl skeuo-card-light space-y-4 border border-[#E2DBD0]">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0B1B3A]">
              <TrendingUp className="w-4 h-4 text-[#FFB020]" />
              <span>Trending Stories</span>
            </div>
          </div>

          <div className="space-y-3.5">
            {trendingPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex items-center gap-3 transition-colors"
              >
                <div className="relative w-16 h-14 rounded-xl overflow-hidden shrink-0 border border-slate-200 bg-slate-100 shadow-xs">
                  <Image
                    src={post.coverImage}
                    alt={post.coverImageAlt || post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                    sizes="64px"
                  />
                </div>
                <div className="min-w-0 flex-1 space-y-0.5">
                  <h5 className="font-display font-bold text-xs text-[#0B1B3A] group-hover:text-[#B87A00] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h5>
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{post.readTimeMinutes} min read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 4. Fast Share Bar */}
      <div className="p-5 rounded-3xl bg-white border border-[#E2DBD0] shadow-sm space-y-3">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
          <Share2 className="w-3.5 h-3.5 text-[#FFB020]" />
          <span>Share This Article</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={shareOnWhatsApp}
            title="Share on WhatsApp"
            className="flex-1 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-emerald-600 transition-colors cursor-pointer"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={shareOnLinkedIn}
            title="Share on LinkedIn"
            className="flex-1 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 transition-colors cursor-pointer"
          >
            <LinkedInIcon className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleCopyLink}
            title="Copy URL"
            className="flex-1 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 transition-colors cursor-pointer"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-600" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>

      {/* 5. Hire Dedicated Squad Widget (Global Skeuo-Card Dark) */}
      <div className="p-6 sm:p-7 rounded-3xl skeuo-card-dark text-white space-y-4 relative overflow-hidden shadow-xl border border-white/10">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-slate-200 text-[10px] font-black uppercase tracking-wider border border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Bhubaneswar HQ Online · Western Shifts</span>
        </div>

        <h4 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight leading-snug">
          Need This Executed for Your Agency?
        </h4>

        <p className="text-xs text-slate-300 leading-relaxed">
          Deploy dedicated, full-time Indian SEO specialists or media buyers in your Slack within 48 hours.
        </p>

        <div className="space-y-2 pt-1">
          <Link
            href="/#calculator"
            className="btn-luxury-gold btn-shimmer w-full py-2.5 px-3 rounded-xl text-[11px] font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md"
          >
            <span>Calculate Squad Cost</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <a
            href="https://wa.me/918280788689"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-slate-200 text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
