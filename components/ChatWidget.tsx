"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const WELCOME: ChatMessage = {
  role: "assistant",
  content:
    "Assalamu Alaikum! I'm your Roudhatul Quran assistant. Ask me about the Qur'an, Hadith, Tajweed, or our courses.",
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.map(({ role, content }) => ({ role, content })) }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply || "..." }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 flex h-[28rem] w-80 flex-col overflow-hidden rounded-2xl border border-brand-200 bg-white shadow-2xl dark:border-brand-700 dark:bg-brand-900 sm:w-96">
          <div className="flex items-center justify-between bg-brand-700 px-4 py-3 text-cream-50 dark:bg-brand-800">
            <p className="flex items-center gap-2 text-sm font-semibold">
              <Sparkles size={16} className="text-gold-300" /> Islamic Assistant
            </p>
            <button onClick={() => setOpen(false)} aria-label="Close chat">
              <X size={18} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                  m.role === "user"
                    ? "ml-auto bg-brand-600 text-cream-50"
                    : "bg-brand-50 text-brand-800 dark:bg-brand-800 dark:text-cream-50"
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="max-w-[85%] rounded-2xl bg-brand-50 px-3 py-2 text-sm text-brand-400 dark:bg-brand-800 dark:text-brand-400">
                Typing…
              </div>
            )}
          </div>

          <form onSubmit={sendMessage} className="flex items-center gap-2 border-t border-brand-200 p-3 dark:border-brand-700">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question…"
              className="input !py-2"
            />
            <button type="submit" disabled={loading} className="btn-primary !p-2.5" aria-label="Send">
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-700 text-cream-50 shadow-glow transition hover:bg-brand-600 dark:bg-gold-500 dark:text-brand-950"
        aria-label="Toggle Islamic assistant chat"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}
