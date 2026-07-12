import { memo } from "react";

import { DAYS_OF_WEEK } from "../constants";

interface CalendarGridProps {
  days: number[];
  markedDay: number;
  leadBlanks: number;
}

function CalendarGrid({ days, markedDay, leadBlanks }: CalendarGridProps) {
  return (
    <div className="grid grid-cols-7 gap-2">
      {/* Days of Week */}

      {DAYS_OF_WEEK.map((day) => (
        <div
          key={day}
          className="
            mb-2

            text-center

            text-[11px]
            font-semibold

            uppercase
            tracking-wide

            text-slate-400
          "
        >
          {day}
        </div>
      ))}

      {/* Empty Cells */}

      {Array.from({ length: leadBlanks }).map((_, index) => (
        <div
          key={`blank-${index}`}
          className="
            h-10
            w-10
          "
        />
      ))}

      {/* Calendar Days */}

      {days.map((day) => {
        const isMarked = day === markedDay;

        return (
          <div
            key={day}
            className={`
              flex
              h-10
              w-10

              items-center
              justify-center

              rounded-xl

              text-sm
              font-medium

              transition-all
              duration-300

              ${
                isMarked
                  ? `
                    border
                    border-[#2374B6]/20

                    bg-[#2374B6]

                    text-white

                    shadow-[0_10px_24px_rgba(35,116,182,.22)]

                    scale-105
                  `
                  : `
                    text-slate-600

                    hover:bg-[#EDF5FC]
                    hover:text-[#113358]
                  `
              }
            `}
          >
            {day}
          </div>
        );
      })}
    </div>
  );
}

export default memo(CalendarGrid);
