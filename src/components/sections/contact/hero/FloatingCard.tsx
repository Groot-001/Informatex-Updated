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
        rotate: [0, 2, 0, -2, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      whileHover={{
        y: -10,
        scale: 1.08,
      }}
      className={`
        absolute
        ${className}

        group

        flex
        h-20
        w-20

        items-center
        justify-center

        rounded-[28px]

        border
        border-soft

        bg-surface

        shadow-brand
      `}
    >
      <div
        className="
          absolute
          inset-0
          rounded-[28px]
          bg-secondary/5
          opacity-0
          transition
          group-hover:opacity-100
        "
      />

      <Icon
        className="
          relative

          h-8
          w-8

          text-secondary
        "
      />
    </motion.div>
  );
}
