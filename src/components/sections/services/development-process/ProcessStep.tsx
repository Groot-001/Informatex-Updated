import { motion } from "framer-motion";

type ProcessStepProps = {
  number: string;
};

export default function ProcessStep({ number }: ProcessStepProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        relative
        z-20

        mx-auto

        flex
        items-center
        justify-center
      "
    >
      {/* Outer Ring */}

      <div
        className="
          absolute

          h-20
          w-20

          rounded-full

          border
          border-[#2374B6]/15

          bg-[#EDF5FC]/60

          backdrop-blur-sm
        "
      />

      {/* Glow */}

      <div
        className="
          absolute

          h-16
          w-16

          rounded-full

          bg-[#2374B6]/10

          blur-xl

          transition-opacity
          duration-300

          group-hover:opacity-100
        "
      />

      {/* Main Circle */}

      <div
        className="
          relative

          flex
          h-14
          w-14

          items-center
          justify-center

          rounded-full

          bg-gradient-to-br
          from-[#113358]
          to-[#2374B6]

          text-base
          font-bold

          text-white

          shadow-[0_12px_30px_rgba(17,51,88,.22)]
        "
      >
        {number}
      </div>
    </motion.div>
  );
}
