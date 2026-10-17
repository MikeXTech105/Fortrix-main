import React, { useState, useEffect } from 'react';

export const HeroVisual: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'live' | 'spike' | 'edge'>('live');
  const [latency, setLatency] = useState(14.2);
  const [throughput, setThroughput] = useState(4.8);
  const [region, setRegion] = useState('Multi-Region');
  const [pingPulse, setPingPulse] = useState(false);

  // Dynamic subtle metrics simulation
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeMode === 'live') {
        setLatency((prev) => +(13.8 + Math.random() * 0.9).toFixed(1));
        setThroughput((prev) => +(4.7 + Math.random() * 0.3).toFixed(2));
      } else if (activeMode === 'spike') {
        setLatency((prev) => +(18.5 + Math.random() * 2.1).toFixed(1));
        setThroughput((prev) => +(12.4 + Math.random() * 1.5).toFixed(2));
      } else {
        setLatency((prev) => +(3.2 + Math.random() * 0.5).toFixed(1));
        setThroughput((prev) => +(8.2 + Math.random() * 0.4).toFixed(2));
      }
    }, 2400);

    return () => clearInterval(interval);
  }, [activeMode]);

  const handleTriggerPing = () => {
    setPingPulse(true);
    setTimeout(() => setPingPulse(false), 900);
  };

  const handleCycleMode = () => {
    handleTriggerPing();
    if (activeMode === 'live') {
      setActiveMode('spike');
      setRegion('Global Surge');
    } else if (activeMode === 'spike') {
      setActiveMode('edge');
      setRegion('Cloudflare Edge');
    } else {
      setActiveMode('live');
      setRegion('Multi-Region');
    }
  };

  return (
    <div className="relative w-full aspect-square max-w-[540px] rounded-xl bg-[#1a1c1e] p-6 flex flex-col justify-between overflow-hidden shadow-2xl border border-[#333537]/80">
      {/* Background Ambient Geometric SVG Visual */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg
          className="w-full h-full"
          fill="none"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Orbital grid rings */}
          <circle
            className="text-[#333537]"
            cx="250"
            cy="250"
            r="180"
            stroke="currentColor"
            strokeDasharray="4 6"
            strokeWidth="1"
          />
          <circle
            className="text-[#333537]/40"
            cx="250"
            cy="250"
            r="120"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle
            className="text-[#b0f753]/60"
            cx="250"
            cy="250"
            r="60"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            className="text-[#333537]/50"
            d="M70 250H430M250 70V430"
            stroke="currentColor"
            strokeDasharray="2 4"
            strokeWidth="0.75"
          />
          {/* Constellation nodes */}
          <circle
            className={`fill-[#b0f753] ${pingPulse ? 'animate-ping' : 'animate-pulse'}`}
            cx="160"
            cy="180"
            r={activeMode === 'spike' ? 6 : 4}
          />
          <circle
            className="fill-[#96da38]"
            cx="340"
            cy="220"
            r="3.5"
          />
          <circle
            className="fill-[#e2e2e5]"
            cx="210"
            cy="330"
            r="5"
          />
          <circle
            className="fill-[#b0f753]/80"
            cx="320"
            cy="310"
            r="3"
          />
          <line
            className="text-[#b0f753]/30"
            stroke="currentColor"
            strokeWidth="1"
            x1="160"
            x2="250"
            y1="180"
            y2="250"
          />
          <line
            className="text-[#333537]"
            stroke="currentColor"
            strokeWidth="1"
            x1="340"
            x2="250"
            y1="220"
            y2="250"
          />
          <line
            className="text-[#96da38]/40"
            stroke="currentColor"
            strokeWidth="1"
            x1="210"
            x2="250"
            y1="330"
            y2="250"
          />
          <line
            className="text-[#b0f753]/20"
            stroke="currentColor"
            strokeWidth="1"
            x1="320"
            x2="250"
            y1="310"
            y2="250"
          />
        </svg>
      </div>

      {/* Glass Floating Telemetry Overlay (Top) */}
      <div className="relative z-10 flex items-center justify-between bg-[#1e2022]/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-sm border border-[#333537]/50">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#b0f753] animate-pulse" />
          <span className="font-label-tech text-[10px] uppercase text-[#e2e2e5] tracking-wider">
            SYS.ARCHITECTURE // LIVE
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-label-tech text-[10px] text-[#96da38] font-semibold">
            99.98% UPTIME
          </span>
          <button
            onClick={handleCycleMode}
            title="Switch Telemetry Mode"
            className="px-2 py-0.5 rounded bg-[#282a2c] hover:bg-[#333537] text-[9px] font-label-tech uppercase text-[#c2cab1] hover:text-white transition-colors cursor-pointer"
          >
            {activeMode === 'live' ? 'Normal' : activeMode === 'spike' ? 'Spike Test' : 'Edge Mesh'}
          </button>
        </div>
      </div>

      {/* Center Interactive Node Cluster Status */}
      <div className="relative z-10 my-auto py-8 text-center flex flex-col items-center">
        <button
          onClick={handleTriggerPing}
          aria-label="Trigger Core Ping"
          className="w-20 h-20 rounded-full bg-[#282a2c]/90 flex items-center justify-center mb-4 shadow-xl relative group cursor-pointer transition-transform hover:scale-110 active:scale-95 border border-[#333537]"
        >
          <span className="material-symbols-outlined text-[#b0f753] text-[36px] transition-transform duration-300 group-hover:rotate-45">
            hub
          </span>
          <span
            className={`absolute inset-0 rounded-full bg-[#b0f753]/20 ${
              pingPulse ? 'animate-ping' : 'animate-ping'
            }`}
          />
        </button>
        <div className="font-label-tech text-[11px] tracking-wider uppercase text-[#c2cab1] mb-1">
          {activeMode === 'live'
            ? 'COGNITIVE ENGINE v4.2'
            : activeMode === 'spike'
            ? 'AUTOSCALING UNDER LOAD'
            : 'EDGE CACHED POOL'}
        </div>
        <div className="font-headline-sm text-lg text-white font-medium">
          Distributed Micro-Core
        </div>
        <p className="font-label-tech text-[10px] text-[#8c947d] mt-1">
          Click central hub to ping cluster
        </p>
      </div>

      {/* Bottom Telemetry Metric Panel */}
      <div className="relative z-10 grid grid-cols-3 gap-2 bg-[#1e2022]/90 backdrop-blur-md p-4 rounded-lg shadow-sm border border-[#333537]/50">
        <div>
          <span className="font-label-tech text-[10px] text-[#c2cab1] block uppercase tracking-wider">
            Latency
          </span>
          <span className="font-label-tech text-xs text-white font-semibold">
            {latency}ms
          </span>
        </div>
        <div>
          <span className="font-label-tech text-[10px] text-[#c2cab1] block uppercase tracking-wider">
            Throughput
          </span>
          <span className="font-label-tech text-xs text-[#b0f753] font-semibold">
            {throughput}k req/s
          </span>
        </div>
        <div>
          <span className="font-label-tech text-[10px] text-[#c2cab1] block uppercase tracking-wider">
            Deployment
          </span>
          <span className="font-label-tech text-xs text-[#e2e2e5] font-semibold truncate block">
            {region}
          </span>
        </div>
      </div>
    </div>
  );
};
