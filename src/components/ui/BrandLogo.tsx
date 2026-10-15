import React from "react";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function BrandLogo({ className = "", size = "md" }: BrandLogoProps) {
  const dimensions = {
    sm: { svgWidth: 84, svgHeight: 30, titleSize: "text-[18px]", subSize: "text-[9px]" },
    md: { svgWidth: 104, svgHeight: 37, titleSize: "text-[21px]", subSize: "text-[10px]" },
    lg: { svgWidth: 118, svgHeight: 42, titleSize: "text-[23px]", subSize: "text-[11px]" },
  }[size];

  return (
    <div className={`flex items-center gap-3 shrink-0 ${className}`}>
      {/* Official HDM Brand Mascot & Megaphone Vector Mark */}
      <svg
        width={dimensions.svgWidth}
        height={dimensions.svgHeight}
        viewBox="0 0 268 96"
        role="img"
        aria-label="Hire Desi Marketer official logo"
        className="shrink-0"
      >
        <g strokeLinejoin="round" strokeWidth="5">
          <path transform="translate(5 5)" d="M4 14 h18 v26 h22 v-26 h18 v68 h-18 v-26 h-22 v26 h-18 z" fill="#E8590C" stroke="#E8590C" />
          <path d="M4 14 h18 v26 h22 v-26 h18 v68 h-18 v-26 h-22 v26 h-18 z" fill="#FFC21A" stroke="#FFC21A" />
          <path transform="translate(5 5)" fillRule="evenodd" d="M82 14 h28 a34 34 0 0 1 0 68 h-28 z M100 30 h10 a18 18 0 0 1 0 36 h-10 z" fill="#0B2E8A" stroke="#0B2E8A" />
          <path fillRule="evenodd" d="M82 14 h28 a34 34 0 0 1 0 68 h-28 z M100 30 h10 a18 18 0 0 1 0 36 h-10 z" fill="#1D5FD6" stroke="#1D5FD6" />
          <path transform="translate(5 5)" d="M162 82 V14 h17 l15 22 l15 -22 h17 v68 h-17 v-38 l-15 20 l-15 -20 v38 z" fill="#E8590C" stroke="#E8590C" />
          <path d="M162 82 V14 h17 l15 22 l15 -22 h17 v68 h-17 v-38 l-15 20 l-15 -20 v38 z" fill="#FFC21A" stroke="#FFC21A" />
        </g>
        <circle cx="99" cy="13" r="9" fill="#FFFFFF" stroke="#0B1B3A" strokeWidth="3.4" />
        <circle cx="121" cy="13" r="9" fill="#FFFFFF" stroke="#0B1B3A" strokeWidth="3.4" />
        <path d="M108 12 Q110 9.5 112 12" fill="none" stroke="#0B1B3A" strokeWidth="3" />
        <circle cx="100.5" cy="14" r="3.4" fill="#0B1B3A" />
        <circle cx="122.5" cy="14" r="3.4" fill="#0B1B3A" />
        <circle cx="101.6" cy="12.8" r="1.1" fill="#FFFFFF" />
        <circle cx="123.6" cy="12.8" r="1.1" fill="#FFFFFF" />
        <path d="M100 30 h10 a18 18 0 0 1 0 36 h-10 z" fill="#EAF1FF" />
        <path d="M103 50 Q110 59 117 50 Q110 53 103 50 Z" fill="#0B1B3A" />
        <g transform="translate(230 14) rotate(-18) scale(1.25)">
          <path d="M0 8 L18 0 V26 L0 18 Z" fill="#FFFFFF" />
          <path d="M18 0 C22 4 22 22 18 26" fill="#1D5FD6" />
          <rect x="-6" y="8" width="7" height="10" rx="2" fill="#FFFFFF" />
        </g>
        <path d="M256 8 L262 3 M258 22 H265 M255 35 L261 40" stroke="#FFC21A" strokeWidth="3.4" strokeLinecap="round" />
      </svg>

      {/* Official HDM Typography */}
      <div className="flex flex-col leading-none text-left select-none">
        <span className={`font-display font-black ${dimensions.titleSize} text-white tracking-[-0.03em] leading-none`}>
          Hire Desi
        </span>
        <span className={`${dimensions.subSize} font-black tracking-[0.42em] text-[#FFB020] uppercase leading-none mt-1`}>
          MARKETER
        </span>
      </div>
    </div>
  );
}
