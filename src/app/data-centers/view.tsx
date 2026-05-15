"use client";
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Zap, Activity, Trash2, Globe, Magnet, Database, Layers, Microscope } from 'lucide-react';
import Hyperspeed from '@/components/ui/backgrounds/Hyperspeed';
import Button from '@/components/ui/Button';
import { useTheme } from '@/components/ui/ThemeProvider';

const DataCenters = () => {
  const { theme } = useTheme();
  return (
    <div className="min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-32 pb-24 md:pt-40 md:pb-32 transition-colors duration-500">
        <div className="absolute inset-0 z-0 opacity-30 dark:opacity-100">
          <Hyperspeed 
            effectOptions={{
              colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x000000,
                shoulderLines: 0xffffff,
                brokenLines: 0xffffff,
                leftCars: [0xc1ff00, 0x8bc34a, 0x4d7c0f],
                rightCars: [0xffffff, 0xcccccc, 0x999999],
                sticks: 0xc1ff00
              }
            }}
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
            <div className="inline-flex items-center gap-2 bg-[var(--c-fg)]/5 backdrop-blur-md px-4 py-2 rounded-full border border-[var(--c-border)] text-[var(--c-lime)] mb-6 md:mb-8">
              <div className="w-2 h-2 bg-[var(--c-lime)] rounded-full animate-pulse"></div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Infrastructure Solutions</span>
            </div>
            
            <h1 className="text-3xl md:text-[64px] font-bold text-white leading-[1.1] tracking-tight mb-6 md:mb-8 uppercase">
              AI Data Centres. <br className="hidden sm:block" />
              <span className="text-[var(--c-lime)]">Sustainable & Secure.</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/70 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              Enterprise-grade recovery solutions for the world's largest data centers, ensuring secure, sustainable management of retired hardware.
            </p>

            <div className="flex justify-center">
              <a 
                href="/WBM/media/PitchDeskForWBM.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 h-14 px-8 rounded-[10px] border border-white/10 bg-white/5 text-white font-sans font-black text-sm uppercase tracking-widest hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md"
              >
                <span className="opacity-60 text-lg">📄</span>
                <span>Download Pitch Deck</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Minerals Section */}
      <section 
        className="py-10 md:py-10 relative overflow-hidden transition-colors duration-500"
        style={{ backgroundColor: theme === 'dark' ? '#0a0a0a' : '#ffffff' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--c-lime)]/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 md:mb-10"
          >
            <h2 className="section-title font-black text-[var(--c-fg)] tracking-tight mb-6 uppercase">
              <span className="text-[var(--c-lime)]">KEY MINERALS</span> IN DATA CENTERS
            </h2>
            <p className="text-lg md:text-xl text-[var(--c-fg2)] font-medium max-w-4xl mx-auto leading-relaxed">
              Data centers are the backbone of the digital world, requiring massive amounts of energy, advanced technologies, and critical minerals to store, process, and secure data. These minerals power server hardware, cooling systems, microchips, and storage devices—building the foundation of our connected future.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden"
          >
            {/* Desktop View */}
            <div className="hidden md:block">
              <img 
                src={theme === 'dark' ? "/WBM/media/DATACENTERS_Dark.png" : "/WBM/media/DATACENTERS_Light.png"} 
                alt="Key Minerals in Data Centers Desktop Infographic" 
                className="w-full h-auto object-contain"
              />
            </div>
            
            {/* Mobile View */}
            <div className="block md:hidden">
              <img 
                src={theme === 'dark' ? "/WBM/media/DATACENTERS_Mobile_Dark.png" : "/WBM/media/DATACENTERS_Light_Mobile.png"} 
                alt="Key Minerals in Data Centers Mobile Infographic" 
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-10 md:py-10 bg-[var(--c-fg)]/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="section-title section-title  font-bold text-[var(--c-fg)] leading-tight tracking-tight mb-8 md:mb-10">
                Uncompromising <span className="text-[var(--c-lime)]">security</span> protocols
              </h2>
              <div className="space-y-6 md:space-y-8">
                {[
                  { icon: <Activity size={24} />, text: "Real-time tracking of every asset" },
                  { icon: <Trash2 size={24} />, text: "Certified on-site and off-site data destruction" },
                  { icon: <Globe size={24} />, text: "Full compliance with global data privacy regulations" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 md:gap-6">
                    <div className="bg-[var(--c-lime)]/10 p-2.5 md:p-3 rounded-xl text-[var(--c-lime)] flex-shrink-0">
                      <div className="scale-90 md:scale-100">{item.icon}</div>
                    </div>
                    <span className="text-lg md:text-xl font-bold text-[var(--c-fg)] tracking-tight leading-tight">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="rounded-[20px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-white/10"
              >
                <img src="/WBM/media/DataCentersAI.jpg" alt="Data Center Hardware" className="w-full h-auto" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--c-lime)]/20 to-transparent pointer-events-none rounded-[20px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-[var(--c-bg)] text-center transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title font-bold text-[var(--c-fg)] tracking-tight mb-10 leading-tight">Ready to decommission your <span className="text-[var(--c-lime)]">retired hardware?</span></h2>
            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium mb-10 leading-relaxed max-w-3xl mx-auto">Our infrastructure team provides specialized solutions for enterprise data centers and AI clusters.</p>
            <div className="flex justify-center">
              <Button href="/contact">
                Contact Infrastructure Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DataCenters;
