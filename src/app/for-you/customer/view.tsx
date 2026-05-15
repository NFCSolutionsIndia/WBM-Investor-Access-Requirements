"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Cpu, Zap, Activity, Award, FlaskConical, Globe, ArrowRight, Layers, Database, Lock, Search, Filter, ChevronRight, BarChart3, LineChart as LineChartIcon, X } from 'lucide-react';
import Beams from '@/components/ui/backgrounds/Beams';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { useTheme } from '@/components/ui/ThemeProvider';
import Button from '@/components/ui/Button';
import TiltCard from '@/components/ui/TiltCard';

const ForYouCustomer = () => {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
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

  const minerals = [
    { symbol: "Au", name: "Gold", num: 79, group: "Precious", purity: "99.99%", lot: "1kg", leadTime: "30 days", downstream: "Electronics, Jewelry" },
    { symbol: "Ag", name: "Silver", num: 47, group: "Precious", purity: "99.9%", lot: "10kg", leadTime: "45 days", downstream: "Solar, Electronics" },
    { symbol: "Cu", name: "Copper", num: 29, group: "Precious", purity: "99.9%", lot: "500kg", leadTime: "30 days", downstream: "Motors, Wiring" },
    { symbol: "Pd", name: "Palladium", num: 46, group: "Precious", purity: "99.95%", lot: "500g", leadTime: "60 days", downstream: "Catalytic Converters" },
    { symbol: "Li", name: "Lithium", num: 3, group: "Critical", purity: "99.5%", lot: "100kg", leadTime: "45 days", downstream: "EV Batteries" },
    { symbol: "Co", name: "Cobalt", num: 27, group: "Critical", purity: "99.8%", lot: "50kg", leadTime: "45 days", downstream: "Batteries" },
    { symbol: "Ni", name: "Nickel", num: 28, group: "Critical", purity: "99.9%", lot: "200kg", leadTime: "30 days", downstream: "Stainless Steel, Batteries" },
    { symbol: "Al", name: "Aluminium", num: 13, group: "Critical", purity: "99.7%", lot: "1000kg", leadTime: "15 days", downstream: "Aerospace, Auto" },
    { symbol: "Pb", name: "Lead", num: 82, group: "Critical", purity: "99.97%", lot: "100kg", leadTime: "30 days", downstream: "Batteries" },
    { symbol: "Dy", name: "Dysprosium", num: 66, group: "Rare-Earth", purity: "99.9%", lot: "5kg", leadTime: "90 days", downstream: "Magnets" },
    { symbol: "Nd", name: "Neodymium", num: 60, group: "Rare-Earth", purity: "99.5%", lot: "10kg", leadTime: "90 days", downstream: "High-strength Magnets" },
    { symbol: "Ti", name: "Titanium", num: 22, group: "Critical", purity: "99.8%", lot: "50kg", leadTime: "45 days", downstream: "Aerospace, Medical" },
  ];

  const dashboardStats = [
    { label: "Carbon Offset", value: "127.4", unit: "MT CO2e", trend: "+12% QoQ", color: "#10b981", data: [10, 25, 15, 30, 20, 45] },
    { label: "Gold Recovered", value: "18.6", unit: "kg", trend: "+4% QoQ", color: "#f59e0b", data: [5, 10, 8, 15, 12, 18] },
    { label: "Lithium Recovered", value: "2,340", unit: "kg", trend: "+9% QoQ", color: "#06b6d4", data: [20, 40, 30, 50, 45, 60] },
    { label: "Rare-Earth Recovered", value: "856", unit: "kg", trend: "+15% QoQ", color: "#8b5cf6", data: [8, 12, 10, 20, 18, 25] },
    { label: "Tipping Fees Earned", value: "$34,200", unit: "", trend: "+7% QoQ", color: "#839470", data: [15, 20, 18, 25, 22, 30] },
    { label: "Supply-chain risk reduced", value: "34", unit: "%", trend: "-34% YoY", color: "#f43f5e", data: [40, 35, 38, 30, 32, 25] },
  ];

  const chartData = [
    { name: 'Jan', precious: 400, critical: 240, rareEarth: 240 },
    { name: 'Feb', precious: 300, critical: 139, rareEarth: 221 },
    { name: 'Mar', precious: 200, critical: 980, rareEarth: 229 },
    { name: 'Apr', precious: 278, critical: 390, rareEarth: 200 },
    { name: 'May', precious: 189, critical: 480, rareEarth: 218 },
    { name: 'Jun', precious: 239, critical: 380, rareEarth: 250 },
    { name: 'Jul', precious: 349, critical: 430, rareEarth: 210 },
    { name: 'Aug', precious: 400, critical: 500, rareEarth: 230 },
    { name: 'Sep', precious: 300, critical: 600, rareEarth: 240 },
    { name: 'Oct', precious: 200, critical: 700, rareEarth: 220 },
    { name: 'Nov', precious: 278, critical: 800, rareEarth: 260 },
    { name: 'Dec', precious: 389, critical: 900, rareEarth: 280 },
  ];

  const deliveryPoints = [
    { title: "11 Mineral Specs", desc: "Each with purity, lot size, lead time, and downstream OEM list — published, not pitched.", icon: <Database size={24} /> },
    { title: "Published KPIs", desc: "Lithium recovery %, gold extraction %, cycle time. Same numbers in our public SLA Appendix.", icon: <Activity size={24} /> },
    { title: "Lot Sizes & Lead Times", desc: "Monthly off-take cycles. Most minerals ship inside 30–60 days.", icon: <BarChart3 size={24} /> },
    { title: "US Patent Outcomes", desc: "A patented process you can audit at the outcomes layer — chemistry stays with us.", icon: <Award size={24} /> },
  ];

  const filteredMinerals = minerals.filter(m => 
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.group.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                <p className="text-[10px] font-black text-[var(--c-lime)] uppercase tracking-widest">MOU Request submitted.</p>
                <p className="text-[10px] text-[var(--c-fg2)] uppercase tracking-widest">Draft will be shared within 48 hours.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-32 pb-24 transition-colors duration-500">
        <div className="absolute inset-0 z-0">
          <Beams />
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
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Customer / OEM Journey</span>
            </div>
            
            <h1 className="text-4xl md:text-[64px] font-black text-white leading-[1.1] tracking-tighter mb-8 uppercase">
               SUPPLY SECURED. <br /> <span className="text-[var(--c-highlight)] lime-glow-text">DIVERSIFY YOUR SOURCE.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
               Engineering-grade supply, not marketing claims. Diversify away from single-country mineral dependency.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={() => setIsModalOpen(true)} size="lg">Request Off-take MOU</Button>
              <Button href="#mineral-table" variant="outline" size="lg">View Mineral Specs</Button>
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
                      <h2 className="text-xl font-bold text-[var(--c-fg)] mb-1">Request Off-take MOU</h2>
                      <p className="text-xs text-[var(--c-fg2)]">Send us your target minerals and volumes. We'll return a draft MOU.</p>
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
                      <label className="text-[10px] font-bold text-[var(--c-lime)] uppercase tracking-widest">Target Minerals & Volumes *</label>
                      <textarea 
                        rows={3}
                        placeholder="e.g., Co 5t/mo, Li 20t/mo, Nd 500kg/mo"
                        className="w-full bg-transparent border border-[var(--c-border)] rounded-lg p-4 text-[var(--c-fg)] focus:outline-none focus:border-[var(--c-lime)] transition-colors placeholder:text-[var(--c-fg2)]/30 resize-none"
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
                        Request MOU Draft
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

      {/* What We Deliver Section */}
      <section className="py-10 bg-[var(--c-bg)]">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {deliveryPoints.map((point, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <TiltCard
                    className="p-8 h-full rounded-[10px] bg-[var(--c-bg2)] border border-[var(--c-border)] hover:border-[var(--c-lime)] transition-all group min-h-[220px]"
                    glowColor="rgba(131, 148, 112, 0.15)"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)] mb-6 group-hover:bg-[var(--c-lime)] group-hover:text-black transition-colors">
                      {point.icon}
                    </div>
                    <h4 className="text-lg font-black text-[var(--c-fg)] mb-3 uppercase tracking-tight leading-tight">{point.title}</h4>
                    <p className="text-xs text-[var(--c-fg2)] leading-relaxed">{point.desc}</p>
                  </TiltCard>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Battery Anatomy Section (Simplified interactive visual) */}
      <section className={`py-10 relative overflow-hidden transition-colors duration-500 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                 <h2 className="text-sm font-black tracking-[0.3em] text-[var(--c-lime)] uppercase mb-4">Battery Anatomy</h2>
                 <h3 className="section-title text-[var(--c-fg)] mb-8">EV Battery <br /> <span className="text-[#839470]">Exploded View.</span></h3>
                 <p className="text-lg text-[var(--c-fg2)] mb-10">Tap the pack to separate it into layers. Each layer lists the minerals WBM extracts via the LiBERT™ engine.</p>
                 
                 <div className="space-y-4">
                    {["Casing & Cooling (Al, Ti)", "Anode Materials (Cu)", "Cathode Materials (Li, Co, Ni)", "Connectors (Ag, Au)"].map((layer, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] group cursor-pointer hover:border-[var(--c-lime)] transition-all">
                         <div className="w-8 h-8 rounded-full bg-[var(--c-fg)]/5 flex items-center justify-center text-[var(--c-lime)] font-black text-xs">{i+1}</div>
                         <div className="font-bold text-[var(--c-fg)] uppercase text-sm tracking-widest">{layer}</div>
                         <ChevronRight size={16} className="ml-auto opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                 </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[600px] flex items-center justify-center w-full"
              >
                 <img 
                   src={theme === 'dark' ? "/WBM/media/EV_Battery_Exploded_View_DarkTheme.png" : "/WBM/media/EV_Battery_Exploded_View_light1.png"} 
                   alt="EV Battery Exploded View" 
                   className="w-full h-full object-contain" 
                 />
              </motion.div>
           </div>
        </div>
      </section>

      {/* Battery Passport Section */}
      <section className="py-10 bg-[var(--c-bg)]">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group perspective-1000"
              >
                 <TiltCard
                    className={`p-0 rounded-[24px] border transition-colors duration-500 overflow-hidden min-h-[450px] ${
                      theme === 'dark' 
                        ? "border-white/10 bg-[#0c0d0b] shadow-2xl" 
                        : "border-black/10 bg-white shadow-[0_30px_60px_rgba(0,0,0,0.1)]"
                    }`}
                    glowColor={theme === 'dark' ? "rgba(131, 148, 112, 0.4)" : "rgba(131, 148, 112, 0.2)"}
                 >
                    {/* Passport Header */}
                    <div className={`p-6 border-b transition-colors duration-500 flex justify-between items-center ${
                      theme === 'dark' ? "bg-[#1a1c18] border-white/5" : "bg-gray-50 border-black/5"
                    }`}>
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[var(--c-highlight)] flex items-center justify-center text-black font-black text-[10px]">WBM</div>
                          <div>
                             <h4 className={`text-[10px] font-black uppercase tracking-[0.3em] leading-none mb-1 ${
                               theme === 'dark' ? "text-white/40" : "text-black/40"
                             }`}>Global Standard</h4>
                             <h4 className={`text-sm font-black uppercase tracking-tighter leading-none ${
                               theme === 'dark' ? "text-white" : "text-black"
                             }`}>Battery Passport</h4>
                          </div>
                       </div>
                       <div className="text-right">
                          <div className="text-[8px] font-black text-[var(--c-highlight)] uppercase tracking-widest mb-1">LiBERT™ Certified</div>
                          <div className={`text-[10px] font-mono ${theme === 'dark' ? "text-white/30" : "text-black/30"}`}>ID: WBM-BP-2026-00487</div>
                       </div>
                    </div>

                    <div className="p-8 relative">
                       {/* Holographic Watermark */}
                       <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[80px] pointer-events-none transition-all ${
                         theme === 'dark' ? "bg-[var(--c-highlight)]/5 group-hover:bg-[var(--c-highlight)]/10" : "bg-[var(--c-highlight)]/10 group-hover:bg-[var(--c-highlight)]/20"
                       }`} />

                       <div className="flex flex-col md:flex-row gap-8 mb-8 relative z-10">
                          {/* Photo / ID Area */}
                          <div className="shrink-0">
                             <div className={`w-32 h-40 rounded-xl border overflow-hidden relative group/photo transition-colors duration-500 ${
                               theme === 'dark' ? "bg-black/40 border-white/10" : "bg-gray-50 border-black/10 shadow-inner"
                             }`}>
                                <div className={`absolute inset-0 z-10 ${
                                  theme === 'dark' ? "bg-gradient-to-t from-black/80 via-transparent to-transparent" : "bg-gradient-to-t from-black/10 via-transparent to-transparent"
                                }`} />
                                <div className="absolute inset-0 flex items-center justify-center">
                                   <Cpu size={60} className={`transition-transform duration-700 ${
                                     theme === 'dark' ? "text-[var(--c-highlight)]/20 group-hover/photo:scale-110" : "text-[var(--c-highlight)]/30 group-hover/photo:scale-110"
                                   }`} />
                                </div>
                                {/* Technical scan lines overlay */}
                                <div className={`absolute inset-0 opacity-20 pointer-events-none ${
                                  theme === 'dark' ? "bg-[repeating-linear-gradient(transparent,transparent_2px,rgba(255,255,255,0.05)_3px)]" : "bg-[repeating-linear-gradient(transparent,transparent_2px,rgba(0,0,0,0.05)_3px)]"
                                }`} />
                                <div className={`absolute bottom-3 left-3 z-20 text-[8px] font-black tracking-widest uppercase ${
                                  theme === 'dark' ? "text-white/50" : "text-black/40"
                                }`}>Verified</div>
                             </div>
                          </div>

                          {/* Data Fields */}
                          <div className="flex-grow grid grid-cols-2 gap-y-4 gap-x-6">
                             {[
                                { label: "Type", val: "LFP / NMC" },
                                { label: "Nationality", val: "WBM-EU/US" },
                                { label: "Recovery %", val: "99.8%" },
                                { label: "Carbon Basln", val: "-84.2%" },
                                { label: "Issue Date", val: "12 MAY 2026" },
                                { label: "Expiry Date", val: "PERPETUAL" },
                             ].map((f, i) => (
                               <div key={i}>
                                  <div className="text-[8px] font-black text-[var(--c-highlight)] uppercase tracking-widest mb-1">{f.label}</div>
                                  <div className={`text-xs font-black uppercase tracking-tighter ${
                                    theme === 'dark' ? "text-white/80" : "text-black/80"
                                  }`}>{f.val}</div>
                               </div>
                             ))}
                          </div>
                       </div>

                       {/* Visa / Stamp Area */}
                       <div className="mb-8 relative z-10">
                          <div className={`text-[8px] font-black uppercase tracking-[0.2em] mb-4 border-b pb-2 ${
                            theme === 'dark' ? "text-white/30 border-white/5" : "text-black/30 border-black/5"
                          }`}>Verification Stamps</div>
                          <div className="flex flex-wrap gap-2">
                             {["Circulor", "Everledger", "IBM", "Minespider", "RCS"].map(p => (
                               <span key={p} className={`px-3 py-1 rounded-md border text-[8px] font-black uppercase tracking-widest transition-all cursor-default ${
                                 theme === 'dark' 
                                   ? "border-white/5 bg-white/5 text-white/40 hover:text-[var(--c-highlight)] hover:border-[var(--c-highlight)]/30" 
                                   : "border-black/5 bg-black/5 text-black/40 hover:text-[var(--c-highlight)] hover:border-[var(--c-highlight)]/30 shadow-sm"
                               }`}>{p}</span>
                             ))}
                          </div>
                       </div>

                       {/* Machine Readable Zone (MRZ) */}
                       <div className={`p-4 rounded-xl border font-mono text-[9px] tracking-[0.1em] leading-relaxed break-all relative overflow-hidden group/mrz transition-colors ${
                         theme === 'dark' ? "bg-white/5 border-white/5 text-white/20" : "bg-black/5 border-black/5 text-black/40"
                       }`}>
                          <div className="absolute top-0 left-0 w-full h-[1px] bg-[var(--c-highlight)]/20 group-hover/mrz:translate-y-12 transition-transform duration-[3s] ease-linear" />
                          P&lt;WBM&lt;&lt;BATTERY&lt;PASSPORT&lt;&lt;2026&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;<br />
                          0x71C7656EC7AB88B098DEFB751B7401B5F6D8976F&lt;&lt;&lt;LIBERT&lt;&lt;
                       </div>
                    </div>
                 </TiltCard>
              </motion.div>
              
              <div className="space-y-8">
                 <h2 className="text-sm font-black tracking-[0.3em] text-[var(--c-lime)] uppercase">Traceability</h2>
                 <h3 className="section-title text-[var(--c-fg)]">Battery passport, <br /> <span className="text-[#839470]">Ready for the EU & IRA.</span></h3>
                 <p className="text-lg text-[var(--c-fg2)]">Every output ships with a verifiable chain-of-custody record meeting EU Battery Regulation and US IRA reporting requirements.</p>
                 <ul className="space-y-4">
                    {["Per-lot recovery rate, audited", "Carbon footprint vs virgin baseline", "Conflict-free verification", "Multi-provider chain-of-custody"].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-sm font-bold text-[var(--c-fg)] uppercase tracking-wide">
                         <ShieldCheck className="text-[var(--c-lime)]" size={16} /> {item}
                      </li>
                    ))}
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* Impact Dashboard Section */}
      <section className="py-10 bg-[var(--c-bg)]">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-10">
              <h2 className="text-sm font-black tracking-[0.3em] text-[var(--c-fg2)] uppercase mb-4">Phase 2 Preview</h2>
              <h3 className="section-title text-[var(--c-fg)]">Your <span className="text-[var(--c-lime)]">Impact Dashboard.</span></h3>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {dashboardStats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <TiltCard
                    className="p-6 rounded-[10px] border border-[var(--c-border)] bg-[var(--c-bg2)] text-left group hover:border-[var(--c-lime)] transition-all overflow-hidden flex flex-col justify-between"
                    glowColor="rgba(131, 148, 112, 0.1)"
                  >
                    <div className="text-[9px] font-bold text-[var(--c-fg2)] uppercase tracking-widest mb-4">{stat.label}</div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-3xl font-black text-[var(--c-fg)] group-hover:text-[var(--c-lime)] transition-colors">{stat.value}</span>
                      <span className="text-xs font-bold text-[var(--c-fg2)]">{stat.unit}</span>
                    </div>
                    <div className="text-[10px] font-black text-[var(--c-lime)] uppercase tracking-widest mb-6">{stat.trend}</div>
                    
                    <div className="h-12 w-full opacity-60 group-hover:opacity-100 transition-opacity">
                      <ResponsiveContainer width="100%" height="100%">
                         <LineChart data={stat.data.map((v, idx) => ({ v, idx }))}>
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
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Recovery Trends Chart Section */}
      <section className="py-10 bg-[var(--c-fg)]/5">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-10">
              <h2 className="text-sm font-black tracking-[0.3em] text-[var(--c-lime)] uppercase mb-4">Trends</h2>
              <h3 className="section-title text-[var(--c-fg)]">Year-to-date <span className="opacity-40">recovery trend.</span></h3>
              <p className="mt-4 text-[var(--c-fg2)] text-sm">All numbers indicative · All mineral categories · MT</p>
           </div>
           
           <div className="p-8 md:p-12 rounded-[32px] border border-[var(--c-border)] bg-[var(--c-bg)]">
              <div className="h-[300px] md:h-[400px] w-full mt-4 md:mt-0">
                 <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                       <defs>
                          <linearGradient id="colorPreciousCust" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                             <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="colorCriticalCust" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                             <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="colorRareCust" x1="0" y1="0" x2="0" y2="1">
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
                       <Area type="monotone" dataKey="precious" name="Precious" stroke="#f59e0b" strokeWidth={3} fillOpacity={1} fill="url(#colorPreciousCust)" />
                       <Area type="monotone" dataKey="critical" name="Critical" stroke="#06b6d4" strokeWidth={3} fillOpacity={1} fill="url(#colorCriticalCust)" />
                       <Area type="monotone" dataKey="rareEarth" name="Rare-Earth" stroke="#839470" strokeWidth={3} fillOpacity={1} fill="url(#colorRareCust)" />
                    </AreaChart>
                 </ResponsiveContainer>
              </div>
           </div>
        </div>
      </section>

      {/* Mineral Catalog / Table Section */}
      <section className="py-10 bg-[var(--c-bg)]" id="mineral-table">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-10">
              <div className="max-w-2xl text-left">
                 <h2 className="text-sm font-black tracking-[0.3em] text-[var(--c-lime)] uppercase mb-4">Mineral Catalog</h2>
                 <h3 className="section-title text-[var(--c-fg)]">Search <span className="text-[var(--c-lime)]">11 Minerals.</span></h3>
                 <p className="mt-4 text-[var(--c-fg2)]">All values indicative. Final terms set in off-take MOU.</p>
              </div>
              
              <div className="w-full md:w-96 relative">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--c-fg2)]" size={18} />
                 <input 
                   type="text" 
                   placeholder="Search minerals, groups..." 
                   className="w-full pl-12 pr-4 py-4 rounded-xl border border-[var(--c-border)] bg-[var(--c-bg2)] text-[var(--c-fg)] focus:outline-none focus:border-[var(--c-lime)] transition-all"
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                 />
              </div>
           </div>

           {/* Desktop Table View */}
           <div className="hidden lg:block overflow-x-auto rounded-[32px] border border-[var(--c-border)] bg-[var(--c-bg2)]">
              <table className="w-full text-left border-collapse">
                 <thead className="sticky top-0 bg-[var(--c-bg2)] z-10">
                    <tr className="border-b border-[var(--c-border)]">
                       <th className="p-6 text-[10px] font-black uppercase tracking-widest text-[var(--c-fg2)]">Mineral</th>
                       <th className="p-6 text-[10px] font-black uppercase tracking-widest text-[var(--c-fg2)]">Group</th>
                       <th className="p-6 text-[10px] font-black uppercase tracking-widest text-[var(--c-fg2)]">Purity</th>
                       <th className="p-6 text-[10px] font-black uppercase tracking-widest text-[var(--c-fg2)]">Lot</th>
                       <th className="p-6 text-[10px] font-black uppercase tracking-widest text-[var(--c-fg2)]">Lead Time</th>
                       <th className="p-6 text-[10px] font-black uppercase tracking-widest text-[var(--c-fg2)]">Downstream</th>
                       <th className="p-6 text-right"></th>
                    </tr>
                 </thead>
                 <tbody>
                    <AnimatePresence>
                       {filteredMinerals.map((m, i) => (
                         <motion.tr 
                           key={m.symbol}
                           initial={{ opacity: 0, y: 10 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0, scale: 0.95 }}
                           transition={{ delay: i * 0.05 }}
                           className="border-b border-[var(--c-border)] hover:bg-[var(--c-fg)]/[0.02] transition-colors group"
                         >
                            <td className="p-6">
                               <div className="flex items-center gap-4">
                                  <div className="w-12 h-12 rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] flex flex-col items-center justify-center group-hover:border-[var(--c-lime)] transition-all">
                                     <span className="text-[8px] font-black opacity-40">#{m.num}</span>
                                     <span className="text-lg font-black">{m.symbol}</span>
                                  </div>
                                  <span className="font-bold text-[var(--c-fg)] uppercase tracking-tight">{m.name}</span>
                               </div>
                            </td>
                            <td className="p-6 text-sm font-bold text-[var(--c-fg2)] uppercase tracking-wide">{m.group}</td>
                            <td className="p-6 text-sm font-black text-[var(--c-fg)]">{m.purity}</td>
                            <td className="p-6 text-sm font-bold text-[var(--c-fg2)]">{m.lot}</td>
                            <td className="p-6 text-sm font-bold text-[var(--c-fg2)]">{m.leadTime}</td>
                            <td className="p-6 text-xs text-[var(--c-fg2)] font-medium max-w-[200px]">{m.downstream}</td>
                            <td className="p-6 text-right">
                               <Button size="sm" variant="outline" onClick={() => setIsModalOpen(true)}>Request Spec</Button>
                            </td>
                         </motion.tr>
                       ))}
                    </AnimatePresence>
                 </tbody>
              </table>
           </div>

           {/* Mobile Stacked View */}
           <div className="lg:hidden space-y-4">
              {filteredMinerals.map((m, i) => (
                <motion.div 
                  key={m.symbol}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl border border-[var(--c-border)] bg-[var(--c-bg2)]"
                >
                   <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] flex flex-col items-center justify-center">
                            <span className="text-[7px] font-black opacity-40">#{m.num}</span>
                            <span className="text-base font-black">{m.symbol}</span>
                         </div>
                         <span className="font-bold text-[var(--c-fg)] uppercase">{m.name}</span>
                      </div>
                      <span className="px-3 py-1 rounded-full border border-[var(--c-border)] text-[8px] font-black uppercase tracking-widest text-[var(--c-fg2)]">{m.group}</span>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                         <div className="text-[8px] font-black text-[var(--c-fg2)] uppercase tracking-[0.2em] mb-1">Purity</div>
                         <div className="text-sm font-black text-[var(--c-fg)]">{m.purity}</div>
                      </div>
                      <div>
                         <div className="text-[8px] font-black text-[var(--c-fg2)] uppercase tracking-[0.2em] mb-1">Lot Size</div>
                         <div className="text-sm font-bold text-[var(--c-fg2)]">{m.lot}</div>
                      </div>
                      <div>
                         <div className="text-[8px] font-black text-[var(--c-fg2)] uppercase tracking-[0.2em] mb-1">Lead Time</div>
                         <div className="text-sm font-bold text-[var(--c-fg2)]">{m.leadTime}</div>
                      </div>
                   </div>
                   
                   <Button className="w-full text-center" onClick={() => setIsModalOpen(true)}>Request Spec</Button>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Restricted Intelligence */}
      <section className="py-10 bg-[var(--c-fg)]/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <h2 className="text-sm font-black tracking-[0.3em] text-[var(--c-lime)] uppercase mb-4">Post-NDA Access</h2>
           <h3 className="section-title text-[var(--c-fg)] mb-10">Restricted <span className="text-[#839470]">Intelligence.</span></h3>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Detailed Plant Telemetry", items: ["Per-line throughput", "Power & water draw", "Lot-level QC trail"] },
                { title: "Live Recovery Metrics", items: ["Per-mineral % recovery", "Purity distribution", "Rolling 30-day trends"] },
                { title: "Capacity Forecasts", items: ["Lot-level commit calendar", "Reservation queue", "Force-majeure protocol"] },
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
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-[var(--c-bg)] text-center border-t border-[var(--c-border)] relative">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="section-title text-[var(--c-fg)] mb-10 leading-none">Diversify Your <br /> <span className="text-[var(--c-lime)]">Supply Chain.</span></h2>
            <p className="text-xl text-[var(--c-fg2)] font-medium mb-10 max-w-2xl mx-auto">One signature away from engineering-grade reclaimed minerals. Start the off-take MOU process today.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={() => setIsModalOpen(true)} size="lg">Request Off-take MOU</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ForYouCustomer;
