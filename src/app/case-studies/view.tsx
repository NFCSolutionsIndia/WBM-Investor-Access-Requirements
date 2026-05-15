"use client";
import { motion } from 'framer-motion';
import { Cpu, Zap, BarChart3, Globe, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

const CaseStudies = () => {
  // ... (cases remains the same)
  const cases = [
    {
      title: <>High-efficiency <span className="text-[var(--c-lime)]">material recovery</span> from industrial e-waste</>,
      category: "Industrial Manufacturing",
      impact: "92%",
      impactLabel: "Recovery efficiency",
      image: "/WBM/media/motherboard-background.jpg",
      description: "Optimized recycling workflows for a global electronics manufacturer, maximizing recovery of gold, silver, and copper from production scrap.",
      icon: <Cpu size={24} className="text-[var(--c-lime)]" />
    },
    {
      title: "Circular supply chain for leading AI data centers",
      category: "Technology & Infrastructure",
      impact: "100%",
      impactLabel: "Zero waste achieved",
      image: "/WBM/media/insideWarehouse.png",
      description: "Implemented an end-to-end recovery system for decommissioned server hardware, returning high-purity rare earth minerals back to the supply chain.",
      icon: <Zap size={24} className="text-[var(--c-lime)]" />
    },
    {
      title: "Sustainable mineral sourcing for automotive catalysts",
      category: "Automotive Industry",
      impact: "85%",
      impactLabel: "Cost reduction",
      image: "/WBM/media/Aerospace.png",
      description: "Advanced extraction of platinum group metals from end-of-life vehicle components, providing a stable and ethical secondary source for manufacturers.",
      icon: <BarChart3 size={24} className="text-[var(--c-lime)]" />
    },
    {
      title: "Urban mining project for smart city infrastructure",
      category: "Public Sector",
      impact: "500t",
      impactLabel: "Annual CO2 offset",
      image: "/WBM/media/destruction-smartphone-scene.jpg",
      description: "Partnered with municipal authorities to establish a regional recovery hub, transforming public electronic waste into high-value urban resources.",
      icon: <Globe size={24} className="text-[var(--c-lime)]" />
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-32 pb-24 md:pt-40 md:pb-32">
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
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Real-world impact</span>
            </div>
            
            <h1 className="text-3xl md:text-[64px] font-bold text-white leading-[1.1] tracking-tight mb-6 md:mb-8 uppercase">
              The <span className="text-[var(--c-lime)]">Whole Story.</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              Capturing the LiBERT™ extraction journey, the 11 critical minerals portfolio, and the closed-loop circular economy.
            </p>

          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {cases.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/10] rounded-[10px] overflow-hidden mb-6 shadow-md border border-[var(--c-border)] group-hover:border-[var(--c-lime)]/30 transition-colors">
                  <img 
                    src={item.image} 
                    alt={typeof item.title === 'string' ? item.title : 'Case Study'} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/10 flex items-center gap-2 shadow-lg">
                    {item.icon}
                    <span className="font-black text-white text-[10px] uppercase tracking-[0.2em]">{item.category}</span>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between gap-6 px-2">
                  <div className="flex-grow max-w-xl">
                    <h3 className="text-[24px] md:text-[30px] font-black text-[var(--c-fg)] mb-3 leading-tight tracking-tighter uppercase group-hover:text-[var(--c-highlight)] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[var(--c-fg2)] font-medium leading-relaxed mb-6 text-sm md:text-base opacity-80">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 group/btn text-[var(--c-highlight)] font-bold text-xs uppercase tracking-widest cursor-pointer">
                      <span>View full case study</span>
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  
                  <div className="shrink-0 text-left md:text-right flex flex-col justify-start md:items-end">
                    <div className="text-4xl md:text-5xl font-black text-[var(--c-highlight)] leading-none mb-1 tracking-tighter lime-glow-text">
                      {item.impact}
                    </div>
                    <div className="text-[10px] font-black text-[var(--c-fg3)] uppercase tracking-[0.2em] whitespace-nowrap">
                      {item.impactLabel}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-[#151515] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <h2 className="section-title font-bold text-white leading-tight tracking-tight mb-6">
                Ready to optimize your <span className="text-[var(--c-lime)]">material recovery</span>?
              </h2>
              <p className="text-gray-400 text-xl font-medium mb-8">
                Join leading industries in building a sustainable, traceable, and efficient mineral supply chain.
              </p>
              <div className="flex flex-wrap gap-6">
                <Button 
                  href="/contact"
                  size="lg"
                >
                  Start a partnership
                </Button>
                <Button 
                  variant="ghost"
                  size="lg"
                  className="text-white border-white/20 hover:bg-white/5"
                >
                  Download Capability Report
                </Button>
              </div>
            </div>
            
             <div className="relative w-full md:w-1/3 aspect-square flex items-center justify-center scale-90 md:scale-110">
                {/* Background Tech Aura */}
                <div className="absolute inset-0 bg-[var(--c-highlight)]/5 rounded-full blur-[100px]" />
                
                {/* The Recovery Vortex */}
                <div className="relative w-full h-full flex items-center justify-center">
                   
                   {/* Central Recovery Core */}
                   <motion.div 
                     animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 90, 180, 270, 360]
                     }}
                     transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                     className="relative z-30 w-32 h-32 border-2 border-[var(--c-highlight)]/30 rounded-2xl flex items-center justify-center shadow-[0_0_50px_rgba(131,148,112,0.3)]"
                   >
                      <div className="absolute inset-0 bg-[var(--c-highlight)]/5 backdrop-blur-sm rounded-[inherit]" />
                      <Cpu size={48} className="text-[var(--c-highlight)] relative z-10" />
                      
                      {/* Scanning Effect */}
                      <motion.div 
                        animate={{ top: ['-20%', '120%'], opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute left-0 right-0 h-1 bg-[var(--c-highlight)]/50 blur-sm z-20"
                      />
                   </motion.div>

                   {/* Orbiting Minerals */}
                   {[
                      { symbol: "Au", color: "#f59e0b", label: "Gold" },
                      { symbol: "Li", color: "#06b6d4", label: "Lithium" },
                      { symbol: "Co", color: "#8b5cf6", label: "Cobalt" },
                      { symbol: "Ni", color: "#10b981", label: "Nickel" },
                      { symbol: "Cu", color: "#ef4444", label: "Copper" },
                      { symbol: "Pd", color: "#94a3b8", label: "Palladium" }
                   ].map((mineral, i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                           rotate: 360,
                        }}
                        transition={{ 
                           duration: 8 + i * 2, 
                           repeat: Infinity, 
                           ease: "linear" 
                        }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                         <motion.div 
                           animate={{ scale: [1, 1.2, 1] }}
                           transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                           className="flex flex-col items-center translate-x-28 md:translate-x-40"
                           style={{ rotate: `-${(8 + i * 2) * 360}deg` }}
                         >
                            <div 
                              className="w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-black text-black shadow-lg backdrop-blur-sm"
                              style={{ backgroundColor: mineral.color }}
                            >
                               {mineral.symbol}
                            </div>
                            <div className="mt-1 text-[7px] font-black text-white/40 uppercase tracking-tighter">
                               {mineral.label}
                            </div>
                         </motion.div>
                      </motion.div>
                   ))}

                   {/* Telemetry Readouts */}
                   <div className="absolute top-0 right-0 border-t border-r border-[var(--c-highlight)]/30 pr-4 pt-2 text-right">
                      <div className="text-[8px] font-black text-[var(--c-highlight)] uppercase tracking-widest opacity-40">Recovery</div>
                      <div className="text-sm font-black text-white">99.2%</div>
                   </div>
                   <div className="absolute bottom-0 left-0 border-b border-l border-[var(--c-highlight)]/30 pl-4 pb-2 text-left">
                      <div className="text-[8px] font-black text-[var(--c-highlight)] uppercase tracking-widest opacity-40">Purity</div>
                      <div className="text-sm font-black text-white">4N+ GOLD</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
        
        {/* Background circuit pattern placeholder */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" className="w-full h-full">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;

