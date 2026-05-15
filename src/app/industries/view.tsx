"use client";
import { motion } from 'framer-motion';
import { Car, Database, Plane, Smartphone, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import PixelBlast from '@/components/ui/backgrounds/PixelBlast';
import Button from '@/components/ui/Button';

const Industries = () => {
  const industries = [
    {
      title: "Agribusiness",
      icon: <CheckCircle2 size={24} />,
      image: "/WBM/media/Agribusiness.jpg",
      desc: "Precision-ag electronics and farm robotics depend on rare-earth motors and PCB-grade copper. We close the loop on decommissioned hardware.",
      tags: ["Cu", "Nd", "Al"],
      link: "/industries/agribusiness"
    },
    {
      title: "Advanced Manufacturing",
      icon: <CheckCircle2 size={24} />,
      image: "/WBM/media/AdvancedManufacturing.jpg",
      desc: "Industrial robotics and CNC tooling consume permanent magnets and high-purity copper at scale. We supply OEM-grade powders and cathodes.",
      tags: ["Cu", "Nd", "Dy", "Ti"],
      link: "/industries/manufacturing"
    },
    {
      title: "Automotive & Mobility",
      icon: <CheckCircle2 size={24} />,
      image: "/WBM/media/ElectricVehicles.jpg",
      desc: "Every EV cell and traction motor passes through our supply chain logic. We reclaim Li-Co-Ni-Mn cathodes and Nd-Dy magnets.",
      tags: ["Li", "Co", "Ni", "Nd"],
      link: "/industries/automotive"
    },
    {
      title: "Financial Services",
      icon: <CheckCircle2 size={24} />,
      image: "/WBM/media/FinancialServices.jpg",
      desc: "Lenders and insurers use our published recovery KPIs and Battery Passport data to model risk and validate ESG claims.",
      tags: ["Au", "Ag"],
      link: "/industries/finance"
    },
    {
      title: "Healthcare & Life Sciences",
      icon: <CheckCircle2 size={24} />,
      image: "/WBM/media/Healthcare.jpg",
      desc: "MRI machines, surgical robots, and implantable devices use rare-earth magnets and titanium. We recover magnet assemblies.",
      tags: ["Nd", "Dy", "Ti", "Pd"],
      link: "/industries/healthcare"
    },
    {
      title: "Energy & Natural Resources",
      icon: <CheckCircle2 size={24} />,
      image: "/WBM/media/EnergyPower.jpg",
      desc: "Wind turbines, grid-scale storage, and solar inverters draw on every mineral category we touch. Second-life supply for green-energy.",
      tags: ["Nd", "Dy", "Cu", "Ag", "Li"],
      link: "/industries/energy"
    },
    {
      title: "Media & Entertainment",
      icon: <CheckCircle2 size={24} />,
      image: "/WBM/media/MediaEntertainment.jpg",
      desc: "Studios and broadcasters retire petabytes of HDD and broadcast hardware annually. We extract Nd magnets and PCB-grade Au, Ag, Pd.",
      tags: ["Au", "Ag", "Pd"],
      link: "/industries/media"
    },
    {
      title: "Telecommunications",
      icon: <CheckCircle2 size={24} />,
      image: "/WBM/media/Telecommunications.jpg",
      desc: "5G base stations, fibre transceivers, and end-of-life handsets are dense with copper, gold, and palladium.",
      tags: ["Cu", "Au", "Pd"],
      link: "/industries/telecom"
    },
    {
      title: "Technology Services",
      icon: <CheckCircle2 size={24} />,
      image: "/WBM/media/DataCentersAI.jpg",
      desc: "Hyperscalers refresh server fleets every 3–5 years. We integrate with their asset-disposition programs with chain-of-custody.",
      tags: ["Au", "Ag", "Cu", "Pd"],
      link: "/industries/tech-services"
    },
    {
      title: "Social & Public Sector",
      icon: <CheckCircle2 size={24} />,
      image: "/WBM/media/SustainablebyDesign.jpg",
      desc: "Federal, state, and municipal IT modernisation generates secure-disposal e-waste at scale. We deliver compliant recovery.",
      tags: ["Au", "Ag", "Cu"],
      link: "/industries/public-sector"
    },
    {
      title: "Forest Products",
      icon: <CheckCircle2 size={24} />,
      image: "/WBM/media/Agribusiness.jpg",
      desc: "Sawmill electrification and biomass-energy plants run on rugged drives and inverters. Circular path for power-electronics.",
      tags: ["Cu", "Al"],
      link: "/industries/forest"
    },
    {
      title: "Aerospace & Defense",
      icon: <CheckCircle2 size={24} />,
      image: "/WBM/media/AerospaceDefense.jpg",
      desc: "Strategic mineral security and aerospace-grade purity for high-performance applications requiring absolute traceability.",
      tags: ["Nd", "Dy", "Ti", "Co"],
      link: "/industries/aerospace"
    }
  ];

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
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Sector Expertise</span>
            </div>
            
            <h1 className="text-3xl md:text-[64px] font-bold text-white leading-[1.1] tracking-tight mb-6 md:mb-8 uppercase">
              Industries.
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              Securing the supply chain for global manufacturing. WBM provides a semi-circle of allied geographies, bypassing non-allied supply chain risks.
            </p>

          </motion.div>
        </div>
      </section>

      {/* Industries Infographic Grid */}
      <section className="py-10 bg-[var(--c-bg)] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
             <h2 className="section-title font-black text-[var(--c-fg)] tracking-tight mb-6 uppercase">The Allied <span className="text-[var(--c-lime)]">Sectors.</span></h2>
             <p className="text-lg text-[var(--c-fg2)] font-medium max-w-2xl mx-auto">Providing mission-critical mineral security across 12 strategic industry layers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative rounded-[10px] bg-[var(--c-bg2)] border border-[var(--c-border)] hover:border-[var(--c-lime)] transition-all duration-500 overflow-hidden flex flex-col h-[480px] shadow-2xl cursor-pointer"
              >
                {/* Full Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                   <img 
                    src={ind.image} 
                    alt={ind.title} 
                    className="w-full h-full object-cover opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" 
                   />
                   {/* Strategic Gradient Overlay for Text Clarity */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                   
                   {/* Hover Accent Glow at the bottom */}
                   <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-[var(--c-lime)]/20 via-transparent to-transparent transition-opacity duration-700" />
                </div>

                {/* Top Badge (Sector Layer) */}
                <div className="relative z-10 p-6 flex justify-between items-start">
                  <div className="w-10 h-10 rounded-[6px] bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-[var(--c-lime)] group-hover:bg-[var(--c-lime)] group-hover:text-black group-hover:rotate-[360deg] transition-all duration-700">
                    {ind.icon}
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[8px] font-black text-white/40 uppercase tracking-[0.3em] mb-0.5">Sector</span>
                    <span className="text-xs font-black text-[var(--c-lime)] tracking-tighter">0{idx+1}</span>
                  </div>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10 mt-auto p-8 pt-0">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <h3 className="text-2xl font-black text-white tracking-tight uppercase mb-3 leading-tight group-hover:text-[var(--c-lime)] transition-colors duration-300">
                      {ind.title}
                    </h3>

                    {/* Collapsible/Expandable Description */}
                    <div className="overflow-hidden">
                      <p className="text-white/70 font-medium leading-relaxed text-sm mb-6 transition-all duration-500 max-h-0 group-hover:max-h-32 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                        {ind.desc}
                      </p>
                    </div>

                    {/* Mineral Tags - Styled as high-tech pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {ind.tags.map(tag => {
                        const mineralColors: Record<string, string> = {
                          'Cu': 'border-[#F6AD55] text-[#F6AD55]',
                          'Nd': 'border-[#9F7AEA] text-[#9F7AEA]',
                          'Li': 'border-[#48BB78] text-[#48BB78]',
                          'Au': 'border-[#ECC94B] text-[#ECC94B]',
                          'Ag': 'border-[#A0AEC0] text-[#A0AEC0]',
                        };
                        return (
                          <span 
                            key={tag} 
                            className={`px-3 py-1 rounded-[4px] bg-black/40 text-[9px] font-black uppercase tracking-widest border transition-all duration-300 ${mineralColors[tag] || 'border-white/20 text-white/60'} group-hover:border-[var(--c-lime)] group-hover:text-[var(--c-lime)]`}
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </div>

                    {/* CTA Button Style */}
                    <a 
                      href={ind.link} 
                      className="inline-flex items-center gap-3 py-3 px-6 rounded-[4px] bg-[var(--c-lime)] text-black text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
                    >
                      <span>Strategic Details</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* Strategic Partnership Section */}
      <section className="py-10 bg-[#0a0a0a] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="section-title font-bold mb-10 tracking-tight max-w-4xl mx-auto leading-tight text-white">
            Securing the supply chain for <br/><span className="text-[var(--c-lime)]">global manufacturing</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            <div>
              <div className="text-6xl font-bold text-white mb-4 tracking-tighter">50+</div>
              <h3 className="text-xl font-bold text-[var(--c-lime)] mb-4 uppercase tracking-widest">Global Partners</h3>
              <p className="text-white/60 font-medium">Leading OEMs and technology providers trust WBM for their material security needs.</p>
            </div>
            <div>
              <div className="text-6xl font-bold text-white mb-4 tracking-tighter">12</div>
              <h3 className="text-xl font-bold text-[var(--c-lime)] mb-4 uppercase tracking-widest">Industry Sectors</h3>
              <p className="text-white/60 font-medium">Providing specialized recovery and sourcing solutions across a diverse range of sectors.</p>
            </div>
            <div>
              <div className="text-6xl font-bold text-white mb-4 tracking-tighter">100%</div>
              <h3 className="text-xl font-bold text-[var(--c-lime)] mb-4 uppercase tracking-widest">Traceability</h3>
              <p className="text-white/60 font-medium">Every gram of material we recover is fully documented from collection to refinement.</p>
            </div>
          </div>
        </div>
        
        {/* Background circuit pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" className="w-full h-full">
            <pattern id="grid-industries" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-industries)" />
          </svg>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-[var(--c-bg)] text-[var(--c-fg)] relative overflow-hidden border-t border-[var(--c-border)]">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="section-title font-black text-[var(--c-fg)] tracking-tighter uppercase mb-6">Ready to discuss your industry requirements?</h2>
          <p className="text-xl text-[var(--c-fg2)] font-medium mb-10 max-w-2xl mx-auto">Our experts are ready to design a custom recovery and sourcing program tailored to your sector's unique needs.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button href="/contact" className="bg-[var(--c-highlight)] text-white hover:brightness-110 border-none px-8 py-4">
              Consult With Our Experts
            </Button>
            <Button variant="outline" className="border-[var(--c-border)] text-[var(--c-fg)] hover:bg-[var(--c-fg)]/10 px-8 py-4">
              Request Industry Specs
            </Button>
          </div>
        </div>
        
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" className="w-full h-full">
            <pattern id="grid-cta-industries" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-cta-industries)" />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Industries;
