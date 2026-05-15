"use client";
import { motion } from 'framer-motion';
import { Recycle, Truck, LayoutGrid, Cpu, FlaskConical, Droplets, ArrowRight, ShieldCheck } from 'lucide-react';
import SoftAurora from '@/components/ui/backgrounds/SoftAurora';
import Button from '@/components/ui/Button';
import EwasteScrollSequence from '@/components/home/EwasteScrollSequence';

const Process = () => {
  const steps = [
    {
      title: <>Strategic <span className="text-[var(--c-lime)]">Collection</span></>,
      desc: "We partner with global electronics manufacturers and data centers to collect production scrap and end-of-life hardware.",
      icon: <Recycle size={32} className="text-white" />,
      color: "bg-[#151515]"
    },
    {
      title: <>Secure <span className="text-[var(--c-lime)]">Logistics</span></>,
      desc: "Our certified logistics network ensures safe, traceable transportation of materials to our regional processing hubs.",
      icon: <Truck size={32} className="text-white" />,
      color: "bg-[#2D1B13]"
    },
    {
      title: <>Automated <span className="text-[var(--c-lime)]">Sorting</span></>,
      desc: "AI-powered vision systems identify and sort components based on material composition and value density.",
      icon: <LayoutGrid size={32} className="text-white" />,
      color: "bg-[#452111]"
    },
    {
      title: <>Precision <span className="text-[var(--c-lime)]">Dismantling</span></>,
      desc: "Robotic systems safely disassemble devices to isolate batteries, logic boards, and display assemblies.",
      icon: <Cpu size={32} className="text-white" />,
      color: "bg-[#5D270F]"
    },
    {
      title: <>Advanced <span className="text-[var(--c-lime)]">Extraction</span></>,
      desc: "Hydrometallurgical and mechanical processes extract precious and rare earth elements with high precision.",
      icon: <FlaskConical size={32} className="text-white" />,
      color: "bg-[#752D0D]"
    },
    {
      title: <>Final <span className="text-[var(--c-lime)]">Refinement</span></>,
      desc: "Recovered materials are refined to industrial-grade purity, ready to be reintegrated into the supply chain.",
      icon: <Droplets size={32} className="text-white" />,
      color: "bg-[var(--c-lime)]"
    }
  ];

  const materials = [
    { 
      name: "Lithium", 
      sym: "Li", 
      id: "3", 
      category: "Battery-grade", 
      use: "EV Batteries & Energy Storage", 
      purity: "98.5%", 
      image: "/WBM/media/Lithium_Recovery.png",
      color: "#c1ff00",
      desc: "Essential for high-density lithium-ion cathode chemistries."
    },
    { 
      name: "Copper", 
      sym: "Cu", 
      id: "29", 
      category: "Refined", 
      use: "Electrical Components", 
      purity: "99.9%", 
      image: "/WBM/media/CopperExtraction.jpg",
      color: "#ff9800",
      desc: "High-conductivity metal for power distribution and interconnects."
    },
    { 
      name: "Gold", 
      sym: "Au", 
      id: "79", 
      category: "Precious", 
      use: "High-precision Electronics", 
      purity: "99.99%", 
      image: "/WBM/media/PreciousMetal_Recovery.jpg",
      color: "#ffc107",
      desc: "Corrosion-resistant conductor for high-reliability circuit bonding."
    },
    { 
      name: "Rare Earths", 
      sym: "REE", 
      id: "57-71", 
      category: "Critical", 
      use: "Magnets & AI Hardware", 
      purity: "95%+", 
      image: "/WBM/media/RareEarthElements.jpg",
      color: "#4ECDC4",
      desc: "Critical elements for high-performance permanent magnets."
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 z-0">
          <SoftAurora 
            color1="#839470"
            color2="#4d7c0f"
            brightness={0.8}
            speed={0.4}
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
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">End-to-End Recovery</span>
            </div>
            
            <h1 className="text-3xl md:text-[64px] font-bold text-white leading-[1.1] tracking-tight mb-6 md:mb-8 uppercase">
              A precise journey from <br className="hidden sm:block" />
              <span className="text-[var(--c-lime)]">trash to treasure</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              Our vertically integrated recovery lifecycle is engineered for maximum yield, full traceability, and minimal impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lifecycle Steps */}
      <section className="py-10 bg-[var(--c-fg)]/5 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-title font-bold text-[var(--c-fg)] tracking-tight">The <span className="text-[var(--c-lime)]">Recovery</span> Lifecycle</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-collapse">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-12 bg-[var(--c-bg)] border border-[var(--c-border)] hover:bg-[#151515] transition-all duration-500 overflow-hidden"
              >
                <div className={`w-16 h-16 ${step.color} rounded-[10px] flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {step.icon}
                </div>
                <div className="text-sm font-bold text-[var(--c-lime)] mb-4 uppercase tracking-[0.2em]">Step 0{idx + 1}</div>
                <h3 className="text-2xl font-bold text-[var(--c-fg)] group-hover:text-white mb-4 transition-colors">{step.title}</h3>
                <p className="text-gray-500 group-hover:text-gray-400 font-medium leading-relaxed transition-colors">
                  {step.desc}
                </p>
                {idx < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-4 translate-y-[-50%] z-10 hidden lg:block text-gray-200 group-hover:text-[var(--c-lime)] transition-colors">
                     <ArrowRight size={32} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Spotlight */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8">
            <div className="max-w-2xl">
              <h2 className="section-title font-bold text-[var(--c-fg)] leading-tight tracking-tight mb-8">Recovered <span className="text-[var(--c-lime)]">Materials</span></h2>
              <p className="text-xl text-gray-500 font-medium">We extract high-purity minerals that meet or exceed traditional mining standards.</p>
            </div>
            <Button href="/contact" variant="ghost" className="flex items-center gap-2 group mb-2">
              Download Material Catalog
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {materials.map((mat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[var(--c-bg)] rounded-[32px] border border-[var(--c-border)] shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden flex flex-col h-full"
              >
                {/* Image Container - Reduced Height */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={mat.image} 
                    alt={mat.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Category Tag Overlay */}
                  <div className="absolute top-5 left-5">
                    <span className="px-3 py-1 bg-black/30 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-black text-white uppercase tracking-widest">
                      {mat.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-black text-[var(--c-fg)] tracking-tight group-hover:text-[var(--c-lime)] transition-colors">
                      {mat.name}
                    </h3>
                    <div className="text-right">
                       <div className="text-xl font-black tracking-tighter" style={{ color: mat.color }}>{mat.sym}</div>
                       <div className="text-[9px] font-bold text-gray-400 uppercase">#{mat.id}</div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-[var(--c-fg3)] font-medium leading-relaxed mb-6 opacity-80">
                    {mat.desc}
                  </p>
                  
                  <div className="space-y-4 mt-auto">
                    <div className="text-left">
                      <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Primary Industrial Use</div>
                      <div className="text-xs text-[var(--c-fg)] font-black leading-tight uppercase opacity-90">
                        {mat.use}
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-[var(--c-border)]">
                      <div className="flex justify-between items-end">
                        <div className="text-left">
                          <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Guaranteed Purity</div>
                          <div className="text-2xl font-black tracking-tighter" style={{ color: mat.color }}>
                            {mat.purity}
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-[var(--c-fg)]/5 border border-[var(--c-border)] flex items-center justify-center text-[var(--c-fg3)] group-hover:bg-[var(--c-lime)]/10 group-hover:border-[var(--c-lime)]/30 transition-all">
                           <ShieldCheck size={18} className="group-hover:text-[var(--c-lime)] transition-colors" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-10 bg-[#151515] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2D1B13] rounded-[10px] p-12 md:p-20 border border-white/5 relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="section-title font-bold mb-8 tracking-tight">Uncompromising <span className="text-[var(--c-lime)]">Standards</span></h2>
                <div className="space-y-6">
                  {[
                    "ISO 14001 Certified Environmental Management",
                    "R2v3 Certified Electronics Recycling",
                    "Full ESG Compliance & Reporting",
                    "Conflict-Free Mineral Assurance"
                  ].map((std, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-[#8bc34a]/10 rounded-full flex items-center justify-center shrink-0">
                        <ShieldCheck size={18} className="text-[#8bc34a]" />
                      </div>
                      <span className="text-lg text-gray-300 font-medium">{std}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-[10px] overflow-hidden shadow-2xl border border-white/10">
                  <img src="/WBM/media/Rectangle_34.png" alt="Facility Standard" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[var(--c-lime)] rounded-full animate-ping opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Scroll Sequence Animation */}
      <EwasteScrollSequence />
    </div>
  );
};

export default Process;
