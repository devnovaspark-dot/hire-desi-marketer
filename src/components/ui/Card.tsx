import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "light" | "dark" | "cream" | "glass-dark" | "glass-light";
  hoverEffect?: boolean;
  className?: string;
}

export function Card({
  children,
  variant = "light",
  hoverEffect = false,
  className,
  ...props
}: CardProps) {
  const variantStyles = {
    light: "bg-white text-[#0B1B3A] border border-[#E8E3D8] shadow-sm",
    dark: "bg-[#0D1636] text-white border border-white/10 shadow-xl",
    cream: "bg-[#F6F4EE] text-[#0B1B3A] border border-[#E8E3D8]",
    "glass-dark":
      "bg-[#0D1636]/80 text-white border border-white/10 backdrop-blur-md shadow-2xl",
    "glass-light":
      "bg-white/85 text-[#0B1B3A] border border-[#E8E3D8] backdrop-blur-md shadow-sm",
  };

  const hoverStyles = hoverEffect
    ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#FFB020]/50"
    : "";

  return (
    <div
      className={cn(
        "rounded-2xl p-6 sm:p-8",
        variantStyles[variant],
        hoverStyles,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
