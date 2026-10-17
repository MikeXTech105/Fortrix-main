import React from 'react';
import { AGENCY_FOUNDERS } from '../data/agencyData';

interface AboutScreenProps {
  onOpenLetstalk: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onOpenLetstalk }) => {
  return (
    <div className="w-full max-w-[1680px] mx-auto px-6 md:px-12 lg:px-24 py-12 text-[#e2e2e5]">
      {/* Editorial Header */}
      <div className="max-w-4xl mb-16">
        <span className="font-label-tech text-xs uppercase tracking-widest text-[#b0f753] block mb-2">
          // ABOUT FORTRIX INFOTECH
        </span>
        <h1 className="font-display-hero-mobile md:font-headline-xl text-3xl md:text-5xl lg:text-6xl text-white font-medium tracking-tight mb-4 leading-tight">
          A technology studio built by people who love solving difficult problems.
        </h1>
        <p className="font-body-xl text-lg text-[#c2cab1] leading-relaxed">
          We operate at the convergence of product thinking, high-resiliency engineering, minimalist design systems, robotic process automation, generative AI, and cloud-native architectures.
        </p>
      </div>

      {/* Metrics Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        <div className="bg-[#1a1c1e] p-6 rounded-xl border border-[#333537]/60">
          <span className="font-label-tech text-xs text-[#8c947d] uppercase block mb-1">
            Engineering Structure
          </span>
          <div className="font-display-hero-mobile text-3xl md:text-4xl text-white font-bold">
            100%
          </div>
          <span className="font-label-tech text-xs text-[#b0f753] mt-1 block">
            Direct Senior Builders
          </span>
        </div>

        <div className="bg-[#1a1c1e] p-6 rounded-xl border border-[#333537]/60">
          <span className="font-label-tech text-xs text-[#8c947d] uppercase block mb-1">
            Agency Overhead
          </span>
          <div className="font-display-hero-mobile text-3xl md:text-4xl text-[#b0f753] font-bold">
            0%
          </div>
          <span className="font-label-tech text-xs text-[#c2cab1] mt-1 block">
            No Middlemen or Sales Reps
          </span>
        </div>

        <div className="bg-[#1a1c1e] p-6 rounded-xl border border-[#333537]/60">
          <span className="font-label-tech text-xs text-[#8c947d] uppercase block mb-1">
            Average Kickoff
          </span>
          <div className="font-display-hero-mobile text-3xl md:text-4xl text-white font-bold">
            &lt; 10d
          </div>
          <span className="font-label-tech text-xs text-[#c2cab1] mt-1 block">
            From Spec to Sprints
          </span>
        </div>

        <div className="bg-[#1a1c1e] p-6 rounded-xl border border-[#333537]/60">
          <span className="font-label-tech text-xs text-[#8c947d] uppercase block mb-1">
            Code Ownership
          </span>
          <div className="font-display-hero-mobile text-3xl md:text-4xl text-[#b0f753] font-bold">
            100%
          </div>
          <span className="font-label-tech text-xs text-[#c2cab1] mt-1 block">
            Zero IP Lock-In
          </span>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="mb-24">
        <div className="mb-8 pb-4 border-b border-[#333537]/50 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <span className="font-label-tech text-xs uppercase tracking-widest text-[#b0f753] block mb-2">
              // STUDIO LEADERSHIP
            </span>
            <h2 className="font-headline-lg text-2xl md:text-3xl text-white font-medium">
              Direct founder steering on every engagement.
            </h2>
          </div>
          <p className="font-body-sm text-xs text-[#c2cab1] mt-2 md:mt-0">
            You collaborate straight with the architects who design and deploy your codebase.
          </p>
        </div>

        <div className="max-w-3xl">
          {AGENCY_FOUNDERS.map((fnd) => (
            <div
              key={fnd.name}
              className="bg-[#1a1c1e] p-8 rounded-xl border border-[#333537] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-lg bg-[#282a2c] border border-[#333537] flex items-center justify-center font-bold text-white text-xl">
                    {fnd.initials}
                  </div>
                  <div>
                    <h3 className="font-headline-md text-xl text-white font-semibold">
                      {fnd.name}
                    </h3>
                    <span className="font-label-tech text-xs text-[#b0f753] uppercase block">
                      {fnd.role} · {fnd.title}
                    </span>
                  </div>
                </div>

                <p className="font-body-md text-sm text-[#c2cab1] leading-relaxed mb-6">
                  {fnd.bio}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="font-label-tech text-[10px] text-[#8c947d] uppercase block">
                    Focus Disciplines
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {fnd.focusAreas.map((area, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-[#282a2c] font-label-tech text-xs text-[#e2e2e5]"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#333537]/60 flex items-center gap-4">
                <a
                  href={fnd.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="font-label-tech text-xs uppercase text-[#e2e2e5] hover:text-[#b0f753] transition-colors inline-flex items-center gap-1"
                >
                  <span>LinkedIn Profile</span>
                  <span>→</span>
                </a>
                <a
                  href={`mailto:${fnd.email}`}
                  className="font-label-tech text-xs uppercase text-[#e2e2e5] hover:text-[#b0f753] transition-colors inline-flex items-center gap-1"
                >
                  <span>{fnd.email}</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Engagement Models */}
      <div className="mb-24">
        <div className="mb-8 pb-4 border-b border-[#333537]/50">
          <span className="font-label-tech text-xs uppercase tracking-widest text-[#b0f753] block mb-2">
            // COLLABORATION ARCHITECTURE
          </span>
          <h2 className="font-headline-lg text-2xl md:text-3xl text-white font-medium">
            How we partner with founders and enterprise leaders.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1a1c1e] p-8 rounded-xl border border-[#333537]/60 flex flex-col justify-between">
            <div>
              <span className="font-label-tech text-xs text-[#b0f753] uppercase block mb-2">
                MODEL 01
              </span>
              <h3 className="font-headline-md text-xl text-white font-semibold mb-3">
                High-Velocity Sprint
              </h3>
              <p className="font-body-sm text-sm text-[#c2cab1] leading-relaxed mb-6">
                Intensive 4 to 8-week cycle designed to build, validate, and launch zero-to-one MVPs, critical platform modules, or AI workflows with lightning speed.
              </p>
              <ul className="space-y-2 text-xs font-mono text-[#e2e2e5]">
                <li className="flex items-center gap-2">
                  <span className="text-[#b0f753]">✓</span> Full product architecture & design
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#b0f753]">✓</span> Direct founder immersion
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#b0f753]">✓</span> Staging & production rollout
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-[#333537]/50 font-label-tech text-xs text-[#96da38]">
              Ideal for new ventures & rapid drops
            </div>
          </div>

          <div className="bg-[#1a1c1e] p-8 rounded-xl border border-[#b0f753]/40 flex flex-col justify-between shadow-xl">
            <div>
              <span className="font-label-tech text-xs text-[#b0f753] uppercase block mb-2">
                MODEL 02 // MOST POPULAR
              </span>
              <h3 className="font-headline-md text-xl text-white font-semibold mb-3">
                Dedicated Product Squad
              </h3>
              <p className="font-body-sm text-sm text-[#c2cab1] leading-relaxed mb-6">
                An embedded senior engineering unit operating as your dedicated core technical department with guaranteed velocity and zero hiring lag.
              </p>
              <ul className="space-y-2 text-xs font-mono text-[#e2e2e5]">
                <li className="flex items-center gap-2">
                  <span className="text-[#b0f753]">✓</span> Continuous feature roadmap release
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#b0f753]">✓</span> 2-week agile ship sprints
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#b0f753]">✓</span> Architecture scalability & DevOps
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-[#333537]/50 font-label-tech text-xs text-[#b0f753] font-bold">
              Ideal for scaling funded startups
            </div>
          </div>

          <div className="bg-[#1a1c1e] p-8 rounded-xl border border-[#333537]/60 flex flex-col justify-between">
            <div>
              <span className="font-label-tech text-xs text-[#b0f753] uppercase block mb-2">
                MODEL 03
              </span>
              <h3 className="font-headline-md text-xl text-white font-semibold mb-3">
                Architecture & Security Audit
              </h3>
              <p className="font-body-sm text-sm text-[#c2cab1] leading-relaxed mb-6">
                Deep-dive diagnostic into existing backend bottlenecks, concurrency vulnerabilities, cloud cost bloat, and technical debt prior to funding rounds.
              </p>
              <ul className="space-y-2 text-xs font-mono text-[#e2e2e5]">
                <li className="flex items-center gap-2">
                  <span className="text-[#b0f753]">✓</span> Comprehensive code audit
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#b0f753]">✓</span> Database & latency profiling
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#b0f753]">✓</span> Executive mitigation playbook
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-[#333537]/50 font-label-tech text-xs text-[#96da38]">
              Ideal for technical due diligence
            </div>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-[#16181b] p-8 md:p-12 rounded-xl border border-[#333537] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-headline-lg text-2xl text-white font-medium mb-1">
            Ready to explore an engagement?
          </h3>
          <p className="font-body-md text-sm text-[#c2cab1]">
            Schedule an initial technical discovery session with founder Sahil Jayani.
          </p>
        </div>
        <button
          onClick={onOpenLetstalk}
          className="px-8 py-3 rounded-full bg-[#b0f753] text-[#102000] font-label-caps text-xs font-semibold uppercase tracking-wider hover:opacity-95 transition-opacity cursor-pointer whitespace-nowrap shadow-[0_0_24px_rgba(176,247,83,0.3)]"
        >
          Initiate Founder Discovery →
        </button>
      </div>
    </div>
  );
};
