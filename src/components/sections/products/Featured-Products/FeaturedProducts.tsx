import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import { FEATURED_PRODUCTS } from "./constants";
import FeaturedProduct from "./FeaturedProduct";

export default function FeaturedProducts() {
  return (
    <Section
      className="
        bg-soft
      "
    >
      <Container size="xl">
        <div className="space-y-24 lg:space-y-32">
          {FEATURED_PRODUCTS.map((product) => (
            <FeaturedProduct key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
