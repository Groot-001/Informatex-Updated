import type { ReactNode } from "react";

interface MetricCardProps {
  title: string;
  value: string;
  icon: ReactNode;
}

export default function MetricCard({ title, value, icon }: MetricCardProps) {
  return (
    <div
      className="
        rounded-xl

        border
        border-[#E7EEF6]

        bg-white

        p-3.5

        transition-all
        duration-300

        hover:-translate-y-0.5
        hover:shadow-md
      "
    >
      <div className="flex items-center justify-between">
        <span
          className="
            text-[11px]
            font-medium

            text-slate-500
          "
        >
          {title}
        </span>

        <div className="scale-90">{icon}</div>
      </div>

      <h3
        className="
          mt-2

          text-xl
          font-bold
          tracking-tight

          text-[#113358]
        "
      >
        {value}
      </h3>
    </div>
  );
}
