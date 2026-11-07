import React from 'react';
import { 
  Sparkles, 
  Quote, 
  ArrowRight, 
  GraduationCap, 
  Building, 
  Calendar,
  CheckCircle2
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceSkillsSection() {
  const { education, experience } = portfolioData;

  // Daftar skill disesuaikan persis dengan gambar keahlian yang diunggah
  const skillsList = [
    "JAVASCRIPT",
    "LARAVEL 11",
    "PHP",
    "MYSQL",
    "HTML",
    "CSS",
    "ERD",
    "UML",
    "PEMODELAN SISTEM",
    "PERANCANGAN BASIS DATA",
    "ANALISIS KEBUTUHAN & PERANCANGAN SISTEM",
    "MULTIMEDIA",
    "MICROSOFT OFFICE",
    "MANAJEMEN TIM",
    "KOORDINASI TIM",
    "PENGAMBILAN KEPUTUSAN",
    "KOMUNIKASI",
    "KOLABORASI"
  ];

  return (
    <section id="experience-skills" className="relative py-24 bg-[#08080b] border-t border-neutral-900 overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-800/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Top Header */}
        <div className="mb-14 pb-4 border-b border-neutral-900">
          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl tracking-wide text-white leading-none">
            PENDIDIKAN, PENGALAMAN & <span className="text-red-500">KEAHLIAN</span>
          </h2>
        </div>

        {/* 2-Column Layout (Center): Kolom 1 (Pendidikan & Keahlian) & Kolom 2 (Pengalaman & Organisasi) */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ================= KOLOM 1: PENDIDIKAN & KEAHLIAN (6 Cols) ================= */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#0e0e13] border border-neutral-800 shadow-xl space-y-7">
            
            {/* Main Header */}
            <div>
              <h3 className="font-bebas text-2xl sm:text-3xl tracking-wider text-white">
                PENDIDIKAN & KEAHLIAN
              </h3>
            </div>

            {/* Sub-section 1: PENDIDIKAN (Red subhead) */}
            <div>
              <span className="text-xs font-mono uppercase text-red-500 font-bold tracking-widest block mb-4">
                PENDIDIKAN
              </span>

              <div className="space-y-5">
                {education.map((edu, idx) => (
                  <div key={idx} className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-neutral-400 mt-0.5">
                        {edu.institution}
                      </p>
                      <p className="text-[11px] font-mono text-red-400 mt-1">
                        {edu.score}
                      </p>
                    </div>

                    <span className="text-xs font-mono font-bold text-red-500 shrink-0">
                      {edu.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider Line */}
            <div className="border-t border-neutral-800"></div>

            {/* Sub-section 2: KEAHLIAN (Red subhead + Pill Grid) */}
            <div>
              <span className="text-xs font-mono uppercase text-red-500 font-bold tracking-widest block mb-4">
                KEAHLIAN
              </span>

              {/* Exact Pill Grid matching reference screenshot media_1794055654205_bc3d8b93.png */}
              <div className="flex flex-wrap gap-2">
                {skillsList.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="px-3 py-2 rounded-lg bg-[#14141a] border border-neutral-800 hover:border-red-500/60 hover:bg-neutral-800 transition-all text-[11px] font-mono font-medium text-white tracking-wider cursor-default shadow-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ================= KOLOM 2: PENGALAMAN & ORGANISASI (6 Cols) ================= */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#0e0e13] border border-neutral-800 shadow-xl">
            
            <div className="mb-6 pb-4 border-b border-neutral-800 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase text-red-500 font-bold tracking-widest block">
                  KARIER & KEPEMIMPINAN
                </span>
                <h3 className="font-bebas text-2xl sm:text-3xl tracking-wider text-white">
                  PENGALAMAN & ORGANISASI
                </h3>
              </div>
              <Sparkles size={18} className="text-red-500" />
            </div>

            {/* Vertical Chain with Circular Nodes 01, 02, 03, 04, 05 */}
            <div className="relative pl-8 space-y-7 border-l-2 border-red-500/30">
              
              {/* 01: PT Saga Hikari */}
              <div className="relative group">
                <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-[#08080b] border-2 border-red-500 flex items-center justify-center text-xs font-mono font-bold text-red-500 group-hover:bg-red-600 group-hover:text-white shadow-[0_0_12px_rgba(239,68,68,0.4)] transition-all">
                  01
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider group-hover:text-red-400 transition-colors">
                    PT. SAGA HIKARI TEKNINDO SEJATI
                  </h4>
                  <p className="text-xs font-mono text-red-500 font-semibold mt-0.5">
                    Magang Kerja E-Learning & Multimedia // Sep 2025 – Jan 2026
                  </p>
                  <p className="text-xs text-white font-normal leading-relaxed mt-2 opacity-95">
                    Membuat 9 video pembelajaran berbasis Canva untuk program e-learning internal (K3, 5R, Caliper, Mikrometer) yang terintegrasi ke LMS, serta menyusun soal pilihan ganda evaluasi pelatihan.
                  </p>
                </div>
              </div>

              {/* 02: PT Swevel Universal Media */}
              <div className="relative group">
                <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-[#08080b] border-2 border-red-500 flex items-center justify-center text-xs font-mono font-bold text-red-500 group-hover:bg-red-600 group-hover:text-white shadow-[0_0_12px_rgba(239,68,68,0.4)] transition-all">
                  02
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider group-hover:text-red-400 transition-colors">
                    PT. SWEVEL UNIVERSAL MEDIA
                  </h4>
                  <p className="text-xs font-mono text-red-500 font-semibold mt-0.5">
                    Kerja Praktik System Analyst & Designer // Feb – Jun 2025
                  </p>
                  <p className="text-xs text-white font-normal leading-relaxed mt-2 opacity-95">
                    Merancang sistem Manajemen Rantai Pasok Material melalui analisis kebutuhan pengguna, perancangan basis data relasional, dan pemodelan diagram UML (Use Case, Activity, Sequence Diagram).
                  </p>
                </div>
              </div>

              {/* 03: UKK UTY */}
              <div className="relative group">
                <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-[#08080b] border-2 border-red-500 flex items-center justify-center text-xs font-mono font-bold text-red-500 group-hover:bg-red-600 group-hover:text-white shadow-[0_0_12px_rgba(239,68,68,0.4)] transition-all">
                  03
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider group-hover:text-red-400 transition-colors">
                    UKK UNIVERSITAS TEKNOLOGI YOGYAKARTA
                  </h4>
                  <p className="text-xs font-mono text-red-500 font-semibold mt-0.5">
                    Ketua Divisi Kerohanian // Sep 2024 – Sep 2025
                  </p>
                  <p className="text-xs text-white font-normal leading-relaxed mt-2 opacity-95">
                    Memimpin persiapan dan penyusunan agenda kegiatan rutin, mendelegasikan tugas anggota sesuai kompetensi, mengambil keputusan strategis, serta kolaborasi dengan pihak eksternal kampus.
                  </p>
                </div>
              </div>

              {/* 04: PEPARNAS XVI & PON XX Papua */}
              <div className="relative group">
                <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-[#08080b] border-2 border-red-500 flex items-center justify-center text-xs font-mono font-bold text-red-500 group-hover:bg-red-600 group-hover:text-white shadow-[0_0_12px_rgba(239,68,68,0.4)] transition-all">
                  04
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider group-hover:text-red-400 transition-colors">
                    PEPARNAS XVI & PON XX PAPUA
                  </h4>
                  <p className="text-xs font-mono text-red-500 font-semibold mt-0.5">
                    Choir Talent & Volunteer Nasional // Sep – Nov 2021
                  </p>
                  <p className="text-xs text-white font-normal leading-relaxed mt-2 opacity-95">
                    Berpartisipasi sebagai Choir Talent Opening Ceremony disiarkan nasional bersama musisi Anggun C. Sasmi, serta menjadi relawan persiapan logistik, transportasi, dan konsumsi tim atlet PON XX.
                  </p>
                </div>
              </div>

              {/* 05: Sekretariat DPR Papua */}
              <div className="relative group">
                <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-[#08080b] border-2 border-red-500 flex items-center justify-center text-xs font-mono font-bold text-red-500 group-hover:bg-red-600 group-hover:text-white shadow-[0_0_12px_rgba(239,68,68,0.4)] transition-all">
                  05
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider group-hover:text-red-400 transition-colors">
                    DPR PAPUA
                  </h4>
                  <p className="text-xs font-mono text-red-500 font-semibold mt-0.5">
                    Praktik Kerja Lapangan // Mar – Agu 2020
                  </p>
                  <p className="text-xs text-white font-normal leading-relaxed mt-2 opacity-95">
                    Mengelola pengarsipan surat administrasi masuk dan keluar secara sistematis, serta mengelompokkan arsip berdasarkan klasifikasi untuk mempercepat temu kembali dokumen.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
