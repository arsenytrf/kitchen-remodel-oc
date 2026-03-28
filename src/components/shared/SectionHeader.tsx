import { ScrollReveal } from "./ScrollReveal";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
  dark = false,
}: SectionHeaderProps) {
  return (
    <ScrollReveal className={align === "center" ? "text-center" : ""}>
      <span
        className={`inline-block text-[10px] tracking-[0.25em] uppercase font-semibold mb-3 ${
          dark ? "text-brass-400" : "text-walnut-600"
        }`}
      >
        {label}
      </span>
      <h2
        className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
          dark ? "text-white" : "text-stone-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base lg:text-lg max-w-2xl leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${dark ? "text-stone-400" : "text-stone-500"}`}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
