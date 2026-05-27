"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Shield, Database, Cpu, Activity, Thermometer, Lock, Globe, ArrowRight, Server, Layers, BarChart3, Wind, Sun, Magnet, Recycle, X, ShieldCheck } from 'lucide-react';
import Hyperspeed from '@/components/ui/backgrounds/Hyperspeed';
import Button from '@/components/ui/Button';
import LiquidCoolingAnimation from '@/components/ui/backgrounds/LiquidCoolingAnimation';
import { useTheme } from '@/components/ui/ThemeProvider';

const ForYouTenant = () => {
  const { theme } = useTheme();
  const [isFloorPlanOpen, setIsFloorPlanOpen] = useState(false);
  const [isSecurityTourOpen, setIsSecurityTourOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState({ title: "", desc: "" });

  const handleSend = (type: 'floor' | 'tour') => {
    setIsSuccess(true);
    setToastMessage(
      type === 'floor' 
        ? { title: "Floor Plan Requested.", desc: "MEP diagram will be shared via secure link." }
        : { title: "Tour Booking Received.", desc: "Site manager will contact you for vetting." }
    );
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  const closeModal = () => {
    setIsFloorPlanOpen(false);
    setIsSecurityTourOpen(false);
    setIsSuccess(false);
  };

  const offerings = [
    { title: "100% Uptime + Power", desc: "Triple-source power: grid, solar, wind. Battery + mineral-stream resilience baked in.", icon: <Zap size={24} /> },
    { title: "6-Layer Encryption", desc: "Physical, perimeter, network, host, app, and key-vault — independently audited.", icon: <Lock size={24} /> },
    { title: "Rack Compatibility", desc: "NVIDIA HGX, Cisco UCS, Juniper QFX certified. Bring your hardware; we bring the floor.", icon: <Server size={24} /> },
    { title: "15-Year Leases", desc: "Long-tenor leases with structured indexation. Optional offtake-aligned co-location.", icon: <Activity size={24} /> },
  ];

  const floors = [
    { id: "4", status: "Available", size: "25,000 sq ft", load: "~12 MW IT load", color: "text-[var(--c-lime)]" },
    { id: "3", status: "Hyperscaler (LOI)", size: "25,000 sq ft", load: "~12 MW IT load", color: "text-[var(--c-fg2)]" },
    { id: "2", status: "Sovereign AI Tenant", size: "25,000 sq ft", load: "~12 MW IT load", color: "text-[var(--c-fg2)]" },
    { id: "1", status: "Anchor Tenant", size: "25,000 sq ft", load: "~12 MW IT load", color: "text-[var(--c-fg2)]" },
  ];

  const stats = [
    { label: "Uptime SLA", value: "100", suffix: "%", icon: <Activity size={20} /> },
    { label: "Power Availability", value: "100", suffix: "%", icon: <Zap size={20} /> },
    { label: "Encryption Layers", value: "6", suffix: "", icon: <Lock size={20} /> },
    { label: "Lease Tenor", value: "15", suffix: "yr", icon: <Database size={20} /> },
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
            <div className="bg-[var(--c-bg2)] backdrop-blur-md border border-[var(--c-lime)]/20 p-4 rounded-2xl flex items-center gap-4 shadow-2xl text-left">
              <div className="w-8 h-8 rounded-full bg-[var(--c-lime)]/20 flex items-center justify-center text-[var(--c-lime)]">
                <ShieldCheck size={18} />
              </div>
              <div>
                <p className="text-[10px] font-black text-[var(--c-lime)] uppercase tracking-widest">{toastMessage.title}</p>
                <p className="text-[10px] text-[var(--c-fg2)] uppercase tracking-widest">{toastMessage.desc}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-32 pb-24 transition-colors duration-500">
        <div className="absolute inset-0 z-0">
          <Hyperspeed speed={0.5} color="#839470" />
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
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Tenant / Data Centre Journey</span>
            </div>
            
            <h1 className="text-4xl md:text-[64px] font-black text-white leading-[1.1] tracking-tighter mb-8 uppercase text-glow">
               ONE FLOOR. <br /> <span className="text-[var(--c-lime)]">FIFTEEN YEARS.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-4xl mx-auto mb-10">
               Plug-and-play compatibility with NVIDIA, Cisco, and Juniper. Six-layer encryption. Built into the only AI-native extraction plant on the planet.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={() => setIsFloorPlanOpen(true)} size="lg">Request Floor Plan</Button>
              <Button onClick={() => setIsSecurityTourOpen(true)} variant="outline" size="lg">Request Lease Terms</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modals */}
      <AnimatePresence>
        {/* Floor Plan Modal */}
        {isFloorPlanOpen && (
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
                      <h2 className="text-xl font-bold text-[var(--c-fg)] mb-1">Request Floor Plan</h2>
                      <p className="text-xs text-[var(--c-fg2)] leading-relaxed">We'll send the dimensioned plan, MEP diagram, and rack schedule.</p>
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
                      <label className="text-[10px] font-bold text-[var(--c-lime)] uppercase tracking-widest">Email *</label>
                      <input 
                        type="email" 
                        className="w-full h-12 bg-transparent border border-[var(--c-border)] rounded-lg px-4 text-[var(--c-fg)] focus:outline-none focus:border-[var(--c-lime)] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-[var(--c-lime)] uppercase tracking-widest">Estimated Rack Count *</label>
                      <input 
                        type="text" 
                        placeholder="e.g., 200 racks @ 30 kW"
                        className="w-full h-12 bg-transparent border border-[var(--c-border)] rounded-lg px-4 text-[var(--c-fg)] focus:outline-none focus:border-[var(--c-lime)] transition-colors placeholder:text-[var(--c-fg2)]/30"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-[var(--c-lime)] uppercase tracking-widest">Target Go-Live *</label>
                      <input 
                        type="text" 
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
                        onClick={() => handleSend('floor')}
                        className="px-8 py-3 bg-[var(--c-lime)] text-black font-bold text-xs rounded-lg uppercase tracking-widest hover:brightness-110 transition-all"
                      >
                        Request Floor Plan
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
                  Your request for the floor plan and MEP diagrams has been captured. Our team will review your profile and share the secure link.
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

        {/* Security Tour Modal */}
        {isSecurityTourOpen && (
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
                      <h2 className="text-xl font-bold text-[var(--c-fg)] mb-1">Book Security Tour</h2>
                      <p className="text-xs text-[var(--c-fg2)] leading-relaxed">On-site walk-through of the 6-layer encryption envelope.</p>
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
                      <label className="text-[10px] font-bold text-[var(--c-lime)] uppercase tracking-widest">Email *</label>
                      <input 
                        type="email" 
                        className="w-full h-12 bg-transparent border border-[var(--c-border)] rounded-lg px-4 text-[var(--c-fg)] focus:outline-none focus:border-[var(--c-lime)] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-[var(--c-lime)] uppercase tracking-widest">Preferred Site *</label>
                      <input 
                        type="text" 
                        placeholder="Phoenix, Hyderabad, RAK..."
                        className="w-full h-12 bg-transparent border border-[var(--c-border)] rounded-lg px-4 text-[var(--c-fg)] focus:outline-none focus:border-[var(--c-lime)] transition-colors placeholder:text-[var(--c-fg2)]/30"
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
                        onClick={() => handleSend('tour')}
                        className="px-8 py-3 bg-[var(--c-lime)] text-black font-bold text-xs rounded-lg uppercase tracking-widest hover:brightness-110 transition-all"
                      >
                        Request Tour
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
                <h2 className="text-xl font-bold text-[var(--c-fg)] mb-4">Tour request received</h2>
                <p className="text-xs text-[var(--c-fg2)] leading-relaxed mb-8">
                  Your request for an on-site security tour has been received. Our site management team will reach out for vetting and scheduling.
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

      {/* What We Deliver Section */}
      <section className="py-10 bg-[var(--c-bg)]">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {offerings.map((point, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 rounded-[32px] bg-[var(--c-bg2)] border border-[var(--c-border)] hover:border-[var(--c-lime)] transition-all group"
                >
                   <div className="w-12 h-12 rounded-xl bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)] mb-8 group-hover:bg-[var(--c-lime)] group-hover:text-black transition-colors">
                      {point.icon}
                   </div>
                   <h4 className="text-xl font-bold text-[var(--c-fg)] mb-4 uppercase tracking-tight">{point.title}</h4>
                   <p className="text-sm text-[var(--c-fg2)] leading-relaxed">{point.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Cooling Architecture Section */}
      <section className="py-10 bg-[var(--c-fg)]/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                 <h2 className="text-sm font-black tracking-[0.3em] text-[var(--c-lime)] uppercase mb-4">Architecture</h2>
                 <h3 className="section-title font-black text-[var(--c-fg)] uppercase tracking-tight mb-8">Liquid Cooling <br /> <span className="text-[#839470]">Integrated Flow.</span></h3>
                 <p className="text-lg text-[var(--c-fg2)] mb-10">Indicative cross-section. Recovery occurs at end-of-life — the techniques stay with us.</p>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: "Coolant Fluids", desc: "Coolant-grade fluids recovered & refined at end-of-life.", icon: <Activity size={20} /> },
                      { title: "Heat-Exchangers", desc: "Copper & Aluminium recovered from cold plates.", icon: <Thermometer size={20} /> },
                      { title: "Magnet-Cooling", desc: "Rare-earth Elements returned via the closed-loop wing.", icon: <Magnet size={20} /> },
                      { title: "Closed-Loop", desc: "Feeds the Closed-Loop Feedstock wing of our Butterfly.", icon: <Recycle size={20} /> },
                    ].map((item, i) => (
                      <div key={i} className="p-6 rounded-2xl border border-[var(--c-border)] bg-[var(--c-bg)] group hover:border-[var(--c-lime)] transition-all">
                         <div className="w-10 h-10 rounded-full bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)] mb-4 group-hover:bg-[var(--c-lime)] group-hover:text-black transition-colors">{item.icon}</div>
                         <h4 className="font-bold text-[var(--c-fg)] uppercase text-base sm:text-lg tracking-widest mb-2">{item.title}</h4>
                         <p className="text-sm text-[var(--c-fg2)] leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                 </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[400px] md:h-[600px] flex items-center justify-center overflow-visible"
              >
                 <div className="absolute inset-0 z-0 w-full h-full">
                    <LiquidCoolingAnimation />
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* Floor Plan Section */}
      <section className="py-10 bg-[var(--c-bg)]">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-10">
              <h2 className="text-sm font-black tracking-[0.3em] text-[var(--c-lime)] uppercase mb-4">Leasing Status</h2>
              <h3 className="section-title font-black text-[var(--c-fg)] uppercase tracking-tight">Four Floors. <span className="text-[#839470]">One is Yours.</span></h3>
           </div>

           <div className="space-y-4 max-w-4xl mx-auto">
              {floors.map((floor, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl bg-[var(--c-bg2)] border border-[var(--c-border)] flex flex-col md:flex-row justify-between items-center gap-6 group hover:border-[var(--c-lime)] transition-all"
                >
                   <div className="flex items-center gap-8">
                      <div className="text-4xl font-black text-[var(--c-fg)]/20 group-hover:text-[var(--c-lime)] transition-colors">0{floor.id}</div>
                      <div>
                         <h4 className="text-xl font-bold text-[var(--c-fg)] uppercase">Floor {floor.id}</h4>
                         <div className="text-xs text-[var(--c-fg2)] font-bold tracking-widest">{floor.size} · {floor.load}</div>
                      </div>
                   </div>
                   <div className={`px-4 py-2 rounded-full border border-current text-[10px] font-black uppercase tracking-widest ${floor.color}`}>
                      {floor.status}
                   </div>
                </motion.div>
              ))}
           </div>
           
           <div className="mt-12 p-8 rounded-3xl bg-[var(--c-fg)]/5 border border-[var(--c-border)] text-center max-w-4xl mx-auto">
              <p className="text-sm font-bold text-[var(--c-fg)] uppercase tracking-widest">Building Total: 100,000 sq ft · ~48 MW IT load · 6-layer encryption envelope</p>
           </div>
        </div>
      </section>

      {/* Proof Points Stats */}
      <section className="py-10 bg-[var(--c-bg)] relative">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
           <h2 className="text-sm font-black tracking-[0.3em] text-[var(--c-fg)]/50 uppercase mb-10">The numbers your CTO will ask for</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                   <div className="text-6xl md:text-7xl font-black text-[var(--c-lime)] tracking-tighter mb-4 leading-none">{stat.value}{stat.suffix}</div>
                   <div className="text-xs font-bold text-[var(--c-fg)] uppercase tracking-[0.2em]">{stat.label}</div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-[var(--c-bg)] text-center border-t border-[var(--c-border)] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="section-title font-black text-[var(--c-fg)] tracking-tighter mb-10 leading-none uppercase">See the supply chain <br /> <span className="text-[var(--c-lime)]">That powers your hardware.</span></h2>
            <p className="text-xl text-[var(--c-fg2)] font-medium mb-10 max-w-2xl mx-auto">85% of AI hardware depends on a chokepoint. Tour our supply-chain diagram before you tour the floor.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/what-we-do" size="lg">Open AI-DC Supply Chain</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ForYouTenant;
