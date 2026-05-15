"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CircularEconomy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [300, -300]);

  const layers = [
    { num: "01", title: "Geographic Loop", desc: "State-by-state local processing. Multiple plants distributed within each country — no long-haul transport waste.", accent: "#C7F53E", y: y1 },
    { num: "02", title: "Global Loop", desc: "USA → India → UAE → South Africa. A semi-circle of allied geographies bypassing China and Russia entirely.", accent: "#00E5FF", y: y2 },
    { num: "03", title: "Operational Loop", desc: "Inside each plant — waste powers processing, renewables power the facility, recycled magnets return to makers who re-supply us.", accent: "#FF6B35", y: y3 },
  ];

  return (
    <section ref={containerRef} className="py-10 w-full overflow-hidden theme-bg bg-white relative">
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: "radial-gradient(circle at right center, rgba(0,229,255,0.1) 0%, transparent 50%)" }} />
      <div className="max-w-7xl mx-auto px-[50px] md:px-[90px] relative z-10">
        
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-3 mb-5 px-4 py-1.5 rounded-full border border-[var(--c-border)] bg-[var(--c-bg2)] shadow-sm">
          <div className="w-2 h-2 rounded-full bg-[var(--color-lime)] animate-pulse" />
          <span className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-[var(--c-fg2)]">Circular Economy</span>
        </motion.div>
        
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display font-bold text-[clamp(48px,7vw,96px)] text-[var(--c-fg)] leading-none mb-10">
          Three Layers of<br /><span style={{ color: "#C7F53E" }}>Closed Loops</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 pt-10">
          {layers.map((l, idx) => (
            <motion.div
              key={l.num}
              style={{ y: l.y }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="group relative glass rounded-[10px] p-8 border border-[var(--c-border)] card-hover overflow-hidden transition-all duration-300 bg-[var(--c-bg2)]"
            >
              {/* Top colored line */}
              <div className="absolute top-0 left-8 right-8 h-px" style={{ background: `linear-gradient(90deg, transparent, ${l.accent}, transparent)` }} />
              {/* Corner glow */}
              <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(circle, ${l.accent}20 0%, transparent 70%)` }} />

              <div className="font-mono text-xs tracking-widest mb-6" style={{ color: l.accent }}>{l.num} / 03</div>
              <h3 className="section-title font-display font-bold text-[var(--c-fg)] mb-4 leading-tight">{l.title}</h3>
              <p className="font-sans text-base leading-relaxed" style={{ color: "var(--c-fg2)" }}>{l.desc}</p>

              {/* Animated ring */}
              <div className="mt-8 relative w-16 h-16">
                <motion.div
                  className="absolute inset-0 rounded-full border-2"
                  style={{ borderColor: `${l.accent}40` }}
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-2 rounded-full border"
                  style={{ borderColor: `${l.accent}25`, borderTopColor: l.accent }}
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-xs font-bold" style={{ color: l.accent }}>↺</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
