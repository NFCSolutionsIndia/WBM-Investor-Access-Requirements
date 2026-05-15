"use client";
import { motion } from 'framer-motion';
import { Cpu, Settings, Zap, ShieldCheck, Activity, ArrowRight, Microscope } from 'lucide-react';
import Beams from '@/components/ui/backgrounds/Beams';
import Button from '@/components/ui/Button';

const Technology = () => {
  // ... (techCards remains the same)
  const techCards = [
    {
      title: <>AI-Powered <span className="text-[var(--c-lime)]">Identification</span></>,
      desc: "Our proprietary computer vision models identify components with 99.4% accuracy, enabling precise sorting of complex PCB assemblies and industrial electronic waste.",
      icon: <Cpu className="text-white" size={32} />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      title: <>Automated Robotic <span className="text-[var(--c-lime)]">Dismantling</span></>,
      desc: "High-speed robotic cells equipped with custom end-effectors safely disassemble devices, separating batteries, screens, and boards without damaging critical materials.",
      icon: <Settings className="text-white" size={32} />,
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&q=80"
    },
    {
      title: <>Advanced Chemical <span className="text-[var(--c-lime)]">Extraction</span></>,
      desc: "Hydrometallurgical processes optimized for high-yield recovery of rare earth elements and precious metals with minimal environmental footprint.",
      icon: <Zap className="text-white" size={32} />,
      image: "/WBM/media/Material_recovery_Extraction.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 z-0">
          <Beams 
            beamNumber={15}
            beamWidth={3}
            lightColor="#839470"
            speed={1.5}
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
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Innovation at Scale</span>
            </div>
            
            <h1 className="text-3xl md:text-[64px] font-bold text-white leading-[1.1] tracking-tight mb-6 md:mb-8 uppercase">
              The science of <br className="hidden sm:block" />
              <span className="text-[var(--c-lime)]">material intelligence</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              We're building the infrastructure for the next industrial era—combining robotics, AI, and advanced chemistry to secure critical minerals.
            </p>

          </motion.div>
        </div>
      </section>

      {/* Core Tech Grid */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10">
            {techCards.map((tech, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center`}
              >
                <div className="lg:w-1/2 rounded-[10px] overflow-hidden shadow-2xl relative aspect-video">
                  <img src={tech.image} alt={typeof tech.title === 'string' ? tech.title : 'Technology Step'} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 w-16 h-16 bg-[var(--c-lime)] rounded-[10px] flex items-center justify-center shadow-lg">
                    {tech.icon}
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h2 className="section-title  font-bold text-[var(--c-fg)] mb-6 tracking-tight">{tech.title}</h2>
                  <p className="text-lg text-gray-500 font-medium leading-relaxed mb-8">
                    {tech.desc}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    <li className="flex items-center gap-3 text-sm font-bold text-[var(--c-fg)] uppercase tracking-wider">
                      <ShieldCheck size={20} className="text-[var(--c-lime)]" /> Patented System
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-[var(--c-fg)] uppercase tracking-wider">
                      <Activity size={20} className="text-[var(--c-lime)]" /> Real-time tracking
                    </li>
                  </ul>
                  <Button href="/contact" variant="ghost" className="flex items-center gap-2 group">
                    Technical Specifications
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>      {/* R&D Section */}
      <section className="py-10 bg-[#0a0a0a] text-white relative overflow-hidden">
        {/* Top/Bottom Decorative Lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-20" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full shadow-sm text-sm font-semibold border border-white/10 text-white mb-8">
                <Microscope size={16} className="text-[var(--c-lime)]" /> Future-Proofing
              </div>
              <h2 className="section-title font-bold leading-tight mb-8 tracking-tight text-white">
                Continuous R&D: Solving tomorrow's recovery <span className="text-[var(--c-lime)]">challenges</span> today
              </h2>
              <p className="text-xl text-white/60 font-medium leading-relaxed mb-10">
                Our innovation lab in Zurich collaborates with leading technical universities to develop next-generation catalysts and robotic dismantling algorithms for emerging electronic architectures.
              </p>
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <div className="text-5xl font-bold text-white mb-2 tracking-tighter">15%</div>
                  <p className="text-white/40 font-medium text-sm">Revenue invested in R&D annually</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-white mb-2 tracking-tighter">42</div>
                  <p className="text-white/40 font-medium text-sm">Active patents in material recovery</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
               <motion.div 
                 animate={{ 
                   scale: [1, 1.05, 1],
                   rotate: [0, 5, 0]
                 }}
                 transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                 className="relative z-20 rounded-[10px] overflow-hidden shadow-2xl border border-white/10"
               >
                 <img src="/WBM/media/Material_recovery_Extraction.jpg" alt="R&D Lab" className="w-full h-auto" />
               </motion.div>
               
               {/* Decorative light flare */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[var(--c-lime)]/5 rounded-full blur-[120px] pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <svg width="100%" height="100%"><pattern id="grid-rd" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1"/></pattern><rect width="100%" height="100%" fill="url(#grid-rd)" /></svg>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-10 bg-[var(--c-bg)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="section-title font-bold text-[var(--c-fg)] tracking-tight mb-8">
            Harness our <span className="text-[var(--c-lime)]">technology</span> for your supply chain
          </h2>
          <p className="text-xl text-gray-500 font-medium mb-10">
            Explore how our proprietary recovery systems can help you secure critical minerals and meet your sustainability targets.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button href="/contact">
              Book a Tech Demo
            </Button>
            <Button href="/contact">
              Read Whitepaper
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
