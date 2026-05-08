import type { Metadata } from "next";

import { defaultBrands } from "@/app/page.data";
import { BrandDivider, FinalCtaSection, HeroSection, MainLayout, StarsDivider, TeamGridSection, WordmarkSection } from "@/components";

export const metadata: Metadata = {
  title: "Projetos — Splendori",
  description: "Trabalhos comerciais, marcas, sites e campanhas.",
};

const ongs = [
  { name: "OncoCão", role: "ANIMAL", floatingMessages: ["TRATAMENTO ONCOLÓGICO"] },
  { name: "Adote um Gatinho", role: "ANIMAL", floatingMessages: ["ADOÇÃO RESPONSÁVEL"] },
  { name: "SOS Aves e Cia", role: "ANIMAL", floatingMessages: ["RESGATE DE AVES"] },
  { name: "Cão Sem Dono", role: "ANIMAL", floatingMessages: ["LARES PARA TODOS"] },
  { name: "B2Mamy", role: "MULHERES", floatingMessages: ["MÃES EMPREENDEDORAS"] },
  { name: "Capacitrans", role: "MULHERES", floatingMessages: ["INCLUSÃO TRANS"] },
  { name: "ProgramMaria", role: "MULHERES", floatingMessages: ["MULHERES NA TECNOLOGIA"] },
  { name: "Dona de Si", role: "MULHERES", floatingMessages: ["EMPODERAMENTO FEMININO"] },
  { name: "Ilê Aiyê", role: "ANCESTRALIDADE", floatingMessages: ["CULTURA AFRO-BRASILEIRA"] },
  { name: "Fundo Agbara", role: "ANCESTRALIDADE", floatingMessages: ["MULHERES NEGRAS"] },
  { name: "ARCAB", role: "UMBANDA", floatingMessages: ["TRADIÇÃO E FÉ"] },
  { name: "Missão Cena", role: "EVANGÉLICA", floatingMessages: ["ARTE QUE TRANSFORMA"] },
  { name: "Reprograma", role: "TECNOLOGIA", floatingMessages: ["MULHERES NO CÓDIGO"] },
  { name: "Museu da Pessoa", role: "HISTÓRIA", floatingMessages: ["MEMÓRIAS QUE INSPIRAM"] },
  { name: "Instituto Princípia", role: "CIÊNCIAS", floatingMessages: ["CIÊNCIA PARA TODOS"] },
  { name: "Instituto Baccarelli", role: "ARTES", floatingMessages: ["MÚSICA QUE LIBERTA"] },
];

export default function ProjetosPage() {
  return (
    <MainLayout>
      <div className="flex w-full max-w-304 mx-auto flex-col items-center px-4 sm:px-0 sm:border-x border-[rgba(114,123,142,0.1)]">
        <HeroSection />
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

        <WordmarkSection
          badge="MOTIVAÇÃO"
          title={<span className="block italic">Nossa motivação</span>}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          buttonText=""
          floatingMessages={[]}
          hideWordmark
        />

        <StarsDivider />

        <TeamGridSection
          badge="ONGS"
          title={<span className="block italic">Conheça um pouco</span>}
          members={ongs}
          columns={4}
          height={1100}
        />

        <div className="w-full">
          <svg width="100%" height="100%" viewBox="0 0 1216 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="border-b border-[rgba(114,123,142,0.1)]">
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
