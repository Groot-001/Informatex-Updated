import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

export default function HeroActions() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.75,
        delay: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        mt-10

        flex
        flex-col
        items-center
        gap-4

        sm:flex-row
        sm:justify-center
      "
    >
      {/* Primary Button */}

      <Link to="/contact">
        <Button
          size="lg"
          className="
            group

            h-14
            rounded-full

            bg-gradient-to-r
            from-[#113358]
            via-[#1D5D97]
            to-[#2E84D1]

            px-8

            text-base
            font-semibold
            text-white

            shadow-[0_14px_35px_rgba(17,51,88,.18)]

            transition-all
            duration-300

            hover:-translate-y-1
            hover:shadow-[0_20px_45px_rgba(17,51,88,.28)]

            active:scale-[0.98]
          "
        >
          <span className="flex items-center gap-2">
            Get Started
            <ArrowRight
              className="
                h-4
                w-4

                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            />
          </span>
        </Button>
      </Link>

      {/* Secondary Button */}

      <Link to="/products">
        <Button
          variant="outline"
          size="lg"
          className="
            h-14

            rounded-full

            border
            border-[#113358]/15

            bg-white/70

            px-8

            font-semibold
            text-[#113358]

            backdrop-blur-md

            transition-all
            duration-300

            hover:-translate-y-1

            hover:border-[#2E84D1]/30

            hover:bg-white

            hover:shadow-[0_14px_35px_rgba(17,51,88,.10)]

            active:scale-[0.98]
          "
        >
          View Our Work
        </Button>
      </Link>
    </motion.div>
  );
}
