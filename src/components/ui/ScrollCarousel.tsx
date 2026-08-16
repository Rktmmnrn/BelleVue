"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

interface ScrollCarouselProps {
  children: ReactNode;
  className?: string;
}

/**
"<" et ">" pour défillement de piste
 */
export function ScrollCarousel({ children, className = "" }: ScrollCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.9, behavior: "smooth" });
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <button
        type="button"
        onClick={() => scrollByAmount(-1)}
        aria-label="Précédent"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink hover:text-white"
      >
        <ChevronLeft />
      </button>

      <div
        ref={trackRef}
        className="flex flex-1 gap-5 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      <button
        type="button"
        onClick={() => scrollByAmount(1)}
        aria-label="Suivant"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink hover:text-white"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
