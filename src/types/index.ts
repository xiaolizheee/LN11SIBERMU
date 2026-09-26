export type Language = 'id' | 'en';

export type FocusMode = 'all' | 'admission' | 'community' | 'academic';

export interface WorldClock {
  city: string;
  country: string;
  timezone: string;
  abbr: string;
  flag: string;
}

export interface StudentProfile {
  id: string;
  name: string;
  country: string;
  flag: string;
  city: string;
  workRole: string;
  semester: number;
  concentration: string;
  quote: string;
  avatarBg: string;
  badge: string;
}

export interface Course {
  code: string;
  name: string;
  nameEn: string;
  credits: number;
  semester: number;
  type: 'Wajib' | 'Pilihan' | 'Konsentrasi';
  description: string;
  competencies: string[];
}

export interface AcademicEvent {
  id: string;
  date: string;
  title: string;
  titleEn: string;
  category: 'KRS' | 'Perkuliahan' | 'Ujian' | 'Webinar' | 'Wisuda';
  timeWib: string;
  description: string;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  captionEn: string;
  likes: number;
  commentsCount: number;
  date: string;
  tag: string;
  commentsList: { user: string; text: string; time: string }[];
}

export interface Announcement {
  id: string;
  date: string;
  title: string;
  titleEn: string;
  category: 'Akademik' | 'Beasiswa' | 'Webinar' | 'Komunitas';
  summary: string;
  summaryEn: string;
  readTime: string;
}

export interface FaqItem {
  id: string;
  category: 'PJJ & Belajar' | 'Pekerjaan & Waktu' | 'Legalitas & Ijazah' | 'Biaya & Admisi';
  question: string;
  questionEn: string;
  answer: string;
  answerEn: string;
}
