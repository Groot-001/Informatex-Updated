import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

import type { Service } from "./types";

type ServiceCardProps = {
  service: Service;
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className="
        group
        relative

        overflow-hidden

        rounded-[32px]

        border
        border-[#DCEAF6]

        bg-white

        p-9

        shadow-[0_18px_50px_rgba(17,51,88,.05)]

        transition-all
        duration-500

        hover:border-[#2374B6]/25
        hover:shadow-[0_30px_80px_rgba(17,51,88,.10)]
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

          blur-[80px]

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
            group-hover:border-[#2374B6]
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
          {service.title}
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
          {service.description}
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
          Learn More
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
      </div>
    </motion.article>
  );
}
