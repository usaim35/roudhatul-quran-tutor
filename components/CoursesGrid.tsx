import { BookOpen, Mic, Users, Brain, Languages, Sparkles, Star } from "lucide-react";
import Link from "next/link";
import { courses, type Course } from "@/lib/mock-data";

const icons = {
  book: BookOpen,
  mic: Mic,
  users: Users,
  brain: Brain,
  languages: Languages,
  sparkles: Sparkles,
};

const badgeStyles: Record<Course["badge"], string> = {
  "Start Here": "bg-brand-600 text-cream-50",
  "Most Popular": "bg-brand-600 text-cream-50",
  Trending: "bg-brand-600 text-cream-50",
  "Kids & Adults": "bg-brand-600 text-cream-50",
  New: "bg-gold-500 text-brand-950",
};

function CourseCard({ course }: { course: Course }) {
  const Icon = icons[course.icon];
  return (
    <div id={course.slug} className="card flex scroll-mt-24 flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-glow">
      <div className="relative flex h-36 items-center justify-center bg-gradient-to-br from-brand-100 to-brand-200 dark:from-brand-800 dark:to-brand-900">
        <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold ${badgeStyles[course.badge]}`}>
          {course.badge}
        </span>
        <Icon size={42} className="text-brand-600/70 dark:text-gold-300/80" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center gap-1 text-xs font-medium text-gold-600 dark:text-gold-400">
          <Star size={13} fill="currentColor" /> {course.rating} ({course.reviews} Reviews)
        </div>
        <h3 className="font-display text-lg font-semibold text-brand-800 dark:text-cream-50">{course.title}</h3>
        <p className="text-sm leading-relaxed text-brand-500 dark:text-brand-300">{course.description}</p>
        <p className="text-xs text-brand-400 dark:text-brand-400">
          {course.level} · {course.students}
        </p>
        <div className="mt-3 flex items-center justify-between border-t border-brand-200/70 pt-3 dark:border-brand-800/70">
          <span className="text-lg font-bold text-brand-700 dark:text-gold-300">${course.priceUsd}/mo</span>
          <Link href="/signup" className="btn-primary !px-4 !py-2">
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export function CoursesGrid({ limit }: { limit?: number }) {
  const list = limit ? courses.slice(0, limit) : courses;
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((c) => (
        <CourseCard key={c.id} course={c} />
      ))}
    </div>
  );
}
