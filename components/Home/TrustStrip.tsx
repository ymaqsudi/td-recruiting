const stats = [
  { value: "20+", label: "Years in Talent Leadership" },
  { value: "6", label: "Fortune-Caliber Companies" },
  { value: "3", label: "Flexible Engagement Models" },
  { value: "100%", label: "Founder-Led, Every Search" },
];

const TrustStrip = () => {
  return (
    <section className="bg-cream border-y border-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display font-bold text-3xl sm:text-4xl text-navy mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-8 tracking-wide">
          Experience across Netflix &middot; AWS &middot; Capital One &middot; Major League Baseball &middot; Wayfair &middot; AbbVie
        </p>
      </div>
    </section>
  );
};

export default TrustStrip;
