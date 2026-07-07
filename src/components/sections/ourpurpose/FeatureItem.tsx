import type { FeatureItemData } from "./index";
import IconBadge from "./IconBadge";

export default function FeatureItem({ icon, title }: FeatureItemData) {
  return (
    <div className="group flex h-full items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-slate-200/60">
      <IconBadge icon={icon} color="indigo" size="sm" />
      <span className="text-sm font-semibold text-slate-900">{title}</span>
    </div>
  );
}
