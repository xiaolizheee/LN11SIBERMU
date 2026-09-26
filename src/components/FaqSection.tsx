import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { FaqItem, Language } from '../types';
import { HelpCircle, ChevronDown, Search } from 'lucide-react';

interface FaqSectionProps {
  lang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  const [activeFaqId, setActiveFaqId] = useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['all', 'PJJ & Belajar', 'Pekerjaan & Waktu', 'Legalitas & Ijazah', 'Biaya & Admisi'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query) ||
      faq.questionEn.toLowerCase().includes(query) ||
      faq.answerEn.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-16 md:py-24 border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>{lang === 'id' ? 'Pertanyaan Umum (FAQ)' : 'Frequently Asked Questions'}</span>
          </div>
          <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            {lang === 'id'
              ? 'Jawaban Lengkap Perkuliahan PJJ Luar Negeri'
              : 'Everything You Need to Know About Global Distance Study'}
          </h2>
          <p className="text-sm text-slate-300">
            {lang === 'id'
              ? 'Temukan panduan praktis mengenai cara kuliah sambil bekerja shift, legalitas ijazah, hingga sistem ujian online.'
              : 'Practical insights into studying around rotating factory shifts, degree accreditation, and remote examinations.'}
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'id' ? 'Cari pertanyaan (misal: shift, ijazah, cicilan)...' : 'Search question...'}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-slate-950 font-semibold shadow'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat === 'all' ? (lang === 'id' ? 'Semua Topik' : 'All Topics') : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-400 bg-slate-900/50 rounded-xl border border-slate-800">
              {lang === 'id' ? 'Tidak ada pertanyaan yang sesuai dengan kata kunci Anda.' : 'No matching questions found.'}
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = activeFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl bg-slate-900 border border-slate-800 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setActiveFaqId(isOpen ? null : faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-amber-400/90 shrink-0">
                        {faq.category}
                      </span>
                      <span className="text-sm font-semibold text-white">
                        {lang === 'id' ? faq.question : faq.questionEn}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-amber-400' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 border-t border-slate-800/60 leading-relaxed bg-slate-950/40">
                      {lang === 'id' ? faq.answer : faq.answerEn}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
