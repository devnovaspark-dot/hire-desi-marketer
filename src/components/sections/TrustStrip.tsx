import React from "react";
import { Star } from "lucide-react";

export function TrustStrip() {
  return (
    <section className="pt-2 pb-6 bg-[#F4F1EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Left: Partner Programs Container */}
          <div className="w-full lg:flex-1 p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-[#EBE7DC] to-[#E3DDCF] border border-[#D5CEBF] shadow-[inset_0_1px_2px_rgba(255,255,255,0.7)] flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3.5">
            <span className="text-[11px] font-black uppercase tracking-wider text-[#5A6680] shrink-0">
              Partner Programs
            </span>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {/* Google Partner */}
              <div className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white border border-[#DDD6C8] text-xs font-black text-[#0B1B3A] inline-flex items-center gap-1.5 sm:gap-2 shadow-[0_2px_4px_rgba(11,27,58,0.06)] hover:scale-105 transition-transform">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.27 21.43 7.35 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.27 2.57 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                </svg>
                <span>Google Partner</span>
              </div>

              {/* Meta Business Partner */}
              <div className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white border border-[#DDD6C8] text-xs font-black text-[#0B1B3A] inline-flex items-center gap-1.5 sm:gap-2 shadow-[0_2px_4px_rgba(11,27,58,0.06)] hover:scale-105 transition-transform">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" viewBox="0 0 24 24" fill="#0081FB">
                  <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"/>
                </svg>
                <span>Meta Business Partner</span>
              </div>

              {/* LinkedIn Partner */}
              <div className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white border border-[#DDD6C8] text-xs font-black text-[#0B1B3A] inline-flex items-center gap-1.5 sm:gap-2 shadow-[0_2px_4px_rgba(11,27,58,0.06)] hover:scale-105 transition-transform">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.67 1.67 0 1 0 0-3.34 1.67 1.67 0 0 0 0 3.34m1.4 9.74v-8.37H5.06v8.37z" />
                </svg>
                <span>LinkedIn Partner</span>
              </div>

              {/* HubSpot Partner */}
              <div className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white border border-[#DDD6C8] text-xs font-black text-[#0B1B3A] inline-flex items-center gap-1.5 sm:gap-2 shadow-[0_2px_4px_rgba(11,27,58,0.06)] hover:scale-105 transition-transform">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" viewBox="0 0 24 24" fill="#FF7A59">
                  <path d="M18.164 7.93V5.084a2.198 2.198 0 0 0 1.267-1.978v-.067A2.2 2.2 0 0 0 17.238.845h-.067a2.2 2.2 0 0 0-2.193 2.193v.067a2.196 2.196 0 0 0 1.252 1.973l.013.006v2.852a6.22 6.22 0 0 0-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 1 0 4.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 0 0-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 0 0-.58-.095h-.002a2.033 2.033 0 1 0 2.033 2.033 1.978 1.978 0 0 0-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 1 0 4.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 1 1 3.215-3.207v.002a3.206 3.206 0 0 1-3.207 3.207z"/>
                </svg>
                <span>HubSpot Partner</span>
              </div>
            </div>
          </div>

          {/* Right: 4 Distinct Review Cards with Authentic Real Logos — No Star Overflow */}
          <div className="w-full lg:w-auto lg:shrink-0 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
            {/* Google Review Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl px-2.5 py-2 sm:px-3 sm:py-2.5 border border-[#DDD6C8] shadow-[0_4px_12px_rgba(11,27,58,0.05)] flex flex-col justify-between gap-1 text-left hover:translate-y-[-2px] transition-transform overflow-hidden">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.27 21.43 7.35 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.27 2.57 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                </svg>
                <span className="text-[11px] sm:text-xs font-black text-[#0B1B3A]">Google</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5 flex-nowrap">
                <span className="font-display font-black text-xs sm:text-sm text-[#0B1B3A] shrink-0 leading-none">
                  [4.9]
                </span>
                <div className="flex items-center gap-0.5 shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 text-[#FFB020] fill-[#FFB020] shrink-0" />
                  ))}
                </div>
              </div>
            </div>

            {/* Trustpilot Review Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl px-2.5 py-2 sm:px-3 sm:py-2.5 border border-[#DDD6C8] shadow-[0_4px_12px_rgba(11,27,58,0.05)] flex flex-col justify-between gap-1 text-left hover:translate-y-[-2px] transition-transform overflow-hidden">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" viewBox="0 0 24 24">
                  <path fill="#00B67A" d="M17.227 16.67l2.19 6.742-7.413-5.388 5.223-1.354zM24 9.31h-9.165L12.005.589l-2.84 8.723L0 9.3l7.422 5.397-2.84 8.714 7.422-5.388 4.583-3.326L24 9.311z"/>
                </svg>
                <span className="text-[11px] sm:text-xs font-black text-[#0B1B3A]">Trustpilot</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5 flex-nowrap">
                <span className="font-display font-black text-xs sm:text-sm text-[#0B1B3A] shrink-0 leading-none">
                  [4.8]
                </span>
                <div className="flex items-center gap-0.5 shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 text-[#00B67A] fill-[#00B67A] shrink-0" />
                  ))}
                </div>
              </div>
            </div>

            {/* G2 Review Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl px-2.5 py-2 sm:px-3 sm:py-2.5 border border-[#DDD6C8] shadow-[0_4px_12px_rgba(11,27,58,0.05)] flex flex-col justify-between gap-1 text-left hover:translate-y-[-2px] transition-transform overflow-hidden">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" viewBox="0 0 24 24">
                  <path fill="#FF492C" d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm.122 5.143c.45 0 .9.044 1.342.132l-1.342 2.806C9.962 8.08 8.203 9.84 8.203 12s1.76 3.92 3.92 3.92c.937 0 1.844-.338 2.553-.951l1.483 2.572A6.856 6.856 0 0 1 5.266 12a6.856 6.856 0 0 1 6.856-6.856Z"/>
                </svg>
                <span className="text-[11px] sm:text-xs font-black text-[#0B1B3A]">G2</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5 flex-nowrap">
                <span className="font-display font-black text-xs sm:text-sm text-[#0B1B3A] shrink-0 leading-none">
                  [4.8]
                </span>
                <div className="flex items-center gap-0.5 shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 text-[#FF492C] fill-[#FF492C] shrink-0" />
                  ))}
                </div>
              </div>
            </div>

            {/* Clutch Review Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl px-2.5 py-2 sm:px-3 sm:py-2.5 border border-[#DDD6C8] shadow-[0_4px_12px_rgba(11,27,58,0.05)] flex flex-col justify-between gap-1 text-left hover:translate-y-[-2px] transition-transform overflow-hidden">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded bg-[#17313B] text-white text-[9px] sm:text-[10px] font-black flex items-center justify-center shrink-0">
                  C
                </div>
                <span className="text-[11px] sm:text-xs font-black text-[#0B1B3A]">Clutch</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5 flex-nowrap">
                <span className="font-display font-black text-xs sm:text-sm text-[#0B1B3A] shrink-0 leading-none">
                  [4.7]
                </span>
                <div className="flex items-center gap-0.5 shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 text-[#E2493A] fill-[#E2493A] shrink-0" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
