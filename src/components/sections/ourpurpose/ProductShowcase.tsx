import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { ProductCardData } from ".";

interface Props {
  product: ProductCardData;
  reverse?: boolean;
}

export default function ProductShowcase({ product, reverse = false }: Props) {
  return (
    <article
      className={`
        grid
        items-center

        gap-14

        lg:grid-cols-2
        lg:gap-20

        ${
          reverse
            ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
            : ""
        }
      `}
    >
      {/* ================= Content ================= */}

      <div>
        {/* Badge */}

        <span
          className="
            inline-flex
            items-center

            rounded-full

            bg-secondary/10

            px-4
            py-2

            text-sm
            font-semibold

            tracking-wide

            text-secondary
          "
        >
          {product.shortTitle}
        </span>

        {/* Title */}

        <h3
          className="
            mt-6

            text-3xl
            font-bold
            tracking-tight

            text-brand

            sm:text-4xl
            lg:text-5xl
          "
        >
          {product.title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-6

            max-w-xl

            text-lg
            leading-8

            text-muted
          "
        >
          {product.description}
        </p>

        {/* Features */}

        <div
          className="
            mt-10

            space-y-4
          "
        >
          {product.features.map((feature) => (
            <div
              key={feature}
              className="
                flex
                items-start
                gap-3
              "
            >
              <Check
                className="
                  mt-1

                  h-5
                  w-5

                  shrink-0

                  text-secondary
                "
              />

              <span
                className="
                  text-base
                  leading-7

                  text-muted
                "
              >
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}

        <Button
          variant="primary"
          className="
            group

            mt-10

            h-12
            px-7

            transition-all
            duration-300

            hover:-translate-y-1
          "
        >
          Explore Product
          <ArrowRight
            className="
              ml-2

              h-4
              w-4

              transition-transform
              duration-300

              group-hover:translate-x-1.5
            "
          />
        </Button>
      </div>

      {/* ================= Image ================= */}

      <div
        className="
          group
          relative

          overflow-hidden

          rounded-[32px]

          border
          border-soft

          bg-surface

          shadow-brand

          transition-all
          duration-500

          hover:-translate-y-2
          hover:shadow-brand-lg
        "
      >
        {/* Background Glow */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0

            bg-gradient-to-br
            from-secondary/5
            via-transparent
            to-primary/5
          "
        />

        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="
            relative
            z-10

            w-full

            object-cover

            transition-transform
            duration-700

            group-hover:scale-[1.03]
          "
        />
      </div>
    </article>
  );
}
