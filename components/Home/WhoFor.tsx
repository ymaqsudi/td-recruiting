import { CheckCircle2 } from "lucide-react";

const criteria = [
  "You're scaling from roughly 20 to 100 people",
  "You don't have — and shouldn't yet hire — an internal talent leader",
  "You've got funding and roadmap, and roles to fill this quarter",
  "You want pipeline discipline, not a stack of resumes to sort through",
];

const WhoFor = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy rounded-3xl px-8 sm:px-16 py-14 sm:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Who This Is Built For
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3 leading-tight">
              Built for founders who are done hiring one at a time.
            </h2>
          </div>
          <ul className="space-y-4">
            {criteria.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-gray-200 text-base leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhoFor;
