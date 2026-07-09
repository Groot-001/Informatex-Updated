import { ArrowRight, Rocket } from "lucide-react";

interface FooterCTAProps {
  title?: string;
  description?: string;
  ctaLabel?: string;
  href?: string;
}

export default function FooterCTA({
  title = "Let's Build Something Great Together",
  description = "Whether you're planning a new product or modernizing an existing system, our team is ready to help you build secure, scalable, and future-ready solutions.",
  ctaLabel = "Contact Us",
  href = "#contact",
}: FooterCTAProps) {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-[#E6EDF5]
          bg-[#F7FAFD]
          px-6
          py-6

          shadow-[0_12px_40px_rgba(9,50,84,0.08)]

          lg:px-10
          lg:py-8
        "
      >
        {/* Background Glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-64
            w-64
            rounded-full
            bg-[rgba(35,116,182,0.08)]
            blur-3xl
          "
        />

        <div
          className="
            relative
            flex
            flex-col
            gap-6

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* Content */}

          <div className="flex items-center gap-5">
            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-[#216FAE]
              "
            >
              <Rocket className="h-7 w-7 text-white" strokeWidth={2} />
            </div>

            <div>
              <h2
                className="
                  text-2xl
                  font-bold
                  leading-tight
                  text-[#0F2238]

                  lg:text-3xl
                "
              >
                {title}
              </h2>

              <p
                className="
                  mt-2
                  max-w-2xl
                  text-sm
                  leading-6
                  text-[#617186]

                  sm:text-base
                "
              >
                {description}
              </p>
            </div>
          </div>

          {/* CTA */}

          <a
            href={href}
            className="
              group
              inline-flex
              h-12
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-[#216FAE]
              px-7

              text-sm
              font-semibold
              text-white

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:bg-[#1B5F95]
              hover:shadow-[0_10px_30px_rgba(35,116,182,0.25)]
            "
          >
            {ctaLabel}

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
          </a>
        </div>
      </div>
    </div>
  );
}
