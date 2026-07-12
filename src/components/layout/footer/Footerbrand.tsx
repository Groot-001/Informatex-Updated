import { Hexagon } from "lucide-react";

import type { SocialLink } from "./Types";

interface FooterBrandProps {
  name?: string;
  description?: string;
  socials?: SocialLink[];
}

export default function FooterBrand({
  name = "Informatex Tech",
  description = "Delivering innovative software solutions that empower businesses to streamline operations, improve productivity, and accelerate digital transformation.",
  socials = [],
}: FooterBrandProps) {
  return (
    <div>
      {/* ================================================= */}
      {/* Brand */}
      {/* ================================================= */}

      <div className="flex items-center gap-4">
        <div className="relative">
          {/* Glow */}

          <div
            className="
              absolute
              inset-0

              rounded-2xl

              bg-[#2374B6]/15

              blur-xl
            "
          />

          {/* Icon */}

          <div
            className="
              relative

              flex
              h-14
              w-14

              items-center
              justify-center

              rounded-2xl

              border
              border-[#DCEAF6]

              bg-[#EDF5FC]

              shadow-[0_15px_35px_rgba(17,51,88,.08)]
            "
          >
            <Hexagon
              className="
                h-7
                w-7

                text-[#2374B6]
              "
              strokeWidth={2}
            />
          </div>
        </div>

        <div>
          <h3
            className="
              text-2xl
              font-bold
              tracking-tight

              text-[#113358]
            "
          >
            {name}
          </h3>

          <p
            className="
              mt-1

              text-sm
              font-medium

              text-[#2374B6]
            "
          >
            Trusted Digital Partner
          </p>
        </div>
      </div>

      {/* ================================================= */}
      {/* Description */}
      {/* ================================================= */}

      <p
        className="
          mt-7

          max-w-sm

          text-[15px]
          leading-8

          text-slate-600
        "
      >
        {description}
      </p>

      {/* ================================================= */}
      {/* Social Links */}
      {/* ================================================= */}

      <ul className="mt-8 flex items-center gap-4">
        {socials.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              className="
                group

                flex
                h-12
                w-12

                items-center
                justify-center

                rounded-2xl

                border
                border-[#DCEAF6]

                bg-white

                text-[#2374B6]

                shadow-[0_8px_20px_rgba(17,51,88,.05)]

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#2374B6]
                hover:bg-[#2374B6]
                hover:text-white
                hover:shadow-[0_18px_35px_rgba(35,116,182,.20)]
              "
            >
              <Icon
                className="
                  h-5
                  w-5

                  transition-transform
                  duration-300

                  group-hover:scale-110
                "
                strokeWidth={2}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
