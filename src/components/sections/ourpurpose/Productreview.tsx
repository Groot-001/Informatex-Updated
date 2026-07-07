import type { AccentColor } from "./index";

const barColor: Record<AccentColor, string> = {
  purple: "bg-violet-300",
  pink: "bg-rose-300",
  green: "bg-emerald-300",
  orange: "bg-orange-300",
  blue: "bg-blue-300",
  teal: "bg-teal-300",
  indigo: "bg-indigo-300",
};

export default function ProductPreview({ color }: { color: AccentColor }) {
  return (
    <div
      className="mt-4 rounded-lg border border-slate-100 bg-slate-50 p-3"
      aria-hidden="true"
    >
      <div className="flex gap-1.5">
        <span className={`h-1.5 w-1.5 rounded-full ${barColor[color]}`} />
        <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />
        <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />
      </div>
      <div className="mt-2.5 space-y-1.5">
        <span className={`block h-1.5 w-3/4 rounded-full ${barColor[color]}`} />
        <span className="block h-1.5 w-full rounded-full bg-slate-200" />
        <span className="block h-1.5 w-5/6 rounded-full bg-slate-200" />
      </div>
    </div>
  );
}
