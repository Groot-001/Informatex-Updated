import { motion, AnimatePresence } from "framer-motion";
import type { JourneyMilestone } from "./types";

interface CalendarWidgetProps {
  milestone: JourneyMilestone;
}

export default function CalendarWidget({ milestone }: CalendarWidgetProps) {
  return (
    <div
      className="
      rounded-[28px]
      border
      border-[#D7E5F3]
      bg-white
      p-8
      shadow-xl
      shadow-[#093254]/5
    "
    >
      <p
        className="
        text-xs
        font-semibold
        uppercase
        tracking-[0.25em]
        text-[#2374B6]
      "
      >
        {milestone.month}
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={milestone.year}
          initial={{
            rotateX: 90,
            opacity: 0,
          }}
          animate={{
            rotateX: 0,
            opacity: 1,
          }}
          exit={{
            rotateX: -90,
            opacity: 0,
          }}
          transition={{
            duration: 0.45,
          }}
        >
          <h2
            className="
            mt-4
            text-7xl
            font-bold
            tracking-tight
            text-[#093254]
          "
          >
            {milestone.year}
          </h2>
        </motion.div>
      </AnimatePresence>

      <div className="my-8 h-px bg-[#D7E5F3]" />

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
        mt-4
        leading-8
        text-[#546577]
      "
      >
        {milestone.description}
      </p>
    </div>
  );
}
