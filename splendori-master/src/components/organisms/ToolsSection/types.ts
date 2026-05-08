import { ComponentType } from "react";
import { IconProps } from "@/components/atoms/Icon/types";

export interface ToolsSectionProps {
  className?: string;
}

export type IconComponent = ComponentType<IconProps>;

export interface IconGridRow {
  icons: IconComponent[];
  cols: number;
}
