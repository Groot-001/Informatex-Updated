import { Rocket } from "lucide-react";

interface FooterCTAProps {
  title?: string;
  ctaLabel?: string;
  href?: string;
}

export default function FooterCTA({
  title = "Our Mission is to Enhance your Business & Much More",
  ctaLabel = "Contact Us",
  href = "#contact",
}: FooterCTAProps) {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="flex flex-col gap-6 rounded-2xl bg-indigo-50 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="flex items-center gap-5">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-indigo-100">
            <Rocket className="h-6 w-6 text-indigo-700" strokeWidth={1.75} />
          </span>
          <h2 className="text-2xl font-bold leading-snug text-slate-900 sm:text-[1.75rem]">
            {title}
          </h2>
        </div>

        <a
          href={href}
          className="inline-flex shrink-0 items-center justify-center rounded-lg bg-indigo-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-800"
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}
