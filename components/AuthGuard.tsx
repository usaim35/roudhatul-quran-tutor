"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { BookOpenCheck } from "lucide-react";
import { useAuth } from "@/lib/auth-context";

// NOTE: this is a client-side gate for demo purposes. For production,
// prefer verifying a signed session cookie in middleware.ts so protected
// content never ships to unauthenticated visitors.
export function AuthGuard({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center text-brand-400">
        Loading…
      </div>
    );
  }

  if (!user) {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center gap-4 py-24 text-center">
        <BookOpenCheck size={40} className="text-gold-500" />
        <h2 className="section-title">Sign in to access your lessons</h2>
        <p className="text-sm text-brand-500 dark:text-brand-300">
          The video library, live class schedule, and personalized dashboard are available
          to enrolled students. Sign in or create a free account to continue.
        </p>
        <div className="flex gap-3">
          <Link href="/signin" className="btn-secondary">Sign In</Link>
          <Link href="/signup" className="btn-primary">Sign Up</Link>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
