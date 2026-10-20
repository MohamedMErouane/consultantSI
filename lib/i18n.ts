// Two languages: English at the existing URLs, French mirrored under /fr.
export type Lang = "en" | "fr";
export const langs: Lang[] = ["en", "fr"];

/** "/projects" -> "/fr/projects" in French, unchanged in English. */
export function localePath(lang: Lang, path: string) {
  if (lang === "en") return path;
  return path === "/" ? "/fr" : `/fr${path}`;
}

export function langFromPath(pathname: string): Lang {
  return pathname === "/fr" || pathname.startsWith("/fr/") ? "fr" : "en";
}

/** "/fr/projects" -> "/projects" */
export function stripLang(pathname: string) {
  if (pathname === "/fr") return "/";
  return pathname.startsWith("/fr/") ? pathname.slice(3) : pathname;
}

/** hreflang alternates for a path given without the language prefix. */
export function languageAlternates(path: string) {
  return { en: path, fr: localePath("fr", path), "x-default": path };
}

/** Pick the string for the current language. */
export const pick = <T,>(lang: Lang, v: { en: T; fr: T }): T => v[lang];
