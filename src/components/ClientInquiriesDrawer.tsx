import React from 'react';
import { SavedInquiry } from './ProjectConfiguratorModal';

interface ClientInquiriesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  inquiries: SavedInquiry[];
  onNewProposal: () => void;
  onDeleteInquiry: (id: string) => void;
}

export const ClientInquiriesDrawer: React.FC<ClientInquiriesDrawerProps> = ({
  isOpen,
  onClose,
  inquiries,
  onNewProposal,
  onDeleteInquiry,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md h-full bg-[#121416] border-l border-[#333537] shadow-2xl flex flex-col justify-between overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-6 border-b border-[#333537] bg-[#1a1c1e] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <span className="material-symbols-outlined text-[#203700] text-[18px]">person</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-sm text-white font-semibold uppercase tracking-wider">
                Client Portal
              </h3>
              <p className="font-label-tech text-[10px] text-[#96da38]">
                {inquiries.length} Active {inquiries.length === 1 ? 'Engagement' : 'Engagements'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close portal drawer"
            className="w-8 h-8 rounded-full bg-[#282a2c] text-[#e2e2e5] hover:text-white flex items-center justify-center hover:bg-[#333537] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Content list */}
        <div className="p-6 flex-1 overflow-y-auto space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-label-tech text-xs uppercase text-[#c2cab1] tracking-wider">
              Saved Proposals & Inquiries
            </span>
            <button
              onClick={() => {
                onClose();
                onNewProposal();
              }}
              className="text-xs font-label-tech text-[#b0f753] hover:underline cursor-pointer"
            >
              + New Proposal
            </button>
          </div>

          {inquiries.length === 0 ? (
            <div className="bg-[#1a1c1e] p-6 rounded-lg border border-[#333537] text-center space-y-3">
              <span className="material-symbols-outlined text-4xl text-[#42474d]">
                inventory_2
              </span>
              <p className="font-body-sm text-xs text-[#c2cab1]">
                No project proposals generated yet. Configure a scope brief to receive a structured timeline and squad allocation.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onNewProposal();
                }}
                className="px-4 py-2 rounded-full bg-[#b0f753] text-[#102000] font-label-caps text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer"
              >
                Start a Project Brief →
              </button>
            </div>
          ) : (
            inquiries.map((inq) => (
              <div
                key={inq.id}
                className="bg-[#1a1c1e] p-4 rounded-lg border border-[#333537] space-y-3 relative group"
              >
                <div className="flex items-center justify-between pb-2 border-b border-[#333537]/60">
                  <div>
                    <span className="font-label-tech text-[10px] text-[#b0f753] font-bold block">
                      REF #{inq.id}
                    </span>
                    <span className="font-body-sm text-xs text-white font-medium">
                      {inq.company}
                    </span>
                  </div>
                  <button
                    onClick={() => onDeleteInquiry(inq.id)}
                    title="Remove inquiry"
                    className="text-[#8c947d] hover:text-[#ffb4ab] transition-colors p-1"
                  >
                    <span className="material-symbols-outlined text-[16px]">delete</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div>
                    <span className="text-[#8c947d] text-[10px] block">BUDGET</span>
                    <span className="text-white">{inq.budget}</span>
                  </div>
                  <div>
                    <span className="text-[#8c947d] text-[10px] block">TIMELINE</span>
                    <span className="text-white">{inq.timeline}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[#8c947d] text-[10px] font-mono block mb-1">SERVICES</span>
                  <div className="flex flex-wrap gap-1">
                    {inq.services.map((s, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-[#282a2c] text-[10px] font-mono text-[#e2e2e5]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-2.5 rounded bg-[#0c0e10] border border-[#333537]/50 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b0f753] animate-pulse" />
                    <span className="text-[#b0f753] text-[10px] uppercase">
                      Direct Founder Review
                    </span>
                  </div>
                  <span className="text-[#8c947d] text-[10px]">{inq.timestamp}</span>
                </div>
              </div>
            ))
          )}

          {/* Direct Founder Contact Card */}
          <div className="bg-[#1a1c1e] p-4 rounded-lg border border-[#333537] space-y-3">
            <span className="font-label-tech text-[10px] text-[#b0f753] uppercase block">
              // DIRECT FOUNDER ACCESS
            </span>
            <div className="text-xs text-[#c2cab1] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-white font-medium">Sahil Jayani</span>
                <span className="text-[#8c947d] text-[10px]">Founder & Product Architect</span>
              </div>
              <div className="flex items-center justify-between pt-1 border-t border-[#333537]/40">
                <span className="text-[#8c947d] text-xs">Direct Channel:</span>
                <a href="mailto:info@fortrixinfotech.in" className="text-[#b0f753] hover:underline font-mono">
                  info@fortrixinfotech.in
                </a>
              </div>
            </div>
            <div className="pt-2 border-t border-[#333537]/50 flex items-center justify-between text-[11px] font-mono text-[#8c947d]">
              <span>Response SLA:</span>
              <span className="text-[#e2e2e5] font-semibold">&lt; 12 Hours</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#333537] bg-[#1a1c1e]">
          <a
            href="mailto:info@fortrixinfotech.in"
            className="w-full py-2.5 rounded-full bg-[#b0f753] text-[#102000] font-label-caps text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
          >
            <span>Email Founder Directly</span>
            <span className="font-mono">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};
