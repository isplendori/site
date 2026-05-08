"use client";

import { BrandDividerProps } from "./types";

const BrandDivider = ({
  title = "CASES",
  subtitle = "Marcas que confiam",
  brands,
  className,
}: BrandDividerProps) => {
  if (!brands) return null;

  return (
    <div className={className || "flex flex-row items-center w-full max-w-304 h-26.25 mx-auto"}>
      <div className="relative flex flex-col justify-center items-center gap-1 w-67.5 h-26.25 bg-white border border-[rgba(114,123,142,0.1)]">
        <span className="font-mono font-semibold text-[12px] leading-5.25 tracking-[0.09em] uppercase text-[#8E90A1] w-40.5 h-3 flex items-center z-10">
          {title}
        </span>
        <span className="font-sans font-normal text-[16px] leading-5.5 text-[#434A57] w-40.5 h-3.75 flex items-center z-10">
          {subtitle}
        </span>
      </div>

      {brands.map((brand, index) => (
        <div
          key={brand.id}
          className={`flex flex-col justify-center items-center w-26.25 h-26.25 bg-white border-r border-t border-b border-[rgba(114,123,142,0.1)] ${
            index === brands.length - 1 ? 'w-26.5' : ''
          }`}
        >
          {brand.icon}
        </div>
      ))}
    </div>
  );
};

export default BrandDivider;
