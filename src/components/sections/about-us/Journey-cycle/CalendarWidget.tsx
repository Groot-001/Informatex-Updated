import { AnimatePresence, motion } from "framer-motion";
import type { JourneyMilestone } from "./types";

interface CalendarWidgetProps {
  milestone: JourneyMilestone;
}

export default function CalendarWidget({ milestone }: CalendarWidgetProps) {
  return (
    <motion.div
      layout
      className="
        overflow-hidden
        rounded-[30px]
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-2xl
        shadow-[0_32px_80px_rgba(0,0,0,.45)]
      "
    >
      {/* Top Accent */}
      <div className="h-[3px] bg-gradient-to-r from-[#C0C1FF] to-[#DDB7FF]" />

      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-5">
        <div className="flex items-center gap-2">
          <div className="h-3.5 w-3.5 rounded bg-gradient-to-br from-[#C0C1FF] to-[#DDB7FF]" />

          <span
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-slate-300
            "
          >
            Informatex
          </span>
        </div>

        <span
          className="
            rounded-full
            border
            border-[#C0C1FF]/20
            bg-[#C0C1FF]/10
            px-3
            py-1
            text-[10px]
            font-semibold
            tracking-[0.12em]
            text-[#C0C1FF]
          "
        >
          Journey
        </span>
      </div>

      <div className="mx-6 mt-4 h-px bg-white/10" />

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={milestone.year}
          initial={{
            rotateX: 90,
            opacity: 0,
            y: 20,
          }}
          animate={{
            rotateX: 0,
            opacity: 1,
            y: 0,
          }}
          exit={{
            rotateX: -90,
            opacity: 0,
            y: -20,
          }}
          transition={{
            duration: 0.55,
            ease: "easeInOut",
          }}
          className="px-7 py-7"
        >
          {/* Month */}
          <p
            className="
              text-center
              text-xs
              font-semibold
              uppercase
              tracking-[0.35em]
              text-[#DDB7FF]
            "
          >
            {milestone.month}
          </p>

          {/* Year */}
          <h2
            className="
              mt-2
              text-center
              text-7xl
              font-bold
              leading-none
              tracking-tight
              text-[#C0C1FF]
            "
          >
            {milestone.year}
          </h2>

          {/* Divider */}
          <div className="my-6 h-px bg-white/10" />

          {/* Fake Calendar */}
          <div className="grid grid-cols-7 gap-2">
            {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
              <span
                key={day}
                className="
                  text-center
                  text-[10px]
                  text-slate-500
                "
              >
                {day}
              </span>
            ))}

            {Array.from({ length: 35 }).map((_, index) => {
              const active = index === 17;

              return (
                <div
                  key={index}
                  className={`
                    flex
                    h-8
                    items-center
                    justify-center
                    rounded-md
                    text-[11px]

                    ${
                      active
                        ? "bg-[#C0C1FF]/20 text-[#C0C1FF] ring-1 ring-[#C0C1FF]/30"
                        : "text-slate-500"
                    }
                  `}
                >
                  {index < 30 ? index + 1 : ""}
                </div>
              );
            })}
          </div>

          {/* Divider */}
          <div className="my-6 h-px bg-white/10" />

          {/* Footer */}
          <h3
            className="
              text-xl
              font-semibold
              text-white
            "
          >
            {milestone.title}
          </h3>

          <p
            className="
              mt-3
              text-[15px]
              leading-7
              text-slate-300
            "
          >
            {milestone.description}
          </p>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
