import { memo } from "react";

interface TimelineConnectorProps {
  connectorRef: (element: HTMLDivElement | null) => void;
  litCount: number;
  pulsingDots: Set<number>;
}

const TOTAL_DOTS = 5;

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

        ml-[12.5rem]

        flex
        h-32
        w-10

        flex-col
        items-center
        justify-between

        lg:ml-[15rem]
      "
    >
      {/* Vertical Line */}

      <div
        className="
          absolute

          left-1/2
          top-0
          bottom-0

          w-[2px]

          -translate-x-1/2

          bg-[#DCEAF6]
        "
      />

      {/* Progress */}

      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 overflow-hidden"
        style={{
          height: `${(litCount / TOTAL_DOTS) * 100}%`,
        }}
      >
        <div className="h-full w-[2px] bg-[#2374B6]" />
      </div>

      {/* Dots */}

      {Array.from({ length: TOTAL_DOTS }).map((_, index) => {
        const active = index < litCount;

        return (
          <div
            key={index}
            className={`
              relative
              z-10

              flex
              h-4
              w-4

              items-center
              justify-center

              rounded-full

              border-2
              border-white

              transition-all
              duration-500

              ${
                active
                  ? "bg-[#2374B6] shadow-[0_0_0_6px_rgba(35,116,182,.10)]"
                  : "bg-white border-[#DCEAF6]"
              }
            `}
          >
            {pulsingDots.has(index) && (
              <span
                className="
                  absolute

                  -inset-2

                  rounded-full

                  border
                  border-[#2374B6]/30

                  animate-ping
                "
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default memo(TimelineConnector);
