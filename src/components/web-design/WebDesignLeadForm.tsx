"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  ShieldCheck,
  Lock,
  Globe,
  DollarSign,
  Building,
  User,
  Mail,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface WebDesignLeadFormProps {
  formId?: string;
  sourceTag?: string;
  title?: string;
  subtitle?: string;
  variant?: "light" | "dark";
  className?: string;
}

export function WebDesignLeadForm({
  formId = "web-design-lead-form",
  sourceTag = "Web Design Landing Page - Hero Form",
  title = "Get a Free Website Consultation",
  subtitle = "Tell us about your project & receive a custom proposal within 24 hours.",
  variant = "light",
  className,
}: WebDesignLeadFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [serviceRequired, setServiceRequired] = useState(
    "Custom Website Design & Development"
  );
  const [projectBudget, setProjectBudget] = useState("$1,000 - $3,000");
  const [projectDescription, setProjectDescription] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!fullName.trim()) {
      setError("Please provide your full name.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setError("Please enter a valid work email address.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim(),
          company: company.trim() || "Not specified",
          websiteUrl: websiteUrl.trim() || "N/A",
          serviceInterest: `[Web Dev] ${serviceRequired}`,
          budget: projectBudget,
          message: projectDescription.trim() || "No additional notes provided.",
          source: sourceTag,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error("Web design lead form submission error:", err);
      setError(
        err.message ||
          "Something went wrong submitting your request. Please try again or reach out on WhatsApp."
      );
    } finally {
      setLoading(false);
    }
  };

  const isDark = variant === "dark";

  return (
    <div
      id={formId}
      className={cn(
        "rounded-3xl p-6 sm:p-8 transition-all relative overflow-hidden",
        isDark
          ? "skeuo-card-dark text-white border border-white/15 shadow-2xl"
          : "skeuo-card-light text-[#0B1B3A] border border-[#E2DBD0] shadow-xl bg-white/95 backdrop-blur-md",
        className
      )}
    >
      {/* Decorative Accent Glow */}
      <div
        className={cn(
          "absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-40",
          isDark ? "bg-[#FFB020]/20" : "bg-[#FFB020]/30"
        )}
      />

      {submitted ? (
        <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border-2 border-emerald-500/30 text-emerald-500 flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="space-y-2">
            <h3
              className={cn(
                "font-display font-black text-2xl tracking-tight",
                isDark ? "text-white" : "text-[#0B1B3A]"
              )}
            >
              Consultation Request Received!
            </h3>
            <p
              className={cn(
                "text-xs sm:text-sm max-w-md mx-auto leading-relaxed",
                isDark ? "text-slate-300" : "text-slate-600"
              )}
            >
              Thank you, <strong className="text-[#FFB020]">{fullName}</strong>.
              Our web design &amp; technical architecture team will review your
              requirements and deliver a tailored roadmap and quote within{" "}
              <strong>24 hours</strong>.
            </p>
          </div>

          <div
            className={cn(
              "p-4 rounded-2xl border text-xs text-left max-w-md mx-auto space-y-1.5",
              isDark
                ? "bg-white/5 border-white/10 text-slate-300"
                : "bg-slate-50 border-[#E2DBD0] text-slate-700"
            )}
          >
            <div className="flex items-center justify-between font-bold">
              <span>Service Selected:</span>
              <span className="text-[#FFB020]">{serviceRequired}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Budget Bracket:</span>
              <span className="font-semibold">{projectBudget}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Response Channel:</span>
              <span className="font-mono text-[11px]">{email}</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/918280788689"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <span>Instant Chat on WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setProjectDescription("");
              }}
              className={cn(
                "w-full sm:w-auto px-4 py-2.5 rounded-xl border text-xs font-bold transition-colors cursor-pointer",
                isDark
                  ? "border-white/20 text-slate-300 hover:bg-white/10"
                  : "border-[#E2DBD0] text-slate-600 hover:bg-slate-100"
              )}
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5 text-left border-b pb-3.5 border-slate-200/50">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FFB020]/20 text-[#B87A00] dark:text-[#FFB020] text-[10px] font-black uppercase tracking-wider border border-[#FFB020]/30">
              <Sparkles className="w-3 h-3 text-[#FFB020]" />
              <span>Fast 24-Hour Estimate</span>
            </div>
            <h3
              className={cn(
                "font-display font-black text-xl sm:text-2xl tracking-tight leading-snug",
                isDark ? "text-white" : "text-[#0B1B3A]"
              )}
            >
              {title}
            </h3>
            <p
              className={cn(
                "text-xs leading-relaxed",
                isDark ? "text-slate-300" : "text-slate-600"
              )}
            >
              {subtitle}
            </p>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Row 1: Full Name & Business Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="space-y-1 text-left">
              <label
                htmlFor={`${formId}-name`}
                className={cn(
                  "block text-[11px] font-bold uppercase tracking-wider",
                  isDark ? "text-slate-300" : "text-slate-700"
                )}
              >
                Full Name <span className="text-amber-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  id={`${formId}-name`}
                  type="text"
                  required
                  placeholder="e.g. Michael Scott"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={cn(
                    "w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#FFB020] transition-all",
                    isDark
                      ? "bg-white/10 border-white/20 text-white placeholder-slate-400"
                      : "bg-slate-50/80 border-[#E2DBD0] text-[#0B1B3A] placeholder-slate-400"
                  )}
                />
              </div>
            </div>

            <div className="space-y-1 text-left">
              <label
                htmlFor={`${formId}-email`}
                className={cn(
                  "block text-[11px] font-bold uppercase tracking-wider",
                  isDark ? "text-slate-300" : "text-slate-700"
                )}
              >
                Business Email <span className="text-amber-500">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  id={`${formId}-email`}
                  type="email"
                  required
                  placeholder="michael@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={cn(
                    "w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#FFB020] transition-all",
                    isDark
                      ? "bg-white/10 border-white/20 text-white placeholder-slate-400"
                      : "bg-slate-50/80 border-[#E2DBD0] text-[#0B1B3A] placeholder-slate-400"
                  )}
                />
              </div>
            </div>
          </div>

          {/* Row 2: Company Name & Website URL */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="space-y-1 text-left">
              <label
                htmlFor={`${formId}-company`}
                className={cn(
                  "block text-[11px] font-bold uppercase tracking-wider",
                  isDark ? "text-slate-300" : "text-slate-700"
                )}
              >
                Company Name <span className="text-amber-500">*</span>
              </label>
              <div className="relative">
                <Building className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  id={`${formId}-company`}
                  type="text"
                  required
                  placeholder="Acme Growth Inc."
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className={cn(
                    "w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#FFB020] transition-all",
                    isDark
                      ? "bg-white/10 border-white/20 text-white placeholder-slate-400"
                      : "bg-slate-50/80 border-[#E2DBD0] text-[#0B1B3A] placeholder-slate-400"
                  )}
                />
              </div>
            </div>

            <div className="space-y-1 text-left">
              <label
                htmlFor={`${formId}-url`}
                className={cn(
                  "block text-[11px] font-bold uppercase tracking-wider",
                  isDark ? "text-slate-300" : "text-slate-700"
                )}
              >
                Website URL <span className="text-slate-400 text-[10px] font-normal">(Optional)</span>
              </label>
              <div className="relative">
                <Globe className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  id={`${formId}-url`}
                  type="url"
                  placeholder="https://yourwebsite.com"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  className={cn(
                    "w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#FFB020] transition-all",
                    isDark
                      ? "bg-white/10 border-white/20 text-white placeholder-slate-400"
                      : "bg-slate-50/80 border-[#E2DBD0] text-[#0B1B3A] placeholder-slate-400"
                  )}
                />
              </div>
            </div>
          </div>

          {/* Row 3: Service Required & Project Budget */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="space-y-1 text-left">
              <label
                htmlFor={`${formId}-service`}
                className={cn(
                  "block text-[11px] font-bold uppercase tracking-wider",
                  isDark ? "text-slate-300" : "text-slate-700"
                )}
              >
                Service Required
              </label>
              <select
                id={`${formId}-service`}
                value={serviceRequired}
                onChange={(e) => setServiceRequired(e.target.value)}
                className={cn(
                  "w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#FFB020] transition-all cursor-pointer font-medium",
                  isDark
                    ? "bg-[#0B132B] border-white/20 text-white"
                    : "bg-slate-50/80 border-[#E2DBD0] text-[#0B1B3A]"
                )}
              >
                <option value="Custom Website Design & Development">Custom Website Design &amp; Development</option>
                <option value="Website Redesign & Modernization">Website Redesign &amp; Modernization</option>
                <option value="E-commerce Website Development (Shopify/Woo)">E-commerce Development (Shopify / Woo)</option>
                <option value="CMS Website Development (WordPress/Webflow)">CMS Development (WordPress / Webflow)</option>
                <option value="Website Maintenance & Enhancement">Website Maintenance &amp; Technical Support</option>
                <option value="Website Speed & Core Web Vitals Optimization">Website Speed &amp; Core Web Vitals Tuning</option>
                <option value="Custom Web Application (React/Next/Node)">Custom Web Application (React/Next/Node)</option>
                <option value="UI/UX Design & Conversion Optimization">UI/UX Design &amp; Conversion Optimization</option>
              </select>
            </div>

            <div className="space-y-1 text-left">
              <label
                htmlFor={`${formId}-budget`}
                className={cn(
                  "block text-[11px] font-bold uppercase tracking-wider",
                  isDark ? "text-slate-300" : "text-slate-700"
                )}
              >
                Project Budget
              </label>
              <div className="relative">
                <DollarSign className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <select
                  id={`${formId}-budget`}
                  value={projectBudget}
                  onChange={(e) => setProjectBudget(e.target.value)}
                  className={cn(
                    "w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#FFB020] transition-all cursor-pointer font-medium",
                    isDark
                      ? "bg-[#0B132B] border-white/20 text-white"
                      : "bg-slate-50/80 border-[#E2DBD0] text-[#0B1B3A]"
                  )}
                >
                  <option value="Under $1,000">Under $1,000 (Hourly / Quick Fixes)</option>
                  <option value="$1,000 - $3,000">$1,000 - $3,000 (Standard Business Site)</option>
                  <option value="$3,000 - $5,000">$3,000 - $5,000 (Custom E-Commerce / Redesign)</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000 (Full-Scale Web Platform)</option>
                  <option value="$10,000+">$10,000+ (Custom SaaS / Dedicated Team)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Project Description */}
          <div className="space-y-1 text-left">
            <label
              htmlFor={`${formId}-desc`}
              className={cn(
                "block text-[11px] font-bold uppercase tracking-wider",
                isDark ? "text-slate-300" : "text-slate-700"
              )}
            >
              Project Description / Specific Needs
            </label>
            <textarea
              id={`${formId}-desc`}
              rows={3}
              placeholder="Tell us briefly about your goals, current website issues, target launch date, or reference websites you admire..."
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              className={cn(
                "w-full p-3 text-xs sm:text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#FFB020] transition-all leading-relaxed",
                isDark
                  ? "bg-white/10 border-white/20 text-white placeholder-slate-400"
                  : "bg-slate-50/80 border-[#E2DBD0] text-[#0B1B3A] placeholder-slate-400"
              )}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="btn-luxury-gold btn-shimmer w-full py-3 px-6 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-70 transition-all"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Preparing Your Free Proposal...</span>
              </>
            ) : (
              <>
                <span>Get Free Consultation &amp; Estimate</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>

          {/* Security & Privacy Reassurance */}
          <div className="flex items-center justify-center gap-4 text-[10px] text-slate-500 pt-1">
            <span className="flex items-center gap-1">
              <Lock className="w-3 h-3 text-[#FFB020]" />
              <span>100% Confidential · Strict NDA</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-500" />
              <span>No Obligation Proposal</span>
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
