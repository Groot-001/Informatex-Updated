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
          relative
          overflow-hidden

          bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFE_100%)]

          pt-20
          pb-16

          md:pt-24
          md:pb-20

          lg:pt-28
          lg:pb-24
        "
      >
        {/* ================================================= */}
        {/* Background Glow */}
        {/* ================================================= */}

        <div
          className="
            pointer-events-none
            absolute

            -left-40
            top-0

            h-[36rem]
            w-[36rem]

            rounded-full

            bg-[#2374B6]/5

            blur-[180px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute

            right-[-12rem]
            top-20

            h-[32rem]
            w-[32rem]

            rounded-full

            bg-[#113358]/5

            blur-[170px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute

            left-1/2
            bottom-[-14rem]

            h-[34rem]
            w-[34rem]

            -translate-x-1/2

            rounded-full

            bg-[#67B7F7]/5

            blur-[190px]
          "
        />

        <Container size="xl">
          <div
            className="
              relative
              z-10

              grid
              items-center

              gap-14

              lg:grid-cols-12
              lg:gap-20
            "
          >
            {/* Content */}

            <div className="lg:col-span-5">
              <HeroContent />
            </div>

            {/* Dashboard */}

            <div className="lg:col-span-7">
              <HeroImage />
            </div>
          </div>
        </Container>
      </Section>
    </motion.div>
  );
}
