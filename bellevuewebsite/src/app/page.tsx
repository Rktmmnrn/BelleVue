import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { MenuPreview } from "@/components/home/MenuPreview";
import { VideoTeaser } from "@/components/home/VideoTeaser";
import { Philosophy } from "@/components/home/Philosophy";
import { Stats } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";
import { NewsPreview } from "@/components/home/NewsPreview";
import { LocationMap } from "@/components/home/LocationMap";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <MenuPreview />
      <VideoTeaser />
      <Philosophy />
      <Stats />
      <Testimonials />
      <NewsPreview />
      <LocationMap />
    </>
  );
}
