import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionEyebrowProps {
  children: ReactNode;
  align?: "left" | "center" | "right";
  showLine?: boolean;
  lineWidth?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  className?: string;
}

const lineWidths = {
  sm: "w-6",
  md: "w-10",
  lg: "w-14",
};

export default function SectionEyebrow({
  children,
  align = "left",
  showLine = true,
  lineWidth = "md",
  color = "secondary",
  className,
}: SectionEyebrowProps) {
  const colorClass =
    color === "primary" ? "bg-brand text-brand" : "bg-secondary text-secondary";

  return (
    <div
      className={cn(
        "flex items-center gap-3",
        align === "center" && "justify-center",
        align === "right" && "justify-end",
        className,
      )}
    >
      {showLine && (
        <span
          aria-hidden="true"
          className={cn(
            "h-px rounded-full transition-colors duration-300",
            lineWidths[lineWidth],
            colorClass.split(" ")[0],
          )}
        />
      )}

      <span
        className={cn(
          `
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.32em]

          transition-colors
          duration-300

          sm:text-xs
          `,
          colorClass.split(" ")[1],
        )}
      >
        {children}
      </span>
    </div>
  );
}
