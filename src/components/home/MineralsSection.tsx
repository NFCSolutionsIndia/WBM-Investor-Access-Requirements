"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTheme } from "@/components/ui/ThemeProvider";
import ScrollReveal from "@/components/ui/effects/ScrollReveal";
import { Cpu, Battery, Shield } from "lucide-react";

const allMinerals = [
  // Row 1
  { symbol: "H", num: 1, name: "Hydrogen", row: 1, col: 1, wbm: false },
  { symbol: "He", num: 2, name: "Helium", row: 1, col: 18, wbm: false },
  // Row 2
  { symbol: "Li", num: 3, name: "Lithium", row: 2, col: 1, wbm: true, color: "#839470", desc: "Essential for high-density EV batteries and grid storage.", from: "B-Waste", offtake: "Tesla, BYD, LG Energy" },
  { symbol: "Be", num: 4, name: "Beryllium", row: 2, col: 2, wbm: false },
  { symbol: "B", num: 5, name: "Boron", row: 2, col: 13, wbm: false },
  { symbol: "C", num: 6, name: "Carbon", row: 2, col: 14, wbm: false },
  { symbol: "N", num: 7, name: "Nitrogen", row: 2, col: 15, wbm: false },
  { symbol: "O", num: 8, name: "Oxygen", row: 2, col: 16, wbm: false },
  { symbol: "F", num: 9, name: "Fluorine", row: 2, col: 17, wbm: false },
  { symbol: "Ne", num: 10, name: "Neon", row: 2, col: 18, wbm: false },
  // Row 3
  { symbol: "Na", num: 11, name: "Sodium", row: 3, col: 1, wbm: false },
  { symbol: "Mg", num: 12, name: "Magnesium", row: 3, col: 2, wbm: false },
  { symbol: "Al", num: 13, name: "Aluminium", row: 3, col: 13, wbm: true, color: "#839470", desc: "Lightweight structures and high-voltage power cables.", from: "E-Waste", offtake: "Apple, Boeing, Ford" },
  { symbol: "Si", num: 14, name: "Silicon", row: 3, col: 14, wbm: false },
  { symbol: "P", num: 15, name: "Phosphorus", row: 3, col: 15, wbm: false },
  { symbol: "S", num: 16, name: "Sulfur", row: 3, col: 16, wbm: false },
  { symbol: "Cl", num: 17, name: "Chlorine", row: 3, col: 17, wbm: false },
  { symbol: "Ar", num: 18, name: "Argon", row: 3, col: 18, wbm: false },
  // Row 4
  { symbol: "K", num: 19, name: "Potassium", row: 4, col: 1, wbm: false },
  { symbol: "Ca", num: 20, name: "Calcium", row: 4, col: 2, wbm: false },
  { symbol: "Sc", num: 21, name: "Scandium", row: 4, col: 3, wbm: false },
  { symbol: "Ti", num: 22, name: "Titanium", row: 4, col: 4, wbm: true, color: "#839470", desc: "Aerospace hulls and biocompatible medical implants.", from: "Defence Electronics", offtake: "Lockheed, SpaceX, Medtronic" },
  { symbol: "V", num: 23, name: "Vanadium", row: 4, col: 5, wbm: false },
  { symbol: "Cr", num: 24, name: "Chromium", row: 4, col: 6, wbm: false },
  { symbol: "Mn", num: 25, name: "Manganese", row: 4, col: 7, wbm: false },
  { symbol: "Fe", num: 26, name: "Iron", row: 4, col: 8, wbm: false },
  { symbol: "Co", num: 27, name: "Cobalt", row: 4, col: 9, wbm: true, color: "#839470", desc: "Thermal stability in NCM battery chemistries.", from: "B-Waste", offtake: "Panasonic, Samsung SDI" },
  { symbol: "Ni", num: 28, name: "Nickel", row: 4, col: 10, wbm: true, color: "#839470", desc: "High-nickel cathodes for long-range EVs.", from: "B-Waste", offtake: "Tesla, Ford, Hyundai" },
  { symbol: "Cu", num: 29, name: "Copper", row: 4, col: 11, wbm: true, color: "#839470", desc: "The backbone of electrification and AI data centres.", from: "E-Waste", offtake: "ABB, Siemens, Schneider" },
  { symbol: "Zn", num: 30, name: "Zinc", row: 4, col: 12, wbm: false },
  { symbol: "Ga", num: 31, name: "Gallium", row: 4, col: 13, wbm: false },
  { symbol: "Ge", num: 32, name: "Germanium", row: 4, col: 14, wbm: false },
  { symbol: "As", num: 33, name: "Arsenic", row: 4, col: 15, wbm: false },
  { symbol: "Se", num: 34, name: "Selenium", row: 4, col: 16, wbm: false },
  { symbol: "Br", num: 35, name: "Bromine", row: 4, col: 17, wbm: false },
  { symbol: "Kr", num: 36, name: "Krypton", row: 4, col: 18, wbm: false },
  // Row 5
  { symbol: "Rb", num: 37, name: "Rubidium", row: 5, col: 1, wbm: false },
  { symbol: "Sr", num: 38, name: "Strontium", row: 5, col: 2, wbm: false },
  { symbol: "Y",  num: 39, name: "Yttrium", row: 5, col: 3, wbm: false },
  { symbol: "Zr", num: 40, name: "Zirconium", row: 5, col: 4, wbm: false },
  { symbol: "Nb", num: 41, name: "Niobium", row: 5, col: 5, wbm: false },
  { symbol: "Mo", num: 42, name: "Molybdenum", row: 5, col: 6, wbm: false },
  { symbol: "Tc", num: 43, name: "Technetium", row: 5, col: 7, wbm: false },
  { symbol: "Ru", num: 44, name: "Ruthenium", row: 5, col: 8, wbm: false },
  { symbol: "Rh", num: 45, name: "Rhodium", row: 5, col: 9, wbm: false },
  { symbol: "Pd", num: 46, name: "Palladium", row: 5, col: 10, wbm: true, color: "#839470", desc: "Critical catalyst for hydrogen and semiconductor layers.", from: "E-Waste", offtake: "Intel, TSMC, BASF" },
  { symbol: "Ag", num: 47, name: "Silver", row: 5, col: 11, wbm: true, color: "#839470", desc: "Best conductor for solar PV and advanced circuit boards.", from: "E-Waste", offtake: "Samsung, SolarCity, Dell" },
  { symbol: "Cd", num: 48, name: "Cadmium", row: 5, col: 12, wbm: false },
  { symbol: "In", num: 49, name: "Indium", row: 5, col: 13, wbm: false },
  { symbol: "Sn", num: 50, name: "Tin", row: 5, col: 14, wbm: false },
  { symbol: "Sb", num: 51, name: "Antimony", row: 5, col: 15, wbm: false },
  { symbol: "Te", num: 52, name: "Tellurium", row: 5, col: 16, wbm: false },
  { symbol: "I",  num: 53, name: "Iodine", row: 5, col: 17, wbm: false },
  { symbol: "Xe", num: 54, name: "Xenon", row: 5, col: 18, wbm: false },
  // Row 6
  { symbol: "Cs", num: 55, name: "Cesium", row: 6, col: 1, wbm: false },
  { symbol: "Ba", num: 56, name: "Barium", row: 6, col: 2, wbm: false },
  { symbol: "Hf", num: 72, name: "Hafnium", row: 6, col: 4, wbm: false },
  { symbol: "Ta", num: 73, name: "Tantalum", row: 6, col: 5, wbm: false },
  { symbol: "W",  num: 74, name: "Tungsten", row: 6, col: 6, wbm: false },
  { symbol: "Re", num: 75, name: "Rhenium", row: 6, col: 7, wbm: false },
  { symbol: "Os", num: 76, name: "Osmium", row: 6, col: 8, wbm: false },
  { symbol: "Ir", num: 77, name: "Iridium", row: 6, col: 9, wbm: false },
  { symbol: "Pt", num: 78, name: "Platinum", row: 6, col: 10, wbm: false },
  { symbol: "Au", num: 79, name: "Gold", row: 6, col: 11, wbm: true, color: "#839470", desc: "Corrosion-resistant plating for all high-end electronics.", from: "E-Waste", offtake: "Apple, NVIDIA, Rolex" },
  { symbol: "Hg", num: 80, name: "Mercury", row: 6, col: 12, wbm: false },
  { symbol: "Tl", num: 81, name: "Thallium", row: 6, col: 13, wbm: false },
  { symbol: "Pb", num: 82, name: "Lead", row: 6, col: 14, wbm: true, color: "#839470", desc: "Radiation shielding and high-performance lead-acid storage.", from: "E-Waste", offtake: "GS Yuasa, Exide" },
  { symbol: "Bi", num: 83, name: "Bismuth", row: 6, col: 15, wbm: false },
  { symbol: "Po", num: 84, name: "Polonium", row: 6, col: 16, wbm: false },
  { symbol: "At", num: 85, name: "Astatine", row: 6, col: 17, wbm: false },
  { symbol: "Rn", num: 86, name: "Radon", row: 6, col: 18, wbm: false },
  // Row 7
  { symbol: "Fr", num: 87, name: "Francium", row: 7, col: 1, wbm: false },
  { symbol: "Ra", num: 88, name: "Radium", row: 7, col: 2, wbm: false },
  { symbol: "Rf", num: 104, name: "Rutherfordium", row: 7, col: 4, wbm: false },
  { symbol: "Db", num: 105, name: "Dubnium", row: 7, col: 5, wbm: false },
  { symbol: "Sg", num: 106, name: "Seaborgium", row: 7, col: 6, wbm: false },
  { symbol: "Bh", num: 107, name: "Bohrium", row: 7, col: 7, wbm: false },
  { symbol: "Hs", num: 108, name: "Hassium", row: 7, col: 8, wbm: false },
  { symbol: "Mt", num: 109, name: "Meitnerium", row: 7, col: 9, wbm: false },
  { symbol: "Ds", num: 110, name: "Darmstadtium", row: 7, col: 10, wbm: false },
  { symbol: "Rg", num: 111, name: "Roentgenium", row: 7, col: 11, wbm: false },
  { symbol: "Cn", num: 112, name: "Copernicium", row: 7, col: 12, wbm: false },
  { symbol: "Nh", num: 113, name: "Nihonium", row: 7, col: 13, wbm: false },
  { symbol: "Fl", num: 114, name: "Flerovium", row: 7, col: 14, wbm: false },
  { symbol: "Mc", num: 115, name: "Moscovium", row: 7, col: 15, wbm: false },
  { symbol: "Lv", num: 116, name: "Livermorium", row: 7, col: 16, wbm: false },
  { symbol: "Ts", num: 117, name: "Tennessine", row: 7, col: 17, wbm: false },
  { symbol: "Og", num: 118, name: "Oganesson", row: 7, col: 18, wbm: false },
  // Lanthanoids (Row 9)
  { symbol: "La", num: 57, name: "Lanthanum", row: 9, col: 3, wbm: false },
  { symbol: "Ce", num: 58, name: "Cerium", row: 9, col: 4, wbm: false },
  { symbol: "Pr", num: 59, name: "Praseodymium", row: 9, col: 5, wbm: false },
  { symbol: "Nd", num: 60, name: "Neodymium", row: 9, col: 6, wbm: true, color: "#839470", desc: "Super-magnets for EV motors and wind turbines.", from: "Rare Earth Magnets", offtake: "Tesla, Vestas, GE" },
  { symbol: "Pm", num: 61, name: "Promethium", row: 9, col: 7, wbm: false },
  { symbol: "Sm", num: 62, name: "Samarium", row: 9, col: 8, wbm: false },
  { symbol: "Eu", num: 63, name: "Europium", row: 9, col: 9, wbm: false },
  { symbol: "Gd", num: 64, name: "Gadolinium", row: 9, col: 10, wbm: false },
  { symbol: "Tb", num: 65, name: "Terbium", row: 9, col: 11, wbm: false },
  { symbol: "Dy", num: 66, name: "Dysprosium", row: 9, col: 12, wbm: true, color: "#839470", desc: "Enhances heat resistance in high-performance magnets.", from: "Rare Earth Magnets", offtake: "Defence, Aerospace" },
  { symbol: "Ho", num: 67, name: "Holmium", row: 9, col: 13, wbm: false },
  { symbol: "Er", num: 68, name: "Erbium", row: 9, col: 14, wbm: false },
  { symbol: "Tm", num: 69, name: "Thulium", row: 9, col: 15, wbm: false },
  { symbol: "Yb", num: 70, name: "Ytterbium", row: 9, col: 16, wbm: false },
  { symbol: "Lu", num: 71, name: "Lutetium", row: 9, col: 17, wbm: false },
];

export default function MineralsSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [hoveredMineral, setHoveredMineral] = useState<any>(null);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  const highlightGroups = {
    "AI Chip Supply": ["Cu", "Au", "Pd", "Al"],
    "EV Battery Loops": ["Li", "Co", "Ni"],
    "Defence & Energy": ["Nd", "Dy", "Ti", "Pb"]
  };

  const isHighlighted = (symbol: string) => {
    if (!activeGroup) return false;
    return (highlightGroups as any)[activeGroup]?.includes(symbol);
  };

  return (
    <section className="relative w-full py-10 overflow-hidden transition-colors duration-500" style={{ background: "var(--c-bg)" }}>
      {/* Background radial glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] pointer-events-none transition-opacity duration-1000 ${isDark ? "opacity-100" : "opacity-30"}`} 
        style={{ background: `radial-gradient(circle, ${isDark ? "rgba(131,148,112,0.05)" : "rgba(120,185,51,0.05)"} 0%, transparent 70%)` }} 
      />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Header */}
        <ScrollReveal className="mb-10 text-center">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-[var(--c-border)] bg-[var(--c-bg2)] shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[var(--c-highlight)] animate-pulse" />
            <span className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-[var(--c-fg2)]">
              11 of 118 Elements
            </span>
          </div>
          <h2 className="font-sans font-black tracking-tighter leading-[1.1] section-title text-[var(--c-fg)] uppercase mb-8">
            Remember the <span className="text-[var(--c-highlight)] lime-glow-text">Periodic Table?</span><br />
            We Extract 11 of Them.
          </h2>
          <p className="font-sans text-[var(--c-fg2)] text-xl max-w-3xl mx-auto leading-relaxed">
            The choke points of every AI chip, every EV, every wind turbine, and every defence platform built this decade.
          </p>
        </ScrollReveal>

        {/* Periodic Table Grid */}
        <div className="relative overflow-x-auto md:overflow-visible pb-12 no-scrollbar">
          <div className="min-w-[1000px] md:min-w-0 md:w-full grid grid-cols-18 gap-1 lg:gap-2">
            {allMinerals.map((m, i) => {
              const highlighted = isHighlighted(m.symbol);
              return (
                <motion.div
                  key={m.num}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.005 }}
                  onMouseEnter={() => m.wbm && setHoveredMineral(m)}
                  onMouseLeave={() => setHoveredMineral(null)}
                  className={`aspect-square relative rounded-[4px] md:rounded-[8px] flex flex-col items-center justify-center p-0.5 md:p-1 lg:p-2 border transition-all duration-500 ${
                    m.wbm ? "z-10 cursor-pointer shadow-sm" : "opacity-10"
                  } ${highlighted ? "scale-110 z-20 shadow-[0_0_20px_var(--c-highlight)] border-[var(--c-highlight)]" : ""}`}
                  style={{
                    gridRow: m.row,
                    gridColumn: m.col,
                    background: highlighted ? "var(--c-highlight)" : (m.wbm ? (hoveredMineral?.num === m.num ? `${m.color}20` : "var(--c-bg2)") : "var(--c-bg2)"),
                    borderColor: highlighted ? "var(--c-highlight)" : (m.wbm ? m.color : "var(--c-border)"),
                    borderWidth: m.wbm || highlighted ? "2px" : "1px",
                  }}
                >
                  <div className={`font-sans font-bold absolute top-0.5 md:top-1 left-0.5 md:left-1 ${highlighted ? "text-black" : (m.wbm ? "text-[var(--c-fg)]" : "text-[var(--c-fg3)]")}`}
                    style={{ fontSize: "clamp(5px, 0.6vw, 9px)" }}
                  >
                    {m.num}
                  </div>
                  <div
                    className="font-sans font-black leading-none"
                    style={{ 
                      color: highlighted ? "#000" : (m.wbm ? m.color : "var(--c-fg3)"),
                      fontSize: "clamp(9px, 1.3vw, 20px)"
                    }}
                  >
                    {m.symbol}
                  </div>
                  <div className={`font-sans font-bold text-center leading-tight uppercase tracking-widest mt-0.5 md:mt-1 ${highlighted ? "text-black/70" : (m.wbm ? "text-[var(--c-fg2)]" : "text-[var(--c-fg3)]")}`}
                    style={{ fontSize: "clamp(3px, 0.45vw, 7px)" }}
                  >
                    {m.name}
                  </div>

                  {/* Tooltip Popup */}
                  <AnimatePresence>
                    {hoveredMineral?.num === m.num && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-5 rounded-xl border border-[var(--c-border)] bg-[var(--c-bg2)] shadow-2xl z-50 pointer-events-none"
                        style={{ 
                          backdropFilter: "blur(20px)",
                          boxShadow: `0 20px 40px rgba(0,0,0,0.2), 0 0 0 1px ${m.color}30`
                        }}
                      >
                        {/* Tooltip content ... */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className="font-sans font-black text-lg text-[var(--c-fg)]">{m.name}</span>
                          <span className="font-sans font-black text-lg" style={{ color: m.color }}>{m.symbol}</span>
                          <span className="font-sans font-black text-sm text-[var(--c-fg3)]">#{m.num}</span>
                        </div>
                        <p className="font-sans text-xs text-[var(--c-fg2)] leading-relaxed mb-4">{m.desc}</p>
                        <div className="space-y-1.5 border-t border-[var(--c-border)] pt-3">
                          <div className="flex justify-between text-[10px]">
                            <span className="font-sans font-bold text-[var(--c-fg3)] uppercase">From:</span>
                            <span className="font-sans font-bold text-[var(--c-fg)]">{m.from}</span>
                          </div>
                          <div className="flex justify-between text-[10px]">
                            <span className="font-sans font-bold text-[var(--c-fg3)] uppercase">Off-take:</span>
                            <span className="font-sans font-bold text-[var(--c-fg)]">{m.offtake}</span>
                          </div>
                        </div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-4 bg-[var(--c-bg2)] border-r border-b border-[var(--c-border)] rotate-45 -translate-y-2" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Description cards with interaction */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              title: "AI Chip Supply",
              minerals: ["Cu", "Au", "Pd", "Al"],
              desc: "Every AI chip requires copper traces, gold contacts, palladium capacitors and aluminium heat sinks — all recovered by WBM.",
              accent: "var(--c-highlight)",
              icon: <Cpu className="w-8 h-8" />
            },
            {
              title: "EV Battery Loops",
              minerals: ["Li", "Co", "Ni"],
              desc: "Lithium, cobalt and nickel recovered from spent EV and grid-storage batteries in a fully closed-loop hydrometallurgical process.",
              accent: "var(--c-highlight)",
              icon: <Battery className="w-8 h-8" />
            },
            {
              title: "Defence & Energy",
              minerals: ["Nd", "Dy", "Ti", "Pb"],
              desc: "Neodymium and dysprosium from end-of-life turbines and MRI machines. Titanium and lead recovered from defence electronics.",
              accent: "var(--c-highlight)",
              icon: <Shield className="w-8 h-8" />
            },
          ].map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.1}>
              <div
                onMouseEnter={() => setActiveGroup(card.title)}
                onMouseLeave={() => setActiveGroup(null)}
                className={`group relative p-8 lg:p-10 rounded-[32px] border transition-all duration-700 cursor-pointer flex flex-col h-full card-theme ${
                  activeGroup === card.title 
                    ? "border-[var(--c-highlight)] shadow-[0_30px_60px_rgba(131,148,112,0.15)] scale-[1.02]" 
                    : "border-[var(--c-border)] bg-[var(--c-bg2)]"
                }`}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--c-highlight)]/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-[var(--c-highlight)]/10 transition-colors" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-[var(--c-highlight)]/10 border border-[var(--c-highlight)]/20 flex items-center justify-center text-[var(--c-highlight)] group-hover:bg-[var(--c-highlight)] group-hover:text-black transition-all duration-500">
                      {card.icon}
                    </div>
                    <div className="flex gap-1.5 flex-wrap justify-end max-w-[120px]">
                      {card.minerals.map((sym) => (
                        <span
                          key={sym}
                          className={`font-sans font-black text-[9px] px-2.5 py-0.5 rounded-full border transition-all ${
                            activeGroup === card.title 
                              ? "bg-[var(--c-highlight)] text-black border-[var(--c-highlight)]" 
                              : "border-[var(--c-highlight)]/20 text-[var(--c-highlight)]"
                          }`}
                        >
                          {sym}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="font-sans font-black text-2xl uppercase tracking-tighter text-[var(--c-fg)] mb-4 group-hover:text-[var(--c-highlight)] transition-colors">
                    {card.title}
                  </h3>
                  <p className="font-sans text-sm lg:text-base text-[var(--c-fg2)] leading-relaxed mb-10 flex-grow group-hover:text-[var(--c-fg)] transition-colors">
                    {card.desc}
                  </p>
                  
                  <div className="relative h-1.5 w-full bg-[var(--c-fg)]/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: "30%" }}
                      animate={{ width: activeGroup === card.title ? "100%" : "30%" }}
                      className="absolute inset-0 bg-[var(--c-highlight)]"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}


