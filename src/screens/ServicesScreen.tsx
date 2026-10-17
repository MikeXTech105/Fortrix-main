import React, { useState } from 'react';
import { AGENCY_SERVICES, Service } from '../data/agencyData';

interface ServicesScreenProps {
  onSelectService: (service: Service) => void;
  onOpenLetstalk: () => void;
}

export const ServicesScreen: React.FC<ServicesScreenProps> = ({
  onSelectService,
  onOpenLetstalk,
}) => {
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([
    'web-dev',
    'cloud-devops',
  ]);
  const [targetPlatform, setTargetPlatform] = useState<'mvp' | 'scale' | 'enterprise'>('mvp');
  const [includeAI, setIncludeAI] = useState(false);

  const toggleDiscipline = (id: string) => {
    if (selectedDisciplines.includes(id)) {
      if (selectedDisciplines.length > 1) {
        setSelectedDisciplines(selectedDisciplines.filter((s) => s !== id));
      }
    } else {
      setSelectedDisciplines([...selectedDisciplines, id]);
    }
  };

  // Dynamic estimate calculations
  const baseSprints = targetPlatform === 'mvp' ? 4 : targetPlatform === 'scale' ? 8 : 14;
  const extraSprints = (selectedDisciplines.length - 1) * 1.5 + (includeAI ? 2 : 0);
  const totalSprints = Math.ceil(baseSprints + extraSprints);
  const estimatedWeeks = totalSprints * 2;

  return (
    <div className="w-full max-w-[1680px] mx-auto px-6 md:px-12 lg:px-24 py-12 text-[#e2e2e5]">
      {/* Header */}
      <div className="max-w-4xl mb-16">
        <span className="font-label-tech text-xs uppercase tracking-widest text-[#b0f753] block mb-2">
          // CAPABILITIES & PRACTICE AREAS
        </span>
        <h1 className="font-display-hero-mobile md:font-headline-xl text-3xl md:text-5xl text-white font-medium tracking-tight mb-4">
          Software engineering built for resilient growth.
        </h1>
        <p className="font-body-xl text-lg text-[#c2cab1] leading-relaxed">
          We operate across the entire technology lifecycle—from zero-to-one product design and distributed cloud backends to generative AI workflows and continuous performance optimization.
        </p>
      </div>

      {/* Services Grid Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {AGENCY_SERVICES.map((srv) => (
          <div
            key={srv.id}
            onClick={() => onSelectService(srv)}
            className="group bg-[#1a1c1e] p-8 rounded-xl border border-[#333537]/60 hover:border-[#b0f753]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-label-tech text-xs text-[#b0f753]">
                  {srv.number} // CAPABILITY
                </span>
                <span className="material-symbols-outlined text-[#8c947d] group-hover:text-[#b0f753] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  north_east
                </span>
              </div>

              <h3 className="font-headline-md text-xl text-white font-semibold mb-3 group-hover:text-[#b0f753] transition-colors">
                {srv.title}
              </h3>

              <p className="font-body-sm text-sm text-[#c2cab1] leading-relaxed mb-6">
                {srv.shortDesc}
              </p>

              <div className="space-y-1.5 mb-6">
                <span className="font-label-tech text-[10px] text-[#8c947d] uppercase block mb-1">
                  Core Highlights
                </span>
                {srv.deliverables.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#e2e2e5]">
                    <span className="text-[#b0f753]">✓</span>
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#333537]/50 flex items-center justify-between text-xs font-mono">
              <span className="text-[#8c947d]">Timeline:</span>
              <span className="text-white font-medium">{srv.typicalTimeline}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Scope & Sprint Estimator Tool */}
      <div className="bg-[#16181b] p-8 md:p-12 rounded-xl border border-[#333537] mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-[#333537]/60">
          <div>
            <span className="font-label-tech text-xs uppercase tracking-widest text-[#b0f753] block mb-2">
              // INTERACTIVE ESTIMATOR
            </span>
            <h2 className="font-headline-lg text-2xl md:text-3xl text-white font-medium">
              Sprint Sizing & Architecture Planner
            </h2>
          </div>
          <p className="font-body-sm text-xs text-[#c2cab1] max-w-sm">
            Select your target scope parameters to calculate an indicative cadence and founder squad allocation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="font-label-tech text-xs text-[#c2cab1] uppercase block mb-3">
                1. Select Target Disciplines:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {AGENCY_SERVICES.map((s) => {
                  const isChecked = selectedDisciplines.includes(s.id);
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => toggleDiscipline(s.id)}
                      className={`p-3 rounded-lg text-left text-xs font-mono border transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-[#1a1c1e] border-[#b0f753] text-white font-semibold'
                          : 'bg-[#0c0e10] border-[#333537] text-[#8c947d] hover:border-[#8c947d]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="truncate">{s.title}</span>
                        {isChecked && <span className="text-[#b0f753]">✓</span>}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <span className="font-label-tech text-xs text-[#c2cab1] uppercase block mb-3">
                2. Solution Tier / Maturity:
              </span>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setTargetPlatform('mvp')}
                  className={`p-3 rounded-lg text-center text-xs font-mono border transition-all cursor-pointer ${
                    targetPlatform === 'mvp'
                      ? 'bg-[#1a1c1e] border-[#b0f753] text-white font-bold'
                      : 'bg-[#0c0e10] border-[#333537] text-[#8c947d]'
                  }`}
                >
                  MVP (V1 Launch)
                </button>
                <button
                  type="button"
                  onClick={() => setTargetPlatform('scale')}
                  className={`p-3 rounded-lg text-center text-xs font-mono border transition-all cursor-pointer ${
                    targetPlatform === 'scale'
                      ? 'bg-[#1a1c1e] border-[#b0f753] text-white font-bold'
                      : 'bg-[#0c0e10] border-[#333537] text-[#8c947d]'
                  }`}
                >
                  Scale-Ready (V2)
                </button>
                <button
                  type="button"
                  onClick={() => setTargetPlatform('enterprise')}
                  className={`p-3 rounded-lg text-center text-xs font-mono border transition-all cursor-pointer ${
                    targetPlatform === 'enterprise'
                      ? 'bg-[#1a1c1e] border-[#b0f753] text-white font-bold'
                      : 'bg-[#0c0e10] border-[#333537] text-[#8c947d]'
                  }`}
                >
                  Enterprise Platform
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <input
                id="aiToggle"
                type="checkbox"
                checked={includeAI}
                onChange={(e) => setIncludeAI(e.target.checked)}
                className="w-4 h-4 rounded accent-[#b0f753] cursor-pointer"
              />
              <label htmlFor="aiToggle" className="text-xs font-mono text-[#e2e2e5] cursor-pointer">
                Integrate Generative AI RAG / Cognitive Graph Pipeline (+2 Sprints)
              </label>
            </div>
          </div>

          {/* Result Card */}
          <div className="lg:col-span-5 bg-[#1a1c1e] p-6 rounded-xl border border-[#333537] flex flex-col justify-between">
            <div className="space-y-4">
              <span className="font-label-tech text-xs text-[#b0f753] uppercase block">
                // ESTIMATED ENGAGEMENT ARCHITECTURE
              </span>

              <div className="grid grid-cols-2 gap-3 pt-2 font-mono">
                <div className="bg-[#0c0e10] p-4 rounded border border-[#333537]">
                  <span className="text-[#8c947d] text-[10px] block uppercase">Estimated Sprints</span>
                  <span className="text-2xl text-white font-bold">{totalSprints}</span>
                  <span className="text-[10px] text-[#c2cab1] block mt-0.5">2-week iterations</span>
                </div>
                <div className="bg-[#0c0e10] p-4 rounded border border-[#333537]">
                  <span className="text-[#8c947d] text-[10px] block uppercase">Est. Delivery Window</span>
                  <span className="text-2xl text-[#b0f753] font-bold">~{estimatedWeeks} wks</span>
                  <span className="text-[10px] text-[#c2cab1] block mt-0.5">Kickoff to Staging</span>
                </div>
              </div>

              <div className="p-4 rounded bg-[#0c0e10] border border-[#333537] text-xs font-mono space-y-1.5">
                <div className="text-white font-semibold">Squad Composition:</div>
                <div className="text-[#b0f753]">✓ Direct Lead: Sahil Jayani (Founder & Lead Architect)</div>
                <div className="text-[#c2cab1]">✓ 2-3 Dedicated Senior Full-Stack Engineers</div>
                <div className="text-[#c2cab1]">✓ 1 Production Design Lead</div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={onOpenLetstalk}
                className="w-full py-3 rounded-full bg-[#b0f753] text-[#102000] font-label-caps text-xs font-semibold uppercase tracking-wider hover:opacity-95 transition-opacity cursor-pointer shadow-[0_0_24px_rgba(176,247,83,0.3)]"
              >
                Turn Into Formal Project Proposal →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
