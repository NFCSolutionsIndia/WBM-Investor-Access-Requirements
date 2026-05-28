"use client";

import { useState, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const FootprintGlobe = dynamic(() => import("./FootprintGlobe"), { 
  ssr: false,
  loading: () => <div className="w-full h-[300px] md:h-[500px] bg-[#0a0a0a]/50 animate-pulse rounded-[20px]" />
});

const LOCS = [
  { id: "usa",    city: "Houston",       country: "United States", status: "operational", x: 20, y: 35, color: "#839470", capacity: "35,000 t/yr intake",   footprint: "120,000 sq ft", desc: "North American HQ and primary processing hub for US domestic e-waste networks." },
  { id: "austin",  city: "Austin",        country: "United States", status: "operational", x: 20, y: 36, color: "#839470", capacity: "25,000 t/yr intake",   footprint: "95,000 sq ft",  desc: "Advanced high-recovery facility serving the Texas tech corridor and gigafactory ecosystems." },
  { id: "michigan",city: "Michigan",      country: "United States", status: "operational", x: 23, y: 30, color: "#839470", capacity: "30,000 t/yr intake",   footprint: "110,000 sq ft", desc: "Key automotive-aligned facility processing electric vehicle battery packs and manufacturing scrap." },
  { id: "nevada",  city: "Nevada",        country: "United States", status: "operational", x: 17, y: 32, color: "#839470", capacity: "35,000 t/yr intake",   footprint: "125,000 sq ft", desc: "Specialized closed-loop lithium extraction and cathode feed recovery center supporting Nevadan lithium loops." },
  { id: "mexico",  city: "Mexico City",   country: "Mexico",        status: "operational", x: 19, y: 39, color: "#839470", capacity: "20,000 t/yr intake",   footprint: "80,000 sq ft",  desc: "Advanced recovery plant serving manufacturing and electronic recycling partnerships across Central and North America." },
  { id: "uae",    city: "Ras al-Khaimah",country: "UAE",           status: "operational", x: 65, y: 40, color: "#839470", capacity: "15,000 t/yr intake",   footprint: "75,000 sq ft",  desc: "Strategic Middle East hub processing e-waste from GCC member states." },
  { id: "hyderabad",city: "Hyderabad",     country: "India",         status: "operational", x: 73, y: 46, color: "#839470", capacity: "30,000 t/yr intake",   footprint: "100,000 sq ft", desc: "India's flagship AI-powered e-waste facility serving major tech hubs across South Asia." },
  { id: "odisha", city: "Bhubaneswar",   country: "Odisha, India", status: "planned",     x: 75, y: 48, color: "#839470", capacity: "25,000 t/yr (planned)",footprint: "85,000 sq ft",  desc: "Upcoming advanced recovery center specialized in high-yield mineral extraction from industrial feedstock." },
  { id: "sa",     city: "Johannesburg",  country: "South Africa",  status: "planned",     x: 55, y: 75, color: "#839470", capacity: "20,000 t/yr (planned)",footprint: "90,000 sq ft",  desc: "Planned greenfield facility to serve Sub-Saharan Africa's growing e-waste volumes." }
];

export default function GlobalFootprint({ isDark = true }: { isDark?: boolean }) {
  const [hoverState, setHoverState] = useState<{ id: string; source: 'card' | 'globe' } | null>(null);
  const activeHoverId = hoverState?.id || null;
  const activeHoverSource = hoverState?.source || null;

  const sectionBg = "#050505";
  const cardBg    = "rgba(8,12,16,0.85)";

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden flex flex-col justify-between"
      style={{ background: sectionBg, minHeight: "100vh" }}
    >
      {/* ── BACKGROUND GLOWS ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#839470]/5 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#839470]/5 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      {/* ── HEADER ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-0 text-center w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="inline-flex items-center gap-3 mb-4 md:mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-[#839470] animate-pulse" />
            <span className="font-sans font-bold text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#839470]">Our Footprint</span>
          </div>
          <h2 className="font-sans font-black uppercase tracking-tighter leading-[1] md:leading-[0.9] text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-3 text-white">
            A SEMI-CIRCLE OF ALLIES.<br />
            <span className="text-[#839470]">A BYPASS TO FRAGILE SUPPLY CHAINS.</span>
          </h2>
          <p className="font-sans text-xs md:text-base max-w-2xl mx-auto text-white/60 px-4">
            Five countries. Thirteen plants. Zero exposure to the geographies that hold the West hostage. By design, not by default.
          </p>
        </motion.div>
      </div>

      {/* ── INTERACTIVE 3D GLOBE ── */}
      <div className="relative z-0 flex-1 min-h-[400px] md:min-h-[580px] flex items-center justify-center mt-6 md:mt-16">
        <div className="w-full h-full max-w-5xl px-4">
          <FootprintGlobe 
            hoveredId={activeHoverId} 
            hoverSource={activeHoverSource}
            onHoverChange={setHoverState}
            locations={LOCS}
          />
        </div>
      </div>

      {/* ── LEGEND CARDS ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pb-12 md:pb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 w-full">
        {LOCS.map((loc, i) => (
          <div key={loc.id} className="relative">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onMouseEnter={() => setHoverState({ id: loc.id, source: 'card' })}
              onMouseLeave={() => setHoverState(null)}
              onClick={() => setHoverState(hoverState?.id === loc.id && hoverState?.source === 'card' ? null : { id: loc.id, source: 'card' })}
              className={`rounded-[10px] p-4 md:p-5 border backdrop-blur-xl transition-all duration-300 cursor-pointer shadow-xl ${hoverState?.id === loc.id && hoverState?.source === 'card' ? 'scale-[1.02] md:scale-105 border-white/30' : 'border-white/10 hover:border-white/20'}`}
              style={{ background: cardBg }}
            >
              <div className="flex items-center gap-2 mb-1.5 md:mb-2">
                <div 
                  className={`w-2.5 h-2.5 rounded-full ${loc.status === 'operational' ? 'shadow-[0_0_10px_#c1ff00] animate-pulse' : 'shadow-[0_0_6px_#839470]'}`} 
                  style={{ 
                    background: loc.status === 'operational' ? '#c1ff00' : '#839470', 
                    color: loc.status === 'operational' ? '#c1ff00' : '#839470' 
                  }} 
                />
                <span 
                  className="font-sans font-bold text-[8px] md:text-[9px] uppercase tracking-widest" 
                  style={{ color: loc.status === 'operational' ? '#c1ff00' : '#839470' }}
                >
                  {loc.status}
                </span>
              </div>
              <div className="font-sans font-black text-base md:text-lg text-white">{loc.city}</div>
              <div className="font-sans text-[9px] md:text-[10px] uppercase tracking-wide text-white/50">{loc.country}</div>
            </motion.div>

            {/* ── REFINED POPUP ── */}
            <AnimatePresence>
              {hoverState?.id === loc.id && hoverState?.source === 'card' && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute z-[200] bottom-[calc(100%+12px)] left-0 right-0 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-[320px] pointer-events-none"
                >
                  <div className="rounded-[10px] p-4 md:p-5 shadow-2xl border backdrop-blur-2xl bg-[#080c10]/98 border-white/20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1" style={{ background: `linear-gradient(90deg, transparent, ${loc.status === 'operational' ? '#c1ff00' : '#839470'}, transparent)` }} />
                    
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-sans font-black text-[9px] md:text-[10px] uppercase tracking-widest text-white/50">{loc.country}</span>
                      <span className="font-sans font-bold text-[8px] uppercase tracking-widest px-2 py-0.5 rounded-full"
                        style={{ 
                          color: loc.status === 'operational' ? '#c1ff00' : '#839470', 
                          background: loc.status === 'operational' ? 'rgba(193, 255, 0, 0.1)' : 'rgba(131, 148, 112, 0.1)', 
                          border: loc.status === 'operational' ? '1px solid rgba(193, 255, 0, 0.3)' : '1px solid rgba(131, 148, 112, 0.3)' 
                        }}>
                        {loc.status}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-sans font-black tracking-tight mb-1 text-white">{loc.city}</h3>
                    <p className="font-sans text-[10px] md:text-[11px] leading-relaxed mb-4 text-white/60">{loc.desc}</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded-lg p-2 border border-white/10 bg-white/5 text-center">
                        <div className="font-sans text-[10px] md:text-[11px] uppercase tracking-widest mb-0.5 text-white/50">Footprint</div>
                        <div className="font-sans font-bold text-[12px] md:text-[13px] text-white/90">{loc.footprint}</div>
                      </div>
                      <div className="rounded-lg p-2 border border-white/10 bg-white/5 text-center">
                        <div className="font-sans text-[10px] md:text-[11px] uppercase tracking-widest mb-0.5 text-white/50">Capacity</div>
                        <div className="font-sans font-bold text-[12px] md:text-[13px] text-white/90">{loc.capacity}</div>
                      </div>
                    </div>
                    
                    {/* Tooltip Arrow */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#080c10] border-r border-b border-white/20 rotate-45" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
