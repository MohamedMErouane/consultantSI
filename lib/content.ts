// Language-aware access to the site content.
import * as en from "./data";
import * as fr from "./fr/data";
import type { Lang } from "./i18n";

export function getContent(lang: Lang) {
  const d = lang === "fr" ? fr : en;
  return {
    profile: d.profile,
    workedWith: d.workedWith,
    highlights: d.highlights,
    approach: d.approach,
    education: d.education,
    experience: d.experience,
    consultingCompetencies: d.consultingCompetencies,
    engineeringSkills: d.engineeringSkills,
    engineeringGroupLabels: d.engineeringGroupLabels,
    certifications: d.certifications,
    coreAreas: d.coreAreas,
    nav: d.nav,
    allRoutes: d.allRoutes,
  };
}
