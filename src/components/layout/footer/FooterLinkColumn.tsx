import type { FooterLinkColumnData } from "./Types";

export default function FooterLinkColumn({
  title,
  links,
}: FooterLinkColumnData) {
  return (
    <div>
      {/* Heading */}

      <h3
        className="
          text-lg
          font-semibold
          text-[#0F2238]
        "
      >
        {title}
      </h3>

      {/* Links */}

      <ul className="mt-6 space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="
                group
                inline-flex
                items-center
                text-sm
                font-medium
                text-[#617186]
                transition-all
                duration-300

                hover:translate-x-1
                hover:text-[#216FAE]
              "
            >
              <span
                className="
                  mr-2
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#216FAE]
                  opacity-0
                  transition-all
                  duration-300

                  group-hover:opacity-100
                "
              />

              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}