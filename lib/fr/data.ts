// French content. Same shapes as lib/data.ts; only the text changes.
import * as en from "../data";

export const profile = {
  ...en.profile,
  roles: ["Business Analyst", "Consultant SI / ERP", "Ingénieur Full-Stack"],
  location: "Taroudant, Maroc",
  mobility: "Mobile : Maroc et Europe (France)",
  lastUpdated: "oct. 2026",
  tagline:
    "Je travaille des deux côtés d'un projet : comprendre le processus métier et les besoins, puis construire et livrer l'application qui le supporte.",
  summary:
    "Élève ingénieur en dernière année en Management et Gouvernance des Systèmes d'Information à l'ENSIASD, avec six expériences professionnelles : applications d'entreprise pour une autorité portuaire publique, plateforme de gestion scolaire conçue de bout en bout, e-commerce Web3, intégrations blockchain et développement assisté par l'IA piloté par les spécifications. J'associe l'analyse métier (recueil des besoins, BPMN/UML, spécifications fonctionnelles, ERP) au développement full-stack (React, Next.js, TypeScript, Node.js, NestJS, Django, Docker). Je recherche un stage de fin d'études (PFE) de 6 mois à partir de janvier 2027 en conseil SI, business analysis ou ingénierie logicielle.",
};

export const workedWith = en.workedWith;

export const highlights = [
  { value: 6, suffix: "", label: "Expériences professionnelles" },
  { value: 4, suffix: "", label: "Applications conçues seul chez EtudiaLab" },
  { value: 6, suffix: "", label: "Certifications obtenues" },
];

export const approach = [
  { step: "01", title: "Comprendre", text: "Interroger les parties prenantes, cartographier le processus As-Is (BPMN) et cerner le vrai besoin métier." },
  { step: "02", title: "Spécifier", text: "Traduire le besoin en spécifications fonctionnelles, user stories, modèles UML et maquettes Figma exploitables par l'équipe." },
  { step: "03", title: "Construire", text: "Développer la solution en full-stack : front-end React / Next.js, APIs NestJS ou Django, PostgreSQL." },
  { step: "04", title: "Livrer et faire adopter", text: "Tester, conteneuriser et déployer en CI/CD, puis rédiger la documentation qui embarque les utilisateurs." },
];

export const education = [
  {
    school: "ENSIASD — École Nationale Supérieure de l'Intelligence Artificielle et des Sciences des Données",
    degree: "Cycle ingénieur — Management et Gouvernance des Systèmes d'Information (MGSI)",
    period: "2024 – aujourd'hui",
    location: "Taroudant, Maroc",
    details: [
      "Modules clés : systèmes ERP, Business Process Management, gouvernance des SI, conduite du changement, bases de données, génie logiciel.",
      "Projets : refonte du processus achats sur Odoo 17 et analyse réglementaire cybersécurité Maroc / UE (référentiel MCGL).",
    ],
  },
  {
    school: "École Supérieure de Technologie (EST) d'Essaouira",
    degree: "Diplôme Universitaire de Technologie (DUT) — Génie Informatique",
    period: "2022 – 2024",
    location: "Essaouira, Maroc",
    details: [
      "Projet de fin d'études : StudyHub, plateforme d'étude collaborative (Next.js, NestJS, PostgreSQL, chat temps réel et salles vidéo), réalisée en binôme.",
    ],
  },
];

export const experience = [
  {
    company: "EtudiaLab",
    role: "Stagiaire Full-Stack & Automatisation IA",
    period: "05/2026 – 07/2026",
    location: "Maroc · à distance",
    bullets: [
      "Conçu l'architecture et développé seul EduTrack, le module de gestion des absences d'une plateforme scolaire : 3 applications web par rôle et une application mobile pour les élèves et les parents (Django REST Framework, React + Vite, PostgreSQL, Docker).",
      "Recueilli les besoins avec les parties prenantes et livré maquettes Figma, diagrammes UML, spécifications fonctionnelles, APIs testées avec Postman et documentation technique et utilisateur.",
      "Travaillé en développement piloté par les spécifications et assisté par l'IA avec GitHub Spec Kit (spécification → plan → tâches → code), en sprints Agile hebdomadaires.",
    ],
    tags: ["Django REST", "React", "Vite", "PostgreSQL", "Docker", "Figma", "Agile"],
  },
  {
    company: "44you Agency",
    role: "Développeur Web3 & Blockchain (freelance)",
    period: "12/2024 – 06/2026",
    location: "À distance",
    bullets: [
      "Développé une plateforme de jeux complète pour un client de l'agence et son intégration à la blockchain XRP Ledger (XRPL) : système social et de salles, objets et mobilier, fonctionnalités on-chain.",
      "Mené la mission en autonomie, du cahier des charges à la livraison.",
    ],
    tags: ["XRPL", "Blockchain", "Développement de jeux", "Freelance"],
  },
  {
    company: "Abouelabbas Services",
    role: "Stagiaire Développeur Full-Stack",
    period: "06/2025 – 08/2025",
    location: "Marrakech, Maroc",
    bullets: [
      "Conçu et développé une application e-commerce moderne intégrant la blockchain et le Web3 : front-end Next.js, back-end NestJS, ORM Prisma.",
      "Mis en place les paiements en cryptomonnaie (Ethereum via MetaMask et smart contract), la gestion des rôles et les bonnes pratiques de sécurité.",
      "Conteneurisé l'application avec Docker et automatisé la livraison avec GitHub Actions (CI/CD).",
    ],
    tags: ["Next.js", "NestJS", "Prisma", "Docker", "GitHub Actions", "Ethereum"],
  },
  {
    company: "Stryve Solution",
    role: "Stagiaire Développeur Full-Stack",
    period: "04/2024 – 06/2024",
    location: "Maroc",
    bullets: [
      "Conçu et réalisé une application web de suivi des employés, du recueil des besoins à la livraison.",
    ],
    tags: ["Full-Stack", "Application web", "RH"],
  },
  {
    company: "Flawko",
    role: "Stagiaire Développeur Mobile",
    period: "09/2023 – 12/2023",
    location: "Marrakech, Maroc",
    bullets: [
      "Développé des applications Android en Java, en collaboration avec l'équipe design pour améliorer l'expérience utilisateur.",
    ],
    tags: ["Android", "Java", "UX"],
  },
  {
    company: "Marsa Maroc — Autorité portuaire",
    role: "Stagiaire Développeur Full-Stack",
    period: "06/2023 – 08/2023",
    location: "Agadir, Maroc",
    bullets: [
      "Développé et maintenu des applications d'entreprise avec React.js, NestJS, TypeScript, Prisma et PostgreSQL.",
      "Développé une application Android native pour la buvette (restaurant du personnel) du port.",
      "Participé aux revues de code, aux échanges fonctionnels et à la mise en production de fonctionnalités.",
      "Collaboré avec des équipes pluridisciplinaires pour améliorer la maintenabilité et l'évolutivité.",
    ],
    tags: ["React.js", "NestJS", "TypeScript", "Prisma", "PostgreSQL", "Android"],
  },
];

export const consultingCompetencies = [
  { label: "Analyse des processus métier", detail: "Cartographie As-Is / To-Be, notation BPMN 2.0, identification des écarts." },
  { label: "Ingénierie des exigences", detail: "Recueil des besoins, exigences fonctionnelles et non fonctionnelles, user stories." },
  { label: "Spécifications fonctionnelles", detail: "Cahier des charges, expression de besoins, cas d'utilisation." },
  { label: "UML et BPMN", detail: "Modélisation des processus, classes, séquences et cas d'utilisation pour la conception fonctionnelle." },
  { label: "ERP", detail: "Refonte du processus achats sur Odoo 17 : matrice d'approbation, rapprochement à trois voies, BPMN As-Is / To-Be et spécification fonctionnelle." },
  { label: "Gouvernance des SI", detail: "Référentiels de gouvernance des systèmes d'information, enseignés à l'ENSIASD." },
  { label: "Conduite du changement", detail: "Module suivi à l'ENSIASD ; documentation utilisateur rédigée pour accompagner l'adoption." },
  { label: "Relation avec les parties prenantes", detail: "Travail avec les équipes métier pendant les stages chez EtudiaLab et Marsa Maroc." },
  { label: "Agile / Scrum", detail: "Livraison en sprints et pratiques CI/CD chez EtudiaLab et Marsa Maroc." },
  { label: "Analyse des risques et conformité", detail: "Analyse des écarts cybersécurité Maroc / UE (NIS2, RGPD, lois 09-08 et 05-20) et référentiel MCGL : 15 contrôles alignés sur NIST CSF et ISO 27001." },
];

export const engineeringSkills = {
  ...en.engineeringSkills,
  Databases: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "Modélisation relationnelle"],
  Security_AI: ["SSO", "OAuth 2.0", "OpenID Connect", "Intégration de LLM", "Développement piloté par les spécifications (GitHub Spec Kit)"],
  Business: ["BPMN 2.0", "UML", "Analyse fonctionnelle", "Odoo / ERP", "Power BI", "Figma", "Scrum / Kanban"],
};

export const engineeringGroupLabels: Record<string, string> = {
  Programming: "Langages",
  Backend: "Back-end",
  Frontend: "Front-end",
  Databases: "Bases de données",
  Cloud_DevOps: "Cloud et DevOps",
  Security_AI: "Sécurité et IA",
  Business: "Métier, ERP et design",
};

export const certifications: typeof en.certifications = [
  ...en.certifications.slice(0, 6),
  { name: "Odoo Functional Consultant — formation en autonomie", issuer: "Odoo", year: "2026", status: "in-progress" },
  { name: "ITIL 4 Foundation", issuer: "AXELOS / PeopleCert", year: "2027", status: "planned" },
];

export const coreAreas = [
  "Business Analysis", "Développement full-stack", "ERP et BPMN", "Bases de données", "Docker et CI/CD", "Communication avec le métier",
];

export const nav = [
  { href: "/experience", label: "Expérience" },
  { href: "/projects", label: "Projets" },
  { href: "/journey", label: "Parcours" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export const allRoutes = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/experience", label: "Expérience" },
  { href: "/projects", label: "Projets" },
  { href: "/journey", label: "Parcours" },
  { href: "/skills", label: "Compétences" },
  { href: "/education", label: "Formation" },
  { href: "/certifications", label: "Certifications" },
  { href: "/resume", label: "CV" },
  { href: "/contact", label: "Contact" },
];
