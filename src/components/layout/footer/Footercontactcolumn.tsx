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
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map(({ icon: Icon, lines, href }, index) => {
          const row = (
            <span className="flex items-start gap-2.5 text-sm text-slate-500">
              <Icon
                className="mt-0.5 h-4 w-4 shrink-0 text-indigo-700"
                strokeWidth={2}
              />
              <span>
                {lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </span>
          );

          return (
            <li key={index}>
              {href ? (
                <a
                  href={href}
                  className="transition-colors hover:text-indigo-700"
                >
                  {row}
                </a>
              ) : (
                row
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
