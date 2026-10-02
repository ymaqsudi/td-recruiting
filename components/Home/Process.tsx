const steps = [
  {
    number: "01",
    title: "Align on the Mandate",
    description:
      "We start with the role, not the resume — scope, comp band, must-haves versus nice-to-haves, and what success looks like at 90 days.",
  },
  {
    number: "02",
    title: "Map the Market",
    description:
      "We build a targeted candidate map and open a weekly-cadenced pipeline, benchmarked against real comp data so offers land the first time.",
  },
  {
    number: "03",
    title: "Qualify & Present",
    description:
      "Screening, structured interviews, and references happen before a candidate ever reaches your calendar. You see a short slate, not a stack of resumes.",
  },
  {
    number: "04",
    title: "Close & Onboard",
    description:
      "We run the offer and close end-to-end, then leave your team with a documented hiring rubric and playbook for the next search.",
  },
];

const Process = () => {
  return (
    <section id="process" className="bg-navy-dark py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            How It Works
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3 mb-4">
            From mandate to signed offer.
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            A repeatable process, not a one-off favor — so every search feels
            as disciplined as the last.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative">
              <div className="font-display font-bold text-5xl text-gold/30 mb-4">
                {step.number}
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {step.description}
              </p>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 right-0 w-full h-px bg-gradient-to-r from-gold/20 to-transparent translate-x-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
