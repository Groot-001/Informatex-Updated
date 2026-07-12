import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import BrowserWindow from "@/components/ui/browser-window";
import { cn } from "@/lib/utils";

import type { FeaturedProduct as FeaturedProductType } from "./types";

interface FeaturedProductProps {
  product: FeaturedProductType;
}

export default function FeaturedProduct({ product }: FeaturedProductProps) {
  return (
    <article
      className={cn(
        `
          group

          grid
          items-center
          gap-16

          py-24

          lg:grid-cols-[1fr_1.1fr]
        `,
        product.reverse && "lg:grid-cols-[1.1fr_1fr]",
      )}
    >
      {/* ================================================= */}
      {/* Content */}
      {/* ================================================= */}

      <div className={cn(product.reverse && "lg:order-2")}>
        {/* Badge */}

        <span
          className="
            inline-flex
            items-center
            gap-2

            rounded-full

            border
            border-[#DCEAF6]

            bg-[#EDF5FC]

            px-5
            py-2

            text-sm
            font-semibold

            text-[#113358]
          "
        >
          {product.badge}
        </span>

        {/* Title */}

        <h2
          className="
            mt-7

            text-4xl
            font-bold
            leading-tight
            tracking-tight

            text-[#113358]

            lg:text-5xl
          "
        >
          {product.title}
        </h2>

        {/* Subtitle */}

        <p
          className="
            mt-3

            text-xl
            font-semibold

            text-[#2374B6]
          "
        >
          {product.subtitle}
        </p>

        {/* Description */}

        <p
          className="
            mt-7

            max-w-xl

            text-lg
            leading-8

            text-slate-600
          "
        >
          {product.description}
        </p>

        {/* Feature Pills */}

        <div className="mt-8 flex flex-wrap gap-3">
          {product.features.map((feature) => (
            <span
              key={feature}
              className="
                inline-flex
                items-center
                gap-2

                rounded-full

                border
                border-[#DCEAF6]

                bg-[#F8FBFE]

                px-4
                py-2

                text-sm
                font-medium

                text-[#113358]

                transition-all
                duration-300

                hover:border-[#2374B6]/40
                hover:bg-white
              "
            >
              <CheckCircle2 className="h-4 w-4 text-[#2374B6]" />

              {feature}
            </span>
          ))}
        </div>

        {/* Capabilities */}

        <div className="mt-10">
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.18em]

              text-[#2374B6]
            "
          >
            Key Capabilities
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {product.techStack.map((item) => (
              <span
                key={item}
                className="
                  rounded-full

                  bg-white

                  px-4
                  py-2

                  text-sm
                  font-medium

                  text-slate-600

                  shadow-sm

                  ring-1
                  ring-[#E7EEF6]
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}

        <div className="mt-10 flex flex-wrap gap-4">
          <Button
            className="
              group

              h-12

              rounded-full

              bg-[#113358]

              px-7

              hover:bg-[#0D2D4B]
            "
          >
            {product.primaryButton}

            <ArrowRight
              className="
                ml-2

                h-4
                w-4

                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            />
          </Button>

          {product.secondaryButton && (
            <Button
              variant="outline"
              className="
                h-12

                rounded-full

                border-[#DCEAF6]

                px-7
              "
            >
              {product.secondaryButton}
            </Button>
          )}
        </div>
      </div>

      {/* ================================================= */}
      {/* Visual */}
      {/* ================================================= */}

      <div className={cn("relative", product.reverse && "lg:order-1")}>
        {/* Background Glow */}

        <div
          className="
            pointer-events-none

            absolute

            -right-20
            -top-20

            h-72
            w-72

            rounded-full

            bg-[#2374B6]/8

            opacity-0

            blur-[120px]

            transition-opacity
            duration-500

            group-hover:opacity-100
          "
        />

        <div className="relative z-10">
          <BrowserWindow
            title={product.title}
            address={`${product.title.toLowerCase()}.informatex.tech`}
          >
            <img
              src={product.image}
              alt={product.title}
              className="
                w-full

                object-cover

                transition-transform
                duration-700

                group-hover:scale-[1.02]
              "
            />
          </BrowserWindow>
        </div>
      </div>
    </article>
  );
}
