import React, { useState, useEffect } from 'react';
import { Menu, X, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['hero', 'projects', 'experience-skills', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Profil Saya', href: '#hero', id: 'hero' },
    { name: 'Proyek Pilihan', href: '#projects', id: 'projects' },
    { name: 'Pengalaman', href: '#experience-skills', id: 'experience-skills' },
    { name: 'kontak', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060608]/90 backdrop-blur-md py-3 border-b border-red-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.85)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Minimalis */}
          <a
            href="#hero"
            className="flex items-center group text-2xl font-black tracking-wider text-white"
          >
            <span className="font-bebas tracking-wide text-2xl sm:text-3xl">
              SANDI <span className="text-red-500">PRATAMA</span>
            </span>
          </a>

          {/* Desktop Navigation - Clean Minimalist Text Style (Tanpa Kotak/Pills) */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-xs font-mono font-bold uppercase tracking-widest transition-all duration-200 relative group py-1 ${
                    isActive
                      ? 'text-red-500'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {/* Subtle red indicator underline on active/hover */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-red-500 transition-all duration-300 ${
                      isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                    }`}
                  ></span>
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase text-white bg-red-600 hover:bg-red-700 shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.7)] hover:-translate-y-0.5 transition-all"
            >
              <Send size={14} className="text-white" />
              <span>Hubungi Saya</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-red-500 hover:text-white hover:bg-red-600/20 transition-colors cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={22} className="text-red-500" /> : <Menu size={22} className="text-red-500" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0c10]/98 backdrop-blur-xl border-b border-red-500/20 px-6 py-6 space-y-4 shadow-2xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-mono font-bold uppercase tracking-wider transition-colors flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-red-600/20 text-white border border-red-500/30'
                    : 'text-gray-300 hover:text-white hover:bg-neutral-800/50'
                }`}
              >
                <span>{link.name}</span>
                <span className="text-red-500">→</span>
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-neutral-800">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all"
            >
              <Send size={15} className="text-white" />
              <span>Hubungi Sandi Sekarang</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
