import { clsx, type ClassValue } from "clsx";
// import { bgColors } from "src/constants/hero.ts";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
