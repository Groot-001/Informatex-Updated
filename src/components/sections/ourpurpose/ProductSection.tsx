import { typography } from "@/design-system/typography";

import { products } from "./Products.data";
import ProductShowcase from "./ProductShowcase";

export default function ProductsSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
              inline-flex
              rounded-full
              bg-[#DDD0FB]
              px-4
              py-2
              text-sm
              font-semibold
              text-[#4F46C8]
            "
          >
            Our Products
          </span>

          <h2 className={`${typography.section.title} mt-6`}>
            Powerful software built for modern businesses.
          </h2>

          <p className={typography.section.description}>
            Enterprise-grade solutions designed to simplify operations, improve
            productivity and help businesses scale with confidence.
          </p>
        </div>

        {/* Products */}

        <div className="mt-24 space-y-32">
          {products.map((product, index) => (
            <ProductShowcase
              key={product.title}
              product={product}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
