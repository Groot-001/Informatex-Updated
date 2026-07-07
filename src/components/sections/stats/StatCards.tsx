import type { LucideIcon } from "lucide-react";

type StatCardProps = {
  value: string;
  label: string;
  icon: LucideIcon;
};

export default function StatCard({ value, label, icon: Icon }: StatCardProps) {
  return (
    <article
      className="
        group
        relative
        flex
        min-h-65
        flex-col
        items-center
        justify-center
        overflow-hidden
        rounded-3xl
        border
        border-[#ECE9FF]
        bg-white
        px-8
        py-10

        shadow-[0_8px_30px_rgba(15,23,42,0.05)]

        transition-all
        duration-300
        ease-out

        hover:-translate-y-2
        hover:border-[#C4B5FD]
        hover:shadow-[0_25px_60px_rgba(92,75,199,.12)]
      "
    >
      {/* Light Sweep */}
      <div
        className="
    pointer-events-none
    absolute
    inset-0
    overflow-hidden
    rounded-3xl
  "
      >
        <div
          className="
      absolute
      top-0
      left-[-130%]

      h-full
      w-[45%]

      -skew-x-12

      bg-gradient-to-r
      from-transparent
      via-white/50
      to-transparent

      transition-transform
      duration-700
      ease-out

      group-hover:translate-x-[520%]
    "
        />
      </div>

      {/* Icon */}
      <div
        className="
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full

          bg-[#F6F3FF]

          transition-all
          duration-300
          ease-out

          group-hover:scale-110
          group-hover:bg-[#EEE8FF]
        "
      >
        <Icon
          className="
            h-9
            w-9
            text-[#5C4BC7]

            transition-transform
            duration-300

            group-hover:rotate-3
          "
        />
      </div>

      {/* Number */}
      <h3
        className="
          mt-8
          text-5xl
          font-bold
          tracking-tight

          text-[#5C4BC7]

          transition-colors
          duration-300

          group-hover:text-[#4F46E5]
        "
      >
        {value}
      </h3>

      {/* Label */}
      <p
        className="
          mt-3
          text-center
          text-lg
          font-medium

          text-slate-600

          transition-colors
          duration-300

          group-hover:text-slate-900
        "
      >
        {label}
      </p>
    </article>
  );
}
