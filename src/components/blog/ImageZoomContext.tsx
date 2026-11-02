"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ZoomIn,
  ZoomOut,
  ExternalLink,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ZoomImagePayload {
  src: string;
  alt?: string;
  caption?: string;
  badge?: string;
}

interface ImageZoomContextValue {
  openZoom: (payload: ZoomImagePayload) => void;
  closeZoom: () => void;
  isOpen: boolean;
  activeImage: ZoomImagePayload | null;
}

const ImageZoomContext = createContext<ImageZoomContextValue | undefined>(
  undefined
);

export function ImageZoomProvider({ children }: { children: React.ReactNode }) {
  const [activeImage, setActiveImage] = useState<ZoomImagePayload | null>(null);
  const [isZoomed2x, setIsZoomed2x] = useState(false);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  const openZoom = useCallback((payload: ZoomImagePayload) => {
    setActiveImage(payload);
    setIsZoomed2x(false);
    setPanOffset({ x: 0, y: 0 });
    // Prevent background scroll
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  }, []);

  const closeZoom = useCallback(() => {
    setActiveImage(null);
    setIsZoomed2x(false);
    setPanOffset({ x: 0, y: 0 });
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
  }, []);

  const toggle2x = useCallback(() => {
    setIsZoomed2x((prev) => {
      if (prev) {
        setPanOffset({ x: 0, y: 0 });
      }
      return !prev;
    });
  }, []);

  // Keyboard shortcut listener (ESC to close, +/- to toggle zoom)
  useEffect(() => {
    if (!activeImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeZoom();
      } else if (e.key === "+" || e.key === "=") {
        e.preventDefault();
        setIsZoomed2x(true);
      } else if (e.key === "-" || e.key === "_") {
        e.preventDefault();
        setIsZoomed2x(false);
        setPanOffset({ x: 0, y: 0 });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImage, closeZoom]);

  // Global delegate: allow clicking any prose image with data-zoom or in blog-prose
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check if clicked element or parent is an image inside blog prose that isn't already inside zoom lightbox
      if (target.tagName === "IMG" && !target.closest("#zoom-lightbox-root")) {
        const img = target as HTMLImageElement;
        // Don't capture small icons or avatars (less than 90px)
        if (img.naturalWidth < 120 && img.naturalHeight < 120 && !img.dataset.zoom) {
          return;
        }

        const src = img.currentSrc || img.src;
        if (!src) return;

        // Skip avatar images or tiny icons
        if (img.classList.contains("rounded-full") && (img.width <= 70 || img.height <= 70)) {
          return;
        }

        e.preventDefault();
        openZoom({
          src,
          alt: img.alt || "Article illustration",
          caption: img.dataset.caption || undefined,
          badge: img.dataset.badge || undefined,
        });
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, [openZoom]);

  // Touch and Mouse Pan dragging when zoomed 2x
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isZoomed2x) return;
    isDraggingRef.current = true;
    dragStartRef.current = {
      x: e.clientX - panOffset.x,
      y: e.clientY - panOffset.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !isZoomed2x) return;
    setPanOffset({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y,
    });
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <ImageZoomContext.Provider
      value={{
        openZoom,
        closeZoom,
        isOpen: Boolean(activeImage),
        activeImage,
      }}
    >
      {children}

      <AnimatePresence>
        {activeImage && (
          <motion.div
            id="zoom-lightbox-root"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] bg-[#030614]/92 backdrop-blur-xl flex flex-col justify-between select-none p-3 sm:p-6"
            onClick={(e) => {
              // Click on dark backdrop closes (only if not clicking image or controls)
              if (e.target === e.currentTarget && !isZoomed2x) {
                closeZoom();
              }
            }}
          >
            {/* Top Toolbar */}
            <div className="relative z-30 flex items-center justify-between gap-4 w-full max-w-7xl mx-auto py-2 px-3 sm:px-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-white shadow-2xl">
              {/* Image Title / Info */}
              <div className="flex items-center gap-3 min-w-0 pr-4">
                {activeImage.badge ? (
                  <span className="shrink-0 px-2.5 py-0.5 rounded-full bg-[#FFB020] text-[#060B22] text-[10px] sm:text-xs font-black uppercase tracking-wider flex items-center gap-1 shadow-sm">
                    <Sparkles className="w-3 h-3" />
                    <span>{activeImage.badge}</span>
                  </span>
                ) : (
                  <span className="shrink-0 px-2.5 py-0.5 rounded-full bg-white/15 text-[#FFB020] text-[10px] sm:text-xs font-black uppercase tracking-wider">
                    High Resolution
                  </span>
                )}
                <span className="text-xs sm:text-sm font-medium text-slate-200 truncate">
                  {activeImage.alt || activeImage.caption || "Image Preview"}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                {/* 1x / 2x Zoom Toggle Button */}
                <button
                  type="button"
                  onClick={toggle2x}
                  title={isZoomed2x ? "Zoom out (1x)" : "Zoom in (2x detail)"}
                  aria-label={isZoomed2x ? "Zoom out" : "Zoom in"}
                  className={cn(
                    "px-3 py-1.5 rounded-xl border text-xs font-bold inline-flex items-center gap-1.5 transition-all cursor-pointer",
                    isZoomed2x
                      ? "bg-[#FFB020] text-[#060B22] border-[#FFB020] shadow-md"
                      : "bg-white/10 hover:bg-white/20 text-white border-white/20"
                  )}
                >
                  {isZoomed2x ? (
                    <>
                      <ZoomOut className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">1x</span>
                    </>
                  ) : (
                    <>
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">2x Zoom</span>
                    </>
                  )}
                </button>

                {/* Reset position if dragged */}
                {isZoomed2x && (panOffset.x !== 0 || panOffset.y !== 0) && (
                  <button
                    type="button"
                    onClick={() => setPanOffset({ x: 0, y: 0 })}
                    title="Reset position"
                    aria-label="Reset position"
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}

                {/* Open Original in New Tab */}
                <a
                  href={activeImage.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open original high-res image"
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer hidden sm:flex items-center justify-center"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={closeZoom}
                  title="Close (Esc)"
                  aria-label="Close lightbox"
                  className="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-red-500 hover:text-white text-white border border-white/25 transition-all cursor-pointer flex items-center gap-1.5 group"
                >
                  <X className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold hidden sm:inline">Esc</span>
                </button>
              </div>
            </div>

            {/* Central Stage */}
            <div
              className={cn(
                "relative flex-1 w-full flex items-center justify-center overflow-hidden my-2",
                isZoomed2x ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-out"
              )}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  closeZoom();
                }
              }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{
                  scale: isZoomed2x ? 1.9 : 1,
                  x: panOffset.x,
                  y: panOffset.y,
                  opacity: 1,
                }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 280 }}
                className="relative max-h-[82vh] max-w-[92vw] flex items-center justify-center"
                onDoubleClick={toggle2x}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeImage.src}
                  alt={activeImage.alt || "Enlarged view"}
                  decoding="async"
                  className={cn(
                    "max-h-[82vh] max-w-[92vw] w-auto h-auto rounded-2xl object-contain shadow-2xl transition-shadow",
                    isZoomed2x
                      ? "shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
                      : "cursor-zoom-in"
                  )}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!isZoomed2x) {
                      toggle2x();
                    }
                  }}
                />
              </motion.div>
            </div>

            {/* Bottom Caption & Helper Bar */}
            <div className="relative z-30 text-center max-w-2xl mx-auto space-y-1">
              {activeImage.caption && (
                <p className="text-xs sm:text-sm text-slate-200 bg-black/60 px-4 py-1.5 rounded-full inline-block backdrop-blur-md border border-white/10 shadow-lg font-medium">
                  {activeImage.caption}
                </p>
              )}
              <div className="text-[11px] text-slate-400 font-medium">
                {isZoomed2x
                  ? "Drag to pan • Click image to zoom out • ESC to close"
                  : "Click image to zoom 2x • Click backdrop or ESC to close"}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ImageZoomContext.Provider>
  );
}

export function useImageZoom() {
  const ctx = useContext(ImageZoomContext);
  if (!ctx) {
    throw new Error("useImageZoom must be used within an ImageZoomProvider");
  }
  return ctx;
}

/**
 * Click-to-Zoom interactive wrapper for images.
 * Provides hover magnifying glass affordance and triggers the zoom lightbox on click.
 */
export function ZoomableImage({
  src,
  alt = "Article graphic",
  caption,
  badge,
  className,
  imageClassName,
  children,
}: {
  src: string;
  alt?: string;
  caption?: string;
  badge?: string;
  className?: string;
  imageClassName?: string;
  children?: React.ReactNode;
}) {
  const { openZoom } = useImageZoom();

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => openZoom({ src, alt, caption, badge })}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openZoom({ src, alt, caption, badge });
        }
      }}
      className={cn(
        "relative group cursor-zoom-in overflow-hidden transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFB020]/50",
        className
      )}
    >
      {children ? (
        children
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={cn(
            "w-full h-auto transition-transform duration-300 group-hover:scale-[1.015]",
            imageClassName
          )}
        />
      )}

      {/* Hover Zoom pill affordance */}
      <div className="absolute bottom-3 right-3 z-10 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] font-bold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg pointer-events-none border border-white/20">
        <ZoomIn className="w-3 h-3 text-[#FFB020]" />
        <span>Click to Zoom</span>
      </div>
    </div>
  );
}

