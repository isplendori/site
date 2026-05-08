import { ReactNode } from "react";

export interface Brand {
  id: string;
  icon: ReactNode;
}

export interface BrandDividerProps {
  title?: string;
  brands?: Brand[];
  subtitle?: string;
  className?: string;
}
