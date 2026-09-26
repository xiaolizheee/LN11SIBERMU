import { StudentProfile, Course, AcademicEvent, InstagramPost, Announcement, FaqItem } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_sibermu_global_1790386484242.jpg';
export const LMS_IMAGE = '/src/assets/images/lms_virtual_learning_1790386499089.jpg';
export const COMMUNITY_IMAGE = '/src/assets/images/global_diaspora_network_1790386513025.jpg';

export const APP_CONTENT = {
  id: {
    brand: 'Manajemen 11',
    university: 'Universitas Siber Muhammadiyah',
    subBrand: 'PJJ Luar Negeri',
    tagline: 'Connecting Minds Beyond Borders',
    subTagline: 'Learn • Connect • Grow',
    heroDescription: 'Wadah resmi mahasiswa Program Studi S1 Manajemen Universitas Siber Muhammadiyah kelas Pembelajaran Jarak Jauh (PJJ) Luar Negeri. Meraih gelar sarjana terakreditasi internasional tanpa harus meninggalkan pekerjaan di mancanegara.',
    ctaRegister: 'Daftar Gelombang Baru',
    ctaLms: 'Akses Portal LMS',
    ctaCurriculum: 'Lihat Kurikulum',
    viewFocusModes: {
      all: 'Semua Konten (Portal Lengkap)',
      admission: 'Fokus Calon Mahasiswa (Admisi)',
      community: 'Fokus Profil Komunitas',
      academic: 'Fokus Akademik & LMS'
    }
  },
  en: {
    brand: 'Management 11',
    university: 'Siber Muhammadiyah University',
    subBrand: 'Overseas Distance Learning',
    tagline: 'Connecting Minds Beyond Borders',
    subTagline: 'Learn • Connect • Grow',
    heroDescription: 'Official academic portal for undergraduate Management students at Siber Muhammadiyah University through the Overseas Distance Learning (PJJ) program. Earn an accredited Bachelor of Management degree from anywhere in the world without disrupting your career abroad.',
    ctaRegister: 'Apply for Next Intake',
    ctaLms: 'Access LMS Portal',
    ctaCurriculum: 'Explore Curriculum',
    viewFocusModes: {
      all: 'All Content (Flagship Portal)',
      admission: 'Admission & Intake Focus',
      community: 'Community & Batch Profile',
      academic: 'Academic & LMS Focus'
    }
  }
};

export const TIMEZONE_CLOCKS = [
  { city: 'Jakarta', country: 'Indonesia', timezone: 'Asia/Jakarta', abbr: 'WIB', flag: '🇮🇩' },
  { city: 'Taipei', country: 'Taiwan', timezone: 'Asia/Taipei', abbr: 'CST (UTC+8)', flag: '🇹🇼' },
  { city: 'Tokyo', country: 'Jepang', timezone: 'Asia/Tokyo', abbr: 'JST (UTC+9)', flag: '🇯🇵' },
  { city: 'Seoul', country: 'Korea Selatan', timezone: 'Asia/Seoul', abbr: 'KST (UTC+9)', flag: '🇰🇷' },
  { city: 'Kuala Lumpur', country: 'Malaysia', timezone: 'Asia/Kuala_Lumpur', abbr: 'MYT (UTC+8)', flag: '🇲🇾' },
  { city: 'Dubai', country: 'UEA', timezone: 'Asia/Dubai', abbr: 'GST (UTC+4)', flag: '🇦🇪' },
  { city: 'Riyadh', country: 'Arab Saudi', timezone: 'Asia/Riyadh', abbr: 'AST (UTC+3)', flag: '🇸🇦' },
];

export const STATS_DATA = [
  { value: '14+', labelId: 'Negara Sebaran Mahasiswa', labelEn: 'Countries Worldwide', detailId: 'Asia Timur, Timur Tengah, Eropa, ASEAN', detailEn: 'East Asia, Middle East, Europe, ASEAN' },
  { value: '100%', labelId: 'Kuliah Online & Fleksibel', labelEn: '100% Online & Asynchronous', detailId: 'Disesuaikan dengan shift kerja luar negeri', detailEn: 'Engineered for shift & overseas workers' },
  { value: '144', labelId: 'Total Beban SKS Sarjana', labelEn: 'Credits for Bachelor Degree', detailId: 'Gelar resmi Sarjana Manajemen (S.M.)', detailEn: 'Accredited Bachelor of Management (S.M.)' },
  { value: '24/7', labelId: 'Akses Sistem Pembelajaran', labelEn: '24/7 Learning Cloud Portal', detailId: 'Materi video, modul daring, & kuis mandiri', detailEn: 'Video modules, ebooks, & self-paced quizzes' },
];

export const STUDENT_NETWORK: StudentProfile[] = [
  {
    id: 'std-1',
    name: 'Siti Rahmawati',
    country: 'Taiwan',
    flag: '🇹🇼',
    city: 'Taichung',
    workRole: 'Caregiver Senior & Pekerja Mandiri',
    semester: 4,
    concentration: 'Manajemen Pemasaran Digital',
    quote: 'Kuliah di Manajemen Sibermu memungkinkan saya tetap bekerja merawat lansia di Taiwan sambil belajar bisnis untuk bekal membuka toko retail saat pulang ke Indonesia.',
    avatarBg: 'bg-emerald-950/70 border-emerald-500/40 text-emerald-300',
    badge: 'Ketua Divisi Komunitas Taiwan'
  },
  {
    id: 'std-2',
    name: 'Budi Santoso',
    country: 'Jepang',
    flag: '🇯🇵',
    city: 'Nagoya',
    workRole: 'Teknisi Manufaktur Otomotif',
    semester: 6,
    concentration: 'Manajemen Operasional & Rantai Pasok',
    quote: 'Jadwal shift lembur tidak menghalangi saya menyimak rekaman dosen dan mengunggah tugas pada akhir pekan. Fleksibilitas sistem Sibermu sangat luar biasa.',
    avatarBg: 'bg-blue-950/70 border-blue-500/40 text-blue-300',
    badge: 'Koordinator Riset Jepang'
  },
  {
    id: 'std-3',
    name: 'Nurul Hidayah',
    country: 'Korea Selatan',
    flag: '🇰🇷',
    city: 'Ansan',
    workRole: 'Operator Produksi Industri Elektronik',
    semester: 4,
    concentration: 'Manajemen Keuangan Global',
    quote: 'Dukungan teman-teman seangkatan Manajemen 11 sangat hangat. Kami punya sesi belajar bersama virtual tiap hari Minggu antar zona waktu.',
    avatarBg: 'bg-amber-950/70 border-amber-500/40 text-amber-300',
    badge: 'Sekretaris Angkatan 11'
  },
  {
    id: 'std-4',
    name: 'Ahmad Fauzi',
    country: 'Uni Emirat Arab',
    flag: '🇦🇪',
    city: 'Dubai',
    workRole: 'Supervisor Layanan Perhotelan',
    semester: 6,
    concentration: 'Manajemen Sumber Daya Manusia Internasional',
    quote: 'Menempuh S1 dari Dubai dengan ijazah resmi yang diakui Kemendikbudristek dan asosiasi profesi internasional membuka peluang promosi manajerial saya.',
    avatarBg: 'bg-purple-950/70 border-purple-500/40 text-purple-300',
    badge: 'Duta Kolaborasi Timur Tengah'
  },
  {
    id: 'std-5',
    name: 'Dewi Lestari',
    country: 'Hong Kong',
    flag: '🇭🇰',
    city: 'Wan Chai',
    workRole: 'Pekerja Domestik & Content Creator Edukasi',
    semester: 2,
    concentration: 'Kewirausahaan & Digital Business',
    quote: 'Jangan pernah malu memulai kuliah sarjana di usia berapa pun. Di Manajemen 11 Sibermu, kita saling memotivasi tanpa batas geografis.',
    avatarBg: 'bg-rose-950/70 border-rose-500/40 text-rose-300',
    badge: 'Divisi Media & Kreatif'
  },
  {
    id: 'std-6',
    name: 'Rizky Kurniawan',
    country: 'Malaysia',
    flag: '🇲🇾',
    city: 'Kuala Lumpur',
    workRole: 'Staff Logistik & Administrasi Niaga',
    semester: 4,
    concentration: 'Manajemen Bisnis Global',
    quote: 'Materi kuliahnya mutakhir dan langsung bisa saya praktikkan di lingkungan kerja korporasi logistik multinasional.',
    avatarBg: 'bg-cyan-950/70 border-cyan-500/40 text-cyan-300',
    badge: 'Koordinator Wilayah ASEAN'
  }
];

export const COURSES_CATALOG: Course[] = [
  {
    code: 'MAN101',
    name: 'Pengantar Manajemen & Bisnis Modern',
    nameEn: 'Introduction to Management & Modern Business',
    credits: 3,
    semester: 1,
    type: 'Wajib',
    description: 'Konsep dasar fungsi manajemen (POAC), etika bisnis, dan ekosistem industri digital era globalisasi.',
    competencies: ['Analisis Struktur Organisasi', 'Pengambilan Keputusan Manajerial', 'Etika Bisnis Global']
  },
  {
    code: 'MAN102',
    name: 'Ekonomi Mikro & Makro Terapan',
    nameEn: 'Applied Micro & Macro Economics',
    credits: 3,
    semester: 1,
    type: 'Wajib',
    description: 'Pemahaman mekanisme pasar, kebijakan fiskal moneter, serta dampaknya bagi operasional perusahaan.',
    competencies: ['Analisis Permintaan & Penawaran', 'Indikator Makroekonomi', 'Strategi Penentuan Harga']
  },
  {
    code: 'MAN201',
    name: 'Manajemen Pemasaran Digital & E-Commerce',
    nameEn: 'Digital Marketing & E-Commerce Management',
    credits: 3,
    semester: 3,
    type: 'Konsentrasi',
    description: 'Penerapan strategi pemasaran omnichannel, analitik media sosial, SEO/SEM, dan manajemen konversi digital.',
    competencies: ['Social Media Marketing Strategy', 'Consumer Journey Mapping', 'Marketing Analytics']
  },
  {
    code: 'MAN202',
    name: 'Manajemen Operasional & Rantai Pasok Global',
    nameEn: 'Operations & Global Supply Chain Management',
    credits: 3,
    semester: 3,
    type: 'Wajib',
    description: 'Perancangan proses manufaktur efisien, logistik antarnegara, manajemen persediaan, dan standardisasi kualitas.',
    competencies: ['Optimasi Logistik Lintas Batas', 'Six Sigma Basics', 'Manajemen Vendor Global']
  },
  {
    code: 'MAN301',
    name: 'Manajemen Keuangan Korporat & Valuta Asing',
    nameEn: 'Corporate Finance & Foreign Exchange Management',
    credits: 3,
    semester: 5,
    type: 'Konsentrasi',
    description: 'Pengelolaan modal kerja, kelayakan investasi, mitigasi risiko nilai tukar, dan instrumen pendanaan digital.',
    competencies: ['Capital Budgeting', 'Hedging Kurs Valas', 'Analisis Laporan Keuangan']
  },
  {
    code: 'MAN302',
    name: 'Kepemimpinan & Perilaku Organisasi Lintas Budaya',
    nameEn: 'Cross-Cultural Leadership & Organizational Behavior',
    credits: 3,
    semester: 5,
    type: 'Wajib',
    description: 'Strategi memimpin tim multibahasa dan multikultural di tempat kerja multinasional.',
    competencies: ['Negosiasi Antarbudaya', 'Resolusi Konflik Tim', 'Transformasi Budaya Kerja']
  },
  {
    code: 'MAN401',
    name: 'Manajemen Strategik & Bisnis Internasional',
    nameEn: 'Strategic Management & International Business',
    credits: 4,
    semester: 7,
    type: 'Wajib',
    description: 'Formulasi strategi korporat bersaing di pasar mancanegara, ekspansi ekspor-impor, dan evaluasi portofolio.',
    competencies: ['SWOT & PESTLE Lanjutan', 'Strategi Penetrasi Pasar Global', 'Governance & ESG']
  },
  {
    code: 'MAN402',
    name: 'Skripsi / Proyek Akhir Bisnis Aplikatif',
    nameEn: 'Undergraduate Thesis / Applied Business Capstone',
    credits: 6,
    semester: 8,
    type: 'Wajib',
    description: 'Riset mandiri atau penyusunan model bisnis komprehensif didampingi dosen pembimbing via daring penuh.',
    competencies: ['Metodologi Penelitian Manajemen', 'Penulisan Naskah Ilmiah', 'Pertahanan Sidang Ujian Terbuka Daring']
  }
];

export const ACADEMIC_EVENTS: AcademicEvent[] = [
  {
    id: 'evt-1',
    date: '10 - 24 Okt 2026',
    title: 'Pengisian KRS Online & Konsultasi Pembimbing Akademik',
    titleEn: 'Online Course Registration (KRS) & Academic Advising',
    category: 'KRS',
    timeWib: '08:00 - 23:59 WIB',
    description: 'Mahasiswa memilih paket mata kuliah melalui portal akademik Sibermu terintegrasi.'
  },
  {
    id: 'evt-2',
    date: '28 Okt 2026',
    title: 'Kuliah Umum Perdana & Orientasi Mahasiswa PJJ Mancanegara',
    titleEn: 'Inaugural Public Lecture & Overseas Orientation',
    category: 'Webinar',
    timeWib: '19:00 - 21:30 WIB (Menyesuaikan Zona Waktu Malam di LN)',
    description: 'Sesi temu virtual rektorat, pimpinan fakultas ekonomi bisnis, dan seluruh pengurus angkatan 11.'
  },
  {
    id: 'evt-3',
    date: '02 Nov 2026',
    title: 'Aktivasi Modul Perkuliahan Pekan 1 (LMS Sibermu)',
    titleEn: 'Week 1 Course Modules Activation on Sibermu LMS',
    category: 'Perkuliahan',
    timeWib: 'Tersedia 24 Jam Mandiri',
    description: 'Pembukaan materi video interaktif, forum diskusi kelas, dan referensi bacaan digital.'
  },
  {
    id: 'evt-4',
    date: '14 - 21 Des 2026',
    title: 'Ujian Tengah Semester (UTS) Daring Terjadwal',
    titleEn: 'Scheduled Midterm Online Examination (UTS)',
    category: 'Ujian',
    timeWib: 'Window Waktu Ujian 48 Jam Per Mata Kuliah',
    description: 'Sistem ujian berbasis esai analisis studi kasus dengan fleksibilitas jadwal bagi pekerja shift.'
  },
  {
    id: 'evt-5',
    date: '15 Jan 2027',
    title: 'Webinar Internasional: Eksportasi Produk UMKM Diaspora',
    titleEn: 'International Webinar: Diaspora SME Export Strategies',
    category: 'Webinar',
    timeWib: '19:30 - 21:30 WIB',
    description: 'Menghadirkan atase perdagangan dan praktisi bisnis ekspor Indonesia di kawasan Asia Pasifik.'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    imageUrl: LMS_IMAGE,
    caption: '✨ Selamat Datang di Keluarga Besar Manajemen 11 Sibermu PJJ Luar Negeri! Langkah besar dimulai dari keberanian menuntut ilmu tanpa dibatasi jarak dan benua. "Connecting Minds Beyond Borders". Jangan biarkan rutinitas kerja menghentikan mimpimu meraih gelar sarjana! 🎓🌏\n\n#Manajemen11 #Sibermu #PJJLuarNegeri #KuliahSambilKerja #DiasporaIndonesia',
    captionEn: '✨ Welcome to the Management 11 Family at Sibermu Overseas Distance Learning! A giant leap starts with the courage to pursue higher education beyond borders. #Manajemen11 #Sibermu #StudyAbroad',
    likes: 428,
    commentsCount: 36,
    date: '2 hari lalu',
    tag: 'Official Welcome',
    commentsList: [
      { user: 'rahma.tw', text: 'Salam semangat dari Taichung Taiwan! Siap belajar bareng rekan-rekan angkatan 11 🔥', time: '1 hari lalu' },
      { user: 'budi_japan89', text: 'Alhamdulillah portal LMS sudah aktif dan materi video sangat jelas 👏', time: '18 jam lalu' },
      { user: 'dewi_hk_pjj', text: 'Bangga bisa kuliah sarjana manajemen sambil kerja di Hong Kong. Sukses kita semua!', time: '12 jam lalu' }
    ]
  },
  {
    id: 'ig-2',
    imageUrl: HERO_IMAGE,
    caption: '🌏 Dari Tokyo, Taipei, Kuala Lumpur, hingga Riyadh dan Dubai — kita terhubung dalam satu ruang akademik berkualitas tinggi. Perkuliahan asinkronus Universitas Siber Muhammadiyah dirancang khusus ramah pekerja shift mancanegara.\n\nSimak panduan aktivasi akun LMS dan tips membagi waktu kerja vs kuliah di tautan bio! 💡📚\n\n#KuliahOnline #PJJMuhammadiyah #ManajemenS1',
    captionEn: '🌏 Connected across Tokyo, Taipei, Kuala Lumpur to Riyadh and Dubai under one premier academic umbrella. Asynchronous learning built for global shift workers.',
    likes: 512,
    commentsCount: 42,
    date: '5 hari lalu',
    tag: 'Study Tips & LMS',
    commentsList: [
      { user: 'fauzi_dxb', text: 'Tips manajemen waktunya sangat berguna min, apalagi beda waktu 3 jam dari Jakarta.', time: '4 hari lalu' },
      { user: 'nurul_ansan', text: 'Fitur download materi PDF di LMS ngebantu banget pas lagi di subway 👍', time: '3 hari lalu' }
    ]
  },
  {
    id: 'ig-3',
    imageUrl: COMMUNITY_IMAGE,
    caption: '📢 Sharing Session Pekanan: Diskusi Studi Kelayakan Bisnis bersama Koordinator Wilayah Taiwan & Jepang. Diskusi hangat mengenai bagaimana alumni PJJ sukses merintis wirausaha setelah purna tugas di luar negeri.\n\nTerima kasih kepada lebih dari 180 mahasiswa yang bergabung via Zoom malam tadi! Bersama kita tumbuh dan saling menguatkan 🤝✨\n\n#Manajemen11Event #WebinarDiaspora #BisnisMandiri',
    captionEn: '📢 Weekly Sharing Session: Business Feasibility Study with Taiwan & Japan coordinators. Preparing entrepreneurship ventures after completing overseas contracts.',
    likes: 389,
    commentsCount: 29,
    date: '1 pekan lalu',
    tag: 'Community Gathering',
    commentsList: [
      { user: 'kurniawan_my', text: 'Dapat banyak wawasan legalitas izin usaha di Indonesia, mantap!', time: '6 hari lalu' },
      { user: 'anita_seoul', text: 'Rekaman sesi semalam bisa diakses di Google Drive angkatan kan min? Kemarin sempat overtime kerja.', time: '5 hari lalu' }
    ]
  }
];

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'anc-1',
    date: '25 Sep 2026',
    title: 'Pendaftaran Jalur Beasiswa Pekerja Migran Mandiri Angkatan Baru Telah Dibuka',
    titleEn: 'Registration for Overseas Worker Self-Empowerment Scholarship Intake Now Open',
    category: 'Beasiswa',
    summary: 'Dapatkan potongan biaya penyelenggaraan pendidikan (SPP) hingga 35% bagi pekerja migran Indonesia yang melampirkan surat kontrak kerja aktif.',
    summaryEn: 'Receive up to 35% tuition fee subsidies for active Indonesian migrant workers overseas upon submitting proof of employment contract.',
    readTime: '3 mnt'
  },
  {
    id: 'anc-2',
    date: '22 Sep 2026',
    title: 'Pedoman Penyesuaian Zona Waktu Ujian Online Mahasiswa PJJ Luar Negeri',
    titleEn: 'Timezone Adaptation Guidelines for Online Exams for Overseas Students',
    category: 'Akademik',
    summary: 'Pusat Pembelajaran Jarak Jauh memberikan rentang waktu (exam window) 48 jam untuk setiap mata kuliah agar tidak berbenturan dengan jam kerja lokal.',
    summaryEn: 'The distance learning center provides a 48-hour exam window per course to ensure zero conflict with local overseas working shifts.',
    readTime: '4 mnt'
  },
  {
    id: 'anc-3',
    date: '18 Sep 2026',
    title: 'Pembentukan Kelompok Belajar Terbimbing (Study Club) Wilayah Asia Timur',
    titleEn: 'Establishment of Guided Study Clubs for East Asia Region',
    category: 'Komunitas',
    summary: 'Pengurus Angkatan 11 menginisiasi kelompok belajar daring mingguan untuk mata kuliah Manajemen Keuangan dan Operasional.',
    summaryEn: 'Management 11 council initiates weekly online study pods for Corporate Finance and Operations Management.',
    readTime: '2 mnt'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'PJJ & Belajar',
    question: 'Apakah ada kewajiban hadir tatap muka langsung di kampus?',
    questionEn: 'Is there any requirement for in-person campus attendance?',
    answer: 'Tidak sama sekali. Seluruh proses pembelajaran mulai dari pendaftaran, perkuliahan mingguan, tugas, ujian tengah/akhir semester, bimbingan proposal, hingga sidang skripsi dilakukan 100% secara daring melalui LMS terakreditasi Universitas Siber Muhammadiyah.',
    answerEn: 'Not at all. The entire learning lifecycle—from admission, weekly modules, assignments, exams, research advising to thesis defense—is conducted 100% online through our accredited LMS.'
  },
  {
    id: 'faq-2',
    category: 'Pekerjaan & Waktu',
    question: 'Bagaimana jika jam kerja saya sistem shift atau lembur?',
    questionEn: 'What if I work rotating factory shifts or long overtime hours?',
    answer: 'Sistem pembelajaran menggunakan metode asinkronus (asynchronous learning). Anda dapat menonton rekaman video perkuliahan dosen, membaca materi kuliah, dan mengerjakan kuis kapan saja selama 24 jam sehari sesuai waktu luang Anda, baik saat istirahat kerja maupun akhir pekan.',
    answerEn: 'Our system relies on asynchronous learning. You can stream lecture recordings, read materials, and submit quizzes anytime 24/7 during your break times or off-days without attending mandatory live daytime streams.'
  },
  {
    id: 'faq-3',
    category: 'Legalitas & Ijazah',
    question: 'Apakah ijazah S1 Manajemen ini resmi dan diakui pemerintah?',
    questionEn: 'Is this Bachelor of Management degree officially recognized by the government?',
    answer: 'Ya, resmi dan terdaftar di Pangkalan Data Pendidikan Tinggi (PDDikti) Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi RI. Ijazah yang diperoleh berstatus sah sebagai Sarjana Manajemen (S.M.) yang dapat digunakan untuk pendaftaran CPNS, kenaikan jenjang karier, maupun melanjutkan ke jenjang Magister (S2).',
    answerEn: 'Yes, fully accredited and registered with PDDikti (Ministry of Education, Culture, Research, and Technology of the Republic of Indonesia). The degree is legally recognized as Bachelor of Management (S.M.).'
  },
  {
    id: 'faq-4',
    category: 'Biaya & Admisi',
    question: 'Berapa perkiraan biaya kuliah dan apakah bisa diangsur bulanan?',
    questionEn: 'What are the tuition fees and are installment plans available?',
    answer: 'Biaya kuliah sangat terjangkau bagi pekerja di luar negeri (sekitar Rp 2.500.000 - Rp 3.000.000 per semester atau setara ~NTD 5.000 / ~JPY 25.000 / ~MYR 800) dan tersedia fasilitas pembayaran cicilan fleksibel 3x per semester serta pembayaran melalui transfer bank internasional atau kanal pembayaran resmi.',
    answerEn: 'Tuition fees are very affordable for overseas workers (approx. IDR 2,500,000 - 3,000,000 per semester, roughly ~NTD 5,000 / ~JPY 25,000 / ~MYR 800) with flexible 3x installment plans and international payment methods.'
  },
  {
    id: 'faq-5',
    category: 'Biaya & Admisi',
    question: 'Apa saja syarat pendaftaran calon mahasiswa baru PJJ Luar Negeri?',
    questionEn: 'What are the admission requirements for overseas students?',
    answer: 'Persyaratan sangat mudah: 1) Scan/foto Ijazah SMA/SMK/MA/sederajat atau Paket C, 2) KTP / Paspor RI yang masih berlaku, 3) Pas foto resmi latar belakang merah/biru, 4) Surat keterangan kerja / visa kerja luar negeri (untuk jalur beasiswa diaspora).',
    answerEn: 'Requirements are straightforward: 1) High school / vocational diploma (or equivalent), 2) Valid Indonesian National ID or Passport, 3) Official passport-style photo, 4) Proof of overseas employment or work visa.'
  }
];

export const TUITION_CURRENCIES = [
  { code: 'IDR', symbol: 'Rp', rate: 1, name: 'Rupiah Indonesia' },
  { code: 'TWD', symbol: 'NT$', rate: 0.0020, name: 'Taiwan New Dollar' },
  { code: 'JPY', symbol: '¥', rate: 0.0095, name: 'Japanese Yen' },
  { code: 'KRW', symbol: '₩', rate: 0.084, name: 'Korean Won' },
  { code: 'MYR', symbol: 'RM', rate: 0.00028, name: 'Malaysian Ringgit' },
  { code: 'SAR', symbol: 'SAR', rate: 0.00024, name: 'Saudi Riyal' },
  { code: 'AED', symbol: 'AED', rate: 0.00023, name: 'UAE Dirham' },
  { code: 'USD', symbol: '$', rate: 0.000063, name: 'US Dollar' }
];

export const ORGANIZATIONAL_STRUCTURE = [
  {
    roleId: 'Pembina Akademik & Kaprodi',
    roleEn: 'Academic Advisor & Head of Study Program',
    name: 'Dr. H. M. Arifin, S.E., M.M.',
    affiliation: 'Fakultas Bisnis & Manajemen Sibermu',
    description: 'Pakar tata kelola korporasi dan pembelajaran jarak jauh bersertifikasi internasional.'
  },
  {
    roleId: 'Ketua Angkatan 11 PJJ LN',
    roleEn: 'President of Batch 11 Overseas',
    name: 'Ilham Prasetyo, S.Tr.',
    affiliation: 'Mahasiswa S1 Manajemen (Kobe, Jepang)',
    description: 'Penggerak advokasi hak belajar pekerja migran dan jembatan komunikasi mahasiswa dengan dekanat.'
  },
  {
    roleId: 'Wakil Ketua & Koordinator Wilayah Taiwan',
    roleEn: 'Vice President & Taiwan Regional Coordinator',
    name: 'Endang Purwanti',
    affiliation: 'Mahasiswa S1 Manajemen (Taipei, Taiwan)',
    description: 'Mengkoordinir lebih dari 65 mahasiswa di berbagai distrik perindustrian Taiwan.'
  },
  {
    roleId: 'Sekretaris & Hubungan Luar Negeri',
    roleEn: 'Secretary & Global Public Relations',
    name: 'Fathur Rahman',
    affiliation: 'Mahasiswa S1 Manajemen (Kuala Lumpur, Malaysia)',
    description: 'Pengelola media informasi resmi Instagram dan jaringan komunikasi lintas ormas diaspora.'
  }
];
