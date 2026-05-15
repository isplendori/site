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
  description: "Trabalhos comerciais, marcas, sites e campanhas.",
};

export default function ProjetosPage() {
  return (
    <MainLayout>
      <div className="flex w-full max-w-304 mx-auto flex-col items-center px-4 sm:px-0 sm:border-x border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)]">
        <HeroSection />
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
          badge="PRONTO PARA COMEÇAR?"
          title={
            <>
              <span className="block">Quer fazer parte</span>
              <span className="block">
                <span className="italic text-[#9E372A]">do nosso time?</span>
              </span>
            </>
          }
          description="Uma conversa. Sem compromisso, sem 40 slides, sem mil propostas, sem enrolação. A gente entende o seu negócio e mostra onde está a oportunidade."
          buttonText="Envie seu currículo e portfólio"
          buttonHref="/carreiras"
          floatingMessages={[]}
        />
      </div>
    </MainLayout>
  );
}
