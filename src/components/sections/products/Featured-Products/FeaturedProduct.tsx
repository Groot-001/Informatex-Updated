import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import type { FeaturedProduct as FeaturedProductType } from "./types";
import BrowserWindow from "@/components/ui/browser-window";

interface FeaturedProductProps {
  product: FeaturedProductType;
}

export default function FeaturedProduct({ product }: FeaturedProductProps) {
  return (
    <article
      className={cn(
        `
        grid
        items-center
        gap-16
        py-24

        lg:grid-cols-[1fr_1.1fr]
        `,
        product.reverse && "lg:grid-cols-[1.1fr_1fr]",
      )}
    >
      {/* ---------------- Content ---------------- */}

      <div className={cn(product.reverse && "lg:order-2")}>
        {/* Badge */}

        <span
          className="
            inline-flex
            rounded-full
            bg-[#113358]/10
            px-4
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
            mt-6
            text-4xl
            font-bold
            tracking-tight
            text-slate-900

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
            font-medium
            text-[#113358]
          "
        >
          {product.subtitle}
        </p>

        {/* Description */}

        <p
          className="
            mt-8
            max-w-xl
            text-lg
            leading-8
            text-slate-600
          "
        >
          {product.description}
        </p>

        {/* Features */}

        <div className="mt-10">
          <h3
            className="
              text-lg
              font-semibold
              text-slate-900
            "
          >
            What You'll Get
          </h3>

          <div className="mt-5 space-y-4">
            {product.features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-[#113358]/10
                  "
                >
                  <Check className="h-4 w-4 text-[#113358]" />
                </div>

                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}

        <div className="mt-10">
          <h3
            className="
              text-lg
              font-semibold
              text-slate-900
            "
          >
            Tech Stack
          </h3>

          <div
            className="
              mt-5
              flex
              flex-wrap
              gap-3
            "
          >
            {product.techStack.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-slate-700
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}

        <div
          className="
            mt-12
            flex
            flex-wrap
            gap-4
          "
        >
          <Button size="lg" className="group bg-[#113358]">
            {product.primaryButton}

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

          {product.secondaryButton && (
            <Button size="lg" variant="outline">
              {product.secondaryButton}
            </Button>
          )}
        </div>
      </div>

      {/* ---------------- Image ---------------- */}

      <div className={cn(product.reverse && "lg:order-1")}>
        <BrowserWindow
          title={product.title}
          address={`${product.title.toLowerCase()}.informatex.com`}
        >
          <img
            src={product.image}
            alt={product.title}
            className="
              w-full
              object-cover
            "
          />
        </BrowserWindow>
      </div>
    </article>
  );
}
