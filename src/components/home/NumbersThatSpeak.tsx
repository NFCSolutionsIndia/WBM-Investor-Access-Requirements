"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "@/components/ui/effects/CountUp";
import ScrollReveal from "@/components/ui/effects/ScrollReveal";
import TiltCard from "@/components/ui/TiltCard";
import { Zap, ShieldCheck, Globe, Cpu } from "lucide-react";

const numbers = [
  {
    title: "Recovery Efficiency",
    value: "99.9",
    desc: "Highest purity output across 11 critical minerals.",
    icon: <Zap size={24} />,
    accent: "#839470",
  },
  {
    title: "Carbon Offset",
    value: "450k",
    desc: "Metric tons of CO2 prevented annually via LiBERT™.",
    icon: <ShieldCheck size={24} />,
    accent: "#839470",
  },
  {
    title: "Global Partners",
    value: "142",
    desc: "Strategic alliances with OEMs and gov agencies.",
    icon: <Globe size={24} />,
    accent: "#839470",
  },
  {
    title: "AI Processing",
    value: "2.5m",
    desc: "Waste units scanned and sorted daily.",
    icon: <Cpu size={24} />,
    accent: "#839470",
  },
];

const highlights = [
  { value: "11", label: "Minerals" },
  { value: "30", label: "Energy Save %" },
  { value: "100", label: "Circular %" },
  { value: "24/7", label: "Operation", isStatic: true }
];

export default function NumbersThatSpeak() {
  return (
    <section className="relative bg-black overflow-hidden">
      {/* Background with subtle parallax */}
      <motion.div 
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/WBM/media/BackgroundImgHero.png"
          alt="Facility background"
          fill
          className="object-cover opacity-70"
          style={{ transform: "scaleX(-1)" }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
      </motion.div>

      <div className="relative z-10 flex flex-col lg:flex-row w-full max-w-7xl mx-auto px-6 gap-10 py-10">
        
        {/* ── LEFT: heading + stats ── */}
        <div className="w-full lg:w-5/12 lg:pr-8 flex-shrink-0 flex flex-col justify-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-3 mb-5 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 shadow-none">
              <div className="w-2 h-2 rounded-full bg-[var(--c-highlight)] animate-pulse" />
              <span className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-white/80">
                Performance Metrics
              </span>
            </div>

            <h2 className="font-sans font-black uppercase tracking-tighter leading-[0.88] section-title text-white mb-8">
              Numbers<br />
              <span className="text-[var(--c-highlight)] lime-glow-text">That Speak</span>
            </h2>

            <p className="font-sans text-white/70 text-lg leading-relaxed mb-14 max-w-md">
              Our AI-powered facility delivers industry-leading performance across every metric — from recovery rates to environmental compliance.
            </p>

            <div className="grid grid-cols-2 gap-px bg-white/5 rounded-[10px] overflow-hidden border border-white/10 shadow-none">
              {highlights.map((h, i) => (
                <div key={h.label} className="p-6 bg-black/40 backdrop-blur-md transition-colors hover:bg-black/60 group">
                  <div className="font-sans font-black text-4xl text-[var(--c-highlight)] tracking-tighter mb-1 group-hover:scale-110 transition-transform origin-left">
                    {h.isStatic ? h.value : <CountUp value={h.value} />}
                  </div>
                  <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/60 font-bold">
                    {h.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* ── RIGHT: card grid ── */}
        <div className="w-full lg:w-7/12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {numbers.map((num, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <TiltCard 
                  className="h-full rounded-[20px] bg-black/40 backdrop-blur-md border border-white/10 p-8 shadow-none"
                  glowColor="rgba(131, 148, 112, 0.2)"
                >
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div 
                      className="w-12 h-12 rounded-[12px] flex items-center justify-center border border-white/20 mb-6 group-hover:bg-[var(--c-highlight)] group-hover:text-black transition-all duration-500 shadow-none"
                      style={{ background: "rgba(255,255,255,0.05)", color: num.accent }}
                    >
                      {num.icon}
                    </div>

                    <div>
                      <h3 className="font-sans font-black text-3xl tracking-tighter mb-2 text-[var(--c-highlight)]">
                        <CountUp value={num.value} />
                      </h3>
                      <div className="font-sans font-bold text-xs tracking-[0.2em] uppercase text-white mb-3">
                        {num.title}
                      </div>
                      <p className="font-sans text-white/60 text-sm leading-relaxed">
                        {num.desc}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
