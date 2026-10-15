import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "navy" | "dark" | "outline" | "success" | "muted";
  size?: "sm" | "md";
  hasPulseDot?: boolean;
  className?: string;
}

export function Badge({
  children,
  variant = "outline",
  size = "md",
  hasPulseDot = false,
  className,
}: BadgeProps) {
  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-[11px]",
    md: "px-3 py-1 text-xs",
  };

  const variantStyles = {
    gold: "bg-[#FFB020]/15 text-[#9A5B00] border border-[#FFB020]/40 font-semibold",
    navy: "bg-[#0B1B3A] text-white border border-[#0B1B3A] font-semibold",
    dark: "bg-white/10 text-white/90 border border-white/15 font-medium backdrop-blur-sm",
    outline: "bg-white text-[#0B1B3A] border border-[#E8E3D8] font-semibold",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold",
    muted: "bg-[#EFECE3] text-[#5A6680] border border-[#E8E3D8] font-medium",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full tracking-wide shrink-0",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {hasPulseDot && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
      )}
      {children}
    </span>
  );
}
