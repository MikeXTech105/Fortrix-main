import React, { useState } from 'react';
import { FortrixLogo } from './FortrixLogo';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenLetstalk: () => void;
  onOpenPortal: () => void;
  savedInquiriesCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onOpenLetstalk,
  onOpenPortal,
  savedInquiriesCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-[#0c0e10]/80 backdrop-blur-md border-b border-[#333537]">
      <div className="h-20 w-full max-w-[1680px] mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between gap-6">
        {/* Brand Zone */}
        <div 
          onClick={() => handleLinkClick('home')}
          className="flex items-center cursor-pointer group transition-transform duration-200 hover:scale-[1.02]"
          title="Fortrix Infotech Home"
        >
          <FortrixLogo size="md" />
        </div>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = currentView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-[12px] uppercase tracking-wider font-semibold transition-all relative py-1 ${
                  isActive
                    ? 'text-white'
                    : 'text-[#c2cab1] hover:text-[#e2e2e5]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#b0f753] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Zone */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenLetstalk}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#b0f753] text-[#102000] font-label-caps text-[12px] font-semibold uppercase tracking-wider transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(176,247,83,0.35)] cursor-pointer"
          >
            <span>Let's Talk</span>
            <span className="font-mono text-xs">→</span>
          </button>

          {/* Client portal / Inquiries drawer icon */}
          <button
            onClick={onOpenPortal}
            title="Client Portal & Inquiries"
            className="relative w-8 h-8 rounded-full bg-white flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[#203700] text-[18px]">
              person
            </span>
            {savedInquiriesCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#b0f753] text-[#102000] font-mono text-[9px] font-bold flex items-center justify-center border border-[#0c0e10]">
                {savedInquiriesCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="lg:hidden flex items-center justify-center text-[#e2e2e5] hover:text-white transition-colors cursor-pointer p-1"
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121416] border-b border-[#333537] px-6 py-5 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left text-sm uppercase tracking-wider font-semibold py-2 px-3 rounded-lg transition-colors ${
                  currentView === link.id
                    ? 'bg-[#1e2022] text-[#b0f753]'
                    : 'text-[#c2cab1] hover:text-white hover:bg-[#1a1c1e]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#333537] flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenLetstalk();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#b0f753] text-[#102000] font-label-caps text-xs font-semibold uppercase tracking-wider"
            >
              <span>Start a Project</span>
              <span className="font-mono">→</span>
            </button>
            <button
              onClick={() => {
                onOpenPortal();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#282a2c] text-[#e2e2e5] font-label-caps text-xs tracking-wider"
            >
              <span>Client Portal ({savedInquiriesCount} Inquiries)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
