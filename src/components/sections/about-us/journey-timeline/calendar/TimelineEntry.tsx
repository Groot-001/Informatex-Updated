import { memo } from "react";
import { ArrowRight, CalendarDays } from "lucide-react";

import type { Milestone } from "../types";

interface TimelineEntryProps {
  milestone: Milestone;
  focus: number;
  state: "idle" | "passed" | "active";
  reduceMotion: boolean;
}

function TimelineEntry({
  milestone,
  focus,
  state,
  reduceMotion,
}: TimelineEntryProps) {
  const isActive = state === "active";
  const isPassed = state === "passed";

  return (
    <div className="flex items-start">
      {/* ================================================= */}
      {/* Year */}
      {/* ================================================= */}

      <div
        className="
          w-40
          shrink-0
          pr-8
          text-right
          font-bold
          leading-none
          transition-all
          duration-500
          lg:w-48
        "
        style={{
          fontSize: `${42 + focus * 16}px`,
          color: isActive || isPassed ? "#2374B6" : "#94A3B8",
          opacity: 0.35 + focus * 0.65,
        }}
      >
        {milestone.year}
      </div>

      {/* ================================================= */}
      {/* Timeline */}
      {/* ================================================= */}

      <div className="relative mr-8 flex w-10 justify-center">
        {/* Vertical Line */}

        <div
          className="
            absolute
            top-0
            bottom-0
            w-[2px]
            bg-[#DCEAF6]
          "
        />

        {/* Node */}

        <div
          className={`
            relative
            z-10
            mt-2
            flex
            h-5
            w-5
            items-center
            justify-center
            rounded-full
            border-4
            border-white
            transition-all
            duration-500

            ${
              isActive
                ? "bg-[#2374B6] shadow-[0_0_0_8px_rgba(35,116,182,.12)]"
                : isPassed
                  ? "bg-[#2374B6]"
                  : "border-[#DCEAF6] bg-white"
            }
          `}
        >
          {isActive && !reduceMotion && (
            <span
              className="
                absolute
                -inset-3
                rounded-full
                border
                border-[#2374B6]/40
                animate-ping
              "
            />
          )}
        </div>
      </div>

      {/* ================================================= */}
      {/* Card */}
      {/* ================================================= */}

      <article
        className={`
          group
          relative
          mb-16
          flex-1
          overflow-hidden
          rounded-[30px]
          border
          bg-white
          p-8
          shadow-[0_18px_45px_rgba(17,51,88,.05)]
          transition-all
          duration-500
          hover:-translate-y-2
          hover:shadow-[0_30px_70px_rgba(17,51,88,.10)]

          ${isActive ? "border-[#2374B6]/30" : "border-[#DCEAF6]"}
        `}
        style={{
          opacity: 0.55 + focus * 0.45,
          transform: `scale(${0.98 + focus * 0.02})`,
        }}
      >
        {/* Accent */}

        <div
          className="
            absolute
            left-0
            top-0
            h-full
            w-1
            rounded-full
            bg-[#2374B6]
            transition-all
            duration-500
            group-hover:w-1.5
          "
        />

        {/* Date */}

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
            font-medium
            text-[#2374B6]
          "
        >
          <CalendarDays className="h-4 w-4" />

          <span>
            {milestone.month} {milestone.day}
          </span>
        </div>

        {/* Title */}

        <h3
          className="
            mt-6
            text-3xl
            font-bold
            leading-tight
            text-[#113358]
            transition-colors
            duration-300
            group-hover:text-[#2374B6]
          "
        >
          {milestone.title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-5
            max-w-2xl
            text-base
            leading-8
            text-slate-600
          "
        >
          {milestone.body}
        </p>

        {/* Footer */}

        <div
          className="
            mt-8
            inline-flex
            items-center
            gap-2
            text-sm
            font-semibold
            text-[#2374B6]
            transition-all
            duration-300
            group-hover:gap-3
          "
        >
          <span>Continue Journey</span>

          <ArrowRight
            className="
              h-4
              w-4
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </div>
      </article>
    </div>
  );
}

export default memo(TimelineEntry);
