"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ─── Nav link data ──────────────────────────────────────────────────────── */
const COL_SYSTEM = [
  { label: "How It Works",      href: "#process" },
  { label: "Minerals",          href: "#minerals" },
  { label: "Global Footprint",  href: "#about" },
  { label: "Business Model",    href: "#system" },
];
const COL_COMPANY = [
  { label: "About",             href: "#about" },
  { label: "Resources",         href: "#resources" },
  { label: "Contact",           href: "/contact" },
  { label: "Invest",            href: "/contact" },
];

/* ─── SVG path definitions (from user's SVG) ────────────────────────────── */
const PATHS = [
  {
    id: "p1",
    d: "M 608.4,0 L 608.4,114.85 A 50,50 0 0 1 558.4,164.85 L 430.25,164.85 L 202.1,164.85 A 50,50 0 0 0 152.1,214.85 L 152.1,529.45 A 25.5,25.5 0 0 1 106.38,544.99 L 0,406.63",
    len: 1180,
    dotLen: 11.8,
    startOffset: -78,
    duration: 4,
    delay: 0,
  },
  {
    id: "p2",
    d: "M 912.6,0 L 912.6,202.77 A 50,50 0 0 0 962.6,252.77 L 1318.9,252.77 A 50,50 0 0 1 1368.9,302.77 L 1368.9,444.55 A 50,50 0 0 0 1418.9,494.55 L 1521,494.55",
    len: 1038,
    dotLen: 10.4,
    startOffset: -821,
    duration: 5,
    delay: 1,
  },
  {
    id: "p3",
    d: "M 1521,879.2 L 1382.46,729.05 A 45.67,45.67 0 0 0 1348.9,714.35 L 1038.65,714.35 A 50,50 0 0 0 988.65,764.35 L 988.65,1099",
    len: 965,
    dotLen: 9.7,
    startOffset: -63,
    duration: 4.5,
    delay: 0.5,
  },
  {
    id: "p4",
    d: "M 0,714.35 L 336.3,714.35 A 58.09,58.09 0 0 1 381.86,808.47 L 152.1,1099",
    len: 836,
    dotLen: 8.4,
    startOffset: -661,
    duration: 3.5,
    delay: 1.5,
  },
];

/* ─── Component ──────────────────────────────────────────────────────────── */
import { useTheme } from "@/components/ui/ThemeProvider";
import ScrollReveal from "@/components/ui/effects/ScrollReveal";

export default function Footer() {
  const dotRefs = useRef<(SVGPathElement | null)[]>([]);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    dotRefs.current.forEach((el, i) => {
      if (!el) return;
      const p = PATHS[i];
      gsap.fromTo(
        el,
        { strokeDashoffset: p.startOffset },
        {
          strokeDashoffset: p.startOffset - p.len,
          duration: p.duration,
          delay: p.delay,
          ease: "none",
          repeat: -1,
        }
      );
    });
  }, []);

  return (
    <footer className="relative w-full transition-colors duration-700 overflow-hidden border-t border-[var(--c-border)] bg-[var(--c-footer-bg)] dark:bg-black">
      {/* ── Background SVG Circuitry ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 overflow-hidden group/footer">
        <style>{`
          @keyframes flowLine {
            0% { stroke-dashoffset: 2000; }
            100% { stroke-dashoffset: 0; }
          }
          .circuit-flow {
            stroke-dasharray: 60, 1940;
            animation: flowLine 5s linear infinite;
            filter: drop-shadow(0 0 6px ${isDark ? 'rgba(131,148,112,0.4)' : 'rgba(255,255,255,0.2)'});
            stroke: ${isDark ? 'var(--c-highlight)' : '#ffffff'};
          }
          .group-hover\\/footer .circuit-flow {
            animation-duration: 2s !important;
            filter: drop-shadow(0 0 15px ${isDark ? 'var(--c-highlight)' : 'rgba(255,255,255,0.4)'});
            stroke-width: 3;
          }
        `}</style>
        <svg 
          width="1521" 
          height="1099" 
          viewBox="0 0 1521 1099" 
          className="w-full h-full object-cover"
        >
          <defs>
            <filter id="footer-v-blur" x="0" y="0" width="155" height="89" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feGaussianBlur stdDeviation="17"></feGaussianBlur>
            </filter>
          </defs>
          
          {/* Path 1 */}
          <path fillOpacity="0.06" filter="url(#footer-v-blur)" d="M55.1257 34C40.6277 34 34 36.52 34 44.5C34 54.16 38.9708 55 55.1257 55C78.4606 55 121.817 45.34 120.988 44.5C119.817 43.312 78.4606 34 55.1257 34Z" fill={isDark ? "var(--c-highlight)" : "#fff"} transform="matrix(0,1,-1,0,652.90851,1.30352)"></path>
          <path d="M 608.4,0 L 608.4,114.85 A 50,50 0 0 1 558.4,164.85 L 430.25,164.85 L 202.1,164.85 A 50,50 0 0 0 152.1,214.85 L 152.1,529.45 A 25.5,25.5 0 0 1 106.38,544.99 L 0,406.63" stroke="currentColor" fill="none" strokeOpacity="0.1" strokeWidth="1" className="text-white"></path>
          <path ref={el => { dotRefs.current[0] = el; }} d="M 608.4,0 L 608.4,114.85 A 50,50 0 0 1 558.4,164.85 L 430.25,164.85 L 202.1,164.85 A 50,50 0 0 0 152.1,214.85 L 152.1,529.45 A 25.5,25.5 0 0 1 106.38,544.99 L 0,406.63" fill="none" strokeWidth="2.5" strokeLinecap="round" className="circuit-flow transition-all duration-700"></path>
          
          {/* Path 2 */}
          <path fillOpacity="0.06" filter="url(#footer-v-blur)" d="M55.1257 34C40.6277 34 34 36.52 34 44.5C34 54.16 38.9708 55 55.1257 55C78.4606 55 121.817 45.34 120.988 44.5C119.817 43.312 78.4606 34 55.1257 34Z" fill={isDark ? "var(--c-highlight)" : "#fff"} transform="matrix(0,1,-1,0,1413.40003,338.5033)"></path>
          <path d="M 912.6,0 L 912.6,202.77 A 50,50 0 0 0 962.6,252.77 L 1318.9,252.77 A 50,50 0 0 1 1368.9,302.77 L 1368.9,444.55 A 50,50 0 0 0 1418.9,494.55 L 1521,494.55" stroke="currentColor" fill="none" strokeOpacity="0.1" strokeWidth="1" className="text-white"></path>
          <path ref={el => { dotRefs.current[1] = el; }} d="M 912.6,0 L 912.6,202.77 A 50,50 0 0 0 962.6,252.77 L 1318.9,252.77 A 50,50 0 0 1 1368.9,302.77 L 1368.9,444.55 A 50,50 0 0 0 1418.9,494.55 L 1521,494.55" fill="none" strokeWidth="2.5" strokeLinecap="round" className="circuit-flow transition-all duration-700"></path>
          
          {/* Path 3 */}
          <path fillOpacity="0.06" filter="url(#footer-v-blur)" d="M55.1257 34C40.6277 34 34 36.52 34 44.5C34 54.16 38.9708 55 55.1257 55C78.4606 55 121.817 45.34 120.988 44.5C119.817 43.312 78.4606 34 55.1257 34Z" fill={isDark ? "var(--c-highlight)" : "#fff"} transform="matrix(-0.67812,-0.73495,0.73495,-0.67812,1497.17029,918.98462)"></path>
          <path d="M 1521,879.2 L 1382.46,729.05 A 45.67,45.67 0 0 0 1348.9,714.35 L 1038.65,714.35 A 50,50 0 0 0 988.65,764.35 L 988.65,1099" stroke="currentColor" fill="none" strokeOpacity="0.1" strokeWidth="1" className="text-white"></path>
          <path ref={el => { dotRefs.current[2] = el; }} d="M 1521,879.2 L 1382.46,729.05 A 45.67,45.67 0 0 0 1348.9,714.35 L 1038.65,714.35 A 50,50 0 0 0 988.65,764.35 L 988.65,1099" fill="none" strokeWidth="2.5" strokeLinecap="round" className="circuit-flow transition-all duration-700"></path>
          
          {/* Path 4 */}
          <path fillOpacity="0.06" filter="url(#footer-v-blur)" d="M55.1257 34C40.6277 34 34 36.52 34 44.5C34 54.16 38.9708 55 55.1257 55C78.4606 55 121.817 45.34 120.988 44.5C119.817 43.312 78.4606 34 55.1257 34Z" fill={isDark ? "var(--c-highlight)" : "#fff"} transform="matrix(-0.6203,0.78436,-0.78436,-0.6203,339.61312,933.63049)"></path>
          <path d="M 0,714.35 L 336.3,714.35 A 58.09,58.09 0 0 1 381.86,808.47 L 152.1,1099" stroke="currentColor" fill="none" strokeOpacity="0.1" strokeWidth="1" className="text-white"></path>
          <path ref={el => { dotRefs.current[3] = el; }} d="M 0,714.35 L 336.3,714.35 A 58.09,58.09 0 0 1 381.86,808.47 L 152.1,1099" fill="none" strokeWidth="2.5" strokeLinecap="round" className="circuit-flow transition-all duration-700"></path>
        </svg>
      </div>


      {/* ── Footer bottom bar ──────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-10 border-b border-white/10">
        <ScrollReveal className="col-span-2 md:col-span-1">
          <Image 
            src="/WBM/WBMLogoWhite.svg" 
            alt="Waste BE Minerals" 
            width={180} 
            height={60} 
            className="w-auto h-10 mb-8 brightness-100" 
            style={{ width: 'auto' }}
          />
          <p className="font-sans leading-relaxed max-w-[250px] mb-8 font-medium text-white/70">
            The world's only integrated extractor for 11 critical minerals. Powering the next generation of global industry.
          </p>

          <div className="flex gap-4">
            {["in", "𝕏", "ig"].map(social => (
              <a 
                key={social} 
                href="#" 
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 font-bold text-sm text-white/60 hover:text-black hover:bg-white"
              >
                {social}
              </a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h4 className="font-sans font-black text-[10px] uppercase tracking-[0.3em] mb-8 opacity-60 text-white">System</h4>
          <ul className="space-y-4">
            {COL_SYSTEM.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="font-sans text-sm font-bold transition-colors duration-300 text-white/70 hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h4 className="font-sans font-black text-[10px] uppercase tracking-[0.3em] mb-8 opacity-60 text-white">Company</h4>
          <ul className="space-y-4">
            {COL_COMPANY.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="font-sans text-sm font-bold transition-colors duration-300 text-white/70 hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <h4 className="font-sans font-black text-[10px] uppercase tracking-[0.3em] mb-8 opacity-60 text-white">Global Reach</h4>
          <p className="font-sans text-sm mb-6 leading-relaxed font-medium text-white/70">
            Ready to secure your strategic mineral supply chain?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 font-sans font-black text-xs uppercase tracking-widest hover:gap-5 transition-all duration-300 group text-white"
          >
            Connect Now
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <div className="mt-8 space-y-3">
            <div className="font-sans text-xs font-bold transition-colors cursor-pointer text-white/80 hover:text-white">contact@wastebeminerals.com</div>
            <div className="font-sans text-[10px] leading-relaxed uppercase tracking-wider font-bold text-white/60">Parsippany, NJ 07054, USA</div>
          </div>
        </ScrollReveal>
      </div>

      {/* ── Legal bar ──────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">
          © {new Date().getFullYear()} Waste BE Minerals. AI-Native Extraction.
        </span>
        <div className="flex gap-8">
          {["Privacy Policy", "Terms of Service", "Compliance"].map(item => (
            <a key={item} href="#" className="font-sans text-[10px] transition-colors uppercase tracking-widest font-bold text-white/40 hover:text-white">{item}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
