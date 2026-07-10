import { forwardRef } from "react";
import { motion } from "framer-motion";
import type { JourneyMilestone } from "./types";

interface Props {
  milestone: JourneyMilestone;
  active: boolean;
  index: number;
}

const TimelineItem = forwardRef<HTMLDivElement, Props>(
  ({ milestone, active, index }, ref) => {
    return (
      <motion.div
        ref={ref}
        data-index={index}
        animate={{
          opacity: active ? 1 : 0.55,
          scale: active ? 1 : 0.97,
        }}
        transition={{
          duration: 0.45,
          ease: "easeOut",
        }}
        className="
          relative
          flex
          flex-col
          gap-6

          lg:flex-row
          lg:gap-10
        "
      >
        {/* Mobile Year */}

        <div
          className="
            inline-flex
            w-fit
            rounded-full
            border
            border-[#C0C1FF]/20
            bg-[#C0C1FF]/10
            px-4
            py-2
            text-sm
            font-semibold
            text-[#C0C1FF]

            lg:hidden
          "
        >
          {milestone.year}
        </div>

        {/* Desktop Year */}

        <motion.div
          animate={{
            color: active ? "#C0C1FF" : "#64748B",
            scale: active ? 1.08 : 1,
          }}
          transition={{
            duration: 0.35,
          }}
          className="
            hidden
            w-32
            shrink-0
            pt-2
            text-right
            text-5xl
            font-bold
            lg:block
          "
        >
          {milestone.year}
        </motion.div>

        {/* Timeline */}

        <div
          className="
            relative
            hidden
            flex-col
            items-center

            lg:flex
          "
        >
          {/* Pulse */}

          {active && (
            <motion.div
              className="
                absolute
                top-0
                h-5
                w-5
                rounded-full
                bg-[#C0C1FF]/20
              "
              animate={{
                scale: [1, 2.2],
                opacity: [0.7, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
            />
          )}

          {/* Dot */}

          <motion.div
            animate={{
              scale: active ? 1.3 : 1,
              backgroundColor: active ? "#C0C1FF" : "#020617",
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              relative
              z-10
              h-5
              w-5
              rounded-full
              border-4
              border-[#C0C1FF]
            "
          />

          {/* Connector */}

          <div
            className="
              relative
              mt-2
              h-44
              w-px
              overflow-hidden
              bg-white/10
            "
          >
            <motion.div
              initial={{
                height: 0,
              }}
              animate={{
                height: active ? "100%" : "0%",
              }}
              transition={{
                duration: 0.55,
              }}
              className="
                absolute
                bottom-0
                left-0
                w-full
                bg-gradient-to-b
                from-[#C0C1FF]
                to-[#7C5CFC]
              "
            />
          </div>
        </div>

        {/* Content Card */}

        <motion.div
          animate={{
            borderColor: active
              ? "rgba(192,193,255,.25)"
              : "rgba(255,255,255,.08)",

            boxShadow: active
              ? "0 30px 70px rgba(0,0,0,.45)"
              : "0 10px 25px rgba(0,0,0,.18)",
          }}
          transition={{
            duration: 0.35,
          }}
          className="
            flex-1
            overflow-hidden
            rounded-[28px]
            border
            border-white/10
            bg-white/[0.04]
            p-6
            backdrop-blur-xl

            md:p-8
          "
        >
          {/* Month */}

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#DDB7FF]
            "
          >
            {milestone.month}
          </p>

          {/* Title */}

          <h3
            className="
              mt-3
              text-2xl
              font-bold
              text-white

              md:text-3xl
            "
          >
            {milestone.title}
          </h3>

          {/* Description */}

          <p
            className="
              mt-5
              max-w-2xl
              text-[15px]
              leading-8
              text-slate-300
            "
          >
            {milestone.description}
          </p>
        </motion.div>
      </motion.div>
    );
  },
);

TimelineItem.displayName = "TimelineItem";

export default TimelineItem;
