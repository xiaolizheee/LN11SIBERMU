import React, { useState } from 'react';
import { TUITION_CURRENCIES } from '../data/content';
import { Calculator, CheckCircle2, Send, HelpCircle, ArrowRight, Sparkles, DollarSign } from 'lucide-react';
import { Language } from '../types';

interface AdmissionSectionProps {
  lang: Language;
}

export const AdmissionSection: React.FC<AdmissionSectionProps> = ({ lang }) => {
  // Calculator state
  const [selectedCurrency, setSelectedCurrency] = useState('IDR');
  const [durationMode, setDurationMode] = useState<'semester' | 'year' | 'full'>('semester');
  const [isScholarshipApplied, setIsScholarshipApplied] = useState(true);

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    whatsapp: '',
    country: 'Taiwan',
    workStatus: 'Pekerja Migran / Formal Shift',
    educationBackground: 'SMA / SMK / MA',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Base tuition in IDR per semester
  // Regular: Rp 3.000.000, With Scholarship: Rp 2.100.000 (30% discount)
  const basePerSemester = isScholarshipApplied ? 2100000 : 3000000;
  const multiplier = durationMode === 'semester' ? 1 : durationMode === 'year' ? 2 : 8;
  const totalIdr = basePerSemester * multiplier;

  const currentCurr = TUITION_CURRENCIES.find((c) => c.code === selectedCurrency) || TUITION_CURRENCIES[0];
  const convertedPrice = Math.round(totalIdr * currentCurr.rate);
  const installmentPerMonth = Math.round(convertedPrice / (durationMode === 'semester' ? 6 : durationMode === 'year' ? 12 : 48));

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.whatsapp.trim()) {
      setFormError(lang === 'id' ? 'Mohon lengkapi Nama dan No. WhatsApp aktif.' : 'Please provide Full Name and active WhatsApp.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);
  };

  return (
    <section id="pendaftaran" className="py-16 md:py-24 bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
            <span>{lang === 'id' ? 'Admisi & Pendaftaran' : 'Admission & Intake'}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">Tahun Akademik 2026/2027</span>
          </div>
          <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            {lang === 'id'
              ? 'Investasi Masa Depan yang Sangat Terjangkau di Mancanegara'
              : 'Affordable Higher Education Investment for Overseas Workers'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {lang === 'id'
              ? 'Dapatkan beasiswa subsidi SPP hingga 30% khusus pekerja migran Indonesia dan diaspora. Skema pembayaran cicilan bulanan fleksibel tanpa biaya bunga.'
              : 'Benefit from up to 30% tuition subsidy designed for Indonesian migrant workers and diaspora, with flexible interest-free monthly installment plans.'}
          </p>
        </div>

        {/* Tuition Calculator & Conversion */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase">
                <Calculator className="w-4 h-4" />
                <span>{lang === 'id' ? 'Kalkulator Simulasi Biaya Kuliah PJJ' : 'Tuition Estimator & Currency Converter'}</span>
              </div>
              <h3 className="font-serif-title text-xl font-bold text-white">
                {lang === 'id' ? 'Hitung Biaya Sesuai Mata Uang Negara Anda' : 'Calculate in Local Overseas Currency'}
              </h3>
            </div>

            {/* Currency selector buttons */}
            <div className="flex flex-wrap items-center gap-1.5">
              {TUITION_CURRENCIES.map((curr) => (
                <button
                  key={curr.code}
                  onClick={() => setSelectedCurrency(curr.code)}
                  className={`px-2.5 py-1.5 rounded text-xs font-medium transition-colors ${
                    selectedCurrency === curr.code
                      ? 'bg-amber-400 text-slate-950 font-bold shadow'
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {curr.code}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Options */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300">
                  {lang === 'id' ? 'Pilih Jangka Waktu Perhitungan:' : 'Select Duration:'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setDurationMode('semester')}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-colors ${
                      durationMode === 'semester'
                        ? 'border-amber-400 bg-amber-400/10 text-amber-300 font-semibold'
                        : 'border-slate-800 bg-slate-950 text-slate-400 hover:text-white'
                    }`}
                  >
                    1 Semester (6 Bln)
                  </button>
                  <button
                    onClick={() => setDurationMode('year')}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-colors ${
                      durationMode === 'year'
                        ? 'border-amber-400 bg-amber-400/10 text-amber-300 font-semibold'
                        : 'border-slate-800 bg-slate-950 text-slate-400 hover:text-white'
                    }`}
                  >
                    1 Tahun (2 Sem)
                  </button>
                  <button
                    onClick={() => setDurationMode('full')}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-colors ${
                      durationMode === 'full'
                        ? 'border-amber-400 bg-amber-400/10 text-amber-300 font-semibold'
                        : 'border-slate-800 bg-slate-950 text-slate-400 hover:text-white'
                    }`}
                  >
                    Sarjana Penuh (8 Sem)
                  </button>
                </div>
              </div>

              {/* Scholarship Toggle */}
              <div
                onClick={() => setIsScholarshipApplied(!isScholarshipApplied)}
                className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between cursor-pointer hover:border-amber-400/40 transition-colors"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-semibold text-white">
                      {lang === 'id' ? 'Beasiswa Pekerja Migran / Diaspora (Potongan 30%)' : 'Migrant Worker / Diaspora Subsidy (30% Off)'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Cukup lampirkan bukti kontrak kerja aktif atau surat keterangan bekerja di LN.
                  </p>
                </div>
                <div
                  className={`w-10 h-6 rounded-full p-1 transition-colors ${
                    isScholarshipApplied ? 'bg-amber-400' : 'bg-slate-700'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-slate-950 transform transition-transform ${
                      isScholarshipApplied ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </div>
              </div>

              {/* Notice */}
              <div className="text-xs text-slate-400 space-y-1">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Termasuk seluruh modul video, e-book perpustakaan digital, dan akses LMS 24/7.</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Bisa diangsur 3x dalam 1 semester melalui transfer bank atau remittance.</span>
                </div>
              </div>
            </div>

            {/* Price Output Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950 border border-amber-400/30 text-center space-y-4 shadow-xl">
              <span className="text-xs text-slate-400 uppercase tracking-wider block">
                {lang === 'id' ? 'Estimasi Total Biaya' : 'Estimated Total Tuition'}
              </span>

              <div className="space-y-1">
                <div className="font-serif-title text-3xl sm:text-4xl font-extrabold text-amber-400 tabular-nums">
                  {currentCurr.symbol} {convertedPrice.toLocaleString()}
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  (Setara Rp {totalIdr.toLocaleString('id-ID')} IDR)
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 text-xs text-slate-300">
                <span className="text-slate-400">Atau setara dengan cicilan:</span>
                <div className="font-bold text-white text-sm mt-0.5">
                  ~ {currentCurr.symbol} {installmentPerMonth.toLocaleString()} / bulan
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step by Step Admission & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Steps */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-serif-title text-xl font-bold text-white">
              {lang === 'id' ? 'Tahapan Pendaftaran Online Mudah' : 'Easy Online Admission Steps'}
            </h3>

            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-amber-400 font-bold">Langkah 1: Pengisian Formulir</span>
                <p className="text-slate-300">Isi data diri dan pilih kelas PJJ Luar Negeri melalui portal admisi resmi.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-amber-400 font-bold">Langkah 2: Unggah Berkas Digital</span>
                <p className="text-slate-300">Kirimkan foto/scan Ijazah SMA/SMK/Paket C, KTP/Paspor, dan kontrak kerja luar negeri.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-amber-400 font-bold">Langkah 3: Pembayaran & Terbit NIM</span>
                <p className="text-slate-300">Lakukan pembayaran registrasi/cicilan pertama. Akun LMS dan NIM langsung diterbitkan.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-amber-400 font-bold">Langkah 4: Orientasi & Perkuliahan Mandiri</span>
                <p className="text-slate-300">Bergabung dalam grup koordinasi angkatan 11 dan mulai belajar kapan saja dari tempat Anda.</p>
              </div>
            </div>
          </div>

          {/* Quick Registration / Consultation Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
            <div className="space-y-1">
              <h3 className="font-serif-title text-xl font-bold text-white">
                {lang === 'id' ? 'Formulir Konsultasi & Pendaftaran Cepat' : 'Fast Admission Inquiry Form'}
              </h3>
              <p className="text-xs text-slate-400">
                {lang === 'id'
                  ? 'Admin PJJ Luar Negeri & Pengurus Angkatan 11 akan menghubungi Anda melalui WhatsApp.'
                  : 'Our PJJ overseas advisor will reach you directly via WhatsApp for admission assistance.'}
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif-title text-lg font-bold text-white">
                  {lang === 'id' ? 'Permohonan Berhasil Terkirim!' : 'Inquiry Submitted Successfully!'}
                </h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  {lang === 'id'
                    ? `Terima kasih Sdr/i ${formData.fullName}. Tim pendamping pendaftaran mahasiswa PJJ wilayah ${formData.country} akan segera menghubungi nomor WhatsApp ${formData.whatsapp}.`
                    : `Thank you ${formData.fullName}. Our overseas student coordinator for ${formData.country} will contact your WhatsApp (${formData.whatsapp}) shortly.`}
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-900 bg-amber-400 rounded hover:bg-amber-300"
                >
                  {lang === 'id' ? 'Kirim Formulir Lain' : 'Submit Another'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                {formError && (
                  <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs">
                    {formError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-slate-300 font-medium">Nama Lengkap Sesuai Paspor/KTP *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Contoh: Rina Anggraini"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-300 font-medium">Nomor WhatsApp Aktif *</label>
                    <input
                      type="text"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="+886 912 345 678 atau +62 812..."
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-slate-300 font-medium">Negara Domisili / Penempatan *</label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="Taiwan">Taiwan 🇹🇼</option>
                      <option value="Jepang">Jepang 🇯🇵</option>
                      <option value="Korea Selatan">Korea Selatan 🇰🇷</option>
                      <option value="Malaysia">Malaysia 🇲🇾</option>
                      <option value="Hong Kong">Hong Kong 🇭🇰</option>
                      <option value="Uni Emirat Arab">Uni Emirat Arab 🇦🇪</option>
                      <option value="Arab Saudi">Arab Saudi 🇸🇦</option>
                      <option value="Lainnya">Negara Lainnya 🌏</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-300 font-medium">Pendidikan Terakhir *</label>
                    <select
                      value={formData.educationBackground}
                      onChange={(e) => setFormData({ ...formData, educationBackground: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="SMA / SMK / MA">SMA / SMK / MA</option>
                      <option value="Kejar Paket C">Kejar Paket C</option>
                      <option value="Diploma (D1/D2/D3 Transfer)">Diploma (D1/D2/D3 Pindahan)</option>
                      <option value="Pernah Kuliah Belum Selesai">Pernah Kuliah (Transfer SKS)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-slate-300 font-medium">Pekerjaan / Shift Saat Ini & Pertanyaan Tambahan</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Contoh: Pekerja pabrik tekstil di Taichung shift malam. Ingin menanyakan syarat beasiswa dan cara cicilan SPP..."
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'id' ? 'Kirim Permohonan Konsultasi Admisi' : 'Submit Admission Inquiry'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
