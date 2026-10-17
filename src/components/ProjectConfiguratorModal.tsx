import React, { useState, useEffect } from 'react';
import { Project, Service } from '../data/agencyData';

export interface SavedInquiry {
  id: string;
  timestamp: string;
  name: string;
  email: string;
  company: string;
  services: string[];
  timeline: string;
  budget: string;
  description: string;
  estimatedSprints: number;
  kickoffWindow: string;
}

interface ProjectConfiguratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: Service | null;
  preselectedProject?: Project | null;
  onSaveInquiry: (inquiry: SavedInquiry) => void;
}

export const ProjectConfiguratorModal: React.FC<ProjectConfiguratorModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  preselectedProject,
  onSaveInquiry,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form states
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Web Development',
  ]);
  const [timeline, setTimeline] = useState('4-8 weeks (MVP Sprint)');
  const [budgetTier, setBudgetTier] = useState('$30,000 – $60,000');
  const [techStack, setTechStack] = useState<string[]>(['TypeScript', 'React / Next.js', 'PostgreSQL']);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [submittedInquiry, setSubmittedInquiry] = useState<SavedInquiry | null>(null);
  const [copiedBrief, setCopiedBrief] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      if (!selectedServices.includes(preselectedService.title)) {
        setSelectedServices((prev) => [...prev, preselectedService.title]);
      }
    }
  }, [preselectedService]);

  useEffect(() => {
    if (preselectedProject) {
      setProjectDescription(`We are looking to build a high-performance system similar to ${preselectedProject.title} with real-time capabilities.`);
    }
  }, [preselectedProject]);

  if (!isOpen) return null;

  const serviceOptions = [
    'Web Development',
    'Mobile Development',
    'Custom Software & ERP',
    'AI & Automation (RAG / Agents)',
    'UI/UX Design Systems',
    'Cloud & DevOps Architecture',
  ];

  const timelineOptions = [
    'Rapid Prototype (< 4 weeks)',
    '4-8 weeks (MVP Sprint)',
    '3-5 months (Full Platform)',
    'Enterprise Continuous Retainer',
  ];

  const budgetOptions = [
    '$15,000 – $30,000',
    '$30,000 – $60,000',
    '$60,000 – $120,000',
    '$120,000+',
  ];

  const techOptions = [
    'TypeScript',
    'React / Next.js',
    '.NET Core',
    'Node.js',
    'Python & FastAPI',
    'Flutter / React Native',
    'PostgreSQL',
    'Redis',
    'AWS Cloud',
    'Docker & K8s',
    'OpenAI & Vector DBs',
  ];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const toggleTech = (tech: string) => {
    if (techStack.includes(tech)) {
      setTechStack(techStack.filter((t) => t !== tech));
    } else {
      setTechStack([...techStack, tech]);
    }
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    const newInquiry: SavedInquiry = {
      id: `FTX-${Math.floor(1000 + Math.random() * 9000)}`,
      timestamp: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      name,
      email,
      company: company || 'Independent Venture',
      services: selectedServices,
      timeline,
      budget: budgetTier,
      description: projectDescription || 'Full-cycle engineering and modern digital product build.',
      estimatedSprints: timeline.includes('< 4') ? 2 : timeline.includes('4-8') ? 4 : 8,
      kickoffWindow: 'Direct Founder Immersion within 7-10 Days',
    };

    onSaveInquiry(newInquiry);
    setSubmittedInquiry(newInquiry);
  };

  const handleCopyBrief = () => {
    if (!submittedInquiry) return;
    const text = `FORTRIX INFOTECH PROJECT BRIEF
Inquiry Ref: ${submittedInquiry.id}
Client: ${submittedInquiry.name} (${submittedInquiry.company})
Email: ${submittedInquiry.email}
Target Services: ${submittedInquiry.services.join(', ')}
Delivery Timeline: ${submittedInquiry.timeline}
Target Investment: ${submittedInquiry.budget}
Estimated Sprints: ${submittedInquiry.estimatedSprints} sprints
Direct Founder Steering: Sahil Jayani (Founder & Product Architect)
Kickoff: ${submittedInquiry.kickoffWindow}
Scope Summary: ${submittedInquiry.description}
Generated via Fortrix Studio Engine.`;

    navigator.clipboard.writeText(text);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl my-8 rounded-xl bg-[#121416] border border-[#333537] shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#333537] bg-[#1a1c1e]">
          <div className="flex items-center gap-3">
            <span className="font-label-tech text-xs uppercase text-[#b0f753] tracking-widest font-semibold">
              START A PROJECT
            </span>
            <span className="text-[#42474d] text-sm">/</span>
            <span className="font-label-tech text-xs text-[#c2cab1] uppercase">
              {submittedInquiry ? 'PROPOSAL GENERATED' : `STEP 0${step} OF 04`}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="w-8 h-8 rounded-full bg-[#282a2c] text-[#e2e2e5] hover:text-white flex items-center justify-center hover:bg-[#333537] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8">
          {submittedInquiry ? (
            /* Submission Confirmation & Proposal Card */
            <div className="space-y-6 animate-in fade-in">
              <div className="flex items-center gap-3 text-[#b0f753]">
                <div className="w-10 h-10 rounded-full bg-[#b0f753]/10 border border-[#b0f753]/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">check_circle</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-xl text-white font-semibold">
                    Project Brief Confirmed & Dispatched
                  </h3>
                  <p className="font-label-tech text-xs text-[#96da38]">
                    REF #{submittedInquiry.id} · Founder Sahil Jayani notified directly
                  </p>
                </div>
              </div>

              {/* Generated Architecture Proposal Blueprint */}
              <div className="bg-[#1a1c1e] p-6 rounded-lg border border-[#333537] space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#333537]/80 gap-2">
                  <div>
                    <span className="font-label-tech text-[10px] text-[#8c947d] uppercase block">
                      Client Engagement
                    </span>
                    <span className="font-headline-sm text-base text-white">
                      {submittedInquiry.name} · {submittedInquiry.company}
                    </span>
                  </div>
                  <div className="text-right sm:text-right">
                    <span className="font-label-tech text-[10px] text-[#8c947d] uppercase block">
                      Kickoff Window
                    </span>
                    <span className="font-label-tech text-xs text-[#b0f753] font-bold">
                      {submittedInquiry.kickoffWindow}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
                  <div className="bg-[#0c0e10] p-3 rounded border border-[#333537]/60">
                    <span className="text-[#8c947d] text-[10px] block uppercase">Est. Sprints</span>
                    <span className="text-white font-bold">{submittedInquiry.estimatedSprints} Sprints (2w ea)</span>
                  </div>
                  <div className="bg-[#0c0e10] p-3 rounded border border-[#333537]/60">
                    <span className="text-[#8c947d] text-[10px] block uppercase">Budget Tier</span>
                    <span className="text-white font-bold">{submittedInquiry.budget}</span>
                  </div>
                  <div className="bg-[#0c0e10] p-3 rounded border border-[#333537]/60">
                    <span className="text-[#8c947d] text-[10px] block uppercase">Target Horizon</span>
                    <span className="text-white font-bold">{submittedInquiry.timeline}</span>
                  </div>
                  <div className="bg-[#0c0e10] p-3 rounded border border-[#333537]/60">
                    <span className="text-[#8c947d] text-[10px] block uppercase">Leadership</span>
                    <span className="text-[#b0f753] font-bold">100% Direct Founders</span>
                  </div>
                </div>

                <div>
                  <span className="font-label-tech text-[10px] text-[#8c947d] uppercase block mb-1">
                    Selected Disciplines
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {submittedInquiry.services.map((s, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded bg-[#282a2c] font-label-tech text-xs text-[#e2e2e5]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-label-tech text-[10px] text-[#8c947d] uppercase block mb-1">
                    Project Scope Notes
                  </span>
                  <p className="font-body-sm text-xs text-[#c2cab1] bg-[#0c0e10] p-3 rounded border border-[#333537]/60">
                    {submittedInquiry.description}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  onClick={handleCopyBrief}
                  className="px-4 py-2 rounded-lg bg-[#282a2c] text-[#e2e2e5] hover:text-white font-label-caps text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">content_copy</span>
                  <span>{copiedBrief ? 'Copied to Clipboard!' : 'Copy Brief Markdown'}</span>
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href="mailto:fortrixinfotech@gmail.com?subject=Project%20Discovery%20Call"
                    className="px-5 py-2 rounded-full bg-[#b0f753] text-[#102000] font-label-caps text-xs font-semibold uppercase tracking-wider hover:opacity-95 transition-opacity"
                  >
                    Schedule Direct Discovery Call →
                  </a>
                  <button
                    onClick={onClose}
                    className="px-4 py-2 rounded-lg text-xs font-label-tech uppercase text-[#c2cab1] hover:text-white cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Multi-step Configurator Flow */
            <div className="space-y-6">
              {/* Step indicator */}
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4].map((s) => (
                  <div
                    key={s}
                    className={`h-1 flex-1 rounded-full transition-colors ${
                      step >= s ? 'bg-[#b0f753]' : 'bg-[#282a2c]'
                    }`}
                  />
                ))}
              </div>

              {step === 1 && (
                <div className="space-y-4 animate-in fade-in">
                  <div>
                    <h3 className="font-headline-md text-xl text-white font-semibold">
                      What capabilities does your product need?
                    </h3>
                    <p className="font-body-sm text-xs text-[#c2cab1] mt-1">
                      Select all that apply. We engineer cohesive end-to-end solutions.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {serviceOptions.map((srv) => {
                      const isSelected = selectedServices.includes(srv);
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => toggleService(srv)}
                          className={`p-4 rounded-lg text-left border transition-all cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? 'bg-[#1a1c1e] border-[#b0f753] text-white shadow-sm'
                              : 'bg-[#121416] border-[#333537] text-[#c2cab1] hover:border-[#8c947d]'
                          }`}
                        >
                          <span className="font-body-md text-sm font-medium">{srv}</span>
                          <span className={`material-symbols-outlined text-[18px] ${isSelected ? 'text-[#b0f753]' : 'text-[#42474d]'}`}>
                            {isSelected ? 'check_box' : 'check_box_outline_blank'}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-in fade-in">
                  <div>
                    <h3 className="font-headline-md text-xl text-white font-semibold">
                      Target Timeline & Investment Budget
                    </h3>
                    <p className="font-body-sm text-xs text-[#c2cab1] mt-1">
                      Helps us recommend the optimal sprint sizing and release velocity.
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div>
                      <span className="font-label-tech text-xs text-[#b0f753] uppercase block mb-2">
                        Delivery Horizon
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {timelineOptions.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setTimeline(t)}
                            className={`p-3 rounded-lg text-left border text-xs font-mono transition-all cursor-pointer ${
                              timeline === t
                                ? 'bg-[#1a1c1e] border-[#b0f753] text-white'
                                : 'bg-[#121416] border-[#333537] text-[#c2cab1] hover:border-[#8c947d]'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <span className="font-label-tech text-xs text-[#b0f753] uppercase block mb-2">
                        Target Capital Allocation
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {budgetOptions.map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setBudgetTier(b)}
                            className={`p-3 rounded-lg text-center border text-xs font-mono transition-all cursor-pointer ${
                              budgetTier === b
                                ? 'bg-[#1a1c1e] border-[#b0f753] text-white font-bold'
                                : 'bg-[#121416] border-[#333537] text-[#c2cab1] hover:border-[#8c947d]'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4 animate-in fade-in">
                  <div>
                    <h3 className="font-headline-md text-xl text-white font-semibold">
                      Preferred Technologies & Tooling
                    </h3>
                    <p className="font-body-sm text-xs text-[#c2cab1] mt-1">
                      Have preferred infrastructure? We adapt or recommend the best architecture.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {techOptions.map((tech) => {
                      const isSelected = techStack.includes(tech);
                      return (
                        <button
                          key={tech}
                          type="button"
                          onClick={() => toggleTech(tech)}
                          className={`px-3 py-1.5 rounded-full text-xs font-label-tech uppercase tracking-wider transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#b0f753] text-[#102000] font-semibold'
                              : 'bg-[#1e2022] text-[#c2cab1] hover:text-white border border-[#333537]'
                          }`}
                        >
                          {tech} {isSelected ? '✓' : '+'}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 4 && (
                <form onSubmit={handleFinalSubmit} className="space-y-4 animate-in fade-in">
                  <div>
                    <h3 className="font-headline-md text-xl text-white font-semibold">
                      Tell us about your venture
                    </h3>
                    <p className="font-body-sm text-xs text-[#c2cab1] mt-1">
                      Direct founder review within 24 business hours. No spam, no sales reps.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div>
                      <label className="font-label-tech text-[10px] text-[#c2cab1] uppercase block mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Alex Morgan"
                        className="w-full px-3 py-2 rounded bg-[#0c0e10] border border-[#333537] text-xs font-mono text-white focus:border-[#b0f753] outline-none"
                      />
                    </div>
                    <div>
                      <label className="font-label-tech text-[10px] text-[#c2cab1] uppercase block mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className="w-full px-3 py-2 rounded bg-[#0c0e10] border border-[#333537] text-xs font-mono text-white focus:border-[#b0f753] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-label-tech text-[10px] text-[#c2cab1] uppercase block mb-1">
                      Company / Venture Name
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Acme Technologies"
                      className="w-full px-3 py-2 rounded bg-[#0c0e10] border border-[#333537] text-xs font-mono text-white focus:border-[#b0f753] outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-label-tech text-[10px] text-[#c2cab1] uppercase block mb-1">
                      Brief Problem / Vision Statement
                    </label>
                    <textarea
                      rows={3}
                      value={projectDescription}
                      onChange={(e) => setProjectDescription(e.target.value)}
                      placeholder="We are building an automated analytics pipeline for logistics fleets with real-time telematics..."
                      className="w-full px-3 py-2 rounded bg-[#0c0e10] border border-[#333537] text-xs font-mono text-white focus:border-[#b0f753] outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-[#b0f753] text-[#102000] font-label-caps text-xs font-semibold uppercase tracking-wider hover:opacity-95 transition-opacity cursor-pointer shadow-[0_0_24px_rgba(176,247,83,0.3)]"
                  >
                    Generate Proposal & Dispatch to Founders →
                  </button>
                </form>
              )}

              {/* Navigation buttons */}
              {step < 4 && (
                <div className="flex items-center justify-between pt-4 border-t border-[#333537]">
                  <button
                    type="button"
                    disabled={step === 1}
                    onClick={() => setStep((prev) => (prev > 1 ? ((prev - 1) as 1 | 2 | 3) : prev))}
                    className={`px-4 py-2 text-xs font-label-tech uppercase cursor-pointer ${
                      step === 1 ? 'opacity-30 cursor-not-allowed text-[#8c947d]' : 'text-[#c2cab1] hover:text-white'
                    }`}
                  >
                    ← Previous
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep((prev) => ((prev + 1) as 2 | 3 | 4))}
                    className="px-6 py-2 rounded-full bg-[#b0f753] text-[#102000] font-label-caps text-xs font-semibold uppercase tracking-wider hover:opacity-95 transition-opacity cursor-pointer"
                  >
                    Continue to Step 0{step + 1} →
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
