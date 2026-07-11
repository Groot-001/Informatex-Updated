import { motion } from "framer-motion";

export default function HeroHeading() {
  return (
    <motion.h1
      id="hero-heading"
      initial={{
        opacity: 0,
        y: 28,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.75,
        delay: 0.25,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        mt-8

        max-w-4xl

        text-4xl
        font-extrabold

        leading-tight
        tracking-[-0.04em]

        text-[#1B1B1B]

        sm:text-5xl
        md:text-6xl
        lg:text-7xl
      "
    >
      Your{" "}
      <span
        className="
          bg-gradient-to-r
          from-[#113358]
          via-[#2E84D1]
          to-[#113358]

          bg-clip-text
          text-transparent
        "
      >
        Technology Partner
      </span>{" "}
      for the
      <br />
      Digital Future
    </motion.h1>
  );
}
