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
    <div className="relative">
      {/* Vertical Spine */}

      <div
        className="
          absolute
          left-[108px]
          top-5
          bottom-5
          hidden
          w-[2px]
          bg-[#D7E5F3]
          lg:block
        "
      />

      <div className="space-y-16">
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
