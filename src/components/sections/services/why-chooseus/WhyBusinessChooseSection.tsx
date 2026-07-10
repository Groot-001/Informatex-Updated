import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import SectionHeading from "../development-services/SectionHeading";
import WhyChooseGrid from "./WhyChooseGrid";

export default function WhyBusinessChooseSection() {
  return (
    <Section
      className="
        bg-soft
      "
    >
      <Container size="xl">
        <SectionHeading title="Why Businesses Choose Our App Development" />

        <div className="mt-16 lg:mt-20">
          <WhyChooseGrid />
        </div>
      </Container>
    </Section>
  );
}
