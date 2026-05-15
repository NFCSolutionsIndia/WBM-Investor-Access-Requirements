"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Scale, Globe, Zap } from 'lucide-react';
import Particles from '@/components/ui/backgrounds/Particles';
import Button from '@/components/ui/Button';

const Materials = () => {
  const categories = [
    {
      id: "precious",
      name: "PRECIOUS METALS",
      color: "#8359ff",
      minerals: [
        {
          symbol: "Au",
          name: "Gold",
          atomic: "79",
          source: "E-Waste",
          desc: "Bonding wires in every PCB and high-reliability connector.",
          purity: "99.95%+",
          lot: "5-50 kg / month",
          lead: "30 days"
        },
        {
          symbol: "Ag",
          name: "Silver",
          atomic: "47",
          source: "E-Waste",
          desc: "PV panels, contacts, RF shielding, switch contacts.",
          purity: "99.9%+",
          lot: "10-100 kg / month",
          lead: "30 days"
        },
        {
          symbol: "Cu",
          name: "Copper",
          atomic: "29",
          source: "E-Waste",
          desc: "Backbone of every interconnect, cable, and busbar.",
          purity: "99.9%+ cathode grade",
          lot: "20-500 t / month",
          lead: "45 days"
        },
        {
          symbol: "Pd",
          name: "Palladium",
          atomic: "46",
          source: "E-Waste",
          desc: "Catalysts, MLCC capacitors, hydrogen membranes.",
          purity: "99.95%+",
          lot: "1-20 kg / month",
          lead: "60 days"
        },
        {
          symbol: "Pt",
          name: "Platinum",
          atomic: "78",
          source: "E-Waste",
          desc: "Precision catalysts and high-durability electrical contacts.",
          purity: "99.95%+",
          lot: "1-10 kg / month",
          lead: "60 days"
        }
      ]
    },
    {
      id: "critical",
      name: "CRITICAL MINERALS",
      color: "#839470",
      minerals: [
        {
          symbol: "Li",
          name: "Lithium",
          atomic: "3",
          source: "Batteries",
          desc: "Cathode chemistry for every EV and grid-storage cell.",
          purity: "99.8%",
          lot: "50-1000 t / month",
          lead: "90 days"
        },
        {
          symbol: "Co",
          name: "Cobalt",
          atomic: "27",
          source: "Batteries",
          desc: "NMC/NCA cathodes - energy density and cycle life.",
          purity: "99.8%",
          lot: "10-200 t / month",
          lead: "90 days"
        },
        {
          symbol: "Ni",
          name: "Nickel",
          atomic: "28",
          source: "Batteries",
          desc: "High-nickel cathodes for long-range EVs.",
          purity: "Class 1 99.8%",
          lot: "100-2000 t / month",
          lead: "45 days"
        },
        {
          symbol: "Sn",
          name: "Tin",
          atomic: "50",
          source: "E-Waste",
          desc: "Essential component for lead-free solder in high-density PCBs.",
          purity: "99.8%+",
          lot: "5-50 t / month",
          lead: "30 days"
        },
        {
          symbol: "Al",
          name: "Aluminum",
          atomic: "13",
          source: "Chassis",
          desc: "Lightweight thermal management for high-density computing.",
          purity: "99.7%",
          lot: "20-500 t / month",
          lead: "30 days"
        }
      ]
    },
    {
      id: "rare-earth",
      name: "RARE EARTH ELEMENTS",
      color: "#ff59b4",
      minerals: [
        {
          symbol: "Nd",
          name: "Neodymium",
          atomic: "60",
          source: "Magnets",
          desc: "High-performance magnets for EV motors and wind turbines.",
          purity: "99.5%+",
          lot: "1-10 t / month",
          lead: "60 days"
        },
        {
          symbol: "Dy",
          name: "Dysprosium",
          atomic: "66",
          source: "Magnets",
          desc: "Critical additive for heat-resistant permanent magnets.",
          purity: "99.9%",
          lot: "100-500 kg / month",
          lead: "90 days"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 z-0">
          <Particles 
            particleCount={300}
            particleSpread={15}
            speed={0.2}
            particleColors={['#839470', '#ffffff', '#8bc34a']}
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-[1]"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-[var(--c-lime)] mb-6 md:mb-8">
              <div className="w-2 h-2 bg-[var(--c-lime)] rounded-full animate-pulse"></div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Material Catalog</span>
            </div>
            
            <h1 className="text-3xl md:text-[64px] font-bold text-white leading-[1.1] tracking-tight mb-6 md:mb-8 uppercase">
              11 <span className="text-[var(--c-lime)]">of 118.</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              The choke points of every AI chip, every EV, every wind turbine, and every defence platform built this decade.
            </p>

          </motion.div>
        </div>
      </section>


      {/* Materials Deep Dive */}
      <section className="py-10 bg-[var(--c-bg)]">
        <div className="max-w-7xl mx-auto px-6">
          {categories.map((category) => (
            <div key={category.id} className="mb-10 last:mb-0">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-10">
                <div 
                  className="w-3 h-3 rounded-full animate-pulse" 
                  style={{ backgroundColor: category.color, boxShadow: `0 0 12px ${category.color}` }}
                />
                <h2 className="text-sm font-black tracking-[0.3em] text-[var(--c-fg2)] uppercase">
                  {category.name}
                </h2>
              </div>

              {/* Grid of Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.minerals.map((mat, idx) => (
                  <motion.div
                    key={mat.symbol}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 rounded-[20px] bg-[var(--c-bg2)] border border-[var(--c-border)] hover:border-[var(--c-fg3)] transition-all duration-500 group"
                  >
                    {/* Symbol & Name */}
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-4xl font-black text-[var(--c-fg)] group-hover:text-[var(--c-lime)] transition-colors">
                        {mat.symbol}
                      </span>
                      <span className="text-2xl font-medium text-[var(--c-fg2)]">
                        {mat.name}
                      </span>
                    </div>

                    {/* Atomic & Source */}
                    <div className="text-[10px] font-bold text-[var(--c-fg3)] uppercase tracking-widest mb-6">
                      #{mat.atomic} from {mat.source}
                    </div>

                    {/* Description */}
                    <p className="text-[var(--c-fg2)] text-base leading-relaxed mb-10 h-12">
                      {mat.desc}
                    </p>

                    {/* Stats Table */}
                    <div className="space-y-4 border-t border-[var(--c-border)] pt-8">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-bold text-[var(--c-fg3)] uppercase tracking-widest text-[10px]">Purity</span>
                        <span className="font-bold text-[var(--c-fg2)]">{mat.purity}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-bold text-[var(--c-fg3)] uppercase tracking-widest text-[10px]">Lot</span>
                        <span className="font-bold text-[var(--c-fg2)]">{mat.lot}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-bold text-[var(--c-fg3)] uppercase tracking-widest text-[10px]">Lead</span>
                        <span className="font-bold text-[var(--c-fg2)]">{mat.lead}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Traceability Section */}
      <section className="py-10 bg-[var(--c-fg)]/5 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="section-title font-bold text-[var(--c-fg)] leading-tight tracking-tight mb-8 uppercase">
                Transparency you can <span className="text-[var(--c-lime)]">trust</span>
              </h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-[var(--c-bg)] rounded-[10px] shadow-sm border border-[var(--c-border)] flex items-center justify-center shrink-0">
                    <ShieldCheck size={28} className="text-[var(--c-lime)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--c-fg)] mb-2 uppercase tracking-tight">Ethical Assurance</h3>
                    <p className="text-[var(--c-fg2)] font-medium leading-relaxed">Our materials provide a conflict-free alternative to traditional mining, ensuring your supply chain meets the highest ESG standards.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-[var(--c-bg)] rounded-[10px] shadow-sm border border-[var(--c-border)] flex items-center justify-center shrink-0">
                    <Scale size={28} className="text-[var(--c-lime)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--c-fg)] mb-2 uppercase tracking-tight">Precision Grading</h3>
                    <p className="text-[var(--c-fg2)] font-medium leading-relaxed">Every batch undergoes rigorous spectral analysis to guarantee the purity and consistency required for precision manufacturing.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-[var(--c-bg)] rounded-[10px] shadow-sm border border-[var(--c-border)] flex items-center justify-center shrink-0">
                    <Globe size={28} className="text-[var(--c-fg)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--c-fg)] mb-2 uppercase tracking-tight">Global Traceability</h3>
                    <p className="text-[var(--c-fg2)] font-medium leading-relaxed">Utilizing blockchain-backed documentation, we provide a full chain of custody for every gram of material recovered.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[var(--c-footer-bg)] rounded-[10px] p-12 relative overflow-hidden shadow-2xl border border-[var(--c-border)]"
            >
               <div className="relative z-10">
                  <div className="text-[10px] font-black text-[var(--c-lime)] uppercase tracking-[0.3em] mb-6">Market Impact</div>
                  <h3 className="text-3xl font-black text-white mb-8 uppercase tracking-tighter">Decoupling innovation from extractive mining.</h3>
                  <div className="space-y-8">
                     <div>
                        <div className="flex justify-between mb-2">
                           <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">Carbon Footprint Reduction</span>
                           <span className="text-white font-black text-sm">85%</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                           <motion.div 
                             initial={{ width: 0 }}
                             whileInView={{ width: "85%" }}
                             viewport={{ once: true }}
                             className="h-full bg-[var(--c-lime)]" 
                           />
                        </div>
                     </div>
                     <div>
                        <div className="flex justify-between mb-2">
                           <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">Water Usage Savings</span>
                           <span className="text-white font-black text-sm">92%</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                           <motion.div 
                             initial={{ width: 0 }}
                             whileInView={{ width: "92%" }}
                             viewport={{ once: true }}
                             className="h-full bg-[var(--c-lime)]" 
                           />
                        </div>
                     </div>
                  </div>
               </div>
               
               {/* Decorative glow */}
               <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[var(--c-lime)]/20 rounded-full blur-[100px]"></div>
            </motion.div>
          </div>
        </div>
      </section>
 
      {/* CTA Section */}
      <section className="py-10 bg-[var(--c-bg)] text-center border-t border-[var(--c-border)]">
        <div className="max-w-3xl mx-auto px-6">
          <Zap size={48} className="text-[var(--c-lime)] mx-auto mb-10" />
          <h2 className="section-title font-black text-[var(--c-fg)] mb-6 tracking-tighter uppercase">Securing your <span className="text-[var(--c-lime)]">material future.</span></h2>
          <p className="text-xl text-[var(--c-fg2)] font-medium mb-10">Contact our procurement team for current spot prices, forward supply contracts, and technical grade specifications.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" className="px-10">
              Request Material Specs
            </Button>
            <Button href="/contact" size="lg" variant="outline" className="px-10">
              Speak with Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
 
export default Materials;
