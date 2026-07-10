import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "2xl" | "full";

const containerSizes: Record<ContainerSize, string> = {
  sm: "max-w-5xl",
  md: "max-w-6xl",
  lg: "max-w-7xl",
  xl: "max-w-8xl", // Tailwind 96rem (1536px)
  "2xl": "max-w-[1700px]",
  full: "max-w-none",
};

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: ContainerSize;
}

export default function Container({
  children,
  className,
  size = "lg",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12",
        containerSizes[size],
        className,
      )}
    >
      {children}
    </div>
  );
}
