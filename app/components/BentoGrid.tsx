"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SUBSIDIARIES, Subsidiary } from './mchData';

export default function BentoGrid() {
  // Explicitly typing variants as Variants forces strict configuration alignment
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.16, 1, 0.3, 1] // Safely matches easing signature now
      }
    }
  };

  return (
    <section id="matrix" className="w-full bg-obsidian py-24 px-6 border-t border-neutral-950 select-none">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header Elements */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-xs font-semibold tracking-[0.25em] uppercase text-gold-premium mb-3">
            The Operational Grid
          </h2>
          <p className="text-3xl md:text-5xl font-semibold tracking-tighter text-platinum">
            Eight Divisions. Integrated Architecture.
          </p>
          <p className="text-neutral-500 text-sm max-w-xl mt-3 tracking-tight">
            The core industrial, capital, and technology sectors operating cleanly under the central umbrella of Mundalamo Corporate Holdings (Pty) Ltd.
          </p>
        </div>

        {/* Animated 8-Card Layout Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          
          {SUBSIDIARIES.map((sub: Subsidiary, index: number) => {
            const isLadnu = sub.id === 'ladnu-tech' || sub.id === 'ladnu';
            
            // Safe alignment mapping back to structural data keys
            const displayNum = `0${index + 1}.`;
            const displaySector = sub.sector || "Industrial Operations";
            const displayStatus = "Active Operational Cluster";

            return (
              <motion.div 
                key={sub.id}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeInOut" } }}
                className={`bg-onyx rounded-[24px] border ${
                  isLadnu ? 'border-neutral-800 shadow-[0_15px_40px_rgba(197,160,89,0.02)]' : 'border-neutral-900/60'
                } p-6 flex flex-col justify-between transition-all duration-500 hover:border-neutral-800 hover:shadow-[0_20px_50px_rgba(197,160,89,0.02)] group min-h-[360px] cursor-pointer`}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-neutral-900/40 pb-3 mb-4">
                    <span className="text-[10px] font-mono tracking-widest text-neutral-500 font-medium">
                      {displayNum}
                    </span>
                    <span className={`text-[9px] font-mono tracking-wider uppercase px-2 py-0.5 rounded border ${
                      isLadnu 
                        ? 'text-gold-premium bg-gold-premium/5 border-gold-premium/20' 
                        : 'text-neutral-600 bg-black/30 border-neutral-900/50'
                    }`}>
                      {displayStatus}
                    </span>
                  </div>
                  
                  <div className="text-[10px] text-gold-premium tracking-wider uppercase font-semibold mb-1">
                    {displaySector}
                  </div>
                  
                  <h3 className="text-2xl font-semibold tracking-tighter text-platinum mb-2 group-hover:text-gold-premium transition-colors">
                    {sub.name}
                  </h3>
                  
                  <p className="text-xs text-neutral-400 tracking-tight leading-relaxed">
                    {sub.description}
                  </p>
                </div>
                
                <div className="flex items-center text-[11px] font-medium text-neutral-500 group-hover:text-platinum transition-colors mt-6">
                  Sector Profile <span className="ml-1 text-[9px] transform group-hover:translate-x-0.5 transition-transform">➔</span>
                </div>
              </motion.div>
            );
          })}

        </motion.div>
      </div>
    </section>
  );
}