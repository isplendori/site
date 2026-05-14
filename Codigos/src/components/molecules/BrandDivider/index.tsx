"use client";

import { BrandDividerProps } from "./types";

const BrandDivider = ({
  title = "CASES",
  subtitle = "Marcas que confiam",
  brands,
  className,
}: BrandDividerProps) => {
  if (!brands) return null;

  // Multiplica os ícones para garantir preenchimento suficiente da tela e loop perfeito (animação corta no 50%)
  const repeatedBrands = [...brands, ...brands, ...brands, ...brands, ...brands, ...brands];

  return (
    <div className={className || "flex flex-row items-center w-full max-w-304 h-26.25 mx-auto border-t border-b border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] overflow-hidden bg-white dark:bg-[#0A0A0A]"}>
      {/* Bloco estático (CASES) */}
      <div className="relative flex-shrink-0 flex flex-col justify-center items-center gap-1 w-67.5 h-full bg-white dark:bg-[#0A0A0A] border-x border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] z-20">
        <span className="font-mono font-semibold text-[12px] leading-5.25 tracking-[0.09em] uppercase text-[#8E90A1] w-40.5 h-3 flex items-center z-10">
          {title}
        </span>
        <span className="font-sans font-normal text-[16px] leading-5.5 text-[#434A57] w-40.5 h-3.75 flex items-center z-10">
          {subtitle}
        </span>
      </div>

      {/* Container do Carrossel com máscara de blur (fade) nas bordas esquerda e direita */}
      <div className="flex-1 overflow-hidden h-full flex flex-row items-center [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee flex flex-row h-full">
          {repeatedBrands.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="flex-shrink-0 flex flex-col justify-center items-center w-26.25 h-full bg-white dark:bg-[#0A0A0A] border-r border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] transition-colors group cursor-pointer"
            >
              <div className="relative flex items-center justify-center text-[#F1F2F4] group-hover:text-[#9E372A] transition-colors duration-500 ease-out [&_svg]:relative [&_svg]:z-10 [&_svg]:transition-colors [&_svg]:duration-500 [&_path]:transition-colors [&_path]:duration-500 [&_path]:fill-current [&_svg]:fill-current">
                <span
                  aria-hidden="true"
                  className="absolute inset-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(158,55,42,0.18)_0%,rgba(158,55,42,0.08)_38%,rgba(158,55,42,0)_72%)] opacity-0 blur-md transition-opacity duration-500 ease-out group-hover:opacity-100"
                />
                {brand.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandDivider;
