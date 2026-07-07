import React from "react";
import { motion, Variants } from "framer-motion";
import { Smartphone, MessageSquare } from "lucide-react";
import { Button } from "../../ui/button";
import { Badge } from "./Badge";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const blockVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export const HeroLeftPanel: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col items-start space-y-6 lg:col-span-5 w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={blockVariants}>
        <Badge icon={<Smartphone className="h-4 w-4" />}>App Development</Badge>
      </motion.div>

      <motion.h1
        variants={blockVariants}
        className="text-4xl font-extrabold tracking-tight text-[#111111] sm:text-5xl lg:text-[54px] lg:leading-[1.12]"
      >
        From Idea to Implementation, <br className="hidden sm:inline" />
        We Build Powerful Apps
      </motion.h1>

      <motion.p
        variants={blockVariants}
        className="text-base leading-relaxed text-[#666666] md:text-lg max-w-xl"
      >
        From idea to implementation, we develop robust, intuitive apps that
        align with your business goals. Our solutions ensure smooth
        functionality and optimal user experience across platforms.
      </motion.p>

      <motion.div
        variants={blockVariants}
        className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto"
      >
        <Button variant="primary" size="lg">
          Start Your App Project
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className="flex items-center justify-center gap-2"
        >
          <MessageSquare className="h-4 w-4" />
          Talk to an Expert
        </Button>
      </motion.div>
    </motion.div>
  );
};
