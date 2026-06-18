"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Overview', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Subsidiaries', href: '/subsidiaries' },
    { name: 'Governance', href: '/governance' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-obsidian/80 backdrop-blur-md border-b border-neutral-900/60">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Institutional Premium Brand Signifier */}
        <Link href="/" className="flex flex-row items-center space-x-3.5 group select-none">
          
          {/* Custom Elegant Serif Monogram */}
          <span className="font-serif text-3xl font-light tracking-tighter bg-gradient-to-b from-gold-premium via-amber-400 to-amber-600 bg-clip-text text-transparent transform group-hover:scale-102 transition-transform antialiased">
            M
          </span>

          {/* Minimalist Architectural Accent Line */}
          <div className="h-7 w-[1px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent" />

          {/* High-Contrast Corporate Typography Hierarchy */}
          <div className="flex flex-col justify-center">
            <span className="text-sm font-semibold tracking-[0.22em] text-platinum uppercase group-hover:text-gold-premium transition-colors leading-none">
              MUNDALAMO
            </span>
            <span className="text-[9px] tracking-[0.38em] text-neutral-500 uppercase font-mono mt-1.5 leading-none">
              Corporate Holdings
            </span>
          </div>
        </Link>

        {/* Desktop Interface Link Lineup */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs uppercase tracking-[0.2em] transition-all duration-200 hover:text-gold-premium ${
                isActive(link.href) ? 'text-gold-premium font-medium' : 'text-neutral-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Trigger Menu Toggle Button (Animated Hamburger) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col items-end space-y-1.5 focus:outline-none p-2"
          aria-label="Toggle Navigation Framework"
        >
          <span className={`h-0.5 bg-platinum transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
          <span className={`h-0.5 bg-platinum transition-all duration-300 ${isOpen ? 'w-0 opacity-0' : 'w-4'}`} />
          <span className={`h-0.5 bg-platinum transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`} />
        </button>
      </div>

      {/* Drawer Mobile Dropdown Panel - Fixed Layout Heights for Devices */}
      <div 
        className={`md:hidden fixed inset-x-0 bg-obsidian border-b border-neutral-900 transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'top-20 opacity-100 visible h-auto py-8' : 'top-20 opacity-0 invisible h-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col space-y-6 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-sm uppercase tracking-[0.2em] block py-1 ${
                isActive(link.href) ? 'text-gold-premium font-medium' : 'text-neutral-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}