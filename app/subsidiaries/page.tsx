"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { SUBSIDIARIES, Subsidiary } from '../components/mchData';

export default function SubsidiariesPage() {
  return (
    <main className="min-h-screen bg-obsidian text-platinum antialiased selection:bg-gold-premium selection:text-black">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-44 pb-12 px-6 max-w-6xl mx-auto border-b border-neutral-900/60">
        <p className="text-gold-premium text-xs font-semibold uppercase tracking-[0.3em] mb-3">
          Industrial Architecture
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-platinum mb-4">
          Our Subsidiaries
        </h1>
        <p className="text-lg text-neutral-400 tracking-tight max-w-2xl leading-relaxed">
          Operating across primary, secondary, and tertiary sectors. We cultivate deep intra-group cross-pollination to scale structural engineering and systematic innovations.
        </p>
      </section>

      {/* Portfolio Matrix */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SUBSIDIARIES.map((sub: Subsidiary, index: number) => (
            <div 
              key={index} 
              className="group relative bg-neutral-950/40 border border-neutral-900/60 rounded-xl p-8 hover:border-gold-premium/30 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between min-h-[320px]"
            >
              <div>
                {/* Sector Badges */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-neutral-600 tracking-wider">
                    SYSTEM ENTRY // 0{index + 1}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-gold-premium bg-gold-premium/5 px-2.5 py-1 rounded border border-gold-premium/10">
                    {sub.sector}
                  </span>
                </div>

                {/* Info */}
                <h3 className="text-2xl font-medium tracking-tight text-platinum mb-3 group-hover:text-gold-premium transition-colors">
                  {sub.name}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
                  {sub.description}
                </p>
              </div>

              {/* Functional Purpose Statement */}
              <div className="mt-8 pt-4 border-t border-neutral-900/40">
                <p className="text-xs font-mono text-neutral-500 tracking-tight">
                  CORE MANDATE: Cross-sector capital &amp; tech deployment.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}