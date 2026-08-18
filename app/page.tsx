import { Hero } from "@/components/Hero/Hero";
import { Featured } from "@/components/Featured/Featured";
import { Gallery } from "@/components/Gallery/Gallery";
import { Craft } from "@/components/Craft/Craft";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { Footer } from "@/components/Footer/Footer";
export default function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      <Craft />
      <Gallery />
      <Testimonials />
      <Footer />
    </main>
  );
}
