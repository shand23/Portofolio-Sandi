import React, { useState, useEffect } from 'react';
import {
  Globe,
  ChevronDown
} from 'lucide-react';
import { WhatsAppIcon } from '../components/SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function HeroSection() {
  const { personal } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = personal.roles[roleIndex];
    const speed = isDeleting ? 30 : 70;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedRole(current.substring(0, displayedRole.length + 1));
        if (displayedRole === current) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setDisplayedRole(current.substring(0, displayedRole.length - 1));
        if (displayedRole === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personal.roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex, personal.roles]);

  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-screen pt-20 pb-10 flex flex-col justify-between overflow-hidden bg-[#060608]">

      {/* Top Banner Bar - Clean Minimal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-2 mb-2">
        <div className="flex items-center justify-between gap-4 text-xs font-mono border-b border-neutral-900 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
            <span className="text-red-500 font-bold uppercase tracking-widest text-[11px] sm:text-xs">
              PERANCANG SISTEM & KREATOR MULTIMEDIA
            </span>
          </div>

          <div className="text-neutral-500 text-[11px] font-mono hidden sm:block">
            ALUMNI UTY // S.KOM
          </div>
        </div>
      </div>

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex items-center py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">

          {/* Kolom Kiri: Teks & Identitas */}
          <div className="lg:col-span-6 space-y-5 text-left">

            {/* Handwritten cursive greeting */}
            <div className="font-script text-2xl sm:text-3xl text-red-500 font-bold -mb-2 tracking-wide">
              {personal.greeting}
            </div>

            {/* Compact & Bold Name */}
            <div>
              <h1 className="font-bebas text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-none font-black uppercase">
                {personal.shortName} <br />
                <span className="text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                  {personal.lastName}
                </span>
              </h1>

              {/* Dynamic typing subtitle in red */}
              <div className="mt-2 text-xs sm:text-sm font-mono font-bold text-red-500 tracking-wider uppercase flex items-center gap-2">
                <span>//</span>
                <span>{displayedRole}</span>
                <span className="w-1.5 h-3.5 bg-white animate-pulse"></span>
              </div>
            </div>

            {/* Narrative Description (Compact, Pure White, Mudah Dibaca) */}
            <p className="text-xs sm:text-sm text-white font-normal leading-relaxed max-w-xl opacity-90">
              {personal.bio}
            </p>

            {/* Location & Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121216] border border-red-500/30 text-[11px] sm:text-xs text-white">
              <Globe size={13} className="text-red-500 animate-spin-slow" />
              <span className="font-mono text-red-400 font-bold">TERSEDIA:</span>
              <span>Magelang & Yogyakarta // Remote Friendly</span>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/62${personal.whatsapp.substring(1)}?text=Halo%20Sandi,%20saya%20melihat%20portofolio%20Anda%20dan%20ingin%20berdiskusi.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-red-600 hover:bg-red-700 shadow-[0_0_20px_rgba(239,68,68,0.45)] hover:shadow-[0_0_30px_rgba(239,68,68,0.7)] hover:-translate-y-0.5 transition-all"
              >
                <WhatsAppIcon size={16} className="text-white" />
                <span>WhatsApp Langsung</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-medium text-white hover:text-red-400 border border-neutral-800 hover:border-red-500/40 transition-all bg-neutral-900/60"
              >
                <span>Lihat Proyek & Skill</span>
                <ChevronDown size={14} className="text-red-500" />
              </a>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* Kolom Kanan: Foto Resmi Sandi (Ukuran Ideal & Proporsional di Desktop, Rapi di HP) */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 relative flex items-end justify-center lg:justify-end mt-8 lg:mt-0 self-end">
            <div className="relative w-full max-w-[320px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-none z-10 flex justify-center lg:justify-end lg:translate-x-12 lg:translate-y-8">

              {/* Aura Pendar Merah di Balik Foto */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[65%] w-[80%] lg:w-[480px] xl:w-[540px] aspect-square bg-red-600/30 rounded-full blur-[80px] lg:blur-[110px] pointer-events-none"></div>

              {/* Foto Resmi Sandi: Skala Pas Ideal (Dikurangi 1x dari sebelumnya) */}
              <img
                src="/sandi-photo.png"
                alt="Sandi Putra Pratama, S.Kom"
                className="w-full sm:w-auto h-auto max-h-[420px] sm:max-h-[500px] lg:max-h-none lg:w-[750px] xl:w-[900px] 2xl:w-[1050px] object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] lg:scale-[1.45] xl:scale-[1.65] origin-bottom transition-all duration-300"
              />

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <div className="max-w-7xl mx-auto px-4 w-full pt-4 flex items-center justify-center text-[11px] font-mono text-neutral-500 border-t border-neutral-900">
        <a href="#projects" className="flex items-center gap-1.5 text-white hover:text-red-400 transition-colors">
          <span>SCROLL KE BAWAH</span>
          <ChevronDown size={13} className="text-red-500 animate-bounce" />
        </a>
      </div>

    </section>
  );
}
