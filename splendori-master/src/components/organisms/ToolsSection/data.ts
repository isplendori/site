import { BrandIcon1, BrandIcon2, BrandIcon3, BrandIcon4, BrandIcon5, BrandIcon6 } from "@/components";
import { IconComponent } from "./types";

export const iconComponents: IconComponent[] = [
  BrandIcon1,
  BrandIcon2,
  BrandIcon3,
  BrandIcon4,
  BrandIcon5,
  BrandIcon6
];

export const topRowIcons: IconComponent[] = Array(12).fill(BrandIcon1);
export const sideGridIcons: IconComponent[] = [
  BrandIcon1, BrandIcon1, BrandIcon1,
  BrandIcon6, BrandIcon3, BrandIcon2,
  BrandIcon1, BrandIcon1, BrandIcon1
];
