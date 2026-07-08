// src/motion/hooks/useReveal.ts

import { useGSAP } from "@gsap/react";

import { gsap } from "./gsap";

export function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useGSAP(() => {
    if (!ref.current) return;

    gsap.from(ref.current, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    });
  }, [ref]);
}
