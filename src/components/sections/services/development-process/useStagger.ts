// src/motion/hooks/useStagger.ts

import { useGSAP } from "@gsap/react";

import { gsap } from "./gsap";

export function useStagger(
  container: React.RefObject<HTMLElement | null>,
  selector = ".stagger-item",
) {
  useGSAP(() => {
    if (!container.current) return;

    gsap.from(container.current.querySelectorAll(selector), {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
    });
  }, [container]);
}
