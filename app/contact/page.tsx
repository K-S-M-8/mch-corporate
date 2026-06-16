"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import MandatePortal from '../components/MandatePortal';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-obsidian text-platinum antialiased selection:bg-gold-premium selection:text-black">
      <Navbar />
      
      <section className="pt-44 pb-6 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-platinum mb-4">
          Corporate Concierge
        </h1>
        <p className="text-lg text-neutral-400 tracking-tight max-w-2xl leading-relaxed">
          Operational hubs and secure intake parameters for physical and digital communication routing.
        </p>

        {/* Regional Footprint Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 border-t border-neutral-900/60 pt-8">
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold-premium font-semibold mb-1">Pretoria Hub</h4>
            <p className="text-xs text-neutral-400 font-sans">Administrative Operations & Security Infrastructure Oversight</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-1">Midrand Core</h4>
            <p className="text-xs text-neutral-400 font-sans">Technology R&D, System Engineering & Automation Architecture</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-1">Sandton Node</h4>
            <p className="text-xs text-neutral-400 font-sans">Corporate Finance Registry & Joint-Venture Structuring</p>
          </div>
        </div>
      </section>

      {/* Embed your functional Mandate Portal Component directly */}
      <MandatePortal />

      <Footer />
    </main>
  );
}