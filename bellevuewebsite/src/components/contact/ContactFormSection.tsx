import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";

export function ContactFormSection() {
  return (
    <Reveal>
      <section className="grid grid-cols-1 items-center gap-10 px-5 py-16 md:px-16 lg:grid-cols-[1fr_2fr_1fr] lg:py-20">
        <div className="relative hidden aspect-[3/4] w-full lg:block">
          <Image
            src="/images/home/menu-left.png"
            alt="Ambiance du restaurant"
            fill
            className="object-cover"
          />
        </div>

        <ContactForm />

        <div className="relative hidden aspect-[3/4] w-full lg:block">
          <Image
            src="/images/home/menu-right.png"
            alt="Ambiance du restaurant"
            fill
            className="object-cover"
          />
        </div>
      </section>
    </Reveal>
  );
}
