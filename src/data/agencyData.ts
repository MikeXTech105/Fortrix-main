export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  architecture: {
    frontend: string;
    backend: string;
    database: string;
    infrastructure: string;
    throughput: string;
    latency: string;
    diagramDescription: string;
    highlights: string[];
  };
}

export interface Service {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  techStack: string[];
  typicalTimeline: string;
  businessImpact: string;
}

export interface Founder {
  name: string;
  initials: string;
  role: string;
  title: string;
  bio: string;
  focusAreas: string[];
  linkedin: string;
  github?: string;
  email: string;
}

export interface ProcessStage {
  number: string;
  phase: string;
  title: string;
  description: string;
  deliverable: string;
  duration: string;
}

export const AGENCY_PROJECTS: Project[] = [
  {
    id: "tradebullking",
    number: "01",
    title: "TradeBullKing Platform",
    category: "FINTECH / WEB APPLICATION",
    year: "2024",
    tagline: "High-frequency multi-asset trading terminal",
    description: "Sub-millisecond order execution console featuring responsive real-time WebSockets, depth chart visualizers, risk parameter simulators, and multi-asset account balances.",
    image: "/src/assets/images/tradebullking_preview_1792217720435.jpg",
    tags: ["Next.js 14", "WebSockets", "Rust Engine", "Canvas API", "Redis Pub/Sub"],
    metrics: [
      { label: "Execution Latency", value: "< 1.8ms" },
      { label: "Concurrent Tickers", value: "1,200+" },
      { label: "Order Volume", value: "$42M/day" },
      { label: "Uptime Rating", value: "99.99%" }
    ],
    architecture: {
      frontend: "Next.js 14 App Router, WebGL Orderbook Canvas, Web Workers for message parsing",
      backend: "Rust Core Matching Engine, Node.js WebSocket gateway proxy with epoll cluster",
      database: "TimescaleDB for high-cadence tick storage, Redis Cluster for in-memory depth buffer",
      infrastructure: "Bare-metal edge nodes in Frankfurt and Tokyo + AWS US-East primary region",
      throughput: "65,000 order updates/second",
      latency: "1.2ms P99 client roundtrip",
      diagramDescription: "Clients establish dedicated multiplexed WebSockets to edge proxies; orders route straight to the lock-free Rust matching engine while TimescaleDB captures tick snapshots asynchronously.",
      highlights: [
        "Zero-garbage-collection WebGL canvas rendering 60 FPS orderbook depth visualizer",
        "Deterministic order matching with zero state desynchronization across failovers",
        "Client-side margin calculation with real-time portfolio liquidation safeguards"
      ]
    }
  },
  {
    id: "aurum-intelligence",
    number: "02",
    title: "Aurum Intelligence Suite",
    category: "SAAS / OPERATIONS",
    year: "2024",
    tagline: "Autonomous enterprise operations command center",
    description: "Enterprise operations command center integrating revenue cohort analytics, task pipeline kanbans, cross-team capacity planning, and live contract qualification pipelines.",
    image: "/src/assets/images/aurum_preview_1792217721325.jpg",
    tags: ["React", "PostgreSQL", "GraphQL", "Tailwind", "D3.js"],
    metrics: [
      { label: "Active Enterprise Seats", value: "8,500+" },
      { label: "Pipeline Tracked", value: "$180M+" },
      { label: "Sync Overhead", value: "0ms delay" },
      { label: "Workflow Efficiency", value: "+38%" }
    ],
    architecture: {
      frontend: "React 19, Tailwind CSS, TanStack Query, Virtualized Data Grids, D3 chart primitives",
      backend: "NestJS TypeScript microservices, Apollo Federation GraphQL Gateway",
      database: "PostgreSQL with row-level security (RLS), Citus distributed sharding",
      infrastructure: "GCP Kubernetes Engine (GKE), Cloud Armor DDoS protection, Redis Sentinel",
      throughput: "12,000 GraphQL queries/second",
      latency: "18ms average analytical query time",
      diagramDescription: "Role-based federated GraphQL schema seamlessly aggregating sales, operational milestones, and financial ERP databases into an authoritative consolidated state.",
      highlights: [
        "Real-time multiplayer operational kanban board with operational conflict resolution",
        "Granular audit trails meeting SOC2 Type II compliance standards",
        "Automated recurring revenue forecast generator driven by historical win/loss telemetry"
      ]
    }
  },
  {
    id: "aegis-genops",
    number: "03",
    title: "Aegis AI Gen-Ops System",
    category: "ARTIFICIAL INTELLIGENCE / AUTOMATION",
    year: "2024",
    tagline: "Autonomous enterprise cognitive graph pipeline",
    description: "Autonomous cognitive graph pipeline automating enterprise prompt verification, embedding cluster indexing, vector token throttling, and model failover arbitration.",
    image: "/src/assets/images/aegis_preview_1792217721492.jpg",
    tags: ["Python FastAPI", "LangChain", "Qdrant Vector DB", "Node Flow UI", "OpenAI & Claude"],
    metrics: [
      { label: "Tokens Processed", value: "4.2B/month" },
      { label: "Hallucination Reduction", value: "96.4%" },
      { label: "Latency P95", value: "320ms" },
      { label: "Cost Savings", value: "41% token routing" }
    ],
    architecture: {
      frontend: "React Flow interactive node pipeline builder, live telemetry streaming, JSON schema validator",
      backend: "Python 3.12 FastAPI async cluster, Celery task workers with Redis broker",
      database: "Qdrant Vector Database (HNSW indexing), PostgreSQL for audit logs",
      infrastructure: "AWS EKS with GPU-enabled inferencing pods and serverless fallback handlers",
      throughput: "4,500 inference pipelines/minute",
      latency: "Sub-50ms vector semantic match",
      diagramDescription: "Inbound requests hit the Aegis proxy, perform semantic cache lookups in Qdrant, pass through guardrail evaluators, and execute dynamic smart model arbitration.",
      highlights: [
        "Dynamic smart routing between lightweight models and frontier reasoning engines",
        "Real-time visual node graph builder allowing engineers to drag-and-drop AI pipelines",
        "Zero data leakage architecture with strict PII scrubbing prior to model ingestion"
      ]
    }
  },
  {
    id: "global-checkout",
    number: "04",
    title: "Global Scale Checkout & Settlement",
    category: "COMMERCE & CLOUD INFRASTRUCTURE",
    year: "2024",
    tagline: "Sub-second distributed checkout engine",
    description: "High-concurrency headless store architecture engineered for flash-sale volumes, sub-second checkout loops, automated inventory balancing, and multi-currency routing.",
    image: "/src/assets/images/checkout_preview_1792217722064.jpg",
    tags: ["Kubernetes", "Golang Microservices", "Redis Cache", "AWS ECS", "Stripe Connect"],
    metrics: [
      { label: "Peak TPS Handled", value: "28,400 TPS" },
      { label: "Checkout Conversion", value: "+22.4%" },
      { label: "Cart Abandonment", value: "-14%" },
      { label: "Global Availability", value: "99.995%" }
    ],
    architecture: {
      frontend: "Ultra-lean edge-rendered checkout micro-frontends with optimistic offline cart",
      backend: "Golang microservices with gRPC communication and event-driven Apache Kafka spine",
      database: "Amazon Aurora Multi-Region PostgreSQL, distributed Redis lock manager for inventory",
      infrastructure: "AWS ECS Fargate, Cloudflare Enterprise edge workers, multi-zone failover",
      throughput: "180,000 checkout steps/minute",
      latency: "85ms average checkout API response",
      diagramDescription: "Distributed inventory reservations utilize atomic Redis leases before committing to Aurora, preventing overselling even during million-user sudden traffic drops.",
      highlights: [
        "Instant multi-currency localized conversion across 45 national payment rails",
        "Distributed lock manager preventing race conditions during flash inventory drops",
        "Self-healing worker pods with automatic horizontal autoscaling within 8 seconds"
      ]
    }
  }
];

export const AGENCY_SERVICES: Service[] = [
  {
    id: "web-dev",
    number: "01",
    title: "WEB DEVELOPMENT",
    shortDesc: "High-performance websites, dashboards, SaaS platforms and complex web applications with instant hydration and zero technical compromise.",
    fullDesc: "We build web applications that load in milliseconds, scale effortlessly, and deliver desktop-grade responsiveness in the browser. From reactive dashboards to customer-facing SaaS platforms, our architectures prioritize resilience, search visibility, and exceptional UX.",
    deliverables: [
      "Custom SaaS & Web Platform Architecture",
      "Interactive Real-Time Dashboards & Portals",
      "Headless CMS & High-Speed Marketing Engines",
      "Performance Optimization & Core Web Vitals Auditing",
      "API Integrations & Third-Party Connector Middleware"
    ],
    techStack: ["Next.js 14/15", "React 19", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL", "WebSockets"],
    typicalTimeline: "4 to 10 weeks",
    businessImpact: "Accelerates user onboarding, cuts bounce rates, and eliminates front-end technical debt."
  },
  {
    id: "mobile-dev",
    number: "02",
    title: "MOBILE DEVELOPMENT",
    shortDesc: "Modern mobile experiences for iOS and Android built on robust cross-platform architectures offering native fluidity and offline capabilities.",
    fullDesc: "We craft polished mobile applications that feel native on every device. By using modern cross-platform engines with native bridges, you get one unified codebase with zero penalty to 60fps fluidity, biometric security, and offline data sync.",
    deliverables: [
      "Cross-Platform iOS & Android Applications",
      "Offline-First Local Storage & Sync Engines",
      "Biometric Authentication & Secure Storage",
      "Push Notification & Deep Linking Architecture",
      "App Store & Google Play End-to-End Submission"
    ],
    techStack: ["Flutter", "React Native", "TypeScript", "Kotlin/Swift Bridges", "SQLite", "Firebase/Supabase"],
    typicalTimeline: "6 to 12 weeks",
    businessImpact: "Reaches users on both app stores simultaneously with cut maintenance costs and faster feature rollouts."
  },
  {
    id: "custom-software",
    number: "03",
    title: "CUSTOM SOFTWARE",
    shortDesc: "Business platforms, internal tools, CRM, ERP and workflow systems built directly around your operational logic and unique security postures.",
    fullDesc: "Off-the-shelf software rarely matches your competitive advantage. We architect bespoke operating systems for your business, linking legacy databases to sleek operational consoles, automated approval chains, and unified data lakes.",
    deliverables: [
      "Enterprise Resource Planning (ERP) Systems",
      "Custom CRM & Client Relationship Engines",
      "Multi-Role Permission & RBAC Access Centers",
      "Operational Back-Office Workflow Automation",
      "Data Migration & Legacy System Modernization"
    ],
    techStack: [".NET 8", "Node.js", "PostgreSQL", "MongoDB", "Redis", "Docker", "Express/NestJS"],
    typicalTimeline: "8 to 16 weeks",
    businessImpact: "Replaces fractured spreadsheets and high SaaS subscription bills with one asset owned completely by you."
  },
  {
    id: "ai-automation",
    number: "04",
    title: "AI & AUTOMATION",
    shortDesc: "AI-powered applications, intelligent workflows, custom fine-tuned assistants, retrieval augmented generation (RAG) and business process automation.",
    fullDesc: "We embed practical artificial intelligence that solves genuine operational bottlenecks. No gimmicks—only hardened RAG systems, document intelligence pipelines, automated agent reasoning, and proprietary workflow automation.",
    deliverables: [
      "Retrieval-Augmented Generation (RAG) Document Engines",
      "Intelligent Robotic Process Automation (RPA)",
      "Autonomous Multi-Agent Task Orchestration",
      "Private Enterprise Semantic Search & Vector Indexes",
      "Custom Model Fine-Tuning & Prompt Evaluation Frameworks"
    ],
    techStack: ["Python", "FastAPI", "LangChain/LlamaIndex", "Qdrant", "OpenAI / Claude API", "Celery", "HuggingFace"],
    typicalTimeline: "4 to 8 weeks",
    businessImpact: "Cuts repetitive manual workload by 40-70% while surfacing actionable insights from unstructured business records."
  },
  {
    id: "ui-ux-design",
    number: "05",
    title: "UI/UX DESIGN",
    shortDesc: "Interfaces that are clean, useful and designed around real user behavior. We engineer high-density information systems with zero visual clutter.",
    fullDesc: "Great design is clear thinking made visible. We design interfaces for high-information density domains—trading, logistics, enterprise SaaS—balancing minimalist aesthetic restraint with lightning-fast user comprehension.",
    deliverables: [
      "User Journey Mapping & Information Architecture",
      "Comprehensive Production Design Systems (Figma tokens)",
      "Interactive High-Fidelity Clickable Prototypes",
      "Developer-Ready Design Specs & Asset Exporting",
      "Usability Testing & Accessibility (WCAG AA) Audits"
    ],
    techStack: ["Figma", "Design Tokens", "Tailwind Theme Tokens", "Storybook", "Motion Systems"],
    typicalTimeline: "3 to 6 weeks",
    businessImpact: "Increases product conversion, reduces support tickets, and cuts engineering implementation friction."
  },
  {
    id: "cloud-devops",
    number: "06",
    title: "CLOUD & DEVOPS",
    shortDesc: "Scalable infrastructure, resilient APIs, automated deployment pipelines, real-time observability telemetry and secure multi-cloud architectures.",
    fullDesc: "Infrastructure should be reliable and invisible. We design automated cloud foundations that scale under spike loads, protect your data perimeter, and give your engineering team friction-free continuous deployment pipelines.",
    deliverables: [
      "Infrastructure as Code (Terraform / Pulumi)",
      "Automated CI/CD Pipelines with Automated Testing",
      "Kubernetes & Container Orchestration Clusters",
      "Zero-Downtime Multi-Region Database Replication",
      "Real-Time Telemetry, APM & Sentry Alerting Systems"
    ],
    techStack: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus/Grafana"],
    typicalTimeline: "2 to 6 weeks",
    businessImpact: "Guarantees 99.9%+ availability, shields from traffic outages, and shortens release cycles from weeks to minutes."
  }
];

export const AGENCY_FOUNDERS: Founder[] = [
  {
    name: "Sahil Jayani",
    initials: "SJ",
    role: "FOUNDER",
    title: "Founder & Product Architect",
    bio: "Translating complex enterprise workflow bottlenecks into streamlined, intuitive digital solutions with resilient cloud architectures, clean metrics, and capital-efficient execution. Sahil guides product vision, user ergonomics, engineering standards, and commercial alignment.",
    focusAreas: ["Product Architecture", "Enterprise Workflow Automation", "UI/UX Systems", "Go-To-Market Execution", "SaaS Growth Ergonomics", "Distributed Cloud Infrastructure"],
    linkedin: "https://www.linkedin.com/company/fortrix-infotech",
    github: "https://github.com/MikeXTech105",
    email: "fortrixinfotech@gmail.com"
  }
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    number: "01",
    phase: "PHASE ONE",
    title: "DISCOVER",
    description: "Understand the business, users, workflows and core system requirements. Map technical dependencies, edge cases, and compliance boundaries.",
    deliverable: "Tech Spec & Scope Matrix",
    duration: "Week 1"
  },
  {
    number: "02",
    phase: "PHASE TWO",
    title: "DEFINE",
    description: "Shape the product strategy, system architecture, database schema, state machines, and high-velocity engineering milestone roadmap.",
    deliverable: "System Architecture Plan",
    duration: "Week 1-2"
  },
  {
    number: "03",
    phase: "PHASE THREE",
    title: "DESIGN",
    description: "Create the user experience, interaction system, high-fidelity prototypes, accessible component libraries, and ergonomic token systems.",
    deliverable: "Production Design System",
    duration: "Week 2-4"
  },
  {
    number: "04",
    phase: "PHASE FOUR",
    title: "BUILD",
    description: "Develop with clean, type-safe code, integrate third-party APIs, write end-to-end unit tests, and continuously refine performance benchmarks.",
    deliverable: "Staging Deployment Environment",
    duration: "Week 3-8"
  },
  {
    number: "05",
    phase: "PHASE FIVE",
    title: "LAUNCH",
    description: "Deploy to cloud infrastructure, wire multi-channel monitoring, perform stress testing, conduct vulnerability scans, and execute seamless go-live.",
    deliverable: "Production Release & Telemetry",
    duration: "Launch Week"
  },
  {
    number: "06",
    phase: "PHASE SIX",
    title: "SCALE",
    description: "Continue evolving the software product as the business expands, user traffic surges, and new high-yield feature vectors appear.",
    deliverable: "Continuous Velocity Retainers",
    duration: "Ongoing"
  }
];

export const TECH_STACK = [
  { name: "React", category: "frontend", highlight: false },
  { name: "Next.js", category: "frontend", highlight: false },
  { name: "Node.js", category: "backend", highlight: false },
  { name: ".NET", category: "backend", highlight: true },
  { name: "TypeScript", category: "core", highlight: false },
  { name: "Python", category: "backend", highlight: false },
  { name: "Flutter", category: "mobile", highlight: false },
  { name: "React Native", category: "mobile", highlight: false },
  { name: "PostgreSQL", category: "database", highlight: false },
  { name: "MongoDB", category: "database", highlight: false },
  { name: "Redis", category: "database", highlight: false },
  { name: "AWS", category: "cloud", highlight: true },
  { name: "Docker", category: "cloud", highlight: false },
  { name: "OpenAI / LLMs", category: "ai", highlight: true },
  { name: "Kubernetes", category: "cloud", highlight: false },
  { name: "GraphQL", category: "backend", highlight: false },
  { name: "Tailwind CSS", category: "frontend", highlight: false },
  { name: "FastAPI", category: "backend", highlight: false }
];
