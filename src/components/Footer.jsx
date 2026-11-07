import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  MapPin, 
  Phone 
} from 'lucide-react';
import { GithubIcon, InstagramIcon, LinkedinIcon, WhatsAppIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal, socials } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case 'Github':
        return <GithubIcon size={18} className="text-red-500" />;
      case 'Linkedin':
        return <LinkedinIcon size={18} className="text-red-500" />;
      case 'WhatsApp':
        return <WhatsAppIcon size={18} className="text-red-500" />;
      case 'Instagram':
        return <InstagramIcon size={18} className="text-red-500" />;
      case 'Mail':
        return <Mail size={18} className="text-red-500" />;
      default:
        return <InstagramIcon size={18} className="text-red-500" />;
    }
  };

  return (
    <footer className="relative bg-[#050507] border-t border-neutral-900 pt-16 pb-12 overflow-hidden">
      
      {/* Decorative top red gradient line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          
          {/* Brand & Narrative */}
          <div className="md:col-span-5 space-y-4">
            <a href="#hero" className="inline-flex items-center group text-2xl font-black text-white">
              <span className="font-bebas tracking-wide text-2xl">
                SANDI <span className="text-red-500">PRATAMA</span>
              </span>
            </a>

            <p className="text-sm text-white font-normal leading-relaxed opacity-90 max-w-sm">
              Lulusan Sarjana Sistem Informasi Universitas Teknologi Yogyakarta. Berfokus pada perancangan sistem terintegrasi, basis data, dan multimedia edukasi.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-red-500 flex items-center justify-center hover:bg-red-950/40 hover:shadow-[0_0_12px_rgba(239,68,68,0.3)] transition-all"
                  title={s.name}
                >
                  {getSocialIcon(s.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="text-white hover:text-red-400 transition-colors">
                  Profil Saya
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white hover:text-red-400 transition-colors">
                  Proyek Pilihan
                </a>
              </li>
              <li>
                <a href="#experience-skills" className="text-white hover:text-red-400 transition-colors">
                  Pengalaman
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-red-400 transition-colors">
                  kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">
              Hubungi Langsung
            </h4>
            <div className="space-y-2.5 text-sm text-white">
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-red-500 shrink-0" />
                <span className="opacity-95">{personal.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-red-500 shrink-0" />
                <span className="opacity-95">{personal.whatsappDisplay}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin size={16} className="text-red-500 shrink-0" />
                <span className="opacity-95">Magelang & D.I. Yogyakarta, Indonesia</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white opacity-80">
          <p>
            © {new Date().getFullYear()} Sandi Putra Pratama, S.Kom. Seluruh hak cipta dilindungi.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-red-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp size={14} className="text-red-500" />
          </button>
        </div>

      </div>
    </footer>
  );
}
