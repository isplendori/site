"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight, FloatingMessage } from "@/components";

export interface WorkModelsSectionProps {
  className?: string;
}

const WorkModelsSection = ({ className }: WorkModelsSectionProps) => {
  const [showFloatingMessage, setShowFloatingMessage] = useState(false);

  return (
    <section className={cn("flex w-full flex-col border-y border-[rgba(114,123,142,0.1)] bg-white dark:border-[rgba(255,255,255,0.1)] dark:bg-[#0A0A0A] lg:h-[490px] lg:flex-row", className)}>
      <div className="flex h-auto w-full items-center justify-center border-b border-[rgba(114,123,142,0.1)] px-4 py-12 dark:border-[rgba(255,255,255,0.1)] lg:h-full lg:w-[432px] lg:border-b-0 lg:border-r lg:px-0 lg:py-0">
        <div className="w-full lg:w-82.25 h-auto lg:h-96 flex flex-col items-start gap-2.5">
          <div className="w-full flex flex-col items-start">
            <span className="tagline-text text-[#8E90A1]">
              COMO TRABALHAMOS
            </span>

            <h2 className="font-instrument-serif font-light text-[36px] leading-10.75 text-[#434A57]">
              <span className="block">
                O formato <span className="italic text-[#9E372A]">certo</span>
              </span>
              <span className="block">para seu momento.</span>
            </h2>
          </div>

          <p className="font-sans font-normal text-[14px] leading-4.75 text-[#8E90A1]">
            Nem toda marca precisa da mesma intensidade. Algumas pedem rotina, outras precisam destravar uma entrega específica com precisão.
          </p>

          <Link
            href="/portfolio"
            className="flex flex-row justify-center items-center px-4 py-2 gap-2.5 h-9 bg-white dark:bg-[#0A0A0A] border border-dashed border-[rgba(114,123,142,0.28)] dark:border-[rgba(255,255,255,0.2)] rounded-[200px] hover:border-[#9E372A] hover:bg-[#EADCDB] dark:hover:bg-[#2A1716] transition-colors group"
            onMouseEnter={() => setShowFloatingMessage(true)}
            onMouseLeave={() => setShowFloatingMessage(false)}
          >
            <span className="font-sans font-normal text-[14px] leading-5 text-center text-[#8E90A1] group-hover:text-[#9E372A] transition-colors">
              Ver entregas
            </span>
            <div className="w-2 h-2 [&_path]:transition-colors [&_path]:group-hover:stroke-[#9E372A]">
              <ArrowUpRight stroke="#8E90A1" />
            </div>
          </Link>
          <FloatingMessage
            messages={["COMPARE COM CALMA."]}
            isVisible={showFloatingMessage}
          />
        </div>
      </div>

      <div className="flex h-auto w-full flex-col lg:h-full lg:flex-1">
        <div className="flex h-auto w-full items-center justify-center border-b border-[rgba(114,123,142,0.1)] bg-white px-4 py-12 dark:border-[rgba(255,255,255,0.1)] dark:bg-[#0A0A0A] lg:h-[247px] lg:px-0 lg:py-0">
          <div className="w-full lg:w-176.5 h-auto lg:h-41.25 flex flex-col items-start gap-2.5">
            <div className="w-full flex flex-col justify-center items-start">
              <span className="tagline-text w-full text-[#8E90A1]">
                RECORRÊNCIA
              </span>
              <h3 className="font-figtree font-normal text-[20px] leading-6 text-[#434A57]">
                Presença contínua, sem fila interna.
              </h3>
            </div>

            <p className="font-sans font-normal text-[14px] leading-4.75 text-[#8E90A1]">
              Um valor fixo para manter design, conteúdo e páginas em movimento. Ideal para quem precisa de cadência sem abrir mão de direção.
            </p>

            <Link
              href="/planos"
              className="flex flex-row justify-center items-center px-4 py-2 gap-2.5 h-9 bg-[#12141B] dark:bg-[#F1F2F4] border border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] rounded-[200px] transition-colors hover:bg-[#9E372A] hover:border-[#9E372A] dark:hover:bg-[#9E372A] dark:hover:border-[#9E372A] group"
            >
              <span className="font-sans font-medium text-[14px] leading-5 text-center text-white dark:text-[#12141B]">
                Ver plano
              </span>
              <div className="w-2 h-2 [&_path]:transition-colors">
                <ArrowUpRight stroke="#FFFFFF" />
              </div>
            </Link>
          </div>
        </div>

        <div className="flex h-auto w-full items-center justify-center bg-white px-4 py-12 dark:bg-[#0A0A0A] lg:h-[243px] lg:px-0 lg:py-0">
          <div className="w-full lg:w-176.5 h-auto lg:h-41.25 flex flex-col items-start gap-2.5">
            <div className="w-full flex flex-col justify-center items-start">
              <span className="tagline-text w-full text-[#8E90A1]">
                PROJETO
              </span>
              <h3 className="font-figtree font-normal text-[20px] leading-6 text-[#434A57]">
                Uma entrega específica, bem resolvida.
              </h3>
            </div>

            <p className="font-sans font-normal text-[14px] leading-4.75 text-[#8E90A1]">
              Para marcas que precisam resolver um ponto claro: identidade, site, campanha, apresentação ou uma peça decisiva para vender melhor.
            </p>

            <Link
              href="/orcamento"
              className="flex flex-row justify-center items-center px-4 py-2 gap-2.5 h-9 bg-[#12141B] dark:bg-[#F1F2F4] border border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] rounded-[200px] transition-colors hover:bg-[#9E372A] hover:border-[#9E372A] dark:hover:bg-[#9E372A] dark:hover:border-[#9E372A] group"
            >
              <span className="font-sans font-medium text-[14px] leading-5 text-center text-white dark:text-[#12141B]">
                Solicitar projeto
              </span>
              <div className="w-2 h-2 [&_path]:transition-colors">
                <ArrowUpRight stroke="#FFFFFF" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkModelsSection;
