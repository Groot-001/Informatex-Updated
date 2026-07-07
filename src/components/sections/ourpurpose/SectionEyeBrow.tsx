import React from "react";

interface SectionEyebrowProps {
  children: React.ReactNode;
  align?: "left" | "center";
}

export default function SectionEyebrow({ children, align = "left" }: SectionEyebrowProps) {
  return (
    <div className={`flex items-center gap-2 ${align === "center" ? "justify-center" : ""}`}>
      <span className="h-px w-5 bg-indigo-600" aria-hidden="true" />
      <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
        {children}
      </span>
    </div>
  );
}