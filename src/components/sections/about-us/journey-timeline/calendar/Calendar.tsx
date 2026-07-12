import { memo } from "react";
import { CalendarDays } from "lucide-react";

import type { CalendarState, Milestone } from "../types";

import { getGridData } from "../utils";

import CalendarFooter from "./CalendarFooter";
import CalendarGrid from "./CalendarGrid";
import CalendarHeader from "./CalendarHeader";

interface CalendarProps {
  calendarState: CalendarState;
  milestones: Milestone[];
}

function Calendar({ calendarState, milestones }: CalendarProps) {
  const {
    activeIndex,
    isFlipping,
    isFooterSwapping,
    previousMonth,
    previousYear,
    previousMarkedDay,
    previousLeadBlanks,
  } = calendarState;

  const current = milestones[activeIndex];

  const { days, markedDay, leadBlanks } = getGridData(activeIndex);

  const previousDays = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="mx-auto w-full max-w-[360px]">
      <div
        className={`
          relative
          overflow-hidden
          rounded-[30px]
          border
          bg-white
          shadow-[0_20px_60px_rgba(17,51,88,.08)]
          transition-all
          duration-500

          ${
            isFlipping
              ? "border-[#2374B6]/30 shadow-[0_30px_80px_rgba(35,116,182,.16)]"
              : "border-[#DCEAF6]"
          }
        `}
      >
        {/* Accent */}

        <div className="h-1 w-full bg-[#2374B6]" />

        {/* Header */}

        <CalendarHeader activeIndex={activeIndex} total={milestones.length} />

        {/* Calendar */}

        <div
          className="relative"
          style={{
            perspective: "1400px",
          }}
        >
          {/* Current */}

          <div className="px-8 pt-7 pb-5">
            <div
              className="
                inline-flex
                items-center
                gap-2
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
              <CalendarDays className="h-4 w-4" />

              {current.month}
            </div>

            <div
              className="
                mt-6
                text-center
                text-7xl
                font-bold
                leading-none
                tracking-tight
                text-[#113358]
              "
            >
              {current.year}
            </div>

            <div className="mt-8">
              <CalendarGrid
                days={days}
                markedDay={markedDay}
                leadBlanks={leadBlanks}
              />
            </div>
          </div>

          {/* Previous */}

          <div
            className={`
              absolute
              inset-0
              origin-top
              bg-white
              px-8
              pt-7
              pb-5
              transition-transform
              duration-700

              ${isFlipping ? "rotate-x-[-180deg]" : ""}
            `}
            style={{
              backfaceVisibility: "hidden",
              transitionTimingFunction: "cubic-bezier(.6,.02,.28,1)",
            }}
          >
            <div
              className="
                inline-flex
                items-center
                gap-2
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
              <CalendarDays className="h-4 w-4" />

              {previousMonth}
            </div>

            <div
              className="
                mt-6
                text-center
                text-7xl
                font-bold
                leading-none
                tracking-tight
                text-[#113358]
              "
            >
              {previousYear}
            </div>

            <div className="mt-8">
              <CalendarGrid
                days={previousDays}
                markedDay={previousMarkedDay}
                leadBlanks={previousLeadBlanks}
              />
            </div>
          </div>
        </div>

        {/* Legend */}

        <div
          className="
            flex
            items-center
            justify-center
            gap-2
            border-y
            border-[#EEF4FA]
            py-4
            text-xs
            font-medium
            text-slate-500
          "
        >
          <span className="h-2 w-2 rounded-full bg-[#2374B6]" />
          Current Milestone
        </div>

        {/* Footer */}

        <CalendarFooter
          title={current.title}
          isFooterSwapping={isFooterSwapping}
        />
      </div>
    </div>
  );
}

export default memo(Calendar);
