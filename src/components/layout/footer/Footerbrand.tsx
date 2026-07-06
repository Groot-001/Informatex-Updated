import { Hexagon } from "lucide-react";
import type { SocialLink } from "./Types";

interface FooterBrandProps {
  name?: string;
  description?: string;
  socials?: SocialLink[];
}

export default function FooterBrand({
  name = "Informatex Tech",
  description = "Delivering innovative tech and content solutions that empower businesses to grow, communicate, and succeed in the digital world.",
  socials = [],
}: FooterBrandProps) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Hexagon
          className="h-6 w-6 fill-indigo-700 text-indigo-700"
          strokeWidth={1.5}
        />
        <span className="text-lg font-bold text-slate-900">{name}</span>
      </div>

      <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
        {description}
      </p>

      <ul className="mt-5 flex items-center gap-3">
        {socials.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 transition-colors hover:bg-indigo-700 hover:text-white"
            >
              <Icon className="h-4 w-4" strokeWidth={2} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
