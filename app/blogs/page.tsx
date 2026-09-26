import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogGrid } from "@/components/BlogGrid";

export default function BlogsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="px-4 py-10 text-center sm:px-6">
          <h1 className="font-display text-3xl font-bold text-brand-900 dark:text-cream-50 sm:text-4xl">
            Latest Articles
          </h1>
          <p className="mx-auto mt-2 max-w-lg text-sm text-brand-500 dark:text-brand-300">
            Tips, guides, and reflections on learning and teaching the Qur'an.
          </p>
        </section>
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <BlogGrid />
        </section>
      </main>
      <Footer />
    </>
  );
}
