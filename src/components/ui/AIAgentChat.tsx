"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';

export default function AIAgentChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'agent', text: 'Hello! I am WBM AI Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { role: 'user', text: input }]);
    setInput('');
    
    // Simulate agent response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'agent', 
        text: 'Thank you for reaching out. A representative will get back to you shortly, or you can explore our Process and Technology pages to learn more.' 
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, y: 20 }}
        animate={{ 
          scale: 1, 
          y: 0,
          transition: { type: "spring", stiffness: 260, damping: 20 }
        }}
        whileHover={{ 
          scale: 1.15,
          boxShadow: "0 0 40px rgba(217, 255, 0, 0.6)",
        }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[90] p-5 rounded-full shadow-[0_0_30px_rgba(217,255,0,0.4)] bg-[#d9ff00] text-black transition-all duration-300 group ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <div className="absolute inset-0 rounded-full bg-[#d9ff00] animate-ping opacity-20 group-hover:opacity-40 transition-opacity" />
        <MessageSquare size={28} className="relative z-10" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-8 sm:bottom-8 sm:w-[400px] h-[500px] max-h-[85vh] z-[100] bg-[var(--c-bg2)] border border-[var(--c-border)] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-[var(--c-bg)] border-b border-[var(--c-border)]">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-[var(--c-lime)] flex items-center justify-center font-bold text-black text-sm">
                    AI
                  </div>
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[var(--c-bg)]" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--c-fg)] text-sm">WBM Agent</h3>
                  <p className="text-xs text-[var(--c-fg2)]">Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-[var(--c-fg2)] hover:text-[var(--c-fg)] transition-colors p-1"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-4 no-scrollbar">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-[var(--c-lime)] text-black rounded-br-sm' 
                        : 'bg-[var(--c-bg3)] text-[var(--c-fg)] rounded-bl-sm border border-[var(--c-border)]'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 bg-[var(--c-bg)] border-t border-[var(--c-border)] flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our process..."
                className="flex-1 bg-[var(--c-bg3)] border border-[var(--c-border)] rounded-full px-4 py-2.5 text-sm text-[var(--c-fg)] placeholder-[var(--c-fg3)] focus:outline-none focus:border-[var(--c-lime)]/50 transition-colors"
              />
              <button 
                type="submit"
                disabled={!input.trim()}
                className="p-2.5 bg-[var(--c-lime)] text-black rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-colors"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
