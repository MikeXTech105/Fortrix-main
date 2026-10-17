import React from 'react';
import { Service } from '../data/agencyData';

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
  onSelectServiceForBrief: (service: Service) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectServiceForBrief,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl my-8 rounded-xl bg-[#121416] border border-[#333537] shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#333537] bg-[#1a1c1e]">
          <div className="flex items-center gap-3">
            <span className="font-label-tech text-xs uppercase text-[#b0f753] tracking-wider font-semibold">
              CAPABILITY PROFILE
            </span>
            <span className="text-[#42474d] text-sm">/</span>
            <span className="font-label-tech text-xs text-[#c2cab1] uppercase">
              SERVICE // {service.number}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full bg-[#282a2c] text-[#e2e2e5] hover:text-white flex items-center justify-center hover:bg-[#333537] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6">
          <div>
            <span className="font-label-tech text-xs text-[#b0f753] block mb-1">
              FORTRIX STUDIO CAPABILITY
            </span>
            <h2 className="font-headline-lg text-2xl md:text-3xl text-white font-medium">
              {service.title}
            </h2>
            <p className="font-body-md text-sm md:text-base text-[#c2cab1] mt-3 leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Business Impact Card */}
          <div className="bg-[#1a1c1e] p-4 rounded-lg border border-[#333537]/80">
            <span className="font-label-tech text-[10px] uppercase text-[#b0f753] tracking-wider block mb-1">
              // COMMERCIAL OUTCOME
            </span>
            <p className="text-sm text-white font-medium">
              {service.businessImpact}
            </p>
          </div>

          {/* Key Deliverables */}
          <div className="space-y-3">
            <h3 className="font-label-tech text-xs uppercase text-[#c2cab1] tracking-wider">
              Core Deliverables Included:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#1a1c1e] p-3 rounded border border-[#333537]/60 flex items-start gap-2.5 text-xs text-[#e2e2e5]"
                >
                  <span className="text-[#b0f753] font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Timeline Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-[#1a1c1e] p-4 rounded-lg border border-[#333537]">
              <span className="font-label-tech text-[10px] text-[#8c947d] uppercase block mb-1.5">
                Primary Stack & Frameworks
              </span>
              <div className="flex flex-wrap gap-1.5">
                {service.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-[#282a2c] font-label-tech text-[10px] text-[#e2e2e5]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#1a1c1e] p-4 rounded-lg border border-[#333537] flex flex-col justify-center">
              <span className="font-label-tech text-[10px] text-[#8c947d] uppercase block mb-1">
                Typical Delivery Cycle
              </span>
              <div className="font-headline-sm text-lg text-white font-semibold">
                {service.typicalTimeline}
              </div>
              <span className="font-label-tech text-[10px] text-[#c2cab1] mt-0.5">
                Structured in 2-week agile ship sprints
              </span>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[#333537] flex items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-label-tech uppercase text-[#c2cab1] hover:text-white transition-colors cursor-pointer"
            >
              Back
            </button>
            <button
              onClick={() => {
                onSelectServiceForBrief(service);
                onClose();
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#b0f753] text-[#102000] font-label-caps text-xs font-semibold uppercase tracking-wider hover:opacity-95 transition-opacity cursor-pointer"
            >
              <span>Add to Project Brief</span>
              <span className="font-mono">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
