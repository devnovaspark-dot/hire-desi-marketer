"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Globe, ShieldCheck } from "lucide-react";

interface HoverCardState {
  href: string;
  title: string;
  hostname: string;
  pathname: string;
  rect: DOMRect;
}

export function LinkHoverPreview() {
  const [hoverCard, setHoverCard] = useState<HoverCardState | null>(null);
  const [isCardHovered, setIsCardHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const currentAnchorRef = useRef<HTMLAnchorElement | null>(null);

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleMouseEnter = useCallback((e: MouseEvent) => {
    const target = (e.target as HTMLElement)?.closest("a") as HTMLAnchorElement | null;
    if (!target) return;

    const href = target.getAttribute("href") || target.dataset.href;
    if (!href) return;

    // Only trigger for external web links (http or https)
    if (!href.startsWith("http://") && !href.startsWith("https://")) {
      return;
    }

    try {
      const url = new URL(href);
      // Skip if same origin as current site
      if (typeof window !== "undefined" && url.hostname === window.location.hostname) {
        return;
      }

      currentAnchorRef.current = target;
      clearTimer();

      timerRef.current = setTimeout(() => {
        const rect = target.getBoundingClientRect();
        setHoverCard({
          href,
          title: target.innerText?.trim() || url.hostname,
          hostname: url.hostname.replace(/^www\./, ""),
          pathname: url.pathname === "/" ? "" : url.pathname,
          rect,
        });
      }, 180);
    } catch {
      // Invalid URL format, ignore
    }
  }, []);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    const relatedTarget = e.relatedTarget as HTMLElement | null;
    // Don't close if moving into the hover card
    if (relatedTarget?.closest("#link-hover-card-root")) {
      return;
    }

    clearTimer();
    timerRef.current = setTimeout(() => {
      if (!isCardHovered) {
        setHoverCard(null);
        currentAnchorRef.current = null;
      }
    }, 150);
  }, [isCardHovered]);

  useEffect(() => {
    const container = document.querySelector("article") || document.body;
    if (!container) return;

    const links = container.querySelectorAll<HTMLAnchorElement>(
      "a.blog-external-link, .blog-prose a, [data-href]"
    );

    links.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnter as any);
      link.addEventListener("mouseleave", handleMouseLeave as any);
    });

    const handleScroll = () => {
      if (hoverCard && currentAnchorRef.current) {
        const rect = currentAnchorRef.current.getBoundingClientRect();
        setHoverCard((prev) => (prev ? { ...prev, rect } : null));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter as any);
        link.removeEventListener("mouseleave", handleMouseLeave as any);
      });
      window.removeEventListener("scroll", handleScroll);
      clearTimer();
    };
  }, [handleMouseEnter, handleMouseLeave, hoverCard]);

  if (!hoverCard) return null;

  // Position calculation (place above link if enough room, else below)
  const cardWidth = 320;
  const cardHeight = 110;
  const spaceAbove = hoverCard.rect.top;
  const placeAbove = spaceAbove > cardHeight + 20;

  const top = placeAbove
    ? hoverCard.rect.top - cardHeight - 12
    : hoverCard.rect.bottom + 12;

  // Center horizontally relative to anchor, bound within viewport
  let left = hoverCard.rect.left + hoverCard.rect.width / 2 - cardWidth / 2;
  const padding = 16;
  if (typeof window !== "undefined") {
    if (left < padding) left = padding;
    if (left + cardWidth > window.innerWidth - padding) {
      left = window.innerWidth - padding - cardWidth;
    }
  }

  const faviconUrl = `https://www.google.com/s2/favicons?domain=${hoverCard.hostname}&sz=64`;

  return (
    <AnimatePresence>
      <motion.div
        id="link-hover-card-root"
        initial={{ opacity: 0, y: placeAbove ? 6 : -6, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: placeAbove ? 4 : -4, scale: 0.96 }}
        transition={{ duration: 0.16, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: `${top}px`,
          left: `${left}px`,
          width: `${cardWidth}px`,
          zIndex: 9990,
        }}
        onMouseEnter={() => {
          clearTimer();
          setIsCardHovered(true);
        }}
        onMouseLeave={() => {
          setIsCardHovered(false);
          setHoverCard(null);
          currentAnchorRef.current = null;
        }}
        className="pointer-events-auto rounded-2xl bg-white border border-[#E2DBD0] shadow-[0_12px_36px_rgba(11,27,58,0.18)] p-4 text-[#0B1B3A] select-none"
      >
        <div className="flex items-start gap-3">
          {/* Favicon / Host Icon */}
          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center shrink-0 p-1.5 overflow-hidden shadow-xs">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={faviconUrl}
              alt={hoverCard.hostname}
              width={24}
              height={24}
              className="w-5 h-5 object-contain"
              onError={(e) => {
                // If favicon fails to load, swap to fallback icon
                (e.target as HTMLElement).style.display = "none";
              }}
            />
            <Globe className="w-4 h-4 text-slate-400 -ml-5 [img:not([style*='display: none'])+&]:hidden" />
          </div>

          {/* Details */}
          <div className="space-y-1 min-w-0 flex-1">
            <div className="flex items-center justify-between gap-1.5">
              <span className="font-display font-bold text-sm text-[#0B1B3A] truncate">
                {hoverCard.hostname}
              </span>
              <span className="shrink-0 px-2 py-0.5 rounded-full bg-[#FFB020]/15 text-[#B87A00] text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                <span>External</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </span>
            </div>

            <p className="text-xs text-slate-500 truncate font-mono">
              {hoverCard.pathname || "/"}
            </p>

            <div className="pt-1 flex items-center gap-1.5 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="truncate">Verified link • Click to visit</span>
            </div>
          </div>
        </div>

        {/* Tail indicator */}
        <div
          className={placeAbove ? "absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b border-r border-[#E2DBD0] rotate-45" : "absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-[#E2DBD0] rotate-45"}
        />
      </motion.div>
    </AnimatePresence>
  );
}

