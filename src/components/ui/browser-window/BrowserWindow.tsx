import { cn } from "@/lib/utils";

import type { BrowserWindowProps } from "./types";

export default function BrowserWindow({
  children,
  title,
  className,
}: BrowserWindowProps) {
  return (
    <div
      className={cn(
        `
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-[0_24px_60px_rgba(15,23,42,0.12)]
      `,
        className,
      )}
    >
      {/* Browser Header */}
      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-slate-200
          bg-slate-50
          px-5
          py-3
        "
      >
        {/* Browser Dots */}
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        {/* Title */}
        {title ? (
          <span
            className="
              text-sm
              font-medium
              text-slate-500
            "
          >
            {title}
          </span>
        ) : (
          <div />
        )}

        {/* Spacer */}
        <div className="w-14" />
      </div>

      {/* Content */}
      <div>{children}</div>
    </div>
  );
}
