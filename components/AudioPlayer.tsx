"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2 } from "lucide-react";

export function AudioPlayer({ src, label }: { src: string; label?: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setProgress(audio.currentTime);
    const onLoaded = () => setDuration(audio.duration || 0);
    const onEnd = () => setPlaying(false);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  const format = (t: number) => {
    if (!isFinite(t)) return "0:00";
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  if (!src) {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-dashed border-brand-300 bg-brand-50/50 px-4 py-3 text-sm text-brand-400 dark:border-brand-700 dark:bg-brand-900/40">
        <Volume2 size={16} />
        Tilawat audio not yet configured — add an mp3 URL in mock-data.ts.
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 rounded-xl border border-brand-200 bg-cream-50 px-4 py-3 dark:border-brand-700 dark:bg-brand-950">
      <audio ref={audioRef} src={src} preload="metadata" />
      <button
        onClick={toggle}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-700 text-cream-50 transition hover:bg-brand-600 dark:bg-gold-500 dark:text-brand-950"
        aria-label={playing ? "Pause" : "Play"}
      >
        {playing ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
      </button>
      <div className="flex-1">
        {label && <p className="mb-1 text-xs font-medium text-brand-600 dark:text-brand-300">{label}</p>}
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-brand-100 dark:bg-brand-800">
          <div
            className="h-full bg-gold-500 transition-all"
            style={{ width: duration ? `${(progress / duration) * 100}%` : "0%" }}
          />
        </div>
      </div>
      <span className="w-16 shrink-0 text-right text-xs text-brand-400 dark:text-brand-400">
        {format(progress)} / {format(duration)}
      </span>
    </div>
  );
}
