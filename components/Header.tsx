"use client";

import Link from "next/link";
import { LogOut, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { TopBar } from "./TopBar";
import { useAuth } from "@/lib/auth-context";
import { courses } from "@/lib/mock-data";

const navLinks = [
  { href: "/", label: "About Us" },
  { href: "/pricing", label: "Pricing Plans" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact Us" },
];

export function Header() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-40 border-b border-brand-200/60 bg-cream-50/85 backdrop-blur-md dark:border-brand-800/60 dark:bg-brand-950/85">
        <div className="mx-auto flex h-[var(--header-h)] max-w-6xl items-center justify-between px-4 sm:px-6">
          <Logo />

          <nav className="hidden items-center gap-7 md:flex">
            <div
              className="relative"
              onMouseEnter={() => setCoursesOpen(true)}
              onMouseLeave={() => setCoursesOpen(false)}
            >
              <Link
                href="/courses"
                className="flex items-center gap-1 text-sm font-medium text-brand-700 transition hover:text-gold-600 dark:text-cream-100 dark:hover:text-gold-300"
              >
                Our Courses <ChevronDown size={14} />
              </Link>
              {coursesOpen && (
                <div className="absolute left-0 top-full w-64 rounded-xl border border-brand-200 bg-white py-2 shadow-lg dark:border-brand-700 dark:bg-brand-900">
                  {courses.map((c) => (
                    <Link
                      key={c.id}
                      href={`/courses#${c.slug}`}
                      className="block px-4 py-2 text-sm text-brand-700 hover:bg-brand-50 dark:text-cream-100 dark:hover:bg-brand-800"
                    >
                      {c.title.replace(" Online Classes", "").replace(" Course", "")}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-700 transition hover:text-gold-600 dark:text-cream-100 dark:hover:text-gold-300"
              >
                {link.label}
              </Link>
            ))}
            {user && (
              <Link
                href="/dashboard"
                className="text-sm font-medium text-brand-700 transition hover:text-gold-600 dark:text-cream-100 dark:hover:text-gold-300"
              >
                My Dashboard
              </Link>
            )}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <Link href="/pricing" className="btn-primary hidden !px-4 !py-2 lg:inline-flex">
              Get Free Trial!
            </Link>
            {user ? (
              <button onClick={logout} className="btn-secondary hidden !px-3 !py-2 sm:inline-flex">
                <LogOut size={16} /> Logout
              </button>
            ) : (
              <div className="hidden items-center gap-2 sm:flex">
                <Link href="/signin" className="btn-secondary !px-4 !py-2">
                  Sign In
                </Link>
                <Link href="/signup" className="btn-primary !px-4 !py-2 lg:hidden">
                  Sign Up
                </Link>
              </div>
            )}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-200 dark:border-brand-700 md:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-brand-200/60 bg-cream-50 px-4 py-4 dark:border-brand-800/60 dark:bg-brand-950 md:hidden">
            <nav className="flex flex-col gap-3">
              <Link href="/courses" onClick={() => setOpen(false)} className="text-sm font-medium text-brand-700 dark:text-cream-100">
                Our Courses
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-brand-700 dark:text-cream-100"
                >
                  {link.label}
                </Link>
              ))}
              {user && (
                <Link href="/dashboard" onClick={() => setOpen(false)} className="text-sm font-medium text-brand-700 dark:text-cream-100">
                  My Dashboard
                </Link>
              )}
              <div className="mt-2 flex flex-col gap-2 border-t border-brand-200/60 pt-3 dark:border-brand-800/60">
                <Link href="/pricing" onClick={() => setOpen(false)} className="btn-primary justify-center">
                  Get Free Trial!
                </Link>
                {user ? (
                  <button onClick={logout} className="btn-secondary justify-center">
                    <LogOut size={16} /> Logout
                  </button>
                ) : (
                  <>
                    <Link href="/signin" onClick={() => setOpen(false)} className="btn-secondary justify-center">
                      Sign In
                    </Link>
                    <Link href="/signup" onClick={() => setOpen(false)} className="btn-primary justify-center">
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
