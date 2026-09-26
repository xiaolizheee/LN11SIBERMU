/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language, FocusMode } from './types';
import { WorldClockBar } from './components/WorldClockBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { AcademicSection } from './components/AcademicSection';
import { GlobalNetworkSection } from './components/GlobalNetworkSection';
import { InstagramFeedSection } from './components/InstagramFeedSection';
import { AdmissionSection } from './components/AdmissionSection';
import { FaqSection } from './components/FaqSection';
import { WhatsAppDrawer } from './components/WhatsAppDrawer';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('id');
  const [focusMode, setFocusMode] = useState<FocusMode>('all');
  const [activeSection, setActiveSection] = useState<string>('beranda');

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* 1. Real-time World Clock Bar for Global Students */}
      <WorldClockBar lang={lang} />

      {/* 2. Top Bar Navigation (3-Zone Contract) */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        onNavigate={handleNavigate}
        activeSection={activeSection}
      />

      {/* Main Content Areas */}
      <main className="flex-1">
        {/* Hero Section with Perspective Mode Switcher */}
        <HeroSection
          lang={lang}
          focusMode={focusMode}
          onFocusModeChange={setFocusMode}
          onNavigate={handleNavigate}
        />

        {/* View Mode: Flagship / All */}
        {focusMode === 'all' && (
          <>
            <AboutSection lang={lang} />
            <AcademicSection lang={lang} />
            <GlobalNetworkSection lang={lang} />
            <InstagramFeedSection lang={lang} />
            <AdmissionSection lang={lang} />
            <FaqSection lang={lang} />
          </>
        )}

        {/* View Mode: Focused on Admission & Intake */}
        {focusMode === 'admission' && (
          <>
            <AdmissionSection lang={lang} />
            <AcademicSection lang={lang} />
            <FaqSection lang={lang} />
          </>
        )}

        {/* View Mode: Focused on Community & Batch 11 Profile */}
        {focusMode === 'community' && (
          <>
            <AboutSection lang={lang} />
            <GlobalNetworkSection lang={lang} />
            <InstagramFeedSection lang={lang} />
          </>
        )}

        {/* View Mode: Focused on Academic & LMS */}
        {focusMode === 'academic' && (
          <>
            <AcademicSection lang={lang} />
            <InstagramFeedSection lang={lang} />
            <FaqSection lang={lang} />
          </>
        )}
      </main>

      {/* Floating WhatsApp Live Chat Gateway */}
      <WhatsAppDrawer lang={lang} />

      {/* Quiet Refined Footer */}
      <Footer lang={lang} onNavigate={handleNavigate} />
    </div>
  );
}
