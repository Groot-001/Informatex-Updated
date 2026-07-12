import { motion, type Variants } from "framer-motion";
import { Check, Star } from "lucide-react";

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

const features = [
  "Custom Web Applications",
  "Mobile App Development",
  "Scalable SaaS Platforms",
  "API Integration",
];

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

          max-w-[15ch]

          text-4xl
          font-bold
          leading-tight
          tracking-tight

          text-[#113358]

          sm:text-5xl

          lg:text-[58px]
          lg:leading-[1.08]
        "
      >
        Enterprise Applications
        <br />
        <span className="text-[#2374B6]">Built for Business Growth</span>
      </motion.h1>

      {/* Description */}

      <motion.p
        variants={itemVariants}
        className="
          mt-7

          max-w-xl

          text-[17px]
          leading-8

          text-slate-600
        "
      >
        We design and develop secure, scalable applications that streamline
        operations, improve user experience, and accelerate digital
        transformation for growing businesses.
      </motion.p>

      {/* Features */}

      <motion.div
        variants={itemVariants}
        className="
          mt-8

          grid
          grid-cols-1

          gap-4

          sm:grid-cols-2
        "
      >
        {features.map((feature) => (
          <div
            key={feature}
            className="
              flex
              items-center
              gap-3
            "
          >
            <div
              className="
                flex
                h-7
                w-7

                items-center
                justify-center

                rounded-full

                bg-[#EDF5FC]
              "
            >
              <Check
                className="
                  h-4
                  w-4

                  text-[#2374B6]
                "
              />
            </div>

            <span
              className="
                text-[15px]
                font-medium

                text-slate-700
              "
            >
              {feature}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Trust */}

      <motion.div
        variants={itemVariants}
        className="
          mt-8

          flex
          flex-wrap
          items-center
          gap-4
        "
      >
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className="
                h-4
                w-4

                fill-[#F59E0B]
                text-[#F59E0B]
              "
            />
          ))}
        </div>

        <span
          className="
            text-sm
            font-medium

            text-slate-600
          "
        >
          Trusted by businesses with
          <span className="font-semibold text-[#113358]">
            {" "}
            100+ successful projects
          </span>
        </span>
      </motion.div>

      {/* Buttons */}

      <motion.div variants={itemVariants} className="mt-10">
        <HeroButtons />
      </motion.div>
    </motion.div>
  );
}
