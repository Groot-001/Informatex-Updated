import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import type { FeaturedProduct } from "./types";

type FeaturedProductCardProps = {
  product: FeaturedProduct;
};

export default function FeaturedProductCard({
  product,
}: FeaturedProductCardProps) {
  return (
    <article
      style={{
        transform: `rotate(${product.rotation}deg)`,
      }}
      className="
        group
        relative

        w-full
        max-w-125

        overflow-hidden

        rounded-3xl

        border
        border-slate-200

        bg-white

        shadow-xl

        transition-all
        duration-300

        hover:-translate-y-2
        hover:rotate-0
      "
    >
      {/* Header */}

      <div className="border-b border-slate-100 p-6">
        <span
          className="
            rounded-full

            bg-[#113358]/10

            px-3
            py-1

            text-xs
            font-semibold

            uppercase

            tracking-wider

            text-[#113358]
          "
        >
          {product.badge}
        </span>

        <h3
          className="
            mt-5

            text-2xl
            font-bold

            text-slate-900
          "
        >
          {product.title}
        </h3>

        <p className="mt-2 text-slate-500">{product.subtitle}</p>
      </div>

      {/* Image */}

      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="
            aspect-video

            w-full

            object-cover

            transition-transform
            duration-500

            group-hover:scale-105
          "
        />
      </div>

      {/* Footer */}

      <div className="flex items-center justify-between p-6">
        <Button variant="ghost">
          {product.cta}

          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </article>
  );
}
