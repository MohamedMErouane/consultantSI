// Project case studies. Each entry powers a card on /projects and its own page at /projects/[slug].
// Only facts that appear on the CV or were actually delivered — no invented metrics.
import type { Media } from "./media";

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
  media?: Media[]; // the item marked `thumb` (or the first) is the card image
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
    media: [
      { src: "/projects/procure-to-pay-redesign-odoo/bpmn-to-be.webp", width: 1800, height: 690, wide: true, alt: "To-Be Procure-to-Pay process modelled in BPMN 2.0", caption: "To-Be process (BPMN 2.0): approval by amount band, three-way match before a bill can be posted, and a finance-manager exception path." },
      { src: "/projects/procure-to-pay-redesign-odoo/three-way-match-exception.webp", width: 1800, height: 1075, thumb: true, alt: "Odoo vendor bill blocked by a three-way match exception", caption: "A vendor bill blocked by the three-way match: unit price 7.5% above the PO, and 200 pallets billed for 150 received." },
      { src: "/projects/procure-to-pay-redesign-odoo/po-waiting-director-approval.webp", width: 1800, height: 925, alt: "Odoo purchase order waiting for Purchase Director approval", caption: "A $174,800 order (Odoo demo company) falls in Band C, so only a Purchase Director can approve it." },
      { src: "/projects/procure-to-pay-redesign-odoo/approval-log-lead-time.webp", width: 1800, height: 842, alt: "Approval log on an Odoo purchase order with approval lead time", caption: "Every approval is logged with its band, approver and lead time, so the bottleneck can be measured." },
      { src: "/projects/procure-to-pay-redesign-odoo/approval-matrix.webp", width: 1800, height: 300, wide: true, alt: "Configurable approval matrix in Odoo", caption: "The approval matrix is configuration, not code: one approver group per amount band." },
      { src: "/projects/procure-to-pay-redesign-odoo/bpmn-as-is.webp", width: 1800, height: 619, wide: true, alt: "As-Is Procure-to-Pay process modelled in BPMN 2.0", caption: "As-Is process (BPMN 2.0), mapped before the redesign." },
    ],
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
    media: [
      { src: "/projects/kubernetes-devops-platform/architecture.webp", width: 1800, height: 1080, wide: true, thumb: true, alt: "Architecture of the Linkly Kubernetes platform and its CI/CD pipeline", caption: "Request path, monitoring and the CI/CD pipeline that validates every push." },
      { src: "/projects/kubernetes-devops-platform/linkly-app.webp", width: 1160, height: 900, alt: "Linkly URL shortener web interface listing short links and click counts", caption: "Linkly, the demo workload: a URL shortener backed by PostgreSQL, with click counts." },
    ],
  },
  {
    slug: "edutrack-school-management-platform",
    title: "EduTrack — Attendance Management for a School Platform (EtudiaLab)",
    shortTitle: "EduTrack",
    period: "05/2026 – 07/2026",
    category: "Architecture / Full-Stack",
    context: "8-week internship at EtudiaLab, a Moroccan EdTech startup",
    role: "Technical architect and sole full-stack developer",
    stack: ["Django 4.2", "Django REST Framework", "SimpleJWT", "React 18", "Vite", "PostgreSQL", "Docker Compose", "GitHub Spec Kit", "Figma", "draw.io"],
    problem:
      "EtudiaLab needed a working prototype of its school-management platform, with absence management at its core: teachers record attendance, parents are alerted, absences get justified, and the school sees which students are at risk.",
    solution:
      "I designed the architecture and built the prototype alone: three role-based React apps (school, teacher, admin) plus a mobile app for students and parents, on a Django REST back end of 13 apps, 16 data models and 20+ endpoints, all started with one Docker Compose command.",
    impact:
      "Delivered in 8 weekly sprints: 7 EduTrack screens taken from Figma mockups to working code, with weekly progress reports to my supervisor.",
    overview:
      "EduTrack is the attendance-management module of EtudiaLab's school platform. During my internship I was responsible for the whole technical side of the prototype: the architecture and data model, the draw.io diagrams and Figma mockups, the Django REST API and the React interfaces for teachers, students, parents and school administrators.",
    contributions: [
      "Designed the architecture first (week 1): entity-relationship model, API contract, UML diagrams (use case, class, sequence, activity, state, deployment, data flow) in draw.io and 7 screens in Figma with a small design system.",
      "Compared four ways to add video meetings (external link, Zoom / Google Meet API, in-house WebRTC, WebSockets) on effort, data ownership and deployment, and recommended one option for the prototype and one for production.",
      "Worked spec-first with GitHub Spec Kit: each feature went from a written specification to a technical plan and a task list before AI-assisted implementation, so the specs stayed the source of truth.",
      "Built the back end with Django REST Framework: 13 Django apps and 16 models, JWT authentication with role-based permissions, and 20+ REST endpoints tested with Postman.",
      "Built the teacher side: a dashboard with daily sessions and alerts, an attendance sheet (present / absent / late, with each student's running absence count) and a weekly class report with PDF and CSV export.",
      "Built the student and parent mobile app: attendance history, alerts, and a 4-step wizard to justify an absence with a reason and an uploaded document, which the teacher then approves or rejects.",
      "Built the school-admin view: attendance by class, at-risk students and one-click notification of their parents.",
      "Automated notifications with Django signals, so recording an absence or reviewing a justification notifies the right people without coupling the modules.",
      "Containerised the stack with Docker Compose (front end, API, PostgreSQL) and delivered a weekly report to my supervisor.",
    ],
    challenges: [
      {
        title: "Notifications without coupling",
        text: "Absences, justifications and meetings all needed to notify users. I used Django post_save signals and a single Notification model with a generic foreign key, so a new trigger never touches existing code.",
      },
      {
        title: "Data integrity",
        text: "Recording the same student twice for the same session had to be impossible, so I enforced a unique constraint (session, student, date) in the database rather than only in the interface.",
      },
      {
        title: "One platform, four audiences",
        text: "Teachers, students, parents and school admins each see a different app. The JWT carries the role, the React routes are protected per role, and every endpoint checks permissions again on the server.",
      },
      {
        title: "A complex form on a phone",
        text: "Justifying an absence needs a choice, a text and a file. Splitting it into a step-by-step wizard, with 'Next' disabled until a step is complete, kept it usable on mobile.",
      },
    ],
    results: [
      "7 screens delivered from mockup to code: teacher dashboard, attendance sheet, class report, student/parent mobile views, justification wizard and school-admin overview.",
      "Back end of 13 Django apps, 16 models and 20+ documented REST endpoints, started in one command with Docker Compose.",
      "Next steps I documented: real-time updates with WebSockets, server-side PDF generation and an automated test suite.",
    ],
    skills: ["Software architecture", "Data modelling", "REST API design", "Role-based security", "UI/UX in Figma", "Autonomy"],
    media: [
      { src: "/projects/edutrack-school-management-platform/uml-use-case.webp", width: 2020, height: 1330, wide: true, thumb: true, alt: "EduTrack UML use-case diagram with teacher, student, parent and admin actors", caption: "Use cases (UML): 17 use cases across teachers, students, parents, school admins and EtudiaLab admins." },
      { src: "/projects/edutrack-school-management-platform/uml-class.webp", width: 1360, height: 1430, alt: "EduTrack UML class diagram", caption: "Class diagram: users, schools, timetable, attendance, justifications, notifications and parent accounts." },
      { src: "/projects/edutrack-school-management-platform/uml-state.webp", width: 1060, height: 850, alt: "UML state diagram of an absence lifecycle", caption: "Lifecycle of an attendance record: not recorded → present / late / absent → justified or refused." },
      { src: "/projects/edutrack-school-management-platform/uml-deployment.webp", width: 1550, height: 1190, alt: "EduTrack deployment diagram with Docker Compose", caption: "Deployment: React + Vite front end, Django REST API and PostgreSQL as three Docker Compose services." },
      { src: "/projects/edutrack-school-management-platform/uml-dfd.webp", width: 1559, height: 1200, alt: "EduTrack level-1 data flow diagram", caption: "Data flows (DFD level 1) between teachers, students, parents, the school admin and the data stores." },
      { src: "/projects/edutrack-school-management-platform/meetings-solution-analysis.webp", width: 1800, height: 1434, wide: true, alt: "Comparison of four communication solutions for the meetings feature", caption: "Decision analysis for the meetings feature: 4 options compared on effort, data ownership and Docker compatibility, with a recommendation for the prototype and for production." },
    ],
    featured: true,
  },
  {
    slug: "studyhub-collaborative-study-platform",
    title: "StudyHub — Collaborative Study Platform (DUT final-year project)",
    shortTitle: "StudyHub",
    period: "2024",
    category: "Full-Stack / Real-time",
    context: "DUT final-year project (PFE) at EST Essaouira, team of two",
    role: "Front-end developer, video rooms and real-time chat (team of two)",
    stack: ["Next.js", "React", "TypeScript", "NestJS", "PostgreSQL", "Prisma", "Socket.io", "WebRTC (PeerJS)", "JWT", "Chart.js"],
    problem:
      "Students who study remotely juggle separate apps for video calls, chat, timers and to-do lists, and lose the motivation of studying with others.",
    solution:
      "A single web platform where students study together: video study rooms with a shared Pomodoro timer, real-time chat, study goals, study-time statistics and a leaderboard.",
    impact:
      "Delivered as our DUT final-year project: a working monorepo with a NestJS API and a Next.js client, covering authentication, real-time features and data visualisation.",
    overview:
      "StudyHub is a full-stack web app that helps students study together. It brings video study rooms, real-time chat, Pomodoro sessions, to-do lists, study-time tracking and a leaderboard into one place. We built it as a team of two for our DUT final-year project at EST Essaouira.",
    contributions: [
      "My part: built the front end of the platform in Next.js, React and TypeScript (pages, navigation and the study tools' interfaces).",
      "My part: built the video study rooms, peer-to-peer video calls with WebRTC (PeerJS) and the shared Pomodoro timer inside the room.",
      "My part: built the real-time chat rooms on the client, messaging over WebSockets (Socket.io) with a live list of connected users.",
      "Team: a NestJS API on PostgreSQL with Prisma, with authentication (email activation, JWT, bcrypt, password reset by email), to-dos, study-time tracking, charts and a leaderboard.",
    ],
    challenges: [
      { title: "Real-time state", text: "Keeping chat messages and the list of connected users consistent across clients meant handling connections and disconnections on the WebSocket gateway, not only in the UI." },
      { title: "Securing the app", text: "Every private page had to be protected before rendering, so route protection runs in Next.js middleware with JWT verification, on top of the API's own checks." },
    ],
    results: [
      "Complete platform delivered and defended as our DUT final-year project (2024).",
      "Source code public on GitHub as a monorepo (NestJS API + Next.js client).",
    ],
    skills: ["Full-stack development", "Real-time systems", "Authentication & security", "Teamwork", "Data visualisation"],
    repoUrl: "https://github.com/MohamedMErouane/Pfe-F-B",
    media: [
      { src: "/projects/studyhub-collaborative-study-platform/video-room-pomodoro.webp", width: 1299, height: 620, thumb: true, wide: true, alt: "StudyHub video study room with a shared Pomodoro timer", caption: "A video study room (WebRTC) with the shared Pomodoro timer." },
      { src: "/projects/studyhub-collaborative-study-platform/sign-up.webp", width: 1279, height: 640, alt: "StudyHub sign-up page", caption: "Sign-up with password-strength check; accounts are activated by email." },
      { src: "/projects/studyhub-collaborative-study-platform/study-goals.webp", width: 1303, height: 558, alt: "StudyHub study goals to-do list", caption: "Study goals: a personal to-do list." },
      { src: "/projects/studyhub-collaborative-study-platform/study-stats.webp", width: 1056, height: 539, alt: "StudyHub weekly study hours chart", caption: "Study time recorded by the Pomodoro timer, charted per day." },
      { src: "/projects/studyhub-collaborative-study-platform/leaderboard.webp", width: 1318, height: 568, alt: "StudyHub leaderboard ranked by hours studied", caption: "Leaderboard ranked by hours studied." },
      { src: "/projects/studyhub-collaborative-study-platform/reset-password.webp", width: 1358, height: 627, alt: "StudyHub password reset page", caption: "Password reset through a signed link sent by email." },
      { src: "/projects/studyhub-collaborative-study-platform/connected-users.webp", width: 304, height: 387, alt: "StudyHub list of connected users", caption: "Online users, updated in real time over WebSockets." },
    ],
  },
  {
    slug: "marsa-maroc-enterprise-applications",
    title: "Marsa Maroc — Enterprise Web Applications & Android App",
    shortTitle: "Marsa Maroc",
    period: "06/2023 – 08/2023",
    category: "Full-Stack — Port Authority",
    context: "Internship at Marsa Maroc, Agadir — Morocco's leading port operator",
    role: "Full-stack developer intern",
    stack: ["React.js", "NestJS", "TypeScript", "Prisma", "PostgreSQL", "Android", "Git"],
    problem:
      "Internal applications at a public port operator had to keep evolving while staying reliable for day-to-day operations.",
    solution:
      "Worked across the React.js front end and NestJS / Prisma / PostgreSQL back end, from functional discussion through code review to production release, and built an Android app for the port's staff cafeteria (buvette).",
    impact:
      "New features went live in production; work with developers and business teams focused on keeping the codebase maintainable as it grew.",
    overview:
      "During my summer internship at Marsa Maroc in Agadir, I joined the team that develops and maintains internal enterprise web applications. The work was real production work: features I built were reviewed, merged and released to users inside a large public organisation.",
    contributions: [
      "Developed and maintained features on enterprise web applications with React.js, NestJS, TypeScript, Prisma and PostgreSQL.",
      "Built responsive, cross-browser interfaces used by internal teams.",
      "Built a native Android application for the port's staff cafeteria (buvette): sign-up and login, a home screen with food and drink categories, menus with descriptions and prices, a basket and a profile, modelled first as a UML use-case diagram.",
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
      "An Android ordering app delivered for the port's staff cafeteria.",
      "Hands-on experience with a typed full-stack (TypeScript end to end) and team code-review workflows.",
    ],
    skills: ["TypeScript full-stack", "Android development", "Code review", "Enterprise applications", "Working with business teams"],
    media: [
      { src: "/projects/marsa-maroc-enterprise-applications/buvette-app-screens.webp", width: 2020, height: 712, wide: true, thumb: true, alt: "Screens of the Android app for the Marsa Maroc port cafeteria", caption: "Android app for the port's cafeteria: welcome, sign-up / login, home with categories, and menus with prices." },
      { src: "/projects/marsa-maroc-enterprise-applications/buvette-use-case.webp", width: 890, height: 475, wide: true, alt: "UML use-case diagram of the cafeteria app", caption: "UML use cases: from the welcome page through authentication to choosing dishes." },
    ],
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
    title: "Arcade Gaming Platform with XRPL Integration (44you Agency)",
    shortTitle: "XRPL arcade platform",
    period: "12/2024 – 06/2026",
    category: "Web3 / Full-Stack (Freelance)",
    context: "Freelance client project through 44you Agency",
    role: "Freelance Web3 & full-stack developer",
    stack: ["Next.js", "NestJS", "Prisma", "Docker", "XRPL (XRP Ledger)"],
    problem: "An agency client needed a complete online arcade built end to end, with blockchain features on the XRP Ledger.",
    solution:
      "Developed the platform and its games alongside the XRPL integration: a game lobby, arcade mini-games played with in-game credits, a social and room system, items and furniture, and account sign-up, on a NestJS / Prisma / Docker back end.",
    impact: "Delivered a long-running client project independently under contract, from requirements to game logic to on-chain features.",
    overview:
      "A long-running freelance engagement where I built a complete arcade platform for a client of 44you Agency and connected it to the XRP Ledger. Players sign up, pick a game from the lobby and play with in-game credits, and the platform adds social rooms and collectible items. I ran the mission independently, from reading the requirements to delivering the finished product.",
    contributions: [
      "Built the arcade front end in Next.js: a game lobby and several themed mini-games with credit, bet and win counters.",
      "Built the account flow with sign-up by email or Google.",
      "Built the platform's core systems: a social and room system and an item and furniture system.",
      "Integrated the platform with the XRPL (XRP Ledger) blockchain for on-chain features.",
      "Designed a scalable back end with NestJS, Prisma and Docker.",
      "Managed the engagement autonomously, from the client's requirements to delivery.",
    ],
    challenges: [
      {
        title: "Game state meets the blockchain",
        text: "Real-time game interactions and on-chain operations work at very different speeds; the architecture had to keep gameplay smooth while still recording what belongs on the ledger.",
      },
    ],
    results: ["Complete arcade platform and XRPL integration delivered to the agency's client."],
    skills: ["Blockchain integration", "Game development", "Client management", "Autonomy"],
    media: [
      { src: "/projects/arcade-gaming-xrpl-44you/game-lobby.webp", width: 1058, height: 569, wide: true, thumb: true, alt: "Arcade game lobby with six themed games", caption: "The game lobby: themed arcade games played with in-game credits." },
      { src: "/projects/arcade-gaming-xrpl-44you/alien-reels.webp", width: 402, height: 588, alt: "Alien-themed arcade game screen with credit counters", caption: "A themed mini-game with credit, win and bet counters." },
      { src: "/projects/arcade-gaming-xrpl-44you/bunny-reels.webp", width: 377, height: 590, alt: "Bunny-themed arcade game screen", caption: "Another themed game in the arcade." },
      { src: "/projects/arcade-gaming-xrpl-44you/sign-up.webp", width: 1301, height: 641, wide: true, alt: "Arcade sign-up page with Google option", caption: "Sign-up by email or Google account." },
    ],
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
    title: "HMTECH — Web3 E-commerce Platform (Abouelabbas Services)",
    shortTitle: "Web3 e-commerce",
    period: "06/2025 – 08/2025",
    category: "Full-Stack / Web3",
    context: "Internship at Abouelabbas Services, Marrakech",
    role: "Full-stack developer intern",
    stack: ["Next.js", "NestJS", "Prisma", "Ethereum", "MetaMask", "Smart contracts", "PayPal", "Docker", "GitHub Actions"],
    problem: "Build a modern online electronics store where customers can pay the usual ways, or in cryptocurrency, securely.",
    solution:
      "Designed and developed the full application: Next.js storefront, NestJS back end with Prisma, PayPal and Ethereum payments (MetaMask + smart contract), customer and admin roles, Docker and a GitHub Actions CI/CD pipeline.",
    impact: "Delivered and defended a complete e-commerce application combining a classic shopping flow with Web3 payments.",
    overview:
      "During my internship at Abouelabbas Services I designed and built HMTECH, an e-commerce web application that integrates blockchain and Web3: customers shop as on any online store and pay by PayPal, card, bank transfer or cash on delivery, or with Ethereum through their MetaMask wallet. I started from a UML use-case model covering customers, admins, the payment system and the blockchain.",
    contributions: [
      "Modelled the system first with a UML use-case diagram: 11 use cases for customers and admins, plus PayPal and the blockchain as external systems.",
      "Built the storefront with Next.js: home page, catalogue with filters, cart with coupon codes, wishlist, checkout and a customer account with order history.",
      "Built the back end with NestJS and Prisma, with sign-up by email or Google account and separate customer and admin roles.",
      "Integrated payments: PayPal (and card through PayPal), plus Ethereum via MetaMask and a smart contract, with admin verification of blockchain payments.",
      "Built the admin side: manage products, users and orders, and update order status so customers can track their order.",
      "Containerised the application with Docker and set up CI/CD with GitHub Actions.",
    ],
    challenges: [
      {
        title: "Classic UX, new payment rails",
        text: "Shoppers expect a normal checkout, so 'Pay with ETH' sits next to PayPal and cash on delivery, hiding the blockchain complexity behind a familiar flow.",
      },
      {
        title: "Trusting a crypto payment",
        text: "A wallet transaction is not a bank confirmation, so orders paid in ETH go through a verification step on the blockchain before they are processed.",
      },
    ],
    results: [
      "Complete application delivered and defended at the end of the internship.",
      "Five payment methods in one checkout, including Ethereum through MetaMask.",
    ],
    skills: ["Full-stack development", "Web3 integration", "Smart contracts", "Payment integration", "UML", "DevOps (Docker, CI/CD)"],
    media: [
      { src: "/projects/web3-ecommerce-platform/checkout-paypal-eth.webp", width: 935, height: 439, thumb: true, alt: "HMTECH checkout with PayPal, card and Pay with ETH options", caption: "Checkout: bank transfer, cash on delivery, PayPal or card, or pay with Ethereum." },
      { src: "/projects/web3-ecommerce-platform/home.webp", width: 935, height: 439, alt: "HMTECH store home page", caption: "Storefront home page." },
      { src: "/projects/web3-ecommerce-platform/shop.webp", width: 935, height: 439, alt: "HMTECH product catalogue with filters", caption: "Catalogue with category, size and colour filters." },
      { src: "/projects/web3-ecommerce-platform/cart.webp", width: 935, height: 439, alt: "HMTECH shopping cart with coupon code", caption: "Cart with quantities, coupon code and order summary." },
      { src: "/projects/web3-ecommerce-platform/sign-in.webp", width: 935, height: 439, alt: "HMTECH sign-in page with Google option", caption: "Sign-in by email or Google account." },
      { src: "/projects/web3-ecommerce-platform/customer-orders.webp", width: 795, height: 367, alt: "HMTECH customer account with order history", caption: "Customer account: order history and status tracking." },
      { src: "/projects/web3-ecommerce-platform/wishlist.webp", width: 935, height: 439, alt: "HMTECH wishlist page", caption: "Wishlist with stock status." },
      { src: "/projects/web3-ecommerce-platform/uml-use-case.webp", width: 938, height: 665, alt: "UML use-case diagram of the e-commerce system", caption: "UML use cases: customer and admin flows, with PayPal and the blockchain as external systems." },
    ],
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
