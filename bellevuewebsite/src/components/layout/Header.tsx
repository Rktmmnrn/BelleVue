"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Mail, MapPin, Menu, Search, X } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { useSlideNav } from "@/hooks/useSlideNav";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";
import { InfoDrawer } from "./InfoDrawer";

function Logo() {
  return (
    <Link href="/" className="flex flex-col items-center gap-1">
      <span className="font-display text-xl uppercase sm:text-2xl">{siteConfig.name}</span>
      <span className="text-[10px] uppercase">{siteConfig.tagline}</span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { isOpen, close, toggle } = useSlideNav();

  // Bloque le scroll du body pendant que l'overlay mobile plein écran est ouvert
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Ferme au clavier avec Echap (accessibilité)
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  return (
    <>
      <header className="sticky top-0 z-50 flex flex-col rounded-b-[20px] bg-ink text-white lg:rounded-none">
        {/* Barre de contact — absente sur l'accueil, comme dans l'ancien site */}
        {!isHome && (
          <div className="flex items-center justify-between border-b border-gold/40 px-5 py-3 md:px-16 md:py-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold">
                <Mail size={16} className="text-gold" />
              </span>
              <div className="hidden flex-col text-sm md:flex">
                <p>{siteConfig.contact.email}</p>
                <p>{siteConfig.contact.phone}</p>
              </div>
            </div>

            <Logo />

            <div className="flex items-center gap-3">
              <div className="hidden flex-col text-right text-sm md:flex">
                <p>{siteConfig.contact.address.line1}</p>
                <p>{siteConfig.contact.address.line2}</p>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold">
                <MapPin size={16} className="text-gold" />
              </span>
            </div>
          </div>
        )}

        {/* Barre de navigation — logo + "book a table" sur l'accueil, recherche ailleurs */}
        <div className="flex items-center justify-between px-5 py-3 md:px-16 md:py-4">
          {isHome ? <Logo /> : (
            <button type="button" aria-label="Rechercher" className="text-white">
              <Search size={20} />
            </button>
          )}

          <MobileNav isOpen={isOpen} onLinkClick={close} />

          <div className="flex items-center gap-4">
            {isHome && (
              <Button href="/contact" variant="gold" className="hidden lg:inline-flex">
                book a table
              </Button>
            )}
            <button
              type="button"
              onClick={toggle}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              className="relative z-50 text-gold"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      <InfoDrawer isOpen={isOpen} onClose={close} />
    </>
  );
}