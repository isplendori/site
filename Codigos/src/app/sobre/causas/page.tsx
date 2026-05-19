import type { Metadata } from "next";

import { defaultBrands } from "@/app/page.data";
import { BrandDivider, FinalCtaSection, HeroSection, MainLayout, StarsDivider, TeamGridSection, WordmarkSection } from "@/components";

export const metadata: Metadata = {
  title: "Causas — Splendori",
  description: "Causas e instituições que ampliam o sentido da presença que a Splendori escolhe apoiar.",
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

const ongHrefs = [
  "https://www.instagram.com/oncocao/",
  "https://www.adoteumgatinho.org.br/",
  "https://www.sosavesecia.org.br/",
  "https://www.caosemdono.com.br/",
  "https://www.b2mamy.com.br/",
  "https://capacitransrj.com.br/",
  "https://www.programaria.org/",
  "https://institutodonadesi.com.br/",
  "https://ileaiyeoficial.com/",
  "https://fundoagbara.org.br/",
  "https://www.atuco.com.br/",
  "https://www.ongsbrasil.com.br/default.asp?CodigoInstituicao=21274&Pag=2",
  "https://reprograma.com.br/",
  "https://museudapessoa.org/",
  "https://www.institutoprincipia.org/",
  "https://baccarelli.org.br/",
];

const ongsWithLinks = ongs.map((ong, index) => ({
  ...ong,
  floatingMessages: [],
  href: ongHrefs[index],
  external: true,
  enableModal: false,
}));

export default function CausasPage() {
  return (
    <MainLayout>
      <div className="flex w-full max-w-304 mx-auto flex-col items-center px-4 sm:px-0 sm:border-x border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)]">
        <HeroSection
          eyebrow="CAUSAS. ESCOLHA. PRESENÇA."
          titleLineOneWords={["Toda", "marca", "também"]}
          titleLineTwoWords={["escolhe", "o", "que", "apoia."]}
          titleLineTwoAccentWord="apoia."
          titleLineOneAriaLabel="Toda marca também"
          titleLineTwoAriaLabel="escolhe o que apoia."
          description="Aqui reunimos iniciativas que merecem visibilidade, cuidado e continuidade. Presença também é decidir para onde a atenção da marca aponta."
          portfolioButtonText="Conhecer projetos"
          diagnosticButtonText="Falar com a Splendori"
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

        <WordmarkSection
          badge="MOTIVAÇÃO"
          title={<span className="block italic">Nossa motivação</span>}
          description="Apoiamos causas porque comunicação também distribui atenção. Quando uma instituição séria ganha clareza, mais gente entende o trabalho, confia no processo e encontra um caminho para ajudar."
          buttonText=""
          floatingMessages={[]}
          hideWordmark
        />

        <StarsDivider />

        <TeamGridSection
          badge="ONGS"
          title={<span className="block italic">Conheça quem merece atenção</span>}
          members={ongsWithLinks}
          columns={4}
          height={1100}
        />

        <div className="w-full">
          <svg width="100%" height="100%" viewBox="0 0 1216 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="border-b border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)]">
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
          badge="QUER SOMAR COM CLAREZA?"
          title={
            <>
              <span className="block">Uma boa causa precisa</span>
              <span className="block">
                <span className="italic text-[#9E372A]">ser entendida</span>
              </span>
            </>
          }
          description="Se você conhece uma iniciativa que precisa organizar presença, conte para a gente."
          buttonText="Indicar uma causa"
          buttonHref="/contato"
          floatingMessages={[]}
        />
      </div>
    </MainLayout>
  );
}
