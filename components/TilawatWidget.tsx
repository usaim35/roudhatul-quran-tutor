"use client";

import { useState, FormEvent } from "react";
import { Music, X, Play } from "lucide-react";
import { defaultTilawatYoutubeUrl } from "@/lib/mock-data";

function extractYoutubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtube\.com\/shorts\/|youtu\.be\/)([\w-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export function TilawatWidget() {
  const [open, setOpen] = useState(false);
  const [urlInput, setUrlInput] = useState("");
  const [videoId, setVideoId] = useState<string | null>(extractYoutubeId(defaultTilawatYoutubeUrl));
  const [error, setError] = useState<string | null>(null);

  const handlePlay = (e: FormEvent) => {
    e.preventDefault();
    const id = extractYoutubeId(urlInput.trim());
    if (!id) {
      setError("That doesn't look like a valid YouTube link. Try pasting the full URL.");
      return;
    }
    setError(null);
    setVideoId(id);
  };

  return (
    <div className="fixed bottom-5 left-5 z-50">
      {open && (
        <div className="mb-3 w-80 overflow-hidden rounded-2xl border border-brand-200 bg-white shadow-2xl dark:border-brand-700 dark:bg-brand-900 sm:w-96">
          <div className="flex items-center justify-between bg-brand-700 px-4 py-3 text-cream-50 dark:bg-brand-800">
            <p className="flex items-center gap-2 text-sm font-semibold">
              <Music size={16} className="text-gold-300" /> Tilawat Player
            </p>
            <button onClick={() => setOpen(false)} aria-label="Close Tilawat player">
              <X size={18} />
            </button>
          </div>

          <div className="p-4">
            {videoId ? (
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
                <iframe
                  key={videoId}
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Tilawat recitation"
                />
              </div>
            ) : (
              <p className="text-sm text-brand-400">Paste a YouTube link below to play a recitation.</p>
            )}

            <form onSubmit={handlePlay} className="mt-3 flex items-center gap-2">
              <input
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="Paste any YouTube link…"
                className="input !py-2 text-xs"
              />
              <button type="submit" className="btn-primary !p-2.5" aria-label="Play">
                <Play size={14} />
              </button>
            </form>
            {error && <p className="mt-2 text-xs text-red-600 dark:text-red-400">{error}</p>}
            <p className="mt-2 text-[11px] text-brand-400 dark:text-brand-500">
              Works with any public YouTube video or Qur'an recitation link.
            </p>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-500 text-brand-950 shadow-glow transition hover:bg-gold-400"
        aria-label="Toggle Tilawat player"
      >
        {open ? <X size={22} /> : <Music size={22} />}
      </button>
    </div>
  );
}
