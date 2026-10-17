import React from 'react';
import { HeroVisual } from '../components/HeroVisual';
import { TechMarquee } from '../components/TechMarquee';
import { FortrixLogo } from '../components/FortrixLogo';
import {
  AGENCY_PROJECTS,
  AGENCY_SERVICES,
  AGENCY_FOUNDERS,
  PROCESS_STAGES,
  Project,
  Service,
} from '../data/agencyData';

interface HomeScreenProps {
  onOpenLetstalk: () => void;
  onSelectProject: (project: Project) => void;
  onSelectService: (service: Service) => void;
  onNavigate: (view: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onOpenLetstalk,
  onSelectProject,
  onSelectService,
  onNavigate,
}) => {
  return (
    <div className="flex flex-col w-full text-[#e2e2e5] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full max-w-[1680px] mx-auto px-6 md:px-12 lg:px-24 pt-10 pb-24 lg:min-h-[88vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#282a2c]/80 backdrop-blur-md mb-6 shadow-sm border border-[#333537]/50">
              <FortrixLogo iconOnly size="sm" className="h-4 w-4" />
              <span className="font-label-tech text-[11px] uppercase tracking-widest text-[#e2e2e5] font-medium">
                FORTRIX INFOTECH — DIGITAL PRODUCT STUDIO
              </span>
            </div>

            {/* Dominant Headline */}
            <h1 className="font-display-hero-mobile md:font-headline-xl lg:font-display-hero text-[#ffffff] tracking-tighter leading-[0.96] max-w-3xl mb-6">
              We build digital products that move businesses forward.
            </h1>

            {/* Supporting Text */}
            <p className="font-body-xl text-lg md:text-xl text-[#c2cab1] max-w-xl leading-relaxed mb-10">
              Fortrix Infotech partners with startups and businesses to design, build and scale modern digital products, software platforms and AI-powered solutions.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenLetstalk}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#b0f753] text-[#102000] font-label-caps text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(176,247,83,0.35)] cursor-pointer"
              >
                <span>Start a Project</span>
                <span className="font-label-tech text-xs transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('work');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    onNavigate('work');
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#282a2c]/70 backdrop-blur-md text-[#e2e2e5] font-label-caps text-xs uppercase tracking-wider transition-all duration-300 hover:bg-[#333537] hover:text-white cursor-pointer"
              >
                <span>View Our Work</span>
                <span className="font-label-tech text-xs">→</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Digital Constellation & Terminal Node Visual */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex items-center justify-center">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* TRUST / INTRODUCTION STATEMENT */}
      <section className="w-full bg-[#1a1c1e] py-20 my-16 border-y border-[#333537]/50">
        <div className="max-w-[1680px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
            <div className="lg:col-span-3">
              <span className="font-label-tech text-xs uppercase text-[#b0f753] tracking-widest block mb-2">
                // 001. MANIFESTO
              </span>
              <span className="font-label-caps text-xs uppercase text-[#c2cab1]">
                Core Philosophy
              </span>
            </div>
            <div className="lg:col-span-9 flex flex-col gap-6">
              <h2 className="font-headline-lg-mobile md:font-headline-lg lg:font-headline-xl text-3xl md:text-5xl lg:text-6xl text-white font-medium tracking-tight max-w-4xl leading-tight">
                From idea to software, we build what comes next.
              </h2>
              <p className="font-body-xl text-lg text-[#c2cab1] max-w-3xl leading-relaxed">
                Whether you're launching a new product, modernizing an existing system or automating your business, we turn complex ideas into reliable digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT FORTRIX */}
      <section className="w-full max-w-[1680px] mx-auto px-6 md:px-12 lg:px-24 py-16" id="about">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Editorial Statement */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <span className="font-label-tech text-xs uppercase tracking-widest text-[#b0f753] block mb-3">
                // ABOUT FORTRIX
              </span>
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-3xl md:text-4xl text-white font-medium tracking-tight mb-4">
                We are Fortrix.
              </h2>
              <p className="font-headline-md text-xl md:text-2xl text-[#e2e2e5] font-normal leading-relaxed mb-6">
                A technology studio built by people who love solving difficult problems.
              </p>
              <p className="font-body-md text-base text-[#c2cab1] leading-relaxed max-w-xl">
                We operate at the convergence of product thinking, high-resiliency engineering, minimalist design systems, robotic process automation, generative AI, and cloud-native architectures. No bloated overhead—just direct senior execution.
              </p>
            </div>
            <div className="mt-16 pt-6 flex items-center gap-12 border-t border-[#333537]/50">
              <div className="flex flex-col">
                <span className="font-display-hero-mobile text-4xl text-white font-semibold leading-none">
                  100%
                </span>
                <span className="font-label-tech text-xs text-[#c2cab1] uppercase mt-2">
                  Direct Engineering
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display-hero-mobile text-4xl text-[#b0f753] font-semibold leading-none">
                  0%
                </span>
                <span className="font-label-tech text-xs text-[#c2cab1] uppercase mt-2">
                  Vendor Bloat
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Bento Cards & Authentic Metrics */}
          <div className="lg:col-span-5 flex flex-col gap-4 mt-8 lg:mt-0">
            {/* Metric Card 1: Founders */}
            <div className="bg-[#282a2c] p-6 md:p-8 rounded-lg flex flex-col justify-between transition-transform duration-300 hover:scale-[1.01] border border-[#333537]/60">
              <div className="flex items-center justify-between mb-4">
                <span className="font-label-tech text-xs uppercase text-[#b0f753] tracking-wider">
                  01 // LEADERSHIP DIRECT
                </span>
                <span className="material-symbols-outlined text-[#c2cab1]">group</span>
              </div>
              <div>
                <div className="font-headline-lg text-2xl text-white font-semibold mb-2">
                  Founder Led
                </div>
                <p className="font-body-sm text-xs md:text-sm text-[#c2cab1] leading-relaxed">
                  Founded and directly led by <strong className="text-white">Sahil Jayani</strong>. Every engagement is steered directly by senior architecture and product hands.
                </p>
              </div>
            </div>

            {/* Metric Card 2: Multiple Technologies */}
            <div className="bg-[#282a2c] p-6 md:p-8 rounded-lg flex flex-col justify-between transition-transform duration-300 hover:scale-[1.01] border border-[#333537]/60">
              <div className="flex items-center justify-between mb-4">
                <span className="font-label-tech text-xs uppercase text-[#b0f753] tracking-wider">
                  02 // STACK VERSATILITY
                </span>
                <span className="material-symbols-outlined text-[#c2cab1]">memory</span>
              </div>
              <div>
                <div className="font-headline-lg text-2xl text-white font-semibold mb-2">
                  Multi-Stack Native
                </div>
                <p className="font-body-sm text-xs md:text-sm text-[#c2cab1] leading-relaxed">
                  Fluent across contemporary polyglot ecosystems: cloud scale runtimes, embedded LLM agents, dynamic reactive frontends, and hardened microservices.
                </p>
              </div>
            </div>

            {/* Metric Card 3: End-to-End Delivery */}
            <div className="bg-[#282a2c] p-6 md:p-8 rounded-lg flex flex-col justify-between transition-transform duration-300 hover:scale-[1.01] border border-[#333537]/60">
              <div className="flex items-center justify-between mb-4">
                <span className="font-label-tech text-xs uppercase text-[#b0f753] tracking-wider">
                  03 // LIFECYCLE OWNERSHIP
                </span>
                <span className="material-symbols-outlined text-[#c2cab1]">deployed_code</span>
              </div>
              <div>
                <div className="font-headline-lg text-2xl text-white font-semibold mb-2">
                  End-to-End Delivery
                </div>
                <p className="font-body-sm text-xs md:text-sm text-[#c2cab1] leading-relaxed">
                  From whiteboard blueprint and wireframing through CI/CD production rollout and continuous scale optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES ('What we build.') */}
      <section className="w-full max-w-[1680px] mx-auto px-6 md:px-12 lg:px-24 py-20" id="services">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#333537]/50">
          <div>
            <span className="font-label-tech text-xs uppercase tracking-widest text-[#b0f753] block mb-2">
              // CAPABILITIES
            </span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg lg:font-headline-xl text-3xl md:text-5xl text-white font-medium tracking-tight">
              What we build.
            </h2>
          </div>
          <p className="font-body-md text-sm md:text-base text-[#c2cab1] max-w-sm mt-3 md:mt-0">
            Engineered systems designed to outlast short-lived tech cycles. Click any capability to view deliverables.
          </p>
        </div>

        {/* 6 Editorial Horizontal Service Rows */}
        <div className="flex flex-col gap-2">
          {AGENCY_SERVICES.map((srv) => (
            <div
              key={srv.id}
              onClick={() => onSelectService(srv)}
              className="group bg-[#1a1c1e] hover:bg-[#282a2c] p-6 lg:p-8 rounded-lg transition-all duration-300 cursor-pointer border border-[#333537]/40 hover:border-[#b0f753]/40"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-1 font-label-tech text-xs text-[#c2cab1] group-hover:text-[#b0f753] transition-colors">
                  {srv.number}
                </div>
                <div className="md:col-span-4 font-headline-md text-xl md:text-2xl text-[#e2e2e5] group-hover:text-white font-medium transition-colors">
                  {srv.title}
                </div>
                <div className="md:col-span-6 font-body-md text-sm text-[#c2cab1] group-hover:text-white transition-colors leading-relaxed">
                  {srv.shortDesc}
                </div>
                <div className="md:col-span-1 flex justify-end">
                  <span className="material-symbols-outlined text-[#c2cab1] group-hover:text-[#b0f753] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                    north_east
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGY SECTION (Continuous Marquee) */}
      <TechMarquee />

      {/* SELECTED WORK (Immersive Portfolio) */}
      <section className="w-full max-w-[1680px] mx-auto px-6 md:px-12 lg:px-24 py-24" id="work">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#333537]/50">
          <div>
            <span className="font-label-tech text-xs uppercase tracking-widest text-[#b0f753] block mb-2">
              // PROVEN EXECUTION
            </span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg lg:font-headline-xl text-3xl md:text-5xl text-white font-medium tracking-tight">
              Selected work.
            </h2>
          </div>
          <p className="font-body-lg text-base text-[#c2cab1] max-w-md mt-3 md:mt-0">
            Real products. Real problems. Thoughtful engineering. Click inspect architecture for interactive telemetry.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {AGENCY_PROJECTS.map((proj, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={proj.id}
                className="group bg-[#1a1c1e] rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all duration-500 hover:shadow-2xl border border-[#333537]/60 hover:border-[#b0f753]/30"
              >
                {/* Media Column */}
                <div
                  className={`lg:col-span-7 overflow-hidden relative min-h-[340px] lg:min-h-[480px] bg-[#1e2022] ${
                    isEven ? 'order-1 lg:order-2' : ''
                  }`}
                >
                  <img
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    src={proj.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1e] via-transparent to-transparent opacity-60" />
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-5 p-6 md:p-8 lg:p-10 flex flex-col justify-between ${
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

                    <h3 className="font-headline-lg text-2xl md:text-3xl text-white font-semibold tracking-tight mb-3">
                      {proj.title}
                    </h3>

                    <p className="font-body-md text-sm md:text-base text-[#c2cab1] leading-relaxed mb-6">
                      {proj.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
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

                  <div className="pt-4 border-t border-[#333537]/50">
                    <button
                      onClick={() => onSelectProject(proj)}
                      className="inline-flex items-center gap-2 font-label-caps text-xs uppercase tracking-wider text-white font-semibold group-hover:text-[#b0f753] transition-colors cursor-pointer"
                    >
                      <span>Inspect Architecture</span>
                      <span className="font-label-tech text-xs transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHY FORTRIX (Principles) */}
      <section className="w-full bg-[#1a1c1e] py-20 my-16 border-y border-[#333537]/50">
        <div className="max-w-[1680px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="mb-16">
            <span className="font-label-tech text-xs uppercase tracking-widest text-[#b0f753] block mb-2">
              // THE DIFFERENCE
            </span>
            <p className="font-label-caps text-xs uppercase text-[#c2cab1] tracking-wider">
              Not just a software vendor.
            </p>
            <h2 className="font-headline-lg-mobile md:font-headline-lg lg:font-headline-xl text-3xl md:text-5xl text-white font-medium tracking-tight mt-2">
              Your technology partner.
            </h2>
          </div>

          {/* 4 Horizontal Principles with generous whitespace */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Principle 01 */}
            <div className="flex flex-col">
              <span className="font-display-hero-mobile text-4xl text-[#333537] font-bold leading-none mb-4 select-none">
                01
              </span>
              <h3 className="font-headline-sm text-lg text-white font-semibold uppercase tracking-wider mb-2">
                BUSINESS FIRST
              </h3>
              <p className="font-body-md text-sm text-[#c2cab1] leading-relaxed">
                Understand the problem before writing the code. We interrogate commercial assumptions to build what actually creates ROI.
              </p>
            </div>

            {/* Principle 02 */}
            <div className="flex flex-col">
              <span className="font-display-hero-mobile text-4xl text-[#333537] font-bold leading-none mb-4 select-none">
                02
              </span>
              <h3 className="font-headline-sm text-lg text-white font-semibold uppercase tracking-wider mb-2">
                ENGINEERED TO SCALE
              </h3>
              <p className="font-body-md text-sm text-[#c2cab1] leading-relaxed">
                Build foundations that can evolve with the business. Modular domains, clean APIs, and low technical debt from commit one.
              </p>
            </div>

            {/* Principle 03 */}
            <div className="flex flex-col">
              <span className="font-display-hero-mobile text-4xl text-[#333537] font-bold leading-none mb-4 select-none">
                03
              </span>
              <h3 className="font-headline-sm text-lg text-white font-semibold uppercase tracking-wider mb-2">
                AI-NATIVE
              </h3>
              <p className="font-body-md text-sm text-[#c2cab1] leading-relaxed">
                Use modern AI capabilities where they create real value. Practical, secure intelligence integrated natively into real operations.
              </p>
            </div>

            {/* Principle 04 */}
            <div className="flex flex-col">
              <span className="font-display-hero-mobile text-4xl text-[#333537] font-bold leading-none mb-4 select-none">
                04
              </span>
              <h3 className="font-headline-sm text-lg text-white font-semibold uppercase tracking-wider mb-2">
                LONG-TERM THINKING
              </h3>
              <p className="font-body-md text-sm text-[#c2cab1] leading-relaxed">
                Build products that remain maintainable after launch. Clean documentation, readable structure, and zero lock-in tricks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS ('From idea to impact.') */}
      <section className="w-full max-w-[1680px] mx-auto px-6 md:px-12 lg:px-24 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#333537]/50">
          <div>
            <span className="font-label-tech text-xs uppercase tracking-widest text-[#b0f753] block mb-2">
              // EXECUTION CADENCE
            </span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg lg:font-headline-xl text-3xl md:text-5xl text-white font-medium tracking-tight">
              From idea to impact.
            </h2>
          </div>
          <p className="font-body-md text-sm md:text-base text-[#c2cab1] max-w-sm mt-3 md:mt-0">
            A structured, rapid delivery cycle engineered to eliminate friction.
          </p>
        </div>

        {/* 6-Stage Structured Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STAGES.map((stg) => (
            <div
              key={stg.number}
              className="bg-[#1a1c1e] p-6 md:p-8 rounded-lg flex flex-col justify-between h-full border border-[#333537]/50 hover:border-[#b0f753]/30 transition-colors"
            >
              <div>
                <span className="font-label-tech text-xs text-[#b0f753] uppercase block mb-3">
                  {stg.number} // {stg.phase}
                </span>
                <h3 className="font-headline-md text-xl text-white font-semibold mb-2">
                  {stg.title}
                </h3>
                <p className="font-body-md text-sm text-[#c2cab1] leading-relaxed">
                  {stg.description}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#333537]/40 flex items-center justify-between">
                <span className="font-label-tech text-[11px] text-[#c2cab1] uppercase">
                  {stg.deliverable}
                </span>
                <span className="font-label-tech text-[10px] text-[#96da38] font-bold">
                  {stg.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDERS ('The people behind Fortrix.') */}
      <section className="w-full max-w-[1680px] mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="mb-12 pb-4 border-b border-[#333537]/50">
          <span className="font-label-tech text-xs uppercase tracking-widest text-[#b0f753] block mb-2">
            // DIRECT INVOLVEMENT
          </span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg lg:font-headline-xl text-3xl md:text-5xl text-white font-medium tracking-tight">
            The people behind Fortrix.
          </h2>
          <p className="font-body-lg text-base text-[#c2cab1] max-w-2xl mt-3">
            Hands-on engineering with zero middlemen. Every partner works directly with founder Sahil Jayani.
          </p>
        </div>

        <div className="max-w-3xl">
          {AGENCY_FOUNDERS.map((fnd) => (
            <div
              key={fnd.name}
              className="bg-[#1a1c1e] p-6 md:p-8 rounded-xl flex flex-col sm:flex-row gap-6 items-start border border-[#333537]/60"
            >
              <div className="w-20 h-20 rounded-lg bg-[#282a2c] flex items-center justify-center shrink-0 border border-[#333537]">
                <span className="font-headline-lg text-2xl font-bold text-white tracking-tighter">
                  {fnd.initials}
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-headline-md text-xl text-white font-semibold">
                    {fnd.name}
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-[#282a2c] font-label-tech text-[10px] text-[#b0f753]">
                    {fnd.role}
                  </span>
                </div>
                <span className="font-label-tech text-xs text-[#c2cab1] uppercase mb-3">
                  {fnd.title}
                </span>
                <p className="font-body-md text-sm text-[#c2cab1] leading-relaxed mb-4">
                  {fnd.bio}
                </p>
                <div className="flex items-center gap-4">
                  <a
                    className="font-label-tech text-xs uppercase text-[#e2e2e5] hover:text-[#b0f753] transition-colors inline-flex items-center gap-1"
                    href={fnd.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>LinkedIn</span>
                    <span>→</span>
                  </a>
                  {fnd.github && (
                    <a
                      className="font-label-tech text-xs uppercase text-[#e2e2e5] hover:text-[#b0f753] transition-colors inline-flex items-center gap-1"
                      href={fnd.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>GitHub</span>
                      <span>→</span>
                    </a>
                  )}
                  <a
                    className="font-label-tech text-xs uppercase text-[#e2e2e5] hover:text-[#b0f753] transition-colors inline-flex items-center gap-1"
                    href={`mailto:${fnd.email}`}
                  >
                    <span>Direct Email</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DRAMATIC CALL TO ACTION */}
      <section className="w-full bg-[#1a1c1e] py-20 my-16 relative overflow-hidden border-y border-[#333537]/50" id="contact">
        <div className="max-w-[1680px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8 flex flex-col items-start">
              <span className="font-label-tech text-xs uppercase tracking-widest text-[#b0f753] block mb-2">
                // READY TO SHIP
              </span>
              <h2 className="font-display-hero-mobile md:font-headline-xl lg:font-display-hero text-4xl md:text-6xl lg:text-7xl text-white font-semibold tracking-tighter leading-none mb-4">
                Have an idea?<br />
                Let's build it.
              </h2>
              <p className="font-body-xl text-lg text-[#c2cab1] max-w-xl leading-relaxed mb-8">
                Tell us what you're trying to build. We'll help turn the idea into a real digital product.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <button
                  onClick={onOpenLetstalk}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#b0f753] text-[#102000] font-label-caps text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_32px_rgba(176,247,83,0.4)] cursor-pointer"
                >
                  <span>Start a Conversation</span>
                  <span className="font-label-tech text-xs transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
                <a
                  className="font-label-tech text-sm text-[#e2e2e5] hover:text-[#b0f753] tracking-wider transition-colors underline underline-offset-8 decoration-[#333537]"
                  href="mailto:fortrixinfotech@gmail.com"
                >
                  fortrixinfotech@gmail.com
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 mt-8 lg:mt-0">
              <div className="bg-[#1e2022] p-6 md:p-8 rounded-xl shadow-xl flex flex-col gap-4 border border-[#333537]">
                <div className="flex items-center gap-2 font-label-tech text-xs uppercase text-[#b0f753]">
                  <span className="w-2 h-2 rounded-full bg-[#b0f753] animate-pulse" />
                  <span>Available for Q2 / Q3 2026</span>
                </div>
                <div className="font-headline-sm text-lg text-white font-medium">
                  Sprint Engagements
                </div>
                <p className="font-body-sm text-xs text-[#c2cab1] leading-relaxed">
                  We take on a limited number of high-impact engagements per quarter to ensure 100% direct founder immersion and zero quality drop.
                </p>
                <div className="pt-2 flex items-center justify-between font-label-tech text-xs text-[#c2cab1] border-t border-[#333537]/50">
                  <span>Avg. Project Kickoff</span>
                  <span className="text-white font-semibold">&lt; 10 Days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
