import { memo } from "react";
import { DOTS_PER_CONNECTOR } from "../constants";

interface TimelineConnectorProps {
  connectorRef: (el: HTMLDivElement | null) => void;
  litCount: number;
  pulsingDots: Set<number>;
}

function TimelineConnector({
  connectorRef,
  litCount,
  pulsingDots,
}: TimelineConnectorProps) {
  return (
    <div
      ref={connectorRef}
      className="
        relative

        h-[136px]

        max-[480px]:h-[100px]
      "
    >
      <div
        className="
          absolute

          left-[273px]
          top-0
          bottom-0

          flex
          -translate-x-1/2
          flex-col
          items-center
          justify-evenly

          max-[480px]:left-[149px]
        "
      >
        {Array.from({
          length: DOTS_PER_CONNECTOR,
        }).map((_, index) => (
          <div
            key={index}
            className={`
              h-[7px]
              w-[7px]

              rounded-full

              transition-all
              duration-300

              ${
                index < litCount
                  ? "bg-[var(--primary)] shadow-[0_0_10px_rgba(192,193,255,.55)]"
                  : "bg-[var(--border-glass)]"
              }

              ${
                pulsingDots.has(index)
                  ? "animate-[dotPulse_.55s_cubic-bezier(.3,1.6,.4,1)]"
                  : ""
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}

export default memo(TimelineConnector);
