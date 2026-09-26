import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';

interface WhatsAppDrawerProps {
  lang: Language;
}

export const WhatsAppDrawer: React.FC<WhatsAppDrawerProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Pendaftaran Maba PJJ');
  const [customText, setCustomText] = useState('');

  const topics = [
    {
      id: 'Pendaftaran Maba PJJ',
      label: 'Konsultasi Admisi & Beasiswa',
      defaultMsg: 'Halo Admin PJJ Sibermu, saya ingin menanyakan pendaftaran mahasiswa baru S1 Manajemen PJJ Luar Negeri dan info beasiswa pekerja migran.',
    },
    {
      id: 'Wilayah Taiwan',
      label: 'Koordinator Mahasiswa Taiwan',
      defaultMsg: 'Halo Kak Korwil Taiwan Manajemen 11, saya WNI di Taiwan ingin tanya seputar kuliah sambil shift kerja.',
    },
    {
      id: 'Wilayah Jepang & Korsel',
      label: 'Koordinator Jepang & Korea',
      defaultMsg: 'Halo Korwil Jepang/Korsel, mau konsultasi sistem waktu ujian online dan transfer dokumen.',
    },
    {
      id: 'Bantuan LMS',
      label: 'Bantuan Teknis Portal LMS',
      defaultMsg: 'Halo Helpdesk Akademik Sibermu, saya mahasiswa Manajemen 11 membutuhkan informasi terkait akses modul perkuliahan.',
    },
  ];

  const currentTopic = topics.find((t) => t.id === selectedTopic) || topics[0];

  const handleLaunchWhatsApp = () => {
    const textToSend = customText.trim() || currentTopic.defaultMsg;
    const encoded = encodeURIComponent(textToSend);
    // Official university simulated WhatsApp helpline
    window.open(`https://api.whatsapp.com/send?phone=6281288811911&text=${encoded}`, '_blank');
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-slate-950 shadow-2xl transition-all group"
          aria-label="Live Chat WhatsApp Gateway"
        >
          <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-slate-950 animate-pulse" />
          <MessageCircle className="w-7 h-7 fill-slate-950 text-slate-950 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Slide-out Drawer */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden flex flex-col text-xs animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold">
                WA
              </div>
              <div>
                <div className="font-semibold text-white">
                  {lang === 'id' ? 'Layanan WhatsApp PJJ Luar Negeri' : 'WhatsApp PJJ Helpdesk'}
                </div>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Online · Fast Response</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
            <div className="space-y-1.5">
              <label className="text-slate-400 font-medium">Pilih Tujuan Konsultasi:</label>
              <div className="grid grid-cols-1 gap-1.5">
                {topics.map((top) => (
                  <button
                    key={top.id}
                    onClick={() => {
                      setSelectedTopic(top.id);
                      setCustomText('');
                    }}
                    className={`p-2.5 rounded-lg border text-left flex items-center justify-between transition-colors ${
                      selectedTopic === top.id
                        ? 'bg-emerald-950/40 border-emerald-500/60 text-emerald-300'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-850'
                    }`}
                  >
                    <span>{top.label}</span>
                    {selectedTopic === top.id && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-slate-400 font-medium">Pesan Pesan WhatsApp:</label>
              <textarea
                rows={3}
                value={customText || currentTopic.defaultMsg}
                onChange={(e) => setCustomText(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-slate-200 text-xs focus:outline-none focus:border-emerald-400 leading-relaxed"
              />
            </div>
          </div>

          {/* Footer Action */}
          <div className="p-3 bg-slate-900/80 border-t border-slate-800 flex items-center justify-between">
            <span className="text-[10px] text-slate-500">Nomor Resmi Biro PJJ</span>
            <button
              onClick={handleLaunchWhatsApp}
              className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold flex items-center gap-1.5 shadow"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Buka WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
