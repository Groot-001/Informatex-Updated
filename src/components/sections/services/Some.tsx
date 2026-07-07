import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "./utils";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center rounded-xl text-sm font-semibold tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A3AFF] disabled:pointer-events-none disabled:opacity-50 w-full sm:w-auto",
          {
            "bg-[#4A3AFF] text-white shadow-sm hover:bg-[#3B2EE0]":
              variant === "primary",
            "bg-[#EEEBFF] text-[#4A3AFF] hover:bg-[#E1DCFF]":
              variant === "secondary",
            "bg-transparent text-gray-600 hover:bg-gray-100":
              variant === "ghost",
          },
          {
            "px-4 py-2 text-xs": size === "sm",
            "px-6 py-3.5": size === "md",
            "px-8 py-4 text-base": size === "lg",
          },
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
