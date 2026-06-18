"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Link from 'next/link';
import { CORPORATE_IDENTITY } from '../components/mchData';

export default function CareersPage() {
  const strategicPillars = [
    {
      num: "01",
      title: "Future-Proof Skill Cultivation",
      description: "Equipping young professionals with next-generation capabilities in AI architectures, advanced software execution, and automation layers to lead inside the global knowledge economy."
    },
    {
      num: "02",
      title: "Cross-Sector Collaborative Synergy",
      description: "Nurturing elite talent within a dynamic, multi-sector ecosystem where technology researchers, industrial engineers, and operational assets cross-pollinate systems daily."
    },
    {
      num: "03",
      title: "Global Scalability & Impact",
      description: "Developing code frameworks and physical assets rigorously proven on the African continent, prepared to adapt and scale to handle infrastructure deficits anywhere on Earth."
    }
  ];

  const specializedTracks = [
    {
      id: "MCH-TRACK-01",
      title: "Senior Core Systems Engineer",
      division: "LADNU // Advanced Technology Services",
      allocation: "Johannesburg HQ / Hybrid",
      mandate: "Architecting real-time transactional sync components, micro-kernel restaurant OS environments, and automated checkout engines. Requires strict expertise in high-concurrency loops and compiling safety mechanisms."
    },
    {
      id: "MCH-TRACK-02",
      title: "Quantitative Systems Strategist",
      division: "LADNUM Capital // Quantitative Desk",
      allocation: "On-Site Trading Floor",
      mandate: "Developing and auditing systematic execution algorithmic code structures for specialized market liquidity allocation. Focuses on absolute risk mitigation boundaries, data optimization, and drawdown constraints."
    },
    {
      id: "MCH-TRACK-03",
      title: "Infrastructure Portfolio Director",
      division: "D-NUM // Civil Infrastructure Networks",
      allocation: "Regional Field Deployment",
      mandate: "Overseeing heavy industrial construction pipelines, structural safety analytics, and multi-scale civil engineering developments. Demands deep knowledge of regulatory compliance and asset performance auditing."
    }
  ];

  return (
    <main className="min-h-screen bg-obsidian text-platinum antialiased selection:bg-gold-premium selection:text-black">
      <Navbar />

      {/* Institutional Talent Acquisition Header */}
      <section className="pt-44 pb-12 px-6 max-w-6xl mx-auto border-b border-neutral-900/60">
        <p className="text-gold-premium text-xs font-semibold uppercase tracking-[0.3em] mb-3">
          Human Capital &amp; Leadership Development
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-platinum mb-4 max-w-4xl">
          Cultivating a New Generation of Global Leaders
        </h1>
        <p className="text-lg text-neutral-400 tracking-tight max-w-3xl leading-relaxed">
          At {CORPORATE_IDENTITY.legalName}, we are not merely filling operational roles. We are building an elite, purpose-driven team of professionals equipped to reshape global industry, beginning right here in Africa.
        </p>
      </section>

      {/* Strategic Vision Pillars */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-neutral-900/30">
        <div>
          <h2 className="text-xs uppercase font-semibold tracking-[0.2em] text-gold-premium">
            The Talent Mandate
          </h2>
          <p className="text-xs text-neutral-500 tracking-wide mt-1 font-mono">
            Empowerment Framework
          </p>
        </div>
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {strategicPillars.map((pillar) => (
            <div key={pillar.num} className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-xs text-neutral-600">{pillar.num}.</span>
                <h3 className="text-base font-semibold tracking-tight text-platinum">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans pl-7">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Active Specialization Tracks Block — Integrated with Mandate Intake Channel */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-neutral-900/30">
        <div>
          <h2 className="text-xs uppercase font-semibold tracking-[0.2em] text-gold-premium sticky top-32">
            Active Dispatches
          </h2>
          <p className="text-xs text-neutral-500 tracking-wide mt-1 font-mono">
            Vetted Placements
          </p>
        </div>
        
        <div className="md:col-span-2 space-y-6">
          {specializedTracks.map((track) => (
            <div key={track.id} className="p-6 bg-neutral-950/40 border border-neutral-900/60 rounded-xl backdrop-blur-sm flex flex-col justify-between hover:border-gold-premium/20 transition-colors duration-300">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] text-neutral-600 tracking-widest">{"// "}{track.id}</span>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-gold-premium bg-obsidian border border-neutral-900 px-2 py-0.5 rounded">
                    {track.allocation}
                  </span>
                </div>
                <h3 className="text-lg font-medium tracking-tight text-platinum uppercase">{track.title}</h3>
                <p className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 mb-4">{track.division}</p>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed border-t border-neutral-900/40 pt-3">{track.mandate}</p>
              </div>
              <div className="mt-6 flex justify-end">
                <Link href="/contact" className="text-[10px] uppercase font-mono font-bold tracking-widest text-gold-premium hover:text-amber-400 transition-colors">
                  Submit Vetting Credentials Matrix ➔
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Institutional Call to Action Frame */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="relative rounded-xl bg-neutral-950/40 border border-neutral-900/60 p-8 md:p-12 backdrop-blur-sm overflow-hidden text-center max-w-3xl mx-auto">
          {/* Decorative Corner Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold-premium/[0.03] to-transparent rounded-tr-xl pointer-events-none" />
          
          <span className="text-[10px] uppercase font-bold tracking-widest bg-neutral-900/60 text-gold-premium px-3 py-1 rounded border border-neutral-800/40 inline-block mb-4">
            Future Intake &amp; Strategic Partnerships
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-platinum mb-4">
            Ecosystem Talent Pool Selection
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed font-sans max-w-xl mx-auto mb-8">
            As a parent holding structure established in 2025, we orchestrate strategic talent alignment across our eight specialized divisions. While tactical hiring operations are driven autonomously by individual subsidiaries, we constantly scout for world-class analytical minds, systems developers, and calculated sector leaders.
          </p>
          
          <div className="border-t border-neutral-900/60 pt-6 text-center">
            <p className="text-xs text-neutral-500 font-mono">
              Inquiries regarding executive placement or specialized research tracks can be routed to our core intake form or secure corporate email network:
            </p>
            <p className="text-sm text-gold-premium font-mono font-medium mt-2 selection:bg-platinum selection:text-black">
              {CORPORATE_IDENTITY.institutionalEmail}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}