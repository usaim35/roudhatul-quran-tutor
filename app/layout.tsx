import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { ChatWidget } from "@/components/ChatWidget";
import { TilawatWidget } from "@/components/TilawatWidget";

export const metadata: Metadata = {
  title: "Roudhatul Quran — Online Quran Tutor",
  description:
    "Learn Qur'an recitation, Tajweed, and Islamic studies online with live classes, a video lecture library, and daily Hadith.",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
          <ChatWidget />
          <TilawatWidget />
        </Providers>
      </body>
    </html>
  );
}
