// Project case studies. Each entry powers a card on /projects and its own page at /projects/[slug].
// Only facts that appear on the CV or were actually delivered — no invented metrics.

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  period: string;
  category: string;
  context: string; // where the work happened
  role: string;
  stack: string[];
  problem: string;
  solution: string;
  impact: string;
  overview: string;
  contributions: string[];
  challenges: { title: string; text: string }[];
  results: string[];
  skills: string[];
  featured?: boolean;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "procure-to-pay-redesign-odoo",
    title: "Procure-to-Pay Process Redesign on Odoo 17",
    shortTitle: "P2P redesign (Odoo)",
    period: "2026",
    category: "Consultant SI / ERP",
    context: "Personal consulting case study — fictional distributor 'Atlas Distribution'",
    role: "IS consultant & Odoo developer",
    stack: ["Odoo 17", "Python", "BPMN 2.0", "PostgreSQL", "Docker", "GitHub Actions"],
    problem:
      "Purchases were requested over WhatsApp, written in Excel and signed on paper by one director; bills were paid without checking what was received.",
    solution:
      "Ran a full consulting cycle — As-Is/To-Be BPMN, gap analysis, functional spec — then built an Odoo 17 module adding an approval matrix and a three-way-match control on vendor bills.",
    impact:
      "Every PO follows amount-based approval rules with an audit trail, and a bill that doesn't match the PO and the receipt can no longer be posted.",
    overview:
      "An end-to-end IS consulting engagement on the Procure-to-Pay process, run on a fictional Moroccan distributor. It goes from interviews and process models to a working, tested Odoo module and a change-management plan — the full path a Consultant SI follows on an ERP project.",
    contributions: [
      "Mapped the As-Is process in BPMN 2.0 and identified 6 pain points and their root causes.",
      "Ran a gap analysis of standard Odoo 17 vs the need, applying 'configure first, customise only where needed'.",
      "Designed the To-Be process with 7 business rules, a RACI and segregation of duties.",
      "Wrote the functional specification: 7 requirements, data model, security matrix, screens.",
      "Built the p2p_approval_matrix module: approval bands per amount, approval log with lead-time KPI, three-way match blocking bill posting, finance-manager exception approval with a written reason.",
      "Wrote a test plan of 15 scenarios with a traceability matrix — every scenario automated as an Odoo test.",
      "Produced an ADKAR change-management plan with go-live checklist and adoption KPIs.",
    ],
    challenges: [
      {
        title: "Customise as little as possible",
        text: "Odoo already has a single approval threshold. The module extends that mechanism instead of replacing the purchase flow, so it stays upgrade-friendly and falls back to standard behaviour when no matrix is set.",
      },
      {
        title: "A control people will accept",
        text: "Blocking bills can frustrate accounting, so every block explains the exact issue and there is a controlled, logged exception path for the finance manager.",
      },
    ],
    results: [
      "Complete deliverable set: scope & RACI, As-Is & gap analysis, To-Be, functional spec, test plan, change plan.",
      "Installable Odoo 17 module with approval matrix, approval analysis (pivot/graph) and three-way match.",
      "15 automated test scenarios traced to every requirement and business rule — 15 / 15 passing on Odoo 17.",
    ],
    skills: ["Business process analysis", "BPMN 2.0", "Gap analysis", "Functional specification", "Odoo development", "Change management"],
    featured: true,
    repoUrl: "https://github.com/MohamedMErouane/odoo-p2p-process-redesign",
  },
  {
    slug: "kubernetes-devops-platform",
    title: "Kubernetes Delivery Platform — CI/CD, IaC & Observability",
    shortTitle: "K8s DevOps platform",
    period: "2026",
    category: "DevOps / Cloud",
    context: "Personal project",
    role: "DevOps engineer",
    stack: ["Kubernetes", "Docker", "Terraform", "GitHub Actions", "Prometheus", "Grafana", "Node.js", "PostgreSQL"],
    problem:
      "Shipping a web app reliably needs more than code: repeatable infrastructure, automated testing, secure containers, safe rollouts and monitoring.",
    solution:
      "Built a production-style platform around a small URL-shortener app: hardened containers, Kustomize overlays, Terraform-provisioned cluster with ingress and monitoring, and a 5-stage GitHub Actions pipeline that deploys to a real Kubernetes cluster.",
    impact:
      "A pipeline designed to test, scan and deploy every push to Kubernetes, then restart the API under live traffic and fail if a single request errors — zero downtime proven, not assumed.",
    overview:
      "A delivery platform that takes a containerised app from git push to a running, monitored Kubernetes deployment. The application (Linkly, a URL shortener with a TypeScript API and PostgreSQL) is deliberately simple; the work is everything around it.",
    contributions: [
      "Wrote the API with health/readiness probes, Prometheus metrics and graceful SIGTERM shutdown, covered by integration tests against PostgreSQL.",
      "Built multi-stage, non-root Docker images and a Docker Compose setup for local development.",
      "Wrote Kubernetes manifests with Kustomize (dev / prod): rolling updates, HPA, PodDisruptionBudget, StatefulSet, Ingress.",
      "Hardened the cluster: restricted Pod Security Standard, read-only filesystems, dropped capabilities, default-deny NetworkPolicies.",
      "Provisioned the cluster with Terraform (kind + ingress-nginx, metrics-server, kube-prometheus-stack via Helm).",
      "Added observability as code: ServiceMonitor, alert rules linked to a runbook, Grafana dashboard.",
      "Built the CI/CD pipeline: tests, manifest validation, Terraform checks, Trivy image scan, GHCR publish, e2e deploy to kind with a zero-downtime check.",
    ],
    challenges: [
      {
        title: "Zero downtime, proven",
        text: "It takes four pieces working together — maxUnavailable 0, readiness probes, a preStop delay and graceful shutdown in the app — so the pipeline tests it under load instead of assuming it.",
      },
      {
        title: "Probes that don't make outages worse",
        text: "Liveness never checks the database: if Postgres goes down, pods leave the load balancer via readiness instead of being restarted in a loop.",
      },
    ],
    results: [
      "One command brings up the full platform locally (Terraform + kind).",
      "5-stage pipeline covering tests, validation, security scanning, publishing and real Kubernetes deployment.",
      "Architecture decisions and an on-call runbook documented in the repository.",
    ],
    skills: ["Kubernetes", "CI/CD", "Infrastructure as Code", "Container security", "Observability", "SRE practices"],
    featured: true,
    repoUrl: "https://github.com/MohamedMErouane/k8s-devops-platform",
  },
  {
    slug: "edutrack-school-management-platform",
    title: "EduTrack — School Management Platform (EtudiaLab)",
    shortTitle: "EduTrack",
    period: "04/2026 – 06/2026",
    category: "Full-Stack / AI Automation",
    context: "Internship at EtudiaLab, a Moroccan EdTech startup",
    role: "Sole architect and full-stack developer",
    stack: ["Django REST Framework", "Python", "React", "Vite", "PostgreSQL", "Docker", "CI/CD", "Figma", "UML"],
    problem:
      "A school needed one system to manage students, classes, attendance and day-to-day administration across staff, teachers and families.",
    solution:
      "Designed and built the whole architecture on my own: 3 web apps and 1 mobile app on a Django REST Framework back end with React + Vite front ends — from stakeholder interviews and UML models to Figma mockups and REST APIs.",
    impact:
      "Delivered the platform with tests, CI/CD and full technical and user documentation, plus AI-based workflows that automate internal tasks.",
    overview:
      "EduTrack is a school-management and attendance platform I designed and built end-to-end during my internship at EtudiaLab. I was the only developer on the project, so I owned every layer: understanding what the school needed, modelling it, designing the screens, building the APIs and the four applications, testing and documenting the result.",
    contributions: [
      "Ran requirement sessions with stakeholders and turned them into functional specifications and user stories.",
      "Modelled the system with UML (use-case, class and sequence diagrams) before writing code.",
      "Designed the user interfaces as Figma mockups and validated them with stakeholders.",
      "Built a single Django REST Framework back end exposing REST APIs to all clients.",
      "Developed 3 web applications (React + Vite) and 1 mobile application, each tailored to a different type of user.",
      "Set up AI-based automation workflows to streamline repetitive internal processes.",
      "Wrote tests and delivered technical and user documentation, working in Agile iterations with CI/CD.",
    ],
    challenges: [
      {
        title: "One back end, four clients",
        text: "Each application serves a different audience with its own permissions. Designing one consistent API and data model that serves all four without duplication was the core architecture decision.",
      },
      {
        title: "Owning every role at once",
        text: "As the only person on the project I had to switch between analyst, designer, developer and tester — the specs and UML diagrams kept the scope under control.",
      },
    ],
    results: [
      "Full platform delivered: 3 web apps + 1 mobile app on one shared back end.",
      "Complete deliverable set: specifications, UML diagrams, Figma mockups, tests, technical and user documentation.",
      "AI-driven workflows in place for internal process automation.",
    ],
    skills: ["System architecture", "Requirements gathering", "REST API design", "UML", "UI/UX in Figma", "Agile delivery"],
    featured: true,
  },
  {
    slug: "marsa-maroc-enterprise-applications",
    title: "Marsa Maroc — Enterprise Web Applications",
    shortTitle: "Marsa Maroc",
    period: "06/2023 – 08/2023",
    category: "Full-Stack — Port Authority",
    context: "Internship at Marsa Maroc, Agadir — Morocco's leading port operator",
    role: "Full-stack developer intern",
    stack: ["React.js", "NestJS", "TypeScript", "Prisma", "PostgreSQL", "Git"],
    problem:
      "Internal applications at a public port operator had to keep evolving while staying reliable for day-to-day operations.",
    solution:
      "Worked across the React.js front end and NestJS / Prisma / PostgreSQL back end, from functional discussion through code review to production release.",
    impact:
      "New features went live in production; work with developers and business teams focused on keeping the codebase maintainable as it grew.",
    overview:
      "During my summer internship at Marsa Maroc in Agadir, I joined the team that develops and maintains internal enterprise web applications. The work was real production work: features I built were reviewed, merged and released to users inside a large public organisation.",
    contributions: [
      "Developed and maintained features on enterprise web applications with React.js, NestJS, TypeScript, Prisma and PostgreSQL.",
      "Built responsive, cross-browser interfaces used by internal teams.",
      "Took part in code reviews and architecture discussions with the development team.",
      "Worked with business teams to understand needs before implementing them.",
      "Shipped features to production as part of a cross-functional team.",
    ],
    challenges: [
      {
        title: "Production quality bar",
        text: "Code had to pass review and keep a growing codebase maintainable — a very different standard from academic projects.",
      },
      {
        title: "Business context of a port operator",
        text: "Understanding operational processes well enough to build the right thing meant constant back-and-forth with non-technical users.",
      },
    ],
    results: [
      "Features delivered to production in a public-sector enterprise environment.",
      "Hands-on experience with a typed full-stack (TypeScript end to end) and team code-review workflows.",
    ],
    skills: ["TypeScript full-stack", "Code review", "Enterprise applications", "Working with business teams"],
  },
  {
    slug: "odoo-erp-deployment",
    title: "ERP Deployment on Odoo (Academic Project)",
    shortTitle: "Odoo ERP",
    period: "2025",
    category: "Business Analysis / ERP",
    context: "Academic project — ENSIASD engineering cycle",
    role: "Business analyst / functional consultant",
    stack: ["Odoo", "BPMN", "UML", "PostgreSQL", "Functional testing"],
    problem:
      "Design an ERP-oriented information system covering inventory, purchasing, sales and reporting for an academic case company.",
    solution:
      "Analyzed business workflows and modeled enterprise processes; designed the relational database, prepared functional specifications and executed functional test scenarios on Odoo.",
    impact:
      "Produced full user documentation and process diagrams to support system adoption — my reference project for functional / ERP consulting positions.",
    overview:
      "This project put me in the role of an ERP functional consultant: starting from how a company actually works, mapping its processes, configuring Odoo to support them, testing the result and preparing users for the change.",
    contributions: [
      "Mapped the purchasing, sales, inventory and reporting workflows of the case company.",
      "Modelled business processes in BPMN and the information system in UML.",
      "Designed the relational data model behind the solution.",
      "Wrote the functional specifications for the Odoo implementation.",
      "Prepared and executed test scenarios (recette) to validate the configuration.",
      "Produced user documentation and process diagrams to support adoption (change management).",
    ],
    challenges: [
      {
        title: "Fitting the tool to the process",
        text: "The goal was to support the company's real processes, not to bend them to default ERP screens — which meant documenting the As-Is first and deciding where to adapt.",
      },
      {
        title: "Adoption, not just configuration",
        text: "An ERP only succeeds if people use it, so documentation and process diagrams were treated as deliverables in their own right.",
      },
    ],
    results: [
      "Working ERP scope covering stocks, purchasing, sales and reporting.",
      "Full functional deliverables: process maps, specifications, test scenarios, user documentation.",
    ],
    skills: ["Odoo", "BPMN 2.0", "Functional specifications", "Testing (recette)", "Change management"],
  },
  {
    slug: "cybersecurity-regulatory-study-morocco-eu",
    title: "Cybersecurity Regulatory Comparative Study — Morocco / EU",
    shortTitle: "Cybersecurity study",
    period: "2025",
    category: "Audit & Compliance",
    context: "Academic research project — ENSIASD, under academic supervision",
    role: "Author — regulatory analysis",
    stack: ["Compliance", "Risk Analysis", "MCGL", "Documentation"],
    problem:
      "Compare Moroccan and European cybersecurity compliance frameworks for practitioners evaluating information-system compliance.",
    solution:
      "Authored a 14-page regulatory analysis report and a 21-page practical guide based on the MCGL methodology, structured around risk identification, internal control and documentation traceability.",
    impact:
      "Demonstrates analytical writing and regulatory synthesis — a reference piece for audit and IT-governance positions.",
    overview:
      "A two-document study comparing how Morocco and the European Union regulate cybersecurity, written for practitioners who need to assess whether an information system is compliant.",
    contributions: [
      "Researched and compared the Moroccan and EU cybersecurity regulatory frameworks.",
      "Wrote a 14-page regulatory analysis report.",
      "Wrote a 21-page practical guide using the MCGL methodology.",
      "Structured the guidance around risk identification, internal control and documentation traceability.",
    ],
    challenges: [
      {
        title: "From legal text to practice",
        text: "Regulation is written for lawyers; the guide had to turn it into steps an auditor or IT manager can actually follow.",
      },
    ],
    results: ["Two complete deliverables: a regulatory report (14 pages) and a practitioner guide (21 pages)."],
    skills: ["IT governance", "Risk analysis", "Compliance", "Analytical writing"],
  },
  {
    slug: "arcade-gaming-xrpl-44you",
    title: "Arcade Game with XRPL Blockchain Integration (44you Agency)",
    shortTitle: "XRPL arcade game",
    period: "12/2024 – 06/2026",
    category: "Web3 / Full-Stack (Freelance)",
    context: "Freelance client project through 44you Agency",
    role: "Freelance Web3 & full-stack developer",
    stack: ["Next.js", "NestJS", "Prisma", "Docker", "XRPL (XRP Ledger)"],
    problem: "An agency client needed a complete game built end-to-end with blockchain functionality on the XRP Ledger.",
    solution:
      "Developed the game itself alongside its XRPL integration, including a social/room system and an item/furniture system, with a scalable back end (NestJS, Prisma, Docker).",
    impact: "Delivered a client project independently under contract, from requirements to game logic to on-chain features.",
    overview:
      "A long-running freelance engagement where I built a complete game for a client of 44you Agency and connected it to the XRP Ledger. I ran the mission independently, from reading the requirements to delivering the finished product.",
    contributions: [
      "Built the game's core systems: a social and room system and an item and furniture system.",
      "Integrated the game with the XRPL (XRP Ledger) blockchain for on-chain features.",
      "Designed a scalable back end with NestJS, Prisma and Docker.",
      "Managed the engagement autonomously, from the client's requirements to delivery.",
    ],
    challenges: [
      {
        title: "Game state meets the blockchain",
        text: "Real-time game interactions and on-chain operations work at very different speeds; the architecture had to keep gameplay smooth while still recording what belongs on the ledger.",
      },
    ],
    results: ["Complete game and XRPL integration delivered to the agency's client."],
    skills: ["Blockchain integration", "Game systems", "Client management", "Autonomy"],
  },
  {
    slug: "memerace-solana-multiplayer",
    title: "MemeRace — Real-Time Multiplayer Racing on Solana",
    shortTitle: "MemeRace",
    period: "2025 – 2026",
    category: "Blockchain / Web3",
    context: "Personal project",
    role: "Solo developer",
    stack: ["Node.js", "PostgreSQL", "Redis", "Socket.io", "Docker", "Solana"],
    problem: "Explore real-time, on-chain competitive mechanics for a multiplayer racing game that players can trust.",
    solution:
      "Built a real-time multiplayer race game with WebSockets (Socket.io), a provably fair outcome mechanism (HMAC-SHA256) and Solana wallet integration, deployed in containers.",
    impact: "Independent deep-dive into real-time state synchronisation, verifiable fairness and blockchain architecture.",
    overview:
      "A personal project where players race in real time and connect their Solana wallets. The interesting part is trust: every race outcome is generated with a provably fair mechanism, so players can verify it wasn't manipulated.",
    contributions: [
      "Built the real-time multiplayer layer with Node.js and Socket.io.",
      "Implemented a provably fair outcome mechanism based on HMAC-SHA256.",
      "Integrated Solana wallets for player identity and transactions.",
      "Used PostgreSQL for persistence and Redis for fast shared state.",
      "Containerised the whole stack with Docker.",
    ],
    challenges: [
      {
        title: "Fairness players can verify",
        text: "Using committed server seeds and HMAC-SHA256 lets anyone check a race result after the fact instead of trusting the server.",
      },
      {
        title: "Keeping every client in sync",
        text: "Races are live, so all players must see the same state at the same time — Redis and WebSockets carry that shared state.",
      },
    ],
    results: ["Working real-time multiplayer game with verifiable outcomes and wallet integration."],
    skills: ["Real-time systems", "WebSockets", "Cryptographic fairness", "Redis", "Docker"],
  },
  {
    slug: "web3-ecommerce-platform",
    title: "Web3 E-commerce Platform (Abouelabbas Services)",
    shortTitle: "Web3 e-commerce",
    period: "06/2025 – 08/2025",
    category: "Full-Stack / Web3",
    context: "Internship at Abouelabbas Services, Marrakech",
    role: "Full-stack developer intern",
    stack: ["Next.js", "NestJS", "Prisma", "Docker", "GitHub Actions", "Ethereum", "MetaMask"],
    problem: "Build a modern online store where customers can also pay in cryptocurrency, securely.",
    solution:
      "Designed and developed the full application — Next.js front end, NestJS back end with Prisma — with Ethereum payments through MetaMask and a smart contract, role management, Docker and a GitHub Actions CI/CD pipeline.",
    impact: "Delivered and defended a complete e-commerce application combining a classic shopping flow with Web3 payments.",
    overview:
      "During my internship at Abouelabbas Services I designed and built a complete e-commerce web application that integrates blockchain and Web3: customers shop as on any online store, and can pay with Ethereum through their MetaMask wallet.",
    contributions: [
      "Built the front end with Next.js and the back end with NestJS and Prisma.",
      "Integrated cryptocurrency payments with Ethereum via MetaMask and a smart contract.",
      "Implemented role management and applied security best practices.",
      "Containerised the application with Docker and set up CI/CD with GitHub Actions.",
      "Kept a clean, scalable architecture following modern development standards.",
    ],
    challenges: [
      {
        title: "Classic UX, new payment rails",
        text: "Shoppers expect a normal checkout; the design had to hide blockchain complexity behind a familiar flow.",
      },
    ],
    results: ["Complete application delivered and defended at the end of the internship."],
    skills: ["Full-stack development", "Web3 integration", "Smart contracts", "DevOps (Docker, CI/CD)"],
  },
  {
    slug: "enterprise-management-platform",
    title: "Enterprise Web Management Platform",
    shortTitle: "Management platform",
    period: "2025 – 2026",
    category: "Full-Stack",
    context: "Personal project",
    role: "Full-stack developer",
    stack: ["React", "Node.js", "PostgreSQL", "REST APIs"],
    problem: "Give a business authentication, reporting dashboards and structured data management in one platform.",
    solution: "Developed a full-stack business management platform with APIs, relational database structures and administrative workflows.",
    impact: "A reusable authentication + reporting foundation adaptable to other business contexts.",
    overview:
      "A business-management platform built as a reusable base: secure login, administrative workflows and reporting dashboards on top of a relational database.",
    contributions: [
      "Designed the REST APIs and relational data structures.",
      "Implemented authentication and role-based administrative workflows.",
      "Built reporting dashboards for business data.",
    ],
    challenges: [
      {
        title: "Built to be reused",
        text: "Keeping authentication, data management and reporting generic enough to adapt to a new business without rewriting.",
      },
    ],
    results: ["Reusable full-stack foundation for business applications."],
    skills: ["API design", "Authentication", "Dashboards", "Relational modelling"],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
