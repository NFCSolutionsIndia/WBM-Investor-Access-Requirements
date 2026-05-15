"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ScrollReveal from "@/components/ui/effects/ScrollReveal";

export default function TechnologySnapshot() {
  const router = useRouter();
  return (
    <section className="py-10 bg-[#0a0a0a] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left: Text */}
        <div className="w-full lg:w-1/2 lg:pr-20">
          <ScrollReveal>
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5">
              <span className="font-sans font-bold text-xs uppercase tracking-[0.25em] text-[#839470]">The LiBERT Engine</span>
            </div>
            <h2 className="section-title font-black uppercase tracking-tighter mb-6 leading-tight">
              The Only Difference<br/>
              <span className="text-[#839470]">is Who Touches It</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              100,000 sq ft of robot-assisted, AI-orchestrated extraction. Our proprietary LiBERT™ technology recovers 11 critical minerals from three integrated waste streams — a feat no other single-stream specialist can match.
            </p>
            <button 
              onClick={() => router.push('/technology')}
              className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-[10px] hover:bg-white hover:text-black transition-colors duration-300"
            >
              Inside the Plant
            </button>
          </ScrollReveal>
        </div>

        {/* Right: Visual */}
        <div className="w-full lg:w-1/2 relative">
          <ScrollReveal direction="right">
            <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-[32px] overflow-hidden border border-white/5 group">
              <Image 
                src="/WBM/media/BackgroundImgHero.png"
                alt="Plant Interior"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent opacity-60" />
              
              {/* Floating Stat */}
              <div className="absolute bottom-8 left-8 p-6 bg-black/60 backdrop-blur-md rounded-[20px] border border-white/10">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#839470] mb-2">Facility Scale</p>
                <div className="text-3xl font-black tracking-tighter text-white">100,000 SQ FT</div>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
