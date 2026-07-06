import { Rocket } from "lucide-react";

export default function HeroBadge() {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-[#CFC3FF]
        bg-white
        px-5
        py-2
        shadow-[0_4px_12px_rgba(92,75,199,0.08)]
        transition-all
        duration-300
        hover:border-[#5C4BC7]
        hover:shadow-[0_8px_20px_rgba(92,75,199,0.15)]
      "
    >
      <Rocket className="h-4 w-4 text-[#5C4BC7]" strokeWidth={2} />

      <span
        className="
          text-sm
          font-medium
          tracking-tight
          text-[#5C4BC7]
        "
      >
        Driving Digital Growth
      </span>
    </div>
  );
}
