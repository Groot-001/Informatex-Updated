import type { ReactNode } from "react";

export interface BrowserWindowProps {
  children: ReactNode;
  title?: string;
  address?: string;
  className?: string;
}
