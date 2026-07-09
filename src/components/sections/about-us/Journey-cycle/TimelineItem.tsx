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
          opacity: active ? 1 : 0.45,
          scale: active ? 1 : 0.97,
          y: active ? 0 : 20,
        }}
        transition={{
          duration: 0.45,
        }}
        className="
          relative
          flex
          gap-8
        "
      >
        {/* Year */}

        <motion.div
          animate={{
            color: active ? "#093254" : "#94A3B8",
          }}
          className="
            w-32
            text-right
            text-5xl
            font-bold
          "
        >
          {milestone.year}
        </motion.div>

        {/* Timeline */}

        <div className="relative flex flex-col items-center">
          <motion.div
            animate={{
              scale: active ? 1.3 : 1,
              backgroundColor: active ? "#2374B6" : "#ffffff",
            }}
            className="
              z-10
              h-5
              w-5
              rounded-full
              border-4
              border-[#2374B6]
            "
          />

          <div
            className="
              h-40
              w-[2px]
              bg-[#D7E5F3]
            "
          />
        </div>

        {/* Card */}

        <motion.div
          animate={{
            boxShadow: active
              ? "0 20px 50px rgba(9,50,84,.12)"
              : "0 8px 25px rgba(0,0,0,.04)",
          }}
          className="
            flex-1
            rounded-[28px]
            border
            border-[#D7E5F3]
            bg-white
            p-8
          "
        >
          <h3
            className="
              text-2xl
              font-bold
              text-[#093254]
            "
          >
            {milestone.title}
          </h3>

          <p
            className="
              mt-5
              leading-8
              text-[#546577]
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
