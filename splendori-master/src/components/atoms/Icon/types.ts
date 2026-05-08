import type { ComponentProps } from "react";

export interface IconProps {
  width?: number;
  height?: number;
  fillColor?: string;
  fillOpacity?: number;
  color?: string;
  className?: string;
}

type SvgPathProps = Pick<
  ComponentProps<"path">,
  | "stroke"
  | "strokeWidth"
  | "strokeLinecap"
  | "strokeLinejoin"
  | "fill"
  | "fillOpacity"
>;

export interface BrandIconProps extends IconProps {
  viewBox: string;
  paths: ReadonlyArray<{ d: string } & SvgPathProps>;
}
