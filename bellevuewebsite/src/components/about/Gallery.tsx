import Image from "next/image";
import { ScrollCarousel } from "@/components/ui/ScrollCarousel";
import { Reveal } from "@/components/ui/Reveal";

const images = [
  "/images/about/gallery-1.jpg",
  "/images/about/gallery-2.jpg",
  "/images/about/gallery-3.jpg",
];

export function Gallery() {
  return (
    <Reveal>
      <section className="px-5 py-16 md:px-16 lg:py-20">
        <ScrollCarousel>
          {images.map((src) => (
            <div key={src} className="relative aspect-[3/4] w-[280px] shrink-0 sm:w-[340px]">
              <Image src={src} alt="Photo du restaurant" fill className="object-cover" />
            </div>
          ))}
        </ScrollCarousel>
      </section>
    </Reveal>
  );
}
