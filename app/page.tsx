import Hero from "@/components/Home/Hero";
import TrustStrip from "@/components/Home/TrustStrip";
import Focus from "@/components/Home/Focus";
import Services from "@/components/Home/Services";
import Process from "@/components/Home/Process";
import WhoFor from "@/components/Home/WhoFor";
import Founder from "@/components/Home/Founder";
import CTABand from "@/components/Home/CTABand";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <Focus />
      <Services />
      <Process />
      <WhoFor />
      <Founder />
      <CTABand />
    </main>
  );
}
