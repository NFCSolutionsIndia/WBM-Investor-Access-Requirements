"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "@/components/ui/Button";
import TiltCard from "@/components/ui/TiltCard";
import ScrollReveal from "@/components/ui/effects/ScrollReveal";

const industries = [
  { 
    name: "Electric Vehicles", 
    img: "/WBM/media/ElectricVehicles.jpg",
    minerals: ["Lithium", "Cobalt", "Nickel", "Graphite"],
    desc: "Powering the next generation of zero-emission mobility with high-purity recycled minerals."
  },
  { 
    name: "AI Infrastructure", 
    img: "/WBM/media/DataCentersAI.jpg",
    minerals: ["Copper", "Silicon", "Gold", "Gallium"],
    desc: "Critical components for high-performance compute and neural processing units."
  },
  { 
    name: "Aerospace", 
    img: "/WBM/media/AerospaceDefense.jpg",
    minerals: ["Titanium", "Aluminum", "Scandium"],
    desc: "Lightweight, high-strength alloys for extreme performance environments."
  },
  { 
    name: "Consumer Electronics", 
    img: "/WBM/media/ConsumerElectronics.jpg",
    minerals: ["Gold", "Silver", "Palladium", "Platinum"],
    desc: "Closing the loop on high-value precious metals from discarded devices."
  },
  { 
    name: "Energy & Power", 
    img: "/WBM/media/EnergyPower.jpg",
    minerals: ["Neodymium", "Praseodymium", "Dysprosium"],
    desc: "Essential rare earth elements for permanent magnets in wind turbines."
  }
];

export default function IndustriesQuickView() {
  const router = useRouter();
  return (
    <section className="py-10 bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 shadow-sm mx-auto">
            <div className="w-2 h-2 rounded-full bg-[var(--c-highlight)] animate-pulse" />
            <span className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-[var(--c-fg2)]">
              Global Supply
            </span>
          </div>
          <h2 className="section-title font-black uppercase tracking-tighter mb-8">
            Industries <span className="text-[var(--c-highlight)]">Powered by WBM</span>
          </h2>
          <p className="text-[var(--c-fg2)] text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            The minerals we recover are the choke points for AI chips, EV batteries, wind turbines, and defense platforms. 
          </p>

          <Button 
            href="/industries"
            variant="outline"
            className="mx-auto"
            showArrow
          >
            Explore All Verticals
          </Button>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((ind, i) => (
            <ScrollReveal key={ind.name} delay={i * 0.1}>
              <TiltCard
                className="relative h-[450px] rounded-[20px] overflow-hidden cursor-pointer group"
                glowColor="rgba(131, 148, 112, 0.15)"
              >
                <Image 
                  src={ind.img} 
                  alt={ind.name} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end transition-transform duration-500 group-hover:translate-y-[-10px]">
                  <h3 className="text-[19px] font-black text-white tracking-tighter leading-tight mb-4 group-hover:text-white transition-colors uppercase overflow-hidden">
                    {ind.name}
                  </h3>
                  
                  {/* Expanded content on hover */}
                  <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                    <p className="text-[10px] text-white/60 mb-4 font-sans leading-relaxed">
                      {ind.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.minerals.map(m => (
                        <span key={m} className="px-2 py-0.5 rounded-full bg-[var(--c-highlight)]/20 text-[var(--c-highlight)] text-[8px] font-black uppercase tracking-wider border border-[var(--c-highlight)]/30">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
