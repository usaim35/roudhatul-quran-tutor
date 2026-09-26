// Replace these placeholders with real content once your Google Drive /
// Google Meet / Quran API integrations are wired up. See README.md.

export interface VideoLecture {
  id: string;
  title: string;
  teacher: string;
  duration: string;
  thumbnail: string;
  // Paste a Google Drive "file/d/FILE_ID/preview" embed URL here
  driveEmbedUrl: string;
}

export const videoLectures: VideoLecture[] = [
  {
    id: "v1",
    title: "Tajweed Basics: Makharij al-Huroof",
    teacher: "Ustadh Ahmad",
    duration: "24:10",
    thumbnail: "",
    driveEmbedUrl: "https://drive.google.com/file/d/REPLACE_WITH_FILE_ID/preview",
  },
  {
    id: "v2",
    title: "Surah Al-Mulk — Line by Line Explanation",
    teacher: "Ustadha Maryam",
    duration: "38:42",
    thumbnail: "",
    driveEmbedUrl: "https://drive.google.com/file/d/REPLACE_WITH_FILE_ID/preview",
  },
  {
    id: "v3",
    title: "Noorani Qaida — Lesson 3",
    teacher: "Ustadh Bilal",
    duration: "15:55",
    thumbnail: "",
    driveEmbedUrl: "https://drive.google.com/file/d/REPLACE_WITH_FILE_ID/preview",
  },
  {
    id: "v4",
    title: "Seerah Series: The Meccan Period",
    teacher: "Ustadh Ahmad",
    duration: "41:20",
    thumbnail: "",
    driveEmbedUrl: "https://drive.google.com/file/d/REPLACE_WITH_FILE_ID/preview",
  },
];

export interface MeetSession {
  id: string;
  className: string;
  teacher: string;
  day: string;
  time: string;
  joinCode: string;
  meetLink: string;
}

export const meetSessions: MeetSession[] = [
  {
    id: "m1",
    className: "Hifz Circle — Juz 1",
    teacher: "Ustadh Ahmad",
    day: "Mon / Wed / Fri",
    time: "6:30 PM PKT",
    joinCode: "abc-defg-hij",
    meetLink: "https://meet.google.com/abc-defg-hij",
  },
  {
    id: "m2",
    className: "Tajweed for Beginners",
    teacher: "Ustadha Maryam",
    day: "Tue / Thu",
    time: "7:15 PM PKT",
    joinCode: "xyz-mnop-qrs",
    meetLink: "https://meet.google.com/xyz-mnop-qrs",
  },
  {
    id: "m3",
    className: "Kids Noorani Qaida",
    teacher: "Ustadh Bilal",
    day: "Sat / Sun",
    time: "10:00 AM PKT",
    joinCode: "klm-nopq-rst",
    meetLink: "https://meet.google.com/klm-nopq-rst",
  },
];

export interface QuranSlide {
  id: string;
  surah: string;
  ayahNumber: number;
  arabic: string;
  translation: string;
}

export const quranSlides: QuranSlide[] = [
  {
    id: "q1",
    surah: "Al-Fatihah",
    ayahNumber: 2,
    arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    translation: "All praise is due to Allah, Lord of the worlds.",
  },
  {
    id: "q2",
    surah: "Al-Baqarah",
    ayahNumber: 255,
    arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
    translation: "Allah — there is no deity except Him, the Ever-Living, the Sustainer of existence.",
  },
  {
    id: "q3",
    surah: "Ash-Sharh",
    ayahNumber: 6,
    arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "Indeed, with hardship comes ease.",
  },
  {
    id: "q4",
    surah: "Al-Ikhlas",
    ayahNumber: 1,
    arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
    translation: "Say, He is Allah, the One.",
  },
];

// --- Marketing site content -------------------------------------------------
// All wording below is original placeholder copy for this project. Rewrite it
// in your own voice before launch — don't copy text from any other academy's
// live website, since course descriptions, taglines, and blog posts are
// covered by copyright even when they read like generic marketing language.

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  badge: "Start Here" | "Most Popular" | "Trending" | "Kids & Adults" | "New";
  icon: "book" | "mic" | "users" | "brain" | "languages" | "sparkles";
  rating: number;
  reviews: number;
  level: string;
  students: string;
  priceUsd: number;
}

export const courses: Course[] = [
  {
    id: "c1",
    slug: "noorani-qaida",
    title: "Noorani Qaida Foundations",
    description:
      "A gentle starting point for total beginners: Arabic letters, correct pronunciation, and short words, taught one-on-one at a pace that fits your child.",
    badge: "Start Here",
    icon: "book",
    rating: 4.8,
    reviews: 64,
    level: "Beginner",
    students: "500+ students",
    priceUsd: 39,
  },
  {
    id: "c2",
    slug: "quran-reading-tajweed",
    title: "Qur'an Reading & Tajweed",
    description:
      "Build fluent, correct recitation step by step — proper articulation points, common Tajweed rules, and plenty of guided practice with a teacher listening live.",
    badge: "Most Popular",
    icon: "mic",
    rating: 4.9,
    reviews: 97,
    level: "All levels",
    students: "700+ students",
    priceUsd: 42,
  },
  {
    id: "c3",
    slug: "quran-memorization-hifz",
    title: "Hifz — Qur'an Memorization",
    description:
      "A structured daily memorization plan with built-in revision, so new pages stick. Designed for both children and adults working toward completing the Qur'an.",
    badge: "Kids & Adults",
    icon: "brain",
    rating: 4.9,
    reviews: 58,
    level: "All levels",
    students: "300+ students",
    priceUsd: 68,
  },
  {
    id: "c4",
    slug: "tafseer-classes",
    title: "Tafseer & Reflection",
    description:
      "Move past recitation into meaning — explore the context and lessons of selected surahs in plain English, guided by a knowledgeable teacher.",
    badge: "Trending",
    icon: "sparkles",
    rating: 4.7,
    reviews: 41,
    level: "Intermediate+",
    students: "200+ students",
    priceUsd: 45,
  },
  {
    id: "c5",
    slug: "islamic-studies",
    title: "Islamic Studies Essentials",
    description:
      "A friendly introduction to the pillars of Islam, salah, daily duas, and seerah — built for both kids and adults who are new to structured Islamic education.",
    badge: "Kids & Adults",
    icon: "users",
    rating: 4.8,
    reviews: 52,
    level: "All levels",
    students: "350+ students",
    priceUsd: 40,
  },
  {
    id: "c6",
    slug: "quranic-arabic",
    title: "Qur'anic Arabic Basics",
    description:
      "Learn to recognize common Qur'anic vocabulary and sentence patterns, so more of what you recite in salah starts to carry real meaning — no prior Arabic required.",
    badge: "New",
    icon: "languages",
    rating: 4.6,
    reviews: 19,
    level: "Beginner",
    students: "80+ students",
    priceUsd: 38,
  },
];

export interface PricingPlan {
  id: string;
  name: string;
  classesPerMonth: number;
  monthlyFeeUsd: number;
  badge?: "Popular" | "Best Value";
}

export const pricingPlans: PricingPlan[] = [
  { id: "p1", name: "Weekend Plan", classesPerMonth: 8, monthlyFeeUsd: 35 },
  { id: "p2", name: "3-Day Plan", classesPerMonth: 12, monthlyFeeUsd: 42, badge: "Popular" },
  { id: "p3", name: "4-Day Plan", classesPerMonth: 16, monthlyFeeUsd: 48 },
  { id: "p4", name: "5-Day Plan", classesPerMonth: 20, monthlyFeeUsd: 54 },
  { id: "p5", name: "Hifz Program", classesPerMonth: 20, monthlyFeeUsd: 68, badge: "Best Value" },
];

export interface Currency {
  code: string;
  label: string;
  symbol: string;
  // Approximate fixed rate relative to USD — replace with a live FX API call
  // (e.g. exchangerate.host) if you need real-time accuracy.
  rate: number;
}

export const currencies: Currency[] = [
  { code: "USD", label: "US Dollars", symbol: "$", rate: 1 },
  { code: "CAD", label: "Canadian Dollars", symbol: "CA$", rate: 1.37 },
  { code: "GBP", label: "UK Pounds", symbol: "£", rate: 0.78 },
  { code: "AUD", label: "Australian Dollars", symbol: "A$", rate: 1.52 },
  { code: "EUR", label: "Euro", symbol: "€", rate: 0.92 },
  { code: "AED", label: "UAE Dirhams", symbol: "AED", rate: 3.67 },
];

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
}

// Placeholder posts with an invented author name — swap in your real writers
// and your own original articles before publishing.
export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    slug: "helping-kids-stay-consistent-with-quran-practice",
    title: "Helping Kids Stay Consistent With Qur'an Practice",
    excerpt:
      "Consistency matters more than long sessions. A few practical habits that make daily practice easier for busy families.",
    author: "Team Roudhatul Quran",
    date: "2026-09-19",
  },
  {
    id: "b2",
    slug: "getting-started-with-online-quran-classes",
    title: "Getting Started With Online Qur'an Classes",
    excerpt:
      "New to online learning? Here's what a typical first month looks like, from placement to your first live session.",
    author: "Team Roudhatul Quran",
    date: "2026-09-18",
  },
  {
    id: "b3",
    slug: "a-realistic-hifz-timeline",
    title: "A Realistic Timeline for Starting Hifz",
    excerpt:
      "Memorizing the Qur'an is a long journey. Here's how we help students set a pace that's sustainable, not stressful.",
    author: "Team Roudhatul Quran",
    date: "2026-09-15",
  },
  {
    id: "b4",
    slug: "tajweed-mistakes-beginners-make",
    title: "Common Tajweed Mistakes New Reciters Make",
    excerpt:
      "A few pronunciation habits that are easy to pick up and just as easy to correct early, with the right feedback.",
    author: "Team Roudhatul Quran",
    date: "2026-09-11",
  },
  {
    id: "b5",
    slug: "how-online-quran-class-pricing-works",
    title: "How Online Qur'an Class Pricing Usually Works",
    excerpt:
      "A plain-language look at what affects monthly pricing for one-on-one online classes, so you know what to compare.",
    author: "Team Roudhatul Quran",
    date: "2026-09-07",
  },
  {
    id: "b6",
    slug: "why-live-one-on-one-classes-work",
    title: "Why Live, One-on-One Classes Work Better for Many Students",
    excerpt:
      "Group classes aren't for everyone. Here's what changes when a student gets a teacher's full attention each session.",
    author: "Team Roudhatul Quran",
    date: "2026-09-03",
  },
];

export interface ContactInfo {
  phonePrimary: string;
  email: string;
  whatsapp: string;
}

// Placeholder contact details — replace every value here with your own
// madrasa's real phone number, email, and WhatsApp link before launch.
export const contactInfo: ContactInfo = {
  phonePrimary: "+1 (555) 010-1234",
  email: "info@roudhatulquran.com",
  whatsapp: "https://wa.me/15550101234",
};

// Default video shown in the Tilawat player. Anyone can paste a different
// YouTube link into the widget itself to play that instead.
export const defaultTilawatYoutubeUrl = "";

export interface Hadith {
  id: string;
  text: string;
  narrator: string;
  source: string;
  audioUrl: string;
}

export const dailyHadith: Hadith = {
  id: "h1",
  text: "The best among you are those who learn the Qur'an and teach it to others.",
  narrator: "Uthman ibn Affan (RA)",
  source: "Sahih al-Bukhari 5027",
  // Replace with a hosted Tilawat / recitation audio file (mp3)
  audioUrl: "",
};
