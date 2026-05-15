"use client";
import { motion } from 'framer-motion';
import { Target, Shield, Zap, Award, ArrowRight, Cpu, Battery, Activity, Layers, Database, FlaskConical, Truck } from 'lucide-react';
import LineWaves from '@/components/ui/backgrounds/LineWaves';
import Button from '@/components/ui/Button';

const About = () => {
  // ... (team and values remain the same)
  const team = [
    { name: "Sarah Jenkins", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop" },
    { name: "Michael Chen", role: "CTO", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop" },
    { name: "Elena Rodriguez", role: "Head of Sustainability", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop" },
    { name: "David Thompson", role: "COO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" }
  ];

  const values = [
    { icon: <Target className="text-[var(--c-lime)]" />, title: <>Precision <span className="text-[var(--c-lime)]">Recovery</span></>, desc: "Achieving up to 98% material purity through advanced automated sorting and chemical extraction." },
    { icon: <Shield className="text-[var(--c-lime)]" />, title: <>Ethical <span className="text-[var(--c-lime)]">Sourcing</span></>, desc: "Providing a fully traceable, conflict-free alternative to traditional mining operations." },
    { icon: <Zap className="text-[var(--c-lime)]" />, title: <>Rapid <span className="text-[var(--c-lime)]">Innovation</span></>, desc: "Continuously evolving our proprietary dismantling systems to handle the latest electronics." },
    { icon: <Award className="text-[var(--c-lime)]" />, title: <>Global <span className="text-[var(--c-lime)]">Excellence</span></>, desc: "SETTING THE GOLD STANDARD FOR CIRCULAR ECONOMY PRACTICES ACROSS MULTIPLE INDUSTRIES." }
  ];

  return (
    <div className="min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 z-0">
          <LineWaves 
            speed={0.2}
            color1="#839470"
            color2="#ffffff"
            color3="#8bc34a"
            brightness={0.15}
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
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Our Mission</span>
            </div>
            
            <h1 className="text-3xl md:text-[64px] font-bold text-white leading-[1.1] tracking-tight mb-6 md:mb-8 uppercase">
              Urban Mining, <br className="hidden sm:block" />
              <span className="text-[var(--c-lime)]">perfected.</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              We're on a mission to reclaim 11 critical minerals from three integrated waste streams.
            </p>

          </motion.div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title font-bold text-[var(--c-fg)] leading-tight tracking-tight mb-8">
                Our <span className="text-[var(--c-lime)]">Story</span>
              </h2>
              <p className="text-lg text-gray-500 font-medium leading-relaxed mb-6">
                Urban mining isn't just a mission. It's a necessity. Traditional mining is too slow, too dirty, and too concentrated in non-allied geographies. We are the bridge between the waste of today and the world engines of tomorrow.
              </p>
              <p className="text-lg text-gray-500 font-medium leading-relaxed mb-10">
                By design, not by default. WBM does not operate in non-allied parts of Asia. Our semi-circle of allied geographies is the bypass route.
              </p>
              <div className="flex flex-wrap gap-8 items-center">
                <div>
                  <div className="text-4xl font-bold text-[var(--c-fg)] mb-1">20+</div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Years Experience</div>
                </div>
                <div className="w-px h-12 bg-gray-200 hidden sm:block"></div>
                <div>
                  <div className="text-4xl font-bold text-[var(--c-fg)] mb-1">500k+</div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Tons Recovered</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[24px] overflow-hidden shadow-2xl">
                <img src="/WBM/media/Rectangle_34.png" alt="Our Facility" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-[var(--c-lime)] p-8 rounded-[20px] shadow-xl hidden md:block">
                 <div className="text-black text-4xl font-bold mb-1">98%</div>
                 <div className="text-black/80 text-sm font-bold uppercase tracking-widest">Purity Achieved</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Core Values */}
      <section className="py-10 bg-[var(--c-fg)]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-title font-bold text-[var(--c-fg)] tracking-tight">Our Core <span className="text-[var(--c-lime)]">Values</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[var(--c-bg)] p-10 rounded-[10px] shadow-sm border border-[var(--c-border)] hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[var(--c-lime)]/10 rounded-[10px] flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--c-fg)] mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-500 font-medium leading-relaxed text-sm">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div className="max-w-2xl">
              <h2 className="section-title font-bold text-[var(--c-fg)] tracking-tight mb-6">Leadership driven by <span className="text-[var(--c-lime)]">purpose</span></h2>
              <p className="text-lg text-gray-500 font-medium">Meet the experts guiding Waste Be Minerals toward a more sustainable and resource-secure future.</p>
            </div>
            <Button variant="ghost" className="flex items-center gap-2 group">
              Join our team
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="aspect-square rounded-[10px] overflow-hidden mb-6 shadow-sm grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-[var(--c-fg)] mb-1">
                  {member.name}
                </h3>
                <p className="text-[var(--c-lime)] font-bold text-sm tracking-wide uppercase">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact CTA */}
      <section className="py-10 bg-[#0A0D08] dark:bg-[#020202] relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title font-black text-white leading-[1.1] tracking-tight mb-8 uppercase">
              Ready to be part of the <br/><span className="text-[var(--c-lime)] lime-glow-text">circular revolution?</span>
            </h2>
            <p className="text-xl text-white/60 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you're a manufacturer looking for sustainable materials or a data center needing secure hardware recovery, we're here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button href="/contact" size="lg" className="px-10">
                Contact Our Experts
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="px-10 border-white/20 text-white hover:bg-white/5">
                Partner With Us
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(193,255,0,0.05),transparent_70%)] pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </section>
    </div>
  );
};

export default About;

