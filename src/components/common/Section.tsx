import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionSpacing = "sm" | "md" | "lg" | "xl";

const spacingClasses: Record<SectionSpacing, string> = {
  sm: "py-12 lg:py-16",
  md: "py-16 lg:py-20",
  lg: "py-20 lg:py-28",
  xl: "py-24 lg:py-32",
};

interface SectionProps {
  children: ReactNode;
  className?: string;
  spacing?: SectionSpacing;
}

export default function Section({
  children,
  className,
  spacing = "lg",
}: SectionProps) {
  return (
    <section className={cn("relative", spacingClasses[spacing], className)}>
      {children}
    </section>
  );
}
