import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import { PRODUCT_BENEFITS } from "./constants";
import ProductBenefitCard from "./ProductBenefitCard";

export default function WhyChooseProducts() {
  return (
    <Section
      className="
        bg-soft
      "
    >
      <Container size="xl">
        {/* Heading */}

        <div
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >
          <span
            className="
              inline-flex

              rounded-full

              bg-secondary/10

              px-4
              py-2

              text-xs
              font-semibold
              uppercase
              tracking-[0.28em]

              text-secondary

              sm:text-sm
            "
          >
            WHY INFORMATEX
          </span>

          <h2
            className="
              mt-6

              text-4xl
              font-bold
              tracking-tight

              text-brand

              lg:text-5xl
            "
          >
            Built for Modern Businesses
          </h2>

          <p
            className="
              mx-auto

              mt-6
              max-w-2xl

              text-lg
              leading-8

              text-muted
            "
          >
            Every product is designed with scalability, security, and long-term
            business growth in mind.
          </p>
        </div>

        {/* Cards */}

        <div
          className="
            mt-20

            grid
            gap-8

            md:grid-cols-2

            xl:grid-cols-4
          "
        >
          {PRODUCT_BENEFITS.map((benefit) => (
            <ProductBenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
