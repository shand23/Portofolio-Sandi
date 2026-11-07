import React from 'react';
import Navbar from './components/Navbar';
import BackgroundCanvas from './components/BackgroundCanvas';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSkillsSection from './sections/ExperienceSkillsSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#060608] text-white selection:bg-red-600 selection:text-white">
      {/* Interactive Particle Background Canvas */}
      <BackgroundCanvas />

      {/* Main Navigation Bar */}
      <Navbar />

      {/* 4 Main Sections */}
      <main className="relative z-10">
        {/* SECTION 1: HIRO (HERO) */}
        <HeroSection />

        {/* SECTION 2: PROYEK PILIHAN (SELECTED PROJECTS) */}
        <ProjectsSection />

        {/* SECTION 3: EDUKASI, PENGALAMAN & SKILL (3-COLUMN LAYOUT) */}
        <ExperienceSkillsSection />

        {/* SECTION 4: KONTAK (LET'S WORK TOGETHER) */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Action Helpers */}
      <ScrollToTop />
      <FloatingWhatsApp />
    </div>
  );
}
