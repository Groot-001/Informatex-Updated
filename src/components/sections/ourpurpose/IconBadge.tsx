import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconBadgeProps {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap: Record<NonNullable<IconBadgeProps["size"]>, string> = {
  sm: "h-11 w-11 rounded-xl [&>svg]:h-5 [&>svg]:w-5",

  md: "h-14 w-14 rounded-2xl [&>svg]:h-6 [&>svg]:w-6",

  lg: "h-16 w-16 rounded-2xl [&>svg]:h-7 [&>svg]:w-7",
};

export default function IconBadge({
  icon: Icon,
  size = "md",
  className,
}: IconBadgeProps) {
  return (
    <span
      className={cn(
        `
        inline-flex
        shrink-0
        items-center
        justify-center

        border
        border-[#D7E7F5]

        bg-[#EDF5FC]

        text-[#113358]

        shadow-[0_10px_24px_rgba(17,51,88,0.06)]

        transition-all
        duration-300
        ease-out

        group-hover:bg-[#E3F0FB]
        group-hover:border-[#B7D8F4]
        group-hover:text-[#2374B6]
        group-hover:shadow-[0_14px_32px_rgba(17,51,88,0.10)]
        `,
        sizeMap[size],
        className,
      )}
    >
      <Icon strokeWidth={2} />
    </span>
  );
}
