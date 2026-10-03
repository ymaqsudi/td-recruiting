import Image from "next/image";
import { ArrowRight, Linkedin } from "lucide-react";

const CTABand = () => {
  return (
    <section id="contact" className="bg-navy-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(242,196,106,0.12),_transparent_60%)]" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <Image
          src="/illustrations/cta-highfive.svg"
          alt="Illustration of two people celebrating a successful hire"
          width={200}
          height={150}
          className="w-40 h-auto mx-auto mb-8"
        />
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
          Ready to build your next twenty hires?
        </h2>
        <p className="text-gray-300 text-lg max-w-xl mx-auto mb-10">
          Reach out to discuss which engagement model fits your stage and
          roadmap — most conversations start on LinkedIn.
        </p>
        <a
          href="https://www.linkedin.com/in/murshedchowdhury"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-display font-bold px-8 py-4 rounded-lg transition-colors"
        >
          <Linkedin className="w-5 h-5" />
          Connect on LinkedIn
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default CTABand;
