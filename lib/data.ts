export const profile = {
  name: "Mohamed Merouane",
  roles: ["Consultant SI", "Business Analyst", "Software Engineer"],
  location: "Morocco",
  email: "mohamedmerouanemed@gmail.com",
  phone: "+212 771 436 827",
  linkedin: "https://linkedin.com/in/mohamed-merouane-9a3b18277",
  github: "https://github.com/MohamedMErouane",
  site: "med-merouane.vercel.app",
  tagline:
    "Final-year Information Systems Engineering student bridging functional consulting and full-stack engineering — built to analyze how organizations work, then build the systems that run them.",
  summary:
    "Final-year engineering student in Management & Governance of Information Systems at ENSIASD. Experience spans full-stack development, enterprise information systems, ERP concepts, business process modeling, functional analysis, and software engineering. Currently seeking a Final Year Internship (PFE) starting January 2027, aiming to contribute to digital transformation, business analysis, and IT consulting engagements — with a parallel foundation in Java/Spring Boot and modern full-stack engineering.",
};

export const targetCompanies = [
  "Capgemini", "CGI", "Inetum", "NTT DATA", "Deloitte", "EY", "PwC",
  "Sopra Steria", "Devoteam", "Oracle", "BCG", "Banque Centrale Populaire", "Accenture",
];

export const education = [
  {
    school: "ENSIASD — École Nationale Supérieure de l'Intelligence Artificielle et des Sciences des Données",
    degree: "Engineering Degree — Management & Governance of Information Systems",
    period: "2024 – Present",
    location: "Morocco",
    details: [
      "Relevant coursework: ERP Systems, Business Process Management, Information Systems Governance, Database Systems, Software Engineering.",
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
  { label: "Digital Transformation", detail: "Digitizing manual, paper-based processes into structured systems." },
  { label: "Stakeholder Management", detail: "Client-facing collaboration across EtudiaLab and Marsa Maroc engagements." },
  { label: "Agile / Scrum", detail: "Sprint-based delivery, CI/CD practices across internships." },
  { label: "Risk & Architecture Thinking", detail: "Scalable API and database architecture across enterprise apps." },
];

export const engineeringSkills = {
  Programming: ["TypeScript", "JavaScript", "Java", "Python"],
  Backend: ["Django", "NestJS", "Node.js", "REST APIs", "Prisma"],
  Frontend: ["React.js", "Next.js", "Tailwind CSS"],
  Databases: ["PostgreSQL", "Database Design", "SQL"],
  Cloud_DevOps: ["Docker", "Git", "GitHub", "CI/CD", "Linux"],
  Business: ["Business Process Modeling", "Functional Analysis", "ERP Concepts", "Information Systems"],
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
    title: "Enterprise Web Management Platform",
    period: "2025 – 2026",
    category: "Full-Stack",
    stack: ["React", "Node.js", "PostgreSQL"],
    problem: "Provide a business with authentication, reporting dashboards and structured data management in one platform.",
    solution: "Developed a full-stack business management platform with scalable APIs, relational database structures and administrative workflows.",
    impact: "Delivered a reusable authentication + reporting dashboard foundation adaptable to other business contexts.",
    featured: true,
  },
  {
    title: "EtudiaLab — EdTech School Management Platform",
    period: "2026",
    category: "Full-Stack / AI Automation",
    stack: ["React", "Django", "PostgreSQL", "Docker"],
    problem: "A Moroccan EdTech startup needed full-stack features, AI-assisted automation, and reliable CI/CD delivery for its school-management product.",
    solution: "Built features end-to-end with React/Django, contributed to requirements analysis and functional testing, and implemented browser-automation workflows.",
    impact: "Shipped production features under Agile / CI/CD discipline in direct collaboration with stakeholders.",
    featured: true,
  },
  {
    title: "MemeRace",
    period: "Independent Project",
    category: "Blockchain / Web3",
    stack: ["Solana", "Web3", "Real-time multiplayer"],
    problem: "Explore real-time, on-chain competitive mechanics for a multiplayer betting game.",
    solution: "Designed and built a Solana-based multiplayer betting game with real-time race mechanics.",
    impact: "Independent deep-dive into blockchain architecture and multiplayer state synchronization, beyond the standard full-stack curriculum.",
    featured: false,
  },
  {
    title: "Blockchain Arcade Gaming Platform",
    period: "Independent Project",
    category: "Blockchain / Web3",
    stack: ["Web3", "Smart Contracts", "Gaming"],
    problem: "Build a platform bringing classic arcade-style games on-chain.",
    solution: "Developed a blockchain-based arcade gaming platform exploring smart-contract game logic and on-chain assets.",
    impact: "Second independent Web3 project, reinforcing blockchain architecture skills outside coursework.",
    featured: false,
  },
  {
    title: "Marsa Maroc Enterprise Applications",
    period: "2025",
    category: "Full-Stack — Port Authority",
    stack: ["React.js", "NestJS", "TypeScript", "Prisma", "PostgreSQL"],
    problem: "A public port-authority organization needed maintainable, scalable enterprise applications delivered under strict reliability requirements.",
    solution: "Built and maintained applications end-to-end, took part in code reviews and functional discussions, and delivered features into production.",
    impact: "Collaborated across multidisciplinary teams to improve maintainability and scalability in a public-sector, governance-heavy environment.",
    featured: false,
  },
];

export const certifications: { name: string; issuer: string; year: string; status: "planned" | "in-progress" | "completed" }[] = [
  { name: "Odoo Functional Consultant — self-paced training", issuer: "Odoo", year: "2026", status: "in-progress" },
  { name: "ITIL 4 Foundation", issuer: "AXELOS / PeopleCert", year: "2026", status: "planned" },
  { name: "BPMN 2.0 Professional Modeling", issuer: "Self-study, applied in academic ERP project", year: "2026", status: "planned" },
  // Additional certifications can be appended here as they are completed.
];

export const skillRadar = [
  { label: "Business Analysis", value: 82 },
  { label: "Full-Stack Dev", value: 88 },
  { label: "ERP / BPMN", value: 75 },
  { label: "Databases", value: 80 },
  { label: "Cloud / DevOps", value: 65 },
  { label: "Stakeholder Comm.", value: 78 },
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
