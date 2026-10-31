import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Clock,
  Calendar,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Share2,
  ExternalLink,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/sanity/service";
import { PortableTextRenderer } from "@/components/blog/PortableTextRenderer";
import { BlogArticleSidebar } from "@/components/blog/BlogArticleSidebar";
import { ArticleReadingExperience } from "@/components/blog/ArticleReadingExperience";
import { ArticleFaqAccordion } from "@/components/blog/ArticleFaqAccordion";
import { ImageZoomProvider } from "@/components/blog/ImageZoomContext";
import { BlogCoverImage } from "@/components/blog/BlogCoverImage";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  if (posts.length === 0) {
    return [{ slug: "_init" }];
  }
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Hire Desi Marketer",
      robots: {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false,
        },
      },
    };
  }

  return {
    title: `${post.title} | Hire Desi Marketer Journal`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.hiredesimarketer.com/blog/${post.slug}`,
    },
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.hiredesimarketer.com/blog/${post.slug}`,
      siteName: "Hire Desi Marketer",
      locale: "en_US",
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.coverImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getAllBlogPosts();
  const postIndex = allPosts.findIndex((p) => p.slug === slug);

  // Previous and Next post navigation
  const prevPost = postIndex > 0 ? allPosts[postIndex - 1] : null;
  const nextPost = postIndex !== -1 && postIndex < allPosts.length - 1 ? allPosts[postIndex + 1] : null;

  // Related articles
  const relatedPosts = allPosts.filter((p) => p.id !== post.id).slice(0, 3);

  // Structured Data Schema for Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": `https://hiredesimarketer.com${post.coverImage}`,
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt || post.publishedAt,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role,
      "url": post.author.linkedin,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Hire Desi Marketer",
      "url": "https://www.hiredesimarketer.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.hiredesimarketer.com/images/hdm-logo.png",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.hiredesimarketer.com/blog/${post.slug}`,
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F6F4EE]">
      {/* Schema.org Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Dynamic Scroll Progress Bar */}
      <ArticleReadingExperience postId={post.id} postTitle={post.title} />

      {/* Global Header */}
      <Header />

      <main className="flex-1 pt-20 sm:pt-24 pb-16">
        <ImageZoomProvider>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* ========================================================== */}
            {/* Split 2-Column Article Hero (Matches Reference Layout)      */}
            {/* ========================================================== */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
              {/* Left Column: Breadcrumbs, Category pill, Title, Author & Meta */}
              <div className="lg:col-span-7 space-y-5">
                {/* Breadcrumb Navigation */}
                <nav
                  aria-label="Breadcrumb"
                  className="flex items-center gap-2 text-xs text-slate-500 font-medium"
                >
                  <Link href="/" className="hover:text-[#0B1B3A] transition-colors">
                    Home
                  </Link>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  <Link href="/blog" className="hover:text-[#0B1B3A] transition-colors">
                    Blog
                  </Link>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#060B22] text-[#FFB020] text-[11px] font-black uppercase tracking-wider border border-[#FFB020]/40 shadow-xs">
                    • {post.category.title}
                  </span>
                </nav>

                {/* Main Article Title */}
                <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-[46px] text-[#0B1B3A] tracking-tight leading-[1.12]">
                  {post.title}
                </h1>

                {/* Author & Meta Row */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[#E2DBD0]">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#FFB020] shrink-0 shadow-sm">
                      <Image
                        src={post.author.image}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 font-display font-bold text-sm sm:text-base text-[#0B1B3A]">
                        <span>By {post.author.name}</span>
                        {post.author.linkedin && (
                          <a
                            href={post.author.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="LinkedIn Profile"
                            className="text-[#0A66C2] hover:opacity-80 transition-opacity"
                          >
                            <svg className="w-3.5 h-3.5 inline" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                            </svg>
                          </a>
                        )}
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 inline" />
                      </div>
                      <div className="text-xs text-slate-500 flex items-center gap-2">
                        <span>
                          {new Date(post.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span>•</span>
                        <span>{post.readTimeMinutes} min read</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E2DBD0] hover:border-slate-400 text-slate-700 text-xs font-bold transition-all shadow-xs"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>All Stories</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Featured Cover Image Card (Zoomable) */}
              <div className="lg:col-span-5">
                <BlogCoverImage
                  src={post.coverImage}
                  alt={post.coverImageAlt}
                  badge={post.coverBadge}
                />
              </div>
            </div>

          {/* ========================================================== */}
          {/* Main 2-Column Content Layout (Article + Sticky Sidebar)     */}
          {/* ========================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Main Article Body (8 cols) */}
            <article className="lg:col-span-8 space-y-10 min-w-0">
              {/* Custom Blocks Renderer */}
              <PortableTextRenderer blocks={post.content} />

              {/* In-Article FAQ Accordion Section (If post has FAQs) */}
              {post.faqs && post.faqs.length > 0 && (
                <ArticleFaqAccordion
                  faqs={post.faqs}
                  title="Frequently Asked Questions"
                  subtitle={`Key answers about ${post.title.toLowerCase()}`}
                />
              )}

              {/* Tags Row */}
              {post.tags && post.tags.length > 0 && (
                <div className="pt-8 border-t border-[#E2DBD0] flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-slate-500 mr-1">Tags:</span>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-white border border-[#E2DBD0] text-xs font-bold text-[#0B1B3A]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Expanded Author Biography Box */}
              <div className="p-7 sm:p-9 rounded-3xl skeuo-card-light space-y-4">
                <div className="flex flex-col sm:flex-row items-start gap-5">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#FFB020] shrink-0 shadow-md">
                    <Image
                      src={post.author.image}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1.5 min-w-0 flex-1">
                    <div className="text-[11px] font-black uppercase tracking-wider text-[#FFB020]">
                      Written by
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h3 className="font-display font-bold text-xl text-[#0B1B3A]">
                          {post.author.name}
                        </h3>
                        <p className="text-xs text-slate-500 font-semibold">
                          {post.author.role}
                        </p>
                      </div>
                      {post.author.linkedin && (
                        <a
                          href={post.author.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <span>Connect on LinkedIn</span>
                          <ExternalLink className="w-3 h-3 text-slate-400" />
                        </a>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed pt-2">
                      {post.author.bio}
                    </p>
                  </div>
                </div>
              </div>

              {/* Next & Previous Playbook Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {prevPost ? (
                  <Link
                    href={`/blog/${prevPost.slug}`}
                    className="p-5 rounded-2xl bg-white border border-[#E2DBD0] hover:border-[#FFB020] transition-colors group space-y-1.5 shadow-xs"
                  >
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1 group-hover:text-[#FFB020] transition-colors">
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Previous Story</span>
                    </div>
                    <div className="font-display font-bold text-sm text-[#0B1B3A] line-clamp-2 leading-snug">
                      {prevPost.title}
                    </div>
                  </Link>
                ) : (
                  <div />
                )}

                {nextPost ? (
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="p-5 rounded-2xl bg-white border border-[#E2DBD0] hover:border-[#FFB020] transition-colors group space-y-1.5 text-right shadow-xs sm:col-start-2"
                  >
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 flex items-center justify-end gap-1 group-hover:text-[#FFB020] transition-colors">
                      <span>Next Story</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                    <div className="font-display font-bold text-sm text-[#0B1B3A] line-clamp-2 leading-snug">
                      {nextPost.title}
                    </div>
                  </Link>
                ) : null}
              </div>

              {/* Bottom Quick Squad Consultation Callout */}
              <div className="p-8 sm:p-10 rounded-3xl skeuo-card-dark text-white space-y-5 relative overflow-hidden">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFB020]/20 text-[#FFB020] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ready to Scale?</span>
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                  Deploy a Dedicated Indian Marketing Squad in 48 Hours
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Start with zero lock-in contracts, 100% Western timezone alignment, and pre-vetted specialists in Paid Media, SEO, and Motion Design.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/#calculator"
                    className="btn-luxury-gold btn-shimmer px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider inline-flex items-center gap-2 shadow-lg"
                  >
                    <span>Instant Cost Calculator</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/get-a-quote"
                    className="btn-luxury-navy px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider inline-flex items-center gap-2 shadow-sm"
                  >
                    <span>Get Free 90-Day Plan</span>
                  </Link>
                </div>
              </div>
            </article>

            {/* Sidebar (4 cols) */}
            <div className="lg:col-span-4">
              <BlogArticleSidebar
                toc={post.tableOfContents}
                title={post.title}
                slug={post.slug}
                author={post.author}
                keyTakeaways={post.keyTakeaways}
                trendingPosts={relatedPosts}
              />
            </div>
          </div>

          {/* ========================================================== */}
          {/* 5. Related Articles Section                                */}
          {/* ========================================================== */}
          {relatedPosts.length > 0 && (
            <section className="mt-20 pt-16 border-t border-[#E2DBD0] space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-wider text-[#FFB020] mb-1">
                    Keep Reading
                  </div>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#0B1B3A]">
                    Related Growth Playbooks
                  </h2>
                </div>

                <Link
                  href="/blog"
                  className="btn-luxury-navy px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider inline-flex items-center gap-1.5 shadow-sm"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>All Stories</span>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {relatedPosts.map((rPost) => (
                  <article
                    key={rPost.id}
                    className="group flex flex-col justify-between rounded-3xl skeuo-card-light overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
                  >
                    <div>
                      <Link
                        href={`/blog/${rPost.slug}`}
                        className="block relative aspect-[16/10] overflow-hidden"
                      >
                        <Image
                          src={rPost.coverImage}
                          alt={rPost.coverImageAlt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 rounded-lg bg-[#060B22]/90 backdrop-blur-md text-[#FFB020] text-[10px] font-black uppercase tracking-wider border border-white/10">
                            {rPost.category.title}
                          </span>
                        </div>
                      </Link>

                      <div className="p-5 space-y-2.5">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Clock className="w-3 h-3 text-[#FFB020]" />
                          <span>{rPost.readTimeMinutes} min read</span>
                        </div>

                        <h3 className="font-display font-bold text-base text-[#0B1B3A] group-hover:text-[#FFB020] transition-colors leading-snug line-clamp-2">
                          <Link href={`/blog/${rPost.slug}`}>{rPost.title}</Link>
                        </h3>
                      </div>
                    </div>

                    <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-700">
                        {rPost.author.name}
                      </span>
                      <Link
                        href={`/blog/${rPost.slug}`}
                        className="btn-luxury-navy px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider inline-flex items-center gap-1 shadow-xs"
                      >
                        <span>Read</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* ========================================================== */}
          {/* 6. Pre-Footer Revenue Banner (Matches Reference Layout)    */}
          {/* ========================================================== */}
          <section className="mt-20 pt-8 max-w-4xl mx-auto">
            <div className="p-8 sm:p-12 rounded-3xl skeuo-card-light text-center space-y-6 border border-[#E2DBD0] shadow-xl relative overflow-hidden bg-gradient-to-b from-white to-[#FAF8F5]">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFB020]/20 text-[#B87A00] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#B87A00]" />
                <span>Agency Growth Infrastructure</span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-[42px] text-[#0B1B3A] tracking-tight max-w-2xl mx-auto leading-tight">
                Ready for Marketing{" "}
                <span className="text-[#FFB020] bg-gradient-to-r from-[#FFB020] to-[#E68A00] bg-clip-text text-transparent">
                  That Drives Revenue?
                </span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Scale your client deliverables with dedicated, on-premise Indian marketing pods. Zero hiring friction, full Western timezone overlap, starting at $8/hour.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link
                  href="/#calculator"
                  className="btn-luxury-gold btn-shimmer px-7 py-3 rounded-full text-xs font-black uppercase tracking-wider shadow-lg inline-flex items-center gap-2"
                >
                  <span>Instant Cost Calculator</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/918280788689"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury-navy px-7 py-3 rounded-full text-xs font-black uppercase tracking-wider shadow-sm inline-flex items-center gap-2"
                >
                  <span>Direct WhatsApp Founder</span>
                </a>
              </div>
            </div>
          </section>
        </div>
        </ImageZoomProvider>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
