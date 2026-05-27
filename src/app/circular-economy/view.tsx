"use client";
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, Globe, MapPin, Wind, Zap, Database, ArrowRight, Shield, Layers, Repeat, Trash2, Play, Rewind, FastForward, Maximize, Lock } from 'lucide-react';
import Hyperspeed from '@/components/ui/backgrounds/Hyperspeed';
import Button from '@/components/ui/Button';
import { useTheme } from '@/components/ui/ThemeProvider';
import { CustomVideoPlayer } from '@/components/investor/CustomVideoPlayer';

const CircularEconomy = () => {
  const { theme } = useTheme();

  const layers = [
    {
      id: "01",
      title: "Geographic",
      subtitle: "Within a country.",
      desc: "Every state has trash. We build multiple plants - one per region - so waste is recycled within its own geographic circle, not freighted across the country.",
      icon: <MapPin size={32} />
    },
    {
      id: "02",
      title: "Global",
      subtitle: "Across allies.",
      desc: "From the US to the UAE to India to South Africa, we close the loop across four geographies. We explicitly don't operate in non-allied parts of Asia - so we make a semi-circle, not a full one.",
      icon: <Globe size={32} />
    },
    {
      id: "03",
      title: "Operational",
      subtitle: "Inside the plant.",
      desc: "Wind powers the plant. When those turbines retire, their magnets come back to us. We extract, we return. The closed loop is literal.",
      icon: <RefreshCw size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#0a0a0a] pt-32 pb-24">
        <div className="absolute inset-0 z-0 opacity-60">
          <Hyperspeed />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 z-[1]"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-[var(--c-lime)] mb-8">
              <div className="w-2 h-2 bg-[var(--c-lime)] rounded-full animate-pulse"></div>
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Closed-Loop Systems</span>
            </div>
            
            <h1 className="text-3xl md:text-[64px] font-bold text-white leading-[1.1] tracking-tight mb-8 uppercase">
              Circular <br />
              <span className="text-[var(--c-lime)]">Economy.</span>
            </h1>
            
            <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              Geographic, global, operational - circles inside circles, every one of them deliberate.
            </p>

            {/* <div className="flex justify-center">
              <a 
                href="/WBM-Investor-Access-Requirements/investor/viewer"
                className="flex items-center justify-center gap-3 h-14 px-8 rounded-[10px] border border-white/10 bg-white/5 text-white font-sans font-black text-sm uppercase tracking-widest hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md"
                onContextMenu={(e) => e.preventDefault()}
              >
                <span className="opacity-60 text-lg">📄</span>
                <span>View Pitch Deck</span>
              </a>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Circular Loop Section */}
      <section className={`py-10 relative overflow-hidden transition-colors duration-500 ${theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Side Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--c-lime)]/20 bg-[var(--c-lime)]/5 text-[var(--c-lime)] mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">CIRCULAR ECONOMY</span>
              </div>
              
              <h2 className={`text-4xl md:text-5xl font-black tracking-tighter mb-8 uppercase leading-[1.1] ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                THE CLOSED-LOOP <br />
                <span className="text-[var(--c-lime)]">MINERAL ECOSYSTEM.</span>
              </h2>
              
              <p className={`text-xl font-medium leading-relaxed mb-10 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                An integrated circular economy designed to recover, refine, power, and reinvest critical minerals through a fully connected infrastructure ecosystem.
              </p>
              
              <div className="space-y-6">
                {[
                  "Recover critical minerals from end-of-life electronics and batteries.",
                  "Extract and refine Lithium, Cobalt, Nickel, Copper, and Rare Earth Elements.",
                  "Power AI data centres and future infrastructure using sustainable mineral-enabled systems.",
                  "Reinvest recovered value into renewable energy, supply-chain resilience, and next-generation technologies."
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="text-[var(--c-lime)] font-black text-xl group-hover:translate-x-2 transition-transform">&rarr;</div>
                    <p className={`text-lg font-bold leading-snug ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Side Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[24px] overflow-hidden"
            >
              <img 
                src={theme === 'dark' ? "/WBM-Investor-Access-Requirements/media/CircularEconomyDark.png" : "/WBM-Investor-Access-Requirements/media/CircularEconomy.png"} 
                alt="Circular Economy Ecosystem" 
                className="w-full h-auto block object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investor Video - Operational Deep Dive */}
      <section className="w-full bg-[#0a0a0a] overflow-hidden py-0">
        <CustomVideoPlayer 
          src="https://pub-98eacb9c868140728451ae849bec9187.r2.dev/investor22.mp4"
          badgeText="Processing Prowess"
          title="Advanced Recovery Systems"
          className="rounded-none border-x-0 border-y border-[var(--c-border)]"
        />
      </section>

            {/* Comparison Infographic */}
      <section className="py-10 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-0 md:px-6">
           <div className="text-center mb-8">
              <h2 className="section-title font-black text-white tracking-tight mb-6 uppercase leading-[1.1] max-w-4xl mx-auto">The Shift to <span className="text-[var(--c-lime)]">Restoration.</span></h2>
              <p className="text-lg text-gray-400 font-medium max-w-2xl mx-auto">Moving beyond the linear 'take-make-waste' model into a high-yield, sovereign supply chain.</p>
           </div>

           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative max-w-[1280px] mx-auto md:rounded-[10px] md:overflow-hidden"
           >
              {/* Desktop Image */}
              <img src="/WBM-Investor-Access-Requirements/media/Linear_and_Circular Difference_Dark.png" alt="Linear vs Circular Economy" className="hidden lg:block w-full h-auto object-contain mx-auto" />
              {/* Mobile Image */}
              <img src="/WBM-Investor-Access-Requirements/media/Linear_and_Circular_Mobile_View.png" alt="Linear vs Circular Economy" className="lg:hidden w-full h-auto object-contain mx-auto" />
           </motion.div>
        </div>
      </section>

      {/* Three Layers Section */}
      <section className="py-10 bg-[var(--c-fg)]/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="section-title font-black text-[var(--c-fg)] tracking-tight mb-6 uppercase leading-[1.1] max-w-5xl mx-auto">Geographic. Global. <br className="hidden md:block" /><span className="text-[var(--c-lime)]">Operational.</span></h2>
            <p className="text-xl text-[var(--c-fg3)] font-medium max-w-2xl mx-auto">Three layers of deliberate circularity, closing the loop from local regions to global alliances.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {layers.map((layer, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-[32px] bg-[var(--c-bg)] border border-[var(--c-border)] flex flex-col h-full relative group"
              >
                <div className="absolute top-8 right-8 text-4xl font-black text-[var(--c-lime)]/10 tracking-tighter">{layer.id}</div>
                <div className="w-16 h-16 rounded-2xl bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)] mb-8 group-hover:bg-[var(--c-lime)] group-hover:text-black transition-all duration-500">
                  {layer.icon}
                </div>
                <h3 className="text-xs font-black text-[var(--c-lime)] uppercase tracking-[0.2em] mb-2">Layer {layer.id}</h3>
                <h4 className="text-2xl font-black text-[var(--c-fg)] uppercase mb-4 tracking-tight">{layer.title}</h4>
                <div className="text-lg font-bold text-[var(--c-fg)] mb-6">{layer.subtitle}</div>
                <p className="text-[var(--c-fg3)] font-medium leading-relaxed flex-grow">{layer.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-6">
           <div className="relative p-12 md:p-20 rounded-[40px] bg-[var(--c-bg)] border border-[var(--c-border)] overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--c-lime)]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                 <div className="text-[var(--c-lime)] font-black text-6xl mb-8 opacity-20">"</div>
                 <p className="text-2xl md:text-4xl font-black text-[var(--c-fg)] leading-tight tracking-tight mb-10 italic">
                   We are not just an e-waste recycler. We are the brains. We are the AI data centre. Humans are taking care of robots - not robots taking jobs of humans.
                 </p>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--c-lime)]" />
                    <div>
                       <div className="text-[var(--c-fg)] font-black uppercase text-sm tracking-widest">Founder's Note</div>
                       <div className="text-[var(--c-fg3)] text-xs font-bold">WBM Vision 2030</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="section-title font-black text-[var(--c-fg)] tracking-tight mb-8 uppercase">Ready to close <span className="text-[var(--c-lime)]">the loop?</span></h2>
          <p className="text-xl text-[var(--c-fg3)] font-medium mb-10 leading-relaxed">Let's turn trash into treasure - together.</p>
          <div className="flex justify-center">
            <Button href="/contact">
              Partner With Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CircularEconomy;
