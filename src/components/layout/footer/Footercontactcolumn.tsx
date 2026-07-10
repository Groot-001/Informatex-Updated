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
      <h3
        className="
          text-lg
          font-semibold
          text-[#0F2238]
        "
      >
        {title}
      </h3>

      <ul className="mt-6 space-y-5">
        {items.map(({ icon: Icon, lines, href }, index) => {
          const content = (
            <div className="group flex items-start gap-4">
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#E6EDF5]
                  bg-white
                  transition-all
                  duration-300

                  group-hover:border-[#216FAE]
                  group-hover:bg-[#216FAE]
                "
              >
                <Icon
                  className="
                    h-5
                    w-5
                    text-[#216FAE]
                    transition-colors
                    duration-300

                    group-hover:text-white
                  "
                  strokeWidth={2}
                />
              </div>

              <div
                className="
                  text-sm
                  leading-7
                  text-[#617186]
                  transition-colors
                  duration-300

                  group-hover:text-[#0F2238]
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
                    transition-all
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
