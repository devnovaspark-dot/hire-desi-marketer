"use client";

import React, { useState, useEffect } from "react";
import { MessageSquarePlus } from "lucide-react";

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
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

export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show buttons after a tiny delay so initial page load remains ultra clean
    const timer = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const handleEnquire = (e: React.MouseEvent) => {
    // If not already on /get-a-quote, navigate to /get-a-quote
    if (window.location.pathname !== "/get-a-quote") {
      window.location.href = "/get-a-quote";
      return;
    }
    const nameInput = document.getElementById("form-page-name") || document.getElementById("name-input");
    if (nameInput) {
      nameInput.focus();
    }
  };

  if (!visible) return null;

  return (
    <div
      aria-label="Quick Actions"
      className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-50 flex flex-col items-center gap-2.5 sm:gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      {/* Circular Tactile Skeuomorphic Floating Enquire Button — Placed Directly Above WhatsApp */}
      <a
        href="/get-a-quote"
        onClick={handleEnquire}
        className="group relative flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-gradient-to-b from-[#FFF2B2] via-[#FFB020] to-[#DF7D00] text-[#060B22] cursor-pointer select-none transition-all duration-150 border-t border-t-white/95 border-x border-[#E08A00] border-b-[3px] border-b-[#994F00] shadow-[0_10px_25px_rgba(0,0,0,0.45),0_3px_8px_rgba(255,176,32,0.45),inset_0_1px_1px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(153,79,0,0.35)] hover:brightness-105 hover:-translate-y-0.5 active:translate-y-[2px] active:border-b-[1px] active:shadow-[0_3px_8px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(0,0,0,0.25)] animate-fab-enquire"
        title="Enquire now about hiring marketing talent"
        aria-label="Enquire Now"
      >
        {/* Specular gloss reflection cap */}
        <span className="absolute top-0 inset-x-1.5 h-[45%] rounded-t-full bg-gradient-to-b from-white/70 via-white/20 to-transparent pointer-events-none" />

        <MessageSquarePlus className="relative w-5 h-5 sm:w-6 sm:h-6 text-[#060B22] stroke-[2.3] drop-shadow-[0_1px_0_rgba(255,255,255,0.7)] group-hover:scale-110 transition-transform animate-fab-icon-enquire" />

        {/* Desktop Hover Tooltip Label */}
        <span className="hidden sm:block absolute right-full mr-2.5 px-2.5 py-1 rounded-lg bg-[#060B22]/95 backdrop-blur-md text-[#FFB020] border border-[#FFB020]/40 text-xs font-black tracking-tight whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all pointer-events-none">
          Enquire Now
        </span>
      </a>

      {/* Circular Floating WhatsApp Quick Connect Button — Clean Official Skeuomorphic Button (No Red Dot / No Beacon) */}
      <a
        href="https://wa.me/918280788689?text=Hi%20Hire%20Desi%20Marketer%2C%20I%20want%20to%20enquire%20about%20hiring%20a%20marketing%20specialist."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-gradient-to-b from-[#48E783] via-[#25D366] to-[#128C46] text-white cursor-pointer select-none transition-all duration-150 border-t border-t-white/80 border-x border-[#25D366] border-b-[3px] border-b-[#0D6B34] shadow-[0_10px_25px_rgba(0,0,0,0.4),0_3px_10px_rgba(37,211,102,0.4),inset_0_1px_1px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(13,107,52,0.4)] hover:brightness-105 hover:-translate-y-0.5 active:translate-y-[2px] active:border-b-[1px] active:shadow-[0_3px_8px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(0,0,0,0.25)] animate-fab-whatsapp"
        title="Chat with us instantly on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        {/* Specular gloss reflection cap */}
        <span className="absolute top-0 inset-x-1.5 h-[45%] rounded-t-full bg-gradient-to-b from-white/60 via-white/15 to-transparent pointer-events-none" />

        <WhatsAppIcon className="relative w-5 h-5 sm:w-6 sm:h-6 fill-current drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform animate-fab-icon-whatsapp" />

        {/* Desktop Hover Tooltip Label */}
        <span className="hidden sm:block absolute right-full mr-2.5 px-2.5 py-1 rounded-lg bg-[#060B22]/95 backdrop-blur-md text-[#25D366] border border-[#25D366]/40 text-xs font-black tracking-tight whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all pointer-events-none">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
}
