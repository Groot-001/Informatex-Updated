import { motion, type Variants } from "framer-motion";

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
    },
  },
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -8 }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className="
        group
        relative

        overflow-hidden

        rounded-3xl

        border
        border-[#ECE9FF]

        bg-white

        px-7
        py-10

        text-center

        shadow-[0_8px_30px_rgba(15,23,42,0.04)]

        transition-all
        duration-300

        hover:border-[#CFC3FF]
        hover:shadow-[0_25px_60px_rgba(92,75,199,.12)]
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

          text-slate-900

          transition-colors
          duration-300

          group-hover:text-violet-700
        "
      >
        {service.title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-5

          text-[15px]
          leading-7

          text-slate-500
        "
      >
        {service.description}
      </p>

      {/* Bottom Accent */}

      <span
        className="
          absolute

          bottom-0
          left-1/2

          h-1
          w-0

          -translate-x-1/2

          rounded-full

          bg-violet-600

          transition-all
          duration-300

          group-hover:w-20
        "
      />
    </motion.article>
  );
}
