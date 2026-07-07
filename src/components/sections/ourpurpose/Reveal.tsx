"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  /** Stagger delay in seconds — pass index * 0.08 when animating a list */
  delay?: number;
  className?: string;
  /** Vertical distance (px) the element travels while fading in */
  y?: number;
}

/**
 * Fades + slides content up once as it scrolls into view.
 * Falls back to a plain <div> (no motion) when the user prefers reduced motion.
 */
export default function Reveal({ children, delay = 0, className, y = 24 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}