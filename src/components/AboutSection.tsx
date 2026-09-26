import React from 'react';
import { ORGANIZATIONAL_STRUCTURE } from '../data/content';
import { Target, Compass, Award, ShieldCheck, Users } from 'lucide-react';
import { Language } from '../types';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  return (
    <section id="tentang-kami" className="py-16 md:py-24 bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
            <span>{lang === 'id' ? 'Tentang Kami' : 'About Us'}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">{lang === 'id' ? 'Profil & Kepengurusan' : 'Profile & Leadership'}</span>
          </div>
          <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            {lang === 'id'
              ? 'Menghubungkan Potensi Diaspora Indonesia Menuju Sarjana Unggul'
              : 'Empowering Indonesian Diaspora Toward Academic Excellence'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {lang === 'id'
              ? 'Manajemen 11 adalah entitas angkatan ke-11 mahasiswa Program Studi S1 Manajemen Universitas Siber Muhammadiyah pada program Pembelajaran Jarak Jauh (PJJ) Luar Negeri. Tersebar di berbagai belahan dunia, kami bersatu membuktikan bahwa jarak geografis dan kesibukan kerja bukan lagi penghalang meraih pendidikan tinggi berkualitas.'
              : 'Management 11 is the 11th batch of undergraduate Management students at Siber Muhammadiyah University enrolled in the Overseas Distance Learning program. Spanning diverse continents, we prove that geographic distance and workplace duties are no longer obstacles to earning a high-quality university degree.'}
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-serif-title text-xl font-bold text-white">
              {lang === 'id' ? 'Visi Utama' : 'Our Vision'}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {lang === 'id'
                ? 'Menjadi komunitas pembelajar sarjana manajemen jarak jauh yang unggul, berdaya saing global, berintegritas, dan melahirkan para manajer serta wirausahawan diaspora mandiri yang memberi kontribusi nyata bagi bangsa Indonesia.'
                : 'To become a premier distance-learning community of management scholars that is globally competitive, upright, and cultivates empowered diaspora managers and entrepreneurs who contribute meaningfully to Indonesia.'}
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-400 border-t border-slate-800/80">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                {lang === 'id' ? 'Inklusif & Terakreditasi' : 'Inclusive & Accredited'}
              </span>
              <span className="flex items-center gap-1.5">
                <Target className="w-4 h-4 text-blue-400" />
                {lang === 'id' ? 'Berorientasi Praktik Nyata' : 'Applied Business Focus'}
              </span>
            </div>
          </div>

          {/* Mission */}
          <div className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-400/10 border border-blue-400/20 flex items-center justify-center text-blue-400">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif-title text-xl font-bold text-white">
              {lang === 'id' ? 'Misi Kami' : 'Our Mission'}
            </h3>
            <ul className="text-sm text-slate-300 space-y-3 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="text-amber-400 font-bold">1.</span>
                <span>
                  {lang === 'id'
                    ? 'Memfasilitasi perkuliahan daring fleksibel 24/7 yang ramah jadwal kerja para pahlawan devisa dan diaspora.'
                    : 'Provide flexible 24/7 online learning tailored to the shift schedules of overseas workers and diaspora professionals.'}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-amber-400 font-bold">2.</span>
                <span>
                  {lang === 'id'
                    ? 'Membangun ekosistem belajar saling asuh, studi club antarnegara, dan pendampingan akademik intensif.'
                    : 'Foster a mutual-support study ecosystem, cross-country peer pods, and dedicated academic mentoring.'}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-amber-400 font-bold">3.</span>
                <span>
                  {lang === 'id'
                    ? 'Menyiapkan keterampilan manajerial praktis untuk akselerasi karier maupun transisi sukses menjadi wirausaha purna penugasan.'
                    : 'Equip students with hands-on management skills for career promotion or successful post-contract entrepreneurship.'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Leadership & Faculty */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                <Users className="w-4 h-4" />
                <span>{lang === 'id' ? 'Dewan Pengurus & Pembina' : 'Faculty & Board of Council'}</span>
              </div>
              <h3 className="font-serif-title text-2xl font-bold text-white">
                {lang === 'id' ? 'Struktur Kepengurusan Angkatan 11' : 'Batch 11 Leadership Team'}
              </h3>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              {lang === 'id'
                ? 'Jajaran perwakilan mahasiswa di mancanegara dan dosen pembimbing prodi yang siap mendampingi perjalanan studi Anda.'
                : 'Student regional representatives and faculty advisors dedicated to supporting your academic journey.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ORGANIZATIONAL_STRUCTURE.map((person, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-amber-400 tracking-wide">
                    {lang === 'id' ? person.roleId : person.roleEn}
                  </div>
                  <h4 className="text-base font-bold text-white leading-snug">
                    {person.name}
                  </h4>
                  <div className="text-xs text-slate-400 font-medium">
                    {person.affiliation}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-800/80">
                    {person.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
