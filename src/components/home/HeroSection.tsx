"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import Button from "@/components/ui/Button";
import Particles from "@/components/ui/backgrounds/Particles";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], [0, 40]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#0a0a0a]"
      style={{ height: "120vh" }}
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        <motion.div
          style={{ scale, borderRadius }}
          className="relative w-full h-full overflow-hidden flex items-center justify-center bg-[#0a0a0a]"
        >
          {/* Particles Background */}
          <div className="absolute inset-0 z-0">
            <Particles 
              particleCount={300}
              particleSpread={12}
              speed={0.15}
              particleColors={["#839470", "#ffffff", "#555555"]}
              moveParticlesOnHover
              alphaParticles
              className="opacity-40"
            />
          </div>

          {/* ── Background Video ── */}
          <video
            ref={(el) => {
              if (el) el.playbackRate = 0.5; // Slower playback for smoother viewing
            }}
            src="/WBM/media/BackgroundVideoHero.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center mix-blend-screen opacity-65 z-[1]"
          />

          {/* Dark overlay for text legibility - REDUCED for clarity */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 z-[2]" />
          
          {/* 3D Rotating Object Simulation removed per user request */}

          {/* ── Hero Text ── */}
          {mounted && (
            <motion.div
              className="absolute inset-0 z-10 flex flex-col items-center justify-center pt-24 md:pt-32 px-6 text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="inline-flex items-center gap-2 md:gap-3 mb-6 md:mb-10 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--c-highlight)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--c-highlight)] shadow-[0_0_10px_var(--c-highlight)]"></span>
                </span>
                <span className="font-sans text-[10px] md:text-xs font-black tracking-[0.3em] text-white uppercase">
                  Integrated Resource Recovery
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="font-sans font-black text-4xl md:text-[84px] leading-[0.85] tracking-tighter text-white uppercase mb-1 md:mb-2"
              >
                TRASH TO <br />
                <span className="text-[var(--c-highlight)] lime-glow-text">TREASURE.</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="font-sans text-base md:text-3xl font-black text-white uppercase tracking-tight mb-2 md:mb-4"
              >
                Recover. Reuse. Reimagine.
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="font-sans text-xs md:text-xl text-white/60 max-w-2xl mb-3 md:mb-6 leading-relaxed"
              >
                100% uptime. 6-layer encryption. 15-year leases. Bring your NVIDIA, Cisco, and Juniper; we handle the rest.
              </motion.p>

              {/* Metric Pills - COMPACT ON MOBILE */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-4 md:mb-8"
              >
                {[
                  { label: "98% recovery", color: "border-[#839470]/30 text-[#839470]" },
                  { label: "30-40% energy savings", color: "border-[#D9A750]/30 text-[#D9A750]" },
                  { label: "Zero NOx", color: "border-[#4ECDC4]/30 text-[#4ECDC4]" },
                  { label: "LiBERT™ patented", color: "border-[#A18CD1]/30 text-[#A18CD1]" }
                ].map((pill, i) => (
                  <div key={i} className={`px-3 md:px-5 py-1 md:py-2 rounded-[10px] border ${pill.color} bg-black/40 backdrop-blur-sm text-[10px] md:text-[14px] font-black uppercase tracking-widest`}>
                    {pill.label}
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.7 }}
                className="flex flex-col items-center gap-4 md:gap-10"
              >
                <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-6">
                  <Link 
                    href="/data-centers"
                    className="min-w-[180px] md:min-w-[240px] h-12 md:h-16 px-6 md:px-8 flex items-center justify-center rounded-[10px] bg-[var(--c-highlight)] text-black font-sans font-black text-[11px] md:text-sm uppercase tracking-[0.2em] hover:brightness-110 transition-all shadow-[0_0_30px_rgba(131,148,112,0.3)]"
                  >
                    View Data Centre Specs
                  </Link>
                  <a 
                    href="/WBM/media/PitchDeskForWBM.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 h-12 md:h-16 px-6 md:px-8 rounded-[10px] border border-white/10 bg-white/5 text-white font-sans font-black text-[11px] md:text-sm uppercase tracking-widest hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    <span className="opacity-60 text-sm md:text-lg">📄</span>
                    <span>Download Pitch Deck</span>
                  </a>
                </div>

                {/* Scroll Down Indicator - COMPACT ON MOBILE */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                  className="flex flex-col items-center gap-1.5 mt-2 md:mt-6 opacity-60"
                >
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/50">Scroll</span>
                  <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-[var(--c-highlight)] to-transparent" />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
