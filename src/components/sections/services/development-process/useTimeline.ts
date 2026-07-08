// src/motion/hooks/useTimeline.ts

import { useGSAP } from "@gsap/react";

import { gsap } from "./gsap";

export function useTimeline(ref: React.RefObject<HTMLElement | null>) {
  useGSAP(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ".timeline-progress",
      {
        scaleX: 0,
        transformOrigin: "left center",
      },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      },
    );
  }, [ref]);
}
