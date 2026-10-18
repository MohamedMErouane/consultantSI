import { cn } from "@/lib/cn";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Tag = "h2",
}: {
  as?: "h1" | "h2";
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <span className="eyebrow">{eyebrow}</span>
      <Tag className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-ink text-balance">
        {title}
      </Tag>
      {description && (
        <p
          className={cn(
            "mt-4 text-ink-muted max-w-2xl leading-relaxed",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
