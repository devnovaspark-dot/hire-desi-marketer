"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ZoomIn } from "lucide-react";
import { useImageZoom } from "./ImageZoomContext";

interface BlogCoverImageProps {
  src: string;
  alt: string;
  badge?: string;
}

export function BlogCoverImage({ src, alt, badge }: BlogCoverImageProps) {
  const { openZoom } = useImageZoom();

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => openZoom({ src, alt, badge })}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openZoom({ src, alt, badge });
        }
      }}
      className="relative aspect-[16/11] w-full rounded-3xl overflow-hidden skeuo-card-light border border-[#E2DBD0] shadow-xl group cursor-zoom-in focus:outline-hidden focus:ring-2 focus:ring-[#FFB020]"
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
        sizes="(max-width: 1024px) 100vw, 520px"
      />

      {/* Visual Badge overlay */}
      <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-full bg-[#060B22]/90 backdrop-blur-md border border-[#FFB020]/40 text-[#FFB020] text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5">
        <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
        <span>{badge || "Verified Strategic Guide"}</span>
      </div>

      {/* Hover Zoom pill */}
      <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#060B22]/90 text-[#FFB020] border border-[#FFB020]/40 text-xs font-black uppercase tracking-wider backdrop-blur-md shadow-xl">
          <ZoomIn className="w-3.5 h-3.5" />
          <span>Click to Zoom</span>
        </div>
      </div>
    </div>
  );
}
