import { CalendarDays } from "lucide-react";

interface CalendarHeaderProps {
  activeIndex: number;
  total: number;
}

export default function CalendarHeader({
  activeIndex,
  total,
}: CalendarHeaderProps) {
  return (
    <>
      {/* Top Accent */}

      <div className="h-1 w-full bg-[#2374B6]" />

      {/* Header */}

      <div
        className="
          flex
          items-center
          justify-between

          px-6
          py-5
        "
      >
        {/* Brand */}

        <div
          className="
            inline-flex
            items-center
            gap-3
          "
        >
          <div
            className="
              flex
              h-10
              w-10

              items-center
              justify-center

              rounded-xl

              bg-[#EDF5FC]

              text-[#2374B6]
            "
          >
            <CalendarDays className="h-5 w-5" />
          </div>

          <div>
            <p
              className="
                text-xs
                font-semibold

                uppercase
                tracking-[0.18em]

                text-slate-400
              "
            >
              Journey
            </p>

            <h4
              className="
                text-base
                font-bold

                text-[#113358]
              "
            >
              Informatex Tech
            </h4>
          </div>
        </div>

        {/* Progress */}

        <div
          className="
            inline-flex
            items-center

            rounded-full

            border
            border-[#DCEAF6]

            bg-[#EDF5FC]

            px-4
            py-2

            text-sm
            font-semibold

            text-[#2374B6]
          "
        >
          {String(activeIndex + 1).padStart(2, "0")}
          <span className="mx-2 text-slate-400">/</span>
          {String(total).padStart(2, "0")}
        </div>
      </div>

      {/* Divider */}

      <div className="mx-6 h-px bg-[#EEF4FA]" />
    </>
  );
}
