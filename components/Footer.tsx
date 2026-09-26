import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-brand-200/60 py-10 dark:border-brand-800/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:px-6">
        <Logo />
        <p className="max-w-md text-xs text-brand-400 dark:text-brand-400">
          "The best among you are those who learn the Qur'an and teach it to others."
        </p>
        <p className="text-xs text-brand-400 dark:text-brand-500">
          © {new Date().getFullYear()} Madrasa Roudhatul Quran. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
