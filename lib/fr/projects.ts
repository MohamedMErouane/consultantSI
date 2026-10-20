// French text for each published case study. Code-level fields (slug, stack, media files,
// links) come from lib/projects.ts; only the words are translated here.
import type { Project } from "../projects";

export type ProjectText = Pick<
  Project,
  "title" | "shortTitle" | "period" | "category" | "context" | "role" | "problem" | "solution" | "impact" | "overview" | "contributions" | "challenges" | "results" | "skills"
> & { media?: { alt: string; caption: string }[] };

export const projectsFr: Record<string, ProjectText> = {
  "procure-to-pay-redesign-odoo": {
    title: "Refonte du processus Procure-to-Pay sur Odoo 17",
    shortTitle: "Refonte P2P (Odoo)",
    period: "2026",
    category: "Conseil SI / ERP",
    context: "Étude de cas de conseil personnelle — distributeur fictif « Atlas Distribution »",
    role: "Consultant SI et développeur Odoo",
    problem:
      "Les achats étaient demandés sur WhatsApp, saisis dans Excel et signés sur papier par un seul directeur ; les factures étaient payées sans vérifier ce qui avait été reçu.",
    solution:
      "Mené un cycle de conseil complet (BPMN As-Is / To-Be, analyse des écarts, spécification fonctionnelle), puis développé un module Odoo 17 qui ajoute une matrice d'approbation et un contrôle de rapprochement à trois voies sur les factures fournisseurs.",
    impact:
      "Chaque bon de commande suit des règles d'approbation par montant, avec une piste d'audit, et une facture qui ne correspond ni à la commande ni à la réception ne peut plus être comptabilisée.",
    overview:
      "Une mission de conseil SI de bout en bout sur le processus Procure-to-Pay, menée sur un distributeur marocain fictif. Elle va des entretiens et des modèles de processus jusqu'à un module Odoo fonctionnel et testé et un plan de conduite du changement : tout le parcours d'un Consultant SI sur un projet ERP.",
    contributions: [
      "Cartographié le processus As-Is en BPMN 2.0 et identifié 6 irritants et leurs causes racines.",
      "Réalisé l'analyse des écarts entre Odoo 17 standard et le besoin, selon le principe « configurer d'abord, développer seulement si nécessaire ».",
      "Conçu le processus To-Be avec 7 règles de gestion, une matrice RACI et la séparation des tâches.",
      "Rédigé la spécification fonctionnelle : 7 exigences, modèle de données, matrice de sécurité, écrans.",
      "Développé le module p2p_approval_matrix : paliers d'approbation par montant, journal des approbations avec délai, rapprochement à trois voies bloquant la comptabilisation, et validation d'exception par le responsable financier avec motif obligatoire.",
      "Rédigé un plan de tests de 15 scénarios avec matrice de traçabilité, chaque scénario étant automatisé en test Odoo.",
      "Produit un plan de conduite du changement ADKAR avec checklist de mise en production et indicateurs d'adoption.",
    ],
    challenges: [
      {
        title: "Développer le moins possible",
        text: "Odoo propose déjà un seuil d'approbation unique. Le module étend ce mécanisme au lieu de remplacer le flux d'achat : il reste compatible avec les montées de version et revient au comportement standard quand aucune matrice n'est définie.",
      },
      {
        title: "Un contrôle que les équipes acceptent",
        text: "Bloquer des factures peut frustrer la comptabilité : chaque blocage explique précisément le problème, et un circuit d'exception contrôlé et tracé existe pour le responsable financier.",
      },
    ],
    results: [
      "Livrables complets : cadrage et RACI, As-Is et analyse des écarts, To-Be, spécification fonctionnelle, plan de tests, plan de conduite du changement.",
      "Module Odoo 17 installable avec matrice d'approbation, analyse des approbations (pivot / graphique) et rapprochement à trois voies.",
      "15 scénarios de test automatisés, tracés vers chaque exigence et règle de gestion : 15 / 15 réussis sur Odoo 17.",
    ],
    skills: ["Analyse des processus", "BPMN 2.0", "Analyse des écarts", "Spécification fonctionnelle", "Développement Odoo", "Conduite du changement"],
    media: [
      { alt: "Processus Procure-to-Pay To-Be modélisé en BPMN 2.0", caption: "Processus To-Be (BPMN 2.0) : approbation par palier de montant, rapprochement à trois voies avant comptabilisation et circuit d'exception pour le responsable financier." },
      { alt: "Facture fournisseur Odoo bloquée par une exception de rapprochement", caption: "Une facture bloquée par le rapprochement à trois voies : prix unitaire 7,5 % au-dessus de la commande, et 200 palettes facturées pour 150 reçues." },
      { alt: "Bon de commande Odoo en attente d'approbation du directeur des achats", caption: "Une commande de 174 800 $ (société de démonstration Odoo) tombe dans le palier C : seul un directeur des achats peut l'approuver." },
      { alt: "Journal des approbations d'un bon de commande avec délai d'approbation", caption: "Chaque approbation est tracée avec son palier, son approbateur et son délai, pour mesurer les goulots d'étranglement." },
      { alt: "Matrice d'approbation configurable dans Odoo", caption: "La matrice d'approbation est de la configuration, pas du code : un groupe d'approbateurs par palier de montant." },
      { alt: "Processus Procure-to-Pay As-Is modélisé en BPMN 2.0", caption: "Processus As-Is (BPMN 2.0), cartographié avant la refonte." },
    ],
  },

  "kubernetes-devops-platform": {
    title: "Plateforme de livraison Kubernetes : CI/CD, IaC et observabilité",
    shortTitle: "Plateforme DevOps K8s",
    period: "2026",
    category: "DevOps / Cloud",
    context: "Projet personnel",
    role: "Ingénieur DevOps",
    problem:
      "Livrer une application web de façon fiable demande plus que du code : une infrastructure reproductible, des tests automatisés, des conteneurs sécurisés, des déploiements sans risque et de la supervision.",
    solution:
      "Construit une plateforme de type production autour d'une petite application de raccourcissement d'URL : conteneurs durcis, overlays Kustomize, cluster provisionné avec Terraform (ingress et supervision) et pipeline GitHub Actions en 5 étapes qui déploie sur un vrai cluster Kubernetes.",
    impact:
      "Un pipeline conçu pour tester, scanner et déployer chaque push sur Kubernetes, puis redémarrer l'API sous trafic réel et échouer à la moindre requête en erreur : le zéro interruption est prouvé, pas supposé.",
    overview:
      "Une plateforme de livraison qui mène une application conteneurisée du git push jusqu'à un déploiement Kubernetes en production et supervisé. L'application (Linkly, un raccourcisseur d'URL avec une API TypeScript et PostgreSQL) est volontairement simple : le travail porte sur tout ce qui l'entoure.",
    contributions: [
      "Écrit l'API avec sondes de santé et de disponibilité, métriques Prometheus et arrêt propre sur SIGTERM, couverte par des tests d'intégration sur PostgreSQL.",
      "Construit des images Docker multi-étapes sans root et un environnement Docker Compose pour le développement local.",
      "Écrit les manifestes Kubernetes avec Kustomize (dev / prod) : mises à jour progressives, HPA, PodDisruptionBudget, StatefulSet, Ingress.",
      "Durci le cluster : Pod Security Standard « restricted », systèmes de fichiers en lecture seule, capacités retirées, NetworkPolicies en refus par défaut.",
      "Provisionné le cluster avec Terraform (kind + ingress-nginx, metrics-server, kube-prometheus-stack via Helm).",
      "Mis en place l'observabilité en code : ServiceMonitor, règles d'alerte liées à un runbook, tableau de bord Grafana.",
      "Construit le pipeline CI/CD : tests, validation des manifestes, contrôles Terraform, scan d'images Trivy, publication sur GHCR, déploiement de bout en bout sur kind avec vérification du zéro interruption.",
    ],
    challenges: [
      {
        title: "Zéro interruption, prouvé",
        text: "Il faut quatre éléments ensemble (maxUnavailable à 0, sondes de disponibilité, délai preStop et arrêt propre dans l'application) : le pipeline le teste sous charge au lieu de le supposer.",
      },
      {
        title: "Des sondes qui n'aggravent pas les pannes",
        text: "La sonde de vie ne vérifie jamais la base de données : si PostgreSQL tombe, les pods sortent du load balancer via la sonde de disponibilité au lieu de redémarrer en boucle.",
      },
    ],
    results: [
      "Une seule commande lance toute la plateforme en local (Terraform + kind).",
      "Pipeline en 5 étapes : tests, validation, scan de sécurité, publication et déploiement sur un vrai cluster Kubernetes.",
      "Décisions d'architecture et runbook d'astreinte documentés dans le dépôt.",
    ],
    skills: ["Kubernetes", "CI/CD", "Infrastructure as Code", "Sécurité des conteneurs", "Observabilité", "Pratiques SRE"],
    media: [
      { alt: "Architecture de la plateforme Kubernetes Linkly et de son pipeline CI/CD", caption: "Chemin des requêtes, supervision et pipeline CI/CD qui valide chaque push." },
      { alt: "Interface web du raccourcisseur d'URL Linkly avec les liens et leurs clics", caption: "Linkly, l'application de démonstration : un raccourcisseur d'URL sur PostgreSQL, avec le nombre de clics." },
    ],
  },

  "edutrack-school-management-platform": {
    title: "EduTrack : gestion des absences pour une plateforme scolaire (EtudiaLab)",
    shortTitle: "EduTrack",
    period: "05/2026 – 07/2026",
    category: "Architecture / Full-Stack",
    context: "Stage de 8 semaines chez EtudiaLab, startup EdTech marocaine",
    role: "Architecte technique et seul développeur full-stack",
    problem:
      "EtudiaLab avait besoin d'un prototype fonctionnel de sa plateforme de gestion scolaire, centré sur la gestion des absences : les enseignants saisissent les présences, les parents sont alertés, les absences sont justifiées et l'établissement voit quels élèves sont à risque.",
    solution:
      "J'ai conçu l'architecture et développé seul le prototype : trois applications React par rôle (école, enseignant, admin) et une application mobile pour les élèves et les parents, sur un back-end Django REST de 13 applications, 16 modèles de données et plus de 20 endpoints, lancé en une commande avec Docker Compose.",
    impact:
      "Livré en 8 sprints hebdomadaires : 7 écrans EduTrack menés de la maquette Figma au code, avec un rapport d'avancement hebdomadaire à mon encadrant.",
    overview:
      "EduTrack est le module de gestion des absences de la plateforme scolaire d'EtudiaLab. Pendant mon stage, j'étais responsable de toute la partie technique du prototype : l'architecture et le modèle de données, les diagrammes draw.io et les maquettes Figma, l'API Django REST et les interfaces React pour les enseignants, les élèves, les parents et les administrateurs d'établissement.",
    contributions: [
      "Conçu l'architecture en premier (semaine 1) : modèle entité-association, contrat d'API, diagrammes UML (cas d'utilisation, classes, séquence, activité, états, déploiement, flux de données) sous draw.io et 7 écrans Figma avec un petit design system.",
      "Comparé quatre façons d'ajouter des réunions vidéo (lien externe, API Zoom / Google Meet, WebRTC interne, WebSockets) selon l'effort, la maîtrise des données et le déploiement, et recommandé une option pour le prototype et une pour la production.",
      "Travaillé « specs d'abord » avec GitHub Spec Kit : chaque fonctionnalité passait d'une spécification écrite à un plan technique et une liste de tâches avant l'implémentation assistée par l'IA, les spécifications restant la référence.",
      "Développé le back-end avec Django REST Framework : 13 applications Django et 16 modèles, authentification JWT avec permissions par rôle, et plus de 20 endpoints REST testés avec Postman.",
      "Développé l'espace enseignant : tableau de bord des séances du jour et des alertes, feuille de présence (présent / absent / en retard, avec le cumul d'absences de chaque élève) et rapport hebdomadaire par classe avec export PDF et CSV.",
      "Développé l'application mobile élèves et parents : historique des présences, alertes et assistant en 4 étapes pour justifier une absence avec un motif et un justificatif, que l'enseignant valide ou refuse.",
      "Développé la vue administrateur : présence par classe, élèves à risque et notification des parents en un clic.",
      "Automatisé les notifications avec les signaux Django : saisir une absence ou traiter une justification prévient les bonnes personnes sans coupler les modules.",
      "Conteneurisé l'ensemble avec Docker Compose (front-end, API, PostgreSQL) et remis un rapport hebdomadaire à mon encadrant.",
    ],
    challenges: [
      {
        title: "Des notifications sans couplage",
        text: "Les absences, les justifications et les réunions devaient toutes notifier des utilisateurs. J'ai utilisé les signaux post_save de Django et un seul modèle Notification avec une clé étrangère générique : un nouveau déclencheur ne touche jamais le code existant.",
      },
      {
        title: "Intégrité des données",
        text: "Saisir deux fois le même élève pour la même séance devait être impossible : j'ai imposé une contrainte d'unicité (séance, élève, date) en base de données, et pas seulement dans l'interface.",
      },
      {
        title: "Une plateforme, quatre publics",
        text: "Enseignants, élèves, parents et administrateurs voient chacun une application différente. Le JWT porte le rôle, les routes React sont protégées par rôle et chaque endpoint revérifie les permissions côté serveur.",
      },
      {
        title: "Un formulaire complexe sur téléphone",
        text: "Justifier une absence demande un choix, un texte et un fichier. Le découper en assistant pas à pas, avec « Suivant » désactivé tant que l'étape n'est pas complète, l'a rendu utilisable sur mobile.",
      },
    ],
    results: [
      "7 écrans livrés de la maquette au code : tableau de bord enseignant, feuille de présence, rapport de classe, vues mobiles élève / parent, assistant de justification et vue d'ensemble administrateur.",
      "Back-end de 13 applications Django, 16 modèles et plus de 20 endpoints REST documentés, lancé en une commande avec Docker Compose.",
      "Pistes d'amélioration documentées : mises à jour temps réel avec WebSockets, génération de PDF côté serveur et suite de tests automatisés.",
    ],
    skills: ["Architecture logicielle", "Modélisation des données", "Conception d'API REST", "Sécurité par rôle", "UI/UX sur Figma", "Autonomie"],
    media: [
      { alt: "Diagramme de cas d'utilisation UML d'EduTrack", caption: "Cas d'utilisation (UML) : 17 cas répartis entre enseignants, élèves, parents, administrateurs d'école et administrateurs EtudiaLab." },
      { alt: "Diagramme de classes UML d'EduTrack", caption: "Diagramme de classes : utilisateurs, écoles, emploi du temps, présences, justifications, notifications et comptes parents." },
      { alt: "Diagramme d'états UML du cycle de vie d'une absence", caption: "Cycle de vie d'une présence : non saisie → présent / en retard / absent → justifiée ou refusée." },
      { alt: "Diagramme de déploiement d'EduTrack avec Docker Compose", caption: "Déploiement : front-end React + Vite, API Django REST et PostgreSQL en trois services Docker Compose." },
      { alt: "Diagramme de flux de données de niveau 1 d'EduTrack", caption: "Flux de données (DFD niveau 1) entre enseignants, élèves, parents, administrateur et bases de données." },
      { alt: "Comparaison de quatre solutions de communication pour les réunions", caption: "Analyse de décision pour les réunions : 4 options comparées sur l'effort, la maîtrise des données et la compatibilité Docker, avec une recommandation pour le prototype et pour la production." },
    ],
  },

  "studyhub-collaborative-study-platform": {
    title: "StudyHub : plateforme d'étude collaborative (PFE de DUT)",
    shortTitle: "StudyHub",
    period: "2024",
    category: "Full-Stack / Temps réel",
    context: "Projet de fin d'études de DUT à l'EST d'Essaouira, en binôme",
    role: "Développeur front-end, salles vidéo et chat temps réel (binôme)",
    problem:
      "Les étudiants qui révisent à distance jonglent entre plusieurs applications (appels vidéo, chat, minuteur, listes de tâches) et perdent la motivation de travailler ensemble.",
    solution:
      "Une seule plateforme web pour étudier ensemble : salles d'étude vidéo avec minuteur Pomodoro partagé, chat en temps réel, objectifs d'étude, statistiques du temps d'étude et classement.",
    impact:
      "Livré comme projet de fin d'études de DUT : un monorepo fonctionnel avec une API NestJS et un client Next.js, couvrant l'authentification, le temps réel et la visualisation de données.",
    overview:
      "StudyHub est une application web full-stack qui aide les étudiants à travailler ensemble. Elle réunit salles d'étude vidéo, chat en temps réel, sessions Pomodoro, listes de tâches, suivi du temps d'étude et classement. Nous l'avons réalisée en binôme pour notre projet de fin d'études de DUT à l'EST d'Essaouira.",
    contributions: [
      "Ma partie : développé le front-end de la plateforme en Next.js, React et TypeScript (pages, navigation et interfaces des outils d'étude).",
      "Ma partie : développé les salles d'étude vidéo, les appels pair à pair en WebRTC (PeerJS) et le minuteur Pomodoro partagé dans la salle.",
      "Ma partie : développé les salles de chat en temps réel côté client, en WebSockets (Socket.io), avec la liste des utilisateurs connectés en direct.",
      "Équipe : une API NestJS sur PostgreSQL avec Prisma, avec authentification (activation par email, JWT, bcrypt, réinitialisation du mot de passe par email), tâches, suivi du temps d'étude, graphiques et classement.",
    ],
    challenges: [
      { title: "État temps réel", text: "Garder les messages et la liste des connectés cohérents entre les clients impliquait de gérer connexions et déconnexions sur la passerelle WebSocket, et pas seulement dans l'interface." },
      { title: "Sécuriser l'application", text: "Chaque page privée devait être protégée avant l'affichage : la protection des routes s'exécute dans le middleware Next.js avec vérification du JWT, en plus des contrôles de l'API." },
    ],
    results: [
      "Plateforme complète livrée et soutenue comme projet de fin d'études de DUT (2024).",
      "Code source public sur GitHub en monorepo (API NestJS + client Next.js).",
    ],
    skills: ["Développement full-stack", "Systèmes temps réel", "Authentification et sécurité", "Travail en équipe", "Visualisation de données"],
    media: [
      { alt: "Salle d'étude vidéo StudyHub avec minuteur Pomodoro partagé", caption: "Une salle d'étude vidéo (WebRTC) avec le minuteur Pomodoro partagé." },
      { alt: "Page d'inscription StudyHub", caption: "Inscription avec contrôle de la force du mot de passe ; les comptes sont activés par email." },
      { alt: "Liste des objectifs d'étude StudyHub", caption: "Objectifs d'étude : une liste de tâches personnelle." },
      { alt: "Graphique des heures d'étude par jour dans StudyHub", caption: "Temps d'étude enregistré par le minuteur Pomodoro, affiché par jour." },
      { alt: "Classement StudyHub par heures d'étude", caption: "Classement par heures d'étude." },
      { alt: "Page de réinitialisation du mot de passe StudyHub", caption: "Réinitialisation du mot de passe via un lien signé envoyé par email." },
      { alt: "Liste des utilisateurs connectés dans StudyHub", caption: "Utilisateurs en ligne, mis à jour en temps réel en WebSockets." },
    ],
  },

  "marsa-maroc-enterprise-applications": {
    title: "Marsa Maroc : applications web d'entreprise et application Android",
    shortTitle: "Marsa Maroc",
    period: "06/2023 – 08/2023",
    category: "Full-Stack — Autorité portuaire",
    context: "Stage chez Marsa Maroc à Agadir, premier opérateur portuaire du Maroc",
    role: "Stagiaire développeur full-stack",
    problem:
      "Les applications internes d'un opérateur portuaire public devaient continuer à évoluer tout en restant fiables pour l'exploitation quotidienne.",
    solution:
      "Travaillé sur le front-end React.js et le back-end NestJS / Prisma / PostgreSQL, de l'échange fonctionnel à la revue de code et à la mise en production, et développé une application Android pour la buvette du personnel du port.",
    impact:
      "De nouvelles fonctionnalités mises en production ; un travail avec les développeurs et les équipes métier centré sur la maintenabilité d'une base de code en croissance.",
    overview:
      "Pendant mon stage d'été chez Marsa Maroc à Agadir, j'ai rejoint l'équipe qui développe et maintient les applications web internes. C'était du vrai travail de production : les fonctionnalités que je développais étaient relues, intégrées et livrées aux utilisateurs d'une grande organisation publique.",
    contributions: [
      "Développé et maintenu des fonctionnalités sur des applications web d'entreprise avec React.js, NestJS, TypeScript, Prisma et PostgreSQL.",
      "Développé des interfaces responsives et compatibles avec tous les navigateurs, utilisées par les équipes internes.",
      "Développé une application Android native pour la buvette du personnel du port : inscription et connexion, accueil par catégories (plats et boissons), menus avec descriptions et prix, panier et profil, modélisée d'abord en diagramme de cas d'utilisation UML.",
      "Participé aux revues de code et aux discussions d'architecture avec l'équipe de développement.",
      "Travaillé avec les équipes métier pour comprendre les besoins avant de les implémenter.",
      "Livré des fonctionnalités en production au sein d'une équipe pluridisciplinaire.",
    ],
    challenges: [
      {
        title: "L'exigence de la production",
        text: "Le code devait passer la revue et garder maintenable une base de code en croissance : un niveau d'exigence très différent des projets académiques.",
      },
      {
        title: "Le contexte métier d'un opérateur portuaire",
        text: "Comprendre suffisamment les processus d'exploitation pour construire la bonne chose demandait des allers-retours constants avec des utilisateurs non techniques.",
      },
    ],
    results: [
      "Fonctionnalités livrées en production dans une grande entreprise du secteur public.",
      "Une application Android de commande livrée pour la buvette du personnel du port.",
      "Expérience concrète d'un full-stack typé (TypeScript de bout en bout) et des revues de code en équipe.",
    ],
    skills: ["Full-stack TypeScript", "Développement Android", "Revue de code", "Applications d'entreprise", "Travail avec le métier"],
    media: [
      { alt: "Écrans de l'application Android de la buvette du port de Marsa Maroc", caption: "Application Android de la buvette du port : accueil, inscription / connexion, catégories et menus avec prix." },
      { alt: "Diagramme de cas d'utilisation UML de l'application de la buvette", caption: "Cas d'utilisation UML : de la page d'accueil à l'authentification puis au choix des plats." },
    ],
  },

  "cybersecurity-regulatory-study-morocco-eu": {
    title: "Gouvernance cybersécurité : analyse des écarts Maroc / UE et référentiel MCGL",
    shortTitle: "Gouvernance cyber (MCGL)",
    period: "05/2026",
    category: "Audit et conformité",
    context: "Projet du module Sécurité des SI, filière MGSI à l'ENSIASD, encadré par le Pr Azizi Saad",
    role: "Auteur : analyse réglementaire et conception du référentiel",
    problem:
      "Les PME marocaines qui exportent vers l'UE doivent répondre aux exigences cybersécurité et RGPD de leurs clients européens, alors que la loi marocaine 05-20 ne couvre que les infrastructures critiques et qu'une certification ISO 27001 coûte plus de 100 000 MAD.",
    solution:
      "Comparé les cadres marocain et européen, identifié les écarts critiques, puis conçu le MCGL (Maroc Cyber Governance Lite) : un référentiel léger de 4 piliers et 15 contrôles prioritaires, aligné sur le NIST CSF 2.0, l'article 32 du RGPD et l'ISO 27001:2022.",
    impact:
      "Une démarche déployable par une PME de 10 à 250 salariés : moins de 50 000 MAD sur 12 mois, avec trois niveaux de maturité, appliquée à un cas d'étude (un exportateur d'agrumes fictif à Taroudant) pour un budget estimé à 47 000 MAD.",
    overview:
      "Deux livrables rédigés pour le module Sécurité des Systèmes d'Information de la filière MGSI : une analyse réglementaire de 14 pages comparant le Maroc (DGSSI, ANRT, CNDP, lois 09-08 et 05-20) et l'UE (NIS2, DORA, RGPD, eIDAS 2.0), et un guide pratique de 21 pages qui transforme ces constats en MCGL, un référentiel de gouvernance cybersécurité applicable par un dirigeant de PME sans RSSI à temps plein.",
    contributions: [
      "Cartographié le cadre institutionnel et légal marocain (DGSSI, ANRT, Bank Al-Maghrib, CNDP ; lois 09-08 et 05-20) face à NIS2, DORA, RGPD et eIDAS 2.0.",
      "Construit un tableau comparatif sur 10 critères et identifié 4 écarts critiques : aucune obligation cyber pour les PME privées, loi 09-08 face au RGPD, aucun délai de notification des violations, aucune responsabilité personnelle des dirigeants.",
      "Conçu le référentiel MCGL : 4 piliers (pilotage, protection des données clients, continuité d'activité, conformité RGPD de base), 15 contrôles prioritaires et 3 niveaux de maturité.",
      "Rédigé 15 fiches de contrôle, chacune avec des actions concrètes, des outils gratuits ou abordables et des indicateurs mesurables.",
      "Aligné chaque contrôle sur le NIST CSF 2.0, l'article 32 du RGPD et l'ISO 27001:2022 pour qu'il soit reconnu par les partenaires européens.",
      "Planifié un déploiement sur 12 mois avec budget et tableau de bord dirigeant à 5 KPI, appliqué à une PME fictive (CitrusExport SARL).",
    ],
    challenges: [
      {
        title: "Du texte juridique à la pratique",
        text: "La réglementation est écrite pour des juristes : chaque contrôle devait devenir une action qu'un dirigeant de PME peut suivre sans équipe sécurité.",
      },
      {
        title: "Crédible mais abordable",
        text: "Un référentiel n'aide que si les clients européens l'acceptent : le MCGL garde 15 contrôles au lieu des 93 de l'ISO 27001, tout en reliant chacun à des normes reconnues.",
      },
    ],
    results: [
      "Un rapport d'analyse réglementaire de 14 pages et un guide pratique de 21 pages.",
      "15 contrôles couvrant gouvernance, protection des données, continuité et RGPD, déployables pour moins de 50 000 MAD en 12 mois.",
    ],
    skills: ["Gouvernance des SI", "Analyse réglementaire", "Gestion des risques", "Conception de référentiel", "RGPD / NIS2", "Rédaction analytique"],
    media: [
      { alt: "Tableau comparatif de la réglementation cybersécurité Maroc / Union européenne", caption: "Comparaison Maroc / UE : 10 critères notés selon le niveau d'écart." },
      { alt: "Couverture du guide pratique MCGL", caption: "Guide pratique MCGL : 4 piliers, 15 contrôles prioritaires, budget inférieur à 50 000 MAD, déploiement sur 12 mois." },
      { alt: "Les quatre piliers du référentiel MCGL", caption: "Les 4 piliers et les contrôles qu'ils regroupent." },
      { alt: "Fiches de contrôle MCGL avec actions et KPI", caption: "Fiches de contrôle : description, actions, outils et KPI pour chaque contrôle." },
      { alt: "Plan de déploiement MCGL sur 12 mois et cas d'étude", caption: "Plan de déploiement sur 12 mois avec budget, et cas d'étude CitrusExport." },
      { alt: "Correspondance des contrôles MCGL avec NIST CSF, RGPD et ISO 27001", caption: "Alignement sur le NIST CSF 2.0, l'article 32 du RGPD et l'ISO 27001:2022." },
    ],
  },

  "arcade-gaming-xrpl-44you": {
    title: "Plateforme de jeux d'arcade intégrée à XRPL (44you Agency)",
    shortTitle: "Arcade XRPL",
    period: "12/2024 – 06/2026",
    category: "Web3 / Full-Stack (freelance)",
    context: "Projet client en freelance via 44you Agency",
    role: "Développeur Web3 et full-stack (freelance)",
    problem: "Un client de l'agence avait besoin d'une plateforme d'arcade en ligne complète, avec des fonctionnalités blockchain sur le XRP Ledger.",
    solution:
      "Développé la plateforme et ses jeux en parallèle de l'intégration XRPL : un lobby de jeux, des mini-jeux d'arcade joués avec des crédits internes, un système social et de salles, des objets et du mobilier, et l'inscription des joueurs, sur un back-end NestJS / Prisma / Docker.",
    impact: "Mené en autonomie une mission client au long cours, sous contrat, du cahier des charges à la logique de jeu et aux fonctionnalités on-chain.",
    overview:
      "Une mission freelance au long cours au cours de laquelle j'ai construit une plateforme d'arcade complète pour un client de 44you Agency et l'ai connectée au XRP Ledger. Les joueurs s'inscrivent, choisissent un jeu dans le lobby et jouent avec des crédits internes, et la plateforme ajoute des salles sociales et des objets à collectionner. J'ai mené la mission seul, de la lecture du cahier des charges à la livraison du produit.",
    contributions: [
      "Développé le front-end de l'arcade en Next.js : un lobby de jeux et plusieurs mini-jeux à thème avec compteurs de crédits, de mises et de gains.",
      "Développé le parcours de compte avec inscription par email ou Google.",
      "Développé les systèmes principaux de la plateforme : un système social et de salles, et un système d'objets et de mobilier.",
      "Intégré la plateforme à la blockchain XRP Ledger (XRPL) pour les fonctionnalités on-chain.",
      "Conçu un back-end évolutif avec NestJS, Prisma et Docker.",
      "Géré la mission en autonomie, des besoins du client à la livraison.",
    ],
    challenges: [
      {
        title: "L'état du jeu face à la blockchain",
        text: "Les interactions de jeu en temps réel et les opérations on-chain n'avancent pas à la même vitesse : l'architecture devait garder un jeu fluide tout en inscrivant sur le registre ce qui doit y être.",
      },
    ],
    results: ["Plateforme d'arcade complète et intégration XRPL livrées au client de l'agence."],
    skills: ["Intégration blockchain", "Développement de jeux", "Relation client", "Autonomie"],
    media: [
      { alt: "Lobby de la plateforme d'arcade avec six jeux à thème", caption: "Le lobby : des jeux d'arcade à thème joués avec des crédits internes." },
      { alt: "Écran d'un jeu d'arcade à thème extraterrestre avec compteurs de crédits", caption: "Un mini-jeu à thème avec compteurs de crédits, de gains et de mises." },
      { alt: "Écran d'un jeu d'arcade à thème lapin", caption: "Un autre jeu à thème de l'arcade." },
      { alt: "Page d'inscription de l'arcade avec option Google", caption: "Inscription par email ou compte Google." },
    ],
  },

  "memerace-solana-multiplayer": {
    title: "MemeRace : course multijoueur en temps réel sur Solana",
    shortTitle: "MemeRace",
    period: "2025 – 2026",
    category: "Blockchain / Web3",
    context: "Projet personnel",
    role: "Développeur (seul)",
    problem: "Explorer des mécaniques de compétition en temps réel et on-chain pour un jeu de course multijoueur auquel les joueurs peuvent faire confiance.",
    solution:
      "Développé un jeu de course multijoueur en temps réel avec WebSockets (Socket.io), un mécanisme de résultat vérifiable (provably fair, HMAC-SHA256) et l'intégration des portefeuilles Solana, déployé en conteneurs.",
    impact: "Une exploration personnelle approfondie de la synchronisation d'état en temps réel, de l'équité vérifiable et de l'architecture blockchain.",
    overview:
      "Un projet personnel où les joueurs font la course en temps réel et connectent leur portefeuille Solana. L'enjeu est la confiance : chaque résultat de course est généré par un mécanisme vérifiable, pour que les joueurs puissent contrôler qu'il n'a pas été manipulé.",
    contributions: [
      "Développé l'interface du jeu : les joueurs choisissent l'un des 10 personnages meme et voient le nombre de joueurs, la cagnotte en SOL et le compte à rebours, peuvent regarder les courses et consulter un classement global.",
      "Développé la couche multijoueur en temps réel avec Node.js et Socket.io.",
      "Implémenté un mécanisme de résultat vérifiable basé sur HMAC-SHA256.",
      "Intégré les portefeuilles Solana pour l'identité des joueurs et les transactions.",
      "Utilisé PostgreSQL pour la persistance et Redis pour l'état partagé.",
      "Conteneurisé l'ensemble avec Docker.",
    ],
    challenges: [
      {
        title: "Une équité vérifiable par les joueurs",
        text: "Des graines serveur engagées à l'avance et HMAC-SHA256 permettent à chacun de vérifier un résultat de course après coup, au lieu de faire confiance au serveur.",
      },
      {
        title: "Synchroniser tous les clients",
        text: "Les courses sont en direct : tous les joueurs doivent voir le même état au même moment, et Redis et les WebSockets portent cet état partagé.",
      },
    ],
    results: ["Jeu multijoueur en temps réel fonctionnel, avec résultats vérifiables et intégration de portefeuilles."],
    skills: ["Systèmes temps réel", "WebSockets", "Équité cryptographique", "Redis", "Docker"],
    media: [
      { alt: "Piste de MemeRace avec les personnages meme sur la ligne de départ", caption: "La course : choisir un meme, puis suivre le nombre de joueurs, la cagnotte en SOL et le compte à rebours." },
      { alt: "Écran d'accueil de MemeRace avec « Watch Race » et le classement global", caption: "Accueil : regarder une course en direct ou ouvrir le classement global." },
    ],
  },

  "web3-ecommerce-platform": {
    title: "HMTECH : plateforme e-commerce Web3 (Abouelabbas Services)",
    shortTitle: "E-commerce Web3",
    period: "06/2025 – 08/2025",
    category: "Full-Stack / Web3",
    context: "Stage chez Abouelabbas Services, Marrakech",
    role: "Stagiaire développeur full-stack",
    problem: "Construire une boutique en ligne d'électronique moderne où les clients peuvent payer de façon classique ou en cryptomonnaie, en toute sécurité.",
    solution:
      "Conçu et développé l'application complète : boutique Next.js, back-end NestJS avec Prisma, paiements PayPal et Ethereum (MetaMask + smart contract), rôles client et administrateur, Docker et pipeline CI/CD GitHub Actions.",
    impact: "Livré et soutenu une application e-commerce complète qui associe un parcours d'achat classique à des paiements Web3.",
    overview:
      "Pendant mon stage chez Abouelabbas Services, j'ai conçu et développé HMTECH, une application e-commerce qui intègre la blockchain et le Web3 : les clients achètent comme sur n'importe quelle boutique en ligne et paient par PayPal, carte, virement ou à la livraison, ou en Ethereum avec leur portefeuille MetaMask. Je suis parti d'un modèle de cas d'utilisation UML couvrant clients, administrateurs, système de paiement et blockchain.",
    contributions: [
      "Modélisé le système d'abord avec un diagramme de cas d'utilisation UML : 11 cas pour les clients et les administrateurs, avec PayPal et la blockchain comme systèmes externes.",
      "Développé la boutique en Next.js : accueil, catalogue avec filtres, panier avec codes promo, liste de souhaits, paiement et espace client avec historique des commandes.",
      "Développé le back-end avec NestJS et Prisma, avec inscription par email ou compte Google et des rôles client et administrateur distincts.",
      "Intégré les paiements : PayPal (et carte via PayPal), ainsi qu'Ethereum via MetaMask et un smart contract, avec vérification des paiements blockchain par l'administrateur.",
      "Développé l'espace administrateur : gestion des produits, des utilisateurs et des commandes, et mise à jour du statut pour le suivi des commandes.",
      "Conteneurisé l'application avec Docker et mis en place la CI/CD avec GitHub Actions.",
    ],
    challenges: [
      {
        title: "Une UX classique, de nouveaux moyens de paiement",
        text: "Les clients attendent un paiement habituel : « Payer en ETH » se trouve à côté de PayPal et du paiement à la livraison, et la complexité de la blockchain reste cachée derrière un parcours familier.",
      },
      {
        title: "Faire confiance à un paiement crypto",
        text: "Une transaction de portefeuille n'est pas une confirmation bancaire : les commandes payées en ETH passent par une vérification sur la blockchain avant d'être traitées.",
      },
    ],
    results: [
      "Application complète livrée et soutenue en fin de stage.",
      "Cinq moyens de paiement dans un seul parcours, dont Ethereum via MetaMask.",
    ],
    skills: ["Développement full-stack", "Intégration Web3", "Smart contracts", "Intégration des paiements", "UML", "DevOps (Docker, CI/CD)"],
    media: [
      { alt: "Page de paiement HMTECH avec PayPal, carte et paiement en ETH", caption: "Paiement : virement, paiement à la livraison, PayPal ou carte, ou Ethereum." },
      { alt: "Page d'accueil de la boutique HMTECH", caption: "Page d'accueil de la boutique." },
      { alt: "Catalogue HMTECH avec filtres", caption: "Catalogue avec filtres par catégorie, taille et couleur." },
      { alt: "Panier HMTECH avec code promo", caption: "Panier avec quantités, code promo et récapitulatif." },
      { alt: "Page de connexion HMTECH avec option Google", caption: "Connexion par email ou compte Google." },
      { alt: "Espace client HMTECH avec historique des commandes", caption: "Espace client : historique et suivi des commandes." },
      { alt: "Liste de souhaits HMTECH", caption: "Liste de souhaits avec état du stock." },
      { alt: "Diagramme de cas d'utilisation UML du système e-commerce", caption: "Cas d'utilisation UML : parcours client et administrateur, avec PayPal et la blockchain comme systèmes externes." },
    ],
  },
};
