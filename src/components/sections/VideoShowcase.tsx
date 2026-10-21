"use client";

import React, { useRef, useState, useEffect } from "react";
import { Play, ArrowRight, CheckCircle2 } from "lucide-react";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.652-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const ambientVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      setHasStarted(true);
      if (video.currentTime < 0.15) {
        video.currentTime = 0.15;
      }
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  // Sync ambient background video with main video playback and track playing state
  useEffect(() => {
    const video = videoRef.current;
    const ambient = ambientVideoRef.current;
    if (!video) return;

    const handlePlay = () => {
      setHasStarted(true);
      setIsPlaying(true);
      if (video.currentTime < 0.15) {
        video.currentTime = 0.15;
      }
      if (ambient) {
        if (ambient.currentTime < 0.15) {
          ambient.currentTime = 0.15;
        }
        ambient.play().catch(() => {});
      }
    };
    const handlePause = () => {
      setIsPlaying(false);
      if (ambient) ambient.pause();
    };
    const handleEnded = () => {
      setIsPlaying(false);
      if (ambient) ambient.pause();
    };
    const handleSeek = () => {
      if (ambient) ambient.currentTime = video.currentTime;
    };
    const handleTimeUpdate = () => {
      if (ambient && Math.abs(ambient.currentTime - video.currentTime) > 0.4) {
        ambient.currentTime = video.currentTime;
      }
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);
    video.addEventListener("seeking", handleSeek);
    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("seeking", handleSeek);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  // Auto-pause when client scrolls up or down out of view
  useEffect(() => {
    const video = videoRef.current;
    const ambient = ambientVideoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If video is less than 40% in view (client scrolled down or up away from it), auto-pause
          if (!entry.isIntersecting || entry.intersectionRatio < 0.4) {
            if (!video.paused) {
              video.pause();
            }
            if (ambient && !ambient.paused) {
              ambient.pause();
            }
          }
        });
      },
      {
        threshold: [0, 0.2, 0.4, 0.7, 1.0],
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="video-showcase"
      className="pt-12 sm:pt-16 pb-10 sm:pb-14 bg-[#F5F2EB] border-y border-[#DED7CA] scroll-mt-28"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4 sm:gap-6 items-center">
        {/* Centered Section Header with Adequate Clearance */}
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-1 sm:gap-1.5">
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.14em] text-[#9A5B00]">
            Behind The Scenes
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-[#0B1B3A] tracking-tight leading-tight">
            See Our In-House Team in Action.{" "}
            <span className="text-[#9A5B00]">Watch The Walkthrough.</span>
          </h2>
        </div>

        {/* Centered Cinema Theater Player (Zero Cropping, Fits Single Window) */}
        <div className="w-full max-w-4xl lg:max-w-5xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#070D18] border border-[#233148] shadow-[0_25px_60px_-15px_rgba(11,27,58,0.35)]">
            {/* Theater Stage Viewport */}
            <div className="relative w-full h-[380px] sm:h-[460px] md:h-[500px] max-h-[58vh] flex items-center justify-center overflow-hidden bg-[#070D18] group/stage">
              {/* Static Ambient Glow while video is paused / unplayed */}
              <img
                src="/images/Thumbnail.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-35 scale-125 pointer-events-none"
              />

              {/* Dynamic Ambient Glow during playback */}
              <video
                ref={ambientVideoRef}
                aria-hidden="true"
                tabIndex={-1}
                muted
                playsInline
                preload="metadata"
                poster="/images/Thumbnail.png"
                className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-35 scale-110 pointer-events-none"
                src="/Video.mp4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 pointer-events-none" />

              {/* Main Interactive Video - object-contain ensures 100% full view with ZERO cropping */}
              <video
                ref={videoRef}
                controls
                playsInline
                preload="metadata"
                poster="/images/Thumbnail.png"
                className="relative z-10 h-full w-auto max-w-full object-contain mx-auto drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
              >
                <source src="/Video.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>

              {/* High-Resolution Thumbnail Image Overlay before playback */}
              {!hasStarted && (
                <img
                  src="/images/Thumbnail.png"
                  alt="Hire Desi Marketer Walkthrough Thumbnail"
                  className="absolute inset-0 z-10 h-full w-auto max-w-full object-contain mx-auto drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)] pointer-events-none"
                />
              )}

              {/* Radiant Luxury Play Button Overlay */}
              {!isPlaying && (
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label="Play Walkthrough Video"
                  className={`absolute inset-0 z-20 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-all cursor-pointer group/btn ${
                    hasStarted ? "pb-12" : ""
                  }`}
                >
                  <div className="relative flex items-center justify-center">
                    <span className="absolute -inset-4 sm:-inset-5 rounded-full bg-[#FFB020]/25 animate-ping pointer-events-none" />
                    <span className="absolute -inset-2 rounded-full bg-[#FFB020]/40 blur-md pointer-events-none" />
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#FFB020] via-[#FFC043] to-[#FFCF66] text-[#0B1B3A] shadow-[0_14px_35px_rgba(255,176,32,0.65),inset_0_2px_3px_rgba(255,255,255,0.7)] flex items-center justify-center group-hover/btn:scale-110 group-active/btn:scale-95 transition-all duration-300">
                      <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-[#0B1B3A] ml-1 text-[#0B1B3A]" />
                    </div>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Refined Luxury Button Pair — Matching Hero Styling Exactly */}
        <div className="flex flex-col items-center gap-3 w-full max-w-xl mx-auto pt-1">
          <div className="flex flex-wrap items-center justify-center gap-3 w-full">
            <a
              href="#quote"
              className="btn-luxury-gold btn-shimmer px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider inline-flex items-center gap-2 shadow-md cursor-pointer group"
            >
              <span>Hire In-House Marketers — From $8/Hr</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
            </a>

            <a
              href="https://wa.me/918280788689?text=Hi%20Hire%20Desi%20Marketer%2C%20I%20watched%20your%20team%20walkthrough%20and%20want%20to%20discuss%20hiring%20marketers."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury-navy btn-shimmer px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold inline-flex items-center gap-2 shadow-md cursor-pointer group"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Micro Trust Assurances */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[11px] sm:text-xs font-bold text-[#6B7280]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
              No Long-Term Contracts
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
              Western Working Hours Overlap
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
              100% In-House Team in India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
