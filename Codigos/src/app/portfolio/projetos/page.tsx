import type { Metadata } from "next";

import { defaultBrands } from "@/app/page.data";
import {
  BrandDivider,
  FinalCtaSection,
  HeroSection,
  MainLayout,
} from "@/components";
import PortfolioProjectsShowcase from "./PortfolioProjectsShowcase";

export const metadata: Metadata = {
  title: "Projetos — Splendori",
  description: "Marcas, sites e campanhas criados para resolver presença com critério.",
};

export default function ProjetosPage() {
  return (
    <MainLayout>
      <div className="flex w-full max-w-304 mx-auto flex-col items-center px-4 sm:px-0 sm:border-x border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)]">
        <HeroSection
          eyebrow="PORTFÓLIO. CRITÉRIO. APLICAÇÃO."
          titleLineOneWords={["Projetos", "que", "não"]}
          titleLineTwoWords={["param", "na", "aparência."]}
          titleLineTwoAccentWord="aparência."
          titleLineOneAriaLabel="Projetos que não"
          titleLineTwoAriaLabel="param na aparência."
          description="Cada entrega aqui nasceu para organizar uma marca, sustentar uma mensagem ou melhorar uma experiência. Bonito é pouco quando o negócio precisa ser entendido."
          portfolioButtonText="Explorar áreas"
          diagnosticButtonText="Quero um projeto"
        />
        <BrandDivider brands={defaultBrands} />

        <div className="flex flex-col items-center justify-center w-full h-full relative border-b border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)]">
          <svg width="100%" height="100%" viewBox="0 0 1216 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="1216" height="100" fill="url(#pattern0_8010_22182)" fillOpacity="0.59" />
            <defs>
              <pattern id="pattern0_8010_22182" patternContentUnits="objectBoundingBox" width="0.00986842" height="0.12">
                <use xlinkHref="#image0_8010_22182" transform="scale(0.000822368 0.01)" />
              </pattern>
              <image id="image0_8010_22182" width="12" height="12" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAwSURBVHgB7cyxDQAwCANBb55snJDINcgbQInE16cHEtnnuo9+jHtwR6wqWHNUsOYB9qJ+JZ0YYfoAAAAASUVORK5CYII=" />
            </defs>
          </svg>
        </div>

        <PortfolioProjectsShowcase />

        <div className="w-full">
          <svg width="100%" height="100%" viewBox="0 0 1216 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="border-y border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)]">
            <rect width="1216" height="100" fill="url(#pattern0_8010_22182)" fillOpacity="0.59" />
            <defs>
              <pattern id="pattern0_8010_22182" patternContentUnits="objectBoundingBox" width="0.00986842" height="0.12">
                <use xlinkHref="#image0_8010_22182" transform="scale(0.000822368 0.01)" />
              </pattern>
              <image id="image0_8010_22182" width="12" height="12" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAwSURBVHgB7cyxDQAwCANBb55snJDINcgbQInE16cHEtnnuo9+jHtwR6wqWHNUsOYB9qJ+JZ0YYfoAAAAASUVORK5CYII=" />
            </defs>
          </svg>
        </div>

        <FinalCtaSection
          badge="VIU O SUFICIENTE?"
          title={
            <>
              <span className="block">Seu projeto pode ter</span>
              <span className="block">
                <span className="italic text-[#9E372A]">mais direção</span>
              </span>
            </>
          }
          description="Conte onde sua marca está perdendo força e vamos apontar o próximo movimento com clareza."
          buttonText="Fazer diagnóstico"
          buttonHref="/diagnostico"
          floatingMessages={[]}
        />
      </div>
    </MainLayout>
  );
}
