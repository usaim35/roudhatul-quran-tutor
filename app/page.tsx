import Link from "next/link";
import { Star, ShieldCheck, Users2, Gift } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CoursesGrid } from "@/components/CoursesGrid";
import { PricingTable } from "@/components/PricingTable";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden px-4 py-16 text-center sm:px-6 sm:py-24">
          <p className="mb-3 font-arabic text-2xl text-gold-600 dark:text-gold-300 sm:text-3xl">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <h1 className="mx-auto max-w-2xl font-display text-3xl font-bold text-brand-900 dark:text-cream-50 sm:text-5xl">
            Learn the Qur'an with Heart & Clarity
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-brand-500 dark:text-brand-300 sm:text-base">
            Live one-on-one online classes for every age and level — Noorani Qaida, Tajweed,
            Hifz, Tafseer, and Islamic Studies — taught from the comfort of your home.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link href="/pricing" className="btn-primary">
              Get Free Trial!
            </Link>
            <Link href="/courses" className="btn-secondary">
              Browse Courses
            </Link>
          </div>
          <div className="mx-auto mt-8 flex max-w-lg flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-brand-500 dark:text-brand-300">
            <span className="flex items-center gap-1.5">
              <Star size={14} className="text-gold-500" fill="currentColor" /> Rated by real students
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-gold-500" /> Verified teachers
            </span>
            <span className="flex items-center gap-1.5">
              <Users2 size={14} className="text-gold-500" /> All ages welcome
            </span>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="section-title">Popular Courses</h2>
            <div className="ornament-divider mt-3" />
          </div>
          <CoursesGrid limit={3} />
          <div className="mt-8 text-center">
            <Link href="/courses" className="btn-secondary">
              View All Courses
            </Link>
          </div>
        </section>

        <section className="bg-brand-50/60 py-14 dark:bg-brand-900/30">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-8 text-center">
              <h2 className="section-title">Simple, Transparent Pricing</h2>
              <div className="ornament-divider mt-3" />
            </div>
            <PricingTable />
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
          <div className="card flex flex-col items-center gap-4 bg-gradient-to-br from-brand-700 to-brand-900 p-8 text-center text-cream-50 sm:p-12 dark:from-brand-800 dark:to-brand-950">
            <Gift size={32} className="text-gold-300" />
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Your First 3 Classes, Completely Free
            </h2>
            <p className="max-w-md text-sm text-cream-100/90">
              No credit card, no commitment — try a live class with a certified teacher and see
              if it's the right fit before you pay anything.
            </p>
            <Link href="/signup" className="btn-primary !bg-gold-500 !text-brand-950 hover:!bg-gold-400">
              Claim Your Free Classes
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 pb-14 text-center sm:px-6">
          <p className="text-sm text-brand-500 dark:text-brand-300">
            Already enrolled?{" "}
            <Link href="/dashboard" className="font-semibold text-brand-700 hover:text-gold-600 dark:text-gold-300">
              Go to your student dashboard
            </Link>{" "}
            for live classes, video lessons, and daily reflections.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
