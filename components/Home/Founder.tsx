import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const Founder = () => {
  return (
    <section id="about" className="bg-cream py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[auto,1fr] gap-12 items-start">
          <Reveal className="flex flex-col items-center lg:items-start">
            <div className="w-28 h-28 rounded-2xl bg-navy flex items-center justify-center shadow-lg shadow-navy/20 mb-4 transition-transform duration-300 hover:scale-105 hover:-rotate-2">
              <span className="font-display font-bold text-4xl text-gold">
                MC
              </span>
            </div>
            <p className="font-display font-bold text-navy text-center lg:text-left">
              Murshed Chowdhury
            </p>
            <p className="text-sm text-gray-500 text-center lg:text-left">
              Founder, TD Recruiting
            </p>
            <div className="animate-float-slow hidden lg:block mt-8">
              <Image
                src="/illustrations/founder-interview.svg"
                alt="Illustration of a job interview conversation"
                width={220}
                height={180}
                className="w-44 h-auto"
              />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
              Why This Is Different
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mt-3 mb-6">
              Most agencies send resumes. We run your hiring function.
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              TD Recruiting operates like the in-house talent team you&apos;d
              hire if you were ready: the same pipeline discipline, closing
              playbook, and quality bar, delivered by someone who has run
              that function from the inside.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              Led by a 20+ year talent leader with time at Netflix, AWS,
              Capital One, Major League Baseball, Wayfair, and AbbVie, and
              currently embedded as Head of Talent at a Series B AI startup.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Paired with{" "}
              <a
                href="https://logicoach.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy font-semibold underline hover:text-gold-dark transition-colors"
              >
                Logicoach.ai
              </a>
              , our optional AI coaching layer for onboarding and interview
              practice.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Founder;
