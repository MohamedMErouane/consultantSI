# Mohamed Merouane — Portfolio

A production-ready portfolio built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**, positioning Mohamed Merouane for **Consultant SI / Business Analyst** and **Software Engineer** internship opportunities (PFE, starting January 2027).

All content is sourced from the real CV and past project history — nothing is invented.

---

## ✨ What's inside

- **9 routes**: Home, About, Experience, Projects, Skills, Education, Certifications, Contact, Resume
- **Consultant SI framing throughout**: competencies section, project cards structured as Problem → Solution → Impact, a "spec panel" hero element written in the language of a functional spec
- **Interactive project explorer**: live search + category filtering
- **Contact form**: opens the visitor's email client pre-filled (no backend/third-party service required)
- **Embedded résumé**: `/resume` shows the PDF inline with a download button
- **SEO**: metadata, Open Graph, Twitter Card, JSON-LD (`Person` schema), `sitemap.xml`, `robots.txt`
- **Motion**: scroll-reveal animations, animated counters, a typing effect cycling through role titles — all respecting `prefers-reduced-motion`
- **Design system**: dark navy background (`#050816`), primary blue (`#2563EB`), sky accent (`#38BDF8`), Inter for UI text, JetBrains Mono for labels/data — a deliberate nod to the "structured specification" aesthetic of the consulting profession, tying the visual identity to the subject.

## 🗂️ Structure

```
app/
  layout.tsx           Root layout, fonts, metadata, JSON-LD
  page.tsx              Home
  about/                About
  experience/            Experience (timeline)
  projects/              Projects (search + filter)
  skills/                Skills (consulting + engineering)
  education/            Education
  certifications/        Certifications
  contact/               Contact (form)
  resume/                Résumé viewer + download
  sitemap.ts / robots.ts Metadata routes
  not-found.tsx          Custom 404
components/              Reusable UI (Navbar, Footer, Timeline, ProjectCard, …)
lib/
  data.ts                All CV-sourced content — edit this file to update the site
  cn.ts                  Small classnames helper
public/
  resume.pdf              The downloadable/embedded CV
```

## 🛠️ Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build   # production build
npm run start   # serve the production build locally
```

> **Fonts note:** `next/font/google` fetches Inter and JetBrains Mono from Google Fonts **at build time**. This requires normal internet access (which Vercel has by default). If you ever build in a network-restricted sandbox, temporarily swap the two `next/font/google` calls in `app/layout.tsx` for a system-font stack, build, then restore.

## 🚀 Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Next.js** (auto-detected). No environment variables are required.
4. Click **Deploy**. Vercel builds and serves the site — Google Fonts fetch normally in that environment.
5. The canonical domain is `consultant-si.vercel.app` — if it ever changes, update `siteUrl` in `lib/data.ts` (used by metadata, sitemap and robots).

## ✏️ Updating content

Everything content-related lives in **`lib/data.ts`**:

- `profile` — name, tagline, summary, contact links
- `experience` — internships, in reverse-chronological order
- `education` — degrees
- `projects` — set `featured: true` to surface a project on the homepage
- `consultingCompetencies` / `engineeringSkills` / `coreAreas` — the Skills page
- `certifications` — add a certificate here the day you earn one; status can be `"planned"`, `"in-progress"`, or `"completed"`

To replace the résumé, overwrite `public/resume.pdf` with an updated export (keep the same filename).

## 📈 Suggested next steps

- Add a real profile photo (currently text-only by design — swap in an `<Image>` in the hero once you have one you like).
- Wire the contact form to a real backend (e.g., Resend, Formspree) if you want submissions logged instead of opening the visitor's email client.
- Add project screenshots/GitHub links once repositories are public — the `ProjectCard` component already supports a `stack` array; extend the `Project` type in `lib/data.ts` if you add fields like `githubUrl` or `image`.
- Consider component libraries like shadcn/ui if you want to extend the design system further — the current build intentionally avoids extra UI dependencies to keep the bundle lean and the build reliable.
