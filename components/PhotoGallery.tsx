"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Media } from "@/lib/media";
import type { Lang } from "@/lib/i18n";

// Photo grid with a keyboard-accessible full-screen viewer.
export default function PhotoGallery({ photos, lang = "en" }: { photos: Media[]; lang?: Lang }) {
  const fr = lang === "fr";
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + photos.length) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close, step]);

  if (!photos.length) return null;
  const current = open === null ? null : photos[open];

  return (
    <>
      <div className={photos.length === 1 ? "grid" : "grid gap-4 sm:grid-cols-2"}>
        {photos.map((p, i) => (
          <figure key={p.src} className={p.wide && photos.length > 1 ? "group sm:col-span-2" : "group"}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="block w-full overflow-hidden rounded-xl border border-border-soft bg-bg-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={`${fr ? "Agrandir la photo : " : "Open photo: "}${p.alt}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                sizes={p.wide ? "(min-width: 896px) 896px, 100vw" : "(min-width: 640px) 50vw, 100vw"}
                className="mx-auto h-auto max-h-[520px] w-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </button>
            {p.caption && <figcaption className="mt-2 text-xs text-ink-faint leading-relaxed">{p.caption}</figcaption>}
          </figure>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button type="button" onClick={close} className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20" aria-label={fr ? "Fermer" : "Close"}>
            <X size={22} />
          </button>
          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); step(-1); }}
                className="absolute left-3 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
                aria-label={fr ? "Photo précédente" : "Previous photo"}
              >
                <ChevronLeft size={26} />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); step(1); }}
                className="absolute right-3 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
                aria-label={fr ? "Photo suivante" : "Next photo"}
              >
                <ChevronRight size={26} />
              </button>
            </>
          )}
          <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="100vw"
              className="mx-auto h-auto max-h-[82vh] w-auto rounded-lg object-contain"
              priority
            />
            {current.caption && <figcaption className="mt-3 text-center text-sm text-white/70">{current.caption}</figcaption>}
          </figure>
        </div>
      )}
    </>
  );
}
