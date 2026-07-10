import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import { typography } from "@/design-system/typography";

import { products } from "./Products.data";
import ProductShowcase from "./ProductShowcase";
import SectionEyebrow from "./SectionEyeBrow";

export default function ProductsSection() {
  return (
    <Section
      spacing="xl"
      className="
        relative
        overflow-hidden

        bg-soft
      "
    >
      {/* ================= Background ================= */}

      {/* Top Glow */}

      <div
        className="
          pointer-events-none
          absolute

          left-1/2
          top-0

          h-[32rem]
          w-[48rem]

          -translate-x-1/2

          rounded-full

          bg-[#2374B6]/8

          blur-[180px]
        "
      />

      {/* Left Glow */}

      <div
        className="
          pointer-events-none
          absolute

          -left-32
          top-1/2

          h-[26rem]
          w-[26rem]

          -translate-y-1/2

          rounded-full

          bg-[#093254]/5

          blur-[170px]
        "
      />

      {/* Right Glow */}

      <div
        className="
          pointer-events-none
          absolute

          -right-24
          bottom-0

          h-[24rem]
          w-[24rem]

          rounded-full

          bg-[#2374B6]/6

          blur-[160px]
        "
      />

      <Container size="xl">
        {/* ================= Heading ================= */}

        <div
          className="
            relative
            z-10

            mx-auto
            max-w-4xl

            text-center
          "
        >
          <SectionEyebrow align="center">Our Products</SectionEyebrow>

          <h2
            className={`
              ${typography.section.title}
              mt-6
            `}
          >
            Powerful software built for modern businesses.
          </h2>

          <p
            className={`
              ${typography.section.description}
              mx-auto
              mt-6
              max-w-3xl
            `}
          >
            Enterprise-grade solutions designed to simplify operations, improve
            productivity, and help businesses scale with confidence.
          </p>
        </div>

        {/* ================= Products ================= */}

        <div
          className="
            relative
            z-10

            mt-24

            space-y-24

            lg:mt-28
            lg:space-y-32
          "
        >
          {products.map((product, index) => (
            <ProductShowcase
              key={product.title}
              product={product}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
