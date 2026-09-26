import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CoursesGrid } from "@/components/CoursesGrid";

export default function CoursesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="px-4 py-10 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-400">
            Home / Courses
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold text-brand-900 dark:text-cream-50 sm:text-4xl">
            Online Qur'an Courses
          </h1>
          <p className="mx-auto mt-2 max-w-lg text-sm text-brand-500 dark:text-brand-300">
            Live, one-on-one classes for every age and level.
          </p>
        </section>
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <CoursesGrid />
        </section>
      </main>
      <Footer />
    </>
  );
}
