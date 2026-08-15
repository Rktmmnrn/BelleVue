import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MenuExplorer } from "@/components/menu/MenuExplorer";

export const metadata: Metadata = {
  title: "Menu",
  description: "Découvrez notre carte : plats signature, boissons, fruits de mer et desserts.",
  openGraph: {
    title: "Menu",
    description: "Découvrez notre carte : plats signature, boissons, fruits de mer et desserts.",
    url: "/menu",
  },
};

export default function MenuPage() {
  return (
    <>
      <PageHero image="/images/menu/hero.jpg" title="menu" />

      <section className="flex flex-col items-center gap-10 bg-ink px-5 py-20 text-white md:px-16 lg:py-28">
        <Reveal className="flex flex-col items-center gap-10">
          <SectionHeading
            eyebrow="taste the best that surprise you"
            title="our special menu"
            tone="light"
          />
          <p className="max-w-md text-center text-sm text-white/80">
            Lorem ipsum dolor sit amet consectetur. Pretium felis egestas aliquet et ut netus
            placerat turpis. Ut ullamcorper condimentum tincidunt orci quis.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_2fr_1fr]"
        >
          <div className="relative mx-auto hidden aspect-[3/4] w-full max-w-xs border border-gold p-4 lg:block">
            <div className="relative h-full w-full">
              <Image
                src="/images/home/menu-left.jpg"
                alt="Plat du menu"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <MenuExplorer />

          <div className="relative mx-auto hidden aspect-[3/4] w-full max-w-xs border border-gold p-4 lg:block">
            <div className="relative h-full w-full">
              <Image
                src="/images/home/menu-right.jpg"
                alt="Plat du menu"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
