import TimelineItem from "./TimelineItem";
import type { JourneyMilestone } from "./types";

interface TimelineProps {
  milestones: JourneyMilestone[];
  activeIndex: number;
  itemRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

export default function Timeline({
  milestones,
  activeIndex,
  itemRefs,
}: TimelineProps) {
  return (
    <div className="relative w-full">
      {/* Desktop Timeline Spine */}
      <div
        className="
          absolute
          left-[150px]
          top-10
          bottom-10
          hidden
          w-px
          bg-gradient-to-b
          from-transparent
          via-white/20
          to-transparent
          lg:block
        "
      />

      {/* Glow Behind Spine */}
      <div
        className="
          absolute
          left-[150px]
          top-0
          bottom-0
          hidden
          w-px
          bg-[#C0C1FF]/20
          blur-sm
          lg:block
        "
      />

      {/* Timeline Items */}
      <div className="relative space-y-20 lg:space-y-24">
        {milestones.map((milestone, index) => (
          <TimelineItem
            key={milestone.id}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            index={index}
            milestone={milestone}
            active={activeIndex === index}
          />
        ))}
      </div>
    </div>
  );
}
