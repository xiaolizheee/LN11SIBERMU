import React, { useState } from 'react';
import { Menu, X, ExternalLink, Globe } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  onNavigate,
  activeSection
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'beranda', labelId: 'Beranda', labelEn: 'Home' },
    { id: 'tentang-kami', labelId: 'Tentang Kami', labelEn: 'About Us' },
    { id: 'akademik', labelId: 'Akademik & LMS', labelEn: 'Academic & LMS' },
    { id: 'komunitas', labelId: 'Jaringan Global', labelEn: 'Global Network' },
    { id: 'pengumuman', labelId: 'Kabar & Feed', labelEn: 'News & Feed' },
    { id: 'pendaftaran', labelId: 'Admisi', labelEn: 'Admission' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/95 border-b border-slate-800/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#beranda"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('beranda');
          }}
          className="font-serif-title text-lg sm:text-xl font-bold tracking-tight text-white hover:text-amber-300 transition-colors whitespace-nowrap"
        >
          Manajemen 11 Sibermu
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`transition-colors whitespace-nowrap py-1 relative ${
                activeSection === link.id
                  ? 'text-amber-400 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {lang === 'id' ? link.labelId : link.labelEn}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Toggle */}
          <button
            onClick={() => onLanguageChange(lang === 'id' ? 'en' : 'id')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-medium text-slate-300 hover:text-white border border-slate-700 hover:border-slate-600 transition-colors"
            title="Switch Language (ID/EN)"
          >
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-mono uppercase">{lang}</span>
          </button>

          {/* Primary Action Button */}
          <button
            onClick={() => handleNavClick('pendaftaran')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded transition-colors whitespace-nowrap shadow-sm"
          >
            {lang === 'id' ? 'Daftar Sekarang' : 'Apply Now'}
          </button>

          {/* LMS Portal External link */}
          <a
            href="https://sibermu.ac.id"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded transition-colors whitespace-nowrap"
          >
            <span>Portal LMS</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950/98 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-slate-900 text-amber-400 font-semibold'
                    : 'text-slate-300 hover:bg-slate-900/60 hover:text-white'
                }`}
              >
                {lang === 'id' ? link.labelId : link.labelEn}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('pendaftaran')}
              className="w-full text-center py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 rounded"
            >
              {lang === 'id' ? 'Daftar Calon Mahasiswa' : 'Register as New Student'}
            </button>
            <a
              href="https://sibermu.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-1.5 py-2.5 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded"
            >
              <span>{lang === 'id' ? 'Kunjungi sibermu.ac.id' : 'Visit sibermu.ac.id'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
