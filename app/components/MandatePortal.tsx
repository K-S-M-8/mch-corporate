"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function MandatePortal() {
  const [formState, setFormState] = useState({ name: '', email: '', sector: 'general', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Front-end state shift to mimic secure transmission verification
    setSubmitted(true);
  };

  return (
    <section id="contact" className="w-full bg-obsidian py-24 px-6 border-t border-neutral-950 select-none">
      <div className="max-w-3xl mx-auto">
        
        {/* Portal Header */}
        <div className="text-center mb-12">
          <h2 className="text-xs font-semibold tracking-[0.25em] uppercase text-gold-premium mb-3">
            Secure Communications
          </h2>
          <p className="text-3xl md:text-4xl font-semibold tracking-tighter text-platinum">
            Institutional Mandate Portal
          </p>
          <p className="text-neutral-500 text-xs mt-2 max-w-md mx-auto tracking-tight">
            Initiate communication vectors regarding venture partnerships, public compliance reviews, or division project inquiries.
          </p>
        </div>

        {/* Interactive Form Board */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-onyx rounded-[28px] border border-neutral-900/60 p-8 md:p-10"
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name Input */}
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium">Identity / Entity</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe / Institution Name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="bg-black/40 border border-neutral-900 rounded-xl px-4 py-3 text-sm text-platinum placeholder-neutral-700 focus:outline-none focus:border-gold-premium/50 transition-colors w-full"
                  />
                </div>

                {/* Email Address Input */}
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium">Secure Routing Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="name@institution.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="bg-black/40 border border-neutral-900 rounded-xl px-4 py-3 text-sm text-platinum placeholder-neutral-700 focus:outline-none focus:border-gold-premium/50 transition-colors w-full"
                  />
                </div>
              </div>

              {/* Target Division Dropdown Select */}
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium">Target Allocation Sector</label>
                <select 
                  value={formState.sector}
                  onChange={(e) => setFormState({ ...formState, sector: e.target.value })}
                  className="bg-black/40 border border-neutral-900 rounded-xl px-4 py-3 text-sm text-platinum focus:outline-none focus:border-gold-premium/50 transition-colors w-full appearance-none cursor-pointer"
                >
                  <option value="general">General Executive Counsel</option>
                  <option value="construction">Division 01 // Construction & Infrastructure</option>
                  <option value="banking">Division 02 // Investment & Banking</option>
                  <option value="agriculture">Division 03 // Agricultural Systems</option>
                  <option value="logistics">Division 04 // Logistics & Transport</option>
                  <option value="property">Division 05 // Commercial Property</option>
                  <option value="security">Division 06 // Security & Asset Protection</option>
                  <option value="tech">Division 07 // LADNU Software R&D</option>
                  <option value="healthcare">Division 08 // Healthcare & Technology</option>
                </select>
              </div>

              {/* Message Memo Box */}
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium">Mandate Memorandum</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="Outline parameters of your venture submission or corporate inquiry..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="bg-black/40 border border-neutral-900 rounded-xl px-4 py-3 text-sm text-platinum placeholder-neutral-700 focus:outline-none focus:border-gold-premium/50 transition-colors w-full resize-none"
                />
              </div>

              {/* Submit Capsule Trigger */}
              <div className="pt-2">
                <button 
                  type="submit"
                  className="w-full bg-platinum text-obsidian rounded-xl py-3 text-xs font-semibold uppercase tracking-widest hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  Transmit Mandated Request
                </button>
              </div>

            </form>
          ) : (
            // Animated Success Vault Screen
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 flex flex-col items-center justify-center space-y-4"
            >
              <div className="w-12 h-12 bg-gold-premium/10 border border-gold-premium/30 rounded-full flex items-center justify-center text-gold-premium mb-2">
                ✓
              </div>
              <h3 className="text-xl font-semibold tracking-tighter text-platinum">Transmission Successfully Encrypted</h3>
              <p className="text-xs text-neutral-400 max-w-sm leading-relaxed tracking-tight">
                Thank you, <span className="text-platinum font-medium">{formState.name}</span>. Your dispatch has been logged inside our repository. The directorate will cross-reference the parameters against active compliance protocols.
              </p>
            </motion.div>
          )}
        </motion.div>

      </div>
    </section>
  );
}