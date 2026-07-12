import type { ContactItem } from "./Types";

interface FooterContactColumnProps {
  title?: string;
  items: ContactItem[];
}

export default function FooterContactColumn({
  title = "Contact Us",
  items,
}: FooterContactColumnProps) {
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
      {/* Contact List */}
      {/* ================================================= */}

      <ul className="mt-8 space-y-6">
        {items.map(({ icon: Icon, lines, href }, index) => {
          const content = (
            <div
              className="
                group

                flex
                items-start
                gap-4

                transition-all
                duration-300
              "
            >
              {/* Icon */}

              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0

                  items-center
                  justify-center

                  rounded-2xl

                  border
                  border-[#DCEAF6]

                  bg-[#EDF5FC]

                  shadow-[0_8px_18px_rgba(17,51,88,.05)]

                  transition-all
                  duration-300

                  group-hover:scale-105
                  group-hover:border-[#2374B6]
                  group-hover:bg-[#2374B6]
                "
              >
                <Icon
                  className="
                    h-5
                    w-5

                    text-[#2374B6]

                    transition-colors
                    duration-300

                    group-hover:text-white
                  "
                  strokeWidth={2}
                />
              </div>

              {/* Content */}

              <div
                className="
                  pt-0.5

                  text-[15px]
                  leading-7

                  text-slate-600

                  transition-colors
                  duration-300

                  group-hover:text-[#113358]
                "
              >
                {lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          );

          return (
            <li key={index}>
              {href ? (
                <a
                  href={href}
                  className="
                    block

                    transition-transform
                    duration-300

                    hover:translate-x-1
                  "
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
