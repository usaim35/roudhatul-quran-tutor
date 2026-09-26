import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AuthGuard } from "@/components/AuthGuard";
import { VideoLibrary } from "@/components/VideoLibrary";
import { MeetScheduler } from "@/components/MeetScheduler";
import { QuranSlider } from "@/components/QuranSlider";
import { HadithSection } from "@/components/HadithSection";

export default function DashboardPage() {
  return (
    <>
      <Header />
      <main>
        <section className="px-4 py-10 text-center sm:px-6">
          <h1 className="section-title">Your Student Dashboard</h1>
          <p className="mx-auto mt-2 max-w-lg text-sm text-brand-500 dark:text-brand-300">
            Video lessons, your live class schedule, and daily reflections — all in one place.
          </p>
        </section>
        <AuthGuard>
          <VideoLibrary />
          <MeetScheduler />
          <QuranSlider />
          <HadithSection />
        </AuthGuard>
      </main>
      <Footer />
    </>
  );
}
