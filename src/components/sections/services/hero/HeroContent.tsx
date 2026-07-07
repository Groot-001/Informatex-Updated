import { motion, type Variants } from "framer-motion";
import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButton";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
    },
  },
};

export default function HeroContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="
        flex
        flex-col
        items-start

        text-center
        lg:text-left
      "
    >
      {/* Badge */}
      <motion.div variants={itemVariants}>
        <HeroBadge />
      </motion.div>

      {/* Heading */}
      <motion.h1
        variants={itemVariants}
        className="
          mt-7

          max-w-[12ch]

          text-4xl
          font-bold
          leading-tight
          tracking-tight

          text-slate-950

          sm:text-5xl

          lg:text-[56px]
          lg:leading-[1.1]
        "
      >
        From Idea to Implementation,
        <br />
        We Build Powerful Apps
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="
          mt-7

          max-w-xl

          text-base
          leading-8

          text-slate-600

          lg:text-lg
        "
      >
        From idea to implementation, we develop robust, intuitive applications
        that align with your business goals. Our solutions ensure smooth
        functionality and optimal user experience across platforms.
      </motion.p>

      {/* Buttons */}
      <motion.div variants={itemVariants} className="mt-10">
        <HeroButtons />
      </motion.div>
    </motion.div>
  );
}
