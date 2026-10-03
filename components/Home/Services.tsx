import Image from "next/image";
import { Users2, Target, Handshake, Compass, ArrowRight } from "lucide-react";

const engagementModels = [
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
    icon: Target,
    description:
      "One critical hire, one firm on it. Standard retained terms with a portion of the fee due at kickoff. Best for senior finance, engineering, or executive roles where pipeline quality matters more than speed to a first slate.",
  },
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
      "For teams that want expert guidance without hiring a firm or building out an internal function. We diagnose what's slowing your hiring down, sharpen your closing approach, and benchmark comp, then coach your own recruiters so the gains outlast the engagement.",
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
              Four models. One standard of work.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Every engagement is scoped to your stage, roadmap, and budget,
              but the same standard of rigor carries through all of them.
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {engagementModels.map(({ title, tag, description, icon: Icon, badge }) => (
            <div
              key={title}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                badge
                  ? "bg-navy text-white shadow-xl shadow-navy/20 ring-1 ring-gold/40"
                  : "bg-cream text-navy hover:shadow-lg"
              }`}
            >
              {badge && (
                <span className="absolute -top-3 left-8 text-[10px] uppercase tracking-widest font-bold bg-gold text-navy px-3 py-1 rounded-full">
                  {badge}
                </span>
              )}
              <Icon className={`h-9 w-9 mb-6 ${badge ? "text-gold" : "text-navy"}`} />
              <h3 className="font-display font-bold text-xl mb-2">{title}</h3>
              <p
                className={`text-xs uppercase tracking-wide mb-4 font-semibold ${
                  badge ? "text-gold-light" : "text-gold-dark"
                }`}
              >
                {tag}
              </p>
              <p
                className={`text-sm leading-relaxed flex-1 ${
                  badge ? "text-gray-200" : "text-gray-600"
                }`}
              >
                {description}
              </p>
              <a
                href="#contact"
                className={`inline-flex items-center gap-1.5 mt-6 text-sm font-semibold ${
                  badge ? "text-gold" : "text-navy"
                } hover:gap-2.5 transition-all`}
              >
                Discuss this model <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
