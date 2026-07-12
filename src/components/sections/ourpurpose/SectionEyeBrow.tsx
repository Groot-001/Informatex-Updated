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

const colorMap = {
  primary: {
    line: "from-[#113358] via-[#2374B6] to-transparent",
    text: "text-[#113358]",
    dot: "bg-[#2374B6]",
    bg: "bg-[#EDF5FC]",
    border: "border-[#DCEAF6]",
  },

  secondary: {
    line: "from-[#2374B6] via-[#67B7F7] to-transparent",
    text: "text-[#2374B6]",
    dot: "bg-[#2374B6]",
    bg: "bg-[#F8FBFE]",
    border: "border-[#DCEAF6]",
  },
};

export default function SectionEyebrow({
  children,
  align = "left",
  showLine = true,
  lineWidth = "md",
  color = "secondary",
  className,
}: SectionEyebrowProps) {
  const styles = colorMap[color];

  return (
    <div
      className={cn(
        "flex items-center gap-4",

        align === "center" && "justify-center",
        align === "right" && "justify-end",

        className,
      )}
    >
      {showLine && (
        <span
          aria-hidden="true"
          className={cn(
            "h-px bg-gradient-to-r",
            lineWidths[lineWidth],
            styles.line,
          )}
        />
      )}

      <div
        className={cn(
          `
            inline-flex
            items-center
            gap-2

            rounded-full

            border

            px-4
            py-2

            backdrop-blur-sm

            transition-all
            duration-300
          `,
          styles.bg,
          styles.border,
        )}
      >
        <span className={cn("h-2 w-2 rounded-full", styles.dot)} />

        <span
          className={cn(
            `
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.28em]

              sm:text-xs
            `,
            styles.text,
          )}
        >
          {children}
        </span>
      </div>
    </div>
  );
}
