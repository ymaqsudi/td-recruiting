import Image from "next/image";
import { Users2, Target, Handshake, Compass, ArrowRight } from "lucide-react";

const primaryModels = [
  {
    title: "Embedded Talent Partner",
    tag: "Multi-role retainer · 3, 6, or 12 months",
    badge: "Most Popular",
    icon: Users2,
    description:
      "We operate as your outsourced talent team across multiple concurrent roles: weekly cadence, comp benchmarking, a closing playbook, and a hiring rubric your team keeps. The operating rigor of an in-house function, without the headcount.",
  },
  {
    title: "Exclusive Retained Search",
    tag: "Single senior hire · exclusive engagement",
    badge: "Highest-Touch",
    icon: Target,
    description:
      "One critical hire, one firm on it. Standard retained terms with a portion of the fee due at kickoff. Best for senior finance, engineering, or executive roles where pipeline quality matters more than speed to a first slate.",
  },
];

const secondaryModels = [
  {
    title: "Contingency Search",
    tag: "Select roles · available on request",
    icon: Handshake,
    description:
      "Placement-fee only, offered case-by-case for the right founder relationship. Not our default model, but available when the fit is right.",
  },
  {
    title: "Recruiting Advisory",
    tag: "Hourly engagement · no retainer required",
    icon: Compass,
    description:
      "Expert guidance without hiring a firm or building out an internal function: diagnostics, closing coaching, comp benchmarking, and upskilling for your own recruiters.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
              Ways to Work Together
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mt-3 mb-4">
              Two core engagements. One standard of work.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Embedded Talent Partner and Exclusive Retained Search are how
              most founders work with us. Contingency and advisory
              engagements are available too, for the right fit.
            </p>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/illustrations/services-deal.svg"
              alt="Illustration of two people shaking hands over a business agreement"
              width={480}
              height={360}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Primary models: the two we lead with */}
        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {primaryModels.map(({ title, tag, description, icon: Icon, badge }) => (
            <div
              key={title}
              className="relative rounded-2xl p-10 flex flex-col bg-navy text-white shadow-xl shadow-navy/20 ring-1 ring-gold/40"
            >
              <span className="absolute -top-3 left-10 text-[10px] uppercase tracking-widest font-bold bg-gold text-navy px-3 py-1 rounded-full">
                {badge}
              </span>
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <Icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-2">{title}</h3>
              <p className="text-xs uppercase tracking-wide mb-4 font-semibold text-gold-light">
                {tag}
              </p>
              <p className="text-base leading-relaxed flex-1 text-gray-200">
                {description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 mt-8 bg-gold hover:bg-gold-light text-navy font-display font-bold text-sm px-6 py-3 rounded-lg transition-colors w-fit"
              >
                Start This Engagement
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Secondary models: lighter-touch, available on request */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
            Also Available
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {secondaryModels.map(({ title, tag, description, icon: Icon }) => (
            <div
              key={title}
              className="rounded-xl p-6 flex items-start gap-4 bg-cream hover:shadow-md transition-shadow"
            >
              <Icon className="h-6 w-6 text-navy/60 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-display font-bold text-base text-navy mb-1">
                  {title}
                </h4>
                <p className="text-xs uppercase tracking-wide text-gold-dark font-semibold mb-2">
                  {tag}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-2">
                  {description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:gap-2.5 transition-all"
                >
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
