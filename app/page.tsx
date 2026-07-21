import Dock from "@/components/Dock";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Galeria from "@/components/Galeria";
import Comodidades from "@/components/Comodidades";
import Vista from "@/components/Vista";
import Depoimentos from "@/components/Depoimentos";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Dock />
      <main>
        <Hero />
        <Sobre />
        <Galeria />
        <Comodidades />
        <Vista />
        <Depoimentos />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
