import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";
import HeroVisual from "./HeroVisual";

export default function ProductHero() {
  return (
    <Section
      className="
        relative
        overflow-hidden

        bg-soft
      "
    >
      <Container size="xl">
        <div
          className="
            grid
            items-center

            gap-12

            lg:grid-cols-[1fr_1.2fr]
            lg:gap-16

            xl:gap-20
          "
        >
          <HeroContent />

          <HeroVisual />
        </div>

        <div className="mt-20 lg:mt-24">
          <HeroStats />
        </div>
      </Container>
    </Section>
  );
}
