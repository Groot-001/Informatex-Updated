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
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="
        group
        relative

        flex
        h-full
        flex-col

        overflow-hidden

        rounded-3xl

        border
        border-violet-100

        bg-white

        px-8
        py-10

        text-center

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
            left-[-130%]
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

            group-hover:translate-x-[520%]
          "
        />
      </div>

      {/* Icon */}

      <div
        className="
          mx-auto

          flex
          h-20
          w-20

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
            h-9
            w-9

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
          mt-8

          text-xl
          font-semibold

          leading-snug

          text-slate-900

          transition-colors
          duration-300

          group-hover:text-violet-700
        "
      >
        {item.title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-5

          flex-1

          text-[15px]
          leading-7

          text-slate-500
        "
      >
        {item.description}
      </p>
    </motion.article>
  );
}
