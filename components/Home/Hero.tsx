import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const Hero = () => {
  return (
    <section className="relative bg-navy-dark overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(242,196,106,0.15),_transparent_60%)]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gold/5 blur-3xl animate-float-slow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <Reveal>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold border border-gold/30 rounded-full px-4 py-1.5 mb-8">
                Retained · Embedded · Contingency Search
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
                Senior hiring, handled like it matters.
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10">
                We build the outsourced talent function for growth-stage
                founders in AI, tech, and finance. You get the same pipeline
                discipline and closing rigor as an in-house hiring team,
                without the headcount.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-display font-bold px-7 py-3.5 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  Start a Search
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  Explore Our Services
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150} className="hidden lg:block">
            <div className="animate-float">
              <Image
                src="/illustrations/hero-hiring.svg"
                alt="Illustration of a hiring process with resumes and candidate profiles"
                width={560}
                height={420}
                priority
                className="w-full h-auto"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
