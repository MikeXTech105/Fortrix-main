import React, { useState } from 'react';
import { AGENCY_PROJECTS, Project } from '../data/agencyData';

interface WorkScreenProps {
  onSelectProject: (project: Project) => void;
  onOpenLetstalk: () => void;
}

export const WorkScreen: React.FC<WorkScreenProps> = ({
  onSelectProject,
  onOpenLetstalk,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fintech', label: 'Fintech & Trading' },
    { id: 'saas', label: 'SaaS & Operations' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'cloud', label: 'Cloud & E-Commerce' },
  ];

  const filteredProjects = AGENCY_PROJECTS.filter((proj) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'fintech') return proj.category.includes('FINTECH');
    if (activeFilter === 'saas') return proj.category.includes('SAAS');
    if (activeFilter === 'ai') return proj.category.includes('INTELLIGENCE');
    if (activeFilter === 'cloud') return proj.category.includes('COMMERCE');
    return true;
  });

  return (
    <div className="w-full max-w-[1680px] mx-auto px-6 md:px-12 lg:px-24 py-12 text-[#e2e2e5]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#333537]/50">
        <div className="max-w-3xl">
          <span className="font-label-tech text-xs uppercase tracking-widest text-[#b0f753] block mb-2">
            // SELECTED WORK & PORTFOLIO
          </span>
          <h1 className="font-display-hero-mobile md:font-headline-xl text-3xl md:text-5xl text-white font-medium tracking-tight mb-3">
            Case studies in mission-critical engineering.
          </h1>
          <p className="font-body-md text-base text-[#c2cab1]">
            Explore production architectures built for high concurrency, ultra-low latency, and autonomous scale.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-label-tech uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-[#b0f753] text-[#102000] font-bold shadow-[0_0_16px_rgba(176,247,83,0.3)]'
                  : 'bg-[#1a1c1e] text-[#c2cab1] hover:text-white border border-[#333537]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-16 mb-24">
        {filteredProjects.map((proj, idx) => {
          const isEven = idx % 2 === 1;

          return (
            <div
              key={proj.id}
              className="bg-[#1a1c1e] rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-[#333537]/60 hover:border-[#b0f753]/40 transition-all duration-500 shadow-xl"
            >
              <div
                className={`lg:col-span-7 overflow-hidden relative min-h-[380px] lg:min-h-[500px] bg-[#1e2022] ${
                  isEven ? 'order-1 lg:order-2' : ''
                }`}
              >
                <img
                  alt={proj.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  src={proj.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1e] via-transparent to-transparent opacity-60" />
              </div>

              <div
                className={`lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between ${
                  isEven ? 'order-2 lg:order-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-label-tech text-xs text-[#b0f753] uppercase tracking-wider">
                      {proj.number} // {proj.category}
                    </span>
                    <span className="font-label-tech text-xs text-[#c2cab1]">
                      {proj.year}
                    </span>
                  </div>

                  <h2 className="font-headline-lg text-2xl md:text-3xl text-white font-semibold tracking-tight mb-3">
                    {proj.title}
                  </h2>

                  <p className="font-body-md text-sm md:text-base text-[#c2cab1] leading-relaxed mb-6">
                    {proj.description}
                  </p>

                  {/* Quantitative Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs">
                    {proj.metrics.map((m, midx) => (
                      <div key={midx} className="bg-[#0c0e10] p-2.5 rounded border border-[#333537]/50">
                        <span className="text-[#8c947d] text-[10px] block uppercase">{m.label}</span>
                        <span className="text-white font-bold">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.tags.map((t, tidx) => (
                      <span
                        key={tidx}
                        className="px-2.5 py-1 rounded bg-[#282a2c] font-label-tech text-xs text-[#e2e2e5]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#333537]/50 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(proj)}
                    className="inline-flex items-center gap-2 font-label-caps text-xs uppercase tracking-wider text-[#b0f753] font-semibold hover:underline cursor-pointer"
                  >
                    <span>Inspect Architecture Blueprint</span>
                    <span className="font-label-tech text-xs">→</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA Card */}
      <div className="bg-[#16181b] p-8 md:p-12 rounded-xl border border-[#333537] flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-headline-lg text-2xl text-white font-medium mb-2">
            Have a specialized engineering requirement?
          </h3>
          <p className="font-body-md text-sm text-[#c2cab1]">
            We build custom platforms, trading systems, AI pipelines, and high-concurrency cloud foundations.
          </p>
        </div>
        <button
          onClick={onOpenLetstalk}
          className="px-8 py-3 rounded-full bg-[#b0f753] text-[#102000] font-label-caps text-xs font-semibold uppercase tracking-wider hover:opacity-95 transition-opacity cursor-pointer whitespace-nowrap shadow-[0_0_24px_rgba(176,247,83,0.3)]"
        >
          Discuss Your Architecture →
        </button>
      </div>
    </div>
  );
};
