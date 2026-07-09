import { journeyData } from "./data/journey.data";
import { useJourney } from "./hooks/useJourney";
import CalendarWidget from "./CalendarWidget";
import Timeline from "./Timeline";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

export default function JourneySection() {
  const { activeIndex, itemRefs } = useJourney(journeyData.length);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F7F9FC]
        py-24
        lg:py-32
      "
    >
      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            left-0
            top-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#093254]/5
            blur-[170px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#2374B6]/10
            blur-[180px]
          "
        />
      </div>

      <Container className="relative z-10">
        <SectionTitle
          badge="OUR JOURNEY"
          title="Building the Future, One Milestone at a Time"
          description="Our journey reflects years of innovation, collaboration, and commitment to helping businesses grow through technology."
        />

        <div
          className="
            mt-20
            grid
            gap-16

            lg:grid-cols-[320px_1fr]
            xl:grid-cols-[340px_1fr]
          "
        >
          {/* Sticky Calendar */}

          <aside
            className="
              h-fit

              lg:sticky
              lg:top-28
            "
          >
            <CalendarWidget milestone={journeyData[activeIndex]} />
          </aside>

          {/* Timeline */}

          <Timeline
            milestones={journeyData}
            activeIndex={activeIndex}
            itemRefs={itemRefs}
          />
        </div>
      </Container>
    </section>
  );
}
