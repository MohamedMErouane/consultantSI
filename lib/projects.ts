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
};

export const projects: Project[] = [
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
    period: "06/2025 – 09/2025",
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
    featured: true,
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
    featured: true,
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
    slug: "web3-ecommerce-platform-stryve",
    title: "Web3 E-commerce Platform (Stryve Solution)",
    shortTitle: "Web3 e-commerce",
    period: "04/2024 – 07/2024",
    category: "Full-Stack / E-commerce",
    context: "Full-stack developer role at Stryve Solution, Agadir",
    role: "Full-stack developer",
    stack: ["Full-Stack", "Smart contracts", "Database design", "System design"],
    problem: "A client wanted an e-commerce platform where payments are secured by blockchain smart contracts.",
    solution:
      "Designed the platform's architecture, data model and business workflows, with transactions secured by smart contracts, and wrote the technical documentation.",
    impact: "Delivered the system design and documentation for a blockchain-backed e-commerce product.",
    overview:
      "At Stryve Solution I worked on the design of an e-commerce platform built on Web3: a classic online-shop flow where the payment step relies on smart contracts for security.",
    contributions: [
      "Designed the overall architecture of the platform.",
      "Modelled the database and the business workflows (catalogue, order, payment).",
      "Integrated smart-contract-secured transactions into the purchase flow.",
      "Wrote the technical documentation.",
    ],
    challenges: [
      {
        title: "Classic UX, new payment rails",
        text: "Shoppers expect a normal checkout; the design had to hide blockchain complexity behind a familiar flow.",
      },
    ],
    results: ["Architecture, data model, workflows and documentation delivered."],
    skills: ["System design", "Data modelling", "Smart contracts", "Technical writing"],
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
