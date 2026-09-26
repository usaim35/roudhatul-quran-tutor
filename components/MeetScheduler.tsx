"use client";

import { useState } from "react";
import { Calendar, Clock, Copy, Check, Video } from "lucide-react";
import { meetSessions } from "@/lib/mock-data";

export function MeetScheduler() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyCode = async (id: string, code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1500);
    } catch {
      // Clipboard API unavailable — silently ignore for the demo.
    }
  };

  return (
    <section id="classes" className="bg-brand-50/60 py-14 dark:bg-brand-900/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 text-center">
          <h2 className="section-title">Live Class Schedule</h2>
          <div className="ornament-divider mt-3" />
          <p className="mx-auto mt-3 max-w-xl text-sm text-brand-500 dark:text-brand-300">
            Join your teacher on Google Meet with a tap. Codes refresh weekly by your madrasa admin.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {meetSessions.map((s) => (
            <div key={s.id} className="card flex flex-col gap-4 p-5">
              <div className="flex items-center gap-2 text-brand-700 dark:text-gold-300">
                <Video size={18} />
                <h3 className="font-semibold">{s.className}</h3>
              </div>
              <p className="text-sm text-brand-500 dark:text-brand-300">with {s.teacher}</p>

              <div className="space-y-1.5 text-sm text-brand-600 dark:text-brand-200">
                <p className="flex items-center gap-2">
                  <Calendar size={14} /> {s.day}
                </p>
                <p className="flex items-center gap-2">
                  <Clock size={14} /> {s.time}
                </p>
              </div>

              <div className="mt-auto flex items-center justify-between rounded-lg border border-dashed border-brand-300 bg-cream-50 px-3 py-2 dark:border-brand-700 dark:bg-brand-950">
                <code className="text-xs font-medium text-brand-700 dark:text-gold-200">
                  {s.joinCode}
                </code>
                <button
                  onClick={() => copyCode(s.id, s.joinCode)}
                  className="text-brand-500 hover:text-brand-700 dark:text-brand-300 dark:hover:text-gold-300"
                  aria-label="Copy join code"
                >
                  {copiedId === s.id ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>

              <a
                href={s.meetLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                <Video size={16} /> Join on Google Meet
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
