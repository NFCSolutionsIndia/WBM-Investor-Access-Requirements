"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Partners() {
  const sections = [
    { title: <>Why <span className="text-[#839470]">Partner</span></>, desc: "Access to sustainable and reliable materials" },
    { title: <>Supply Chain <span className="text-[#839470]">Advantage</span></>, desc: "Scalable and efficient sourcing" },
    { title: <>Investment <span className="text-[#839470]">Opportunity</span></>, desc: "Positioned in a rapidly growing industry" }
  ];

  return (
    <div className="min-h-screen bg-[#0d1a14] text-white pt-32 pb-24">
      <section className="px-6 mb-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-[64px] font-bold text-white uppercase"
        >
          Collaborate <span className="text-[#839470]">With Us</span>
        </motion.h1>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-10">
        {sections.map((sec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="p-10 rounded-3xl bg-white/5 border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-4">{sec.title}</h3>
            <p className="text-gray-400">{sec.desc}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
