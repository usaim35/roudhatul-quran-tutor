# Roudhatul Quran — Online Quran Tutor Platform

A modern, responsive Quran tutoring web app built with **Next.js 14 (App Router)**,
**React**, and **Tailwind CSS**, styled with an elegant Islamic visual aesthetic
(deep emerald + gold on cream, Amiri Quran / Cormorant Garamond typography) to
match the Madrasa Roudhatul Quran logo.

## ✨ Features

- **Light / Dark mode** — persisted toggle, system-preference aware
- **Email OTP authentication** — Sign Up, Sign In, Logout (passwordless, 2-step flow)
- **Marketing site** — top contact bar, dropdown course nav, course cards with
  badges/pricing, a multi-currency pricing table (USD/CAD/GBP/AUD/EUR/AED), a blog
  grid, and a contact page — all at `/`, `/courses`, `/pricing`, `/blogs`, `/contact`
- **Student dashboard** (`/dashboard`, sign-in required) — video lecture library,
  live class schedule, Qur'an slider, and daily Hadith
- **Video Lecture Library** — grid + modal player prewired for Google Drive embeds
- **Google Meet Scheduler** — class cards with join codes, copy-to-clipboard, and quick-join links
- **Interactive Qur'an slider** — swipeable ayah cards with Arabic + translation
- **Daily Hadith section** — with an integrated Tilawat (recitation) audio player
- **Floating AI chatbot** (bottom-right, every page) — answers Qur'an/Hadith/Tajweed
  and course questions live, backed by the Claude API (needs `ANTHROPIC_API_KEY`)
- **Floating Tilawat player** (bottom-left, every page) — paste any YouTube link to
  play a recitation via the official embedded YouTube player
- **Modular architecture** — small, single-purpose components and a `lib/` layer for
  data + contexts, so new sections/features drop in without touching existing code

## 🏗 Project structure

```
app/
  layout.tsx            Root layout, fonts, metadata, Providers
  page.tsx              Home dashboard (hero + gated sections)
  providers.tsx          Combines Theme + Auth context providers
  globals.css            Design tokens, Islamic pattern bg, shared utility classes
  (auth)/signin/page.tsx
  (auth)/signup/page.tsx
  api/auth/send-otp/route.ts     Issues + "sends" a 6-digit OTP
  api/auth/verify-otp/route.ts   Verifies OTP, returns a session user
components/
  Header.tsx, Footer.tsx, Logo.tsx, ThemeToggle.tsx
  AuthOtpForm.tsx, AuthGuard.tsx
  VideoLibrary.tsx, MeetScheduler.tsx, QuranSlider.tsx
  HadithSection.tsx, AudioPlayer.tsx
lib/
  theme-context.tsx, auth-context.tsx, otp-store.ts, mock-data.ts
```

## 🚀 Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Sign up with any email — the OTP code is printed to
your **terminal/server console** (see `app/api/auth/send-otp/route.ts`), since no
real email provider is wired up yet.

## ☁️ Deploy to Vercel

1. Push this project to a GitHub repo.
2. Import the repo at https://vercel.com/new — it auto-detects Next.js, no config needed.
3. Add any environment variables from `.env.example` you've started using.
4. Deploy. Every push to `main` redeploys automatically.

## 🔌 Where to plug in real integrations

This app ships with clearly-marked placeholders so you (or a developer) can wire up
production services without restructuring anything:

| Feature | File(s) | What to do |
|---|---|---|
| **OTP email delivery** | `app/api/auth/send-otp/route.ts` | Replace the `console.log` with a real call to Resend / SendGrid / Postmark / SES |
| **OTP storage** | `lib/otp-store.ts` | Swap the in-memory `Map` for Redis (e.g. Upstash) or a DB table with TTL — required for serverless on Vercel, since memory isn't shared across function invocations |
| **Sessions** | `lib/auth-context.tsx` + API routes | Currently a `localStorage` demo session. For production, issue a signed HTTP-only cookie (e.g. with `jose` or `next-auth`) and check it in `middleware.ts` |
| **Video library** | `lib/mock-data.ts` → `videoLectures` | Replace `driveEmbedUrl` with real `https://drive.google.com/file/d/FILE_ID/preview` links (Drive file must be shared as "Anyone with the link") |
| **Google Meet schedule** | `lib/mock-data.ts` → `meetSessions` | Replace with real Meet links/codes, or fetch dynamically via the Google Calendar API |
| **Qur'an content** | `lib/mock-data.ts` → `quranSlides` | Swap in a full dataset or fetch from a Qur'an API (e.g. alquran.cloud) |
| **Hadith + Tilawat audio** | `lib/mock-data.ts` → `dailyHadith` | Add a real hosted `.mp3` URL to `audioUrl`; rotate daily via a cron job or API |
| **AI chatbot** | `app/api/chat/route.ts` | Add `ANTHROPIC_API_KEY` from console.anthropic.com/settings/keys (a separate developer account from claude.ai) |
| **YouTube Tilawat player** | `components/TilawatWidget.tsx` | Works out of the box with any public YouTube link — no key needed. Set a default in `lib/mock-data.ts` → `defaultTilawatYoutubeUrl` if you want one pre-loaded |
| **Contact details** | `lib/mock-data.ts` → `contactInfo` | Replace the placeholder phone/email/WhatsApp with your madrasa's real details |
| **Courses / pricing / blog copy** | `lib/mock-data.ts` | All placeholder text is original wording written for this project — rewrite it in your own voice before launch |
| **Logo** | `public/logo.png` | Drop in your final logo asset any time — the header/footer auto-use it |

## 🎨 Design system

Colors, fonts, and shadows live in `tailwind.config.ts` (the `brand` / `gold` / `cream`
palettes) and `app/globals.css` (`.card`, `.btn-primary`, `.btn-secondary`, `.input`
utility classes) so the whole app restyles from one place.

## 🧩 Adding a new feature/section

1. Add any data to `lib/mock-data.ts` (or a new file in `lib/`).
2. Build a component in `components/`.
3. Drop it into `app/page.tsx` (inside or outside `<AuthGuard>` depending on whether
   it should be gated behind sign-in).

No other files need to change — that's the modular part.
"# roudhatul-quran-tutor" 
