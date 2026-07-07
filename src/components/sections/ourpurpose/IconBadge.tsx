import React from "react";
import type { LucideIcon } from "lucide-react";
import type { AccentColor } from "../../types";

interface IconBadgeProps {
  icon: LucideIcon;
  color?: AccentColor;
  size?: "sm" | "md" | "lg";
}

const colorMap: Record<AccentColor, { bg: string; text: string }> = {
  purple: { bg: "bg-violet-100", text: "text-violet-600" },
  pink: { bg: "bg-rose-100", text: "text-rose-600" },
  green: { bg: "bg-emerald-100", text: "text-emerald-600" },
  orange: { bg: "bg-orange-100", text: "text-orange-600" },
  blue: { bg: "bg-blue-100", text: "text-blue-600" },
  teal: { bg: "bg-teal-100", text: "text-teal-600" },
  indigo: { bg: "bg-indigo-100", text: "text-indigo-600" },
};

const sizeMap: Record<NonNullable<IconBadgeProps["size"]>, string> = {
  sm: "h-9 w-9 rounded-lg [&>svg]:h-4 [&>svg]:w-4",
  md: "h-11 w-11 rounded-xl [&>svg]:h-5 [&>svg]:w-5",
  lg: "h-14 w-14 rounded-full [&>svg]:h-6 [&>svg]:w-6",
};

export default function IconBadge({
  icon: Icon,
  color = "indigo",
  size = "md",
}: IconBadgeProps) {
  const { bg, text } = colorMap[color];

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-105 ${bg} ${text} ${sizeMap[size]}`}
    >
      <Icon strokeWidth={2} />
    </span>
  );
}
