import { FEATURED_PRODUCTS } from "./constants";
import FeaturedProduct from "./FeaturedProduct";

export default function FeaturedProducts() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {FEATURED_PRODUCTS.map((product) => (
          <FeaturedProduct key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
