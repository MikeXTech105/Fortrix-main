import React, { useState } from 'react';
import { TECH_STACK } from '../data/agencyData';

export const TechMarquee: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Stacks' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Data & Storage' },
    { id: 'cloud', label: 'Cloud & DevOps' },
    { id: 'ai', label: 'AI & Models' },
  ];

  const isHighlighted = (itemCategory: string) => {
    if (selectedCategory === 'all') return false;
    return itemCategory === selectedCategory;
  };

  return (
    <section className="w-full bg-[#0c0e10] py-16 overflow-hidden border-y border-[#333537]/50">
      <div className="max-w-[1680px] mx-auto px-6 md:px-12 lg:px-24 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-label-tech text-[11px] uppercase tracking-widest text-[#b0f753] block mb-1">
            // SYSTEM ARCHITECTURE
          </span>
          <h2 className="font-headline-md text-2xl text-white font-medium">
            Built with modern technology.
          </h2>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1 rounded-full text-xs font-label-tech uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#b0f753] text-[#102000] font-semibold'
                  : 'bg-[#1e2022] text-[#c2cab1] hover:text-white hover:bg-[#282a2c]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Scrolling Marquee Rows */}
      <div className="relative w-full flex overflow-x-hidden py-2 select-none group">
        <div className="animate-marquee flex gap-4">
          {TECH_STACK.map((tech, idx) => {
            const matchesCategory = isHighlighted(tech.category);
            const isDimmed = selectedCategory !== 'all' && !matchesCategory;

            return (
              <span
                key={`t1-${idx}`}
                className={`px-6 py-2.5 rounded-full font-label-tech text-xs uppercase tracking-wider transition-all duration-300 ${
                  matchesCategory
                    ? 'bg-[#b0f753] text-[#102000] font-bold shadow-[0_0_16px_rgba(176,247,83,0.4)] scale-105'
                    : isDimmed
                    ? 'bg-[#1a1c1e] text-[#42474d] opacity-40'
                    : tech.highlight
                    ? 'bg-[#1e2022] text-[#b0f753] border border-[#b0f753]/30 font-semibold'
                    : 'bg-[#1e2022] text-[#e2e2e5] hover:bg-[#282a2c]'
                }`}
              >
                {tech.name}
              </span>
            );
          })}
        </div>

        {/* Duplicate clone for seamless infinite cycle */}
        <div aria-hidden="true" className="animate-marquee flex gap-4">
          {TECH_STACK.map((tech, idx) => {
            const matchesCategory = isHighlighted(tech.category);
            const isDimmed = selectedCategory !== 'all' && !matchesCategory;

            return (
              <span
                key={`t2-${idx}`}
                className={`px-6 py-2.5 rounded-full font-label-tech text-xs uppercase tracking-wider transition-all duration-300 ${
                  matchesCategory
                    ? 'bg-[#b0f753] text-[#102000] font-bold shadow-[0_0_16px_rgba(176,247,83,0.4)] scale-105'
                    : isDimmed
                    ? 'bg-[#1a1c1e] text-[#42474d] opacity-40'
                    : tech.highlight
                    ? 'bg-[#1e2022] text-[#b0f753] border border-[#b0f753]/30 font-semibold'
                    : 'bg-[#1e2022] text-[#e2e2e5] hover:bg-[#282a2c]'
                }`}
              >
                {tech.name}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};
