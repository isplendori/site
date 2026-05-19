import { cn } from "@/lib/utils";
import SolutionButton from "./SolutionButton";
import { SolutionSectionProps } from "./types";

const SolutionSection = ({
  className,
  badge = "A SOLUÇÃO",
  title = (
    <>
        <span className="block">A gente organiza o que</span>
        <span className="block">
          estava <span className="italic text-[#9E372A]">solto</span>.
        </span>
    </>
  ),
  description = "Antes de desenhar, entendemos o negócio, a promessa e o ponto em que a comunicação perde força. Depois disso, cada peça entra no sistema com função clara.",
  buttonText = "Ver nosso método",
  buttonHref = "/sobre/metodo",
  buttonIcon,
  showFloatingMessage = false,
  floatingMessages = []
}: SolutionSectionProps) => {
  return (
    <section
      className={cn(
        "flex w-full flex-row items-stretch bg-white py-12 dark:bg-[#0A0A0A] md:h-[311px] md:py-0",
        className
      )}
    >
      <div className="flex w-full flex-col items-start justify-center px-6 md:px-13.5">
        <div className="flex w-full max-w-[429px] flex-col items-start gap-4">
          <span className="anna-solution-kicker tagline-text reveal-element text-[#8E90A1]">
            {badge}
          </span>

          <h2 className="font-instrument-serif text-[32px] font-light leading-[34px] text-[#434A57] md:text-[36px] md:leading-[32px]">
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
