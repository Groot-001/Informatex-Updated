import { ArrowRight } from "lucide-react";
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
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        relative

        mt-8

        flex
h-full
flex-col

        overflow-hidden

        rounded-[30px]

        border
        border-[#DCEAF6]

        bg-white

        p-8

        shadow-[0_18px_45px_rgba(17,51,88,.05)]

        transition-all
        duration-500

        hover:border-[#2374B6]/30
        hover:shadow-[0_30px_70px_rgba(17,51,88,.10)]
      "
    >
      {/* ================================================= */}
      {/* Background Glow */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none

          absolute

          -right-12
          -top-12

          h-40
          w-40

          rounded-full

          bg-[#2374B6]/8

          opacity-0

          blur-[90px]

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />

      <div className="relative z-10 flex h-full flex-col">
        {/* ================================================= */}
        {/* Icon */}
        {/* ================================================= */}

        <div
          className="
            flex
            h-16
            w-16

            items-center
            justify-center

            rounded-2xl

            border
            border-[#DCEAF6]

            bg-[#EDF5FC]

            text-[#2374B6]

            transition-all
            duration-300

            group-hover:scale-110
            group-hover:bg-[#2374B6]
            group-hover:text-white
          "
        >
          <Icon className="h-8 w-8" />
        </div>

        {/* ================================================= */}
        {/* Title */}
        {/* ================================================= */}

        <h3
          className="
            mt-8

            text-2xl
            font-bold

            leading-tight

            text-[#113358]

            transition-colors

            group-hover:text-[#2374B6]
          "
        >
          {step.title}
        </h3>

        {/* ================================================= */}
        {/* Description */}
        {/* ================================================= */}

        <p
          className="
            mt-5

            flex-1

            text-base
            leading-7

            text-slate-600
          "
        >
          {step.description}
        </p>

        {/* ================================================= */}
        {/* Divider */}
        {/* ================================================= */}

        <div
          className="
            mt-8

            h-px
            w-full

            bg-gradient-to-r
            from-[#2374B6]/20
            via-[#2374B6]/10
            to-transparent
          "
        />

        {/* ================================================= */}
        {/* Footer */}
        {/* ================================================= */}

        <div
          className="
            mt-6

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
          Next Step
          <ArrowRight
            className="
              h-4
              w-4

              transition-transform

              group-hover:translate-x-1
            "
          />
        </div>
      </div>
    </motion.article>
  );
}
