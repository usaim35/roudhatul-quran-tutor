"use client";

import { useState } from "react";
import { PlayCircle, Clock, X, UserRound } from "lucide-react";
import { videoLectures, type VideoLecture } from "@/lib/mock-data";

export function VideoLibrary() {
  const [active, setActive] = useState<VideoLecture | null>(null);

  return (
    <section id="videos" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="mb-8 text-center">
        <h2 className="section-title">Video Lecture Library</h2>
        <div className="ornament-divider mt-3" />
        <p className="mx-auto mt-3 max-w-xl text-sm text-brand-500 dark:text-brand-300">
          Lessons streamed directly from our Google Drive archive. Connect your Drive
          folder to replace these placeholders — see README for setup.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {videoLectures.map((v) => (
          <button
            key={v.id}
            onClick={() => setActive(v)}
            className="card group flex flex-col overflow-hidden text-left transition hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="flex h-32 items-center justify-center bg-gradient-to-br from-brand-100 to-brand-200 dark:from-brand-800 dark:to-brand-900">
              <PlayCircle
                size={44}
                className="text-brand-600/70 transition group-hover:scale-110 dark:text-gold-300/80"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-4">
              <h3 className="text-sm font-semibold leading-snug text-brand-800 dark:text-cream-50">
                {v.title}
              </h3>
              <div className="mt-auto flex items-center justify-between text-xs text-brand-500 dark:text-brand-300">
                <span className="flex items-center gap-1">
                  <UserRound size={12} /> {v.teacher}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} /> {v.duration}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="w-full max-w-3xl overflow-hidden rounded-2xl bg-brand-950 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-brand-800 px-4 py-3">
              <p className="truncate pr-4 text-sm font-medium text-cream-100">{active.title}</p>
              <button onClick={() => setActive(null)} className="text-brand-300 hover:text-white">
                <X size={20} />
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                src={active.driveEmbedUrl}
                className="h-full w-full"
                allow="autoplay"
                title={active.title}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
