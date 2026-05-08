"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { ArrowUpRight } from "@/components";
import FloatingMessage from "@/atoms/FloatingMessage";

export interface FinalCtaSectionProps {
  className?: string;
  badge?: string;
  title?: ReactNode;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  floatingMessages?: string[];
}

const defaultTitle = (
  <>
    <span className="block">Pare de improvisar</span>
    <span className="block">
      Comece a <span className="italic text-[#9E372A]">construir</span>
    </span>
  </>
);

const defaultDescription =
  "Uma conversa. Sem compromisso, sem 40 slides, sem mil propostas, sem enrolação. A gente entende o seu negócio e mostra onde está a oportunidade.";

const FinalCtaSection = ({
  className,
  badge = "PRONTO PARA COMEÇAR?",
  title = defaultTitle,
  description = defaultDescription,
  buttonText = "Fazer diagnóstico",
  buttonHref = "/diagnostico",
  floatingMessages = ["NÃO VAI DOER. PROMETEMOS."],
}: FinalCtaSectionProps) => {
  const [showFloatingMessage, setShowFloatingMessage] = useState(false);
  const hasFloating = floatingMessages.length > 0;

  return (
    <section className={cn("relative flex flex-col items-center justify-center gap-4 py-24 bg-white", className)}>
      <div className="flex flex-row justify-center items-center px-4 py-2 gap-2.5 h-9 bg-white border border-[rgba(114,123,142,0.1)] rounded-[200px]">
        <span className="font-mono font-semibold text-[12px] leading-5.25 tracking-[0.09em] uppercase text-[#8E90A1] h-5.25 flex items-center">
          {badge}
        </span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <h2 className="font-itc-garamond-std font-light text-[44px] leading-13.25 text-center text-[#434A57]">
          {title}
        </h2>
      </div>

      <div className="flex flex-col items-center gap-4.5 max-w-130">
        <p className="font-sans text-[14px] leading-4.75 text-[#8E90A1] text-center">
          {description}
        </p>

        <Link
          href={buttonHref}
          className="flex flex-row justify-center items-center px-4 py-2 gap-2.5 h-9 bg-[#12141B] border border-[rgba(114,123,142,0.1)] rounded-[200px] hover:bg-[#9E372A] transition-colors group"
          onMouseEnter={hasFloating ? () => setShowFloatingMessage(true) : undefined}
          onMouseLeave={hasFloating ? () => setShowFloatingMessage(false) : undefined}
        >
          <span className="font-sans font-medium text-[14px] leading-5 text-center text-white">
            {buttonText}
          </span>
          <div className="w-2 h-2 [&_path]:transition-colors [&_path]:group-hover:stroke-[#FFFFFF]">
            <ArrowUpRight stroke="#FFFFFF" />
          </div>
        </Link>
      </div>

      {hasFloating && (
        <FloatingMessage messages={floatingMessages} isVisible={showFloatingMessage} />
      )}
    </section>
  );
};

export default FinalCtaSection;
