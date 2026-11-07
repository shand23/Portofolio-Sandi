import React from 'react';
import { ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ProjectsSection() {
  const { featuredProjects } = portfolioData;

  // Preview proyek dengan dukungan gambar screenshot nyata
  const projectPreviews = [
    {
      image: "/project-scm.png",
      accentTag: "SUPPLY CHAIN",
      badge: "SISTEM INFORMASI",
    },
    {
      image: "/project-elearning.jpg",
      accentTag: "E-LEARNING",
      badge: "CANVA & MULTIMEDIA",
    },
    {
      image: "/project-apparel.jpg",
      accentTag: "APPAREL DESIGN",
      badge: "MERCHANDISE & KREATIF",
    }
  ];

  return (
    <section id="projects" className="relative py-20 bg-[#060608] border-t border-neutral-900 overflow-hidden">
      
      {/* Background subtle glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-[170px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header dengan Font Style seperti PENDIDIKAN, PENGALAMAN & KEAHLIAN */}
        <div className="mb-12 pb-4 border-b border-neutral-900">
          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl tracking-wide text-white leading-none">
            PROYEK <span className="text-red-500">PILIHAN</span>
          </h2>
        </div>

        {/* 3 Grid Projects Card - Presisi Seperti Referensi Foto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.slice(0, 3).map((project, idx) => {
            const preview = projectPreviews[idx] || projectPreviews[0];

            return (
              <div key={project.id} className="group cursor-pointer">
                
                {/* 1. Layar Mockup Preview Gambar (Aspect Ratio 16:10 Sesuai Referensi) */}
                <div className={`relative aspect-[16/10] w-full rounded-lg ${preview.image ? 'bg-neutral-950' : `bg-gradient-to-br ${preview.bgGradient}`} border border-neutral-800 group-hover:border-red-500/60 transition-all duration-300 p-5 flex flex-col justify-between overflow-hidden shadow-2xl`}>
                  
                  {/* Jika ada gambar screenshot proyek, jadikan background cover dengan overlay halus */}
                  {preview.image && (
                    <>
                      <img
                        src={preview.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover object-top opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                    </>
                  )}

                  {/* Watermark Tag di dalam Mockup */}
                  <div className="relative z-10 flex items-center justify-between text-[10px] font-mono tracking-wider text-neutral-500">
                    <span className="text-red-500 font-bold bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded border border-red-500/30">
                      {preview.accentTag}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/10 text-white font-medium">
                      {preview.badge}
                    </span>
                  </div>

                  {/* Headline Mockup (Hanya tampil jika belum ada gambar) */}
                  {!preview.image && (
                    <div className="space-y-1 relative z-10">
                      <h4 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide leading-tight group-hover:text-red-400 transition-colors">
                        {preview.headline}
                      </h4>
                      <p className="text-[10px] font-mono text-neutral-400 tracking-widest">
                        {preview.subline}
                      </p>
                    </div>
                  )}

                  {/* Garis Aksen Bawah Mockup */}
                  <div className="relative z-10 w-8 h-[2px] bg-red-600 group-hover:w-16 transition-all duration-300"></div>
                </div>

                {/* 2. Baris Keterangan di Bawah Gambar (Nomor Merah + Judul + Panah) */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-start gap-3">
                    {/* Nomor Merah Tegas (01, 02, 03) */}
                    <span className="font-bebas text-2xl sm:text-3xl text-red-500 font-black leading-none tracking-widest">
                      {project.id}
                    </span>

                    {/* Judul & Kategori */}
                    <div>
                      <h3 className="font-bebas text-base sm:text-lg text-white tracking-wider leading-none group-hover:text-red-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mt-1">
                        {project.category}
                      </p>
                    </div>
                  </div>

                  {/* Ikon Panah Minimalis */}
                  <ArrowRight size={16} className="text-neutral-500 group-hover:text-red-500 group-hover:translate-x-1.5 transition-all" />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
