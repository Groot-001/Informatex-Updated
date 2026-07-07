
import { ArrowRight } from "lucide-react";
import IconBadge from "./IconBadge";
import type { ProductCardData } from "./index";
import ProductPreview from "./Productreview";

export default function ProductCard({
  icon,
  title,
  description,
  color,
  href,
}: ProductCardData) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/60">
      <IconBadge icon={icon} color={color} size="md" />
      <h3 className="mt-4 text-sm font-semibold text-slate-900">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
        {description}
      </p>

      <a
        href={href}
        className="mt-3 inline-flex items-center gap-1 rounded text-sm font-semibold text-indigo-600 transition-colors group-hover:text-indigo-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
      >
        Learn more
        <ArrowRight
          className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
          strokeWidth={2}
        />
      </a>

      <ProductPreview color={color} />
    </div>
  );
}
