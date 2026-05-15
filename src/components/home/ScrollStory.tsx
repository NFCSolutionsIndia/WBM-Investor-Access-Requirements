"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { CircuitBoard, Battery, Magnet, Check } from "lucide-react";
import ScrollReveal from "@/components/ui/effects/ScrollReveal";

const chapters = [
  {
    num: "01",
    title: "E-Waste Extraction",
    image: "/WBM/media/E-waste_processing.jpg",
    icon: <CircuitBoard className="w-5 h-5" />,
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
    image: "/WBM/media/Lithium_Recovery.png",
    icon: <Battery className="w-5 h-5" />,
    features: [
      "Lithium-ion battery recycling systems",
      "Thermal runaway-safe processing methods",
      "Black mass recovery and refinement",
      "Closed-loop battery material recovery"
    ]
  },
  {
    num: "03",
    title: "Rare Earth Magnets",
    image: "/WBM/media/RareEarthElements.jpg",
    icon: <Magnet className="w-5 h-5" />,
    features: [
      "Neodymium and dysprosium extraction",
      "Rare earth magnet separation technology",
      "Precision refinement and purification",
      "Critical mineral recovery at industrial scale"
    ]
  }
];

export default function ScrollStory() {
  const router = useRouter();
  
  return (
    <section className="relative w-full py-10 bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500 overflow-hidden border-y border-[var(--c-bg2)]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="mb-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[var(--c-bg2)] bg-[var(--c-bg)] shadow-sm mx-auto">
              <div className="w-2 h-2 rounded-full bg-[var(--c-lime)]" />
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

        {/* ── Vertical List ── */}
        <div className="flex flex-col">
          {chapters.map((ch, i) => (
            <div 
              key={ch.num}
              className={`py-8 md:py-10 border-t border-[var(--c-bg2)] first:border-t-0`}
            >
              <ScrollReveal direction={i % 2 === 0 ? "left" : "right"} distance={40}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
                  
                  {/* Image and Icon Column */}
                  <div className="lg:col-span-5 flex items-start gap-6">
                    <div className="shrink-0 pt-2">
                       <div className="w-10 h-10 rounded-lg border border-[var(--c-bg2)] flex items-center justify-center text-[var(--c-fg)] bg-[var(--c-bg)] shadow-sm">
                         {ch.icon}
                       </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-2xl aspect-[16/9] w-full border border-[var(--c-bg2)] shadow-xl">
                      <img 
                        src={ch.image} 
                        alt={ch.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Title Column */}
                  <div className="lg:col-span-3">
                    <h3 className="font-sans font-black text-2xl md:text-3xl uppercase tracking-tight text-[var(--c-fg)] leading-tight">
                      {ch.title}
                    </h3>
                  </div>

                  {/* Features Column */}
                  <div className="lg:col-span-4 lg:pl-8">
                    <div className="mb-6">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 text-[var(--c-fg)]">Features</span>
                    </div>
                    <ul className="space-y-4">
                      {ch.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 group">
                          <Check size={14} className="text-[var(--c-lime)] shrink-0 mt-1 transition-transform group-hover:scale-125" />
                          <span className="text-sm font-bold text-[var(--c-fg)] opacity-70 leading-tight">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
