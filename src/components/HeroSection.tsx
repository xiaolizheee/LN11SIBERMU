import React from 'react';
import { APP_CONTENT, STATS_DATA, HERO_IMAGE } from '../data/content';
import { ArrowRight, GraduationCap, Laptop, Sparkles, BookOpen } from 'lucide-react';
import { Language, FocusMode } from '../types';

interface HeroSectionProps {
  lang: Language;
  focusMode: FocusMode;
  onFocusModeChange: (mode: FocusMode) => void;
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  focusMode,
  onFocusModeChange,
  onNavigate,
}) => {
  const content = APP_CONTENT[lang];

  return (
    <section id="beranda" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      {/* Perspective Focus Bar to directly answer the user's brainstorming question */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="p-1.5 sm:p-2 bg-slate-900/90 border border-slate-800 rounded-xl flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-400 pl-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="font-medium text-slate-300">
              {lang === 'id' ? 'Pilih Sudut Pandang Tampilan:' : 'Select Portal View Mode:'}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5 w-full md:w-auto">
            <button
              onClick={() => onFocusModeChange('all')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                focusMode === 'all'
                  ? 'bg-amber-400 text-slate-950 font-semibold shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {lang === 'id' ? '🌟 Portal Lengkap' : '🌟 Flagship Full'}
            </button>
            <button
              onClick={() => onFocusModeChange('admission')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                focusMode === 'admission'
                  ? 'bg-amber-400 text-slate-950 font-semibold shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {lang === 'id' ? '🎯 Landing Admisi & Biaya' : '🎯 Admission Landing'}
            </button>
            <button
              onClick={() => onFocusModeChange('community')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                focusMode === 'community'
                  ? 'bg-amber-400 text-slate-950 font-semibold shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {lang === 'id' ? '👥 Profil Angkatan & Diaspora' : '👥 Community & Network'}
            </button>
            <button
              onClick={() => onFocusModeChange('academic')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                focusMode === 'academic'
                  ? 'bg-amber-400 text-slate-950 font-semibold shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {lang === 'id' ? '📚 Kurikulum & Portal LMS' : '📚 Academic & LMS'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Subtle editorial trust kicker */}
            <div className="flex items-center gap-2 text-xs text-amber-400/90 font-medium tracking-wide">
              <span>{content.university}</span>
              <span aria-hidden="true">·</span>
              <span>{content.subBrand}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">Angkatan 11</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight" style={{ textWrap: 'balance' }}>
              {content.tagline}
            </h1>

            <p className="text-base sm:text-lg text-amber-200/90 font-medium">
              {content.subTagline} — Kuliah S1 Manajemen Fleksibel dari Mancanegara
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {content.heroDescription}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('pendaftaran')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg shadow-md transition-colors"
              >
                <span>{content.ctaRegister}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('akademik')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>{content.ctaCurriculum}</span>
              </button>

              <a
                href="https://sibermu.ac.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors"
              >
                <Laptop className="w-4 h-4" />
                <span>{content.ctaLms}</span>
              </a>
            </div>

            {/* Trust badge icons */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-amber-400/80" />
                <span>Akreditasi BAN-PT & Ijazah Sah PDDikti</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Laptop className="w-4 h-4 text-blue-400/80" />
                <span>100% Pembelajaran Daring Ramah Shift</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <img
                  src={HERO_IMAGE}
                  alt="Mahasiswa PJJ Luar Negeri Manajemen Sibermu Belajar Daring"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    // Fallback container if image fails
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.classList.add('bg-gradient-to-br', 'from-blue-950', 'to-slate-900');
                    }
                  }}
                />
                {/* Measured scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Overlaid caption card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800/90 text-xs">
                  <div className="flex items-center justify-between text-amber-400 font-semibold mb-1">
                    <span>Manajemen 11 • Sibermu PJJ</span>
                    <span className="text-slate-400 font-normal">Global Class</span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-snug">
                    "Menuntut ilmu dari tanah rantau. Melampaui batas jarak, meraih masa depan sarjana mandiri."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Metrics */}
        <div className="mt-14 pt-10 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="font-serif-title text-3xl sm:text-4xl font-extrabold text-amber-400 tabular-nums">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-200">
                {lang === 'id' ? stat.labelId : stat.labelEn}
              </div>
              <div className="text-xs text-slate-400">
                {lang === 'id' ? stat.detailId : stat.detailEn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
