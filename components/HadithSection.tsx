import { Quote, BookMarked } from "lucide-react";
import { dailyHadith } from "@/lib/mock-data";
import { AudioPlayer } from "./AudioPlayer";

export function HadithSection() {
  return (
    <section id="hadith" className="bg-brand-50/60 py-14 dark:bg-brand-900/30">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-8 text-center">
          <h2 className="section-title">Hadith of the Day</h2>
          <div className="ornament-divider mt-3" />
        </div>

        <div className="card p-6 sm:p-8">
          <Quote className="mb-4 text-gold-500" size={28} />
          <p className="font-display text-xl leading-relaxed text-brand-800 dark:text-cream-50 sm:text-2xl">
            "{dailyHadith.text}"
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-brand-500 dark:text-brand-300">
            <BookMarked size={14} />
            <span>
              {dailyHadith.narrator} · {dailyHadith.source}
            </span>
          </div>

          <div className="mt-6 border-t border-brand-200/70 pt-6 dark:border-brand-800/70">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-500 dark:text-brand-300">
              Tilawat — Recitation of the Day
            </p>
            <AudioPlayer src={dailyHadith.audioUrl} label="Today's recitation" />
          </div>
        </div>
      </div>
    </section>
  );
}
