import { Sparkles } from "lucide-react";

interface SectionBadgeProps {
  title: string;
}

export default function SectionBadge({ title }: SectionBadgeProps) {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-2

        rounded-full

        border
        border-[#DCEAF6]

        bg-[#EDF5FC]

        px-5
        py-2

        text-sm
        font-semibold

        text-[#113358]

        shadow-[0_4px_12px_rgba(17,51,88,.04)]
      "
    >
      <Sparkles
        className="
          h-4
          w-4

          text-[#2374B6]
        "
      />

      {title}
    </div>
  );
}
