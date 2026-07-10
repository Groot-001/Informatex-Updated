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

    bg-[#020617]

    py-24
    lg:py-32
  "
    >
      {/* Background Glow */}

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left */}
        <div
          className="
      absolute
      -top-52
      -left-48
      h-[42rem]
      w-[42rem]
      rounded-full
      bg-[#2374B6]/10
      blur-[190px]
    "
        />

        {/* Top Right */}
        <div
          className="
      absolute
      -top-40
      -right-48
      h-[38rem]
      w-[38rem]
      rounded-full
      bg-[#C0C1FF]/8
      blur-[170px]
    "
        />

        {/* Bottom */}
        <div
          className="
      absolute
      bottom-[-18rem]
      left-1/2
      h-[30rem]
      w-[60rem]
      -translate-x-1/2
      rounded-full
      bg-[#093254]/35
      blur-[180px]
    "
        />

        {/* Noise */}
        <div
          className="
      absolute
      inset-0
      opacity-[0.03]
      [background-image:radial-gradient(#ffffff_1px,transparent_1px)]
      [background-size:22px_22px]
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
           mt-24 lg:mt-28
            grid
            gap-16

          grid-cols-1

items-start

lg:grid-cols-[330px_minmax(0,1fr)]

xl:grid-cols-[360px_minmax(0,1fr)]
          "
        >
          {/* Sticky Calendar */}

          <aside
            className="
              hidden

lg:block

lg:sticky

lg:top-28

self-start
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
