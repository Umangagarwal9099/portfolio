export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  index: string;
  name: string;
  displayName: string;
  tagline: string;
  category: "professional" | "freelance" | "academic";
  url?: string;
  secondaryUrl?: { label: string; href: string };
  image?: string;
  secondaryImage?: { src: string; caption: string };
  employer?: string;
  role: string;
  period: string;
  accent: string;
  accentSoft: string;
  summary: string;
  description: string[];
  stack: string[];
  integrations?: { name: string; purpose: string }[];
  contributions: string[];
  metrics?: Metric[];
  metricsNote?: string;
  caseStudy?: boolean;
  status?: "live" | "pending-source";
};

export const PROJECTS: Project[] = [
  {
    id: "vedxlence",
    index: "01",
    name: "VEDXLENCE",
    displayName: "VedXlence",
    tagline: "Learn AI. Build agents. Lead future.",
    category: "freelance",
    url: "https://www.vedxlence.in/",
    secondaryUrl: { label: "Student LMS", href: "https://learn.vedxlence.in/login" },
    image: "/images/projects/vedxlence.png",
    role: "Freelance Full-Stack Developer",
    period: "Mar 2026 — Present",
    accent: "#E8792B",
    accentSoft: "rgba(232, 121, 43, 0.14)",
    caseStudy: true,
    summary:
      "An EdTech / LMS platform for AI-focused upskilling — one Go API serving three separate portals: student, admin, and employer.",
    description: [
      "VedXlence is a full-stack learning platform I've built freelance, end to end: a single Go + Gin + PostgreSQL API on the backend, serving three independent Next.js/React applications — a student LMS, an internal admin/operations console, and an employer portal.",
      "The platform covers course delivery, live Zoom-integrated classes with recording and watermarking, an in-browser coding practice environment, assessments and certificates, CRM-style lead management, and internal HR workflows like attendance and work reports.",
    ],
    stack: [
      "Go", "Gin", "PostgreSQL (Supabase)", "Next.js 16", "React 19",
      "Redux Toolkit + Redux-Saga", "Tailwind CSS 4", "Monaco Editor", "Docker",
    ],
    integrations: [
      { name: "Zoom (Server-to-Server OAuth)", purpose: "Live class creation, joining & recording webhooks" },
      { name: "Cloudflare R2", purpose: "S3-compatible object storage for recordings & assets" },
      { name: "Resend", purpose: "Transactional email (SMTP ports blocked on host, so API-based email)" },
      { name: "ffmpeg", purpose: "Server-side watermark burn-in on recorded sessions, bundled in the Docker image" },
      { name: "Glot.io", purpose: "Remote code execution for the in-browser coding-practice editor" },
    ],
    contributions: [
      "Designed the PostgreSQL data model and built the Go/Gin API — 45+ controllers covering auth, courses, curriculum, batches, live sessions, assessments, coding questions, certificates, attendance, leaves, work reports, and CRM-style lead management.",
      "Implemented JWT + email-OTP authentication, plus a separate httpOnly-cookie flow for authenticated video streaming.",
      "Built the Zoom integration end to end: meeting creation, join links, and webhook-driven recording ingestion, followed by server-side watermarking via ffmpeg.",
      "Built all three Next.js frontends (student, admin, employer) with Redux Toolkit + Redux-Saga for state, including a Monaco-based coding practice environment for students.",
      "Set up Cloudflare R2 storage and Resend transactional email after diagnosing that outbound SMTP was blocked on the hosting platform.",
      "Containerized the backend with a multi-stage Docker build (Go builder → distroless runtime with a bundled static ffmpeg binary) for production deployment.",
    ],
    status: "live",
  },
  {
    id: "merasunaar",
    index: "02",
    name: "MERASUNAAR",
    displayName: "MeraSunaar",
    tagline: "Digital gold, made as easy as spare change.",
    category: "professional",
    url: "https://merasunaar.com/",
    image: "/images/projects/merasunaar.png",
    employer: "Cryptoforce",
    role: "Full-Stack Developer",
    period: "Aug 2024 — Present",
    accent: "#EC6F8E",
    accentSoft: "rgba(236, 111, 142, 0.14)",
    summary:
      "A digital gold platform where users buy, sell, gift, donate and set up recurring purchases of 24K gold — backed by regulated gold infrastructure and instant KYC.",
    description: [
      "MeraSunaar lets users convert everyday spare change into 24-karat digital gold — buying, selling, gifting, donating, and automating recurring purchases from a mobile app and web platform built for a mainstream, non-technical audience.",
      "I worked across the full stack: the customer-facing web app, the production React Native mobile app, and the integration layer connecting to gold custody, payments, and identity verification providers.",
    ],
    stack: ["React Native", "Next.js", "React.js", "Tailwind CSS", "Go", "REST APIs", "Git / GitLab CI/CD", "Linux"],
    integrations: [
      { name: "Augmont Gold", purpose: "Secure digital gold custody & infrastructure" },
      { name: "Cashfree", purpose: "Payment processing" },
      { name: "Surepass", purpose: "KYC verification" },
    ],
    contributions: [
      "Developed and maintained responsive web and mobile applications using React.js, Next.js, Tailwind CSS, and React Native.",
      "Built and contributed to a production mobile application for digital gold transactions.",
      "Implemented gold buying, selling, gifting, donation and recurring-purchase flows.",
      "Integrated Augmont Gold for digital gold services, Cashfree for payments, and Surepass for KYC.",
      "Worked across frontend, mobile, backend integration, and production workflows alongside the backend team.",
      "Shipped features and fixes for a 100K+ active user base, guided by real user feedback.",
      "Maintained production stability on Git/GitLab CI/CD in Linux deployment environments while delivering new features.",
    ],
    metrics: [
      { value: "100K+", label: "active users" },
      { value: "30%", label: "app engagement lift, first 3 months" },
      { value: "25%", label: "faster load times" },
      { value: "15%", label: "fewer bug-related complaints" },
      { value: "95%", label: "on-time feature delivery" },
    ],
    metricsNote: "Metrics as reported internally at Cryptoforce during my time on the project.",
  },
  {
    id: "rivaaj",
    index: "03",
    name: "RIVAAJ",
    displayName: "Rivaaj Couture",
    tagline: "Wear your heritage — luxury couture, e-commerce grade.",
    category: "professional",
    url: "https://rivaajcouture.com/",
    image: "/images/projects/rivaaj.png",
    employer: "Cryptoforce",
    role: "Full-Stack Developer",
    period: "2024 — 2026",
    accent: "#D4AF6A",
    accentSoft: "rgba(212, 175, 106, 0.14)",
    summary:
      "A luxury Indian couture e-commerce platform — customer storefront and admin panel built for editorial-grade presentation and operational control.",
    description: [
      "Rivaaj is a luxury clothing brand's e-commerce platform, where the storefront needed to feel as considered as the garments themselves — while the admin side needed to run a real retail operation underneath it.",
      "I built both halves: the customer-facing site and the internal admin panel, wiring payments and logistics into everyday order flows.",
    ],
    stack: ["Next.js", "React.js", "Go", "REST APIs", "Admin Dashboard", "Responsive UI"],
    integrations: [
      { name: "Shiprocket", purpose: "Logistics & order delivery" },
      { name: "Razorpay", purpose: "Payment processing" },
    ],
    contributions: [
      "Developed the customer-facing website and maintained the admin panel.",
      "Worked across frontend and backend integration for both surfaces.",
      "Built responsive e-commerce interfaces for product discovery and checkout.",
      "Integrated Razorpay payment workflows and Shiprocket logistics/delivery workflows.",
      "Built product, order, customer, and administrative management flows.",
      "Focused on performance, responsive design, and user experience throughout.",
      "Contributed to production deployment and ongoing maintenance.",
    ],
  },
  {
    id: "cryptoforce",
    index: "04",
    name: "CRYPTOFORCE",
    displayName: "Cryptoforce",
    tagline: "Where the power is in your hands.",
    category: "professional",
    url: "https://cryptoforce.in/",
    image: "/images/projects/cyptoforce.png",
    employer: "Cryptoforce",
    role: "Frontend Developer",
    period: "May 2024 — Present",
    accent: "#4C6FFF",
    accentSoft: "rgba(76, 111, 255, 0.14)",
    summary:
      "A cryptocurrency trading platform serving a high-frequency, high-volume user base — built for speed, clarity, and trust under load.",
    description: [
      "Cryptoforce is a crypto exchange platform where session time and trust directly translate into trading volume. My work centered on the trading-facing interfaces and the workflows that keep users oriented under fast-moving data.",
    ],
    stack: ["Next.js", "React.js", "Material UI", "API Integration", "State Management", "GitLab CI/CD", "Linux"],
    contributions: [
      "Built and optimized the Cryptoforce web platform using React.js and Material UI.",
      "Developed responsive trading-related interfaces across devices.",
      "Improved navigation and user workflows based on real customer feedback.",
      "Integrated frontend applications with backend APIs, working closely with the backend team.",
      "Optimized state management and frontend performance for a high-traffic platform.",
      "Shipped production features and fixes using GitLab CI/CD in Linux environments.",
    ],
    metrics: [
      { value: "150K+", label: "weekly active users" },
      { value: "25%", label: "increase in session time" },
      { value: "20%", label: "reduction in bounce rate" },
    ],
    metricsNote: "Metrics as reported internally at Cryptoforce during my time on the project.",
  },
  {
    id: "payonramp",
    index: "05",
    name: "PAYONRAMP",
    displayName: "PayOnRamp",
    tagline: "A trusted crypto onramp gateway for fiat-to-crypto flows.",
    category: "professional",
    url: "https://payonramp.com/",
    image: "/images/projects/payonramp.png",
    employer: "Cryptoforce",
    role: "Frontend Developer",
    period: "2024 — 2026",
    accent: "#8B7FE8",
    accentSoft: "rgba(139, 127, 232, 0.14)",
    summary:
      "A crypto-to-fiat payment gateway platform — Figma designs turned into production interfaces for businesses integrating crypto payments.",
    description: [
      "PayOnRamp gives businesses a way to accept both crypto and fiat through a single gateway. I translated design specs directly into working product, screen by screen, in close collaboration with the client.",
    ],
    stack: ["React.js", "Vue.js", "Node.js", "Figma", "GitLab", "Linux", "REST/API Integration"],
    contributions: [
      "Designed and implemented frontend interfaces based on client requirements.",
      "Converted Figma designs into responsive, production-ready interfaces.",
      "Developed multiple application screens across the platform.",
      "Integrated frontend workflows with backend services.",
      "Worked with both React.js and Vue.js depending on the surface.",
      "Maintained and updated production code in Linux environments.",
      "Resolved bugs and UI issues, improving UX based on customer feedback.",
      "Applied structured, data-structure-driven problem solving to development challenges.",
      "Collaborated through GitLab-based development workflows.",
    ],
  },
  {
    id: "terranovainfra",
    index: "06",
    name: "TERRANOVAINFRA",
    displayName: "TerranovaInfra",
    tagline: "Creating meaningful spaces — from land to living.",
    category: "professional",
    url: "https://terranovainfra.com/",
    image: "/images/projects/terranova.png",
    secondaryImage: {
      src: "/images/projects/map-layout.png",
      caption: "The actual interactive plot map, live on terranovainfra.com.",
    },
    employer: "Cryptoforce",
    role: "Full-Stack Developer",
    period: "2024 — 2026",
    accent: "#B08A5C",
    accentSoft: "rgba(176, 138, 92, 0.14)",
    caseStudy: true,
    summary:
      "A premium real-estate and land development platform, built largely single-handedly — UI/UX, frontend, backend, admin panel, and its flagship interactive plot map.",
    description: [
      "TerranovaInfra is a real-estate and land development company selling farmhouse and villa plots. I owned this project end to end — design, frontend, backend, admin tooling, and production delivery — with minimal external dependency.",
      "The centerpiece is an interactive plot map: a to-scale layout of the entire development where every plot is hoverable and shows live status — available, sold, or under mortgage — along with size, facing, and boundary measurements. It replaced static PDF layout sheets with something a buyer could actually explore.",
    ],
    stack: ["Next.js", "React.js", "Go", "REST APIs", "Admin Panel", "Interactive Maps", "UI/UX"],
    contributions: [
      "Designed the complete user experience and built the frontend architecture.",
      "Developed backend services in Go and integrated them with the frontend via REST APIs.",
      "Built the administrative workflows used to manage plots, listings, and status.",
      "Designed and implemented the interactive property visualization (plot map) described above.",
      "Focused on responsive design across desktop, tablet, and mobile.",
      "Handled performance and production-readiness for public launch.",
      "Managed the project from concept through implementation, largely single-handedly.",
    ],
  },
];

export const ACADEMIC_PROJECTS: Project[] = [
  {
    id: "secure-data-sharing",
    index: "07",
    name: "SECURE DATA SHARING",
    displayName: "Secure Data Sharing and Search for Cloud-Edge Collaborative Storage",
    tagline: "Major project — cloud-edge collaborative storage security.",
    category: "academic",
    role: "Researcher / Developer",
    period: "B.Tech Major Project",
    accent: "#7FA6C9",
    accentSoft: "rgba(127, 166, 201, 0.14)",
    summary:
      "A research-driven system for secure data sharing and search across cloud-edge collaborative storage.",
    description: [
      "Source material for this case study — the full project PDF — hasn't been supplied yet. The section below is a structural placeholder only; no technical claims (architecture, algorithms, encryption scheme, results) will be published here until the source document is provided and read.",
    ],
    stack: [],
    contributions: [],
    status: "pending-source",
  },
  {
    id: "email-security",
    index: "08",
    name: "EMAIL SECURITY",
    displayName: "Email Security Authentication System",
    tagline: "Minor project — secure email communication platform.",
    category: "academic",
    role: "Developer",
    period: "Jun 2024 — Jul 2024",
    accent: "#7FA6C9",
    accentSoft: "rgba(127, 166, 201, 0.14)",
    summary:
      "A secure email communication platform built to reduce unauthorized access and integrity risks during transmission.",
    description: [
      "Designed and developed a secure email communication platform using Java and JSP, aimed at preventing unauthorized access and reducing the risk of cyberattacks during transmission.",
    ],
    stack: ["Java", "JSP", "Eclipse IDE"],
    contributions: [
      "Designed and developed a secure email communication platform using Java and JSP.",
      "Implemented multi-level user authentication and email integrity checks to protect sensitive data in send/receive flows.",
      "Structured the project with JSP-based dynamic web pages using Eclipse IDE.",
      "Applied security-oriented mechanisms aimed at reducing risks such as injection attacks.",
    ],
    status: "live",
  },
];

export const ALL_PROJECTS = [...PROJECTS, ...ACADEMIC_PROJECTS];
