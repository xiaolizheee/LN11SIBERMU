import React, { useState } from 'react';
import { COURSES_CATALOG, ACADEMIC_EVENTS, LMS_IMAGE } from '../data/content';
import { Course, AcademicEvent, Language } from '../types';
import { BookOpen, Calendar, ExternalLink, Clock, CheckCircle2, ChevronRight, X, PlayCircle, Layers } from 'lucide-react';

interface AcademicSectionProps {
  lang: Language;
}

export const AcademicSection: React.FC<AcademicSectionProps> = ({ lang }) => {
  const [selectedSemester, setSelectedSemester] = useState<number | 'all'>('all');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [eventFilter, setEventFilter] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'kurikulum' | 'lms' | 'kalender'>('kurikulum');

  const filteredCourses = selectedSemester === 'all'
    ? COURSES_CATALOG
    : COURSES_CATALOG.filter((c) => c.semester === selectedSemester);

  const filteredEvents = eventFilter === 'all'
    ? ACADEMIC_EVENTS
    : ACADEMIC_EVENTS.filter((e) => e.category === eventFilter);

  return (
    <section id="akademik" className="py-16 md:py-24 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
            <span>{lang === 'id' ? 'Pendidikan & Akademik' : 'Academic & Learning'}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">S1 Manajemen Terakreditasi</span>
          </div>
          <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            {lang === 'id'
              ? 'Kurikulum Terapan, Sistem PJJ Modern, & Kalender Studi'
              : 'Applied Curriculum, Modern Distance LMS, & Study Calendar'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {lang === 'id'
              ? 'Dirancang secara holistik untuk menghasilkan Sarjana Manajemen (S.M.) yang cakap dalam pemasaran digital, rantai pasok global, dan kepemimpinan bisnis lintas batas.'
              : 'Holistically designed to cultivate Bachelor of Management graduates skilled in digital marketing, global supply chains, and cross-border business leadership.'}
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('kurikulum')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
              activeTab === 'kurikulum'
                ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>{lang === 'id' ? 'Kurikulum & Mata Kuliah' : 'Curriculum & Courses'}</span>
          </button>

          <button
            onClick={() => setActiveTab('lms')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
              activeTab === 'lms'
                ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{lang === 'id' ? 'Sistem PJJ & Portal LMS' : 'Distance System & LMS Portal'}</span>
          </button>

          <button
            onClick={() => setActiveTab('kalender')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
              activeTab === 'kalender'
                ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>{lang === 'id' ? 'Kalender Akademik' : 'Academic Calendar'}</span>
          </button>
        </div>

        {/* Tab 1: Kurikulum */}
        {activeTab === 'kurikulum' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>{lang === 'id' ? 'Filter Semester:' : 'Filter Semester:'}</span>
                <div className="flex flex-wrap items-center gap-1.5">
                  {(['all', 1, 3, 5, 7, 8] as const).map((sem) => (
                    <button
                      key={String(sem)}
                      onClick={() => setSelectedSemester(sem)}
                      className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                        selectedSemester === sem
                          ? 'bg-slate-100 text-slate-900 font-semibold'
                          : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      {sem === 'all' ? (lang === 'id' ? 'Semua' : 'All') : `Sem ${sem}`}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-xs text-slate-400">
                <span>Total 144 SKS</span>
                <span className="mx-1.5" aria-hidden="true">·</span>
                <span>8 Semester (4 Tahun)</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredCourses.map((course) => (
                <div
                  key={course.code}
                  onClick={() => setSelectedCourse(course)}
                  className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-400/50 hover:bg-slate-900 transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="font-mono font-medium text-amber-400">{course.code}</span>
                      <span className="text-slate-400">Sem {course.semester} · {course.credits} SKS</span>
                    </div>

                    <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {lang === 'id' ? course.name : course.nameEn}
                    </h4>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">{course.type}</span>
                    <span className="text-amber-400 font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                      {lang === 'id' ? 'Silabus' : 'Syllabus'}
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Sistem PJJ & Portal LMS */}
        {activeTab === 'lms' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-white">
                  {lang === 'id'
                    ? 'Bagaimana Pembelajaran Jarak Jauh Berjalan?'
                    : 'How Does Distance Learning Function?'}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {lang === 'id'
                    ? 'Universitas Siber Muhammadiyah mengadopsi platform LMS canggih yang dirancang responsif di smartphone maupun laptop, sehingga mahasiswa yang sedang bekerja di luar negeri dapat belajar mandiri tanpa tekanan jam tatap muka kaku.'
                    : 'Siber Muhammadiyah University employs an advanced LMS platform engineered for mobile and laptop, allowing diaspora workers to engage in self-paced learning without rigid daytime requirements.'}
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                  <PlayCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-semibold text-white">
                      1. Modul Video & Audio Asinkronus (24/7)
                    </h5>
                    <p className="text-xs text-slate-400 mt-1">
                      Dapat diunduh dan diputar berulang kali saat istirahat kerja atau waktu senggang di akhir pekan.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-semibold text-white">
                      2. Forum Diskusi & Analisis Kasus
                    </h5>
                    <p className="text-xs text-slate-400 mt-1">
                      Interaksi aktif antar rekan sekelas lintas benua dan dosen pengampu dengan batas waktu fleksibel.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-semibold text-white">
                      3. Ujian Online dengan Exam Window 48 Jam
                    </h5>
                    <p className="text-xs text-slate-400 mt-1">
                      UTS & UAS daring bebas bentrok dengan jadwal shift pabrik atau pekerjaan domestik.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://sibermu.ac.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm"
                >
                  <span>{lang === 'id' ? 'Buka Portal LMS Sibermu' : 'Launch Sibermu LMS'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-xs text-slate-400">Domain resmi: sibermu.ac.id</span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl">
                <img
                  src={LMS_IMAGE}
                  alt="Sistem Pembelajaran Jarak Jauh Sibermu"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 object-cover"
                />
                <div className="p-5 bg-slate-950/95 border-t border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs text-amber-400 font-semibold">
                    <span>LMS Sibermu Mobile & Web Access</span>
                    <span className="text-emerald-400">Server Status: Aktif 24/7</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Didukung fitur Single Sign-On (SSO), kompresi data hemat kuota, dan e-library jurnal internasional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Kalender Akademik */}
        {activeTab === 'kalender' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>{lang === 'id' ? 'Filter Kategori:' : 'Category Filter:'}</span>
                <div className="flex flex-wrap items-center gap-1.5">
                  {['all', 'KRS', 'Perkuliahan', 'Ujian', 'Webinar'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setEventFilter(cat)}
                      className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                        eventFilter === cat
                          ? 'bg-amber-400 text-slate-950 font-semibold'
                          : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      {cat === 'all' ? (lang === 'id' ? 'Semua Jadwal' : 'All Events') : cat}
                    </button>
                  ))}
                </div>
              </div>

              <span className="text-xs text-slate-400">
                Tahun Akademik 2026/2027 (Semester Ganjil)
              </span>
            </div>

            <div className="space-y-3">
              {filteredEvents.map((evt) => (
                <div
                  key={evt.id}
                  className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5 md:max-w-2xl">
                    <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
                      <span>{evt.date}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-slate-400">{evt.category}</span>
                    </div>
                    <h4 className="text-base font-bold text-white">
                      {lang === 'id' ? evt.title : evt.titleEn}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {evt.description}
                    </p>
                  </div>

                  <div className="md:text-right shrink-0">
                    <div className="text-xs text-slate-400 flex items-center md:justify-end gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span className="font-mono">{evt.timeWib}</span>
                    </div>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      Konversi sesuai zona waktu negara Anda
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Course Syllabus Modal */}
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-5 right-5 p-1 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-amber-400 font-mono">
                  <span>{selectedCourse.code}</span>
                  <span aria-hidden="true">·</span>
                  <span>Semester {selectedCourse.semester}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedCourse.credits} SKS ({selectedCourse.type})</span>
                </div>
                <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-white">
                  {lang === 'id' ? selectedCourse.name : selectedCourse.nameEn}
                </h3>
              </div>

              <div className="space-y-3">
                <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {lang === 'id' ? 'Deskripsi Mata Kuliah' : 'Course Description'}
                </h5>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedCourse.description}
                </p>
              </div>

              <div className="space-y-3">
                <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {lang === 'id' ? 'Capaian Pembelajaran (Kompetensi)' : 'Learning Competencies'}
                </h5>
                <div className="space-y-2">
                  {selectedCourse.competencies.map((comp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded"
                >
                  {lang === 'id' ? 'Tutup Rincian' : 'Close Details'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
