import React, { useState } from 'react';
import { Project } from '../data/agencyData';

interface ArchitectureModalProps {
  project: Project | null;
  onClose: () => void;
  onStartSimilarProject: (project: Project) => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({
  project,
  onClose,
  onStartSimilarProject,
}) => {
  const [activeTab, setActiveTab] = useState<'blueprint' | 'simulator' | 'specs'>('blueprint');

  // TradeBullKing simulator state
  const [orderType, setOrderType] = useState<'buy' | 'sell'>('buy');
  const [orderAmount, setOrderAmount] = useState('2.5');
  const [recentOrders, setRecentOrders] = useState([
    { id: '#9841', type: 'BUY', price: '64,280.50', size: '1.20 BTC', time: '12:04:22.108' },
    { id: '#9840', type: 'SELL', price: '64,281.00', size: '0.45 BTC', time: '12:04:21.840' },
    { id: '#9839', type: 'BUY', price: '64,279.00', size: '3.10 BTC', time: '12:04:20.301' },
  ]);

  // Aegis prompt test state
  const [testPrompt, setTestPrompt] = useState('Analyze quarterly subscriber churn risk with customer privacy scrub');
  const [promptResult, setPromptResult] = useState<{
    cached: boolean;
    tokens: number;
    routedModel: string;
    latency: string;
    riskScore: string;
  } | null>(null);

  // Global Checkout load test state
  const [simulatedLoad, setSimulatedLoad] = useState<number | null>(null);

  if (!project) return null;

  const handleSimulateTrade = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrder = {
      id: `#${Math.floor(1000 + Math.random() * 9000)}`,
      type: orderType.toUpperCase(),
      price: (64250 + Math.random() * 50).toFixed(2),
      size: `${orderAmount} BTC`,
      time: new Date().toISOString().substring(11, 23),
    };
    setRecentOrders([newOrder, ...recentOrders.slice(0, 4)]);
  };

  const handleRunPromptTest = () => {
    setPromptResult({
      cached: Math.random() > 0.4,
      tokens: Math.floor(280 + Math.random() * 200),
      routedModel: 'DeepSeek / Claude 3.5 Sonnet hybrid pipeline',
      latency: `${(45 + Math.random() * 30).toFixed(1)}ms`,
      riskScore: '0.02 (Clean / PII Cleared)',
    });
  };

  const handleSimulateCheckoutBurst = () => {
    setSimulatedLoad(Math.floor(18000 + Math.random() * 8000));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl my-8 rounded-xl bg-[#121416] border border-[#333537] shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#333537] bg-[#1a1c1e]">
          <div className="flex items-center gap-3">
            <span className="font-label-tech text-xs uppercase text-[#b0f753] tracking-widest font-semibold">
              ARCHITECTURE INSPECTION
            </span>
            <span className="text-[#42474d] text-sm">/</span>
            <span className="font-label-tech text-xs text-[#c2cab1] uppercase">
              SYS-SPEC // {project.number}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onStartSimilarProject(project)}
              className="px-4 py-1.5 rounded-full bg-[#b0f753] text-[#102000] font-label-caps text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer hidden sm:block"
            >
              Build Something Similar
            </button>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="w-8 h-8 rounded-full bg-[#282a2c] text-[#e2e2e5] hover:text-white flex items-center justify-center hover:bg-[#333537] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        </div>

        {/* Hero banner summary */}
        <div className="p-6 md:p-8 bg-[#16181b] border-b border-[#333537]/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-label-tech text-xs text-[#b0f753] uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="text-[#8c947d] text-xs">·</span>
                <span className="font-label-tech text-xs text-[#c2cab1]">
                  Deployed {project.year}
                </span>
              </div>
              <h2 className="font-headline-lg text-2xl md:text-3xl text-white font-semibold">
                {project.title}
              </h2>
              <p className="font-body-md text-sm md:text-base text-[#c2cab1] max-w-2xl mt-2 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-2 gap-3 shrink-0">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="bg-[#1e2022] p-3 rounded-lg border border-[#333537]">
                  <span className="font-label-tech text-[10px] text-[#8c947d] uppercase block">
                    {m.label}
                  </span>
                  <span className="font-label-tech text-sm text-white font-bold">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Sub-Tabs */}
          <div className="flex items-center gap-2 mt-6 pt-4 border-t border-[#333537]/60">
            <button
              onClick={() => setActiveTab('blueprint')}
              className={`px-4 py-1.5 rounded-lg text-xs font-label-tech uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'blueprint'
                  ? 'bg-[#b0f753] text-[#102000] font-semibold'
                  : 'bg-[#1e2022] text-[#c2cab1] hover:text-white'
              }`}
            >
              System Blueprint
            </button>
            <button
              onClick={() => setActiveTab('simulator')}
              className={`px-4 py-1.5 rounded-lg text-xs font-label-tech uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'simulator'
                  ? 'bg-[#b0f753] text-[#102000] font-semibold'
                  : 'bg-[#1e2022] text-[#c2cab1] hover:text-white'
              }`}
            >
              Interactive Telemetry Demo
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-4 py-1.5 rounded-lg text-xs font-label-tech uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'specs'
                  ? 'bg-[#b0f753] text-[#102000] font-semibold'
                  : 'bg-[#1e2022] text-[#c2cab1] hover:text-white'
              }`}
            >
              Stack & Performance Specs
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-6 md:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {activeTab === 'blueprint' && (
            <div className="space-y-6">
              {/* Architecture Screenshot Preview */}
              <div className="w-full h-52 md:h-72 rounded-xl overflow-hidden border border-[#333537] relative group bg-[#0c0e10]">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121416] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2 font-label-tech text-[10px] text-[#b0f753] bg-[#0c0e10]/85 px-3 py-1 rounded-full backdrop-blur-sm border border-[#333537]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b0f753] animate-pulse" />
                  <span>PRODUCTION INTERFACE SNAPSHOT</span>
                </div>
              </div>

              {/* Architecture Layer Breakdown Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#1a1c1e] p-5 rounded-lg border border-[#333537]">
                  <span className="font-label-tech text-xs text-[#b0f753] uppercase block mb-1">
                    01 // PRESENTATION & CLIENT EDGE
                  </span>
                  <div className="font-headline-sm text-base text-white font-medium mb-2">
                    Frontend Layer
                  </div>
                  <p className="font-body-sm text-sm text-[#c2cab1] leading-relaxed">
                    {project.architecture.frontend}
                  </p>
                </div>

                <div className="bg-[#1a1c1e] p-5 rounded-lg border border-[#333537]">
                  <span className="font-label-tech text-xs text-[#b0f753] uppercase block mb-1">
                    02 // RUNTIME SERVICES & APIS
                  </span>
                  <div className="font-headline-sm text-base text-white font-medium mb-2">
                    Backend Core
                  </div>
                  <p className="font-body-sm text-sm text-[#c2cab1] leading-relaxed">
                    {project.architecture.backend}
                  </p>
                </div>

                <div className="bg-[#1a1c1e] p-5 rounded-lg border border-[#333537]">
                  <span className="font-label-tech text-xs text-[#b0f753] uppercase block mb-1">
                    03 // PERSISTENCE & CACHE
                  </span>
                  <div className="font-headline-sm text-base text-white font-medium mb-2">
                    Storage & Cache Subsystem
                  </div>
                  <p className="font-body-sm text-sm text-[#c2cab1] leading-relaxed">
                    {project.architecture.database}
                  </p>
                </div>

                <div className="bg-[#1a1c1e] p-5 rounded-lg border border-[#333537]">
                  <span className="font-label-tech text-xs text-[#b0f753] uppercase block mb-1">
                    04 // MULTI-ZONE INFRASTRUCTURE
                  </span>
                  <div className="font-headline-sm text-base text-white font-medium mb-2">
                    Cloud & Deployment Cluster
                  </div>
                  <p className="font-body-sm text-sm text-[#c2cab1] leading-relaxed">
                    {project.architecture.infrastructure}
                  </p>
                </div>
              </div>

              {/* Data Flow Diagram Card */}
              <div className="bg-[#1a1c1e] p-6 rounded-lg border border-[#333537]">
                <span className="font-label-tech text-xs text-[#b0f753] uppercase block mb-2">
                  // DATA CONCURRENCY & FLOW PROTOCOL
                </span>
                <p className="font-body-md text-sm text-[#e2e2e5] leading-relaxed mb-4">
                  {project.architecture.diagramDescription}
                </p>

                <div className="p-4 rounded bg-[#0c0e10] border border-[#333537] font-mono text-xs text-[#c2cab1] space-y-1 overflow-x-auto">
                  <div className="text-[#8c947d]">// Architecture Flow Schematic:</div>
                  <div className="text-white">
                    [CLIENT BROWSER / NATIVE APP] ──(TLS 1.3 Multiplex)──&gt; [CLOUDFLARE EDGE]
                  </div>
                  <div className="text-[#b0f753]">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&gt; [LOAD BALANCER & GATEWAY]
                  </div>
                  <div className="text-white">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&gt; [IN-MEMORY CACHE & LOCKS]
                  </div>
                  <div className="text-[#b0f753]">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&gt; [ASYNC WORKER QUEUE & DB CLUSTER]
                  </div>
                </div>
              </div>

              {/* Engineering Highlights */}
              <div className="bg-[#1a1c1e] p-5 rounded-lg border border-[#333537]">
                <span className="font-label-tech text-xs text-[#b0f753] uppercase block mb-3">
                  // CRITICAL SYSTEM HIGHLIGHTS
                </span>
                <ul className="space-y-2">
                  {project.architecture.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[#e2e2e5]">
                      <span className="text-[#b0f753] font-mono font-bold">✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'simulator' && (
            <div className="space-y-6">
              {project.id === 'tradebullking' && (
                <div className="bg-[#1a1c1e] p-6 rounded-lg border border-[#333537] space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-headline-sm text-white text-base">
                        Simulated Order Routing & Engine Response
                      </h4>
                      <p className="font-body-sm text-xs text-[#c2cab1]">
                        Test the sub-millisecond dispatch loop and deterministic order matching.
                      </p>
                    </div>
                    <span className="font-label-tech text-xs text-[#b0f753] px-2 py-1 rounded bg-[#282a2c]">
                      WEBSOCKET ACTIVE
                    </span>
                  </div>

                  <form onSubmit={handleSimulateTrade} className="flex flex-wrap items-center gap-3 pt-2">
                    <div className="flex rounded bg-[#0c0e10] p-1 border border-[#333537]">
                      <button
                        type="button"
                        onClick={() => setOrderType('buy')}
                        className={`px-3 py-1 rounded text-xs font-label-tech font-bold cursor-pointer ${
                          orderType === 'buy' ? 'bg-[#b0f753] text-[#102000]' : 'text-[#8c947d]'
                        }`}
                      >
                        BUY
                      </button>
                      <button
                        type="button"
                        onClick={() => setOrderType('sell')}
                        className={`px-3 py-1 rounded text-xs font-label-tech font-bold cursor-pointer ${
                          orderType === 'sell' ? 'bg-[#ffb4ab] text-[#690005]' : 'text-[#8c947d]'
                        }`}
                      >
                        SELL
                      </button>
                    </div>

                    <input
                      type="text"
                      value={orderAmount}
                      onChange={(e) => setOrderAmount(e.target.value)}
                      placeholder="Amount BTC"
                      className="px-3 py-1.5 rounded bg-[#0c0e10] border border-[#333537] text-xs font-mono text-white w-28 focus:border-[#b0f753] outline-none"
                    />

                    <button
                      type="submit"
                      className="px-4 py-1.5 rounded bg-[#b0f753] text-[#102000] font-label-tech text-xs font-bold uppercase cursor-pointer hover:opacity-90"
                    >
                      Route Order
                    </button>
                  </form>

                  {/* Order log */}
                  <div className="border border-[#333537] rounded overflow-hidden">
                    <div className="bg-[#282a2c] px-4 py-2 font-label-tech text-[10px] text-[#c2cab1] grid grid-cols-4 uppercase">
                      <span>Order Ref</span>
                      <span>Side</span>
                      <span>Match Price</span>
                      <span>Timestamp (UTC)</span>
                    </div>
                    <div className="divide-y divide-[#333537]/50 font-mono text-xs">
                      {recentOrders.map((ord) => (
                        <div key={ord.id} className="px-4 py-2 grid grid-cols-4 items-center bg-[#121416]">
                          <span className="text-[#8c947d]">{ord.id}</span>
                          <span className={ord.type === 'BUY' ? 'text-[#b0f753] font-bold' : 'text-[#ffb4ab] font-bold'}>
                            {ord.type} ({ord.size})
                          </span>
                          <span className="text-white">${ord.price}</span>
                          <span className="text-[#8c947d] text-[11px]">{ord.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {project.id === 'aegis-genops' && (
                <div className="bg-[#1a1c1e] p-6 rounded-lg border border-[#333537] space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-headline-sm text-white text-base">
                        Aegis Smart Token Routing & Semantic Filter Test
                      </h4>
                      <p className="font-body-sm text-xs text-[#c2cab1]">
                        Inspect latency, PII scrubbing, and frontier model selection.
                      </p>
                    </div>
                    <span className="font-label-tech text-xs text-[#b0f753] px-2 py-1 rounded bg-[#282a2c]">
                      QDRANT VECTOR SYNC
                    </span>
                  </div>

                  <div className="space-y-3">
                    <label className="font-label-tech text-xs text-[#c2cab1] block">
                      Enterprise Input Prompt:
                    </label>
                    <textarea
                      value={testPrompt}
                      onChange={(e) => setTestPrompt(e.target.value)}
                      rows={2}
                      className="w-full px-3 py-2 rounded bg-[#0c0e10] border border-[#333537] text-xs font-mono text-white focus:border-[#b0f753] outline-none"
                    />

                    <button
                      onClick={handleRunPromptTest}
                      className="px-4 py-2 rounded bg-[#b0f753] text-[#102000] font-label-caps text-xs font-semibold uppercase cursor-pointer hover:opacity-90"
                    >
                      Process Through Aegis Pipeline →
                    </button>
                  </div>

                  {promptResult && (
                    <div className="p-4 rounded bg-[#0c0e10] border border-[#333537] space-y-2 animate-in fade-in">
                      <div className="flex items-center justify-between">
                        <span className="font-label-tech text-xs text-[#b0f753]">
                          Execution Verification:
                        </span>
                        <span className="font-mono text-xs text-[#96da38]">
                          {promptResult.cached ? '⚡ Semantic Cache Hit (Sub-50ms)' : '✓ Inferred via Gateway'}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-2 text-xs font-mono">
                        <div>
                          <span className="text-[#8c947d] block text-[10px]">ROUTED TO</span>
                          <span className="text-white truncate block">{promptResult.routedModel}</span>
                        </div>
                        <div>
                          <span className="text-[#8c947d] block text-[10px]">TOTAL TOKENS</span>
                          <span className="text-white">{promptResult.tokens}</span>
                        </div>
                        <div>
                          <span className="text-[#8c947d] block text-[10px]">PII SAFETY</span>
                          <span className="text-[#b0f753]">{promptResult.riskScore}</span>
                        </div>
                        <div>
                          <span className="text-[#8c947d] block text-[10px]">TOTAL LATENCY</span>
                          <span className="text-white">{promptResult.latency}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {project.id === 'global-checkout' && (
                <div className="bg-[#1a1c1e] p-6 rounded-lg border border-[#333537] space-y-4">
                  <h4 className="font-headline-sm text-white text-base">
                    Simulate Flash-Sale Concurrency Surge
                  </h4>
                  <p className="font-body-sm text-xs text-[#c2cab1]">
                    Test the Golang worker autoscale pool and distributed Redis lease manager under spike load.
                  </p>

                  <button
                    onClick={handleSimulateCheckoutBurst}
                    className="px-5 py-2.5 rounded-full bg-[#b0f753] text-[#102000] font-label-caps text-xs font-bold uppercase cursor-pointer hover:opacity-90"
                  >
                    Simulate 25,000 Concurrent Checkouts
                  </button>

                  {simulatedLoad && (
                    <div className="p-4 rounded bg-[#0c0e10] border border-[#333537] space-y-3 animate-in fade-in">
                      <div className="flex items-center justify-between font-label-tech text-xs">
                        <span className="text-[#b0f753]">ACTIVE SURGE LOAD</span>
                        <span className="text-white font-mono">{simulatedLoad.toLocaleString()} Req/Sec</span>
                      </div>
                      <div className="w-full bg-[#282a2c] h-2 rounded-full overflow-hidden">
                        <div className="bg-[#b0f753] h-full w-[88%] rounded-full animate-pulse" />
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs font-mono text-[#c2cab1]">
                        <div>Pod Scale: <span className="text-white">4 → 32 pods</span></div>
                        <div>Inventory Lock: <span className="text-[#b0f753]">Zero Oversells</span></div>
                        <div>Drop Rate: <span className="text-white">0.00%</span></div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {project.id === 'aurum-intelligence' && (
                <div className="bg-[#1a1c1e] p-6 rounded-lg border border-[#333537] space-y-4">
                  <h4 className="font-headline-sm text-white text-base">
                    Multiplayer Conflict Resolution & Graph Sync
                  </h4>
                  <p className="font-body-sm text-xs text-[#c2cab1]">
                    Aurum utilizes operational CRDTs to synchronize cross-department enterprise milestones across hundreds of active planners without data loss.
                  </p>
                  <div className="p-4 rounded bg-[#0c0e10] border border-[#333537] text-xs font-mono space-y-2">
                    <div className="text-[#b0f753]">// Cluster Sync Engine: Active 12 Enterprise Nodes</div>
                    <div className="text-white">Active Milestone: "Q3 SOC2 Type II Audit & Enterprise Tier Launch"</div>
                    <div className="text-[#8c947d]">Concurrent Editors: 14 engineers · Conflict Resolution: Deterministic LWW-Register</div>
                    <div className="text-[#96da38]">Latency: 18ms sync over Apollo Federation</div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="space-y-4">
              <div className="bg-[#1a1c1e] p-5 rounded-lg border border-[#333537]">
                <h4 className="font-label-tech text-xs text-[#b0f753] uppercase mb-3">
                  // PRODUCTION TECH SPECIFICATIONS
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="space-y-2">
                    <div>
                      <span className="text-[#8c947d] block text-[10px]">THROUGHPUT RATING</span>
                      <span className="text-white">{project.architecture.throughput}</span>
                    </div>
                    <div>
                      <span className="text-[#8c947d] block text-[10px]">END-TO-END LATENCY</span>
                      <span className="text-[#b0f753]">{project.architecture.latency}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-[#8c947d] block text-[10px] mb-1">DEPLOYED STACK TAGS</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((t, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-[#282a2c] text-[#e2e2e5]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action row */}
              <div className="p-4 rounded bg-[#1e2022] border border-[#333537] flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-[#c2cab1]">
                  Need an architecture with these performance characteristics?
                </span>
                <button
                  onClick={() => onStartSimilarProject(project)}
                  className="px-5 py-2 rounded-full bg-[#b0f753] text-[#102000] font-label-caps text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap"
                >
                  Configure Architecture Proposal →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
