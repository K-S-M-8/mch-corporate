"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { CORPORATE_IDENTITY } from '../components/mchData';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    organization: '',
    email: '',
    classification: 'Strategic Partnership',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('MCH Institutional Message Payload:', formState);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-obsidian text-platinum antialiased selection:bg-gold-premium selection:text-black">
      <Navbar />

      {/* Corporate Communications Header */}
      <section className="pt-44 pb-12 px-6 max-w-6xl mx-auto border-b border-neutral-900/60">
        <p className="text-gold-premium text-xs font-semibold uppercase tracking-[0.3em] mb-3">
          Institutional Engagement Channels
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-platinum mb-4">
          Connect With Us
        </h1>
        <p className="text-lg text-neutral-400 tracking-tight max-w-2xl leading-relaxed">
          Establish formal correspondence with {CORPORATE_IDENTITY.legalName}. Our administrative framework ensures inquiries regarding investment, operational scale, or subsidiary partnerships are routed directly to executive leadership.
        </p>
      </section>

      {/* Split Communication Columns */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Registry Credentials */}
        <div className="lg:col-span-5 space-y-8 font-sans">
          <div>
            <h2 className="text-xs uppercase font-semibold tracking-[0.2em] text-gold-premium mb-3">
              HQ Global Registry
            </h2>
            <address className="not-italic text-sm text-neutral-400 space-y-2 leading-relaxed">
              <p className="font-semibold text-platinum">{CORPORATE_IDENTITY.legalName}</p>
              <p>Johannesburg Metropolitan Hub</p>
              <p>Gauteng, South Africa</p>
            </address>
          </div>

          <div className="border-t border-neutral-900/60 pt-6">
            <h2 className="text-xs uppercase font-semibold tracking-[0.2em] text-gold-premium mb-3">
              Direct Protocols
            </h2>
            <div className="text-xs font-mono text-neutral-400 space-y-2">
              <p>
                <span className="text-neutral-600 mr-2">E-MAIL:</span>
                <a href={`mailto:${CORPORATE_IDENTITY.institutionalEmail}`} className="text-neutral-300 hover:text-gold-premium transition-colors">
                  {CORPORATE_IDENTITY.institutionalEmail}
                </a>
              </p>
              <p>
                <span className="text-neutral-600 mr-2">REGISTRATION:</span>
                <span className="text-neutral-300">{CORPORATE_IDENTITY.registrationNumber}</span>
              </p>
            </div>
          </div>

          <div className="bg-neutral-950/40 border border-neutral-900/60 rounded-xl p-6 text-xs text-neutral-500 leading-relaxed max-w-md">
            <strong>Security Notice:</strong> All formal communiqués transmitted through our institutional portals undergo rigorous validation protocols to ensure information integrity and maintain strict corporate asset protection standards.
          </div>
        </div>

        {/* Right Column: High-Performance Communication Grid */}
        <div className="lg:col-span-7">
          {submitted ? (
            <div className="bg-neutral-950/40 border border-gold-premium/20 rounded-xl p-8 text-center backdrop-blur-sm space-y-4">
              <div className="w-8 h-8 rounded-full bg-gold-premium/10 border border-gold-premium/20 flex items-center justify-center text-gold-premium font-mono mx-auto text-xs">
                ✓
              </div>
              <h3 className="text-lg font-semibold text-platinum tracking-tight">Transmission Acknowledged</h3>
              <p className="text-xs text-neutral-400 max-w-md mx-auto leading-relaxed">
                Your communication payload has been securely compiled. The executive office will analyze your parameters and initiate standard alignment procedures where relevant.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-neutral-950/20 border border-neutral-900/40 p-8 rounded-xl backdrop-blur-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-500 font-semibold">Your Identity / Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full bg-neutral-900/40 border border-neutral-800/80 rounded-lg px-4 py-2.5 text-xs text-platinum placeholder-neutral-600 focus:outline-none focus:border-gold-premium/40 transition-colors"
                    placeholder="e.g. Executive Lead"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-500 font-semibold">Corporate Organization</label>
                  <input 
                    type="text"
                    required
                    value={formState.organization}
                    onChange={(e) => setFormState({...formState, organization: e.target.value})}
                    className="w-full bg-neutral-900/40 border border-neutral-800/80 rounded-lg px-4 py-2.5 text-xs text-platinum placeholder-neutral-600 focus:outline-none focus:border-gold-premium/40 transition-colors"
                    placeholder="Entity Name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[11px] uppercase tracking-wider text-neutral-500 font-semibold">Secure Communication E-mail</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-neutral-900/40 border border-neutral-800/80 rounded-lg px-4 py-2.5 text-xs text-platinum placeholder-neutral-600 focus:outline-none focus:border-gold-premium/40 transition-colors"
                  placeholder="name@organization.com"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[11px] uppercase tracking-wider text-neutral-500 font-semibold">Inquiry Strategy Classification</label>
                <select 
                  value={formState.classification}
                  onChange={(e) => setFormState({...formState, classification: e.target.value})}
                  className="w-full bg-neutral-900/40 border border-neutral-800/80 rounded-lg px-4 py-2.5 text-xs text-platinum focus:outline-none focus:border-gold-premium/40 transition-colors appearance-none cursor-pointer"
                >
                  <option value="Strategic Partnership">Strategic Partnership Synergy</option>
                  <option value="Subsidiary Collaboration">Subsidiary Operation Query</option>
                  <option value="Capital Strategy">Capital Deployment / Investment Track</option>
                  <option value="Other Protocol">General Institutional Correspondence</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-[11px] uppercase tracking-wider text-neutral-500 font-semibold">Brief Operational Narrative</label>
                <textarea 
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-neutral-900/40 border border-neutral-800/80 rounded-lg px-4 py-2.5 text-xs text-platinum placeholder-neutral-600 focus:outline-none focus:border-gold-premium/40 transition-colors resize-none leading-relaxed"
                  placeholder="Outline parameters of your intent..."
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-neutral-900 to-neutral-950 hover:from-neutral-850 hover:to-neutral-900 border border-neutral-800 text-gold-premium hover:text-platinum text-xs uppercase font-semibold tracking-widest py-3 rounded-lg transition-all duration-300 shadow-xl"
              >
                Transmit Encryption Request
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}