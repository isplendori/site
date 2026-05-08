"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { ArrowUpRight } from "@/components";
import { cn } from "@/lib/utils";

export interface FaqSectionProps {
  className?: string;
}

type FaqItem = {
  question: string;
  answer: string;
};

const Chevron = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <svg
      className={cn("block transition-transform duration-200", isOpen ? "rotate-180" : "rotate-0")}
      width="9.23"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L5 5L9 1" stroke="#8E90A1" strokeWidth="1.32" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const FaqSection = ({ className }: FaqSectionProps) => {
  const items = useMemo<FaqItem[]>(
    () => [
      {
        question: "Qual a diferença entre assinatura e por projeto?",
        answer:
          "Na assinatura você paga um valor fixo por mês e solicita quantas peças quiser, para qualquer marca. No por projeto, você solicita algo específico e paga apenas por aquilo. Sem mensalidade, sem compromisso fixo.",
      },
      {
        question: "Tenho mais de uma marca. Posso usar a assinatura para todas?",
        answer: "A assinatura cobre qualquer marca que você tiver. Sem custo adicional por isso.",
      },
      {
        question: "Em quanto tempo médio recebo minha entrega?",
        answer:
          "Todo projeto é iniciado em até 48 horas úteis após a confirmação. O prazo de entrega depende da complexidade da peça e é alinhado no momento do pedido.",
      },
      {
        question: "Vocês atendem qualquer tipo de negócio?",
        answer: "Atendemos desde negócios locais até empresas em expansão, em qualquer setor.",
      },
      {
        question: "Posso começar com um projeto pequeno e expandir depois?",
        answer:
          "Sim. Muitos clientes começam com uma peça específica e migram para a assinatura conforme a demanda cresce.",
      },
      {
        question: "Preciso saber exatamente o que quero antes de entrar em contato?",
        answer:
          "Não. A maioria dos nossos clientes chega sem saber por onde começar. O diagnóstico existe justamente para isso.",
      },
      {
        question: "Quantas revisões estão incluídas no projeto?",
        answer:
          "As revisões são alinhadas no início de cada projeto. Trabalhamos até a entrega fazer sentido para o seu negócio, sem cobrar por cada ajuste pequena.",
      },
      {
        question: "A Splendori mantém os direitos dos projetos entregues?",
        answer:
          "Todos os projetos são registrados como autoria da Splendori para proteção contra plágio externo. Durante o contrato, a autoria de uso é cedida integralmente ao cliente. Os projetos podem ser usados no nosso portfólio, salvo acordo diferente.",
      },
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className={cn("flex w-full bg-white", className)}>
      <div className="w-1/3 h-auto bg-white border-l border-b border-[rgba(114,123,142,0.1)] p-13.5">
        <div className="w-74.25 flex flex-col items-start gap-2.5">
          <div className="w-full flex flex-col items-start">
            <span className="w-full font-mono font-semibold text-[12px] leading-5.25 tracking-[0.09em] uppercase text-[#8E90A1]">
              FAQ
            </span>
            <h2 className="font-itc-garamond-std font-light text-[36px] leading-10.75 text-[#434A57] w-full">
              <span className="block whitespace-nowrap">Sua dúvida já pode</span>
              <span className="block whitespace-nowrap">
                ter sido <span className="italic text-[#9E372A]">resolvida</span>
              </span>
            </h2>
          </div>

          <Link
            href="/contato"
            className="flex flex-row justify-center items-center px-4 py-2 gap-2.5 h-9 bg-white border border-dashed border-[rgba(114,123,142,0.28)] rounded-[200px] hover:border-[#9E372A] transition-colors group"
          >
            <span className="font-sans font-normal text-[14px] leading-5 text-center text-[#8E90A1] group-hover:text-[#9E372A] transition-colors">
              Entre em contato
            </span>
            <div className="w-2 h-2 [&_path]:transition-colors [&_path]:group-hover:stroke-[#9E372A]">
              <ArrowUpRight stroke="#8E90A1" />
            </div>
          </Link>
        </div>
      </div>

      <div className="w-full flex-1 h-full bg-white">
        {items.map((item, idx) => {
        const isOpen = idx === openIndex;

        return (
          <div key={item.question} className="w-full">
            <button
              type="button"
              onClick={() => setOpenIndex((prev) => (prev === idx ? -1 : idx))}
              className={cn(
                "w-full bg-white text-left flex flex-col items-start gap-2.5 border-x border-b border-[rgba(114,123,142,0.1)]",
                "px-9 pr-8.75 pt-4.5 pb-4.75"
              )}
            >
              <div className="w-full flex flex-row items-center gap-6">
                <div className="flex-1">
                  <span className="font-sans font-medium text-[14px] leading-6.25 tracking-[-0.36px] text-[#727B8E]">
                    {item.question}
                  </span>
                </div>
                <Chevron isOpen={isOpen} />
              </div>
            </button>

            <div
              className={cn(
                "w-full bg-white overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out",
                isOpen
                  ? "max-h-55 opacity-100 border-x border-b border-[rgba(114,123,142,0.1)]"
                  : "max-h-0 opacity-0 border-x border-[rgba(114,123,142,0.0)]"
              )}
            >
              <div
                className={cn(
                  "px-9 pt-4.5 pb-4.75 transition-transform duration-300 ease-in-out",
                  isOpen ? "translate-y-0" : "-translate-y-1"
                )}
              >
                <p className="font-sans font-normal text-[14px] leading-4.75 tracking-[-0.36px] text-[#8E90A1] text-justify">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      </div>
    </section>
  );
};

export default FaqSection;

