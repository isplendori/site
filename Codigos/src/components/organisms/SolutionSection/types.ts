import { ReactNode } from "react";

export interface SolutionSectionProps {
  className?: string;
  badge?: string;
  title?: ReactNode;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  buttonIcon?: ReactNode;
  showFloatingMessage?: boolean;
  floatingMessages?: string[];
}
