"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { corporateGovernance } from '../components/mchData';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-obsidian text-platinum antialiased selection:bg-gold-premium selection:text-black">
      <Navbar />
      
      <section className="pt-44 pb-24 px-6 max-w-4xl mx-auto space-y-12">
        <div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-platinum mb-4">
            The Directorate
          </h1>
          <p className="text-lg text-neutral-400 tracking-tight leading-relaxed max-w-2xl">
            Architecting integrated industrial capability and software automation platforms across the Gauteng economic corridor.
          </p>
        </div>

        <div className="border-t border-neutral-900/60 pt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xs uppercase tracking-widest text-gold-premium font-semibold">Leadership Core</h3>
          </div>
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-semibold tracking-tighter text-platinum">{corporateGovernance.director}</h2>
            <p className="text-xs uppercase font-mono tracking-widest text-neutral-500">Managing Director & Shareholder</p>
            <p className="text-sm text-neutral-400 leading-relaxed tracking-tight">
              Overseeing full-stack deployment frameworks, strategic commodity trading metrics, and infrastructure pipeline execution. Guided by systemic optimization, our framework focuses heavily on building resilient operational layers from the ground up.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}