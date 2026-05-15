import {
  BrandDivider,
  FinalCtaSection,
  LinhasPattern,
  MainLayout,
} from "@/components";
import { defaultBrands } from "@/app/page.data";
import PortfolioProjectHero from "./PortfolioProjectHero";

export interface PortfolioPresentationProject {
  slug: string;
  title: string;
  category: string;
  description: string;
  client?: string;
  year?: number;
  technologies?: string[];
  content?: {
    sections: Array<{
      type: "text" | "image" | "gallery";
      title?: string;
      text?: string;
    }>;
  };
}

interface PortfolioPresentationPageProps {
  project: PortfolioPresentationProject;
  backHref: string;
  backLabel: string;
  previousHref: string;
  nextHref: string;
  collectionLabel: string;
}

const PortfolioPresentationPage = ({
  project,
}: PortfolioPresentationPageProps) => {
  const textSections =
    project.content?.sections.filter((section) => section.type === "text") ?? [];
  const leadSection = textSections[0];
  const motivationText = [
    project.description,
    leadSection?.text,
    "A direcao do projeto nasceu da necessidade de transformar uma ideia ampla em uma presenca mais clara, consistente e desejavel. Cada decisao visual foi pensada para sustentar reconhecimento, organizar a narrativa e tornar a marca mais segura nos seus pontos de contato.",
    "O resultado combina estrategia, ritmo visual e acabamento para criar uma entrega que nao depende de excesso. A marca ganha estrutura, o conteudo ganha leitura e a experiencia passa a comunicar valor com mais precisao.",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <MainLayout>
      <div className="mx-auto flex w-full max-w-304 flex-col border-[rgba(114,123,142,0.1)] bg-white text-[#434A57] dark:border-[rgba(255,255,255,0.1)] dark:bg-[#0A0A0A] sm:border-x">
        <PortfolioProjectHero
          currentTitle={project.title}
          currentClient={project.client}
          category={project.category}
        />

        <BrandDivider brands={defaultBrands} />

        <div className="h-25 w-full border-b border-[rgba(114,123,142,0.1)]">
          <LinhasPattern className="h-full w-full" fillOpacity={0.5} />
        </div>

        <section className="border-b border-[rgba(114,123,142,0.1)] px-6 py-20 dark:border-[rgba(255,255,255,0.1)] md:px-13.5 md:py-[132px]">
          <div className="mx-auto max-w-[724px]">
            <div className="mb-5">
              <p className="font-mono text-[12px] font-semibold uppercase leading-5.25 tracking-[0.09em] text-[#8E90A1]">
                MOTIVAÇÃO
              </p>
              <h2 className="mt-1 font-instrument-serif text-[36px] font-light italic leading-[40px] text-[#434A57] dark:text-[#F1F2F4]">
                Nossa motivação
              </h2>
            </div>
            <p className="font-sans text-[14px] leading-4.75 text-[#8E90A1]">
              {motivationText}
            </p>
          </div>
        </section>

        <div className="h-25 w-full border-b border-[rgba(114,123,142,0.1)]">
          <LinhasPattern className="h-full w-full" fillOpacity={0.5} />
        </div>

        <FinalCtaSection
          badge="PRONTO PARA COMEÇAR?"
          title={
            <>
              <span className="block">Quer uma presença</span>
              <span className="block">
                com mais <span className="italic text-[#9E372A]">direção?</span>
              </span>
            </>
          }
          description="Uma conversa objetiva para entender sua marca, identificar oportunidade e definir o próximo movimento com clareza."
          buttonText="Fazer diagnóstico"
          buttonHref="/diagnostico"
        />
      </div>
    </MainLayout>
  );
};

export default PortfolioPresentationPage;
