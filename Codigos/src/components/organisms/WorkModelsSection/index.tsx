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
            <span className="font-mono font-semibold text-[12px] leading-5.25 tracking-[0.09em] uppercase text-[#8E90A1]">
              COMO TRABALHAMOS
            </span>

            <h2 className="font-instrument-serif font-light text-[36px] leading-10.75 text-[#434A57]">
              <span className="block">
                O modelo <span className="italic text-[#9E372A]">certo</span>
              </span>
              <span className="block">para seu momento.</span>
            </h2>
          </div>

          <p className="font-sans font-normal text-[14px] leading-4.75 text-[#8E90A1]">
            Não existe formato único aqui. Tem negócio que precisa de presença contínua. Tem quem precise
            resolver uma coisa específica agora e tem quem queira um parceiro fixo para crescer junto.
          </p>

          <Link
            href="/portfolio"
            className="flex flex-row justify-center items-center px-4 py-2 gap-2.5 h-9 bg-white dark:bg-[#0A0A0A] border border-dashed border-[rgba(114,123,142,0.28)] dark:border-[rgba(255,255,255,0.2)] rounded-[200px] hover:border-[#9E372A] hover:bg-[#EADCDB] dark:hover:bg-[#2A1716] transition-colors group"
            onMouseEnter={() => setShowFloatingMessage(true)}
            onMouseLeave={() => setShowFloatingMessage(false)}
          >
            <span className="font-sans font-normal text-[14px] leading-5 text-center text-[#8E90A1] group-hover:text-[#9E372A] transition-colors">
              Conheça nosso portfólio
            </span>
            <div className="w-2 h-2 [&_path]:transition-colors [&_path]:group-hover:stroke-[#9E372A]">
              <ArrowUpRight stroke="#8E90A1" />
            </div>
          </Link>
          <FloatingMessage
            messages={["VEM VER DE PERTO."]}
            isVisible={showFloatingMessage}
          />
        </div>
      </div>

      <div className="flex h-auto w-full flex-col lg:h-full lg:flex-1">
        <div className="flex h-auto w-full items-center justify-center border-b border-[rgba(114,123,142,0.1)] bg-white px-4 py-12 dark:border-[rgba(255,255,255,0.1)] dark:bg-[#0A0A0A] lg:h-[247px] lg:px-0 lg:py-0">
          <div className="w-full lg:w-176.5 h-auto lg:h-41.25 flex flex-col items-start gap-2.5">
            <div className="w-full flex flex-col justify-center items-start">
              <span className="w-full font-mono font-semibold text-[12px] leading-5.25 tracking-[0.09em] uppercase text-[#8E90A1]">
                ASSINATURA
              </span>
              <h3 className="font-figtree font-normal text-[20px] leading-6 text-[#434A57]">
                Ilimitado para qualquer projeto.
              </h3>
            </div>

            <p className="font-sans font-normal text-[14px] leading-4.75 text-[#8E90A1]">
              Um valor fixo por mês e você solicita qualquer peça gráfica, para qualquer marca, em qualquer
              formato. Post, banner, identidade, site, apresentação. Sem orçamento a cada pedido e sem
              surpresa no bolso. Ideal para quem precisa de produção constante sem abrir mão da qualidade.
            </p>

            <Link
              href="/planos"
              className="flex flex-row justify-center items-center px-4 py-2 gap-2.5 h-9 bg-[#12141B] dark:bg-[#F1F2F4] border border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] rounded-[200px] transition-colors hover:bg-[#9E372A] hover:border-[#9E372A] dark:hover:bg-[#9E372A] dark:hover:border-[#9E372A] group"
            >
              <span className="font-sans font-medium text-[14px] leading-5 text-center text-white dark:text-[#12141B]">
                Veja nosso plano
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
              <span className="w-full font-mono font-semibold text-[12px] leading-5.25 tracking-[0.09em] uppercase text-[#8E90A1]">
                ORÇAMENTO
              </span>
              <h3 className="font-figtree font-normal text-[20px] leading-6 text-[#434A57]">
                Apenas o que você precisa.
              </h3>
            </div>

            <p className="font-sans font-normal text-[14px] leading-4.75 text-[#8E90A1]">
              Você solicita o que precisa e a gente orça de acordo com a sua necessidade. Banner, branding,
              site, peças específicas. Sem mensalidade, sem compromisso fixo e sem surpresa no bolso. Ideal
              para quem precisa resolver algo pontual sem abrir mão da qualidade.
            </p>

            <Link
              href="/orcamento"
              className="flex flex-row justify-center items-center px-4 py-2 gap-2.5 h-9 bg-[#12141B] dark:bg-[#F1F2F4] border border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] rounded-[200px] transition-colors hover:bg-[#9E372A] hover:border-[#9E372A] dark:hover:bg-[#9E372A] dark:hover:border-[#9E372A] group"
            >
              <span className="font-sans font-medium text-[14px] leading-5 text-center text-white dark:text-[#12141B]">
                Faça um orçamento
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
