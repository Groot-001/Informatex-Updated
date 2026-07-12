import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

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
      className="
        group
        relative

        overflow-hidden

        rounded-[32px]

        border
        border-[#DCEAF6]

        bg-white

        shadow-[0_24px_70px_rgba(17,51,88,.06)]

        transition-all
        duration-500

        hover:-translate-y-2
        hover:border-[#2374B6]/30
        hover:shadow-[0_35px_80px_rgba(17,51,88,.10)]
      "
    >
      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute

          -right-16
          -top-16

          h-52
          w-52

          rounded-full

          bg-[#2374B6]/8

          opacity-0

          blur-[100px]

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />

      <div className="relative z-10">
        {/* ================================================= */}
        {/* Header */}
        {/* ================================================= */}

        <div className="p-8">
          <span
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              border
              border-[#DCEAF6]

              bg-[#EDF5FC]

              px-4
              py-2

              text-xs
              font-semibold

              uppercase
              tracking-[0.18em]

              text-[#113358]
            "
          >
            <Sparkles className="h-3.5 w-3.5" />

            {product.badge}
          </span>

          <h3
            className="
              mt-6

              text-3xl
              font-bold

              text-[#113358]
            "
          >
            {product.title}
          </h3>

          <p
            className="
              mt-4

              leading-7

              text-slate-600
            "
          >
            {product.subtitle}
          </p>

          {/* Features */}

          <div className="mt-6 flex flex-wrap gap-2">
            {["Analytics", "Automation", "Cloud Ready"].map((item) => (
              <span
                key={item}
                className="
                  inline-flex
                  items-center
                  gap-2

                  rounded-full

                  bg-[#F8FBFE]

                  px-3
                  py-1.5

                  text-xs
                  font-medium

                  text-[#113358]
                "
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-[#2374B6]" />

                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ================================================= */}
        {/* Preview */}
        {/* ================================================= */}

        <div className="px-8 pb-6">
          <div
            className="
              overflow-hidden

              rounded-2xl

              border
              border-[#EAF2F8]

              bg-[#F8FBFE]
            "
          >
            <img
              src={product.image}
              alt={product.title}
              className="
                aspect-video

                w-full

                object-cover

                transition-transform
                duration-700

                group-hover:scale-[1.03]
              "
            />
          </div>
        </div>

        {/* ================================================= */}
        {/* Footer */}
        {/* ================================================= */}

        <div
          className="
            flex
            items-center
            justify-between

            border-t
            border-[#EDF5FC]

            px-8
            py-5
          "
        >
          <span
            className="
              text-sm
              font-medium

              text-slate-500
            "
          >
            Enterprise Ready
          </span>

          <Button
            variant="ghost"
            className="
              group/button

              rounded-full

              px-0

              text-[#2374B6]

              hover:bg-transparent
            "
          >
            {product.cta}

            <ArrowUpRight
              className="
                ml-2

                h-4
                w-4

                transition-transform

                group-hover/button:-translate-y-0.5
                group-hover/button:translate-x-0.5
              "
            />
          </Button>
        </div>
      </div>
    </article>
  );
}
