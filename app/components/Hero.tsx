"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { corporateGovernance } from './mchData';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-obsidian flex flex-col items-center justify-between pt-40 pb-12 overflow-hidden select-none">
      
      {/* Central Immersive Typography Block */}
      <div className="text-center z-10 px-6 max-w-5xl mx-auto flex-1 flex flex-col justify-center">
        
        {/* Parent Full Name Reveal */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tighter text-platinum max-w-4xl mx-auto mb-6 leading-[1.1]"
        >
          {corporateGovernance.companyName}
        </motion.h1>
        
        {/* Subtitle Reveal with Slight Delay */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-neutral-400 font-normal tracking-tight max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A diversified South African private enterprise holding structure. Architecting elite digital frameworks, systemic market liquidities, and physical regional infrastructure.
        </motion.p>
        
        {/* Interaction Link Matrix Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center space-x-8 text-sm font-medium"
        >
          <a href="#matrix" className="text-gold-premium hover:underline inline-flex items-center group transition-all">
            Explore the 8 Pillars 
            <span className="ml-1 text-xs transform group-hover:translate-x-0.5 transition-transform">➔</span>
          </a>
          <a href="#matrix" className="text-neutral-400 hover:text-platinum hover:underline inline-flex items-center group transition-all">
            Governance Framework 
            <span className="ml-1 text-xs transform group-hover:translate-x-0.5 transition-transform">➔</span>
          </a>
        </motion.div>
      </div>

      {/* Cinematic Showcase Base Module Reveal */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-5xl h-[30vh] px-4 mx-auto"
      >
        <div className="w-full h-full bg-gradient-to-t from-onyx to-transparent rounded-t-2xl border-t border-x border-neutral-900/60 shadow-[0_-25px_60px_rgba(197,160,89,0.02)] flex flex-col items-center justify-center text-center p-6">
          <div className="text-[9px] tracking-[0.4em] uppercase text-neutral-500 font-mono font-semibold mb-2">
            Institutional Asset Operations
          </div>
          <div className="text-xs text-neutral-600 max-w-md hidden sm:block font-sans">
            Secure private gateway for strategic joint ventures, development funds, and cross-border project mandates.
          </div>
        </div>
      </motion.div>

    </section>
  );
}