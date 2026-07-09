import { Rocket } from "lucide-react";

export default function HeroBadge() {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-2.5
        rounded-full
        border
        border-[#D9D2F9]
        bg-white/90
        px-6
        py-2.5
        backdrop-blur-sm
        shadow-[0_8px_24px_rgba(79,70,200,0.08)]
        transition-all
        duration-300
        ease-out
        hover:-translate-y-0.5
        hover:border-[#4F46C8]/30
        hover:shadow-[0_12px_30px_rgba(79,70,200,0.12)]
      "
    >
      <Rocket className="h-4 w-4 text-[#4F46C8]" strokeWidth={2} />

      <span
        className="
          text-sm
          font-medium
          tracking-tight
          text-[#4F46C8]
        "
      >
        Driving Digital Growth
      </span>
    </div>
  );
}
