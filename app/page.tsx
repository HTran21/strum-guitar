import { Hero } from "@/components/Hero/Hero";
import { Featured } from "@/components/Featured/Featured";
import { Gallery } from "@/components/Gallery/Gallery";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { Footer } from "@/components/Footer/Footer";
export default function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      <Gallery />
      <Testimonials />
      <Footer />
    </main>
  );
}
