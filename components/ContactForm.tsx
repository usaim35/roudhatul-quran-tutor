"use client";

import { FormEvent, useState } from "react";
import { Phone, Mail, Globe, MessageCircle } from "lucide-react";
import { contactInfo } from "@/lib/mock-data";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  // Demo-only: replace with a real submit to an API route (e.g. forward to
  // Resend, or save to a DB/CRM) once you're ready to receive real inquiries.
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <form onSubmit={handleSubmit} className="card space-y-4 p-6 sm:p-8">
        <div>
          <label className="mb-1 block text-xs font-medium text-brand-600 dark:text-brand-300">Your Name *</label>
          <input required className="input" placeholder="Enter your full name" />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-brand-600 dark:text-brand-300">Contact Number *</label>
          <input required className="input" placeholder="Enter your contact number" />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-brand-600 dark:text-brand-300">Your Message</label>
          <textarea className="input min-h-[110px]" placeholder="Write your message here" />
        </div>
        <button type="submit" className="btn-primary w-full">
          Send Message
        </button>
        {sent && (
          <p className="text-sm text-brand-600 dark:text-brand-300">
            Thanks! This demo form doesn't send anywhere yet — wire it to an API route when you're ready.
          </p>
        )}
      </form>

      <div className="space-y-5">
        <p className="text-sm text-brand-500 dark:text-brand-300">
          Contact us for any question or queries. We're available 24/7 for support and services we offer.
        </p>
        <div className="space-y-3 text-sm">
          <p className="flex items-center gap-2 text-brand-700 dark:text-cream-100">
            <Phone size={16} className="text-gold-500" /> {contactInfo.phonePrimary}
          </p>
          <p className="flex items-center gap-2 text-brand-700 dark:text-cream-100">
            <Mail size={16} className="text-gold-500" /> {contactInfo.email}
          </p>
          <p className="flex items-center gap-2 text-brand-700 dark:text-cream-100">
            <Globe size={16} className="text-gold-500" /> www.roudhatulquran.com
          </p>
        </div>
        <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-secondary">
          <MessageCircle size={16} /> Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
