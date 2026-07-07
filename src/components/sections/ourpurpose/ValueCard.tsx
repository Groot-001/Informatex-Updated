import { CheckCircle2 } from "lucide-react";
import type { ValueCardData } from ".";
import IconBadge from "./IconBadge";


export default function ValueCard({
  icon,
  title,
  color,
  description,
  checklist,
}: ValueCardData) {
  return (
    <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/60">
      <IconBadge icon={icon} color={color} size="lg" />
      <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
      <span className="mt-2 block h-0.5 w-8 bg-indigo-600" aria-hidden="true" />

      {description && (
        <p className="mt-3 text-sm leading-relaxed text-slate-500">
          {description}
        </p>
      )}

      {checklist && (
        <ul className="mt-3 space-y-2">
          {checklist.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-slate-600"
            >
              <CheckCircle2
                className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600"
                strokeWidth={2}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
