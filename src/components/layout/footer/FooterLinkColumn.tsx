import type { FooterLinkColumnData } from "./Types";

export default function FooterLinkColumn({
  title,
  links,
}: FooterLinkColumnData) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-slate-500 transition-colors hover:text-indigo-700"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
