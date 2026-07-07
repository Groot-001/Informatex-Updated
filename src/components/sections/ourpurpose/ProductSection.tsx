import { products } from "./Products.data";
import ProductCard from "./ProductCard";
import ProductHighlightCard from "./ProductHighlightedCard";
import Reveal from "./Reveal";

export default function ProductsSection() {
  return (
    <section className="w-full bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 lg:grid-cols-3">
        <Reveal className="lg:col-span-1">
          <ProductHighlightCard />
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-2">
          {products.map((product, i) => (
            <Reveal key={product.title} delay={i * 0.08}>
              <ProductCard {...product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
