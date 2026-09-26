import React from 'react';
import { ExternalLink, Instagram, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onNavigate }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-serif-title text-lg font-bold text-white block">
              Manajemen 11 | Sibermu PJJ Luar Negeri
            </span>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {lang === 'id'
                ? 'Portal independen mahasiswa Program Studi S1 Manajemen Universitas Siber Muhammadiyah kelas Pembelajaran Jarak Jauh Luar Negeri. Menghubungkan potensi diaspora menuju sarjana unggul berdaya saing global.'
                : 'Official academic community portal for undergraduate Management distance-learning students at Siber Muhammadiyah University worldwide. Connecting minds beyond borders.'}
            </p>
            <div className="text-[11px] text-slate-500 space-y-1">
              <div>S1 Manajemen · Terakreditasi BAN-PT</div>
              <div>Terdaftar di Pangkalan Data Pendidikan Tinggi (PDDikti) Kemendikbudristek</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <span className="font-semibold text-white tracking-wider uppercase text-[11px] block">
              {lang === 'id' ? 'Navigasi' : 'Navigation'}
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('beranda')}
                  className="hover:text-amber-400 transition-colors"
                >
                  {lang === 'id' ? 'Beranda Utama' : 'Home'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tentang-kami')}
                  className="hover:text-amber-400 transition-colors"
                >
                  {lang === 'id' ? 'Tentang & Kepengurusan' : 'About Us'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('akademik')}
                  className="hover:text-amber-400 transition-colors"
                >
                  {lang === 'id' ? 'Kurikulum & Kalender' : 'Curriculum & Calendar'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('komunitas')}
                  className="hover:text-amber-400 transition-colors"
                >
                  {lang === 'id' ? 'Jaringan Diaspora' : 'Global Network'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pendaftaran')}
                  className="hover:text-amber-400 transition-colors"
                >
                  {lang === 'id' ? 'Simulasi Biaya & Admisi' : 'Admission & Fees'}
                </button>
              </li>
            </ul>
          </div>

          {/* Portal LMS Links */}
          <div className="space-y-3">
            <span className="font-semibold text-white tracking-wider uppercase text-[11px] block">
              {lang === 'id' ? 'Tautan Resmi' : 'Official Portals'}
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://sibermu.ac.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <span>Portal LMS Sibermu</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <span>Instagram @manajemen11_sibermu</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://pddikti.kemdikbud.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <span>Cek Status PDDikti Dikti</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Regional Hub Contacts */}
          <div className="space-y-3">
            <span className="font-semibold text-white tracking-wider uppercase text-[11px] block">
              {lang === 'id' ? 'Hubungi Kami' : 'Contact & Hubs'}
            </span>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Pusat PJJ Sibermu, D.I. Yogyakarta, Indonesia</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>info@sibermu.ac.id</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>WhatsApp Helpline: +62 812-8881-1911</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Quiet copyright border */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Komunitas Mahasiswa Manajemen 11 · Universitas Siber Muhammadiyah PJJ Luar Negeri.
          </div>
          <div className="flex items-center gap-4">
            <span>Connecting Minds Beyond Borders</span>
            <span aria-hidden="true">·</span>
            <span>Learn • Connect • Grow</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
