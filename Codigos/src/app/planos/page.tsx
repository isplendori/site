import type { Metadata } from "next";

import { defaultBrands } from "../page.data";
import {
  BrandDivider,
  FinalCtaSection,
  HeroSection,
  MainLayout,
  PlansSection,
} from "@/components";

export const metadata: Metadata = {
  title: "Planos — Splendori",
  description:
    "Planos para marcas que precisam de produção consistente sem perder direção.",
};

const monthlyFeatures = [
  "Demandas de design recorrentes",
  "Entrega por prioridade",
  "Primeira direção em até 72h",
  "Revisões com critério",
  "Arquivos finais organizados",
  "Comunicação objetiva",
  "Marca, site e conteúdo",
  "Pause ou cancele quando fizer sentido",
];

const guarantees = [
  {
    title: "Comece sem travar",
    description:
      "A primeira semana valida ritmo, comunicação e encaixe antes de você depender do processo.",
  },
];

export default function PlanosPage() {
  return (
    <MainLayout>
      <div className="flex w-full max-w-304 mx-auto flex-col items-center px-4 sm:px-0 sm:border-x border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)]">
        <HeroSection
          eyebrow="PLANOS. ROTINA. ENTREGA."
          titleLineOneWords={["Design", "recorrente", "sem"]}
          titleLineTwoWords={["perder", "direção."]}
          titleLineTwoAccentWord="direção."
          titleLineOneAriaLabel="Design recorrente sem"
          titleLineTwoAriaLabel="perder direção."
          description="Para marcas que precisam de cadência, mas não querem transformar cada peça em uma nova reunião, um novo orçamento e uma nova dúvida."
          portfolioButtonText="Ver projetos"
          diagnosticButtonText="Escolher plano"
        />
        <BrandDivider brands={defaultBrands} />

        <div className="flex flex-col items-center justify-center w-full h-full relative">
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

        <PlansSection
          badge="PLANO"
          title={
            <>
              Produção constante precisa de <span className="italic text-[#9E372A]">sistema</span>.
            </>
          }
          freePlan={{
            name: (
              <>
                <span className="block">Comece</span>
                <span className="block">por aqui</span>
              </>
            ),
            ctaText: "Falar agora",
            ctaHref: "/contato",
          }}
          monthlyPlan={{
            title: "Plano Mensal",
            features: monthlyFeatures,
            includedLabel: "INCLUSO",
            price: "R$1,800",
            priceSuffix: "/mês",
          }}
          guarantees={guarantees}
        />

        <div className="flex flex-col items-center justify-center w-full h-full relative">
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

        <FinalCtaSection
          badge="PRONTO PARA TER RITMO?"
          title={
            <>
              <span className="block">Sua demanda não precisa</span>
              <span className="block">
                <span className="italic text-[#9E372A]">parar toda semana</span>
              </span>
            </>
          }
          description="Vamos entender volume, prioridade e momento da sua marca para indicar o formato mais leve de começar."
          buttonText="Falar sobre o plano"
          buttonHref="/contato"
          floatingMessages={[]}
        />
      </div>
    </MainLayout>
  );
}
