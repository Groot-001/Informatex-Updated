import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

interface AnimatedPacketProps {
  path: SVGPathElement | null;
  duration?: number;
  delay?: number;
}

export default function AnimatedPacket({
  path,
  duration = 4,
  delay = 0,
}: AnimatedPacketProps) {
  const dotRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!path || !dotRef.current) return;

    const totalLength = path.getTotalLength();

    const progress = { value: 0 };

    gsap.to(progress, {
      value: 1,
      duration,
      delay,
      repeat: -1,
      ease: "none",

      onUpdate() {
        const point = path.getPointAtLength(progress.value * totalLength);

        gsap.set(dotRef.current, {
          x: point.x,
          y: point.y,
        });
      },
    });
  }, [path]);

  return (
    <div
      ref={dotRef}
      className="
        absolute

        h-3
        w-3

        rounded-full

        bg-secondary

        shadow-[0_0_16px_rgba(35,116,182,.8)]
      "
    />
  );
}
