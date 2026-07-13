import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface FloatingCardProps {
  icon: LucideIcon;
  className?: string;
  delay?: number;
}

export default function FloatingCard({
  icon: Icon,
  className,
  delay = 0,
}: FloatingCardProps) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [-4, -2, -4],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      whileHover={{
        y: -8,
        rotate: 0,
        scale: 1.06,
      }}
      className={`
        group
        absolute

        flex
        h-20
        w-20

        items-center
        justify-center

        rounded-2xl

        border
        border-[#DCEAF6]

        bg-[#EDF5FC]

        shadow-[0_18px_45px_rgba(17,51,88,.08)]

        transition-all
        duration-500

        hover:border-[#2374B6]/30
        hover:shadow-[0_28px_60px_rgba(17,51,88,.14)]

        ${className}
      `}
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          rounded-2xl

          bg-gradient-to-br
          from-white/70
          to-transparent

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />

      {/* Icon */}

      <div
        className="
          relative

          flex
          h-12
          w-12

          items-center
          justify-center

          rounded-xl

          bg-white

          shadow-sm

          transition-all
          duration-300

          group-hover:scale-110
        "
      >
        <Icon
          className="
            h-6
            w-6

            text-[#2374B6]

            transition-transform
            duration-300

            group-hover:scale-110
          "
          strokeWidth={2.2}
        />
      </div>
    </motion.div>
  );
}
