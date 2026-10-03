import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";

const stats = [
  { value: "20+", label: "Years in Talent Leadership" },
  { value: "6", label: "Fortune-Caliber Companies" },
  { value: "3", label: "Flexible Engagement Models" },
  { value: "100%", label: "Founder-Led, Every Search" },
];

const companies = [
  "Netflix",
  "AWS",
  "Capital One",
  "Major League Baseball",
  "Wayfair",
  "AbbVie",
];

const TrustStrip = () => {
  return (
    <section className="bg-white border-y border-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <Reveal key={stat.label} delay={idx * 80}>
              <div className="font-display font-bold text-3xl sm:text-4xl text-navy mb-1">
                <CountUp value={stat.value} />
              </div>
              <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">
                {stat.label}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-12 w-max animate-marquee hover:[animation-play-state:paused]">
            {[...companies, ...companies].map((company, idx) => (
              <span
                key={`${company}-${idx}`}
                className="text-xs text-gray-400 tracking-wide whitespace-nowrap"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
