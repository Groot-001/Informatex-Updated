import { Boxes, ArrowRight } from "lucide-react";

interface ProductHighlightCardProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaLabel?: string;
  href?: string;
}

export default function ProductHighlightCard({
  title = "6 Powerful Products",
  subtitle = "One Connected Ecosystem",
  description = "Built to work together. Designed for every department.",
  ctaLabel = "View All Products",
  href = "#products",
}: ProductHighlightCardProps) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 p-8 text-white">
      <div>
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
          <Boxes className="h-6 w-6" strokeWidth={2} />
        </span>
        <h3 className="mt-6 text-2xl font-bold leading-snug">{title}</h3>
        <p className="mt-1 text-lg font-medium text-indigo-100">{subtitle}</p>
        <span className="mt-4 block h-px w-10 bg-white/40" aria-hidden="true" />
        <p className="mt-4 text-sm leading-relaxed text-indigo-100">
          {description}
        </p>
      </div>

      <a
        href={href}
        className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-indigo-700 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-600"
      >
        {ctaLabel}
        <ArrowRight className="h-4 w-4" strokeWidth={2} />
      </a>
    </div>
  );
}
