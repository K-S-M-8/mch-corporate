"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { corporateGovernance } from './mchData';

export default function Navbar() {
  const pathname = usePathname();

  // Define global corporate navigation configuration
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Subsidiaries', path: '/subsidiaries' },
    { name: 'Careers', path: '/careers' },
    { name: 'About', path: '/about' },
    { name: 'Governance', path: '/governance' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-obsidian/80 backdrop-blur-xl border-b border-neutral-900/40 select-none">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Institutional Monogram */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neutral-800 to-black border border-neutral-800 flex items-center justify-center font-serif text-gold-premium font-semibold text-xs tracking-wider group-hover:border-gold-premium/30 transition-all">
            M
          </div>
          <span className="text-xs uppercase font-semibold tracking-[0.25em] text-platinum font-sans group-hover:text-gold-premium transition-colors hidden sm:block">
            {corporateGovernance.shortName}
          </span>
        </Link>

        {/* Global Multi-Page Routing Links */}
        <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`text-[11px] font-medium uppercase tracking-wider px-3 py-2 rounded-lg transition-all ${
                  isActive 
                    ? 'text-gold-premium bg-neutral-900/40 font-semibold' 
                    : 'text-neutral-400 hover:text-platinum hover:bg-neutral-900/20'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

      </div>
    </nav>
  );
}