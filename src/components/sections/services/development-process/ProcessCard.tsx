import { motion } from "framer-motion";

import type { ProcessStep as ProcessStepType } from "./types";
import { cardReveal } from "./variants";

type Props = {
  step: ProcessStepType;
};

export default function ProcessCard({ step }: Props) {
  const Icon = step.icon;

  return (
    <motion.article
      variants={cardReveal}
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        relative

        mt-8

        overflow-hidden

        rounded-3xl

        border
        border-violet-100

        bg-white

        px-6
        py-8

        shadow-sm

        transition-all
        duration-300

        hover:border-violet-300
        hover:shadow-xl
      "
    >
      {/* Light Sweep */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
        <div
          className="
            absolute
            left-[-120%]
            top-0

            h-full
            w-[40%]

            -skew-x-12

            bg-linear-to-r
            from-transparent
            via-white/60
            to-transparent

            transition-transform
            duration-700

            group-hover:translate-x-[500%]
          "
        />
      </div>

      {/* Icon */}

      <div
        className="
          mx-auto

          flex
          h-16
          w-16

          items-center
          justify-center

          rounded-2xl

          bg-violet-50

          transition-all
          duration-300

          group-hover:scale-110
          group-hover:bg-violet-100
        "
      >
        <Icon
          className="
            h-8
            w-8

            text-violet-600

            transition-transform
            duration-300

            group-hover:rotate-6
          "
        />
      </div>

      {/* Title */}

      <h3
        className="
          mt-6

          text-center

          text-xl
          font-semibold

          text-slate-900
        "
      >
        {step.title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-4

          text-center

          text-sm
          leading-7

          text-slate-500
        "
      >
        {step.description}
      </p>
    </motion.article>
  );
}
