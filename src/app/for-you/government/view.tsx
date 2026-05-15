"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Globe, Users, Award, Landmark, Scale, Recycle, Activity, ArrowRight, Zap, Briefcase, TrendingUp, X, ShieldCheck, FileText } from 'lucide-react';
import Beams from '@/components/ui/backgrounds/Beams';
import Button from '@/components/ui/Button';
import { useTheme } from '@/components/ui/ThemeProvider';

const ForYouGovernment = () => {
  const { theme } = useTheme();
  const [isBriefModalOpen, setIsBriefModalOpen] = useState(false);
  const [isMoUModalOpen, setIsMoUModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSend = () => {
    setIsSuccess(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  const closeModal = () => {
    setIsBriefModalOpen(false);
    setIsMoUModalOpen(false);
    setIsSuccess(false);
  };

  const commitments = [
    { title: "State-level Jobs", desc: "~240 direct jobs per plant. Reverse-logistics and engineering multipliers on top.", icon: <Briefcase size={24} /> },
    { title: "Upskilling Labour", desc: "Apprenticeships convert existing waste-handling labour into robot-operator roles.", icon: <Users size={24} /> },
    { title: "Tonnes Diverted", desc: "Verified landfill diversion published in our SLA Appendix — auditable by issuing authority.", icon: <Recycle size={24} /> },
    { title: "Break the 85%", desc: "Sovereign-supplied critical minerals. Reduce single-country dependency.", icon: <Shield size={24} /> },
  ];

  const jobStats = [
    { country: "United States", jobs: "720", desc: "direct jobs created at full ramp" },
    { country: "Mexico", jobs: "240", desc: "direct jobs created at full ramp" },
    { country: "South Africa", jobs: "240", desc: "direct jobs created at full ramp" },
    { country: "India", jobs: "240", desc: "direct jobs created at full ramp" },
    { country: "UAE", jobs: "240", desc: "direct jobs created at full ramp" },
  ];

  const proofPoints = [
    { label: "Direct Jobs / Plant", value: "240", icon: <Briefcase size={20} /> },
    { label: "Diverted / Plant / Yr", value: "22k", suffix: "t", icon: <Recycle size={20} /> },
    { label: "Sovereign Minerals", value: "11", icon: <Shield size={20} /> },
    { label: "Upskilling Focus", value: "↑", icon: <TrendingUp size={20} /> },
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
                <p className="text-[10px] font-black text-[var(--c-lime)] uppercase tracking-widest">MoU Request submitted.</p>
                <p className="text-[10px] text-[var(--c-fg2)] uppercase tracking-widest">Draft will be shared via ministry channel.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-32 pb-24 transition-colors duration-500">
        <div className="absolute inset-0 z-0">
          <Beams color="#839470" />
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
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Government & Regulator Journey</span>
            </div>
            
            <h1 className="text-4xl md:text-[64px] font-black text-white leading-[1.1] tracking-tighter mb-8 uppercase text-glow">
               STRATEGIC MINERAL <br /> <span className="text-[var(--c-lime)]">INDEPENDENCE.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
               Every state has trash. We turn it into critical minerals — and into jobs that upskill your existing workforce.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={() => setIsBriefModalOpen(true)} size="lg">Download Impact Brief</Button>
              <Button onClick={() => setIsMoUModalOpen(true)} variant="outline" size="lg">Request Partnership MoU</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modals */}
      <AnimatePresence>
        {/* Impact Brief Modal (Ack style) */}
        {isBriefModalOpen && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md bg-[var(--c-bg2)] border border-[var(--c-border)] rounded-[20px] p-10 text-center shadow-2xl"
            >
              <div className="w-16 h-16 rounded-full bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)] mx-auto mb-6">
                <FileText size={32} />
              </div>
              <h2 className="text-xl font-bold text-[var(--c-fg)] mb-4">Government Impact Brief</h2>
              <p className="text-xs text-[var(--c-fg2)] leading-relaxed mb-8">
                In production, this would deliver a <span className="text-[var(--c-fg)] font-bold">WBM-Government-Impact-Brief.pdf</span> via a DocuSign-gated link. For the prototype, consider this request acknowledged.
              </p>
              <button 
                onClick={closeModal}
                className="w-full py-4 bg-[var(--c-lime)] text-black font-bold text-xs rounded-lg uppercase tracking-widest transition-all"
              >
                Got it
              </button>
              <button onClick={closeModal} className="absolute top-6 right-6 text-[var(--c-fg2)] hover:text-[var(--c-fg)]">
                <X size={20} />
              </button>
            </motion.div>
          </div>
        )}

        {/* MoU Request Modal */}
        {isMoUModalOpen && (
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
                      <h2 className="text-xl font-bold text-[var(--c-fg)] mb-1">Request Partnership MoU</h2>
                      <p className="text-xs text-[var(--c-fg2)] leading-relaxed">Tell us about your jurisdiction; we'll draft the MoU framework.</p>
                    </div>
                    <button onClick={closeModal} className="text-[var(--c-fg2)] hover:text-[var(--c-fg)] transition-colors">
                      <X size={20} />
                    </button>
                  </div>

                  <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-[var(--c-lime)] uppercase tracking-widest">Agency / Ministry *</label>
                      <input 
                        type="text" 
                        className="w-full h-12 bg-transparent border border-[var(--c-border)] rounded-lg px-4 text-[var(--c-fg)] focus:outline-none focus:border-[var(--c-lime)] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-[var(--c-lime)] uppercase tracking-widest">Contact Name *</label>
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
                      <label className="text-[10px] font-bold text-[var(--c-lime)] uppercase tracking-widest">Jurisdiction *</label>
                      <input 
                        type="text" 
                        placeholder="State, country"
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
                        onClick={handleSend}
                        className="px-8 py-3 bg-[var(--c-lime)] text-black font-bold text-xs rounded-lg uppercase tracking-widest hover:brightness-110 transition-all"
                      >
                        Request MoU Draft
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
                  Your request for a Partnership MoU has been recorded. Our diplomatic and legal teams will reach out to the provided ministry contact.
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

      {/* What We Commit To Section */}
      <section className="py-10 bg-[var(--c-bg)]">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {commitments.map((point, i) => (
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
                   <h4 className="text-xl font-bold text-[var(--c-fg)] mb-4 uppercase tracking-tight leading-tight">{point.title}</h4>
                   <p className="text-sm text-[var(--c-fg2)] leading-relaxed">{point.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Footprint / Jobs Section */}
      <section className="py-10 bg-[var(--c-fg)]/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-10">
              <h2 className="text-sm font-black tracking-[0.3em] text-[var(--c-lime)] uppercase mb-4">A Semi-Circle of Allies</h2>
              <h3 className="section-title font-black text-[var(--c-fg)] uppercase tracking-tight">Jobs Created <span className="text-[var(--c-lime)]">in Each Region.</span></h3>
              <p className="mt-4 text-[var(--c-fg2)] font-medium">Every active geography is a partnership commitment to local upskilling.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobStats.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-3xl bg-[var(--c-bg)] border border-[var(--c-border)] flex items-center gap-6 group hover:border-[var(--c-lime)] transition-all shadow-xl"
                >
                   <div className="text-5xl font-black text-[var(--c-lime)]">{item.jobs}</div>
                   <div>
                      <h4 className="font-black text-[var(--c-fg)] uppercase text-lg">{item.country}</h4>
                      <p className="text-[10px] text-[var(--c-fg2)] font-bold uppercase tracking-widest">{item.desc}</p>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Proof Points Stats */}
      <section className="py-10 bg-[var(--c-bg)] relative">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
           <h2 className="text-sm font-black tracking-[0.3em] text-[var(--c-fg2)] uppercase mb-10">The case in four numbers</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {proofPoints.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                   <div className="text-6xl md:text-7xl font-black text-[var(--c-lime)] tracking-tighter mb-4 leading-none">
                      {stat.value}<span className="text-[var(--c-fg)]">{stat.suffix}</span>
                   </div>
                   <div className="text-[10px] font-bold text-[var(--c-fg2)] uppercase tracking-[0.2em]">{stat.label}</div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-[#0a0a0a] text-white text-center border-t border-white/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
             <div className="w-16 h-16 rounded-full bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)] mx-auto mb-10">
                <Landmark size={32} />
             </div>
            <h2 className="section-title font-black text-white tracking-tighter mb-10 leading-none uppercase">A Briefing for <br /> <span className="text-[var(--c-lime)]">Your Office.</span></h2>
            <p className="text-xl text-white/60 font-medium mb-10 max-w-2xl mx-auto">Impact brief, jobs model, environmental commitments, and patent summary — packaged for cabinet review.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" size="lg" className="px-10">Request Cabinet Briefing</Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%"><pattern id="grid-gov-cta" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="white"/></pattern><rect width="100%" height="100%" fill="url(#grid-gov-cta)" /></svg>
        </div>
      </section>
    </div>
  );
};

export default ForYouGovernment;
