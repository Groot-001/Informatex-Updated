import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import type { AccentColor } from ".";

interface IconBadgeProps {
  icon: LucideIcon;
  color?: AccentColor;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const colorMap: Record<AccentColor, { bg: string; text: string }> = {
  primary: {
    bg: "bg-brand/10 border-brand/10",
    text: "text-brand",
  },

  secondary: {
    bg: "bg-secondary/10 border-secondary/10",
    text: "text-secondary",
  },

  navy: {
    bg: "bg-[#093254]/10 border-[#093254]/10",
    text: "text-[#093254]",
  },

  blue: {
    bg: "bg-[#2374B6]/10 border-[#2374B6]/10",
    text: "text-[#2374B6]",
  },

  cyan: {
    bg: "bg-[#4F92C9]/10 border-[#4F92C9]/10",
    text: "text-[#4F92C9]",
  },

  sky: {
    bg: "bg-[#67B7F7]/10 border-[#67B7F7]/10",
    text: "text-[#67B7F7]",
  },

  teal: {
    bg: "bg-[#2D8DAF]/10 border-[#2D8DAF]/10",
    text: "text-[#2D8DAF]",
  },
};

const sizeMap: Record<NonNullable<IconBadgeProps["size"]>, string> = {
  sm: "h-10 w-10 rounded-xl [&>svg]:h-4 [&>svg]:w-4",

  md: "h-12 w-12 rounded-2xl [&>svg]:h-5 [&>svg]:w-5",

  lg: "h-16 w-16 rounded-3xl [&>svg]:h-7 [&>svg]:w-7",
};

export default function IconBadge({
  icon: Icon,
  color = "secondary",
  size = "md",
  className,
}: IconBadgeProps) {
  const { bg, text } = colorMap[color];

  return (
    <span
      className={cn(
        `
        inline-flex
        shrink-0
        items-center
        justify-center

        border

        shadow-sm

        transition-all
        duration-300

        group-hover:-translate-y-0.5
        group-hover:scale-105
        `,
        bg,
        text,
        sizeMap[size],
        className,
      )}
    >
      <Icon strokeWidth={2} />
    </span>
  );
}
