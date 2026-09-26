import React, { useState } from 'react';
import { STUDENT_NETWORK, COMMUNITY_IMAGE } from '../data/content';
import { Globe2, Quote, MapPin, Award, BookOpen, Users, Compass } from 'lucide-react';
import { Language } from '../types';

interface GlobalNetworkSectionProps {
  lang: Language;
}

export const GlobalNetworkSection: React.FC<GlobalNetworkSectionProps> = ({ lang }) => {
  const [selectedCountry, setSelectedCountry] = useState<string>('all');

  const countries = ['all', 'Taiwan', 'Jepang', 'Korea Selatan', 'Uni Emirat Arab', 'Hong Kong', 'Malaysia'];

  const filteredStudents = selectedCountry === 'all'
    ? STUDENT_NETWORK
    : STUDENT_NETWORK.filter((s) => s.country === selectedCountry);

  return (
    <section id="komunitas" className="py-16 md:py-24 bg-slate-900/30 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
            <span>{lang === 'id' ? 'Komunitas & Jaringan' : 'Student & Community Hub'}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">Jaringan Luar Negeri</span>
          </div>
          <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            {lang === 'id'
              ? 'Tersebar di 14+ Negara, Terhubung dalam Satu Cita-Cita'
              : 'Spanning 14+ Nations, United by One Academic Aspiration'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {lang === 'id'
              ? 'Kenali rekan-rekan mahasiswa Manajemen 11 yang berjuang menggapai gelar sarjana di sela-sela jam kerja di pabrik, rumah sakit, kantor perhotelan, hingga wirausaha di mancanegara.'
              : 'Meet our inspiring Management 11 peers balancing demanding shifts in manufacturing, hospitality, healthcare, and retail across the globe.'}
          </p>
        </div>

        {/* Global Interactive Banner */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>{lang === 'id' ? 'Ekosistem Komunitas Mandiri' : 'Self-Sustaining Community'}</span>
            </div>
            <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-white">
              {lang === 'id'
                ? 'Solidaritas Tanpa Batas Wilayah & Zona Waktu'
                : 'Solidarity Across Continents & Timezones'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {lang === 'id'
                ? 'Melalui koordinator wilayah (Korwil) di tiap negara penempatan, mahasiswa Manajemen 11 saling berbagi catatan kuliah, modul terjemahan teknis, latihan soal ujian, hingga pendampingan kendala administratif kampus secara berkesinambungan.'
                : 'Through dedicated regional coordinators in each host country, Management 11 students actively share lecture summaries, exam preparation pods, and continuous mutual peer advising.'}
            </p>

            <div className="grid grid-cols-3 gap-3 pt-2 text-center">
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                <span className="font-serif-title text-lg sm:text-xl font-bold text-amber-400 block tabular-nums">7</span>
                <span className="text-[11px] text-slate-400">Korwil Aktif</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                <span className="font-serif-title text-lg sm:text-xl font-bold text-amber-400 block tabular-nums">48+</span>
                <span className="text-[11px] text-slate-400">Sesi Belajar Bersama</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                <span className="font-serif-title text-lg sm:text-xl font-bold text-amber-400 block tabular-nums">100%</span>
                <span className="text-[11px] text-slate-400">Lulus Ujian Bersama</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden border border-slate-800 shadow-lg">
              <img
                src={COMMUNITY_IMAGE}
                alt="Jaringan Mahasiswa PJJ Luar Negeri Sibermu"
                referrerPolicy="no-referrer"
                className="w-full h-56 object-cover"
              />
              <div className="p-3 bg-slate-950 text-xs text-slate-300 flex items-center justify-between border-t border-slate-800">
                <span className="font-medium">Webinar Sinergi Diaspora Asia Pasifik</span>
                <span className="text-amber-400 font-semibold">180+ Peserta</span>
              </div>
            </div>
          </div>
        </div>

        {/* Country Filter Bar */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Globe2 className="w-4 h-4 text-amber-400" />
              <span>{lang === 'id' ? 'Pilih Negara Mahasiswa:' : 'Select Country:'}</span>
              <div className="flex flex-wrap items-center gap-1.5">
                {countries.map((ctry) => (
                  <button
                    key={ctry}
                    onClick={() => setSelectedCountry(ctry)}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                      selectedCountry === ctry
                        ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                        : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
                    }`}
                  >
                    {ctry === 'all' ? (lang === 'id' ? 'Semua Negara' : 'All Countries') : ctry}
                  </button>
                ))}
              </div>
            </div>
            <span className="text-xs text-slate-400 font-medium">
              {filteredStudents.length} {lang === 'id' ? 'Profil Mahasiswa Terpilih' : 'Student Spotlights'}
            </span>
          </div>

          {/* Student Profile Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudents.map((std) => (
              <div
                key={std.id}
                className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{std.flag}</span>
                      <div>
                        <h4 className="text-base font-bold text-white leading-snug">
                          {std.name}
                        </h4>
                        <div className="flex items-center gap-1 text-xs text-slate-400">
                          <MapPin className="w-3 h-3 text-amber-400" />
                          <span>{std.city}, {std.country}</span>
                        </div>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono text-amber-400/90 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20 whitespace-nowrap">
                      Sem {std.semester}
                    </span>
                  </div>

                  <div className="text-xs text-slate-300 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
                    <div className="text-slate-400 text-[11px]">Profesi Saat Ini:</div>
                    <div className="font-medium text-white">{std.workRole}</div>
                  </div>

                  <div className="text-xs text-amber-300/90 font-medium">
                    {std.concentration}
                  </div>

                  <div className="relative pt-1">
                    <Quote className="w-4 h-4 text-slate-600 mb-1" />
                    <p className="text-xs text-slate-300 italic leading-relaxed">
                      "{std.quote}"
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{std.badge}</span>
                  <span className="text-amber-400 font-medium">Aktif PJJ</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Publications & Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>{lang === 'id' ? 'Karya Ilmiah & Riset Mahasiswa' : 'Student Publications & Research'}</span>
            </div>
            <h4 className="text-lg font-bold text-white">
              {lang === 'id' ? 'Jurnal Manajemen Terapan Mandiri' : 'Applied Management Case Studies'}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Mahasiswa Manajemen 11 secara aktif menyusun studi kasus manajemen bisnis nyata yang mereka temui di tempat kerja luar negeri (industri manufaktur Jepang, logistik Taiwan, hospitality UAE).
            </p>
            <div className="text-xs text-slate-400 pt-2 space-y-1.5">
              <div className="flex items-center justify-between">
                <span>• Studi Efisiensi Shift Kerja Pabrik Otomotif Nagoya</span>
                <span className="text-slate-500">2026</span>
              </div>
              <div className="flex items-center justify-between">
                <span>• Strategi Ekspor Makanan Kering Indonesia ke Pasar Taipei</span>
                <span className="text-slate-500">2026</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              <Users className="w-4 h-4" />
              <span>{lang === 'id' ? 'Bakti Sosial & Advokasi' : 'Social Impact & Advocacy'}</span>
            </div>
            <h4 className="text-lg font-bold text-white">
              {lang === 'id' ? 'Edukasi Literasi Keuangan Pekerja Migran' : 'Migrant Worker Financial Literacy'}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Sebagai bagian dari pengabdian masyarakat, mahasiswa angkatan 11 rutin mengadakan webinar gratis pengelolaan remitansi dan modal usaha purna penugasan bagi sesama WNI di perantauan.
            </p>
            <div className="text-xs text-slate-400 pt-2 space-y-1.5">
              <div className="flex items-center justify-between">
                <span>• Workshop: Mengubah Remitansi Menjadi Aset Produktif</span>
                <span className="text-emerald-400">Rutin Bulanan</span>
              </div>
              <div className="flex items-center justify-between">
                <span>• Konsultasi Legalitas Izin Usaha UMKM Indonesia</span>
                <span className="text-emerald-400">Terbuka Umum</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
