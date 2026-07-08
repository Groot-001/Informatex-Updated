// src/motion/transitions.ts

export const transitions = {
  fast: {
    duration: 0.25,
    ease: [0.25, 0.1, 0.25, 1],
  },

  normal: {
    duration: 0.45,
    ease: [0.25, 0.1, 0.25, 1],
  },

  slow: {
    duration: 0.7,
    ease: [0.25, 0.1, 0.25, 1],
  },

  spring: {
    type: "spring",
    stiffness: 120,
    damping: 18,
  },

  stagger: {
    staggerChildren: 0.12,
    delayChildren: 0.1,
  },
} as const;
