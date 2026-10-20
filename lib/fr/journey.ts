// French text for the Journey stories, keyed by slug. Photos and dates come from lib/journey.ts.
type Img = { alt: string; caption?: string };

export type JourneyText = {
  title: string;
  dateLabel: string;
  location: string;
  excerpt: string;
  cover: Img;
  photos: Img[];
  body: string[];
  takeaways: string[];
  related?: string[]; // labels, same order as the English links
  tags: string[];
};

export const journeyCategoryFr = {
  Internship: "Stage",
  Event: "Événement",
  Milestone: "Étape clé",
  Hackathon: "Hackathon",
} as const;

export const journeyFr: Record<string, JourneyText> = {
  "hackerrank-orchestrate-october-2026": {
    title: "Participer à HackerRank Orchestrate, édition d'octobre",
    dateLabel: "24 octobre 2026",
    location: "En ligne",
    excerpt:
      "Je suis inscrit à HackerRank Orchestrate, un hackathon en ligne de 24 heures où chaque participant conçoit, développe et livre un agent IA. Voici pourquoi je participe.",
    cover: { alt: "Badge de participant de Mohamed Merouane à HackerRank Orchestrate, édition d'octobre" },
    photos: [],
    body: [
      "HackerRank Orchestrate est un hackathon IA en ligne de 24 heures : chaque participant conçoit, développe et livre un agent IA qui résout un problème réel, puis le défend lors d'un entretien avec un jury IA. Je suis inscrit à l'édition d'octobre 2026, qui commence le 24 octobre.",
      "C'est dans la continuité de mon dernier stage. Chez EtudiaLab, j'ai construit un produit full-stack avec des agents de code IA guidés par des spécifications écrites (GitHub Spec Kit), et je veux aller plus loin : concevoir des systèmes où plusieurs agents coopèrent de façon fiable, et pas seulement un prompt.",
      "Je mettrai cette histoire à jour avec ce que j'ai construit et appris une fois l'événement terminé.",
    ],
    takeaways: [
      "Pratiquer l'orchestration d'agents IA sous une vraie contrainte de temps",
      "Livrer quelque chose de bout en bout en très peu de temps",
    ],
    related: ["Le développement IA piloté par les specs chez EtudiaLab"],
    tags: ["Agents IA", "Hackathon", "LLM"],
  },
  "ensiasd-internship-defense": {
    title: "Soutenir mon projet de stage à l'ENSIASD",
    dateLabel: "2026",
    location: "ENSIASD, Taroudant",
    excerpt:
      "Présenter mon travail de stage devant un jury à mon école d'ingénieurs : le moment où des mois de travail doivent tenir dans une histoire claire.",
    cover: { alt: "Mohamed Merouane tenant son document devant l'entrée de l'ENSIASD à Taroudant" },
    photos: [],
    body: [
      "À l'ENSIASD (École Nationale Supérieure de l'Intelligence Artificielle et des Sciences des Données) de Taroudant, chaque stage se termine par une soutenance devant un jury.",
      "Une soutenance est autant un exercice de conseil qu'un exercice technique : expliquer le besoin métier, les choix faits, ce qui a été livré et ce que je ferais autrement, en un temps limité et devant des personnes qui n'ont pas vécu le projet.",
      "C'est la compétence dont j'ai besoin comme consultant ou business analyst : transformer un travail complexe en une histoire que les décideurs comprennent.",
    ],
    takeaways: [
      "Une structure : besoin → solution → résultats → enseignements",
      "Défendre ses choix devant un public exigeant",
    ],
    related: ["Ma formation"],
    tags: ["ENSIASD", "Présentation", "Communication"],
  },
  "etudialab-internship-edutrack": {
    title: "Deux mois chez EtudiaLab : construire EduTrack seul",
    dateLabel: "20 mai – 20 juillet 2026",
    location: "EtudiaLab, Maroc",
    excerpt:
      "Mon stage chez EtudiaLab, où j'ai conçu et développé un prototype full-stack de gestion scolaire : trois applications web et une application mobile.",
    cover: { alt: "Mohamed Merouane présentant son travail devant un écran projeté pendant le stage EtudiaLab" },
    photos: [
      {
        alt: "Attestation de stage EtudiaLab, du 20/05/2026 au 20/07/2026",
        caption:
          "L'attestation de stage : « Conception et développement d'un prototype full-stack pour une plateforme de gestion scolaire » (zone de signature masquée).",
      },
    ],
    body: [
      "Du 20 mai au 20 juillet 2026, j'ai été stagiaire chez EtudiaLab, une startup EdTech. Le sujet officiel : la conception et le développement d'un prototype full-stack pour une plateforme de gestion scolaire.",
      "J'étais le seul développeur du projet, ce qui voulait dire porter les deux côtés du travail. Côté analyse, j'ai recueilli les besoins avec les parties prenantes et produit des maquettes Figma, des diagrammes UML et des spécifications fonctionnelles. Côté réalisation, j'ai conçu l'architecture et livré trois applications web par rôle et une application mobile pour les élèves et les parents, sur un back-end Django REST Framework avec des front-ends React + Vite.",
      "J'ai travaillé en développement piloté par les spécifications et assisté par l'IA avec GitHub Spec Kit : chaque fonctionnalité commençait par une spécification écrite, puis un plan et une liste de tâches, avant le code assisté par l'IA. J'ai clôturé le stage en présentant les livrables à mon encadrant.",
    ],
    takeaways: [
      "Porter un produit de bout en bout : du besoin à la livraison",
      "Écrire des spécifications sur lesquelles un développeur, même soi-même, peut vraiment construire",
      "Laisser les spécifications guider les agents IA, et pas l'inverse",
    ],
    related: ["Lire l'étude de cas EduTrack"],
    tags: ["Django REST", "React", "UML", "Figma", "GitHub Spec Kit"],
  },
  "gitex-africa-2025-marrakech": {
    title: "GITEX Africa 2025 à Marrakech",
    dateLabel: "14 – 16 avril 2025",
    location: "Marrakech, Maroc",
    excerpt:
      "Trois jours au plus grand salon tech et startups d'Afrique, l'occasion de voir où va l'écosystème tech marocain et africain.",
    cover: { alt: "Mohamed Merouane avec son badge visiteur à l'entrée du GITEX Africa 2025 à Marrakech" },
    photos: [
      {
        alt: "Carte « I'm attending » GITEX Africa Morocco 2025 de Mohamed Merouane",
        caption: "Ma carte de participant au GITEX Africa Morocco, du 14 au 16 avril 2025.",
      },
    ],
    body: [
      "Le GITEX Africa est le plus grand salon tech et startups du continent ; l'édition 2025 s'est tenue à Marrakech du 14 au 16 avril.",
      "Pour un étudiant en systèmes d'information, c'est tout l'écosystème au même endroit : startups, grands intégrateurs, institutions publiques et investisseurs, qui parlent tous de transformation digitale, d'IA, de cloud et de cybersécurité.",
      "Y aller m'a aidé à comprendre ce que les entreprises achètent et construisent vraiment, un contexte utile pour choisir entre conseil et ingénierie pour mon PFE.",
    ],
    takeaways: [
      "Voir la transformation digitale du côté des clients",
      "Rencontrer l'écosystème tech marocain en personne",
    ],
    related: ["À propos de moi"],
    tags: ["GITEX", "Networking", "Transformation digitale"],
  },
  "dut-diploma-est-essaouira-2024": {
    title: "Obtenir mon DUT en Génie Informatique",
    dateLabel: "Juillet 2024",
    location: "EST Essaouira, Maroc",
    excerpt:
      "La remise de mon Diplôme Universitaire de Technologie en Génie Informatique, l'étape qui m'a ouvert la porte de l'école d'ingénieurs.",
    cover: { alt: "Mohamed Merouane en costume sur le campus de l'EST d'Essaouira le jour de la remise des diplômes" },
    photos: [
      {
        alt: "Diplôme de DUT en Génie Informatique présenté devant l'école (données personnelles masquées)",
        caption: "Diplôme Universitaire de Technologie — Génie Informatique (données personnelles masquées).",
      },
    ],
    body: [
      "En 2024, j'ai terminé mon DUT (Diplôme Universitaire de Technologie) en Génie Informatique à l'École Supérieure de Technologie d'Essaouira.",
      "Ces deux années m'ont donné mes bases techniques : programmation, bases de données, développement web, et mes premières vraies expériences en entreprise, dont mes stages chez Marsa Maroc et Flawko.",
      "C'est le DUT qui m'a permis d'intégrer le cycle ingénieur en Management et Gouvernance des Systèmes d'Information à l'ENSIASD, où je suis aujourd'hui en dernière année.",
    ],
    takeaways: [
      "Des bases solides en programmation et en bases de données",
      "Premiers stages, premier code en production",
    ],
    related: ["Mon projet de fin d'études de DUT : StudyHub", "Stage chez Marsa Maroc"],
    tags: ["EST Essaouira", "DUT", "Formation"],
  },
};
