"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { quranSlides } from "@/lib/mock-data";

export function QuranSlider() {
  const [index, setIndex] = useState(0);
  const slide = quranSlides[index];

  const prev = () => setIndex((i) => (i === 0 ? quranSlides.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === quranSlides.length - 1 ? 0 : i + 1));

  return (
    <section id="quran" className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <div className="mb-8 text-center">
        <h2 className="section-title">Verse of the Moment</h2>
        <div className="ornament-divider mt-3" />
      </div>

      <div className="card relative overflow-hidden p-8 sm:p-12">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-[10rem] font-arabic text-brand-100/40 dark:text-brand-800/30">
          ﷽
        </div>

        <div className="relative flex flex-col items-center gap-5 text-center">
          <p dir="rtl" className="font-arabic text-3xl leading-relaxed text-brand-800 dark:text-gold-100 sm:text-4xl">
            {slide.arabic}
          </p>
          <p className="max-w-lg text-sm text-brand-600 dark:text-brand-200 sm:text-base">
            "{slide.translation}"
          </p>
          <p className="text-xs font-medium uppercase tracking-widest text-gold-600 dark:text-gold-400">
            Surah {slide.surah} · Ayah {slide.ayahNumber}
          </p>
        </div>

        <div className="relative mt-8 flex items-center justify-center gap-4">
          <button onClick={prev} className="btn-secondary !rounded-full !p-2.5" aria-label="Previous ayah">
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-1.5">
            {quranSlides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition ${
                  i === index ? "bg-gold-500 w-5" : "bg-brand-200 dark:bg-brand-700"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} className="btn-secondary !rounded-full !p-2.5" aria-label="Next ayah">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
