import Image from "next/image";
import { Crown, Briefcase, UserCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const levels = [
  {
    title: "C-Level Executives",
    description: "CTO, VP of Engineering, Head of Talent, and other top-of-org hires.",
    icon: Crown,
  },
  {
    title: "Leadership Positions",
    description: "Directors and managers who'll own a team and a roadmap from day one.",
    icon: Briefcase,
  },
  {
    title: "Senior Individual Contributors",
    description: "The specialists and builders who move fastest without a learning curve.",
    icon: UserCheck,
  },
];

const functions = [
  "Engineering",
  "Data Science",
  "Data Engineering",
  "AI/ML Engineering",
  "Cybersecurity",
  "Software Engineering",
  "Product",
  "Business",
  "Finance",
  "Operations",
];

const Focus = () => {
  return (
    <section id="focus" className="bg-cream py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
              Where We Recruit
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mt-3 mb-4">
              Every level. Every technical{" "}
              <span className="underline decoration-gold decoration-4 underline-offset-4">
                function
              </span>
              .
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We recruit across AI, tech, and finance, with hands-on expertise
              in the technical fields where the best candidates are hardest
              to find and even harder to close.
            </p>
          </Reveal>
          <Reveal delay={150} className="hidden lg:block">
            <div className="animate-float-delayed">
              <Image
                src="/illustrations/focus-experts.svg"
                alt="Illustration of experienced professionals"
                width={480}
                height={360}
                className="w-full h-auto"
              />
            </div>
          </Reveal>
        </div>

        {/* Levels we hire for */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {levels.map(({ title, description, icon: Icon }, idx) => (
            <Reveal key={title} delay={idx * 100}>
              <div className="group rounded-2xl bg-white p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-display font-bold text-lg text-navy mb-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Functions we cover */}
        <Reveal>
          <div className="rounded-2xl bg-navy px-8 py-10 sm:px-12 sm:py-12">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-6 text-center">
              Across Functions Including
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {functions.map((fn, idx) => (
                <Reveal key={fn} delay={idx * 40}>
                  <span className="inline-flex items-center rounded-full bg-white/10 text-white text-sm font-medium px-4 py-2 transition-all duration-200 hover:bg-gold hover:text-navy hover:scale-105">
                    {fn}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Focus;
