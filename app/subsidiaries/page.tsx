"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { mchSubsidiaries } from '../components/mchData';

export default function SubsidiariesPage() {
  return (
    <main className="min-h-screen bg-obsidian text-platinum antialiased selection:bg-gold-premium selection:text-black">
      <Navbar />
      
      {/* Expanded Subpage Header */}
      <section className="pt-44 pb-12 px-6 max-w-6xl mx-auto border-b border-neutral-900/60">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-platinum mb-4">
          The 8 Sectors
        </h1>
        <p className="text-lg text-neutral-400 tracking-tight max-w-2xl leading-relaxed">
          An overview of the operational infrastructure driving Mundalamo Corporate Holdings (Pty) Ltd. Our matrix addresses fundamental requirements across physical development, strategic capital, and software automation.
        </p>
      </section>

      {/* Structured Directory List Block */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="space-y-16">
          {mchSubsidiaries.map((sub) => (
            <div 
              key={sub.id} 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-neutral-900/30 last:border-0"
            >
              {/* Meta Matrix Column */}
              <div>
                <span className="text-xs font-mono tracking-widest text-neutral-500 font-medium block mb-1">
                  {sub.divisionNum}
                </span>
                <span className="text-xs font-semibold text-gold-premium tracking-wider uppercase block">
                  {sub.category}
                </span>
                <div className="mt-4 text-[10px] inline-block font-mono text-neutral-400 bg-neutral-900/60 border border-neutral-800 px-2.5 py-0.5 rounded">
                  Status: {sub.status}
                </div>
              </div>

              {/* Core Information Columns */}
              <div className="md:col-span-2 space-y-3">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tighter text-platinum">
                  {sub.name}
                </h2>
                <h4 className="text-sm font-medium text-neutral-300 tracking-tight">
                  {sub.headline}
                </h4>
                <p className="text-sm text-neutral-400 tracking-tight leading-relaxed max-w-2xl pt-2">
                  {sub.description}
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