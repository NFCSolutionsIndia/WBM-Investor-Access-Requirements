"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import TiltCard from "@/components/ui/TiltCard";
import { TrendingUp, User, Truck, Server, Building2, GraduationCap, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ui/effects/ScrollReveal";

const paths = [
  {
    id: "investor",
    title: "Investor",
    subtitle: "Unit Economics & TAM",
    icon: <TrendingUp className="w-5 h-5" />,
    content: {
      title: "INVESTOR",
      subtitle: "Unit Economics & Moat",
      description: "Join a high-growth circular economy company with multiple revenue streams, proven technology, and unit economics no single-stream specialist can match.",
      bullets: [
        "Pre-revenue equity opportunities",
        "Significant Total Addressable Market",
        "Unique LiBERT™ technology moat",
        "5 distinct revenue streams",
      ],
      buttonText: "Investor Journey",
      href: "/for-you/investor",
    },
    accent: "var(--color-orange)",
  },
  {
    id: "customer",
    title: "Customer / OEM",
    subtitle: "Mineral Off-take",
    icon: <User className="w-5 h-5" />,
    content: {
      title: "CUSTOMER / OEM",
      subtitle: "Spec Sheets & Supply",
      description: "Secure a domestic, sustainable supply chain of 11 critical minerals purified to industry-grade specifications for AI, EV, and defense platforms.",
      bullets: [
        "11 of 118 elements available",
        "Battery-grade purity levels",
        "Long-term off-take agreements",
        "Verified ESG compliance",
      ],
      buttonText: "Request Spec Sheets",
      href: "/for-you/customer",
    },
    accent: "var(--color-ice)",
  },
  {
    id: "supplier",
    title: "Supplier",
    subtitle: "Waste Feedstock",
    icon: <Truck className="w-5 h-5" />,
    content: {
      title: "FEEDSTOCK SUPPLIER",
      subtitle: "Sell Your Waste",
      description: "Monetize your electronic waste, lithium-ion batteries, and rare-earth magnets through our high-efficiency tipping models.",
      bullets: [
        "Government-paid intake fees",
        "Zero-landfill certification",
        "Mixed waste stream integration",
        "Secure chain of custody",
      ],
      buttonText: "Partner With Us",
      href: "/for-you/supplier",
    },
    accent: "var(--color-lime)",
  },
  {
    id: "tenant",
    title: "Data Centre Tenant",
    subtitle: "Co-located Compute",
    icon: <Server className="w-5 h-5" />,
    content: {
      title: "AI DATA CENTRE TENANT",
      subtitle: "Low-cost, Low-latency",
      description: "Access co-located compute infrastructure with 100% uptime and 6-layer encryption, directly sharing the energy savings of our extraction plant.",
      bullets: [
        "15-year lease options",
        "NVIDIA/Cisco/Juniper ready",
        "Shared infrastructure savings",
        "Enterprise-grade security",
      ],
      buttonText: "Leasing Info",
      href: "/for-you/tenant",
    },
    accent: "var(--color-orange)",
  },
  {
    id: "government",
    title: "Government",
    subtitle: "Jobs & Sovereignty",
    icon: <Building2 className="w-5 h-5" />,
    content: {
      title: "GOVERNMENT",
      subtitle: "Strategic Security",
      description: "Partner to build sovereign supply chains and drive high-tech job creation while bypassing non-allied mineral choke points.",
      bullets: [
        "Allied semi-circle geography",
        "Strategic mineral security",
        "Net-zero compliance targets",
        "High-tech employment growth",
      ],
      buttonText: "Explore Collaboration",
      href: "/for-you/government",
    },
    accent: "var(--color-ice)",
  },
  {
    id: "academia",
    title: "Academia",
    subtitle: "Research & Data",
    icon: <GraduationCap className="w-5 h-5" />,
    content: {
      title: "ACADEMIA",
      subtitle: "Innovation & Datasets",
      description: "Collaborate on advanced metallurgy and AI sorting models using real-world datasets from our 100,000 sq ft operational facility.",
      bullets: [
        "Processing dataset access",
        "Joint R&D collaboration",
        "Internship pipeline programs",
        "Sustainable metallurgy research",
      ],
      buttonText: "Connect With Us",
      href: "/for-you/academia",
    },
    accent: "var(--color-lime)",
  },
];




export default function ChooseYourPath() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(paths[0].id);

  const activePath = paths.find((p) => p.id === activeTab)!;
  const activeContent = activePath.content;

  return (
    <section className="py-10 w-full bg-[var(--c-bg2)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="inline-flex items-center gap-3 mb-5 px-4 py-1.5 rounded-full border border-[var(--c-border)] bg-[var(--c-bg2)] shadow-sm mx-auto"
            >
              <div className="w-2 h-2 rounded-full bg-[var(--color-lime)] animate-pulse" />
              <span className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-[var(--c-fg2)]">
                Partnerships
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2
              className="font-sans font-black uppercase tracking-tighter section-title text-[var(--c-fg)] leading-[0.9] mb-6"
            >
              Choose Your <span className="text-[var(--color-lime)]">Path</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p
              className="font-sans text-[var(--c-fg2)] text-lg"
            >
              Whether you&apos;re an investor, customer, supplier, government partner, or researcher — there&apos;s a role for you in the circular economy.
            </p>
          </ScrollReveal>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-10 min-h-[500px]">
          
          {/* Left Tabs - Row of icons on mobile, stack on desktop */}
          <div className="w-full md:w-1/3 flex flex-wrap md:flex-col gap-2 md:gap-3 justify-center md:justify-start mb-8 md:mb-0">
            {paths.map((path) => {
              const isActive = activeTab === path.id;
              return (
                <button
                  key={path.id}
                  onClick={() => setActiveTab(path.id)}
                  className={`flex-shrink-0 w-14 h-14 md:w-full md:h-auto flex items-center justify-center md:justify-start gap-4 p-0 md:p-5 rounded-full md:rounded-[20px] transition-all duration-300 border ${
                    isActive 
                      ? "bg-[rgba(255,255,255,0.05)] border-[var(--color-lime)] shadow-[0_0_20px_rgba(193,255,0,0.1)]" 
                      : "bg-transparent border-[var(--c-border)] hover:bg-[rgba(255,255,255,0.02)] hover:border-[var(--c-fg3)]"
                  }`}
                  data-cursor="view"
                >
                  <div 
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${isActive ? "bg-[var(--color-lime)] text-black" : "bg-[var(--c-bg3)] text-[var(--c-fg3)]"}`}
                  >
                    {path.icon}
                  </div>
                  <div className="flex-1 hidden md:block text-left">
                    <div className={`font-sans font-bold text-lg mb-0.5 transition-colors ${isActive ? "text-[var(--c-fg)]" : "text-[var(--c-fg2)]"}`}>
                      {path.title}
                    </div>
                    <div className="font-sans text-xs text-[var(--c-fg3)] tracking-wide">
                      {path.subtitle}
                    </div>
                  </div>
                  {isActive && (
                    <motion.div layoutId="arrow" className="text-[var(--color-lime)] hidden md:block">
                      →
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Content Area */}
          <div className="w-full md:w-2/3">
            <TiltCard intensity={2} className="h-full w-full rounded-[var(--radius-card)]">
              <div className="glass h-full w-full rounded-[inherit] p-6 md:p-12 relative overflow-hidden flex flex-col">
                
                {/* Glow blob */}
                <div 
                  className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[100px] opacity-10 pointer-events-none transition-colors duration-700"
                  style={{ background: activePath.accent }}
                />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 flex flex-col h-full"
                  >
                    {/* Header */}
                    <div className="flex items-center gap-4 md:gap-6 mb-8">
                      <div 
                        className="w-12 h-12 md:w-16 md:h-16 rounded-[10px] flex items-center justify-center text-black"
                        style={{ background: activePath.accent }}
                      >
                        {activePath.icon}
                      </div>
                      <div>
                        <h3 className="font-sans font-black uppercase tracking-tighter text-[var(--c-fg)] mb-1 text-[24px] md:text-[30px] leading-none">
                          {activeContent.title}
                        </h3>
                        <p className="font-sans text-[10px] md:text-sm tracking-widest text-[var(--c-fg3)] uppercase">
                          {activeContent.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-sans text-[var(--c-fg2)] text-lg leading-relaxed mb-8">
                      {activeContent.description}
                    </p>

                    {/* Bullet Points */}
                    <div className="space-y-4 mb-10 flex-1">
                      {activeContent.bullets.map((bullet, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: activePath.accent }} />
                          <span className="font-sans text-[var(--c-fg2)]">{bullet}</span>
                        </div>
                      ))}
                    </div>


                    {/* Button */}
                    <motion.button 
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => router.push(activeContent.href)}
                      className="relative overflow-hidden w-full py-4 rounded-[10px] font-sans font-bold text-sm uppercase tracking-widest text-black group"
                      style={{ background: activePath.accent }}
                      data-cursor="view"
                    >
                      <div className="absolute inset-0 w-full h-full bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                      <span className="relative z-10 text-black flex items-center justify-center gap-2">
                        {activeContent.buttonText}
                      </span>
                    </motion.button>

                  </motion.div>
                </AnimatePresence>
              </div>
            </TiltCard>
          </div>

        </div>
      </div>
    </section>
  );
}
