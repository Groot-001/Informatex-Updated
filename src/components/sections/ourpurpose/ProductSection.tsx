import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

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

        bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFE_100%)]
      "
    >
      {/* ---------------------------------------------------------------- */}
      {/* Background Accent */}
      {/* ---------------------------------------------------------------- */}

      <div
        className="
          pointer-events-none
          absolute

          right-[-10rem]
          top-24

          h-[34rem]
          w-[34rem]

          rounded-full

          bg-[#2374B6]/5

          blur-[140px]
        "
      />

      {/* ---------------------------------------------------------------- */}
      {/* Content */}
      {/* ---------------------------------------------------------------- */}

      <Container size="xl">
        {/* Heading */}

        <div
          className="
            relative
            z-10

            mx-auto

            max-w-3xl

            text-center
          "
        >
          <SectionEyebrow align="center">Our Products</SectionEyebrow>

          <h2
            className="
              mt-5

              text-4xl
              font-bold
              leading-tight
              tracking-tight

              text-[#113358]

              md:text-5xl
            "
          >
            Enterprise software
            <span className="mt-2 block text-[#2374B6]">
              designed for real business challenges.
            </span>
          </h2>

          <p
            className="
              mx-auto

              mt-8

              max-w-2xl

              text-lg
              leading-8

              text-slate-600
            "
          >
            Purpose-built software that helps organizations automate operations,
            improve productivity, and scale with confidence.
          </p>

          {/* Brand Divider */}

          <div
            className="
              mx-auto

              mt-10

              flex
              justify-center
              gap-3
            "
          >
            <div className="h-[3px] w-14 rounded-full bg-[#113358]" />

            <div className="h-[3px] w-6 rounded-full bg-[#2374B6]" />
          </div>
        </div>

        {/* Products */}

        <div
          className="
            relative
            z-10

            mt-28

            space-y-36
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
