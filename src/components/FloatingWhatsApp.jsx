import React from 'react';
import { WhatsAppIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function FloatingWhatsApp() {
  const { personal } = portfolioData;

  const url = `https://wa.me/62${personal.whatsapp.substring(1)}?text=Halo%20Sandi,%20saya%20melihat%20portofolio%20Anda%20dan%20ingin%20berdiskusi%20peluang%20kerja%20sama.`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#111116]/95 backdrop-blur-md border border-red-500/40 text-white shadow-[0_0_20px_rgba(239,68,68,0.35)] hover:shadow-[0_0_30px_rgba(239,68,68,0.65)] hover:border-red-500 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
      title="Hubungi Sandi via WhatsApp"
    >
      <div className="w-7 h-7 rounded-full bg-red-600/20 border border-red-500 flex items-center justify-center">
        <WhatsAppIcon size={16} className="text-red-500 group-hover:scale-110 transition-transform" />
      </div>
      <span className="text-xs font-mono font-bold tracking-wide text-white hidden sm:inline">
        Chat WhatsApp
      </span>
    </a>
  );
}
