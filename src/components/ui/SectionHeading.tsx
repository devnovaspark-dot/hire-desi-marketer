import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  kicker?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center max-w-3xl mx-auto" : "items-start text-left max-w-2xl",
        className
      )}
    >
      {kicker && (
        <span
          className={cn(
            "text-xs sm:text-sm font-extrabold uppercase tracking-[0.14em]",
            isDark ? "text-[#FFB020]" : "text-[#9A5B00]"
          )}
        >
          {kicker}
        </span>
      )}

      <h2
        className={cn(
          "font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.12]",
          isDark ? "text-white" : "text-[#0B1B3A]"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed font-normal",
            isDark ? "text-slate-300" : "text-[#5A6680]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
