"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Cpu, Truck, Landmark, GraduationCap, ArrowRight } from 'lucide-react';
import Galaxy from '@/components/ui/backgrounds/Galaxy';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import TiltCard from '@/components/ui/TiltCard';

const ForAllJourneys = () => {
  const journeys = [
    {
      title: "Investor",
      desc: "Four offerings, five revenue streams, ten-year horizon. Semiconductor-grade unit economics for the critical-minerals decade.",
      bullets: ["4×5 revenue model", "11 minerals extracted", "US patent approved"],
      icon: <TrendingUp size={24} />,
      href: "/for-you/investor",
      cta: "View Thesis",
      img: "/WBM/media/FinancialServices.jpg"
    },
    {
      title: "Customer / OEM",
      desc: "Battery-grade lithium, cobalt, nickel, plus precious metals and rare earths — published SLAs, traceable to source.",
      bullets: ["OEM-grade purity", "Published SLAs", "Battery passport ready"],
      icon: <Cpu size={24} />,
      href: "/for-you/customer",
      cta: "Browse Minerals",
      img: "/WBM/media/ElectricVehicles.jpg"
    },
    {
      title: "Supplier",
      desc: "Bring us your batteries, magnets, PCBs, and e-waste. Get paid for what others landfill — with full chain-of-custody.",
      bullets: ["Tipping fees", "4 feedstock streams", "Documented intake"],
      icon: <Truck size={24} />,
      href: "/for-you/supplier",
      cta: "Start a supply contract",
      img: "/WBM/media/E-waste_processing.jpg"
    },
    {
      title: "AI Data-Centre Tenant",
      desc: "Lease compute capacity inside our integrated plants. Power, cooling, and material recovery — all under one roof.",
      bullets: ["Co-located GPU racks", "On-site recovery loop", "15-year leases"],
      icon: <Users size={24} />,
      href: "/for-you/tenant",
      cta: "Tour the floor",
      img: "/WBM/media/DataCentersAI.jpg"
    },
    {
      title: "Government",
      desc: "Critical-mineral sovereignty without Beijing exposure. Domestic recovery, IRA-aligned credits, local job creation.",
      bullets: ["IRA-qualified outputs", "Local job creation", "Zero Asia exposure"],
      icon: <Landmark size={24} />,
      href: "/for-you/government",
      cta: "See policy fit",
      img: "/WBM/media/AerospaceDefense.jpg"
    },
    {
      title: "Academia",
      desc: "Joint research on hydrometallurgy, REE separation, and circular-economy modeling. Plant access for select labs.",
      bullets: ["Joint publications", "Plant data access", "PhD pipeline"],
      icon: <GraduationCap size={24} />,
      href: "/for-you/academia",
      cta: "Explore partnerships",
      img: "/WBM/media/SustainablebyDesign.jpg"
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-black pt-32 pb-24 transition-colors duration-500">
        <div className="absolute inset-0 z-0">
          <Galaxy />
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
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Our Ecosystem</span>
            </div>
            
            <h1 className="text-4xl md:text-[64px] font-black text-white leading-[0.9] tracking-tighter mb-8 uppercase text-glow">
               For You. <br /> <span className="text-[var(--c-lime)]">Six Journeys.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
               Whether you fund critical-mineral theses, source lithium, supply feedstock, or lease compute — there's a path built for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Journeys Grid */}
      <section className="py-10 bg-[var(--c-bg)]">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {journeys.map((j, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <TiltCard
                    className="relative h-[600px] rounded-[10px] overflow-hidden cursor-pointer group"
                    glowColor="rgba(131, 148, 112, 0.15)"
                  >
                    <Image 
                      src={j.img} 
                      alt={j.title} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    
                    <div className="absolute inset-0 p-8 flex flex-col justify-end transition-transform duration-500 group-hover:translate-y-[-10px]">
                      <div className="w-12 h-12 rounded-full bg-[var(--c-lime)]/20 backdrop-blur-md flex items-center justify-center text-[var(--c-lime)] mb-6 group-hover:bg-[var(--c-lime)] group-hover:text-black transition-colors">
                        {j.icon}
                      </div>
                      
                      <h3 className="text-[32px] font-black text-white tracking-tighter leading-tight mb-4 uppercase break-words">
                        {j.title}
                      </h3>
                      
                      <p className="text-sm text-white/60 mb-8 font-medium leading-relaxed">
                        {j.desc}
                      </p>

                      <ul className="space-y-3 mb-10 hidden group-hover:block transition-all duration-500">
                        {j.bullets.map((b, k) => (
                          <li key={k} className="flex items-center gap-3 text-[10px] font-bold text-white uppercase tracking-wide">
                             <div className="w-1 h-1 rounded-full bg-[var(--c-lime)]" />
                             {b}
                          </li>
                        ))}
                      </ul>

                      <Button href={j.href} className="w-full bg-[var(--c-highlight)] text-black hover:brightness-110 border-none">
                        <div className="flex items-center justify-center gap-2 font-black uppercase tracking-widest text-xs">
                           {j.cta} <ArrowRight size={16} />
                        </div>
                      </Button>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-10 bg-[var(--c-bg2)] text-[var(--c-fg)] text-center relative overflow-hidden border-t border-[var(--c-border)]">
         <div className="max-w-4xl mx-auto px-6 relative z-10">
            <p className="text-xl text-[var(--c-fg2)] font-medium mb-10">Not sure which fits? Start anywhere — every journey links to the others.</p>
            <Button href="/contact" size="lg" className="bg-[var(--c-highlight)] text-black hover:brightness-110 border-none mx-auto">
              <span className="font-black uppercase tracking-widest text-sm">Partner With Us</span>
            </Button>
         </div>
      </section>
    </div>
  );
};

export default ForAllJourneys;
