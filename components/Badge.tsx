import { cn } from "@/lib/cn";

export default function Badge({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: "default" | "accent";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-mono tracking-wide",
        variant === "default"
          ? "border-border text-ink-muted bg-bg-panel/60"
          : "border-accent/30 text-accent bg-accent/10",
        className
      )}
    >
      {children}
    </span>
  );
}
