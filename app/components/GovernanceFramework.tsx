"use client";

import React from 'react';

export default function GovernanceFramework() {
  const integrationPoints = [
    {
      index: "01",
      title: "Strategic Synchronization",
      detail: "Subsidiaries maintain direct operational autonomy while aligning completely with the central holding treasury parameters, lowering structural risk across the collective portfolio."
    },
    {
      index: "02",
      title: "King IV Corporate Ethics",
      description: "Governed under strict South African statutory transparency requirements. Ethical accountability serves as our fundamental risk-management baseline."
    },
    {
      index: "03",
      title: "Cross-Vertical Technology Synergy",
      detail: "Proprietary research and software systems engineered inside specialized tech wings are shared across our other infrastructure divisions to automatically eliminate redundancy."
    }
  ];

  return (
    <section id="governance-framework" className="w-full bg-neutral-950 border-t border-neutral-900/40 py-24 px-6 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        
        {/* Title Frame */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold-premium block mb-2">
            Institutional Control Architecture
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-platinum uppercase">
            Corporate Governance & Value Synergy
          </h2>
          <div className="h-[1px] w-12 bg-gold-premium mt-4" />
        </div>

        {/* Informative Display Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {integrationPoints.map((item, i) => (
            <div key={i} className="p-8 bg-obsidian border border-neutral-900/60 transition-all duration-300">
              {/* FIXED: Wrapped comment slashes inside braces to pass JSX lint rules */}
              <span className="text-[10px] font-mono text-neutral-600 block mb-4">
                {"// "} {item.index}
              </span>
              <h3 className="text-xs uppercase tracking-[0.18em] text-platinum font-medium mb-3">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-400 font-mono leading-relaxed">
                {item.detail || item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Extended Strategy Explanation Block */}
        <div className="p-8 border border-neutral-900 bg-neutral-950 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[1px] h-full bg-gold-premium" />
          <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-500 font-mono block mb-2">
            Operational Protocol
          </span>
          <p className="text-xs text-neutral-400 font-mono leading-relaxed max-w-4xl">
            <span className="text-platinum font-medium">The Ecosystem Core:</span> Mundalamo Corporate Holdings functions through a centralized orchestration model. Instead of running completely disconnected entities, technological intelligence and R&D pipelines (such as our dedicated software architectures) scale laterally into physical regional assets and logistics frameworks. This ensures that every individual commercial vertical acts as both an autonomous profit engine and a strategic asset to the entire group portfolio.
          </p>
        </div>

      </div>
    </section>
  );
}