"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tag, Calendar, User, ArrowRight, Search } from 'lucide-react';
import Galaxy from '@/components/ui/backgrounds/Galaxy';
import Button from '@/components/ui/Button';

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Technology', 'Sustainability', 'Supply Chain', 'Industry News'];
  
  const insights = [
    {
      title: "The role of AI in revolutionizing material identification",
      category: "Technology",
      date: "Oct 24, 2026",
      author: "Dr. Sarah Chen",
      image: "/WBM/media/1.png",
      excerpt: "How computer vision and machine learning are enabling 99% accuracy in automated sorting of complex electronic waste.",
      featured: true
    },
    {
      title: "Automated dismantling: The future of urban mining",
      category: "Technology",
      date: "Oct 18, 2026",
      author: "Marcus Thorne",
      image: "/WBM/media/2.png",
      excerpt: "Exploring the next generation of robotic systems designed to safely disassemble delicate electronics at scale."
    },
    {
      title: "Building a closed-loop supply chain for rare earth minerals",
      category: "Supply Chain",
      date: "Oct 12, 2026",
      author: "Elena Rodriguez",
      image: "/WBM/media/3.png",
      excerpt: "Strategies for manufacturers to secure critical minerals while reducing reliance on virgin mining operations."
    },
    {
      title: "New regulations in e-waste management: What you need to know",
      category: "Industry News",
      date: "Oct 05, 2026",
      author: "David Haul",
      image: "/WBM/media/outsideWarehouse.png",
      excerpt: "An overview of the upcoming environmental directives and how they will impact global manufacturing standards."
    },
    {
      title: "Measuring the carbon footprint of material recovery",
      category: "Sustainability",
      date: "Sep 28, 2026",
      author: "Dr. Julian Voss",
      image: "/WBM/media/SustainablebyDesign.jpg",
      excerpt: "A deep dive into the life cycle assessment of recycled minerals versus traditional mining output."
    }
  ];

  const filteredInsights = activeCategory === 'All' 
    ? insights 
    : insights.filter(item => item.category === activeCategory);

  const featuredInsight = insights.find(item => item.featured);

  return (
    <div className="min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-black pt-32 pb-24 md:pt-40 md:pb-24">
        <div className="absolute inset-0 z-0">
          <Galaxy 
            speed={0.3}
            density={2}
            glowIntensity={0.5}
            twinkleIntensity={0.8}
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
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Knowledge Hub</span>
            </div>
            
            <h1 className="text-3xl md:text-[64px] font-bold text-white leading-[1.1] tracking-tight mb-6 md:mb-8 uppercase">
              Insights & <br className="hidden sm:block" />
              <span className="text-[var(--c-lime)]">Innovation.</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              Recovering the minerals that power the next decade. Stay updated with the latest in material intelligence.
            </p>

          </motion.div>
        </div>
      </section>

      {/* Featured Insight */}
      {featuredInsight && (
        <section className="pt-24 pb-0 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[var(--c-bg)] rounded-[10px] overflow-hidden shadow-sm flex flex-col lg:flex-row border border-[var(--c-border)]"
            >
              <div className="lg:w-1/2 h-[400px] lg:h-auto overflow-hidden">
                <img src={featuredInsight.image} alt={typeof featuredInsight.title === 'string' ? featuredInsight.title : 'Featured Insight'} className="w-full h-full object-cover" />
              </div>
              <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm font-bold text-[var(--c-lime)] mb-6 uppercase tracking-widest">
                  <Tag size={16} />
                  {featuredInsight.category}
                </div>
                <h2 className="section-title  font-bold text-[var(--c-fg)] leading-tight mb-6 tracking-tight">
                  {featuredInsight.title.split(' ').slice(0, -2).join(' ')} <span className="text-[var(--c-lime)]">{featuredInsight.title.split(' ').slice(-2).join(' ')}</span>
                </h2>
                <p className="text-[var(--c-fg)] text-lg mb-8 leading-relaxed font-medium">
                  {featuredInsight.excerpt}
                </p>
                <div className="flex items-center gap-8 text-sm text-[var(--c-fg)]/70 font-bold mb-10">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {featuredInsight.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    {featuredInsight.author}
                  </div>
                </div>
                <Button variant="ghost" className="px-0 text-[var(--c-fg)] hover:bg-transparent hover:text-[var(--c-lime)] font-black uppercase tracking-widest text-[10px]">
                  Read full article
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filter & Search */}
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap items-center gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat 
                  ? 'bg-[var(--c-fg)] text-[var(--c-bg)] shadow-lg scale-105' 
                  : 'bg-[var(--c-bg2)] text-[var(--c-fg)]/70 border border-[var(--c-border)] hover:border-[var(--c-lime)] hover:text-[var(--c-fg)]'
                }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-80 group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--c-fg2)] group-focus-within:text-[var(--c-lime)] transition-colors duration-300" size={18} />
              <input 
                type="text" 
                placeholder="Search insights..."
                className="w-full pl-14 pr-6 py-3.5 bg-[var(--c-bg2)] border border-[var(--c-border)] rounded-full text-sm font-medium text-[var(--c-fg)] placeholder:text-[var(--c-fg2)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--c-lime)]/20 focus:border-[var(--c-lime)]/50 transition-all duration-300 shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="pt-0 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredInsights.filter(i => !i.featured).map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] rounded-[10px] overflow-hidden mb-6 shadow-sm border border-[var(--c-border)]">
                  <img src={item.image} alt={typeof item.title === 'string' ? item.title : 'Insight'} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-[var(--c-lime)] mb-4 uppercase tracking-widest">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-[var(--c-fg)] mb-4 leading-tight group-hover:text-[var(--c-lime)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[var(--c-fg2)] text-sm mb-6 leading-relaxed line-clamp-2">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between text-[10px] font-bold text-[var(--c-fg2)]/60 uppercase tracking-widest border-t border-[var(--c-border)] pt-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={12} />
                    {item.date}
                  </div>
                  <button className="text-[var(--c-fg)] hover:text-[var(--c-lime)] transition-colors font-black uppercase tracking-widest text-[10px]">
                    Read More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-10 bg-[var(--c-fg)]/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-[var(--c-lime)]/10 rounded-[10px] flex items-center justify-center mx-auto mb-8">
            <Tag size={32} className="text-[var(--c-lime)]" />
          </div>
          <h2 className="section-title font-bold text-[var(--c-fg)] mb-6 tracking-tight uppercase">Stay ahead of the <span className="text-[var(--c-lime)]">curve</span></h2>
          <p className="text-[var(--c-fg2)] text-lg font-medium mb-10 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest industry insights, technology updates, and sustainable sourcing reports directly in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-6 py-4 rounded-[10px] bg-[var(--c-bg2)] border border-[var(--c-border)] text-[var(--c-fg)] focus:outline-none focus:ring-2 focus:ring-[var(--c-lime)]/20 shadow-sm"
              required
            />
            <Button onClick={() => {}} className="px-10">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-[var(--c-fg2)]/60 mt-6 font-medium">
            By subscribing, you agree to our Privacy Policy and consent to receive marketing communications.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Insights;
