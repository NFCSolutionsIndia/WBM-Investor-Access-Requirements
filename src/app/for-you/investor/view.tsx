"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, ShieldCheck, Globe, Lock, Database, Zap, DollarSign, Award, Activity, Play, Maximize, X, Rewind, FastForward, Recycle } from 'lucide-react';
import Galaxy from '@/components/ui/backgrounds/Galaxy';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import Button from '@/components/ui/Button';
import { Protected } from '@/components/investor/Protected';
import { CustomVideoPlayer } from '@/components/investor/CustomVideoPlayer';

const ForYouInvestor = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const stats = [
    { label: "TAM by 2030", value: "$120", suffix: "B", icon: <TrendingUp size={20} /> },
    { label: "Countries Active", value: "4", suffix: "", icon: <Globe size={20} /> },
    { label: "Minerals Extracted", value: "11", suffix: "", icon: <Database size={20} /> },
    { label: "US Patent", value: "Approved", suffix: "", icon: <Award size={20} /> },
  ];

  const streams = [
    { id: "01", title: "Tipping Fees", desc: "Government-paid intake fees. Revenue earned the moment feedstock arrives.", icon: <DollarSign size={24} /> },
    { id: "02", title: "Crushed Powders", desc: "Aluminium powder &rarr; aluminium mfrs. Plastic powder &rarr; plastic mfrs.", icon: <Zap size={24} /> },
    { id: "03", title: "Extracted Minerals", desc: "The core 11 -- sold to OEM off-take partners worldwide.", icon: <Database size={24} /> },
    { id: "04", title: "Carbon Credits", desc: "Landfill diversion + on-site renewables. Verified, auditable, tradeable.", icon: <Recycle size={24} /> },
    { id: "05", title: "Data Centre Leasing", desc: "15-year leases. 100% uptime. 6-layer encryption. NVIDIA-ready.", icon: <Lock size={24} /> },
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
                <p className="text-[10px] font-black text-[var(--c-lime)] uppercase tracking-widest">Call Request sent.</p>
                <p className="text-[10px] text-[var(--c-fg2)] uppercase tracking-widest">Confirmation will be sent via email.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a] pt-32 pb-24 transition-colors duration-500">
        <div className="absolute inset-0 z-0">
          <Galaxy />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 z-[1]"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-[var(--c-lime)] mb-8 mx-auto">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">For Investors</span>
            </div>
            
            <h1 className="text-4xl md:text-[64px] font-black text-white leading-[1.1] tracking-tighter mb-8 uppercase">
              FOUR OFFERINGS. FIVE REVENUE STREAMS. <br /> <span className="text-[var(--c-lime)] text-glow">TEN-YEAR HORIZON.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              A recycling manufacturer with semiconductor-grade unit economics. Built for ESG mandates and critical-mineral theses alike.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button onClick={() => setIsModalOpen(true)} size="lg">Book Investor Call</Button>
              <Protected
                fallback={
                  <Button href="/investor/login" variant="outline" size="lg">
                    <Lock size={18} className="mr-2" />
                    Login to Access Pitch Deck
                  </Button>
                }
              >
                <a 
                  href="/WBM-Investor-Access-Requirements/investor/viewer"
                  className="flex items-center justify-center gap-3 h-14 px-8 rounded-[10px] border border-white/10 bg-white/5 text-white font-sans font-black text-sm uppercase tracking-widest hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md"
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <span className="opacity-60 text-lg">📄</span>
                  <span>View Pitch Deck</span>
                </a>
              </Protected>
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
              className="absolute inset-0 bg-black/30 backdrop-blur-md"
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
                      <h2 className="text-xl font-bold text-[var(--c-fg)] mb-1 text-white">Book an Investor Call</h2>
                      <p className="text-xs text-[var(--c-fg2)]">30 minutes with the founding team.</p>
                    </div>
                    <button onClick={closeModal} className="text-[var(--c-fg2)] hover:text-[var(--c-fg)] transition-colors">
                      <X size={20} />
                    </button>
                  </div>

                  <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-[var(--c-lime)] uppercase tracking-widest">Full Name *</label>
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
                      <label className="text-[10px] font-bold text-[var(--c-lime)] uppercase tracking-widest">Fund / Firm *</label>
                      <input 
                        type="text" 
                        className="w-full h-12 bg-transparent border border-[var(--c-border)] rounded-lg px-4 text-[var(--c-fg)] focus:outline-none focus:border-[var(--c-lime)] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-[var(--c-lime)] uppercase tracking-widest">Preferred Timing *</label>
                      <input 
                        type="text" 
                        placeholder="Tue/Thu, EU mornings..."
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
                        Request Call
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
                  Your request for an executive briefing call has been captured. We will reach out to confirm a slot within 24 hours.
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

      {/* Investor Thesis Section */}
      <section className="py-10 bg-[var(--c-bg)] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                 <h2 className="text-sm font-black tracking-[0.3em] text-[var(--c-lime)] uppercase">Investor Thesis</h2>
                 <h3 className="section-title text-[var(--c-fg)]">90 Seconds <br /> <span className="text-[#839470]">on the moat.</span></h3>
                 <div className="space-y-6">
                    {[
                      "Four megatrends converging on critical minerals.",
                      "Patented LiBERT engine, defensible moat (US/IN/UAE).",
                      "$XX raise unlocks 3 plants and 3 hyperscaler LOIs."
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 group">
                         <div className="text-[var(--c-lime)] font-black text-xl group-hover:translate-x-2 transition-transform">&rarr;</div>
                         <p className="text-lg md:text-xl font-bold text-[var(--c-fg)] leading-snug">{item}</p>
                      </div>
                    ))}
                 </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                 <CustomVideoPlayer 
                   src="/WBM-Investor-Access-Requirements/media/90_Seconds_on_The_Moat.mp4"
                   badgeText="Moat Analysis"
                   title="90 Seconds on the Moat"
                   subtitle="Executive Summary"
                 />
              </motion.div>
           </div>
        </div>
      </section>

      {/* 4x5 Economics Section */}
      <section className="py-10 bg-[var(--c-fg)]/5">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-10">
              <h2 className="section-title text-[var(--c-fg)] mb-6">4x5 <span className="text-[var(--c-lime)]">Economics.</span></h2>
              <p className="text-xl text-[var(--c-fg2)] font-medium max-w-2xl mx-auto">Per-square-foot revenue density no single-stream competitor can match.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "4x5 Economics", desc: "Maximum revenue density per floor plan square foot.", icon: <TrendingUp size={24} /> },
                { title: "ESG Credentials", desc: "Verifiable landfill diversion and carbon credit stack.", icon: <ShieldCheck size={24} /> },
                { title: "Global Footprint", desc: "Eight plants bypassing non-allied parts of Asia.", icon: <Globe size={24} /> },
                { title: "Patent Protected", desc: "US-approved patented hydrometallurgy process.", icon: <Lock size={24} /> },
              ].map((card, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 rounded-[32px] bg-[var(--c-bg)] border border-[var(--c-border)] hover:border-[var(--c-lime)]/30 transition-all group"
                >
                   <div className="w-12 h-12 rounded-xl bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)] mb-8 group-hover:scale-110 transition-transform">
                      {card.icon}
                   </div>
                   <h4 className="text-xl font-bold text-[var(--c-fg)] mb-4 uppercase tracking-tight">{card.title}</h4>
                   <p className="text-sm text-[var(--c-fg2)] leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Revenue Streams Grid */}
      <section className="py-10 bg-[var(--c-bg)]">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8">
              <div className="text-left">
                 <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--c-lime)] mb-4">The Moat</h2>
                 <h3 className="section-title text-[var(--c-fg)]">Five Revenue Streams. <br /><span className="text-[#839470]">One Floor Plan.</span></h3>
              </div>
              <p className="text-lg text-[var(--c-fg2)] font-medium max-w-md">Every offering feeds multiple streams. The shared infrastructure is the moat.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {streams.map((stream, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[24px] bg-[var(--c-bg2)] border border-[var(--c-border)] hover:border-[var(--c-lime)] transition-all group relative overflow-hidden"
                >
                   <div className="absolute -top-4 -right-4 text-8xl font-black text-[var(--c-fg)]/5 transition-colors group-hover:text-[var(--c-lime)]/10">{stream.id}</div>
                   <div className="w-10 h-10 rounded-xl bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)] mb-8 group-hover:bg-[var(--c-lime)] group-hover:text-black transition-colors">
                      {stream.icon}
                   </div>
                   <h4 className="text-lg font-bold text-[var(--c-fg)] mb-3 uppercase tracking-tight">{stream.title}</h4>
                   <p className="text-xs text-[var(--c-fg2)] leading-relaxed mb-6">{stream.desc}</p>
                </motion.div>
              ))}
           </div>
           
           <div className="mt-12 text-center">
              <Button href="/circular-economy" variant="outline">Open the full 4x5 matrix &rarr;</Button>
           </div>
        </div>
      </section>

      {/* Full Width Investor Video */}
      <section className="w-full bg-[#0a0a0a] overflow-hidden py-0">
         <CustomVideoPlayer 
           src="/WBM-Investor-Access-Requirements/media/Investor1.mp4"
           badgeText="Operational Deep Dive"
           title="Infrastructure Intelligence"
           className="rounded-none border-x-0 border-y border-[var(--c-border)]"
         />
      </section>

      {/* Proof Points Stats */}
      <section className="py-10 bg-[#0a0a0a] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
           <h2 className="text-sm font-black tracking-[0.3em] text-white/50 uppercase mb-10">The numbers that matter</h2>
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
                   <div className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">{stat.label}</div>
                </motion.div>
              ))}
           </div>
           <p className="mt-16 text-white/40 text-xs font-medium uppercase tracking-widest italic">All financial figures are indicative -- definitive numbers in the data room.</p>
        </div>
        <div className="absolute inset-0 opacity-10">
           <svg width="100%" height="100%"><pattern id="grid-stats" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1"/></pattern><rect width="100%" height="100%" fill="url(#grid-stats)" /></svg>
        </div>
      </section>

      {/* Phase 2 Preview Dashboard */}
      <section className="py-10 bg-[var(--c-bg)]">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-10">
              <h2 className="text-sm font-black tracking-[0.3em] text-[var(--c-fg2)] uppercase mb-4">Phase 2 Preview</h2>
              <h3 className="section-title text-[var(--c-fg)]">What Partners <span className="text-[var(--c-lime)]">will see.</span></h3>
           </div>

           {/* Metric Cards Grid */}
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
              {[
                { label: "Carbon Offset", value: "127.4", unit: "MT CO2e", trend: "+12% QoQ", color: "#10b981", data: [10, 25, 15, 30, 20, 45] },
                { label: "Gold Recovered", value: "18.6", unit: "kg", trend: "+4% QoQ", color: "#f59e0b", data: [5, 10, 8, 15, 12, 18] },
                { label: "Lithium Recovered", value: "2,340", unit: "kg", trend: "+9% QoQ", color: "#06b6d4", data: [20, 40, 30, 50, 45, 60] },
                { label: "Rare-Earth Recovered", value: "856", unit: "kg", trend: "+15% QoQ", color: "#8b5cf6", data: [8, 12, 10, 20, 18, 25] },
                { label: "Tipping Fees Earned", value: "$34,200", unit: "", trend: "+7% QoQ", color: "#839470", data: [15, 20, 18, 25, 22, 30] },
                { label: "Supply-chain risk reduced", value: "34", unit: "%", trend: "-34% YoY", color: "#f43f5e", data: [40, 35, 38, 30, 32, 25] },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[32px] border border-[var(--c-border)] bg-[var(--c-bg2)] text-left group hover:border-[var(--c-lime)] transition-all overflow-hidden"
                >
                   <div className="text-[9px] font-bold text-[var(--c-fg2)] uppercase tracking-widest mb-4">{stat.label}</div>
                   <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-black text-[var(--c-fg)] group-hover:text-[var(--c-lime)] transition-colors">{stat.value}</span>
                      <span className="text-xs font-bold text-[var(--c-fg2)]">{stat.unit}</span>
                   </div>
                   <div className="text-[10px] font-black text-[var(--c-lime)] uppercase tracking-widest mb-6">{stat.trend}</div>
                   
                   <div className="h-16 w-full opacity-50 group-hover:opacity-100 transition-opacity">
                      {mounted && (
                        <ResponsiveContainer width="100%" height="100%">
                           <LineChart data={stat.data.map((v: number, idx: number) => ({ v, idx }))}>
                              <Line 
                                type="monotone" 
                                dataKey="v" 
                                stroke={stat.color} 
                                strokeWidth={2} 
                                dot={false} 
                                isAnimationActive={true}
                                animationDuration={1500}
                              />
                           </LineChart>
                        </ResponsiveContainer>
                      )}
                   </div>
                </motion.div>
              ))}
           </div>

           {/* Full Width Line Chart */}
           <div className="p-8 md:p-12 rounded-[32px] border border-[var(--c-border)] bg-[var(--c-bg2)]">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-10">
                 <div>
                    <h4 className="text-xl font-bold text-[var(--c-fg)] uppercase tracking-tight">Year-to-date recovery trend</h4>
                    <p className="text-xs text-[var(--c-fg2)] uppercase tracking-widest mt-1">Indicative Performance · All Minerals · MT</p>
                 </div>
                 <div className="flex items-center gap-4 px-4 py-2 bg-[var(--c-bg)] rounded-full border border-[var(--c-border)]">
                    <Activity size={14} className="text-[var(--c-lime)] animate-pulse" />
                    <span className="text-[9px] font-black uppercase text-[var(--c-lime)]">Live Telemetry Active</span>
                 </div>
              </div>

              <div className="h-[300px] md:h-[400px] w-full mt-4 md:mt-0">
                  {mounted && (
                    <ResponsiveContainer width="100%" height="100%">
                       <AreaChart data={[
                         { name: 'Jan', precious: 400, critical: 240, rareEarth: 240, risk: 400 },
                         { name: 'Feb', precious: 300, critical: 139, rareEarth: 221, risk: 380 },
                         { name: 'Mar', precious: 200, critical: 980, rareEarth: 229, risk: 360 },
                         { name: 'Apr', precious: 278, critical: 390, rareEarth: 200, risk: 340 },
                         { name: 'May', precious: 189, critical: 480, rareEarth: 218, risk: 320 },
                         { name: 'Jun', precious: 239, critical: 380, rareEarth: 250, risk: 300 },
                         { name: 'Jul', precious: 349, critical: 430, rareEarth: 210, risk: 280 },
                         { name: 'Aug', precious: 400, critical: 500, rareEarth: 230, risk: 260 },
                         { name: 'Sep', precious: 300, critical: 600, rareEarth: 240, risk: 240 },
                         { name: 'Oct', precious: 200, critical: 700, rareEarth: 220, risk: 220 },
                         { name: 'Nov', precious: 278, critical: 800, rareEarth: 260, risk: 200 },
                         { name: 'Dec', precious: 389, critical: 900, rareEarth: 280, risk: 180 },
                       ]} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                          <defs>
                             <linearGradient id="colorPrecious" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                             </linearGradient>
                             <linearGradient id="colorCritical" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                             </linearGradient>
                             <linearGradient id="colorRare" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#839470" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#839470" stopOpacity={0}/>
                             </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="var(--c-border)" vertical={false} opacity={0.5} />
                          <XAxis 
                            dataKey="name" 
                            stroke="var(--c-fg2)" 
                            fontSize={10} 
                            tickLine={false} 
                            axisLine={false}
                            interval="preserveStartEnd"
                            minTickGap={30}
                          />
                          <YAxis stroke="var(--c-fg2)" fontSize={10} tickLine={false} axisLine={false} />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: 'rgba(10, 10, 10, 0.95)', 
                              borderColor: 'var(--c-border)', 
                              borderRadius: '12px',
                              fontSize: '11px',
                              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                            }}
                            itemStyle={{ padding: '2px 0' }}
                          />
                          <Legend verticalAlign="bottom" align="center" iconType="circle" wrapperStyle={{ paddingTop: '30px', fontSize: '10px' }} />
                          <Area type="monotone" dataKey="precious" name="Precious" stroke="#f59e0b" strokeWidth={3} fillOpacity={1} fill="url(#colorPrecious)" />
                          <Area type="monotone" dataKey="critical" name="Critical" stroke="#06b6d4" strokeWidth={3} fillOpacity={1} fill="url(#colorCritical)" />
                          <Area type="monotone" dataKey="rareEarth" name="Rare-Earth" stroke="#839470" strokeWidth={3} fillOpacity={1} fill="url(#colorRare)" />
                       </AreaChart>
                    </ResponsiveContainer>
                  )}
              </div>
           </div>
        </div>
      </section>

      {/* Restricted Intelligence Section */}
      <section className="py-10 bg-[var(--c-fg)]/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <h2 className="text-sm font-black tracking-[0.3em] text-[var(--c-lime)] uppercase mb-4">Post-NDA Access</h2>
           <h3 className="section-title text-[var(--c-fg)] mb-10">Restricted Intelligence.</h3>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Detailed Plant Telemetry", items: ["Per-line throughput", "Power & water draw", "Yield variance heatmaps"] },
                { title: "Live Recovery Metrics", items: ["Per-mineral % recovery", "Batch-level QC", "Rolling 30-day trends"] },
                { title: "Capacity Forecasts", items: ["Plant-by-plant pipeline", "Off-take coverage", "Tenant lease commits"] },
              ].map((group, i) => (
                <div key={i} className="p-12 rounded-[32px] bg-[var(--c-bg2)] border border-[var(--c-border)] text-left relative group">
                   <div className="absolute top-8 right-8 text-[var(--c-lime)] opacity-20 group-hover:opacity-100 transition-opacity">
                      <Lock size={32} />
                   </div>
                   <h4 className="text-xl font-bold text-[var(--c-fg)] mb-8 uppercase tracking-tight leading-tight pr-8">{group.title}</h4>
                   <ul className="space-y-4">
                      {group.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-3 text-sm text-[var(--c-fg2)] font-medium">
                           <div className="w-1.5 h-1.5 rounded-full bg-[var(--c-lime)] opacity-30" />
                           {item}
                        </li>
                      ))}
                   </ul>
                   <div className="mt-12 text-[10px] font-black text-[var(--c-lime)] uppercase tracking-widest opacity-40">Restricted - NDA Required</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-[var(--c-bg)] text-center border-t border-[var(--c-border)] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-4 mb-8 px-6 py-2 rounded-full border border-[var(--c-lime)]/20 bg-[var(--c-lime)]/5 text-[var(--c-lime)]">
               <Lock size={16} />
               <span className="text-[10px] font-bold uppercase tracking-widest">The Data Room is Open</span>
            </div>
            <h2 className="section-title text-[var(--c-fg)] mb-10 leading-none">Strategy, Model, <br /> <span className="text-[var(--c-lime)]">Handshake.</span></h2>
            <p className="text-xl text-[var(--c-fg2)] font-medium mb-10 max-w-2xl mx-auto">Access the full data room, IP summaries, and forward-looking pipelines gated by your verified identity.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/investor/book-call" size="lg">Schedule Executive Briefing</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ForYouInvestor;
