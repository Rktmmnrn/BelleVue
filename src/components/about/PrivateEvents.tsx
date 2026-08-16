import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const eventTypes = ["your private event", "wedding", "birthday"];

export function PrivateEvents() {
  return (
    <Reveal>
      <section className="grid grid-cols-1 items-center gap-10 px-5 py-20 text-ink md:px-16 lg:grid-cols-2 lg:gap-14 lg:py-28">
        <div className="relative aspect-square w-full lg:h-[560px]">
          <Image
            src="/images/about/private-event.jpeg"
            alt="Événement privé"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-start gap-5">
          <SectionHeading eyebrow="private event" title="perfect place for private event" align="left" />
          <div className="flex flex-wrap gap-3">
            {eventTypes.map((type) => (
              <Button key={type} variant="ink">
                {type}
              </Button>
            ))}
          </div>
          <p className="text-sm text-ink/80 sm:text-base">
            Lorem ipsum dolor sit amet consectetur. Pretium felis egestas aliquet et ut netus
            placerat turpis. Ut ullamcorper condimentum tincidunt orci quis ullamcorper. Arcu ut
            tincidunt egestas mauris mi. Ultrices egestas rhoncus nec morbi sed pelle.
          </p>
          <Button href="/contact" variant="ink">
            get start for your event
          </Button>
        </div>
      </section>
    </Reveal>
  );
}
