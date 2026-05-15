"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Recycle, Trash2, Battery, Cpu, Magnet, ShieldCheck, Activity, ArrowRight, DollarSign, AlertCircle, Clock, Globe, Zap, BarChart3, X } from 'lucide-react';
import Particles from '@/components/ui/backgrounds/Particles';
import Button from '@/components/ui/Button';

const ForYouSupplier = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSend = () => {
    setIsSuccess(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSuccess(false);
  };

  const acceptance = [
    { title: "PCBs & Electronics", desc: "Boards, chips, laptops, servers, telecom gear, white goods.", icon: <Cpu size={24} /> },
    { title: "Lithium-ion Batteries", desc: "EV packs, consumer cells, BESS modules, e-bike & e-scooter packs.", icon: <Battery size={24} /> },
    { title: "Decommissioned Magnets", desc: "MRI magnets, wind-turbine generators, hard-drive assemblies.", icon: <Magnet size={24} /> },
  ];

  const benefits = [
    { title: "Tipping Fees", desc: "Government-aligned tipping schedule. Revenue at intake — not at recovery.", icon: <DollarSign size={24} /> },
    { title: "Pickup Logistics", desc: "We handle reverse logistics within our active geographies with chain-of-custody.", icon: <Truck size={24} /> },
    { title: "48-hour Response", desc: "Submit a sample today; receive a routing decision within 48 hours.", icon: <Clock size={24} /> },
    { title: "Intake Criteria", desc: "Single-page checklist for your operations — accepted formats, packaging.", icon: <BarChart3 size={24} /> },
  ];

  const stats = [
    { label: "Indicative Tipping Fee", value: "$450", suffix: "/t", icon: <DollarSign size={20} /> },
    { label: "Intake Response", value: "48", suffix: "hr", icon: <Clock size={20} /> },
    { label: "Active Geographies", value: "4", suffix: "", icon: <Globe size={20} /> },
    { label: "Operational Plants", value: "8", suffix: "", icon: <Zap size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500 overflow-x-hidden">
      {/* Success Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[200] w-full max-w-md px-6"
          >
            <div className="bg-[var(--c-bg2)] backdrop-blur-md border border-[var(--c-lime)]/20 p-4 rounded-2xl flex items-center gap-4 shadow-2xl">
              <div className="w-8 h-8 rounded-full bg-[var(--c-lime)]/20 flex items-center justify-center text-[var(--c-lime)]">
                <ShieldCheck size={18} />
              </div>
              <div>
                <p className="text-[10px] font-black text-[var(--c-lime)] uppercase tracking-widest">Feedstock submitted.</p>
                <p className="text-[10px] text-[var(--c-fg2)] uppercase tracking-widest">Plant routing within 48 hours.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-32 pb-24 transition-colors duration-500">
        <div className="absolute inset-0 z-0">
          <Particles color="#839470" particleCount={500} speed={0.5} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-[1]"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-[var(--c-lime)] mb-8">
              <div className="w-2 h-2 bg-[var(--c-lime)] rounded-full animate-pulse"></div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Supplier Journey</span>
            </div>
            
            <h1 className="text-4xl md:text-[64px] font-black text-white leading-[1.1] tracking-tighter mb-8 uppercase">
               YOUR WASTE IS <br /> <span className="text-[var(--c-lime)] text-glow">OUR FEEDSTOCK.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
               We accept PCBs, lithium-ion batteries, and decommissioned magnets. Tipping fees paid at intake. Pickup logistics included.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={() => setIsModalOpen(true)} size="lg">Submit Feedstock Sample</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal Popup */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            
            {!isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="relative w-full max-w-lg bg-[var(--c-bg2)] border border-[var(--c-border)] rounded-[20px] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
              >
                <div className="p-6 md:p-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="text-left">
                      <h2 className="text-xl font-bold text-[var(--c-fg)] mb-1">Submit Feedstock Sample</h2>
                      <p className="text-xs text-[var(--c-fg2)]">Tell us what you have. We'll route to the nearest plant within 48 hours.</p>
                    </div>
                    <button onClick={closeModal} className="text-[var(--c-fg2)] hover:text-[var(--c-fg)] transition-colors">
                      <X size={20} />
                    </button>
                  </div>

                  <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-[var(--c-lime)] uppercase tracking-widest">Company *</label>
                      <input 
                        type="text" 
                        className="w-full h-12 bg-transparent border border-[var(--c-border)] rounded-lg px-4 text-[var(--c-fg)] focus:outline-none focus:border-[var(--c-lime)] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-[var(--c-lime)] uppercase tracking-widest">Material Type *</label>
                      <input 
                        type="text" 
                        placeholder="e.g., Li-ion modules, server PCBs, MRI magnets"
                        className="w-full h-12 bg-transparent border border-[var(--c-border)] rounded-lg px-4 text-[var(--c-fg)] focus:outline-none focus:border-[var(--c-lime)] transition-colors placeholder:text-[var(--c-fg2)]/30"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-[var(--c-lime)] uppercase tracking-widest">Estimated Tonnage *</label>
                      <input 
                        type="text" 
                        placeholder="e.g., 2 tonnes / month"
                        className="w-full h-12 bg-transparent border border-[var(--c-border)] rounded-lg px-4 text-[var(--c-fg)] focus:outline-none focus:border-[var(--c-lime)] transition-colors placeholder:text-[var(--c-fg2)]/30"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-[var(--c-lime)] uppercase tracking-widest">Pickup Location (City, Country) *</label>
                      <input 
                        type="text" 
                        className="w-full h-12 bg-transparent border border-[var(--c-border)] rounded-lg px-4 text-[var(--c-fg)] focus:outline-none focus:border-[var(--c-lime)] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-[var(--c-lime)] uppercase tracking-widest">Contact Email *</label>
                      <input 
                        type="email" 
                        className="w-full h-12 bg-transparent border border-[var(--c-border)] rounded-lg px-4 text-[var(--c-fg)] focus:outline-none focus:border-[var(--c-lime)] transition-colors"
                      />
                    </div>

                    <div className="flex items-center justify-end gap-6 pt-4">
                      <button 
                        type="button" 
                        onClick={closeModal}
                        className="text-xs font-bold text-[var(--c-fg2)] hover:text-[var(--c-fg)] uppercase tracking-widest transition-colors"
                      >
                        Cancel
                      </button>
                      <button 
                        type="button"
                        onClick={handleSend}
                        className="px-8 py-3 bg-[var(--c-lime)] text-black font-bold text-xs rounded-lg uppercase tracking-widest hover:brightness-110 transition-all"
                      >
                        Send for Review
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-md bg-[var(--c-bg2)] border border-[var(--c-border)] rounded-[20px] p-10 text-center shadow-2xl"
              >
                <div className="w-16 h-16 rounded-full bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)] mx-auto mb-6">
                  <ShieldCheck size={32} />
                </div>
                <h2 className="text-xl font-bold text-[var(--c-fg)] mb-4">Request received</h2>
                <p className="text-xs text-[var(--c-fg2)] leading-relaxed mb-8">
                  In production, this would deliver a DocuSign-gated PDF and notify a WBM partner. For the prototype, your request has been captured locally.
                </p>
                <button 
                  onClick={closeModal}
                  className="w-full py-4 bg-[var(--c-lime)] text-black font-bold text-xs rounded-lg uppercase tracking-widest transition-all"
                >
                  Close
                </button>
              </motion.div>
            )}
          </div>
        )}
      </AnimatePresence>

      {/* Warning Banner */}
      <section className="py-10 bg-red-500/10 border-y border-red-500/20">
         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <AlertCircle className="text-red-500 shrink-0" size={32} />
            <div>
               <h4 className="text-red-500 font-black uppercase text-lg tracking-tight">No Acid-filled batteries.</h4>
               <p className="text-[var(--c-fg2)] text-sm font-medium">No lead-acid, no NiCd, no flooded cells. Closed-loop chemistry only for safety and recovery yield.</p>
            </div>
         </div>
      </section>

      {/* What We Accept Section */}
      <section className="py-10 bg-[var(--c-bg)]">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-10">
              <h2 className="text-sm font-black tracking-[0.3em] text-[var(--c-lime)] uppercase mb-4">Acceptance Policy</h2>
              <h3 className="section-title font-black text-[var(--c-fg)] uppercase tracking-tight">What We <span className="text-[var(--c-lime)]">Accept.</span></h3>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {acceptance.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 rounded-[32px] bg-[var(--c-bg2)] border border-[var(--c-border)] hover:border-[var(--c-lime)] transition-all group"
                >
                   <div className="w-12 h-12 rounded-xl bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)] mb-8 group-hover:bg-[var(--c-lime)] group-hover:text-black transition-colors">
                      {item.icon}
                   </div>
                   <h4 className="text-xl font-bold text-[var(--c-fg)] mb-4 uppercase tracking-tight">{item.title}</h4>
                   <p className="text-sm text-[var(--c-fg2)] leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 bg-[var(--c-fg)]/5">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8 text-left">
              <div>
                 <h2 className="text-sm font-black tracking-[0.3em] text-[var(--c-lime)] uppercase mb-4">Supplier Benefits</h2>
                 <h3 className="section-title font-black text-[var(--c-fg)] uppercase tracking-tight">What You <span className="text-[var(--c-lime)]">Get.</span></h3>
              </div>
              <p className="text-lg text-[var(--c-fg2)] max-md:max-w-full max-w-md">Streamlined logistics and instant revenue for your waste streams.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((point, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[24px] bg-[var(--c-bg)] border border-[var(--c-border)] hover:border-[var(--c-lime)] transition-all shadow-lg"
                >
                   <div className="text-[10px] font-black text-[var(--c-fg2)] uppercase tracking-widest mb-6">0{i+1}</div>
                   <div className="w-10 h-10 rounded-xl bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)] mb-6">
                      {point.icon}
                   </div>
                   <h4 className="text-lg font-bold text-[var(--c-fg)] mb-3 uppercase tracking-tight leading-tight">{point.title}</h4>
                   <p className="text-xs text-[var(--c-fg2)] leading-relaxed">{point.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Proof Points Section */}
      <section className="py-10 bg-[var(--c-bg)] relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <h2 className="text-sm font-black tracking-[0.3em] text-[var(--c-fg2)] uppercase mb-10">Operational Metrics</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                   <div className="text-6xl md:text-7xl font-black text-[var(--c-fg)] tracking-tighter mb-4 leading-none">
                      <span className="text-[var(--c-lime)]">{stat.value}</span>{stat.suffix}
                   </div>
                   <div className="text-[10px] font-black text-[var(--c-fg2)] uppercase tracking-[0.2em]">{stat.label}</div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-[#0a0a0a] text-white text-center relative overflow-hidden border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="section-title font-black tracking-tighter mb-10 leading-none uppercase text-white">Ready to Convert <br /> <span className="text-[var(--c-lime)]">Waste into Revenue?</span></h2>
            <p className="text-xl opacity-60 font-medium mb-10 max-w-2xl mx-auto text-white">Get a routing decision within 48 hours of sample submission. Join the world's most integrated recovery network.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={() => setIsModalOpen(true)} size="lg" className="px-10">Partner With Us</Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <svg width="100%" height="100%"><pattern id="grid-supplier-cta" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/></pattern><rect width="100%" height="100%" fill="url(#grid-supplier-cta)" /></svg>
        </div>
      </section>
    </div>
  );
};

export default ForYouSupplier;
