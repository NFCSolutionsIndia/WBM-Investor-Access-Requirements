"use client";
import { motion } from 'framer-motion';
import { Target, Shield, Zap, Award, ArrowRight, Cpu, Battery, Activity, Layers, Database, FlaskConical, Truck, ChevronRight, Magnet } from 'lucide-react';
import PixelBlast from '@/components/ui/backgrounds/PixelBlast';
import Button from '@/components/ui/Button';

const WhatWeDo = () => {
  return (
    <div className="min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 z-0">
          <PixelBlast 
            pixelSize={5}
            color="#839470"
            patternDensity={0.8}
            speed={0.3}
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
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Our Capabilities</span>
            </div>
            
            <h1 className="text-3xl md:text-[64px] font-bold text-white leading-[1.1] tracking-tight mb-8 uppercase">
              What we <br />
              <span className="text-[var(--c-lime)]">recover.</span>
            </h1>
            
            <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              Transforming three integrated waste streams into 11 critical minerals at OEM-grade purity.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[var(--c-lime)]">
                    <Database size={20} />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-bold uppercase text-xs">E-Waste</div>
                    <div className="text-white/40 text-[10px]">PCBs & Chips</div>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[var(--c-lime)]">
                    <Battery size={20} />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-bold uppercase text-xs">B-Waste</div>
                    <div className="text-white/40 text-[10px]">Li-ion Batteries</div>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[var(--c-lime)]">
                    <Zap size={20} />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-bold uppercase text-xs">Rare Earth Magnets</div>
                    <div className="text-white/40 text-[10px]">Rare-Earth Elements</div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* E-Waste Section */}
      <section id="e-waste" className="py-10 bg-[var(--c-fg)]/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-8">
            <div className="max-w-3xl text-left">
              <div className="text-[var(--c-lime)] font-black text-[10px] uppercase tracking-widest mb-4">Integrated Waste Stream 01</div>
              <h2 className="section-title font-black text-[var(--c-fg)] tracking-tight mb-6 uppercase">E-Waste <span className="text-[var(--c-lime)]">Extraction.</span></h2>
              <p className="text-xl text-[var(--c-fg3)] font-medium leading-relaxed">
                Your decommissioned electronics carry six of the eleven minerals every modern product needs. We pull them out at OEM-grade purity.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="p-4 bg-[var(--c-bg)] border border-[var(--c-border)] rounded-2xl text-center min-w-[120px]">
                <div className="text-2xl font-black text-[var(--c-fg)] tracking-tighter">22k</div>
                <div className="text-[10px] font-bold text-[var(--c-fg3)] uppercase">T/Yr Intake</div>
              </div>
              <div className="p-4 bg-[var(--c-bg)] border border-[var(--c-border)] rounded-2xl text-center min-w-[120px]">
                <div className="text-2xl font-black text-[var(--c-lime)] tracking-tighter">≥99.9%</div>
                <div className="text-[10px] font-bold text-[var(--c-fg3)] uppercase">Purity</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { mineral: "Gold", sym: "Au", id: "79", desc: "Bonding wires in every PCB and high-reliability connector.", icon: <Layers size={20} /> },
              { mineral: "Silver", sym: "Ag", id: "47", desc: "PV panels, contacts, RF shielding, switch contacts.", icon: <Layers size={20} /> },
              { mineral: "Copper", sym: "Cu", id: "29", desc: "Backbone of every interconnect, cable, and busbar.", icon: <Layers size={20} /> },
              { mineral: "Palladium", sym: "Pd", id: "46", desc: "Catalysts, MLCC capacitors, hydrogen membranes.", icon: <Layers size={20} /> },
              { mineral: "Aluminium", sym: "Al", id: "13", desc: "Casings, busbars, structural — sold as crushed powder too.", icon: <Layers size={20} /> },
              { mineral: "Lead", sym: "Pb", id: "82", desc: "Solder reclaim, radiation shielding, legacy battery anodes.", icon: <Layers size={20} /> }
            ].map((m, idx) => (
              <div key={idx} className="p-6 md:p-8 rounded-[24px] bg-[var(--c-bg)] border border-[var(--c-border)] hover:border-[var(--c-lime)]/30 transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)]">
                    {m.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-[var(--c-fg)] tracking-tighter leading-none">{m.sym}</div>
                    <div className="text-[10px] font-bold text-[var(--c-fg3)] uppercase">#{m.id}</div>
                  </div>
                </div>
                <h3 className="text-2xl font-black text-[var(--c-fg)] mb-3 uppercase tracking-tight">{m.mineral}</h3>
                <p className="text-base text-[var(--c-fg3)] font-medium leading-relaxed opacity-80">{m.desc}</p>
              </div>
            ))}
          </div>

          {/* Revamped 6-Step Extraction Process - Lighter Shadow */}
          <div className="bg-[var(--c-bg)] rounded-[40px] p-10 md:p-16 border border-[var(--c-border)] shadow-sm relative overflow-hidden group/process">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <svg width="100%" height="100%"><pattern id="grid-process" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/></pattern><rect width="100%" height="100%" fill="url(#grid-process)" /></svg>
            </div>
            <h3 className="text-2xl font-black text-[var(--c-fg)] mb-10 uppercase tracking-[0.2em] text-center">
              The 6-Step <span className="text-[var(--c-lime)]">Extraction Process</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-4 relative">
              <div className="absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[var(--c-lime)]/20 to-transparent hidden lg:block" />
              {[
                { title: "Intake", desc: "Board sorting & gate intake.", icon: <Database size={28} /> },
                { title: "Separation", desc: "Mechanical splitting.", icon: <Cpu size={28} /> },
                { title: "Crushing", icon: <Activity size={28} />, desc: "Powdering for direct sale." },
                { title: "Hydromet", icon: <FlaskConical size={28} />, desc: "Patented process leach." },
                { title: "Refining", icon: <Award size={28} />, desc: "KPI certified streams." },
                { title: "Dispatch", icon: <Truck size={28} />, desc: "OEM off-take delivery." }
              ].map((step, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="relative z-10 flex flex-col items-center group/item"
                >
                  <div className="w-20 h-20 rounded-2xl bg-[var(--c-bg2)] border border-[var(--c-border)] flex items-center justify-center mb-6 text-[var(--c-fg3)] group-hover/item:text-[var(--c-lime)] group-hover/item:border-[var(--c-lime)]/50 group-hover/item:shadow-[0_0_30px_rgba(193,255,0,0.1)] transition-all duration-500 relative">
                     <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[var(--c-bg)] border border-[var(--c-border)] flex items-center justify-center text-[10px] font-black text-[var(--c-lime)] shadow-sm">
                        0{idx+1}
                     </div>
                     {step.icon}
                  </div>
                  <h4 className="font-black text-[var(--c-fg)] mb-3 uppercase text-base tracking-tight group-hover/item:text-[var(--c-lime)] transition-colors">{step.title}</h4>
                  <p className="text-xs text-[var(--c-fg3)] font-medium leading-relaxed px-4 opacity-70 group-hover/item:opacity-100 transition-opacity max-w-[160px] mx-auto">{step.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-20 h-1.5 w-full bg-[var(--c-fg)]/5 rounded-full overflow-hidden max-w-3xl mx-auto">
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: "100%" }}
                 viewport={{ once: true }}
                 transition={{ duration: 2, ease: "easeInOut" }}
                 className="h-full bg-gradient-to-r from-transparent via-[var(--c-lime)] to-transparent"
               />
            </div>
          </div>
        </div>
      </section>

      {/* B-Waste Section */}
      <section id="b-waste" className="py-10 bg-[var(--c-bg)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-8">
            <div className="max-w-3xl text-left">
              <div className="text-[var(--c-lime)] font-black text-[10px] uppercase tracking-widest mb-4">Integrated Waste Stream 02</div>
              <h2 className="section-title font-black text-[var(--c-fg)] tracking-tight mb-6 uppercase">Battery <span className="text-[var(--c-lime)]">Recycling.</span></h2>
              <p className="text-xl text-[var(--c-fg3)] font-medium leading-relaxed">
                Spent EV packs and grid-storage modules. We accept the chemistries that recycle cleanly — and refuse the ones that don't.
              </p>
            </div>
            <div className="flex gap-4 md:order-1">
              <div className="p-4 bg-[var(--c-fg)]/5 border border-[var(--c-border)] rounded-2xl text-center min-w-[120px]">
                <div className="text-2xl font-black text-[var(--c-fg)] tracking-tighter">100%</div>
                <div className="text-[10px] font-bold text-[var(--c-fg3)] uppercase">Traceable</div>
              </div>
              <div className="p-4 bg-[var(--c-fg)]/5 border border-[var(--c-border)] rounded-2xl text-center min-w-[120px]">
                <div className="text-2xl font-black text-[var(--c-lime)] tracking-tighter">≥99.5%</div>
                <div className="text-[10px] font-bold text-[var(--c-fg3)] uppercase">Li2CO3 Grade</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="order-2 lg:order-1 space-y-6">
               <div className="grid grid-cols-1 gap-6">
                 {[
                   { mineral: "Lithium", sym: "Li", id: "3", desc: "Cathode chemistry for every EV and grid-storage cell.", icon: <Battery size={28} />, color: "#c1ff00" },
                   { mineral: "Cobalt", sym: "Co", id: "27", desc: "NMC/NCA cathodes — energy density and cycle life.", icon: <Battery size={28} />, color: "#8bc34a" },
                   { mineral: "Nickel", sym: "Ni", id: "28", desc: "High-nickel cathodes for long-range EVs.", icon: <Battery size={28} />, color: "#4d7c0f" }
                 ].map((m, idx) => (
                   <motion.div 
                     key={idx} 
                     initial={{ opacity: 0, x: -30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.1 }}
                     whileHover={{ scale: 1.02 }}
                     className="p-8 rounded-[32px] bg-[var(--c-bg2)] border border-[var(--c-border)] flex flex-col sm:flex-row items-center gap-8 group hover:border-[var(--c-lime)] transition-all shadow-sm"
                   >
                     <div 
                       className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-colors"
                       style={{ backgroundColor: `${m.color}15`, color: m.color }}
                     >
                       {m.icon}
                     </div>
                     <div className="flex-1 text-center sm:text-left">
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-2 gap-2">
                          <h3 className="text-xl font-black text-[var(--c-fg)] uppercase tracking-tight">{m.mineral}</h3>
                          <div className="flex items-baseline gap-2">
                             <span className="text-3xl font-black text-[var(--c-fg)] tracking-tighter" style={{ color: m.color }}>{m.sym}</span>
                             <span className="text-xs font-bold text-[var(--c-fg3)] uppercase tracking-widest opacity-50">#{m.id}</span>
                          </div>
                        </div>
                        <p className="text-base text-[var(--c-fg3)] font-medium leading-relaxed">{m.desc}</p>
                     </div>
                   </motion.div>
                 ))}
               </div>
            </div>

            <div className="order-1 lg:order-2">
               <div className="rounded-[40px] border border-[var(--c-border)] bg-[var(--c-bg2)] p-10 md:p-16 shadow-sm relative overflow-hidden group/logic">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--c-lime)]/5 rounded-full blur-[60px] pointer-events-none" />
                  <h3 className="text-2xl font-black text-[var(--c-fg)] mb-10 uppercase tracking-[0.2em] border-b border-[var(--c-border)] pb-8">
                    B-Waste <span className="text-[var(--c-lime)]">Flow Logic</span>
                  </h3>
                  <div className="relative space-y-8">
                    <div className="absolute left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-[var(--c-lime)]/50 via-[var(--c-border)] to-[var(--c-border)]" />
                    {[
                      { title: "Discharge", desc: "Safe de-energisation and thermal stabilization." },
                      { title: "Extraction", desc: "High-yield black-mass separation protocols." },
                      { title: "Hydromet", desc: "Isolated Lithium, Cobalt, and Nickel leaching." },
                      { title: "Precipitation", desc: "Synthesis of precursor-ready metallic salts." },
                      { title: "Certification", desc: "Third-party lot-based purity assay certificates." },
                      { title: "Off-take", desc: "Direct logistical injection to gigafactory partners." }
                    ].map((step, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex gap-8 items-start relative z-10 group/step"
                      >
                        <div className="w-10 h-10 rounded-full bg-[var(--c-bg)] border-2 border-[var(--c-border)] flex items-center justify-center shrink-0 group-hover/step:border-[var(--c-lime)] group-hover/step:bg-[var(--c-lime)]/10 transition-all duration-300">
                           <div className="text-[10px] font-black text-[var(--c-lime)]">0{idx+1}</div>
                        </div>
                        <div className="pt-1">
                          <div className="font-black text-[var(--c-fg)] uppercase text-lg mb-1 group-hover/step:text-[var(--c-lime)] transition-colors tracking-tight">{step.title}</div>
                          <div className="text-sm text-[var(--c-fg3)] font-medium leading-relaxed max-w-sm">{step.desc}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-16 pt-8 border-t border-[var(--c-border)] flex items-center gap-4 text-[var(--c-lime)]">
                     <Shield size={20} />
                     <span className="text-[10px] font-black uppercase tracking-[0.2em]">Closed-Loop Certified Logic</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rare Earth Magnets Section */}
      <section id="rare-earth-magnets" className="py-10 bg-[var(--c-fg)]/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-8">
            <div className="max-w-3xl text-left">
              <div className="text-[var(--c-lime)] font-black text-[10px] uppercase tracking-widest mb-4">Integrated Waste Stream 03</div>
              <h2 className="section-title font-black text-[var(--c-fg)] tracking-tight mb-6 uppercase">Rare Earth <span className="text-[var(--c-lime)]">Magnets.</span></h2>
              <p className="text-xl text-[var(--c-fg3)] font-medium leading-relaxed">
                Recovering Neodymium and Dysprosium from high-performance magnets used in EV motors, wind turbines, and data center drives.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="p-4 bg-[var(--c-bg)] border border-[var(--c-border)] rounded-2xl text-center min-w-[120px]">
                <div className="text-2xl font-black text-[var(--c-fg)] tracking-tighter">Circular</div>
                <div className="text-[10px] font-bold text-[var(--c-fg3)] uppercase">Supply Chain</div>
              </div>
              <div className="p-4 bg-[var(--c-bg)] border border-[var(--c-border)] rounded-2xl text-center min-w-[120px]">
                <div className="text-2xl font-black text-[var(--c-lime)] tracking-tighter">98%</div>
                <div className="text-[10px] font-bold text-[var(--c-fg3)] uppercase">Recovery Rate</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {[
                { mineral: "Neodymium", sym: "Nd", id: "60", desc: "The core of high-strength permanent magnets.", icon: <Magnet size={24} /> },
                { mineral: "Dysprosium", sym: "Dy", id: "66", desc: "Critical for maintaining magnetism at high temperatures.", icon: <Magnet size={24} /> }
              ].map((m, idx) => (
                <div key={idx} className="p-6 md:p-8 rounded-[24px] bg-[var(--c-bg)] border border-[var(--c-border)] flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 group hover:border-[var(--c-lime)]/30 transition-all shadow-sm">
                   <div className="w-16 h-16 rounded-2xl bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)] shrink-0">
                     {m.icon}
                   </div>
                   <div className="flex-1 w-full">
                     <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                       <h3 className="text-xl font-bold text-[var(--c-fg)] uppercase">{m.mineral}</h3>
                       <div className="text-left sm:text-right">
                         <span className="text-2xl sm:text-3xl font-black text-[var(--c-fg)] tracking-tighter mr-3">{m.sym}</span>
                         <span className="text-xs font-bold text-[var(--c-fg3)] uppercase">#{m.id}</span>
                       </div>
                     </div>
                     <p className="text-base text-[var(--c-fg3)] font-medium leading-relaxed">{m.desc}</p>
                   </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
