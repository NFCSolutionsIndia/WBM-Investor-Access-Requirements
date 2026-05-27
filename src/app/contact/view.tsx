"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Globe, Clock, ChevronDown } from 'lucide-react';
import LineWaves from '@/components/ui/backgrounds/LineWaves';
import Button from '@/components/ui/Button';

import GlobalFootprint from '@/components/home/GlobalFootprint';

const Contact = () => {
  const [intent, setIntent] = useState("Customer");
  const offices = [
    {
      city: "Houston",
      type: "Global Headquarters",
      address: "Energy Tower II, Suite 1100, Houston, TX 77079, USA",
      phone: "+1 (800) WASTE-BE",
      email: "contact@wastebeminerals.com"
    },
    {
      city: "Austin",
      type: "Advanced Recovery Center",
      address: "1101 Giga Way, Austin, TX 78725, USA",
      phone: "+1 (800) WASTE-BE",
      email: "contact@wastebeminerals.com"
    },
    {
      city: "Michigan",
      type: "Automotive Recovery Hub",
      address: "400 Renaissance Center, Detroit, MI 48243, USA",
      phone: "+1 (800) WASTE-BE",
      email: "contact@wastebeminerals.com"
    },
    {
      city: "Nevada",
      type: "Lithium Loop Facility",
      address: "1 Electric Avenue, Sparks, NV 89434, USA",
      phone: "+1 (800) WASTE-BE",
      email: "contact@wastebeminerals.com"
    },
    {
      city: "Mexico City",
      type: "Advanced Recovery Hub",
      address: "Paseo de la Reforma 222, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX, Mexico",
      phone: "+52 55 5555 0199",
      email: "contact@wastebeminerals.com"
    },
    {
      city: "Ras al-Khaimah",
      type: "EMEA Regional Hub",
      address: "RAKEZ Business Zone, Al Nakheel, Ras al-Khaimah, UAE",
      phone: "+971 7 123 4567",
      email: "contact@wastebeminerals.com"
    },
    {
      city: "Hyderabad",
      type: "APAC Regional Hub",
      address: "21-5-18, Petla Burj, Hyderabad, Telangana 500064, India",
      phone: "+91 40 1234 5678",
      email: "contact@wastebeminerals.com"
    },
    {
      city: "Bhubaneswar",
      type: "Planned Recovery Center",
      address: "Odisha Industrial Infrastructure Development Corp (IDCO), Bhubaneswar, Odisha, India",
      phone: "+91 674 234 5678",
      email: "contact@wastebeminerals.com"
    },
    {
      city: "Johannesburg",
      type: "Southern Africa Hub (Planned)",
      address: "Sandton City, 5th St, Sandown, Johannesburg, 2196, South Africa",
      phone: "+27 11 555 0123",
      email: "contact@wastebeminerals.com"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-black pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 z-0">
          <LineWaves 
            speed={0.2}
            color1="#839470"
            color2="#ffffff"
            color3="#8bc34a"
            brightness={0.1}
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
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white mb-6 md:mb-8 uppercase text-[10px] md:text-xs font-bold tracking-widest">
              <div className="w-2 h-2 bg-[#8bc34a] rounded-full shadow-[0_0_10px_#8bc34a]"></div> Get in touch
            </div>
            
            <h1 className="text-3xl md:text-[64px] font-bold text-white leading-[1.05] tracking-tight mb-6 md:mb-10 uppercase">
              Ready When <span className="text-[var(--c-lime)]">You Are.</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-3xl mx-auto">
              Whether you want to partner, invest, or supply feedstock — we're ready.
            </p>
          </motion.div>
        </div>
        
        {/* Background Visual */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" className="w-full h-full">
            <pattern id="grid-contact" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-contact)" />
          </svg>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="relative py-10 md:py-10 bg-[var(--c-bg)]">
        {/* Background Accents - Subtle */}
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[var(--c-lime)]/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-10">
            
            {/* LEFT: Information & Direct Channels */}
            <div className="w-full lg:w-[35%] flex flex-col gap-10">
              
              {/* Direct Channels */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-[var(--c-lime)]"></div>
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--c-lime)]">Direct Channels</h2>
                </div>
                
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--c-fg)]/5 flex items-center justify-center text-[var(--c-lime)] group-hover:bg-[var(--c-lime)] group-hover:text-[var(--c-bg)] transition-all duration-300 flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-[var(--c-fg)]/60 uppercase tracking-widest mb-1">General Inquiries</div>
                      <div className="text-[13px] sm:text-lg md:text-xl font-bold text-[var(--c-fg)] break-all sm:break-normal">contact@wastebeminerals.com</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--c-fg)]/5 flex items-center justify-center text-[var(--c-lime)] group-hover:bg-[var(--c-lime)] group-hover:text-[var(--c-bg)] transition-all duration-300 flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-[var(--c-fg)]/60 uppercase tracking-widest mb-1">Toll-Free Support</div>
                      <div className="text-[13px] sm:text-lg md:text-xl font-bold text-[var(--c-fg)] break-all sm:break-normal">+1 (800) WASTE-BE</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Added value statement to fill space nicely */}
              <div className="hidden lg:block p-8 rounded-[10px] bg-[var(--c-fg)]/[0.03] border border-[var(--c-border)]">
                <h4 className="text-[var(--c-fg)] font-bold text-base mb-3 uppercase tracking-tight">Rapid Response Protocol</h4>
                <p className="text-[var(--c-fg)]/60 text-sm leading-relaxed font-medium">Our global desk operates 24/7 to ensure your inquiry is routed to the correct regional hub within 4 hours.</p>
              </div>
            </div>

            {/* RIGHT: Form Container */}
            <div className="w-full lg:w-[65%]">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[var(--c-bg2)] border border-[var(--c-border)] rounded-[10px] p-6 md:p-12 shadow-sm"
              >
                <div className="mb-8 md:mb-10">
                  <h2 className="section-title font-black text-[var(--c-fg)] tracking-tighter uppercase mb-4">Send a message</h2>
                  <p className="text-[var(--c-fg)]/60 font-medium text-base">Tell us about your organization and how we can work together.</p>
                </div>

                <div className="mb-10">
                   <label className="block text-[10px] font-bold text-[var(--c-fg)]/40 uppercase tracking-[0.2em] mb-4 ml-1">I am interested in</label>
                    <div className="flex flex-wrap gap-3">
                      {["Investor", "Customer", "Supplier", "Data Center Tenant", "Government", "Academia"].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setIntent(type)}
                          className={`px-5 py-3 rounded-[10px] text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                            intent === type 
                            ? "bg-[var(--c-lime)] border-[var(--c-lime)] text-black shadow-[0_10px_20px_-5px_rgba(193,255,0,0.3)]" 
                            : "bg-[var(--c-fg)]/5 border-transparent text-[var(--c-fg)]/60 hover:border-[var(--c-fg)]/20"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                </div>

                <form className="space-y-6 md:space-y-8" onSubmit={e => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-[var(--c-fg)]/60 uppercase tracking-widest ml-1">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full bg-[var(--c-bg)] border border-[var(--c-border)] rounded-[10px] px-5 py-4 text-[var(--c-fg)] focus:outline-none focus:border-[var(--c-lime)] transition-all placeholder:text-[var(--c-fg)]/30" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-[var(--c-fg)]/60 uppercase tracking-widest ml-1">Work Email</label>
                      <input type="email" placeholder="john@company.com" className="w-full bg-[var(--c-bg)] border border-[var(--c-border)] rounded-[10px] px-5 py-4 text-[var(--c-fg)] focus:outline-none focus:border-[var(--c-lime)] transition-all placeholder:text-[var(--c-fg)]/30" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-[var(--c-fg)]/60 uppercase tracking-widest ml-1">Company</label>
                      <input type="text" placeholder="Organization" className="w-full bg-[var(--c-bg)] border border-[var(--c-border)] rounded-[10px] px-5 py-4 text-[var(--c-fg)] focus:outline-none focus:border-[var(--c-lime)] transition-all placeholder:text-[var(--c-fg)]/30 shadow-inner" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-[var(--c-fg)]/60 uppercase tracking-widest ml-1">Inquiry Type</label>
                      <div className="relative group">
                        <select 
                          value={intent}
                          onChange={(e) => setIntent(e.target.value)}
                          className="w-full appearance-none bg-[var(--c-bg)] border border-[var(--c-border)] rounded-[10px] px-5 py-4 text-[var(--c-fg)] focus:outline-none focus:border-[var(--c-lime)] transition-all cursor-pointer pr-12"
                        >
                          <option className="bg-[var(--c-bg)]">Investor</option>
                          <option className="bg-[var(--c-bg)]">Customer</option>
                          <option className="bg-[var(--c-bg)]">Supplier</option>
                          <option className="bg-[var(--c-bg)]">Data Center Tenant</option>
                          <option className="bg-[var(--c-bg)]">Government</option>
                          <option className="bg-[var(--c-bg)]">Academia</option>
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-[var(--c-fg)]/40 pointer-events-none group-hover:text-[var(--c-lime)] transition-colors" size={18} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-[var(--c-fg)]/60 uppercase tracking-widest ml-1">How can we help?</label>
                    <textarea rows={5} placeholder="Describe your request in detail..." className="w-full bg-[var(--c-bg)] border border-[var(--c-border)] rounded-[10px] px-5 py-4 text-[var(--c-fg)] focus:outline-none focus:border-[var(--c-lime)] transition-all resize-none placeholder:text-[var(--c-fg)]/30"></textarea>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full h-14 md:h-16 shadow-lg shadow-[var(--c-lime)]/10"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <span>Submit Request</span>
                      <Send size={18} />
                    </div>
                  </Button>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Global Footprint Section */}
      <GlobalFootprint />

      {/* Social & Help Section */}
      <section className="py-10 bg-[var(--c-fg)]/[0.02] border-y border-[var(--c-border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10">
             <div className="text-center md:border-r border-[var(--c-border)] md:pr-12">
                <MessageCircle size={28} className="text-[var(--c-lime)] mx-auto mb-5" />
                <h3 className="text-lg font-bold text-[var(--c-fg)] mb-2 uppercase tracking-tight">Live Chat</h3>
                <p className="text-[var(--c-fg)]/60 text-sm mb-5 max-w-[200px] mx-auto">Real-time support during business hours.</p>
                <button className="text-[var(--c-lime)] text-xs font-bold uppercase tracking-widest hover:tracking-[0.2em] transition-all">Start Chat ↗</button>
             </div>
             <div className="text-center md:border-r border-[var(--c-border)] md:px-12">
                <Clock size={28} className="text-[var(--c-lime)] mx-auto mb-5" />
                <h3 className="text-lg font-bold text-[var(--c-fg)] mb-2 uppercase tracking-tight">Working Hours</h3>
                <p className="text-[var(--c-fg)]/60 text-sm mb-5 max-w-[200px] mx-auto">Mon - Fri: 9:00 AM - 6:00 PM PST</p>
                <button className="text-[var(--c-lime)] text-xs font-bold uppercase tracking-widest hover:tracking-[0.2em] transition-all">Schedule Call ↗</button>
             </div>
             <div className="text-center md:pl-12">
                <Globe size={28} className="text-[var(--c-lime)] mx-auto mb-5" />
                <h3 className="text-lg font-bold text-[var(--c-fg)] mb-2 uppercase tracking-tight">Global Network</h3>
                 <div className="flex justify-center gap-3 mt-6">
                    <div className="w-10 h-10 rounded-[10px] bg-[var(--c-fg)]/5 flex items-center justify-center hover:bg-[var(--c-lime)] hover:text-[var(--c-bg)] transition-all cursor-pointer"><Globe size={16} /></div>
                    <div className="w-10 h-10 rounded-[10px] bg-[var(--c-fg)]/5 flex items-center justify-center hover:bg-[var(--c-lime)] hover:text-[var(--c-bg)] transition-all cursor-pointer"><MessageCircle size={16} /></div>
                    <div className="w-10 h-10 rounded-[10px] bg-[var(--c-fg)]/5 flex items-center justify-center hover:bg-[var(--c-lime)] hover:text-[var(--c-bg)] transition-all cursor-pointer"><Mail size={16} /></div>
                 </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
