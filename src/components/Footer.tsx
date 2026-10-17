import React from 'react';
import { FortrixLogo } from './FortrixLogo';

interface FooterProps {
  onNavigate: (view: string) => void;
  onOpenLetstalk: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLetstalk }) => {
  return (
    <footer className="w-full bg-[#0c0e10] border-t border-[#333537] mt-24">
      <div className="w-full max-w-[1680px] mx-auto px-6 md:px-12 lg:px-24 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-16 pb-16 border-b border-[#333537]/60">
          <div className="max-w-xl">
            <span className="font-label-tech text-xs uppercase text-[#96da38] tracking-wider block mb-4">
              // ARCHITECTURAL CORE
            </span>
            <div className="mb-4">
              <FortrixLogo size="lg" />
            </div>
            <p className="font-body-xl text-lg text-[#c2cab1] mt-4">
              Technology for what's next.
            </p>
            <div className="mt-6">
              <button
                onClick={onOpenLetstalk}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#b0f753] text-[#102000] font-label-caps text-xs font-semibold uppercase tracking-wider hover:opacity-95 transition-opacity cursor-pointer shadow-[0_0_24px_rgba(176,247,83,0.3)]"
              >
                <span>Start a Project</span>
                <span className="font-mono">→</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12 pt-4">
            <div className="flex flex-col gap-2.5">
              <span className="font-label-tech text-xs uppercase text-[#c2cab1] tracking-widest mb-1">
                Navigation
              </span>
              <button
                onClick={() => onNavigate('home')}
                className="font-body-sm text-xs text-[#c2cab1] hover:text-white transition-colors text-left cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="font-body-sm text-xs text-[#c2cab1] hover:text-white transition-colors text-left cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => onNavigate('work')}
                className="font-body-sm text-xs text-[#c2cab1] hover:text-white transition-colors text-left cursor-pointer"
              >
                Work
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="font-body-sm text-xs text-[#c2cab1] hover:text-white transition-colors text-left cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="font-body-sm text-xs text-[#c2cab1] hover:text-white transition-colors text-left cursor-pointer"
              >
                Contact
              </button>
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="font-label-tech text-xs uppercase text-[#c2cab1] tracking-widest mb-1">
                Social
              </span>
              <a
                href="https://www.linkedin.com/company/fortrix-infotech"
                target="_blank"
                rel="noreferrer"
                className="font-body-sm text-xs text-[#c2cab1] hover:text-[#b0f753] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/fortrixinfotech/"
                target="_blank"
                rel="noreferrer"
                className="font-body-sm text-xs text-[#c2cab1] hover:text-[#b0f753] transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://github.com/MikeXTech105"
                target="_blank"
                rel="noreferrer"
                className="font-body-sm text-xs text-[#c2cab1] hover:text-[#b0f753] transition-colors"
              >
                GitHub
              </a>
            </div>

            <div className="flex flex-col gap-2.5 col-span-2 sm:col-span-1">
              <span className="font-label-tech text-xs uppercase text-[#c2cab1] tracking-widest mb-1">
                Studio
              </span>
              <span className="font-body-sm text-xs text-[#c2cab1]">
                Digital Product & Systems
              </span>
              <span className="font-body-sm text-xs text-[#c2cab1]">
                Engineering Studio
              </span>
              <span className="font-body-sm text-xs text-[#8c947d] mt-2">
                Surat / Ahmedabad / Global
              </span>
              <a
                href="mailto:fortrixinfotech@gmail.com"
                className="font-label-tech text-xs text-[#b0f753] hover:underline mt-1 transition-colors block"
              >
                fortrixinfotech@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-label-tech text-xs text-[#c2cab1]">
            © 2026 Fortrix Infotech. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="font-label-tech text-xs text-[#c2cab1] hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="font-label-tech text-xs text-[#c2cab1] hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
