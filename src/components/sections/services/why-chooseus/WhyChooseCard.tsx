import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import type { WhyChoose } from "./types";
import { cardReveal } from "../development-process/variants";

type WhyChooseCardProps = {
  item: WhyChoose;
};

export default function WhyChooseCard({ item }: WhyChooseCardProps) {
  const Icon = item.icon;

  return (
    <motion.article
      variants={cardReveal}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        relative

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

      {/* Top Accent */}

      <div
        className="
          absolute
          left-0
          top-0

          h-1
          w-full

          origin-left
          scale-x-0

          bg-gradient-to-r
          from-[#113358]
          via-[#2374B6]
          to-[#67B7F7]

          transition-transform
          duration-500

          group-hover:scale-x-100
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
            duration-300

            group-hover:text-[#2374B6]
          "
        >
          {item.title}
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
          {item.description}
        </p>

        {/* ================================================= */}
        {/* Footer */}
        {/* ================================================= */}

        <div
          className="
            mt-8

            flex
            items-center
            justify-between

            border-t
            border-[#EDF5FC]

            pt-6
          "
        >
          <span
            className="
              text-sm
              font-semibold

              text-[#2374B6]
            "
          >
            Trusted Solution
          </span>

          <ArrowRight
            className="
              h-5
              w-5

              text-[#2374B6]

              transition-transform
              duration-300

              group-hover:translate-x-1
            "
          />
        </div>
      </div>
    </motion.article>
  );
}
