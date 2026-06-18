"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { CORPORATE_IDENTITY, CORPORATE_VALUES, CorporateValue } from '../components/mchData';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-obsidian text-platinum antialiased selection:bg-gold-premium selection:text-black">
      <Navbar />

      {/* Corporate Manifesto Title Header */}
      <section className="pt-44 pb-12 px-6 max-w-6xl mx-auto border-b border-neutral-900/60">
        <p className="text-gold-premium text-xs font-semibold uppercase tracking-[0.3em] mb-3">
          Our Mandate & Strategic Legacy
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-platinum mb-4 max-w-4xl">
          Architecting a Unified Future, From Africa to the World
        </h1>
        <p className="text-lg text-neutral-400 tracking-tight max-w-3xl leading-relaxed">
          Mundalamo Corporate Holdings (MCH), established in {CORPORATE_IDENTITY.establishedYear} under the visionary leadership of {CORPORATE_IDENTITY.founder}, is a non-operational parent holding company committed to an audacious purpose: to orchestrate profound transformations globally, beginning in Africa.
        </p>
      </section>

      {/* Executive Summary Narrative */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-neutral-900/30">
        <div>
          <h2 className="text-xs uppercase font-semibold tracking-[0.2em] text-gold-premium">
            Executive Summary
          </h2>
          <p className="text-xs text-neutral-500 tracking-wide mt-1 font-mono">
            Strategic Intent
          </p>
        </div>
        <div className="md:col-span-2 space-y-6 text-sm text-neutral-400 leading-relaxed font-sans max-w-3xl">
          <p>
            We achieve global impact by strategically owning and investing in eight diverse subsidiaries, each operating across primary, secondary, and tertiary sectors. Our mission is to leverage the unparalleled synergies across this comprehensive portfolio to address humanity&apos;s most pressing challenges, accelerate industrial advancement, and ultimately, forge a better, more unified world for all.
          </p>
          <p className="border-l border-gold-premium/40 pl-4 italic text-neutral-300">
            &quot;This is more than a business venture; it&apos;s a beacon of hope, inspiring collective potential that transcends geographical boundaries.&quot;
          </p>
        </div>
      </section>

      {/* Core Philosophical Dimensions */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-neutral-900/30">
        <div>
          <h2 className="text-xs uppercase font-semibold tracking-[0.2em] text-gold-premium">
            Vision & Mission
          </h2>
          <p className="text-xs text-neutral-500 tracking-wide mt-1 font-mono">
            Enterprise Pillars
          </p>
        </div>
        <div className="md:col-span-2 space-y-12">
          {/* Vision Block */}
          <div className="space-y-3">
            <h3 className="text-xl font-medium tracking-tight text-platinum">The Vision Statement</h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-sans">
              To be the leading catalyst for global transformation, inspiring an era of unprecedented progress, unity, and shared prosperity by pioneering integrated solutions that emerge from Africa and serve humanity worldwide.
            </p>
          </div>
          
          {/* Mission Block */}
          <div className="space-y-3">
            <h3 className="text-xl font-medium tracking-tight text-platinum">The Mission Statement</h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-sans">
              Through strategic ownership and the fostering of unique inter-group synergies, we enable our entities to deliver innovative, integrated, and impactful solutions that first address Africa&apos;s grand challenges, creating widespread opportunities and systematically elevating the continent&apos;s standing, with the ultimate goal of leveraging this proven expertise to foster global well-being and progress. We are guided by ethical leadership and a profound commitment to sustainable impact.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Values Matrix */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xs uppercase font-semibold tracking-[0.2em] text-gold-premium">
            Core Values
          </h2>
          <p className="text-xs text-neutral-500 tracking-wide mt-1 font-mono">
            Institutional DNA
          </p>
        </div>
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {CORPORATE_VALUES.map((value: CorporateValue, index: number) => (
            <div key={index} className="space-y-2 bg-neutral-950/20 border border-neutral-900/40 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="text-sm font-semibold tracking-tight text-gold-premium">
                {value.title}
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                {value.definition}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}