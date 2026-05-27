"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, ShieldCheck, ArrowRight, AlertCircle, Mail, Key, X, Eye, EyeOff } from 'lucide-react';
import LineWaves from '@/components/ui/backgrounds/LineWaves';
import Button from '@/components/ui/Button';
import IntroScreen from '@/components/ui/IntroScreen';
import { authenticate, verifyAndLogin, isAuthenticated } from '@/lib/auth';

const InvestorLogin = () => {
  const [step, setStep] = useState<'credentials' | 'verification'>('credentials');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [accessKey, setAccessKey] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [tempKey, setTempKey] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    if (isAuthenticated()) {
      window.location.replace("/WBM-Investor-Access-Requirements/for-you/investor");
    }
  }, []);

  const handleCredentialsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    setTimeout(() => {
      const result = authenticate(email, password);
      if (result.success) {
        setTempKey(result.tempKey || null);
        setStep('verification');
        setIsLoading(false);
      } else {
        setError("Invalid email or password. Please check your credentials.");
        setIsLoading(false);
      }
    }, 1000);
  };

  const handleVerificationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    setTimeout(() => {
      if (verifyAndLogin(accessKey, email)) {
        setShowIntro(true);
        setTimeout(() => {
          window.location.replace("/WBM-Investor-Access-Requirements/for-you/investor");
        }, 4000); // Sync with IntroScreen duration
      } else {
        setError("Invalid access key. Please use the temporary key provided.");
        setIsLoading(false);
      }
    }, 800);
  };

  const handleCopy = () => {
    if (!tempKey) return;
    setAccessKey(tempKey);
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(tempKey).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
      }
    } catch (err) {
      // Fallback if clipboard fails
      console.warn("Clipboard access denied");
    }
  };

  return (
    <>
    {showIntro && <IntroScreen forcePlay={true} />}
    <div className="min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500 flex flex-col justify-start items-center relative overflow-hidden pt-[130px] md:pt-[150px]">
      {/* Background Visual */}
      <div className="absolute inset-0 z-0">
        <LineWaves 
          speed={0.1}
          color1="#839470"
          color2="#ffffff"
          color3="#8bc34a"
          brightness={0.05}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--c-bg)]/80 via-[var(--c-bg)]/40 to-[var(--c-bg)] z-[1]"></div>
      
      <div className="max-w-md w-full px-6 relative z-[50] mt-4 md:mt-8 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full bg-[var(--c-bg2)] border border-[var(--c-border)] rounded-[20px] shadow-2xl overflow-hidden"
        >
          <div className="p-8 md:p-10">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)] border border-[var(--c-lime)]/20 shadow-[0_0_30px_rgba(131,148,112,0.1)] mb-4">
                <Lock size={32} />
              </div>
              <h2 className="text-2xl font-bold text-[var(--c-fg)] uppercase tracking-tight mb-1">Investor Portal</h2>
              <p className="text-[10px] text-[var(--c-fg2)] uppercase tracking-[0.2em] opacity-60">Confidential Data Room Access</p>
            </div>

            <AnimatePresence mode="wait">
              {step === 'credentials' ? (
                <motion.form 
                  key="credentials"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-6 text-left" 
                  onSubmit={handleCredentialsSubmit}
                >
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-[var(--c-lime)] uppercase tracking-widest">Work Email Address *</label>
                      <input 
                        type="email" 
                        required
                        placeholder="investor@firm.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-12 bg-transparent border border-[var(--c-border)] rounded-lg px-4 text-[var(--c-fg)] focus:outline-none focus:border-[var(--c-lime)] transition-colors placeholder:text-[var(--c-fg2)]/30" 
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-[var(--c-lime)] uppercase tracking-widest flex justify-between items-center">
                        <span>Password *</span>
                        <button 
                          type="button" 
                          onClick={() => setShowPassword(!showPassword)}
                          className="text-[9px] text-[var(--c-fg2)] hover:text-[var(--c-lime)] transition-colors flex items-center gap-1 normal-case font-medium"
                        >
                          {showPassword ? <EyeOff size={12} /> : <Eye size={12} />}
                          {showPassword ? "Hide" : "Show"}
                        </button>
                      </label>
                      <div className="relative">
                        <input 
                          type={showPassword ? "text" : "password"} 
                          required
                          placeholder="••••••••••••" 
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full h-12 bg-transparent border border-[var(--c-border)] rounded-lg px-4 text-[var(--c-fg)] focus:outline-none focus:border-[var(--c-lime)] transition-colors placeholder:text-[var(--c-fg2)]/30" 
                        />
                      </div>
                    </div>
                  </div>

                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-bold uppercase tracking-widest"
                    >
                      <AlertCircle size={14} />
                      <span>{error}</span>
                    </motion.div>
                  )}

                  <div className="flex flex-col gap-4">
                    <button 
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-4 bg-[var(--c-lime)] text-black font-bold text-xs rounded-lg uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <span>Continue</span>
                          <ArrowRight size={14} />
                        </>
                      )}
                    </button>
                    <div className="text-center mt-1">
                      <a 
                        href="/WBM-Investor-Access-Requirements/contact"
                        className="text-[9px] font-bold text-[var(--c-lime)] uppercase tracking-widest hover:text-[var(--c-lime)]/80 transition-colors"
                      >
                        Request Access &rarr;
                      </a>
                    </div>
                  </div>
                </motion.form>
              ) : (
                <motion.form 
                  key="verification"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6 text-left" 
                  onSubmit={handleVerificationSubmit}
                >
                  <div className="p-6 rounded-2xl bg-[var(--c-lime)]/5 border border-[var(--c-lime)]/10 mb-6 text-center">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)] mx-auto mb-4 border border-[var(--c-lime)]/10 shadow-[0_0_20px_rgba(131,148,112,0.1)]">
                      <ShieldCheck size={24} />
                    </div>
                    <p className="text-[var(--c-lime)] text-[10px] font-black uppercase tracking-[0.2em] mb-3">
                      Security Verification
                    </p>
                    <p className="text-[var(--c-fg2)] text-[11px] leading-relaxed mb-6">
                      Identification confirmed for <br />
                      <span className="text-[var(--c-fg)] font-bold">{email}</span>.
                    </p>
                    
                    {tempKey && (
                      <div 
                        className="p-5 bg-[var(--c-bg)]/40 backdrop-blur-xl rounded-xl border border-[var(--c-lime)]/20 group cursor-pointer hover:border-[var(--c-lime)]/40 transition-all shadow-xl relative overflow-hidden" 
                        onClick={handleCopy}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--c-lime)]/5 to-transparent pointer-events-none" />
                        
                        <p className="text-[8px] text-[var(--c-fg2)] font-bold uppercase tracking-widest mb-2 opacity-60 relative z-10">
                          {copied ? "Key Copied!" : "Temporary Access Key"}
                        </p>
                        <div className="flex items-center justify-center gap-1 overflow-hidden relative z-10">
                          <p className="text-xl sm:text-2xl font-black text-[var(--c-lime)] tracking-[0.2em] sm:tracking-[0.5em] uppercase drop-shadow-[0_0_15px_rgba(131,148,112,0.4)]">
                            {tempKey}
                          </p>
                        </div>
                        <p className="text-[8px] text-[var(--c-lime)] font-bold uppercase tracking-widest mt-3 animate-pulse relative z-10">
                          {copied ? "Ready for verification" : "Click to copy key"}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-[var(--c-lime)] uppercase tracking-widest">Enter Access Key *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="••••••••" 
                      value={accessKey}
                      onChange={(e) => setAccessKey(e.target.value.toUpperCase())}
                      className="w-full h-12 bg-transparent border border-[var(--c-border)] rounded-lg px-4 text-[var(--c-fg)] focus:outline-none focus:border-[var(--c-lime)] transition-all placeholder:text-[var(--c-fg2)]/30 tracking-[0.3em] font-black text-center text-lg" 
                    />
                    <p className="text-[9px] text-[var(--c-fg2)]/40 uppercase tracking-widest text-center mt-2">
                      Secondary verification required for session activation.
                    </p>
                  </div>

                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-bold uppercase tracking-widest"
                    >
                      <AlertCircle size={14} />
                      <span>{error}</span>
                    </motion.div>
                  )}

                  <div className="flex flex-col gap-4">
                    <button 
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-4 bg-[var(--c-lime)] text-black font-bold text-xs rounded-lg uppercase tracking-widest hover:brightness-110 hover:shadow-[0_0_25px_rgba(131,148,112,0.3)] transition-all flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <span>Unlock Room</span>
                          <ShieldCheck size={14} />
                        </>
                      )}
                    </button>
                    
                    <div className="flex justify-between items-center px-1">
                      <button 
                        type="button"
                        onClick={() => { setStep('credentials'); setError(""); }}
                        className="text-[9px] font-bold text-[var(--c-fg2)] uppercase tracking-widest hover:text-white transition-colors"
                      >
                        &larr; Back to login
                      </button>
                      <a 
                        href="/WBM-Investor-Access-Requirements/contact"
                        className="text-[9px] font-bold text-[var(--c-lime)] uppercase tracking-widest hover:text-[var(--c-lime)]/80 transition-colors"
                      >
                        Request Access &rarr;
                      </a>
                    </div>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>

            <div className="mt-10 pt-8 border-t border-white/5 text-center">
              <p className="text-[9px] text-[var(--c-fg2)]/40 font-medium leading-relaxed uppercase tracking-widest">
                Authorized access only. Session duration: 120 minutes.<br />
                All activities are monitored and logged.
              </p>
            </div>
          </div>
        </motion.div>


      </div>
    </div>
    </>
  );
};

export default InvestorLogin;
