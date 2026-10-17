import React, { useState } from 'react';
import { SavedInquiry } from '../components/ProjectConfiguratorModal';

interface ContactScreenProps {
  onSaveInquiry: (inquiry: SavedInquiry) => void;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({ onSaveInquiry }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [budget, setBudget] = useState('$30k - $60k');
  const [timeline, setTimeline] = useState('4-8 weeks');
  const [message, setMessage] = useState('');
  const [selectedService, setSelectedService] = useState('Web Development');
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const services = [
    'Web Development',
    'Mobile Development',
    'Custom Software & ERP',
    'AI & Automation',
    'UI/UX Design',
    'Cloud & DevOps',
  ];

  const faqs = [
    {
      q: 'How quickly can we kick off a new engagement?',
      a: 'We maintain disciplined capacity buffers to ensure new sprint cycles can kick off within 7 to 10 business days following technical discovery and scope definition.',
    },
    {
      q: 'Do we retain 100% ownership of our intellectual property?',
      a: 'Yes, absolutely. All software, architectural designs, code repositories, database schemas, and documentation produced belong 100% to your company from day one. Zero vendor lock-in.',
    },
    {
      q: 'What does "Direct Founder Steering" mean in practice?',
      a: 'Founder Sahil Jayani is personally hands-on in technical whiteboarding, product architecture, code reviews, and sprint planning.',
    },
    {
      q: 'Do you offer post-launch maintenance and 24/7 SLAs?',
      a: 'Yes. We offer continuous velocity retainers, high-availability monitoring, zero-downtime database upgrades, and SLA-backed engineering coverage as your user base scales.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    const newInq: SavedInquiry = {
      id: `FTX-${Math.floor(1000 + Math.random() * 9000)}`,
      timestamp: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      name,
      email,
      company: company || 'Venture Partner',
      services: [selectedService],
      timeline,
      budget,
      description: message || 'Inquiry initiated via direct contact portal.',
      estimatedSprints: timeline.includes('4-8') ? 4 : 6,
      kickoffWindow: 'Direct Founder Review within 24 Hours',
    };

    onSaveInquiry(newInq);
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-[1680px] mx-auto px-6 md:px-12 lg:px-24 py-12 text-[#e2e2e5]">
      {/* Header */}
      <div className="max-w-4xl mb-16">
        <span className="font-label-tech text-xs uppercase tracking-widest text-[#b0f753] block mb-2">
          // INITIATE ENGAGEMENT
        </span>
        <h1 className="font-display-hero-mobile md:font-headline-xl text-3xl md:text-5xl lg:text-6xl text-white font-medium tracking-tight mb-4">
          Have an idea?<br />
          Let's build it.
        </h1>
        <p className="font-body-xl text-lg text-[#c2cab1] leading-relaxed">
          Tell us what you're trying to build. We'll help turn the idea into a real digital product with zero fluff and direct senior execution.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
        {/* Left Column: Direct Info & Availability */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-[#1a1c1e] p-8 rounded-xl border border-[#333537] space-y-6">
            <div className="flex items-center gap-2 font-label-tech text-xs uppercase text-[#b0f753]">
              <span className="w-2 h-2 rounded-full bg-[#b0f753] animate-pulse" />
              <span>Available for Q2 / Q3 2026</span>
            </div>

            <h3 className="font-headline-sm text-xl text-white font-semibold">
              Direct Contact Channels
            </h3>

            <div className="space-y-4 text-sm font-mono">
              <div>
                <span className="text-[#8c947d] text-xs block uppercase mb-1">Official Studio Email</span>
                <a
                  href="mailto:info@fortrixinfotech.in"
                  className="text-white hover:text-[#b0f753] text-base font-semibold transition-colors flex items-center gap-2 group"
                >
                  <span className="material-symbols-outlined text-sm text-[#b0f753]">mail</span>
                  <span>info@fortrixinfotech.in</span>
                </a>
              </div>

              <div className="pt-2 border-t border-[#333537]/50">
                <span className="text-[#8c947d] text-xs block uppercase mb-1">Leadership & Architecture</span>
                <span className="text-white font-medium block">Sahil Jayani</span>
                <span className="text-xs text-[#8c947d]">Founder & Product Architect</span>
              </div>

              <div className="pt-2 border-t border-[#333537]/50">
                <span className="text-[#8c947d] text-xs block uppercase mb-2">Social & Repositories</span>
                <div className="flex flex-wrap gap-3 font-label-tech text-xs">
                  <a
                    href="https://www.linkedin.com/company/fortrix-infotech"
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 rounded bg-[#0c0e10] border border-[#333537] text-[#c2cab1] hover:text-[#b0f753] hover:border-[#b0f753] transition-colors"
                  >
                    LinkedIn ↗
                  </a>
                  <a
                    href="https://www.instagram.com/fortrixinfotech/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 rounded bg-[#0c0e10] border border-[#333537] text-[#c2cab1] hover:text-[#b0f753] hover:border-[#b0f753] transition-colors"
                  >
                    Instagram ↗
                  </a>
                  <a
                    href="https://github.com/MikeXTech105"
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 rounded bg-[#0c0e10] border border-[#333537] text-[#c2cab1] hover:text-[#b0f753] hover:border-[#b0f753] transition-colors"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-[#333537]/50 flex items-center justify-between">
                <span className="text-[#8c947d] text-xs uppercase">Response Commitment</span>
                <span className="text-[#b0f753] font-bold">&lt; 24 Business Hours</span>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1c1e] p-8 rounded-xl border border-[#333537] space-y-3">
            <span className="font-label-tech text-xs uppercase text-[#b0f753] tracking-wider block">
              // LOCATION & TIMEZONES
            </span>
            <div className="text-sm text-[#c2cab1] space-y-1">
              <p className="text-white font-medium">Fortrix Infotech</p>
              <p>Operating Globally across UTC, EST, and IST timezone overlays.</p>
              <p className="text-xs text-[#8c947d] pt-2">
                Daily asynchronous standby & live sprint rituals tailored to your headquarters.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Discovery Form */}
        <div className="lg:col-span-7 bg-[#1a1c1e] p-8 md:p-10 rounded-xl border border-[#333537]">
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-[#b0f753]/10 border border-[#b0f753] flex items-center justify-center mx-auto text-[#b0f753]">
                <span className="material-symbols-outlined text-3xl">check_circle</span>
              </div>
              <h3 className="font-headline-lg text-2xl text-white font-semibold">
                Inquiry Received by Founder
              </h3>
              <p className="font-body-md text-sm text-[#c2cab1] max-w-md mx-auto leading-relaxed">
                Thank you, {name}. Founder Sahil Jayani has received your project details and will review technical requirements within 24 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 rounded-full bg-[#282a2c] text-[#e2e2e5] hover:text-white font-label-caps text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <span className="font-label-tech text-xs uppercase text-[#b0f753] tracking-widest block mb-1">
                  DISCOVERY FORM
                </span>
                <h3 className="font-headline-sm text-xl text-white font-semibold">
                  Start a project conversation
                </h3>
              </div>

              <div>
                <label className="font-label-tech text-[10px] text-[#c2cab1] uppercase block mb-2">
                  Primary Capability Needed:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {services.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSelectedService(s)}
                      className={`p-2.5 rounded text-left text-xs font-mono border transition-all cursor-pointer ${
                        selectedService === s
                          ? 'bg-[#282a2c] border-[#b0f753] text-white font-bold'
                          : 'bg-[#0c0e10] border-[#333537] text-[#8c947d] hover:border-[#8c947d]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-label-tech text-[10px] text-[#c2cab1] uppercase block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jordan Vance"
                    className="w-full px-3.5 py-2.5 rounded bg-[#0c0e10] border border-[#333537] text-xs font-mono text-white focus:border-[#b0f753] outline-none"
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
                    placeholder="jordan@company.com"
                    className="w-full px-3.5 py-2.5 rounded bg-[#0c0e10] border border-[#333537] text-xs font-mono text-white focus:border-[#b0f753] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="font-label-tech text-[10px] text-[#c2cab1] uppercase block mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acro Logic"
                    className="w-full px-3.5 py-2.5 rounded bg-[#0c0e10] border border-[#333537] text-xs font-mono text-white focus:border-[#b0f753] outline-none"
                  />
                </div>

                <div>
                  <label className="font-label-tech text-[10px] text-[#c2cab1] uppercase block mb-1">
                    Budget Tier
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-3 py-2.5 rounded bg-[#0c0e10] border border-[#333537] text-xs font-mono text-white focus:border-[#b0f753] outline-none"
                  >
                    <option value="$15k - $30k">$15,000 – $30,000</option>
                    <option value="$30k - $60k">$30,000 – $60,000</option>
                    <option value="$60k - $120k">$60,000 – $120,000</option>
                    <option value="$120k+">$120,000+</option>
                  </select>
                </div>

                <div>
                  <label className="font-label-tech text-[10px] text-[#c2cab1] uppercase block mb-1">
                    Timeline Horizon
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-3 py-2.5 rounded bg-[#0c0e10] border border-[#333537] text-xs font-mono text-white focus:border-[#b0f753] outline-none"
                  >
                    <option value="Rapid < 4 weeks">Rapid (&lt; 4 weeks)</option>
                    <option value="4-8 weeks">4-8 weeks (MVP)</option>
                    <option value="3-6 months">3-6 months (Platform)</option>
                    <option value="Ongoing Retainer">Ongoing Retainer</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-label-tech text-[10px] text-[#c2cab1] uppercase block mb-1">
                  Project Description & Technical Goals
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what you are building, key technical challenges, or existing codebases..."
                  className="w-full px-3.5 py-2.5 rounded bg-[#0c0e10] border border-[#333537] text-xs font-mono text-white focus:border-[#b0f753] outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#b0f753] text-[#102000] font-label-caps text-xs font-semibold uppercase tracking-wider hover:opacity-95 transition-opacity cursor-pointer shadow-[0_0_24px_rgba(176,247,83,0.3)]"
              >
                Dispatch Project Brief to Founders →
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="text-center mb-10">
          <span className="font-label-tech text-xs uppercase tracking-widest text-[#b0f753] block mb-2">
            // FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-headline-lg text-2xl md:text-3xl text-white font-medium">
            Common questions regarding our engineering partnership.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-[#1a1c1e] rounded-lg border border-[#333537] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#282a2c]/50 transition-colors"
                >
                  <span className="font-body-md text-sm md:text-base font-medium text-white">
                    {faq.q}
                  </span>
                  <span className="material-symbols-outlined text-[#b0f753] transition-transform duration-200">
                    {isOpen ? 'remove' : 'add'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs md:text-sm text-[#c2cab1] leading-relaxed border-t border-[#333537]/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
