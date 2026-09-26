import { Phone, Mail, Facebook, Instagram } from "lucide-react";
import { contactInfo } from "@/lib/mock-data";

export function TopBar() {
  return (
    <div className="hidden bg-brand-900 text-cream-100 sm:block">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs sm:px-6">
        <div className="flex items-center gap-5">
          <a
            href={`tel:${contactInfo.phonePrimary.replace(/[^+\d]/g, "")}`}
            className="flex items-center gap-1.5 hover:text-gold-300"
          >
            <Phone size={12} /> {contactInfo.phonePrimary}
          </a>
          <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-1.5 hover:text-gold-300">
            <Mail size={12} /> {contactInfo.email}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="Facebook" className="hover:text-gold-300">
            <Facebook size={13} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gold-300">
            <Instagram size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
