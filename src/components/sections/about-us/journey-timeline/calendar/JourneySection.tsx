import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionBackground from "@/components/sections/products/SectionBackground";

import SectionHeading from "@/components/sections/services/development-services/SectionHeading";
import JourneyTimeline from "./JourneyTimeline";

export default function JourneySection() {
  return (
    <Section
      className="
        relative
        overflow-hidden

        bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFE_100%)]
      "
    >
      <SectionBackground />

      <Container size="xl">
        <div className="relative z-10">
          <SectionHeading
            eyebrow="Our Journey"
            title="Growing Through Innovation"
            highlight="One Milestone at a Time"
            description="Every milestone reflects our commitment to innovation, long-term partnerships, and delivering enterprise software that creates measurable business impact."
          />

          <div className="mt-20">
            <JourneyTimeline />
          </div>
        </div>
      </Container>
    </Section>
  );
}
