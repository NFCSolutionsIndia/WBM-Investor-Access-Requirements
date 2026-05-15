"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, TrendingUp, Recycle } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";
import ScrollReveal from "@/components/ui/effects/ScrollReveal";
import Particles from "@/components/ui/backgrounds/Particles";

export default function ReadyToCollaborate() {
  const [intent, setIntent] = useState("Invest");

  return (
    <section className="py-10 w-full bg-[var(--c-bg)] transition-colors duration-500 relative overflow-hidden" id="contact">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles 
          particleCount={150}
          particleSpread={8}
          speed={0.1}
          particleColors={["#839470", "#ffffff", "#333333"]}
          moveParticlesOnHover
          alphaParticles
          className="opacity-30"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <ScrollReveal className="mb-8 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[var(--c-border)] bg-[var(--c-bg2)] shadow-sm mx-auto">
            <div className="w-2 h-2 rounded-full bg-[var(--c-highlight)] animate-pulse" />
            <span className="font-sans font-bold text-xs uppercase tracking-widest text-[var(--c-fg2)]">Get In Touch</span>
          </div>

          <h2 className="font-sans font-black uppercase tracking-tighter section-title text-[var(--c-fg)] leading-[0.9] mb-8">
            READY TO <span className="text-[var(--c-highlight)] lime-glow-text">COLLABORATE?</span>
          </h2>

          <p className="font-sans text-[var(--c-fg2)] text-xl leading-relaxed">
            Whether you want to partner, invest, or supply feedstock — we're ready to build the future of mineral security.
          </p>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Form */}
          <ScrollReveal direction="left" className="w-full lg:w-3/5">
            <div className="glass shadow-[0_15px_40px_rgba(0,0,0,0.03)] rounded-[var(--radius-card)] p-8 border border-[var(--c-border)] h-full">
              <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                {/* Intent toggle */}
                <div>
                  <label className="block font-sans text-[10px] font-black uppercase tracking-[0.2em] text-[var(--c-fg2)] mb-4">I want to</label>
                  <div className="flex flex-wrap gap-3">
                    {["Invest", "Supply Feedstock", "Partner"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setIntent(opt)}
                        className={`flex-1 min-w-[120px] py-4 px-4 rounded-[10px] font-sans font-black text-xs uppercase tracking-widest transition-all duration-500 flex items-center justify-center border ${intent === opt
                            ? "bg-[var(--c-highlight)] text-black border-[var(--c-highlight)] shadow-[0_0_20px_rgba(131,148,112,0.2)]"
                            : "border-[var(--c-border)] text-[var(--c-fg2)] hover:border-[var(--c-highlight)]/30 hover:bg-[var(--c-highlight)]/5"
                          }`}
                      >
                        {opt === "Invest" && <TrendingUp className="w-4 h-4 mr-2" />}
                        {opt === "Supply Feedstock" && <Recycle className="w-4 h-4 mr-2" />}
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block font-sans text-[10px] font-black uppercase tracking-[0.2em] text-[var(--c-fg2)]">Full Name *</label>
                    <input type="text" placeholder="Jane Smith" className="w-full bg-[var(--c-bg2)] border border-[var(--c-border)] rounded-[12px] px-5 py-4 text-[var(--c-fg)] font-sans focus:outline-none focus:border-[var(--c-highlight)] transition-all text-sm outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-sans text-[10px] font-black uppercase tracking-[0.2em] text-[var(--c-fg2)]">Email *</label>
                    <input type="email" placeholder="jane@company.com" className="w-full bg-[var(--c-bg2)] border border-[var(--c-border)] rounded-[12px] px-5 py-4 text-[var(--c-fg)] font-sans focus:outline-none focus:border-[var(--c-highlight)] transition-all text-sm outline-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block font-sans text-[10px] font-black uppercase tracking-[0.2em] text-[var(--c-fg2)]">Message</label>
                  <textarea rows={4} placeholder="Describe the opportunity..." className="w-full bg-[var(--c-bg2)] border border-[var(--c-border)] rounded-[12px] px-5 py-4 text-[var(--c-fg)] font-sans focus:outline-none focus:border-[var(--c-highlight)] transition-all resize-none text-sm outline-none"></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 rounded-[10px] font-sans font-black text-sm uppercase tracking-[0.2em] text-black bg-[var(--c-highlight)] shadow-[0_20px_40px_rgba(131,148,112,0.2)] hover:shadow-[0_25px_50px_rgba(131,148,112,0.3)] transition-all duration-500"
                >
                  Initiate Connection
                </motion.button>
              </form>
            </div>
          </ScrollReveal>

          {/* Right Info Cards */}
          <div className="w-full lg:w-2/5 flex flex-col gap-6">
            <ScrollReveal direction="right" className="flex-1">
              <TiltCard className="h-full">
                <div className="glass shadow-[0_15px_40px_rgba(0,0,0,0.03)] rounded-[var(--radius-card)] p-6 md:p-8 border border-[var(--c-border)] h-full flex flex-col justify-between bg-[var(--c-bg2)]">
                  <div>
                    <h3 className="font-sans font-black text-xl text-[var(--c-fg)] mb-6 uppercase tracking-tight">Contact Information</h3>
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 md:gap-6 group cursor-pointer">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-[12px] md:rounded-[14px] bg-white border border-[var(--c-border)] flex items-center justify-center text-[var(--c-highlight)] group-hover:bg-[var(--c-highlight)] group-hover:text-black transition-all duration-500 flex-shrink-0">
                           <Mail size={18} className="md:w-5 md:h-5" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[10px] font-black uppercase tracking-widest text-[var(--c-fg2)] mb-0.5">Email</span>
                          <span className="font-sans text-sm md:text-base text-[var(--c-fg)] group-hover:text-[var(--c-highlight)] transition-colors break-all">contact@wastebeminerals.com</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 md:gap-6 group cursor-pointer">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-[12px] md:rounded-[14px] bg-white border border-[var(--c-border)] flex items-center justify-center text-[var(--c-highlight)] group-hover:bg-[var(--c-highlight)] group-hover:text-black transition-all duration-500 flex-shrink-0">
                           <Phone size={18} className="md:w-5 md:h-5" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[10px] font-black uppercase tracking-widest text-[var(--c-fg2)] mb-0.5">Phone</span>
                          <span className="font-sans text-sm md:text-base text-[var(--c-fg)] group-hover:text-[var(--c-highlight)] transition-colors">+1 (800) WASTE-BE</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 md:gap-6 group cursor-pointer">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-[12px] md:rounded-[14px] bg-white border border-[var(--c-border)] flex items-center justify-center text-[var(--c-highlight)] group-hover:bg-[var(--c-highlight)] group-hover:text-black transition-all duration-500 flex-shrink-0">
                           <MapPin size={18} className="md:w-5 md:h-5" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[10px] font-black uppercase tracking-widest text-[var(--c-fg2)] mb-0.5">Location</span>
                          <span className="font-sans text-[13px] md:text-sm text-[var(--c-fg)] group-hover:text-[var(--c-highlight)] transition-colors leading-relaxed">Waterview Plaza, Suite 310,<br/>Parsippany, NJ 07054, USA</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="glass shadow-[0_15px_40px_rgba(0,0,0,0.03)] rounded-[var(--radius-card)] p-6 md:p-8 border border-[var(--c-highlight)]/30 bg-gradient-to-br from-[var(--c-highlight)]/10 to-transparent relative overflow-hidden group bg-[var(--c-bg2)]">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[var(--c-highlight)]/10 rounded-full blur-3xl group-hover:bg-[var(--c-highlight)]/20 transition-all duration-700" />
                <h3 className="font-sans font-black text-4xl text-[var(--c-highlight)] mb-2 tracking-tighter">48H</h3>
                <div className="font-sans font-black text-xs tracking-[0.2em] uppercase text-[var(--c-fg)] mb-2">Guaranteed Response</div>
                <p className="font-sans text-sm text-[var(--c-fg2)] leading-relaxed">
                  Our strategic partnership team reviews every inquiry and responds within 48 business hours.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
