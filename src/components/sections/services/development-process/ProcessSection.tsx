import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import SectionHeading from "../development-services/SectionHeading";
import ProcessTimeline from "./ProcessTimeline";

export default function ProcessSection() {
  return (
    <Section
      className="
        bg-soft
      "
    >
      <Container size="xl">
        <SectionHeading title="Our App Development Process" />

        <div className="mt-16 lg:mt-20">
          <ProcessTimeline />
        </div>
      </Container>
    </Section>
  );
}
