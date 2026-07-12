import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import SectionHeading from "../../services/development-services/SectionHeading";

import { FEATURED_PRODUCTS } from "./constants";
import FeaturedProduct from "./FeaturedProduct";
import SectionBackground from "../SectionBackground";

export default function FeaturedProducts() {
  return (
    <Section
      className="
        relative
        overflow-hidden

        bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFE_100%)]
      "
    >
      <SectionBackground />

      <Container size="xl">
        <div className="relative z-10">
          <SectionHeading
            eyebrow="Featured Products"
            title={
              <>
                Powerful software solutions
                <span className="mt-2 block text-[#2374B6]">
                  built for modern businesses.
                </span>
              </>
            }
            description="Explore our suite of enterprise-grade applications designed to streamline operations, improve productivity, and accelerate business growth through scalable digital solutions."
          />

          <div className="mt-20 space-y-24 lg:mt-24 lg:space-y-32">
            {FEATURED_PRODUCTS.map((product) => (
              <FeaturedProduct key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
