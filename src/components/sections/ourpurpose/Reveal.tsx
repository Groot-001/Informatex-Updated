import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;

  /** Delay in seconds */
  delay?: number;

  /** Animation duration */
  duration?: number;

  /** Distance travelled */
  distance?: number;

  /** Animation direction */
  direction?: "up" | "down" | "left" | "right";

  /** Animate only once */
  once?: boolean;
}

export default function Reveal({
  children,
  className,

  delay = 0,
  duration = 0.7,
  distance = 30,

  direction = "up",

  once = true,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const initial = {
    opacity: 0,
    x: direction === "left" ? -distance : direction === "right" ? distance : 0,

    y: direction === "up" ? distance : direction === "down" ? -distance : 0,
  };

  return (
    <motion.div
      className={cn(className)}
      initial={initial}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
