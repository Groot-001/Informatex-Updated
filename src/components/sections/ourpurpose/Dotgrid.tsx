import { cn } from "@/lib/utils";

interface DotGridProps {
  rows?: number;
  cols?: number;
  size?: "sm" | "md" | "lg";
  align?: "left" | "center" | "right";
  className?: string;
}

const dotSizes = {
  sm: "h-1 w-1",
  md: "h-1.5 w-1.5",
  lg: "h-2 w-2",
};

export default function DotGrid({
  rows = 4,
  cols = 9,
  size = "md",
  align = "left",
  className,
}: DotGridProps) {
  return (
    <div
      className={cn(
        "mt-8 flex",
        align === "center" && "justify-center",
        align === "right" && "justify-end",
        className,
      )}
      aria-hidden="true"
    >
      <div
        className="grid gap-2"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))`,
        }}
      >
        {Array.from({ length: rows * cols }).map((_, index) => (
          <span
            key={index}
            className={cn(
              "rounded-full bg-secondary/20 transition-opacity duration-300",
              dotSizes[size],
            )}
          />
        ))}
      </div>
    </div>
  );
}
