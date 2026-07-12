import { Activity, ArrowRight, Building2, Check, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

import BrowserMockup from "./BrowserMockup";
import DashboardPreview from "./DashboardPreview";
import MetricBadge from "./MetricBadge";

import type { ProductCardData } from ".";

interface Props {
  product: ProductCardData;
  reverse?: boolean;
}

export default function ProductShowcase({ product, reverse = false }: Props) {
  return (
    <article
      className={`
        group
        relative
        overflow-hidden

        rounded-[36px]

        border
        border-[#DCEAF6]

        bg-white

        p-6
        lg:p-8

        shadow-[0_18px_55px_rgba(17,51,88,.06)]

        transition-all
        duration-500

        hover:-translate-y-1
        hover:shadow-[0_32px_80px_rgba(17,51,88,.10)]

        ${
          reverse
            ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
            : ""
        }
      `}
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute

          right-[-8rem]
          top-[-8rem]

          h-[22rem]
          w-[22rem]

          rounded-full

          bg-[#2374B6]/6

          blur-[120px]
        "
      />

      <div
        className="
          relative
          z-10

          grid
          items-center

          gap-10

          lg:grid-cols-12
          lg:gap-12
        "
      >
        {/* ================================================= */}
        {/* LEFT */}
        {/* ================================================= */}

        <div className="lg:col-span-4">
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

              px-4
              py-1.5

              text-xs
              font-semibold

              tracking-wide

              text-[#113358]
            "
          >
            <Sparkles className="h-3.5 w-3.5" />

            {product.shortTitle}
          </span>

          {/* Title */}

          <h3
            className="
              mt-5

              text-3xl
              font-bold
              leading-tight
              tracking-tight

              text-[#113358]

              lg:text-[2.5rem]
            "
          >
            {product.title}
          </h3>

          {/* Description */}

          <p
            className="
              mt-5

              text-[15px]
              leading-7

              text-slate-600
            "
          >
            {product.description}
          </p>

          {/* Features */}

          <div className="mt-7 space-y-3">
            {product.features.map((feature) => (
              <div
                key={feature}
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <div
                  className="
                    flex
                    h-6
                    w-6

                    items-center
                    justify-center

                    rounded-full

                    bg-[#EDF5FC]
                  "
                >
                  <Check className="h-3.5 w-3.5 text-[#2374B6]" />
                </div>

                <span
                  className="
                    text-sm

                    text-slate-700
                  "
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}

          <div className="mt-8 flex gap-3">
            <Button
              className="
                h-10

                rounded-full

                bg-[#113358]

                px-6

                hover:bg-[#0D2D4B]
              "
            >
              View Solution
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              className="
                h-10

                rounded-full

                border-[#DCEAF6]

                px-6
              "
            >
              Live Demo
            </Button>
          </div>
        </div>

        {/* ================================================= */}
        {/* RIGHT */}
        {/* ================================================= */}

        <div className="relative lg:col-span-8">
          <BrowserMockup url="erp.informatex.tech">
            <DashboardPreview />
          </BrowserMockup>

          <MetricBadge
            value="99.9%"
            title="System Uptime"
            icon={<Activity className="h-4 w-4 text-[#2374B6]" />}
            className="
              hidden

              2xl:block

              -left-5
              top-14
            "
          />

          <MetricBadge
            value="120+"
            title="Enterprise Clients"
            icon={<Building2 className="h-4 w-4 text-[#2374B6]" />}
            className="
              hidden

              2xl:block

              -right-5
              bottom-10
            "
          />
        </div>
      </div>
    </article>
  );
}
