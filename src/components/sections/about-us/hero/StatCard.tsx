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
        stat-card
        group
        relative

        flex
        h-full
        w-full
        min-h-[240px]

        flex-col
        items-center
        justify-center

        overflow-hidden

        rounded-[28px]

        border
        border-[#ECE9FF]

        bg-white

        px-8
        py-8

        shadow-[0_10px_30px_rgba(15,23,42,0.05)]

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
          rounded-[28px]
        "
      >
        <div
          className="
            absolute
            left-[-130%]
            top-0

            h-full
            w-[45%]

            -skew-x-12

            bg-gradient-to-r
            from-transparent
            via-white/50
            to-transparent

            transition-transform
            duration-700

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

      {/* Value */}

      <h3
        className="
          mt-7

          text-5xl
          font-bold
          tracking-tight

          text-[#5C4BC7]
        "
      >
        {value}
      </h3>

      {/* Label */}

      <p
        className="
          mt-3

          max-w-[220px]

          text-center

          text-lg
          font-medium
          leading-7

          text-slate-600
        "
      >
        {label}
      </p>
    </article>
  );
}
