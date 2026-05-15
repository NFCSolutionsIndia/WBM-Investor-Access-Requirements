"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "@/components/ui/effects/ScrollReveal";

const steps = [
  {
    num: "01",
    metric: "10,000+ tonnes/yr capacity",
    title: "Feedstock Intake",
    desc: "We partner with corporations, municipalities, and data centres to collect e-waste, batteries, and rare earth magnets. Our logistics network ensures secure, certified pickup with chain-of-custody documentation.",
    tags: ["Electronics", "Batteries", "Magnets", "Data Centres"],
    img: "/WBM/media/Step1.png",
  },
  {
    num: "02",
    metric: "98.7% AI accuracy rate",
    title: "Robot-Assisted Sorting",
    desc: "Our proprietary AI vision systems scan, classify, and sort every piece of waste in real-time. Robotic arms work alongside our technicians with 98.7% material identification accuracy.",
    tags: ["Computer Vision", "Robotics", "Real-time", "Human-AI"],
    img: "/WBM/media/Step2.jpg",
  },
  {
    num: "03",
    metric: "Zero liquid discharge",
    title: "Proprietary Extraction",
    desc: "Using hydrometallurgical and pyrometallurgical processes, we extract precious and critical minerals. Zero liquid discharge technology ensures we're environmentally compliant at every stage.",
    tags: ["Hydrometallurgy", "Pyrometallurgy", "Zero Discharge", "ISO Certified"],
    img: "/WBM/media/Step3.jpg",
  },
  {
    num: "04",
    metric: "99.9% purity grade",
    title: "Mineral Formation",
    desc: "Extracted materials are refined to industry-grade purity. Lithium, cobalt, copper, gold, and 40+ other critical minerals are processed and certified for immediate industrial use.",
    tags: ["Lithium", "Cobalt", "Copper", "Gold", "Neodymium"],
    img: "/WBM/media/Step4.png",
  },
  {
    num: "05",
    metric: "40+ countries served",
    title: "The Smart Marketplace",
    desc: "Certified minerals are distributed to EV manufacturers, semiconductor companies, defence contractors, and AI infrastructure providers globally through our smart marketplace.",
    tags: ["EV Manufacturers", "Chip Makers", "Defence", "AI Infrastructure"],
    img: "/WBM/media/Step5.jpg",
  },
];

const StepBlock = ({ step, index, setActiveStep }: { step: any, index: number, setActiveStep: (idx: number) => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      if (v > 0 && v < 1) {
        setActiveStep(index);
      }
    });
  }, [scrollYProgress, index, setActiveStep]);

  return (
    <div ref={ref} className="min-h-[70vh] py-10 flex flex-col justify-center relative">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ margin: "-10%" }}
        transition={{ duration: 0.6 }}
        className="pr-0 md:pr-10 relative group"
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="font-sans font-black text-xs text-[var(--c-lime)] tracking-widest uppercase">
            Step {step.num}
          </span>
          <div className="h-px w-8 bg-[var(--c-border)]" />
          <span className="font-sans font-bold text-[10px] uppercase tracking-widest text-[var(--c-fg3)]">
            {step.metric}
          </span>
        </div>

        <h3 className="font-sans font-black text-[var(--c-fg)] mb-8 tracking-tight leading-[1.1] uppercase text-[30px]">
          {step.title}
        </h3>

        <p className="font-sans text-[var(--c-fg2)] text-xl leading-relaxed mb-10 max-w-xl">
          {step.desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {step.tags.map((tag: string) => (
            <span key={tag} className="px-4 py-1.5 rounded-full border border-[var(--c-border)] text-[10px] font-bold uppercase tracking-widest text-[var(--c-fg2)]">
              {tag}
            </span>
          ))}
        </div>

        {/* Mobile image (only visible on small screens) */}
        <div className="block lg:hidden mt-12 w-full aspect-[4/3] sm:aspect-square relative rounded-[20px] overflow-hidden border border-[var(--c-border)] shadow-xl mx-auto">
          <Image 
            src={step.img}
            alt={step.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
};

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative w-full bg-[var(--c-bg)] transition-colors duration-500" id="process">
      
      {/* Intro Header */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[var(--c-highlight)] animate-pulse" />
            <span className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-[var(--c-fg2)]">
              The Orchestration Layer
            </span>
          </div>
          <h2 className="font-sans font-black uppercase tracking-tighter leading-[0.9] section-title text-[var(--c-fg)] mb-8">
            From Waste to <br/>
            <span className="text-[var(--c-highlight)] lime-glow-text">World Engines.</span>
          </h2>
          <p className="font-sans text-[var(--c-fg2)] text-xl max-w-2xl mx-auto leading-relaxed">
            PCBs, chips, laptops, servers—everything identified and processed under one AI-native roof.
          </p>
        </ScrollReveal>
      </div>

      {/* Scroll Narrative Section */}
      <div className="w-full relative flex flex-col lg:flex-row pb-24">
        
        {/* Left Side: Scrolling Content */}
        <div className="w-full lg:w-1/2 lg:pl-[max(1.5rem,calc((100vw-80rem)/2))] lg:pr-20 px-6 relative z-10">
          {steps.map((step, index) => (
            <StepBlock 
              key={step.num}
              step={step}
              index={index}
              setActiveStep={setActiveStep}
            />
          ))}
        </div>

        {/* Right Side: Sticky Images */}
        <div className="hidden lg:block w-1/2 relative">
          <div className="sticky top-0 h-screen w-full">
            <div className="relative w-full h-full overflow-hidden bg-[var(--c-bg)]" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 70%, 60px 50%, 0% 30%)' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 1, x: 20 }}
                  animate={{ opacity: 1, scale: 1.05, x: 0 }}
                  exit={{ opacity: 0, scale: 1, x: -20 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={steps[activeStep].img}
                    alt={steps[activeStep].title}
                    fill
                    className="object-cover object-center"
                    priority={activeStep === 0}
                  />
                  <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
