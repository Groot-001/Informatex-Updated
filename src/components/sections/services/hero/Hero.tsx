import { motion } from "framer-motion";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <Section
        className="
         
        bg-soft
          relative
          overflow-hidden

          pt-20
          pb-16

          md:pt-24
          md:pb-20

          lg:pt-28
          lg:pb-24
        "
      >
        <Container size="xl">
          <div
            className="
              grid
              items-center

              gap-12

              lg:grid-cols-2
              lg:gap-16

              xl:gap-20
            "
          >
            <HeroContent />

            <HeroImage />
          </div>
        </Container>
      </Section>
    </motion.div>
  );
}
