// src/motion/variants.ts

import type { Variants } from "framer-motion";

import { transitions } from "./transitions";

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.normal,
  },
};

export const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.normal,
  },
};

export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.normal,
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.spring,
  },
};

export const staggerContainer: Variants = {
  hidden: {},

  visible: {
    transition: transitions.stagger,
  },
};

export const cardReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.98,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: transitions.normal,
  },
};

export const sectionReveal: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      ...transitions.normal,
      staggerChildren: 0.15,
    },
  },
};