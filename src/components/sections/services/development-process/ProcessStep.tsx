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
        h-14
        w-14

        items-center
        justify-center

        rounded-full

        border-4
        border-white

        bg-violet-600

        text-lg
        font-bold

        text-white

        shadow-lg
      "
    >
      {number}
    </motion.div>
  );
}
