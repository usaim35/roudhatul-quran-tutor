"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme-context";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-200 bg-white/70 text-brand-700 transition hover:bg-brand-50 dark:border-brand-700 dark:bg-brand-900/70 dark:text-gold-200 dark:hover:bg-brand-800"
    >
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
