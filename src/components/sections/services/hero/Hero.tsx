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

          pt-24
          pb-20

          md:pt-28
          md:pb-24

          lg:pt-32
          lg:pb-28
        "
      >
        {/* ================================================= */}
        {/* Top Divider */}
        {/* ================================================= */}

        <div
          className="
            absolute
            inset-x-0
            top-0

            h-px

            bg-gradient-to-r
            from-transparent
            via-[#2374B6]/30
            to-transparent
          "
        />

        {/* ================================================= */}
        {/* Background Mesh */}
        {/* ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0

            opacity-[0.025]

            bg-[linear-gradient(rgba(17,51,88,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(17,51,88,.25)_1px,transparent_1px)]

            bg-[size:72px_72px]
          "
        />

        {/* ================================================= */}
        {/* Background Glows */}
        {/* ================================================= */}

        {/* Left */}

        <div
          className="
            pointer-events-none
            absolute

            -left-32
            top-0

            h-[30rem]
            w-[30rem]

            rounded-full

            bg-[#2374B6]/5

            blur-[170px]
          "
        />

        {/* Right */}

        <div
          className="
            pointer-events-none
            absolute

            -right-24
            top-20

            h-[28rem]
            w-[28rem]

            rounded-full

            bg-[#113358]/5

            blur-[170px]
          "
        />

        {/* Bottom */}

        <div
          className="
            pointer-events-none
            absolute

            left-1/2
            bottom-[-12rem]

            h-[30rem]
            w-[30rem]

            -translate-x-1/2

            rounded-full

            bg-[#67B7F7]/5

            blur-[180px]
          "
        />

        {/* ================================================= */}
        {/* Content */}
        {/* ================================================= */}

        <Container size="xl">
          <div
            className="
              relative
              z-10

              grid
              items-center

              gap-12

              lg:grid-cols-12
              lg:gap-16

              xl:gap-20
            "
          >
            {/* Left */}

            <div
              className="
                lg:col-span-5
                xl:col-span-4
              "
            >
              <HeroContent />
            </div>

            {/* Right */}

            <div
              className="
                lg:col-span-7
                xl:col-span-8
              "
            >
              <HeroImage />
            </div>
          </div>
        </Container>
      </Section>
    </motion.div>
  );
}
