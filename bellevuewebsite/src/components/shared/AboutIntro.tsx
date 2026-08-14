import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface AboutIntroProps {
  image: string;
  ctaLabel: string;
  ctaHref: string;
}

/**
 * Contenu identique mot pour mot entre l'aperçu sur l'accueil et l'ancienne
 * page About (seul le bouton changeait : "read more about us" vs "book a
 * table") — un seul composant, paramétré par le CTA.
 */
export function AboutIntro({ image, ctaLabel, ctaHref }: AboutIntroProps) {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
      <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:h-[583px]">
        <Image src={image} alt="Intérieur du restaurant" fill className="object-cover" />
      </div>
      <div className="flex flex-col items-start justify-center gap-4">
        <SectionHeading
          eyebrow="about restaurant"
          title="our commitment to quality and taste"
          align="left"
        />
        <p className="text-sm text-ink/80 sm:text-base">
          Lorem ipsum dolor sit amet consectetur. Pretium felis egestas aliquet et ut netus
          placerat turpis. Ut ullamcorper condimentum tincidunt orci quis ullamcorper. Arcu ut
          tincidunt egestas mauris mi. Ultrices egestas rhoncus nec morbi sed pellentesque.
        </p>
        <p className="text-sm text-ink/80 sm:text-base">
          Tellus tellus in neque id. Mauris praesent consectetur orci porta ut elementum.
        </p>
        <Button href={ctaHref} variant="ink" className="mt-2">
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
