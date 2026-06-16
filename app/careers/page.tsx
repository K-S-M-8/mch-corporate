"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-obsidian text-platinum antialiased selection:bg-gold-premium selection:text-black">
      <Navbar />
      
      <section className="pt-44 pb-24 px-6 max-w-4xl mx-auto text-center space-y-6">
        <div className="max-w-xl mx-auto space-y-3">
          <h2 className="text-xs font-semibold tracking-[0.25em] uppercase text-gold-premium">
            Human Capital Matrix
          </h2>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-platinum">
            Join the Directorate
          </h1>
          <p className="text-sm text-neutral-400 tracking-tight leading-relaxed">
            We are consistently mapping out exceptional operational talent, technical full-stack developers, project engineers, and administrative managers across South Africa.
          </p>
        </div>

        {/* Elegant Notice Board */}
        <div className="bg-onyx rounded-2xl border border-neutral-900/60 p-8 max-w-2xl mx-auto mt-8">
          <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-2">Talent Acquisition Intake</span>
          <p className="text-xs text-neutral-400 tracking-tight">
            Our generalized assignment pipelines are currently undergoing structural review. If you represent elite technical execution or operational oversight capacity, please initialize contact through our secure <a href="/contact" className="text-gold-premium hover:underline">Mandate Portal</a> with your dossier summary.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}