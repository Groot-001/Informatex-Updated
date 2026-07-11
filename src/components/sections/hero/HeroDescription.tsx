import { motion } from "framer-motion";

export default function HeroDescription() {
  return (
    <motion.p
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
        delay: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        mt-8

        max-w-3xl

        text-pretty

        text-base
        leading-7

        text-slate-600

        sm:text-lg
        sm:leading-8

        lg:text-xl
        lg:leading-9
      "
    >
      We help organizations build secure, scalable, and future-ready digital
      solutions that accelerate innovation, improve efficiency, and drive
      long-term business growth.
    </motion.p>
  );
}
