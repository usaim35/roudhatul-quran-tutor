import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PricingTable } from "@/components/PricingTable";

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <section className="px-4 py-10 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-400">
            Home / Pricing
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold text-brand-900 dark:text-cream-50 sm:text-4xl">
            Simple, Affordable Pricing
          </h1>
          <p className="mx-auto mt-2 max-w-lg text-sm text-brand-500 dark:text-brand-300">
            Quality Qur'an education starting at $35/month — pick a schedule that fits your family.
          </p>
        </section>
        <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
          <PricingTable />
        </section>
      </main>
      <Footer />
    </>
  );
}
