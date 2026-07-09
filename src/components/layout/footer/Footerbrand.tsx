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
      {/* Brand */}

      <div className="flex items-center gap-3">
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-[#216FAE]
            shadow-[0_8px_24px_rgba(35,111,174,0.18)]
          "
        >
          <Hexagon
            className="h-6 w-6 fill-white text-white"
            strokeWidth={1.8}
          />
        </div>

        <span
          className="
            text-xl
            font-bold
            tracking-tight
            text-[#0F2238]
          "
        >
          {name}
        </span>
      </div>

      {/* Description */}

      <p
        className="
          mt-5
          max-w-xs
          text-sm
          leading-7
          text-[#617186]
        "
      >
        {description}
      </p>

      {/* Social Links */}

      <ul className="mt-6 flex items-center gap-3">
        {socials.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              className="
                group
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-[#E6EDF5]
                bg-white
                text-[#216FAE]

                shadow-sm

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#216FAE]
                hover:bg-[#216FAE]
                hover:text-white
                hover:shadow-[0_10px_25px_rgba(35,111,174,0.20)]
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
