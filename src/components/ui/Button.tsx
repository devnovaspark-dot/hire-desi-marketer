"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "dark" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  target?: string;
  rel?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  isLoading = false,
  leftIcon,
  rightIcon,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold tracking-tight rounded-xl transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer text-center";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5 shadow-sm",
  };

  const variantStyles = {
    primary:
      "bg-[#FFB020] text-[#060B22] hover:bg-[#FFA200] hover:shadow-md hover:shadow-[#FFB020]/20 border border-[#FFA200]",
    secondary:
      "bg-[#0B1B3A] text-white hover:bg-[#132854] hover:shadow-md border border-[#132854]",
    outline:
      "bg-white text-[#0B1B3A] border border-[#E8E3D8] hover:border-[#0B1B3A] hover:bg-[#F6F4EE]",
    dark:
      "bg-[#131E44] text-white border border-white/10 hover:border-[#FFB020] hover:text-[#FFB020]",
    ghost:
      "bg-transparent text-[#0B1B3A] hover:bg-black/5 hover:text-[#060B22]",
  };

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && (
        <span className="inline-flex shrink-0 transition-transform group-hover:translate-x-0.5">
          {rightIcon}
        </span>
      )}
    </>
  );

  if (href) {
    const isAnchor = href.startsWith("#");
    return (
      <Link
        href={href}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...(isAnchor ? {} : { target: props.target, rel: props.rel })}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled || isLoading}
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {content}
    </button>
  );
}
