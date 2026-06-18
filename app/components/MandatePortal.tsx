"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function MandatePortal() {
  const [formState, setFormState] = useState({ name: '', email: '', sector: 'general', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulating secure transactional handling delay before state resolution
      await new Promise((resolve) => setTimeout(resolve, 1400));
      setSubmitted(true);
    } catch (err) {
      console.error("Transmission error:", err);
    } finally {
      setIsSubmitting(false);
    }
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
                    disabled={isSubmitting}
                    placeholder="Principal Name / Institution"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="bg-black/40 border border-neutral-900 rounded-xl px-4 py-3 text-sm text-platinum placeholder-neutral-700 focus:outline-none focus:border-gold-premium/50 transition-colors w-full disabled:opacity-50"
                  />
                </div>

                {/* Email Address Input */}
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium">Secure Routing Email</label>
                  <input 
                    type="email" 
                    required
                    disabled={isSubmitting}
                    placeholder="name@institution.co.za"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="bg-black/40 border border-neutral-900 rounded-xl px-4 py-3 text-sm text-platinum placeholder-neutral-700 focus:outline-none focus:border-gold-premium/50 transition-colors w-full disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Target Division Dropdown Select */}
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium">Target Allocation Sector</label>
                <select 
                  value={formState.sector}
                  disabled={isSubmitting}
                  onChange={(e) => setFormState({ ...formState, sector: e.target.value })}
                  className="bg-black/40 border border-neutral-900 rounded-xl px-4 py-3 text-sm text-platinum focus:outline-none focus:border-gold-premium/50 transition-colors w-full cursor-pointer disabled:opacity-50"
                >
                  <option value="general">General Executive Counsel</option>
                  <option value="tech">Pillar 01 // LADNU Software R&D &amp; AI Systems</option>
                  <option value="corporate-services">Pillar 02 // MALAD Enterprise Solutions</option>
                  <option value="real-estate">Pillar 03 // ALAMO Property &amp; Architecture</option>
                  <option value="capital-markets">Pillar 04 // LADNUM Capital Quantitative Desk</option>
                  <option value="logistics">Pillar 05 // MCH Logistics &amp; Supply Chain</option>
                  <option value="energy">Pillar 06 // MCH Industrial Energy Systems</option>
                  <option value="venture-capital">Pillar 07 // MCH Strategic Capital Ventures</option>
                  <option value="compliance-advisory">Pillar 08 // MCH Sovereign Risk Advisory</option>
                </select>
              </div>

              {/* Message Memo Box */}
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium">Mandate Memorandum</label>
                <textarea 
                  rows={4}
                  required
                  disabled={isSubmitting}
                  placeholder="Outline parameters of your venture submission or corporate inquiry..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="bg-black/40 border border-neutral-900 rounded-xl px-4 py-3 text-sm text-platinum placeholder-neutral-700 focus:outline-none focus:border-gold-premium/50 transition-colors w-full resize-none disabled:opacity-50"
                />
              </div>

              {/* Submit Capsule Trigger */}
              <div className="pt-2">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-platinum text-obsidian rounded-xl py-3 text-xs font-semibold uppercase tracking-widest hover:bg-neutral-200 transition-colors cursor-pointer disabled:bg-neutral-800 disabled:text-neutral-500 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Transmitting Secure Channel Data..." : "Transmit Mandated Request"}
                </button>
              </div>

            </form>
          ) : (
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