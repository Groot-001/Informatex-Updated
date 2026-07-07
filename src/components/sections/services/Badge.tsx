import React from "react";
import { cn } from "./utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  icon,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-purple-100 bg-white px-4 py-2 shadow-xs",
        className,
      )}
      {...props}
    >
      {icon && <span className="text-[#4A3AFF]">{icon}</span>}
      <span className="text-xs font-bold uppercase tracking-wider text-[#4A3AFF]">
        {children}
      </span>
    </div>
  );
};
