export const siteUrl = "https://www.mohamedmerouane.me";

export const profile = {
  name: "Mohamed Merouane",
  roles: ["Business Analyst", "Consultant SI / ERP", "Full-Stack Engineer"],
  location: "Taroudant, Morocco",
  mobility: "Open to relocation — Morocco & Europe",
  email: "mohamedmerouanemed@gmail.com",
  phone: "+212 771 436 827",
  linkedin: "https://linkedin.com/in/mohamedmerouane",
  github: "https://github.com/MohamedMErouane",
  site: "mohamedmerouane.me",
  lastUpdated: "Oct 2026",
  tagline:
    "I work on both sides of a project: understanding the business process and its requirements, then building and shipping the application that supports it.",
  summary:
    "Final-year engineering student in Management & Governance of Information Systems at ENSIASD, with five professional experiences: production enterprise web apps at a public port authority, a full school-management platform built end-to-end, blockchain integrations and AI-driven automation. I combine business analysis (requirements, BPMN/UML, functional specifications, ERP) with full-stack development (React, Next.js, TypeScript, Node.js, NestJS, Django, Docker). Seeking a 6-month PFE internship from January 2027 in IS consulting, business analysis or software engineering.",
};

// Organisations I've delivered work for — shown as a credibility strip on the homepage.
export const workedWith = ["Marsa Maroc", "EtudiaLab", "44you Agency", "Stryve Solution", "Flawko"];

export const highlights = [
  { value: 5, suffix: "", label: "Professional experiences" },
  { value: 4, suffix: "", label: "Apps built solo at EtudiaLab" },
  { value: 6, suffix: "", label: "Certifications earned" },
];

// The way I run a project — mirrors a consulting engagement from need to adoption.
export const approach = [
  { step: "01", title: "Understand", text: "Interview stakeholders, map the As-Is process (BPMN) and pin down the real business need." },
  { step: "02", title: "Specify", text: "Turn the need into functional specs, user stories, UML models and Figma mockups the team can build from." },
  { step: "03", title: "Build", text: "Develop the solution full-stack — React / Next.js front end, NestJS or Django APIs, PostgreSQL." },
  { step: "04", title: "Ship & adopt", text: "Test, containerise and deploy with CI/CD, then write the documentation that gets users on board." },
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
      "Designed and built on my own the full architecture of EduTrack, a school-management platform: 3 web apps and 1 mobile app (Django REST Framework back end, React + Vite front end, REST APIs).",
      "Gathered requirements with stakeholders and delivered Figma mockups, UML diagrams, functional specifications, tests and technical / user documentation.",
      "Built AI-based automation workflows to streamline internal processes, working in Agile with CI/CD.",
    ],
    tags: ["Django REST", "React", "Vite", "PostgreSQL", "Docker", "Figma", "Agile"],
  },
  {
    company: "44you Agency",
    role: "Web3 & Blockchain Developer (Freelance)",
    period: "12/2024 – 06/2026",
    location: "Remote",
    bullets: [
      "Developed a complete game for an agency client and integrated it with the XRP Ledger (XRPL) blockchain: social and room system, items and furniture, on-chain features.",
      "Ran the engagement independently, from requirements to delivery.",
    ],
    tags: ["XRPL", "Blockchain", "Game Development", "Freelance"],
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
  Programming: ["TypeScript", "JavaScript", "Python", "Java", "SQL"],
  Backend: ["Node.js", "NestJS", "Express.js", "Django", "Django REST Framework", "REST APIs", "WebSocket (Socket.io)"],
  Frontend: ["React.js", "Next.js", "Tailwind CSS", "Vite", "HTML5 / CSS3"],
  Databases: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "Relational data modeling"],
  Cloud_DevOps: ["Docker", "Kubernetes", "Kustomize", "Terraform", "Helm", "GitHub Actions (CI/CD)", "Prometheus / Grafana", "AWS", "Linux"],
  Security_AI: ["SSO", "OAuth 2.0", "OpenID Connect", "LLM integration", "AI-driven automation"],
  Business: ["BPMN 2.0", "UML", "Functional Analysis", "Odoo / ERP", "Power BI", "Figma", "Scrum / Kanban"],
};

export { projects } from "./projects";

export const certifications: { name: string; issuer: string; year: string; status: "planned" | "in-progress" | "completed" }[] = [
  { name: "Meta Front-End Developer", issuer: "Meta · Coursera", year: "", status: "completed" },
  { name: "Meta Back-End Developer", issuer: "Meta · Coursera", year: "", status: "completed" },
  { name: "IBM Blockchain Foundation Developer", issuer: "IBM", year: "", status: "completed" },
  { name: "IBM Blockchain Essentials", issuer: "IBM", year: "", status: "completed" },
  { name: "Blockchain Basics", issuer: "University at Buffalo", year: "", status: "completed" },
  { name: "Bitcoin and Cryptocurrency Technologies", issuer: "Princeton University", year: "", status: "completed" },
  { name: "Odoo Functional Consultant — self-paced training", issuer: "Odoo", year: "2026", status: "in-progress" },
  { name: "ITIL 4 Foundation", issuer: "AXELOS / PeopleCert", year: "2027", status: "planned" },
];

export const coreAreas = [
  "Business Analysis", "Full-Stack Development", "ERP & BPMN", "Databases", "Docker & CI/CD", "Stakeholder Communication",
];

// Main navigation — kept short so recruiters see the essentials at a glance.
export const nav = [
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Every route (sitemap + footer).
export const allRoutes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/education", label: "Education" },
  { href: "/certifications", label: "Certifications" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];
