import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  priority?: boolean;
}

export function BrandLogo({ className = "", size = "md", priority = false }: BrandLogoProps) {
  const dimensions = {
    sm: { width: 163, height: 30, className: "h-7 sm:h-8 w-auto" },
    md: { width: 196, height: 36, className: "h-8 sm:h-9 w-auto" },
    lg: { width: 240, height: 44, className: "h-10 sm:h-11 w-auto" },
  }[size];

  return (
    <div className={`flex items-center shrink-0 ${className}`}>
      <Image
        src="/images/hdm-logo.webp"
        alt="Hire Desi Marketer"
        width={dimensions.width}
        height={dimensions.height}
        priority={priority}
        className={`object-contain ${dimensions.className} select-none`}
      />
    </div>
  );
}
