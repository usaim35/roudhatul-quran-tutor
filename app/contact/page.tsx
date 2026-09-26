import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="px-4 py-10 text-center sm:px-6">
          <h1 className="font-display text-3xl font-bold text-brand-900 dark:text-cream-50 sm:text-4xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-2 max-w-lg text-sm text-brand-500 dark:text-brand-300">
            Have a question about classes, pricing, or scheduling? Send us a message.
          </p>
        </section>
        <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
