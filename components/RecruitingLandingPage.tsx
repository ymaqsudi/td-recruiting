"use client";

import Link from "next/link";
import {
  Briefcase,
  Target,
  Handshake,
  CheckCircle2,
  Users2,
} from "lucide-react";

const engagementModels = [
  {
    title: "Embedded Talent Partner",
    tag: "Multi-role retainer · 3, 6, or 12 mo.",
    badge: "Recommended",
    icon: Users2,
    description:
      "We operate as your outsourced talent team. Multiple concurrent roles, weekly cadence, comp benchmarking, closing playbook, and hiring rubric — the operating rigor of an in-house function without the headcount.",
  },
  {
    title: "Exclusive Retained Search",
    tag: "Single senior hire · exclusive engagement",
    icon: Target,
    description:
      "One critical hire, one firm on it. Standard retained terms with a portion of the fee due at kickoff. Best for senior finance, engineering, or executive roles where quality of pipeline matters more than speed to a first slate.",
  },
  {
    title: "Contingency Search",
    tag: "Select roles · available on request",
    icon: Handshake,
    description:
      "Placement-fee only, offered on a case-by-case basis for the right founder relationship. Not our default model.",
  },
];

const deliverables = [
  "Weekly-cadenced pipelines built to your bar",
  "Comp benchmarking so offers land the first time",
  "Screening, references, and closing done end-to-end",
  "A hiring rubric and playbook documented for your team",
  "One point of contact who's placed at Netflix and AWS",
];

const recentEngagements = [
  "Head of Talent, embedded at a Series B AI startup",
  "Multi-role technical hiring for a growth-stage tech company",
  "Senior finance hires for a boutique investment firm",
  "Executive comms & networking coaching (paired offering)",
];

const RecruitingLandingPage = () => {
  return (
    <main className="min-h-screen bg-white pt-16 pb-24 px-4 sm:px-8">
      {/* Back link */}
      <div className="max-w-6xl mx-auto mb-8 text-left">
        <Link
          href="https://www.techduels.com"
          className="text-[#0B1F3A] text-sm hover:underline flex items-center w-fit"
        >
          <span className="text-lg mr-1">←</span> Back to TechDuels
        </Link>
      </div>

      {/* Hero */}
      <section className="max-w-5xl mx-auto text-center mb-16 px-2">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF6A] font-bold mb-4">
          A Talent Practice by TechDuels
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1F3A] mb-4 tracking-tight">
          Executive Search &amp; Embedded Recruiting
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          For growth-stage founders in AI, tech, and finance.
        </p>
        <div className="w-16 h-1 bg-[#D4AF6A] mx-auto mt-8 rounded-full" />
      </section>

      {/* Pull quote */}
      <section className="max-w-3xl mx-auto mb-20 px-2">
        <blockquote className="border-l-4 border-[#D4AF6A] bg-gray-50 rounded-r-xl px-6 py-5 italic text-gray-700 text-lg">
          Hiring is what kills great companies — not raising, not building.
          The first twenty hires shape the next hundred, and most founders
          make them one at a time, under pressure, without a system. This is
          that system.
        </blockquote>
      </section>

      {/* Ways to work together */}
      <section className="max-w-6xl mx-auto mb-20 px-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] mb-10 text-center uppercase tracking-widest">
          Ways to Work Together
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {engagementModels.map(
            ({ title, tag, description, icon: Icon, badge }) => (
              <div
                key={title}
                className={`rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 flex flex-col ${
                  badge
                    ? "bg-[#0B1F3A] text-white ring-2 ring-[#D4AF6A]"
                    : "bg-gray-50 text-[#0B1F3A]"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon
                    className={`h-8 w-8 ${
                      badge ? "text-[#D4AF6A]" : "text-[#0B1F3A]"
                    }`}
                  />
                  {badge && (
                    <span className="text-[10px] uppercase tracking-widest font-bold bg-[#D4AF6A] text-[#0B1F3A] px-2 py-1 rounded-full">
                      {badge}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p
                  className={`text-xs uppercase tracking-wide mb-4 font-semibold ${
                    badge ? "text-[#D4AF6A]" : "text-gray-500"
                  }`}
                >
                  {tag}
                </p>
                <p
                  className={`text-sm leading-relaxed ${
                    badge ? "text-gray-100" : "text-gray-600"
                  }`}
                >
                  {description}
                </p>
              </div>
            )
          )}
        </div>
        <p className="text-center text-gray-500 text-sm mt-8 italic">
          Every engagement is scoped to your team, stage, and roadmap.
        </p>
      </section>

      {/* Delivers + Recent engagements */}
      <section className="max-w-6xl mx-auto mb-20 grid sm:grid-cols-2 gap-12 px-2">
        <div>
          <h2 className="text-xl font-bold text-[#0B1F3A] mb-6 uppercase tracking-widest">
            What Working With Us Delivers
          </h2>
          <ul className="space-y-4">
            {deliverables.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#D4AF6A] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#0B1F3A] mb-6 uppercase tracking-widest">
            Recent Engagements
          </h2>
          <ul className="space-y-4">
            {recentEngagements.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Briefcase className="h-5 w-5 text-[#0B1F3A] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who this is built for */}
      <section className="max-w-5xl mx-auto mb-20 px-2">
        <div className="bg-[#0B1F3A] text-white rounded-2xl px-8 py-10">
          <h2 className="text-lg font-bold text-[#D4AF6A] uppercase tracking-widest mb-3">
            Who This Is Built For
          </h2>
          <p className="text-gray-100 text-base sm:text-lg leading-relaxed">
            Founders scaling from ~20 to ~100 people who don&apos;t have — and
            shouldn&apos;t yet hire — an internal talent leader. You&apos;ve
            got funding, roadmap, and roles you need to fill this quarter.
            What you don&apos;t have is the operating capacity to run a real
            hiring process.
          </p>
        </div>
      </section>

      {/* Why this is different */}
      <section className="max-w-4xl mx-auto mb-24 text-center px-2">
        <h2 className="text-2xl font-bold text-[#0B1F3A] mb-4">
          Why This Is Different
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          Most agencies send resumes. TD Recruiting operates like the
          in-house talent team you&apos;d hire if you were ready — the same
          pipeline discipline, closing playbook, and quality bar. Led by a
          20+ year talent leader with time at Netflix, AWS, Capital One,
          Major League Baseball, Wayfair, and AbbVie, and currently embedded
          as Head of Talent at a Series B AI startup. Paired with
          Logicoach.ai, our optional AI coaching layer for onboarding and
          interview practice.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center max-w-3xl mx-auto px-2 mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] mb-4">
          Ready to build your next twenty hires?
        </h2>
        <p className="text-gray-600 mb-8">
          Reach out to discuss which engagement model fits your stage and
          roadmap.
        </p>
        <Link
          href="https://www.techduels.com/#contact"
          className="inline-block bg-[#0B1F3A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#132a4d] transition"
        >
          Talk to Us
        </Link>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-2 pt-8 border-t border-gray-100 text-center text-xs text-gray-400">
        TD Recruiting is a talent practice by{" "}
        <a
          href="https://www.techduels.com"
          className="underline hover:text-gray-600"
        >
          TechDuels
        </a>
        .
      </footer>
    </main>
  );
};

export default RecruitingLandingPage;
