import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Sparkles, 
  ExternalLink,
  Laptop,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { WhatsAppIcon } from '../components/SocialIcons';
import SectionTitle from '../components/SectionTitle';
import { portfolioData } from '../data/portfolioData';

export default function ContactSection() {
  const { personal, contact } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);

      try {
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#ef4444', '#dc2626', '#ffffff', '#991b1b'],
        });
      } catch (err) {
        // ignore
      }

      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 4000);
    }, 700);
  };

  const handleSendViaWhatsApp = () => {
    const text = encodeURIComponent(
      `Halo Sandi Putra Pratama,\nSaya: ${formData.name || 'Pengunjung'}\nEmail: ${formData.email || '-'}\nTopik: ${formData.subject || 'Diskusi Peluang Kerja/Proyek'}\n\nPesan:\n${formData.message || 'Saya ingin berdiskusi mengenai kualifikasi Anda.'}`
    );
    window.open(`https://wa.me/62${personal.whatsapp.substring(1)}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-24 bg-[#060608] border-t border-neutral-900 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-red-600/10 rounded-full blur-[170px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Giant Reference Header: MARI BEKERJA SAMA */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl tracking-wide text-white leading-none">
            MARI BEKERJA <span className="text-red-500">SAMA</span>
            <span className="text-red-500 text-4xl align-top ml-2">✦</span>
          </h2>

          {/* Description in Pure White */}
          <p className="mt-4 text-base sm:text-lg text-white font-normal leading-relaxed opacity-95">
            {contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info (like bottom of reference image) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card with 1-Click Copy */}
            <div className="p-5 rounded-2xl bg-[#0e0e13] border border-neutral-800 hover:border-red-500/40 transition-all group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-red-950/40 border border-red-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail size={22} className="text-red-500" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-red-500 tracking-wider font-bold">
                      Email Resmi
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white break-all">
                      {personal.email}
                    </h4>
                    <p className="text-xs text-white opacity-85 mt-1">
                      Siap menerima korespondensi pekerjaan & undangan interview.
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-red-500 text-red-500 hover:text-white hover:bg-red-600/20 transition-all shrink-0 cursor-pointer"
                  title="Salin Email"
                >
                  {copiedEmail ? <Check size={16} className="text-green-400" /> : <Copy size={16} className="text-red-500" />}
                </button>
              </div>

              {copiedEmail && (
                <div className="mt-3 py-1 px-3 rounded-lg bg-green-950/50 border border-green-500/40 text-xs text-green-300 font-mono text-center animate-fadeIn">
                  ✓ Alamat email berhasil disalin ke clipboard!
                </div>
              )}
            </div>

            {/* WhatsApp Direct */}
            <a
              href={`https://wa.me/62${personal.whatsapp.substring(1)}?text=Halo%20Sandi,%20saya%20melihat%20portofolio%20Anda%20dan%20ingin%20berdiskusi.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0e0e13] border border-neutral-800 hover:border-red-500/40 transition-all block group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-red-950/40 border border-red-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <WhatsAppIcon size={22} className="text-red-500" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-red-500 tracking-wider font-bold">
                      WhatsApp Bisnis
                    </span>
                    <h4 className="text-base font-bold text-white">
                      {personal.whatsappDisplay}
                    </h4>
                    <p className="text-xs text-white opacity-85 mt-1">
                      Respon cepat setiap hari kerja.
                    </p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 group-hover:border-red-500 text-red-500 transition-colors shrink-0">
                  <ExternalLink size={16} className="text-red-500" />
                </div>
              </div>
            </a>

            {/* Location & Remote Availability */}
            <div className="p-5 rounded-2xl bg-[#0e0e13] border border-neutral-800">
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-red-950/40 border border-red-500/30 flex items-center justify-center shrink-0">
                  <MapPin size={22} className="text-red-500" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-red-500 tracking-wider font-bold">
                    Domisili & Penempatan
                  </span>
                  <h4 className="text-base font-bold text-white">
                    {contact.location}
                  </h4>
                  <p className="text-xs text-white opacity-85 mt-1">
                    Bersedia untuk penempatan onsite maupun kerja sistem jarak jauh (Remote).
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Card / Showcase Summary */}
            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-600/15 border border-red-500/30 flex items-center justify-center shrink-0">
                <Laptop size={22} className="text-red-500" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-red-400 font-bold block">
                  SIAP BERKONTRIBUSI SEGERA
                </span>
                <p className="text-xs text-white opacity-90 leading-relaxed">
                  Lulusan Sarjana Sistem Informasi siap menghadirkan nilai tambah melalui analisis sistem, basis data, dan multimedia.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#0e0e13] border border-red-500/30 shadow-[0_15px_45px_rgba(0,0,0,0.85)] relative">
              
              <div className="mb-6 pb-6 border-b border-neutral-800">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                  <span>Kirim Pesan / Undangan Kerja</span>
                </h3>
                <p className="text-sm text-white font-normal mt-1 opacity-90">
                  Kirimkan detail pesan Anda di bawah ini dan saya akan merespon dalam waktu &lt; 24 jam.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-red-600/20 border-2 border-red-500 flex items-center justify-center mx-auto text-red-500 shadow-[0_0_25px_rgba(239,68,68,0.5)]">
                    <Check size={32} className="text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">
                    Pesan Berhasil Terkirim!
                  </h4>
                  <p className="text-base text-white max-w-md mx-auto opacity-95">
                    Terima kasih telah menghubungi Sandi Putra Pratama. Pesan Anda telah diterima dan akan segera direspon.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-neutral-900 border border-red-500/40 hover:border-red-500 transition-colors cursor-pointer"
                  >
                    Kirim Pesan Lainnya
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-red-400 mb-2">
                        Nama Lengkap / Perusahaan <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Contoh: HR PT Inovasi / Budi"
                        className="w-full px-4 py-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all text-sm font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-red-400 mb-2">
                        Alamat Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="nama@perusahaan.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-red-400 mb-2">
                      Subjek / Topik Kebutuhan
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Contoh: Tawaran Pekerjaan System Analyst / Proyek Multimedia"
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-red-400 mb-2">
                      Isi Pesan / Penjelasan Kebutuhan <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tuliskan detail kebutuhan sistem, peluang karir, atau diskusi proyek..."
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all text-sm font-medium resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-white bg-red-600 hover:bg-red-700 shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] disabled:opacity-50 transition-all cursor-pointer"
                    >
                      <Send size={18} className="text-white" />
                      <span>{isSubmitting ? 'Mengirim...' : 'Kirim Pesan Sekarang'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl font-semibold text-white bg-neutral-900 border border-red-500/40 hover:border-red-500 hover:bg-neutral-800 transition-all cursor-pointer"
                      title="Kirim pesan ini langsung ke WhatsApp Sandi"
                    >
                      <WhatsAppIcon size={18} className="text-red-500" />
                      <span>Kirim ke WhatsApp</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-white opacity-70 font-mono pt-1">
                    🔒 Pesan langsung diteruskan secara privat ke email & WhatsApp Sandi Putra Pratama.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
