import { cn } from "@/lib/utils";
import SolutionButton from "./SolutionButton";
import { SolutionSectionProps } from "./types";

const SolutionSection = ({
  className,
  badge = "A SOLUÇÃO",
  title = (
    <>
      <span className="block">Nós pensamos por você</span>
      <span className="block">
        e você começa a <span className="italic text-[#9E372A]">crescer</span>.
      </span>
    </>
  ),
  description = "Sua marca ganha estrutura, presença e direção. Cada decisão tomada com propósito, cada entrega pensada para o seu negócio. Para você parar de improvisar e começar a ser levado a sério.",
  buttonText = "Conheça nosso método",
  buttonHref = "/sobre/metodo",
  buttonIcon,
  showFloatingMessage = false,
  floatingMessages = []
}: SolutionSectionProps) => {
  return (
    <section
      className={cn(
        "flex h-[311px] w-full flex-row items-stretch bg-white dark:bg-[#0A0A0A]",
        className
      )}
    >
      <div className="flex w-full flex-col items-start justify-center px-13.5">
        <div className="flex w-[429px] flex-col items-start gap-4">
          <span className="anna-solution-kicker reveal-element font-mono text-[12px] font-semibold leading-[21px] tracking-[0.09em] text-[#8E90A1] uppercase">
            {badge}
          </span>

          <h2 className="font-instrument-serif text-[36px] font-light leading-[32px] text-[#434A57]">
            {title}
          </h2>

          <p className="font-sans text-[14px] leading-[19.6px] text-[#8E90A1]">
            {description}
          </p>

          <SolutionButton
            href={buttonHref}
            text={buttonText}
            icon={buttonIcon}
            showFloatingMessage={showFloatingMessage}
            floatingMessages={floatingMessages}
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
