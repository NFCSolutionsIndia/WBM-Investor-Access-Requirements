"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Rewind, FastForward } from "lucide-react";
import ScrollReveal from "@/components/ui/effects/ScrollReveal";

const BLOCKS = [
  {
    num: "01",
    title: "Lithium-Ion Batteries",
    text: "Lithium, cobalt, nickel — recovered from EV and grid storage waste.",
  },
  {
    num: "02",
    title: "Rare-Earth Magnets",
    text: "Neodymium, dysprosium — extracted from end-of-life turbines & motors.",
  },
  {
    num: "03",
    title: "PCBs & Electronics",
    text: "Gold, silver, palladium, copper — refined from circuit boards.",
  },
];

function Block({ block, index }: { block: typeof BLOCKS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="flex flex-col p-8 rounded-[var(--radius-card)] border transition-all hover:-translate-y-1 hover:shadow-xl card-theme bg-[var(--c-bg2)] border-[var(--c-border)]"
    >
      <div className="w-10 h-10 rounded-full flex items-center justify-center mb-6 bg-[var(--c-highlight)]/10 text-[var(--c-highlight)] font-black">
        {block.num}
      </div>
      <h3 className="font-sans font-black text-xl md:text-2xl text-[var(--c-fg)] tracking-tight mb-3 uppercase">
        {block.title}
      </h3>
      <p className="font-sans text-[var(--c-fg2)] text-base leading-relaxed">
        {block.text}
      </p>
    </motion.div>
  );
}

export default function ImpactPurpose() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const videoScale = useTransform(scrollYProgress, [0, 0.5], [1.06, 1]);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
    }
  };

  const skip = (amount: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime += amount;
    }
  };

  return (
    <section ref={sectionRef} className="relative w-full bg-[var(--c-bg)] transition-colors duration-500 overflow-hidden py-6 md:py-10">

      {/* ── TOP: Heading ───────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 mb-10 md:mb-10 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-[var(--c-border)] bg-[var(--c-bg2)] shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[var(--c-highlight)] animate-pulse" />
            <span className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-[var(--c-fg2)]">
              Integrated Resource Recovery
            </span>
          </div>

          <h2 className="font-sans font-black uppercase tracking-tighter leading-[0.95] section-title text-[var(--c-fg)] mb-8">
            One System. Multiple Streams.<br />
            <span className="text-[var(--c-highlight)] lime-glow-text">Maximum Recovery.</span>
          </h2>

          <p className="font-sans text-[var(--c-fg2)] text-xl leading-relaxed max-w-2xl mx-auto">
            Our proprietary <span className="text-[var(--c-fg)] font-bold underline decoration-[var(--c-highlight)]/30">LiBERT™ technology</span> recovers 11 critical minerals from three integrated waste streams — a feat no other single-stream specialist can match.
          </p>
        </ScrollReveal>
      </div>


      {/* ── MIDDLE: Grid Cards ─────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 mb-10 md:mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOCKS.map((block, i) => (
            <Block key={block.num} block={block} index={i} />
          ))}
        </div>
      </div>

      {/* ── BOTTOM: Video ──────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="w-full overflow-hidden rounded-[24px] relative group bg-black border border-white/5">
            <motion.div style={{ scale: videoScale }} className="w-full">
              <video
                ref={videoRef}
                src="/WBM/media/WhatweDo.mp4"
                poster="/WBM/media/ThumbnailImg.png"
                playsInline
                className="w-full h-auto block opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                onClick={togglePlay}
              />
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="flex items-center gap-6">
                    <button
                      onClick={() => skip(-10)}
                      className="text-white/80 hover:text-[var(--c-highlight)] transition-colors p-2"
                    >
                      <Rewind className="w-8 h-8" />
                    </button>

                    <div 
                      className="w-20 h-20 md:w-28 md:h-28 bg-[var(--c-highlight)]/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform border border-white/20"
                      onClick={togglePlay}
                    >
                      <Play className="w-10 h-10 md:w-14 md:h-14 fill-white text-white ml-1" />
                    </div>

                    <button
                      onClick={() => skip(10)}
                      className="text-white/80 hover:text-[var(--c-highlight)] transition-colors p-2"
                    >
                      <FastForward className="w-8 h-8" />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </ScrollReveal>
      </div>

    </section>
  );
}
