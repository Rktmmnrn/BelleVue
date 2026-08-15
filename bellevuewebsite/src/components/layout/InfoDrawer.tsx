"use client";

import { X } from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { siteConfig } from "@/data/site-config";

const socialIcons = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  twitter: FaXTwitter,
  youtube: FaYoutube,
};

interface InfoDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Panneau "contact / horaires / réseaux" — desktop uniquement (>= lg),
 * comme dans l'ancien site où `.hero-right` reste display:none en dessous
 * de 1024px. Rendu une seule fois ici (pas dans chaque page comme avant).
 */
export function InfoDrawer({ isOpen, onClose }: InfoDrawerProps) {
  return (
    <div
      aria-hidden={!isOpen}
      className={`absolute top-20 inset-y-0 right-0 z-40 hidden w-1/2 flex-col items-center justify-center gap-5 bg-ink px-10 text-center text-white transition-transform duration-300 ease-out lg:flex ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fermer le panneau d'informations"
        className="absolute left-8 top-8 text-gold"
      >
        <X size={28} />
      </button>

      <h2 className="font-display text-2xl uppercase text-gold">{siteConfig.name}</h2>
      <p className="max-w-xs text-sm">{siteConfig.description}</p>
      <span className="font-display text-lg">{siteConfig.contact.phone}</span>
      <p className="text-sm">{siteConfig.contact.address.line1}</p>
      <p className="text-sm">{siteConfig.contact.address.line2}</p>
      <p className="text-sm">{siteConfig.contact.email}</p>

      <div className="flex flex-col items-center gap-2 border-t border-gold pt-5">
        <p className="font-display uppercase text-gold">Opening Hours</p>
        {siteConfig.hours.map((h) => (
          <p key={h.days} className="text-sm">
            {h.days} : {h.time}
          </p>
        ))}
      </div>

      <div className="flex gap-4">
        {siteConfig.social.map((s) => {
          const Icon = socialIcons[s.icon as keyof typeof socialIcons];
          return (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="transition-transform hover:scale-125"
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
