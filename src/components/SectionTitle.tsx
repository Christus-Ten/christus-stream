import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="scroll-reveal mb-12">
      <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
        <span className="text-primary">{title.split(" ")[0]}</span>{" "}
        <span className="text-foreground">{title.split(" ").slice(1).join(" ")}</span>
      </h2>
      <p className="mt-2 text-muted-foreground text-base max-w-md">{subtitle}</p>
      <div className="mt-4 h-0.5 w-16 bg-primary rounded-full" />
    </div>
  );
}
