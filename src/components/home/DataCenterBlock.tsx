"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Shield, Zap, Cpu } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";
import ScrollReveal from "@/components/ui/effects/ScrollReveal";
import MiniChart from "@/components/ui/effects/MiniChart";
import Button from "@/components/ui/Button";

export default function DataCenterBlock() {
  const router = useRouter();
  const cards = [
    { icon: <Shield className="w-8 h-8" />, title: "6-Layer Encryption", desc: "Enterprise-grade security for co-located compute infrastructure." },
    { icon: <Zap className="w-8 h-8" />, title: "100% Uptime", desc: "Redundant power and cooling systems ensuring zero downtime for critical AI loads." },
    { icon: <Cpu className="w-8 h-8" />, title: "NVIDIA-Ready", desc: "Optimized for high-performance GPU clusters including NVIDIA, Cisco, and Juniper." }
  ];

  return (
    <section className="py-10 bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500 relative overflow-hidden">
      {/* Animated background glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--c-highlight)] rounded-full blur-[150px] z-0"
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-[var(--c-border)] bg-[var(--c-fg)]/5">
            <div className="w-2 h-2 rounded-full bg-[var(--c-highlight)] animate-pulse" />
            <span className="font-sans font-bold text-xs uppercase tracking-[0.25em] text-[var(--c-highlight)]">AI Data Centres</span>
          </div>
          <h2 className="section-title font-black uppercase tracking-tighter mb-8 leading-tight">
            AI Data Centres<br/>
            <span className="text-[var(--c-highlight)]">Sustainable & Secure</span>
          </h2>
          <p className="text-[var(--c-fg2)] text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Co-located on-site for 100% uptime and 6-layer encryption. Tenants benefit from sharing the same infrastructure, power, and talent as our extraction facility.
          </p>
          <Button 
            href="/for-you/tenant"
            variant="outline"
            className="mx-auto"
            showArrow
          >
            View Lease Specs
          </Button>
        </ScrollReveal>
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Shield className="w-8 h-8" />, 
              title: "Security Hub", 
              spec: "SEC-06", 
              label: "6-Layer Encryption",
              desc: "Enterprise-grade security perimeter with multi-factor biometric and hardware-level encryption.",
              status: "Protocol Active"
            },
            { 
              icon: <Zap className="w-8 h-8" />, 
              title: "Power Grid", 
              spec: "PWR-100", 
              label: "100% Uptime",
              desc: "Redundant integrated power supplied by local renewables ensuring zero downtime for critical AI loads.",
              status: "System Stable"
            },
            { 
              icon: <Cpu className="w-8 h-8" />, 
              title: "GPU Compute", 
              spec: "GPU-READY", 
              label: "NVIDIA-Ready",
              desc: "Optimized cooling and power density for H100/A100 GPU clusters and AI hyperscaler requirements.",
              status: "NVIDIA Certified"
            }
          ].map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.1}>
              <TiltCard
                className="group relative p-10 rounded-[24px] bg-[var(--c-bg2)] border border-[var(--c-border)] backdrop-blur-xl h-full overflow-hidden shadow-sm hover:shadow-xl transition-all"
                glowColor="rgba(131, 148, 112, 0.1)"
              >
                {/* Background Tech Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--c-highlight)]/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-[var(--c-highlight)]/10 transition-colors" />
                
                {/* Status Indicator */}
                <div className="flex justify-between items-start mb-10">
                   <div className="w-14 h-14 rounded-2xl bg-[var(--c-highlight)]/10 border border-[var(--c-highlight)]/20 flex items-center justify-center text-[var(--c-highlight)] group-hover:scale-110 group-hover:bg-[var(--c-highlight)] group-hover:text-black transition-all duration-500">
                      {card.icon}
                   </div>
                   <div className="text-right">
                      <div className="text-[10px] font-black text-[var(--c-highlight)] uppercase tracking-widest mb-1">{card.spec}</div>
                      <div className="flex items-center gap-1.5 justify-end">
                         <div className="w-1.5 h-1.5 rounded-full bg-[var(--c-highlight)] animate-pulse" />
                         <span className="text-[11px] font-bold text-[var(--c-fg2)] uppercase tracking-widest">{card.status}</span>
                      </div>
                   </div>
                </div>
 
                <div className="relative z-10">
                   <h3 className="text-[10px] font-black text-[var(--c-highlight)] uppercase tracking-[0.3em] mb-2">{card.title}</h3>
                   <h4 className="text-2xl font-black text-[var(--c-fg)] uppercase tracking-tighter mb-4 group-hover:text-[var(--c-highlight)] transition-colors">{card.label}</h4>
                   <p className="text-[var(--c-fg3)] text-sm leading-relaxed mb-8">{card.desc}</p>
                   
                   {/* Technical Readout */}
                   <div className="pt-6 border-t border-[var(--c-border)]">
                      <MiniChart />
                   </div>
                </div>
 
                {/* Corner Accent */}
                <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-[var(--c-highlight)] opacity-20" />
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
