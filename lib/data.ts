export const siteUrl = "https://consultant-si.vercel.app";

export const profile = {
  name: "Mohamed Merouane",
  roles: ["Consultant SI", "Business Analyst", "Software Engineer"],
  location: "Morocco",
  email: "mohamedmerouanemed@gmail.com",
  linkedin: "https://linkedin.com/in/mohamed-merouane-9a3b18277",
  github: "https://github.com/MohamedMErouane",
  site: "consultant-si.vercel.app",
  lastUpdated: "Sep 2026",
  tagline:
    "Final-year Information Systems Engineering student working on both sides of a project: analyzing business processes and requirements, and developing the applications that support them.",
  summary:
    "Final-year engineering student in Management & Governance of Information Systems at ENSIASD. Experience spans full-stack development, enterprise information systems, ERP concepts, business process modeling, functional analysis, and software engineering. Currently seeking a Final Year Internship (PFE) starting January 2027, aiming to contribute to digital transformation, business analysis, and IT consulting engagements — with hands-on experience in React, Django, NestJS and Java (Android).",
};

export const targetCompanies = [
  "Wavestone", "Formind", "Forvis Mazars", "KPMG", "Deloitte", "Capgemini", "Sopra Steria",
];

export const education = [
  {
    school: "ENSIASD — École Nationale Supérieure de l'Intelligence Artificielle et des Sciences des Données",
    degree: "Engineering Degree — Management & Governance of Information Systems",
    period: "2024 – Present",
    location: "Morocco",
    details: [
      "Relevant coursework: ERP Systems, Business Process Management, Information Systems Governance, Change Management, Database Systems, Software Engineering.",
      "Academic project: ERP-oriented information system covering inventory, purchasing, sales and reporting processes.",
    ],
  },
  {
    school: "École Supérieure de Technologie (EST) Essaouira",
    degree: "University Diploma of Technology (DUT) — Computer Science",
    period: "2022 – 2024",
    location: "Essaouira, Morocco",
    details: [],
  },
];

export const experience = [
  {
    company: "EtudiaLab",
    role: "Full-Stack & AI Automation Intern",
    period: "04/2026 – 06/2026",
    location: "Morocco",
    bullets: [
      "Developed full-stack features using React and Django for an EdTech school-management platform.",
      "Participated in requirements analysis, functional testing, documentation, and stakeholder collaboration.",
      "Implemented AI and browser-automation workflows while following CI/CD and Agile practices.",
    ],
    tags: ["React", "Django", "PostgreSQL", "Docker", "Agile"],
  },
  {
    company: "Marsa Maroc — Port Authority",
    role: "Full-Stack Developer Intern",
    period: "06/2025 – 09/2025",
    location: "Agadir, Morocco",
    bullets: [
      "Built and maintained enterprise applications using React.js, NestJS, TypeScript, Prisma and PostgreSQL.",
      "Participated in code reviews, functional discussions and production feature delivery.",
      "Collaborated with multidisciplinary teams to improve maintainability and scalability.",
    ],
    tags: ["React.js", "NestJS", "TypeScript", "Prisma", "PostgreSQL"],
  },
  {
    company: "Stryve Solution",
    role: "Full-Stack Developer",
    period: "04/2024 – 07/2024",
    location: "Agadir, Morocco",
    bullets: [
      "Developed a full-stack e-commerce platform, participating in system design, database modeling and business-workflow implementation.",
      "Integrated secure transaction mechanisms and contributed to technical documentation.",
    ],
    tags: ["Full-Stack", "E-commerce", "System Design"],
  },
  {
    company: "Flawko",
    role: "Mobile Developer Intern",
    period: "09/2023 – 12/2023",
    location: "Marrakech, Morocco",
    bullets: [
      "Developed Android applications in Java and collaborated with design teams to improve user experience.",
    ],
    tags: ["Android", "Java", "UX Collaboration"],
  },
];

export const consultingCompetencies = [
  { label: "Business Process Analysis", detail: "As-Is / To-Be mapping, BPMN 2.0 notation, gap identification." },
  { label: "Requirements Engineering", detail: "Elicitation, functional & non-functional requirements, user stories." },
  { label: "Functional Specifications", detail: "Cahier des charges, business requirements documents, use cases." },
  { label: "UML & BPMN", detail: "Process, class, sequence and use-case modeling for functional design." },
  { label: "ERP Concepts", detail: "Inventory, purchasing, sales and reporting process design (academic ERP project)." },
  { label: "IT Governance", detail: "Information systems governance frameworks and coursework at ENSIASD." },
  { label: "Change Management", detail: "Conduite du changement coursework at ENSIASD; user documentation written to support system adoption." },
  { label: "Stakeholder Management", detail: "Collaboration with business stakeholders during the EtudiaLab and Marsa Maroc internships." },
  { label: "Agile / Scrum", detail: "Sprint-based delivery and CI/CD practices at EtudiaLab and Marsa Maroc." },
  { label: "Risk & Compliance Analysis", detail: "Risk identification, internal control and regulatory analysis (Morocco / EU cybersecurity study)." },
];

export const engineeringSkills = {
  Programming: ["TypeScript", "JavaScript", "Java", "Python"],
  Backend: ["Django", "NestJS", "Node.js", "REST APIs", "Prisma"],
  Frontend: ["React.js", "Next.js", "Tailwind CSS"],
  Databases: ["PostgreSQL", "Database Design", "SQL"],
  Cloud_DevOps: ["Docker", "Git", "GitHub", "CI/CD", "Linux"],
  Business: ["Business Process Modeling", "BPMN 2.0", "UML", "Functional Analysis", "ERP Concepts", "Information Systems"],
};

export const projects = [
  {
    title: "ERP Management System Project",
    period: "2025",
    category: "Business Analysis / ERP",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
    problem: "Design an ERP-oriented information system covering inventory, purchasing, sales and reporting for an academic case company.",
    solution:
      "Analyzed business workflows and modeled enterprise processes using information systems methodologies; designed relational databases, prepared functional specifications and executed functional testing scenarios.",
    impact: "Produced full user documentation and process diagrams to support system adoption — used as the reference project for functional/consulting positioning.",
    featured: true,
  },
  {
    title: "Cybersecurity Regulatory Comparative Study — Morocco / EU",
    period: "2025",
    category: "Audit & Compliance",
    stack: ["Compliance", "Risk Analysis", "MCGL", "Documentation"],
    problem: "Compare Moroccan and European cybersecurity compliance frameworks for practitioners evaluating information system compliance.",
    solution:
      "Authored a 14-page regulatory analysis report and a 21-page practical guide (MCGL methodology — Moroccan cybersecurity governance framework), structured around risk identification, internal control and documentation traceability — under academic supervision.",
    impact: "Used as a reference portfolio asset for auditor/governance positioning; demonstrates analytical writing and regulatory synthesis skills.",
    featured: true,
  },
  {
    title: "Enterprise Web Management Platform",
    period: "2025 – 2026",
    category: "Full-Stack",
    stack: ["React", "Node.js", "PostgreSQL"],
    problem: "Provide a business with authentication, reporting dashboards and structured data management in one platform.",
    solution: "Developed a full-stack business management platform with scalable APIs, relational database structures and administrative workflows.",
    impact: "Delivered a reusable authentication + reporting dashboard foundation adaptable to other business contexts.",
    featured: false,
  },
  {
    title: "EtudiaLab — EdTech School Management Platform",
    period: "2026",
    category: "Full-Stack / AI Automation",
    stack: ["React", "Django", "PostgreSQL", "Docker"],
    problem: "A school-management product needed new features, automation of repetitive internal tasks, and a dependable release process.",
    solution: "Took features from requirement to release on a React front end and Django back end, wrote test scenarios, and set up AI-assisted and browser-automation workflows.",
    impact: "Features reached production through the team's Agile sprints and CI/CD pipeline, with stakeholders reviewing each increment.",
    featured: true,
  },
  {
    title: "MemeRace",
    period: "2026",
    category: "Blockchain / Web3",
    stack: ["Solana", "Web3", "Real-time multiplayer"],
    problem: "Explore real-time, on-chain competitive mechanics for a multiplayer betting game.",
    solution: "Designed and built a Solana-based multiplayer betting game with real-time race mechanics.",
    impact: "Independent deep-dive into blockchain architecture and multiplayer state synchronization, beyond the standard full-stack curriculum.",
    featured: false,
  },
  {
    title: "Arcade Gaming Platform — Development & Blockchain Integration (Client Project, 44you Agency)",
    period: "12/2024 – 06/2026",
    category: "Web3 / Full-Stack (Freelance)",
    stack: ["Next.js", "NestJS", "Prisma", "Docker", "XRPL"],
    problem: "An agency client needed a full-stack arcade gaming platform built end-to-end with blockchain functionality.",
    solution:
      "Developed the game itself alongside its XRPL (XRP Ledger) integration, including a social/room system and an item/furniture system, with a scalable backend architecture (NestJS, Prisma, Docker).",
    impact: "Delivered a client project independently under contract, from game logic to blockchain integration.",
    featured: false,
  },
  {
    title: "Marsa Maroc Enterprise Applications",
    period: "2025",
    category: "Full-Stack — Port Authority",
    stack: ["React.js", "NestJS", "TypeScript", "Prisma", "PostgreSQL"],
    problem: "Internal applications at a public port operator had to keep evolving while staying reliable for day-to-day operations.",
    solution: "Worked across the React.js front end and NestJS / Prisma / PostgreSQL back end, from functional discussion through code review to production release.",
    impact: "New features went live in production; work with developers and business teams focused on keeping the codebase maintainable as it grew.",
    featured: false,
  },
];

export const certifications: { name: string; issuer: string; year: string; status: "planned" | "in-progress" | "completed" }[] = [
  { name: "Odoo Functional Consultant — self-paced training", issuer: "Odoo", year: "2026", status: "in-progress" },
  { name: "ITIL 4 Foundation", issuer: "AXELOS / PeopleCert", year: "2027", status: "planned" },
  // Additional certifications can be appended here as they are completed.
];

export const coreAreas = [
  "Business Analysis", "Full-Stack Development", "ERP & BPMN", "Databases", "Docker & CI/CD", "Stakeholder Communication",
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/education", label: "Education" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
];
