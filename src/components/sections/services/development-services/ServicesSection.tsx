import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import SectionHeading from "./SectionHeading";
import ServiceGrid from "./ServiceGrid";

export default function ServicesSection() {
  return (
    <Section
      className="
        bg-soft
      "
    >
      <Container size="xl">
        <SectionHeading title="Our App Development Services" />

        <div className="mt-16 lg:mt-20">
          <ServiceGrid />
        </div>
      </Container>
    </Section>
  );
}
