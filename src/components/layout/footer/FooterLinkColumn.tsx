import { ArrowRight } from "lucide-react";

import type { FooterLinkColumnData } from "./Types";

export default function FooterLinkColumn({
  title,
  links,
}: FooterLinkColumnData) {
  return (
    <div>
      {/* ================================================= */}
      {/* Heading */}
      {/* ================================================= */}

      <h3
        className="
          text-xl
          font-semibold

          text-[#113358]
        "
      >
        {title}
      </h3>

      {/* ================================================= */}
      {/* Links */}
      {/* ================================================= */}

      <ul className="mt-8 space-y-5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="
                group

                inline-flex
                items-center
                gap-3

                text-[15px]
                font-medium

                text-slate-600

                transition-all
                duration-300

                hover:translate-x-1
                hover:text-[#2374B6]
              "
            >
              {/* Dot */}

              <span
                className="
                  h-2
                  w-2

                  rounded-full

                  bg-[#2374B6]

                  opacity-60

                  transition-all
                  duration-300

                  group-hover:scale-125
                  group-hover:opacity-100
                "
              />

              {/* Label */}

              <span>{link.label}</span>

              {/* Arrow */}

              <ArrowRight
                className="
                  h-4
                  w-4

                  -translate-x-2

                  opacity-0

                  transition-all
                  duration-300

                  group-hover:translate-x-0
                  group-hover:opacity-100
                "
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
