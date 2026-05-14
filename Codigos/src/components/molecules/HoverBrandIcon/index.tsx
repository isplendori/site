"use client";

import { useMemo, useState, type ComponentType } from "react";
import { cn } from "@/lib/utils";
import type { IconProps } from "@/components/atoms/Icon/types";

export interface HoverBrandIconProps {
  IconComponent: ComponentType<IconProps>;
  isHovered?: boolean;
  className?: string;
  defaultFillColor?: string;
  defaultFillOpacity?: number;
  hoverFillColor?: string;
  hoverFillOpacity?: number;
}

const HoverBrandIcon = ({
  IconComponent,
  isHovered: isHoveredProp,
  className,
  defaultFillColor = "#727B8E",
  defaultFillOpacity = 0.1,
  hoverFillColor = "rgba(158, 55, 42, 1)",
  hoverFillOpacity = 1,
}: HoverBrandIconProps) => {
  const [isHoveredInternal] = useState(false);
  const isHovered = isHoveredProp ?? isHoveredInternal;

  const { fillColor, fillOpacity } = useMemo(
    () => {
      const result = {
        fillColor: isHovered ? hoverFillColor : defaultFillColor,
        fillOpacity: isHovered ? hoverFillOpacity : defaultFillOpacity,
      };
      return result;
    },
    [defaultFillColor, defaultFillOpacity, hoverFillColor, hoverFillOpacity, isHovered]
  );

  return (
    <div className={cn("flex items-center justify-center select-none", className)}>
      <IconComponent fillColor={fillColor} fillOpacity={fillOpacity} className="size-5" />
    </div>
  );
};

export default HoverBrandIcon;
