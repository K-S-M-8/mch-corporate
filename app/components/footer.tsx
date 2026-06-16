"use client";

import React from 'react';
import { corporateGovernance } from './mchData';

export default function Footer() {
  return (
    <footer className="w-full bg-obsidian border-t border-neutral-950 pt-16 pb-12 px-6 text-neutral-500 text-xs select-none">
      <div className="max-w-6xl mx-auto">
        
        {/* Executive Footnote */}
        <div className="border-b border-neutral-900 pb-8 mb-8 leading-relaxed max-w-4xl">
          <p>
            Institutional Access Disclaimer: {corporateGovernance.companyName} (Reg: {corporateGovernance.registrationNumber}) operates as a private centralized holding structure. Corporate applications, automated agentic intelligence, and technical research are powered and engineered by its subsidiary LADNU (Pty) Ltd.
          </p>
        </div>

        {/* Legal Matrix Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-normal tracking-tight">
          
          <div>
            <span className="text-neutral-400 font-medium">© {new Date().getFullYear()} {corporateGovernance.companyName}.</span> All rights reserved.
            <div className="text-[10px] text-neutral-600 mt-0.5">Director: {corporateGovernance.director} / Gauteng, South Africa</div>
          </div>

          {/* Signature Technology Stamp */}
          <div className="flex items-center space-x-2 bg-onyx px-3 py-1.5 rounded-full border border-neutral-900">
            <span className="w-1.5 h-1.5 bg-gold-premium rounded-full animate-pulse"></span>
            <span className="tracking-widest uppercase text-[9px] text-neutral-400 font-mono">
              Powered by <span className="text-platinum font-semibold font-sans tracking-tight lowercase">ladnu</span>
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}