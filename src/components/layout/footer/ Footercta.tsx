import { ArrowRight, Handshake } from "lucide-react";
// import { Layers3 } from "lucide-react";

import { Button } from "@/components/ui/button";

interface FooterCTAProps {
  title?: string;
  description?: string;
  ctaLabel?: string;
  href?: string;
}

export default function FooterCTA({
  title = "Let's Build the Right Software for Your Business",
  description = "Whether you're launching a new platform or modernizing an existing system, we help organizations design, build, and scale secure digital solutions that create long-term business value.",
  ctaLabel = "Let's Talk About Your Project",
  href = "#contact",
}: FooterCTAProps) {
  return (
    <section
      className="
        relative
        overflow-hidden

        rounded-[40px]

        border
        border-[#DCEAF6]

        bg-[linear-gradient(135deg,#F8FBFE_0%,#EDF5FC_100%)]

        px-8
        py-16

        text-center

        shadow-[0_24px_70px_rgba(17,51,88,.08)]

        lg:px-16
        lg:py-20
      "
    >
      {/* ================================================= */}
      {/* Background Glow */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute

          -left-28
          top-0

          h-72
          w-72

          rounded-full

          bg-[#2374B6]/8

          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute

          -right-28
          bottom-0

          h-72
          w-72

          rounded-full

          bg-[#113358]/6

          blur-[150px]
        "
      />

      <div className="relative z-10">
        {/* ================================================= */}
        {/* Icon */}
        {/* ================================================= */}

        {/* ================================================= */}
        {/* Icon */}
        {/* ================================================= */}

        <div
          className="
    relative

    mx-auto

    flex
    h-20
    w-20

    items-center
    justify-center

    rounded-[24px]

    border
    border-[#DCEAF6]

    bg-[#EDF5FC]

    shadow-[0_18px_40px_rgba(17,51,88,.08)]
  "
        >
          {/* Inner Glow */}

          <div
            className="
      pointer-events-none

      absolute
      inset-0

      rounded-[24px]

      bg-[#2374B6]/10

      blur-xl
    "
          />

          {/* Icon */}

          <Handshake
            className="
      relative

      h-10
      w-10

      text-[#2374B6]

      transition-transform
      duration-300

      group-hover:scale-110
    "
            strokeWidth={2.2}
          />
        </div>

        {/* ================================================= */}
        {/* Heading */}
        {/* ================================================= */}

        <h2
          className="
            mx-auto
            mt-8

            max-w-3xl

            text-4xl
            font-bold
            leading-tight
            tracking-tight

            text-[#113358]

            lg:text-5xl
          "
        >
          {title}
        </h2>

        {/* ================================================= */}
        {/* Description */}
        {/* ================================================= */}

        <p
          className="
            mx-auto
            mt-6

            max-w-2xl

            text-lg
            leading-8

            text-slate-600
          "
        >
          {description}
        </p>

        {/* ================================================= */}
        {/* Highlights */}
        {/* ================================================= */}

        <div
          className="
            mt-10

            flex
            flex-wrap
            justify-center

            gap-4
          "
        >
          {[
            "Enterprise Software",
            "Custom Development",
            "Scalable Architecture",
            "Long-Term Support",
          ].map((item) => (
            <span
              key={item}
              className="
                inline-flex
                items-center

                rounded-full

                border
                border-[#DCEAF6]

                bg-white/80

                px-5
                py-2.5

                text-sm
                font-medium

                text-[#113358]

                shadow-[0_8px_18px_rgba(17,51,88,.05)]

                backdrop-blur-sm
              "
            >
              ✓ {item}
            </span>
          ))}
        </div>

        {/* ================================================= */}
        {/* CTA */}
        {/* ================================================= */}

        <div className="mt-12">
          <Button
            asChild
            className="
              group

              h-14

              rounded-full

              bg-[#2374B6]

              px-8

              text-base
              font-semibold
              text-white

              shadow-[0_14px_35px_rgba(35,116,182,.22)]

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:bg-[#1C68A7]
              hover:shadow-[0_20px_45px_rgba(35,116,182,.30)]
            "
          >
            <a href={href}>
              {ctaLabel}

              <ArrowRight
                className="
                  ml-2

                  h-5
                  w-5

                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
