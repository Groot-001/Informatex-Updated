import { Smartphone } from "lucide-react";

type HeroBadgeProps = {
  label?: string;
};

export default function HeroBadge({
  label = "App Development",
}: HeroBadgeProps) {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-2

        rounded-full
        border
        border-violet-200

        bg-white

        px-4
        py-2

        shadow-sm
      "
    >
      <Smartphone
        className="
          h-4
          w-4

          text-violet-600
        "
      />

      <span
        className="
          text-xs
          font-semibold
          uppercase
          tracking-wide

          text-violet-700

          sm:text-sm
        "
      >
        {label}
      </span>
    </div>
  );
}
