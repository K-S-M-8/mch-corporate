"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { GOVERNANCE_PRINCIPLES, CORPORATE_IDENTITY, GovernancePrinciple } from '../components/mchData';

export default function GovernancePage() {
  return (
    <main className="min-h-screen bg-obsidian text-platinum antialiased selection:bg-gold-premium selection:text-black">
      <Navbar />
      
      {/* Institutional Governance Header */}
      <section className="pt-44 pb-12 px-6 max-w-6xl mx-auto border-b border-neutral-900/60">
        <p className="text-gold-premium text-xs font-semibold uppercase tracking-[0.3em] mb-3">
          Statutory Compliance & Leadership Matrix
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-platinum mb-4">
          Corporate Governance
        </h1>
        <p className="text-lg text-neutral-400 tracking-tight max-w-2xl leading-relaxed">
          The structural oversight framework guiding {CORPORATE_IDENTITY.legalName}. We enforce rigorous risk control, ethical asset protection, and multi-sector statutory compliance across all corporate operations.
        </p>
      </section>

      {/* Leadership & Structural Authority Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-neutral-900/30">
        <div>
          <h2 className="text-xs uppercase font-semibold tracking-[0.2em] text-gold-premium">
            Executive Leadership
          </h2>
          <p className="text-xs text-neutral-500 tracking-wide mt-1 font-mono">
            Directorship & Control
          </p>
        </div>
        <div className="md:col-span-2 space-y-6">
          <div className="bg-neutral-950/40 border border-neutral-900/60 p-8 rounded-xl backdrop-blur-sm">
            <span className="text-[10px] uppercase font-bold tracking-widest bg-neutral-900/60 text-gold-premium px-2.5 py-1 rounded border border-neutral-800/40 inline-block mb-4">
              Executive Director & Founder
            </span>
            <h3 className="text-2xl font-semibold tracking-tight text-platinum mb-2">
              {CORPORATE_IDENTITY.founder}
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-sans max-w-xl">
              Orchestrating multi-sector portfolio integration from Johannesburg to global markets. Leadership focused on aligning proprietary innovations, systematic capital management, and structural economic development.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars of Stewardship */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-neutral-900/30">
        <div>
          <h2 className="text-xs uppercase font-semibold tracking-[0.2em] text-gold-premium">
            Stewardship Mandate
          </h2>
          <p className="text-xs text-neutral-500 tracking-wide mt-1 font-mono">
            Strategic Risk Framework
          </p>
        </div>
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {GOVERNANCE_PRINCIPLES.map((principle: GovernancePrinciple, index: number) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-xs text-neutral-600">
                  0{index + 1}.
                </span>
                <h4 className="text-base font-semibold tracking-tight text-platinum">
                  {principle.title}
                </h4>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed pl-7">
                {principle.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Operational Controls & Strategy */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-neutral-900/30">
        <div>
          <h2 className="text-xs uppercase font-semibold tracking-[0.2em] text-gold-premium">
            King IV & Capital Alignment
          </h2>
          <p className="text-xs text-neutral-500 tracking-wide mt-1 font-mono">
            Fiduciary Accountability
          </p>
        </div>
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold tracking-tight text-platinum uppercase">
              King IV Application Protocol
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              MCH systematically integrates the principles of the King IV Report on Corporate Governance™ for South Africa. We practice mindful leadership, transparency, and value creation to achieve an ethical, healthy corporate culture across all industrial clusters.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-semibold tracking-tight text-platinum uppercase">
              Subsidiary Capital Oversight
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              The parent holding board maintains strict authority over capital deployment, funding mechanisms, and risk validation thresholds for all subsidiary operations, protecting stakeholder value through rigid financial compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Statutory and Registration Disclosures */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xs uppercase font-semibold tracking-[0.2em] text-gold-premium">
            Regulatory Transparency
          </h2>
          <p className="text-xs text-neutral-500 tracking-wide mt-1 font-mono">
            CIPC Registry Filings
          </p>
        </div>
        <div className="md:col-span-2">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-neutral-900 text-neutral-500">
                <th className="pb-3 uppercase tracking-wider font-semibold">Disclosure Property</th>
                <th className="pb-3 uppercase tracking-wider font-semibold">Official Record Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-900/40 text-neutral-300">
              <tr>
                <td className="py-4 font-medium text-neutral-400">Registered Enterprise Name</td>
                <td className="py-4 font-sans">{CORPORATE_IDENTITY.legalName}</td>
              </tr>
              <tr>
                <td className="py-4 font-medium text-neutral-400">Statutory Identification Number</td>
                <td className="py-4 font-mono text-gold-premium">{CORPORATE_IDENTITY.registrationNumber}</td>
              </tr>
              <tr>
                <td className="py-4 font-medium text-neutral-400">Sovereign Jurisdiction</td>
                <td className="py-4">Republic of South Africa (CIPC Registry)</td>
              </tr>
              <tr>
                <td className="py-4 font-medium text-neutral-400">Operational Classification</td>
                <td className="py-4 text-neutral-400">Parent Investment & Holding Structure</td>
              </tr>
            </tbody>
          </table>
          
          <div className="mt-8 bg-neutral-950/20 border border-neutral-900/40 rounded-lg p-4 text-[11px] text-neutral-500 leading-relaxed font-sans">
            <strong>Institutional Provision:</strong> Established as an authoritative parent corporate structure, Mundalamo Corporate Holdings retains absolute governance control over capital injection pipelines, core treasury allocation, and proprietary technology research and development assets.
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}