"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { corporateGovernance } from '../components/mchData';

export default function GovernancePage() {
  return (
    <main className="min-h-screen bg-obsidian text-platinum antialiased selection:bg-gold-premium selection:text-black">
      <Navbar />
      
      <section className="pt-44 pb-20 px-6 max-w-4xl mx-auto">
        {/* Header Block */}
        <div className="border-b border-neutral-900/60 pb-8 mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-platinum mb-4">
            Institutional Governance
          </h1>
          <p className="text-sm text-neutral-400 tracking-tight max-w-xl leading-relaxed">
            Corporate administrative framework, asset preservation protocols, and legal identity standards for {corporateGovernance.companyName}.
          </p>
        </div>

        {/* Informational Core */}
        <div className="space-y-12">
          <div className="bg-onyx rounded-2xl border border-neutral-900/60 p-8 space-y-4">
            <h3 className="text-lg font-semibold text-platinum tracking-tight border-b border-neutral-900 pb-2">
              Statutory Registration
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
              <div>
                <span className="text-neutral-500 block mb-0.5">Registered Entity Name</span>
                <span className="text-platinum font-medium">{corporateGovernance.companyName}</span>
              </div>
              <div>
                <span className="text-neutral-500 block mb-0.5">CIPC Registration Number</span>
                <span className="text-platinum font-mono font-medium">{corporateGovernance.registrationNumber}</span>
              </div>
              <div>
                <span className="text-neutral-500 block mb-0.5">Executive Management</span>
                <span className="text-platinum font-medium">Director: {corporateGovernance.director}</span>
              </div>
              <div>
                <span className="text-neutral-500 block mb-0.5">Jurisdiction</span>
                <span className="text-platinum font-medium">Gauteng, Republic of South Africa</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 max-w-2xl">
            <h3 className="text-lg font-semibold text-platinum tracking-tight">The Core Mandate Statement</h3>
            <p className="text-sm text-neutral-400 leading-relaxed tracking-tight">
              {corporateGovernance.mandate} We enforce strict internal parameters surrounding localized database sovereignty, risk-adjusted market trade mechanics, and verified enterprise-building structures aligned with regional development boards.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}