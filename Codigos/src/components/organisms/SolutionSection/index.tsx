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
  description = "Sua marca ganha estrutura, presença e direção. Cada decisão tomada com propósito, cada entrega encaixada para o seu negócio. Para você parar de improvisar e começar a ser levado a sério.",
  buttonText = "Conheça nossa história",
  buttonHref = "/sobre",
  buttonIcon,
  showFloatingMessage = false,
  floatingMessages = []
}: SolutionSectionProps) => {
  return (
    <section
      className={cn(
        "flex flex-row items-stretch w-full border-b border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] bg-white dark:bg-[#0A0A0A]",
        className
      )}
    >
      <div className="flex flex-col justify-center items-start px-13.5 py-13.5 w-full">
        <div className="flex flex-col items-start gap-3.5 w-108.75">
          <span className="font-mono font-semibold text-[12px] leading-5.25 tracking-[0.09em] uppercase text-[#8E90A1]">
            {badge}
          </span>

          <h2 className="font-instrument-serif font-light text-[36px] leading-10.75 text-[#434A57]">
            {title}
          </h2>

          <p className="font-sans text-[14px] leading-4.75 text-[#8E90A1]">
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
