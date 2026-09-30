import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="px-6 pt-48 pb-28 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-3xl sm:text-4xl font-semibold text-ink">
        Page not found.
      </h1>
      <p className="mt-4 text-ink-muted max-w-md mx-auto">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 text-sm text-accent hover:gap-3 transition-all"
      >
        <ArrowLeft size={15} /> Back to home
      </Link>
    </section>
  );
}
