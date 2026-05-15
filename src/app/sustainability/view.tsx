"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Sustainability() {
  const pillars = [
    { title: <>Environmental <span className="text-[#839470]">Impact</span></>, desc: "Reducing waste, emissions, and resource depletion", icon: "🌱" },
    { title: <>Social <span className="text-[#839470]">Responsibility</span></>, desc: "Ensuring safe and ethical operations", icon: "🤝" },
    { title: <>Governance & <span className="text-[#839470]">Compliance</span></>, desc: "Maintaining transparency and compliance", icon: "⚖️" }
  ];

  return (
    <div className="min-h-screen bg-[#0d1a14] text-white pt-32 pb-24">
      <section className="px-6 mb-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-[64px] font-bold text-white uppercase"
        >
          The <span className="text-[#839470]">Circular Economy.</span>
        </motion.h1>
        <p className="text-xl text-white/60 mt-6 max-w-2xl mx-auto">
          From your dump yard back to your devices—three layers of closed loops.
        </p>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {pillars.map((pillar, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="p-10 rounded-3xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors"
          >
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 3, delay: i }}
              className="text-5xl mb-6 inline-block"
            >
              {pillar.icon}
            </motion.div>
            <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
            <p className="text-gray-400">{pillar.desc}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
