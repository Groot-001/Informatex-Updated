import FeaturedProductCard from "./FeaturedProductCard";
import { FEATURED_PRODUCTS } from "./constants";

export default function HeroVisual() {
  return (
    <div
      className="
        relative

        flex

        min-h-[650px]

        items-center
        justify-center
      "
    >
      {/* Back Card */}

      <div
        className="
          absolute

          left-0
          top-24

          z-10
        "
      >
        <FeaturedProductCard product={FEATURED_PRODUCTS[1]} />
      </div>

      {/* Front Card */}

      <div
        className="
          absolute

          right-0
          top-0

          z-20
        "
      >
        <FeaturedProductCard product={FEATURED_PRODUCTS[0]} />
      </div>
    </div>
  );
}
