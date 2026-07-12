import type { ReactNode } from "react";

interface MetricBadgeProps {
  title: string;
  value: string;
  icon?: ReactNode;
  className?: string;
}

export default function MetricBadge({
  title,
  value,
  icon,
  className = "",
}: MetricBadgeProps) {
  return (
    <div
      className={`
        absolute

        rounded-2xl

        border
        border-[#DCEAF6]

        bg-white/95

        px-5
        py-4

        backdrop-blur-md

        shadow-[0_18px_40px_rgba(17,51,88,.12)]

        ${className}
      `}
    >
      <div className="flex items-center gap-3">
        {icon && (
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center

              rounded-xl

              bg-[#EDF5FC]
            "
          >
            {icon}
          </div>
        )}

        <div>
          <h4
            className="
              text-xl
              font-bold

              text-[#113358]
            "
          >
            {value}
          </h4>

          <p
            className="
              text-xs

              text-slate-500
            "
          >
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
