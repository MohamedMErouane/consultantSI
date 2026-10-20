// Journey — real moments from my path, each backed by real photos.
// Add a story: drop photos in /public/journey and add an entry below (newest first is not required; the list is sorted).

import type { Media } from "./media";

export type JourneyPhoto = Media;

export type JourneyPost = {
  slug: string;
  title: string;
  date: string; // ISO date used for sorting and structured data
  dateLabel: string; // what readers see
  category: "Internship" | "Event" | "Milestone" | "Hackathon";
  location: string;
  excerpt: string;
  cover: JourneyPhoto;
  photos: JourneyPhoto[];
  body: string[];
  takeaways: string[];
  related?: { href: string; label: string }[];
  tags: string[];
};

const posts: JourneyPost[] = [
  {
    slug: "hackerrank-orchestrate-october-2026",
    title: "Taking part in HackerRank Orchestrate — October edition",
    date: "2026-10-24",
    dateLabel: "24 October 2026",
    category: "Hackathon",
    location: "Online",
    excerpt:
      "I'm registered for HackerRank Orchestrate, a 24-hour online hackathon where each participant designs, builds and ships an AI agent. Here's why I joined.",
    cover: {
      src: "/journey/hackerrank-orchestrate.webp",
      alt: "HackerRank Orchestrate October edition participant badge for Mohamed Merouane",
      width: 1280,
      height: 955,
    },
    photos: [],
    body: [
      "HackerRank Orchestrate is a 24-hour online AI hackathon: each participant designs, builds and ships an AI agent that solves a real-world problem, then defends it in an interview with an AI judge. I'm registered as a participant in the October 2026 edition, which starts on 24 October.",
      "It fits what I've been doing in my last internship. At EtudiaLab I built a full-stack product with AI coding agents driven by written specifications (GitHub Spec Kit), and I want to push further: designing systems where several agents cooperate reliably, not just one prompt.",
      "I'll update this story with what I built and what I learned once the event is over.",
    ],
    takeaways: [
      "Practise AI-agent orchestration under real time pressure",
      "Ship something end-to-end in a short window",
    ],
    related: [{ href: "/projects/edutrack-school-management-platform", label: "Spec-driven AI development at EtudiaLab" }],
    tags: ["AI Agents", "Hackathon", "LLM"],
  },
  {
    slug: "ensiasd-internship-defense",
    title: "Defending my internship project at ENSIASD",
    date: "2026-07-25",
    dateLabel: "2026",
    category: "Milestone",
    location: "ENSIASD, Taroudant",
    excerpt:
      "Presenting my internship work in front of a jury at my engineering school, the moment where months of work have to fit in a clear story.",
    cover: {
      src: "/journey/ensiasd-defense.webp",
      alt: "Mohamed Merouane holding his document in front of the ENSIASD entrance in Taroudant",
      width: 480,
      height: 640,
    },
    photos: [],
    body: [
      "At ENSIASD (École Nationale Supérieure de l'Intelligence Artificielle et des Sciences des Données) in Taroudant, every internship ends with a defence in front of a jury.",
      "A defence is a consulting exercise as much as a technical one: explaining the business need, the choices made, what was delivered and what I would do differently, in a limited time and to people who did not live the project.",
      "That's the same skill I need as a consultant or a business analyst: turning a complex piece of work into a story that decision-makers understand.",
    ],
    takeaways: [
      "Structure: need → solution → results → lessons",
      "Defending decisions in front of a critical audience",
    ],
    related: [{ href: "/education", label: "My education" }],
    tags: ["ENSIASD", "Presentation", "Communication"],
  },
  {
    slug: "etudialab-internship-edutrack",
    title: "Two months at EtudiaLab: building EduTrack on my own",
    date: "2026-05-20",
    dateLabel: "20 May – 20 July 2026",
    category: "Internship",
    location: "EtudiaLab, Morocco",
    excerpt:
      "My internship at EtudiaLab, where I designed and built a full-stack school-management prototype: three web apps plus mobile views for students and parents.",
    cover: {
      src: "/journey/etudialab-presentation.webp",
      alt: "Mohamed Merouane presenting his work in front of a projected screen during the EtudiaLab internship",
      width: 480,
      height: 639,
    },
    photos: [
      {
        src: "/journey/etudialab-attestation.webp",
        alt: "EtudiaLab internship certificate (attestation de stage), 20/05/2026 to 20/07/2026",
        caption:
          "The internship certificate: « Conception et développement d'un prototype full-stack pour une plateforme de gestion scolaire » (signature area cropped out).",
        width: 720,
        height: 630,
      },
    ],
    body: [
      "From 20 May to 20 July 2026 I was an intern at EtudiaLab, an EdTech startup. The official topic was the design and development of a full-stack prototype for a school-management platform.",
      "I worked as the only developer on it, which meant owning both sides of the job. On the analysis side I gathered requirements with stakeholders and produced Figma mockups, UML diagrams and functional specifications. On the build side I designed the architecture and shipped three role-based web apps and mobile views for students and parents, on a Django REST Framework back end with React + Vite front ends.",
      "I worked with spec-driven, AI-assisted development using GitHub Spec Kit: every feature started as a written specification, then a plan and a task list, before AI-assisted coding. I closed the internship by presenting the deliverables to my supervisor.",
    ],
    takeaways: [
      "Owning a product end-to-end: from requirements to delivery",
      "Writing specs that a developer, even yourself, can actually build from",
      "Letting written specs drive AI coding agents, not the other way around",
    ],
    related: [{ href: "/projects/edutrack-school-management-platform", label: "Read the EduTrack case study" }],
    tags: ["Django REST", "React", "UML", "Figma", "GitHub Spec Kit"],
  },
  {
    slug: "gitex-africa-2025-marrakech",
    title: "GITEX Africa 2025 in Marrakech",
    date: "2025-04-14",
    dateLabel: "14 – 16 April 2025",
    category: "Event",
    location: "Marrakech, Morocco",
    excerpt:
      "Three days at the largest tech and startup show in Africa, a chance to see where the Moroccan and African tech ecosystem is going.",
    cover: {
      src: "/journey/gitex-2025-venue.webp",
      alt: "Mohamed Merouane with his visitor badge at the entrance of GITEX Africa 2025 in Marrakech",
      width: 480,
      height: 640,
    },
    photos: [
      {
        src: "/journey/gitex-2025-badge.webp",
        alt: "GITEX Africa Morocco 2025 'I'm attending' card for Mohamed Merouane",
        caption: "My attendee card for GITEX Africa Morocco, 14–16 April 2025.",
        width: 1200,
        height: 627,
      },
    ],
    body: [
      "GITEX Africa is the largest tech and startup show on the continent, and the 2025 edition took place in Marrakech from 14 to 16 April.",
      "For an information-systems student it's the ecosystem in one place: startups, large integrators, public institutions and investors, all talking about digital transformation, AI, cloud and cybersecurity.",
      "Going there helped me understand what companies are actually buying and building, which is useful context when choosing between consulting and engineering for my PFE.",
    ],
    takeaways: [
      "Seeing digital transformation from the client side",
      "Meeting the Moroccan tech ecosystem in person",
    ],
    related: [{ href: "/about", label: "About me" }],
    tags: ["GITEX", "Networking", "Digital Transformation"],
  },
  {
    slug: "dut-diploma-est-essaouira-2024",
    title: "Graduating with my DUT in Computer Engineering",
    date: "2024-07-31",
    dateLabel: "July 2024",
    category: "Milestone",
    location: "EST Essaouira, Morocco",
    excerpt:
      "Receiving my University Diploma of Technology in Computer Engineering, the step that opened the door to engineering school.",
    cover: {
      src: "/journey/dut-graduation.webp",
      alt: "Mohamed Merouane in a suit on the campus of EST Essaouira on graduation day",
      width: 480,
      height: 1013,
    },
    photos: [
      {
        src: "/journey/dut-diploma.webp",
        alt: "DUT diploma in Génie Informatique held up in front of the school (personal details hidden)",
        caption: "Diplôme Universitaire de Technologie — Génie Informatique (personal details hidden).",
        width: 480,
        height: 853,
      },
    ],
    body: [
      "In 2024 I finished my DUT (Diplôme Universitaire de Technologie) in Génie Informatique at the École Supérieure de Technologie of Essaouira.",
      "Those two years gave me my technical foundations: programming, databases, web development and my first real experiences in companies, including my internships at Marsa Maroc and Flawko.",
      "The DUT is what got me into the engineering cycle in Management & Governance of Information Systems at ENSIASD, where I'm now in my final year.",
    ],
    takeaways: [
      "Solid foundations in programming and databases",
      "First internships, first production code",
    ],
    related: [
      { href: "/projects/studyhub-collaborative-study-platform", label: "My DUT final-year project: StudyHub" },
      { href: "/projects/marsa-maroc-enterprise-applications", label: "Marsa Maroc internship" },
    ],
    tags: ["EST Essaouira", "DUT", "Education"],
  },
];

export const journey = [...posts].sort((a, b) => b.date.localeCompare(a.date));
export const getJourneyPost = (slug: string) => journey.find((p) => p.slug === slug);
