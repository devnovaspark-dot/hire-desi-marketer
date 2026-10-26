"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Clock,
  ArrowRight,
  Sparkles,
  Bookmark,
  ChevronDown,
  FolderOpen,
  Check,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import { BlogPost, BlogCategory } from "@/types/blog";
import { cn } from "@/lib/utils";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.652-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

interface BlogListClientProps {
  initialPosts: BlogPost[];
  categories: BlogCategory[];
}

export function BlogListClient({ initialPosts, categories }: BlogListClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<"latest" | "popular">("latest");
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setNewsletterEmail("");
    }, 4000);
  };

  // Filter & sort posts
  const filteredPosts = useMemo(() => {
    let list = initialPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "all" || post.category.slug === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q)) ||
        post.author.name.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });

    if (sortBy === "popular") {
      list = [...list].sort((a, b) => b.readTimeMinutes - a.readTimeMinutes);
    } else {
      list = [...list].sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    }

    return list;
  }, [initialPosts, selectedCategory, searchQuery, sortBy]);

  // Featured post is the first article in the filtered view
  const featuredPost = filteredPosts[0] || null;
  const gridPosts = filteredPosts.slice(1);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    initialPosts.forEach((post) => {
      counts[post.category.slug] = (counts[post.category.slug] || 0) + 1;
    });
    return counts;
  }, [initialPosts]);

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* ============================================================== */}
      {/* 1. Category Filter Pills & Sort Selector Row (Global Palette)  */}
      {/* ============================================================== */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2DBD0]">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.slug;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.slug)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs sm:text-[13px] font-extrabold tracking-tight transition-all duration-150 cursor-pointer whitespace-nowrap select-none",
                  isActive
                    ? "bg-[#060B22] text-[#FFB020] border border-[#FFB020]/60 shadow-[inset_0_2px_6px_rgba(0,0,0,0.95)]"
                    : "bg-white text-slate-700 hover:text-[#060B22] hover:bg-slate-100 border border-[#E2DBD0] shadow-xs"
                )}
              >
                {cat.id === "all" ? "All Stories" : cat.title}
              </button>
            );
          })}
        </div>

        {/* Sort Selector Dropdown */}
        <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
          <div className="relative inline-block text-xs">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "latest" | "popular")}
              className="appearance-none bg-white border border-[#E2DBD0] text-[#0B1B3A] font-extrabold py-2 pl-3.5 pr-8 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FFB020] text-xs shadow-sm"
            >
              <option value="latest">Latest Stories</option>
              <option value="popular">Most In-Depth</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. Main 2-Column Asymmetric Grid Layout                       */}
      {/* ============================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* ============================================================ */}
        {/* LEFT COLUMN: Featured Post + 2-Col Articles Subgrid (8 Cols) */}
        {/* ============================================================ */}
        <div className="lg:col-span-8 space-y-8">
          {filteredPosts.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-white border border-[#E2DBD0] space-y-4 shadow-sm">
              <FolderOpen className="w-12 h-12 text-[#FFB020] mx-auto" />
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0B1B3A]">
                {initialPosts.length === 0
                  ? "No Articles Published Yet"
                  : "No Playbooks Match Your Search"}
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                {initialPosts.length === 0
                  ? "All mock articles have been removed. Connect your Sanity Studio CMS project and publish your first article to see it appear live here instantly!"
                  : "Try clearing your search query or selecting a different category to view articles."}
              </p>
              {initialPosts.length > 0 && (
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="btn-luxury-gold btn-shimmer px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider"
                >
                  Reset All Filters
                </button>
              )}
            </div>
          ) : (
            <>
              {/* Featured Horizontal Card (Tactile Skeuomorphic Light) */}
              {featuredPost && (
                <article className="group relative rounded-3xl skeuo-card-light overflow-hidden transition-all duration-300">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-0">
                    {/* Thumbnail Image (Left) */}
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="sm:col-span-5 relative min-h-[240px] sm:min-h-full overflow-hidden block"
                    >
                      <Image
                        src={featuredPost.coverImage}
                        alt={featuredPost.coverImageAlt}
                        fill
                        priority
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, 360px"
                      />
                    </Link>

                    {/* Content (Right) */}
                    <div className="sm:col-span-7 p-6 sm:p-7 flex flex-col justify-between space-y-4">
                      <div className="space-y-2.5">
                        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#060B22] text-[#FFB020] text-[10px] font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
                          {featuredPost.category.title}
                        </div>

                        <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0B1B3A] group-hover:text-[#FFB020] transition-colors leading-snug">
                          <Link href={`/blog/${featuredPost.slug}`}>
                            {featuredPost.title}
                          </Link>
                        </h3>

                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                          {featuredPost.excerpt}
                        </p>
                      </div>

                      {/* Author row & Read button */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-200 shrink-0">
                            <Image
                              src={featuredPost.author.image}
                              alt={featuredPost.author.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="text-xs font-black uppercase tracking-tight text-[#0B1B3A]">
                              {featuredPost.author.name}
                            </div>
                            <div className="text-[11px] text-slate-500">
                              {new Date(featuredPost.publishedAt).toLocaleDateString(
                                "en-US",
                                { month: "short", day: "numeric", year: "numeric" }
                              )}{" "}
                              • {featuredPost.readTimeMinutes} min read
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => toggleBookmark(featuredPost.id, e)}
                            title="Save for later"
                            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-[#0B1B3A] transition-colors cursor-pointer"
                          >
                            <Bookmark
                              className={cn(
                                "w-4 h-4",
                                bookmarkedIds.has(featuredPost.id)
                                  ? "fill-[#FFB020] text-[#FFB020]"
                                  : ""
                              )}
                            />
                          </button>
                          <Link
                            href={`/blog/${featuredPost.slug}`}
                            className="btn-luxury-gold btn-shimmer px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider inline-flex items-center gap-1 shadow-sm"
                          >
                            <span>Read</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              )}

              {/* 2-Column Articles Subgrid */}
              {gridPosts.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {gridPosts.map((post) => (
                    <article
                      key={post.id}
                      className="group flex flex-col justify-between rounded-3xl skeuo-card-light overflow-hidden transition-all duration-300 hover:-translate-y-1"
                    >
                      <div>
                        {/* Thumbnail */}
                        <Link
                          href={`/blog/${post.slug}`}
                          className="block relative aspect-[16/10] overflow-hidden"
                        >
                          <Image
                            src={post.coverImage}
                            alt={post.coverImageAlt}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 640px) 100vw, 360px"
                          />
                        </Link>

                        {/* Body */}
                        <div className="p-5 sm:p-6 space-y-2.5">
                          <span className="text-[10px] font-black uppercase tracking-wider text-[#FFB020] bg-[#060B22] px-2 py-0.5 rounded border border-[#FFB020]/30 inline-block shadow-xs">
                            {post.category.title}
                          </span>

                          <h4 className="font-display font-bold text-base sm:text-lg text-[#0B1B3A] group-hover:text-[#FFB020] transition-colors leading-snug line-clamp-2">
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                          </h4>

                          <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed line-clamp-2">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="relative w-7 h-7 rounded-full overflow-hidden border border-slate-200 shrink-0">
                            <Image
                              src={post.author.image}
                              alt={post.author.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[11px] font-black uppercase tracking-tight text-[#0B1B3A] truncate">
                              {post.author.name}
                            </div>
                            <div className="text-[10px] text-slate-500 truncate">
                              {new Date(post.publishedAt).toLocaleDateString(
                                "en-US",
                                { month: "short", day: "numeric" }
                              )}{" "}
                              • {post.readTimeMinutes}m
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            onClick={(e) => toggleBookmark(post.id, e)}
                            title="Save for later"
                            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-[#0B1B3A] transition-colors cursor-pointer"
                          >
                            <Bookmark
                              className={cn(
                                "w-3.5 h-3.5",
                                bookmarkedIds.has(post.id)
                                  ? "fill-[#FFB020] text-[#FFB020]"
                                  : ""
                              )}
                            />
                          </button>

                          <Link
                            href={`/blog/${post.slug}`}
                            className="btn-luxury-navy px-3 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider inline-flex items-center gap-1 shadow-sm"
                          >
                            <span>Read</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* ============================================================ */}
        {/* RIGHT COLUMN: Sticky Sidebar Widgets (4 Cols)                */}
        {/* ============================================================ */}
        <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
          {/* Widget 1: Search Stories */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search playbooks, SEO, ads..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-[#E2DBD0] text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FFB020] shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Widget 2: Categories Box */}
          <div className="p-6 rounded-3xl skeuo-card-light space-y-4">
            <h4 className="font-display font-bold text-base text-[#0B1B3A]">
              Categories
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              {categories
                .filter((c) => c.slug !== "all")
                .map((cat) => {
                  const isSelected = selectedCategory === cat.slug;
                  const count = categoryCounts[cat.slug] || 0;
                  return (
                    <li key={cat.id}>
                      <button
                        onClick={() => setSelectedCategory(cat.slug)}
                        className={cn(
                          "w-full flex items-center justify-between py-2 px-3 rounded-xl transition-colors cursor-pointer text-left font-medium",
                          isSelected
                            ? "bg-[#060B22] text-[#FFB020] font-bold shadow-xs"
                            : "text-slate-700 hover:bg-slate-100 hover:text-[#0B1B3A]"
                        )}
                      >
                        <span className="flex items-center gap-2">
                          <span
                            className={cn(
                              "w-1.5 h-1.5 rounded-full",
                              isSelected ? "bg-[#FFB020]" : "bg-slate-400"
                            )}
                          />
                          <span>{cat.title}</span>
                        </span>
                        <span className="text-[11px] px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600 font-bold">
                          {count}
                        </span>
                      </button>
                    </li>
                  );
                })}
            </ul>

            <button
              onClick={() => setSelectedCategory("all")}
              className="text-xs font-black uppercase tracking-wider text-[#FFB020] hover:text-[#F0A010] pt-2 flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>View All Categories</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Widget 3: Newsletter Subscribe Box */}
          <div className="p-6 rounded-3xl skeuo-card-light space-y-3.5">
            <h4 className="font-display font-bold text-base text-[#0B1B3A]">
              Stay Inspired Every Week
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Get confidential offshore benchmarks, SEO algorithm teardowns, and pod management templates.
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>You&apos;re subscribed to Desi Marketer Intelligence!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2.5">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2DBD0] text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FFB020]"
                />
                <button
                  type="submit"
                  className="btn-luxury-gold btn-shimmer w-full py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                >
                  <span>Subscribe Free</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Widget 4: Agency Revenue / Squad Conversion Card (Global Dark Skeuo) */}
          <div className="p-6 sm:p-7 rounded-3xl skeuo-card-dark text-white space-y-4 relative overflow-hidden">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-slate-200 text-[10px] font-black uppercase tracking-wider border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Pan-India Growth Team · Bhubaneswar HQ</span>
            </div>

            <h4 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight leading-snug">
              Ready to Scale Your Marketing Team?
            </h4>

            <p className="text-xs text-slate-300 leading-relaxed">
              Pre-vetted Indian SEO specialists, paid media buyers, and motion designers ready inside your Slack in 48 hours.
            </p>

            <div className="space-y-2.5 pt-1">
              <Link
                href="/#quote"
                className="btn-luxury-gold btn-shimmer w-full py-2.5 px-4 rounded-xl text-center text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href="https://wa.me/918280788689"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-slate-200 text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp (+91 82807 88689)</span>
              </a>
            </div>
          </div>
        </aside>
      </div>

      {/* ============================================================== */}
      {/* 3. Bottom Pre-Footer Conversion Section (Skeuo-Card Dark)     */}
      {/* ============================================================== */}
      <section className="mt-16 sm:mt-20 p-8 sm:p-14 rounded-3xl skeuo-card-dark text-white text-center relative overflow-hidden">
        {/* Ambient Radial Backlight */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[550px] h-[250px] bg-gradient-to-r from-[#FFB020]/20 via-blue-600/15 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-3xl mx-auto space-y-5 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFB020]/15 text-[#FFB020] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30">
            <span>★</span>
            <span>Confidential Strategic Review</span>
          </div>

          <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Ready for Marketing <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE28A] via-[#FFB020] to-[#E68A00]">
              That Directly Drives Revenue?
            </span>
          </h3>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Let&apos;s talk about your growth. Send us your question for a free, confidential growth assessment and 90-day execution blueprint tailored to your industry.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Link
              href="/#quote"
              className="w-full sm:w-auto btn-luxury-gold btn-shimmer px-7 py-3.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Find Your Fastest Path to Growth</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/#work"
              className="w-full sm:w-auto btn-luxury-navy px-7 py-3.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Explore Verified Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
