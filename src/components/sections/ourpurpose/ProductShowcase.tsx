import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { ProductCardData } from ".";

interface Props {
  product: ProductCardData;
  reverse?: boolean;
}

export default function ProductShowcase({ product, reverse }: Props) {
  return (
    <article
      className={`
        grid
        items-center
        gap-16

        lg:grid-cols-2

        ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
      `}
    >
      {/* Content */}

      <div>
        <span
          className="
            rounded-full
            bg-[#DDD0FB]
            px-4
            py-2
            text-sm
            font-semibold
            text-[#4F46C8]
          "
        >
          {product.shortTitle}
        </span>

        <h3 className="mt-6 text-4xl font-bold">{product.title}</h3>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          {product.description}
        </p>

        <div className="mt-8 space-y-4">
          {product.features.map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <Check className="h-5 w-5 text-[#4F46C8]" />

              <span>{feature}</span>
            </div>
          ))}
        </div>

        <Button
          className="
            group
            mt-10
            bg-[#4F46C8]
            hover:bg-[#4338CA]
          "
        >
          Explore Product
          <ArrowRight
            className="
              ml-2
              h-4
              w-4
              transition-transform
              group-hover:translate-x-1
            "
          />
        </Button>
      </div>

      {/* Image */}

      <div
        className="
          overflow-hidden
          rounded-3xl
          border
          border-[#ECECF3]
          bg-white
          shadow-[0_30px_80px_rgba(15,23,42,.08)]
          transition-all
          duration-500
          hover:-translate-y-2
        "
      >
        <img src={product.image} alt={product.title} className="w-full" />
      </div>
    </article>
  );
}
