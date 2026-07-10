import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  label: string;
  value: string;
  className?: string;
}

export default function FloatingContactCard({
  icon: Icon,
  label,
  value,
  className = "",
}: Props) {
  return (
    <div
      className={`
        absolute
        ${className}

        flex
        items-center
        gap-4

        rounded-2xl
        border
        border-[#E6EDF5]

        bg-white

        px-5
        py-4

        shadow-[0_15px_40px_rgba(9,50,84,.08)]
      `}
    >
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center

          rounded-xl

          bg-[#216FAE]/10
        "
      >
        <Icon className="h-6 w-6 text-[#216FAE]" strokeWidth={2} />
      </div>

      <div>
        <p className="text-xs text-[#617186]">{label}</p>

        <p className="mt-1 text-sm font-semibold text-[#0F2238]">{value}</p>
      </div>
    </div>
  );
}
