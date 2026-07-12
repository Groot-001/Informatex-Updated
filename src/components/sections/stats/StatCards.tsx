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
        min-h-[260px]
        flex-col
        items-center
        justify-center

        overflow-hidden

        rounded-2xl

        border
        border-slate-200/70

        bg-white

        px-8
        py-10

        shadow-[0_8px_24px_rgba(15,23,42,.06)]

        transition-all
        duration-300
        ease-out

        hover:-translate-y-1
        hover:border-[#2E84D1]/25
        hover:shadow-[0_16px_36px_rgba(17,51,88,.10)]
      "
    >
      {/* Top Accent */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-1

          bg-gradient-to-r
          from-[#113358]
          via-[#2E84D1]
          to-[#113358]

          opacity-0

          transition-opacity
          duration-300

          group-hover:opacity-100
        "
      />

      {/* Light Sweep */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
          rounded-2xl
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
          h-16
          w-16
          items-center
          justify-center

          rounded-full

          bg-[#EDF5FC]

          transition-all
          duration-300

          group-hover:bg-[#E4F0FB]
        "
      >
        <Icon
          className="
            h-8
            w-8

            text-[#2E84D1]

            transition-transform
            duration-300

            group-hover:scale-105
          "
        />
      </div>

      {/* Number */}
      <h3
        className="
          mt-6

          text-4xl
          font-bold
          tracking-tight

          text-[#113358]

          transition-colors
          duration-300

          lg:text-5xl

          group-hover:text-[#2E84D1]
        "
      >
        {value}
      </h3>

      {/* Label */}
      <p
        className="
          mt-3

          text-center

          text-base
          font-semibold

          text-slate-500

          transition-colors
          duration-300

          group-hover:text-slate-700
        "
      >
        {label}
      </p>
    </article>
  );
}
