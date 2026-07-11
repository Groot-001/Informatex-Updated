import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HeroBadge() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 16,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
        delay: 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div
        className="
          inline-flex
          items-center
          gap-2.5

          rounded-full

          border
          border-[#2E84D1]/15

          bg-white/75

          px-5
          py-2.5

          backdrop-blur-xl

          shadow-[0_10px_30px_rgba(17,51,88,.08)]

          transition-all
          duration-300

          hover:-translate-y-0.5
          hover:border-[#2E84D1]/30
          hover:bg-white/90
          hover:shadow-[0_16px_35px_rgba(17,51,88,.12)]
        "
      >
        <Sparkles className="h-4 w-4 text-[#2E84D1]" strokeWidth={2} />

        <span
          className="
            text-sm
            font-semibold
            tracking-wide
            text-[#113358]
          "
        >
          Driving Digital Transformation
        </span>
      </div>
    </motion.div>
  );
}
