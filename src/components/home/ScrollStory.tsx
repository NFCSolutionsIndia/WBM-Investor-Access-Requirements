"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { CircuitBoard, Battery, Magnet, Check } from "lucide-react";
import ScrollReveal from "@/components/ui/effects/ScrollReveal";

const chapters = [
  {
    num: "01",
    title: "E-Waste Extraction",
    image: "/WBM-Investor-Access-Requirements/media/E-waste_processing.jpg",
    icon: <CircuitBoard className="w-5 h-5 text-[var(--c-lime)]" />,
    tags: ["CU", "AU", "AL", "AG"],
    features: [
      "Automated PCB and semiconductor recovery",
      "Copper, aluminium, and precious metal extraction",
      "AI-assisted device dismantling workflow",
      "High-efficiency material segregation"
    ]
  },
  {
    num: "02",
    title: "B-Waste Recycling",
    image: "/WBM-Investor-Access-Requirements/media/Lithium_Recovery.png",
    icon: <Battery className="w-5 h-5 text-[var(--c-lime)]" />,
    tags: ["LI", "CO", "NI", "MN"],
    features: [
      "Lithium-ion battery recycling systems",
      "Thermal runaway-safe processing methods",
      "Black mass recovery and refinement",
      "Closed-loop battery material recovery"
    ]
  },
  {
    num: "03",
    title: "Rare Earth Elements",
    image: "/WBM-Investor-Access-Requirements/media/RareEarthElements.jpg",
    icon: <Magnet className="w-5 h-5 text-[var(--c-lime)]" />,
    tags: ["ND", "DY", "PR", "TB"],
    features: [
      "Neodymium and dysprosium extraction",
      "Rare earth element separation technology",
      "Precision refinement and purification",
      "Critical mineral recovery at industrial scale"
    ]
  }
];

export default function ScrollStory() {
  const router = useRouter();
  
  return (
    <section className="relative w-full py-16 md:py-24 bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500 overflow-hidden border-y border-[var(--c-bg2)]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="mb-14 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[var(--c-bg2)] bg-[var(--c-bg)] shadow-sm mx-auto">
              <div className="w-2 h-2 rounded-full bg-[var(--c-lime)] animate-pulse shadow-[0_0_8px_var(--c-lime)]" />
              <span className="font-sans font-bold text-[10px] uppercase tracking-[0.2em] text-[var(--c-fg)] opacity-50">
                Core Capabilities
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="section-title text-[var(--c-fg)]">
              Three Waste Streams.<br />
              <span className="text-[var(--c-lime)]">One AI Roof.</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* ── Grid Layout for 3 Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {chapters.map((ch, i) => (
            <ScrollReveal key={ch.num} delay={i * 0.15} direction="up" distance={40} className="flex flex-col group">
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-[20px] aspect-[4/5] w-full border border-white/10 shadow-2xl transition-all duration-500 bg-[#080c10] group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] group-hover:border-[var(--c-lime)]/30">
                {/* Background Image */}
                <img 
                  src={ch.image} 
                  alt={ch.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Dark Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040608]/95 via-[#040608]/40 to-transparent z-10" />

                {/* Top Corner Details */}
                <div className="absolute top-5 left-5 right-5 flex justify-between items-center z-20">
                  {/* Icon Badge */}
                  <div className="w-10 h-10 rounded-xl border border-white/15 flex items-center justify-center bg-[#040608]/60 backdrop-blur-md shadow-lg group-hover:border-[var(--c-lime)]/40 transition-colors">
                    {ch.icon}
                  </div>
                  {/* Sector Number */}
                  <div className="font-sans font-black text-[9px] uppercase tracking-[0.25em] text-white/50 bg-[#040608]/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/5">
                    Sector / {ch.num}
                  </div>
                </div>

                {/* Bottom Overlay Text Content */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-col z-20">
                  <h3 className="font-sans font-black text-xl lg:text-2xl uppercase tracking-tight text-white leading-tight mb-4 group-hover:text-[var(--c-lime)] transition-colors">
                    {ch.title}
                  </h3>

                  {/* Chemistry/Element Style Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {ch.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="font-mono text-[9px] font-black border border-white/15 bg-white/10 px-2 py-0.5 rounded text-white/80 group-hover:border-[var(--c-lime)]/30 group-hover:text-[var(--c-lime)] transition-colors uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Features Panes Below the Card */}
              <div className="mt-6 md:mt-8 flex-1 flex flex-col">
                <div className="mb-3 px-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 text-[var(--c-fg)]">Features</span>
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {ch.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-3.5 p-3.5 rounded-xl border border-[var(--c-fg)]/5 bg-[var(--c-fg)]/[0.02] backdrop-blur-sm transition-all duration-300 hover:bg-[var(--c-lime)]/[0.04] hover:border-[var(--c-lime)]/25 hover:translate-x-1 group/pane shadow-sm hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] cursor-pointer"
                    >
                      <div className="w-6 h-6 rounded-full bg-[var(--c-lime)]/10 flex items-center justify-center shrink-0 border border-[var(--c-lime)]/20 transition-all duration-300 group-hover/pane:scale-110 group-hover/pane:bg-[var(--c-lime)]/20">
                        <Check size={11} className="text-[var(--c-lime)] shrink-0" />
                      </div>
                      <span className="text-sm md:text-[15px] font-bold text-[var(--c-fg)] opacity-80 leading-snug group-hover/pane:opacity-100 group-hover/pane:text-[var(--c-fg)] transition-all">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
