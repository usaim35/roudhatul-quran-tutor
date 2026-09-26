import Image from "next/image";
import Link from "next/link";

export function Logo({ withText = true }: { withText?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="relative h-11 w-11 shrink-0 sm:h-12 sm:w-12">
        {/* Swap /public/logo.png with your final logo asset any time */}
        <Image
          src="/logo.png"
          alt="Madrasa Roudhatul Quran logo"
          fill
          className="object-contain drop-shadow-sm"
          priority
        />
      </div>
      {withText && (
        <div className="leading-tight">
          <p className="font-display text-lg font-bold text-brand-800 dark:text-gold-200 sm:text-xl">
            Roudhatul Quran
          </p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-brand-500 dark:text-brand-300">
            Online Quran Tutor
          </p>
        </div>
      )}
    </Link>
  );
}
