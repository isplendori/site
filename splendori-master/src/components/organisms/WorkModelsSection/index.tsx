"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "@/components";

export interface WorkModelsSectionProps {
  className?: string;
}

const WorkModelsSection = ({ className }: WorkModelsSectionProps) => {
  return (
    <section className={cn("flex w-full h-123 bg-white", className)}>
      <div className="w-1/3 h-full border-r border-y border-[rgba(114,123,142,0.1)] flex items-center justify-center">
        <div className="w-82.25 h-96 flex flex-col items-start gap-2.5">
          <div className="w-full flex flex-col items-start">
            <span className="font-mono font-semibold text-[12px] leading-5.25 tracking-[0.09em] uppercase text-[#8E90A1]">
              COMO TRABALHAMOS
            </span>

            <h2 className="font-itc-garamond-std font-light text-[36px] leading-10.75 text-[#434A57]">
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
            className="flex flex-row justify-center items-center px-4 py-2 gap-2.5 h-9 bg-white border border-dashed border-[rgba(114,123,142,0.28)] rounded-[200px] hover:border-[#9E372A] transition-colors group"
          >
            <span className="font-sans font-normal text-[14px] leading-5 text-center text-[#8E90A1] group-hover:text-[#9E372A] transition-colors">
              Conheça nosso portfólio
            </span>
            <div className="w-2 h-2 [&_path]:transition-colors [&_path]:group-hover:stroke-[#9E372A]">
              <ArrowUpRight stroke="#8E90A1" />
            </div>
          </Link>
        </div>
      </div>

      <div className="w-full flex-1  h-full flex flex-col">
        <div className="h-61.5 w-full flex items-center justify-center bg-white border-t border-[rgba(114,123,142,0.1)]">
          <div className="w-176.5 h-41.25 flex flex-col items-start gap-2.5">
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
              className="flex flex-row justify-center items-center px-4 py-2 gap-2.5 h-9 bg-[#12141B] border border-[rgba(114,123,142,0.1)] rounded-[200px] group"
            >
              <span className="font-sans font-medium text-[14px] leading-5 text-center text-white">
                Veja nosso plano
              </span>
              <div className="w-2 h-2 [&_path]:transition-colors">
                <ArrowUpRight stroke="#FFFFFF" />
              </div>
            </Link>
          </div>
        </div>

        <div className="h-61.5 w-full flex items-center justify-center bg-white border border-l-0 border-[rgba(114,123,142,0.1)]">
          <div className="w-176.5 h-41.25 flex flex-col items-start gap-2.5">
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
              className="flex flex-row justify-center items-center px-4 py-2 gap-2.5 h-9 bg-[#12141B] border border-[rgba(114,123,142,0.1)] rounded-[200px] group"
            >
              <span className="font-sans font-medium text-[14px] leading-5 text-center text-white">
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

