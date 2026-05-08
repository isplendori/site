"use client";

import { useState } from "react";
import Link from "next/link";
import Star from "@/components/atoms/Icon/Star";
import FloatingMessage from "@/atoms/FloatingMessage";
import HeroArchitecture from "@/atoms/HeroArchitecture";
import { cn } from "@/lib/utils";

export interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className }: HeroSectionProps) => {
  const [showFloatingMessage, setShowFloatingMessage] = useState(false);

  return (
    <section
      className={cn(
        "relative flex w-full flex-col items-center justify-center py-16 md:min-h-[80vh] lg:min-h-[90vh]",
        className,
      )}
    >
      <HeroArchitecture className="absolute inset-0 -z-10 hidden md:block" />

      <div className="relative z-10 flex flex-col items-center gap-4.5">
        <div className="flex flex-row justify-center items-center px-4 py-2 gap-2.5 h-9 bg-white border border-[rgba(114,123,142,0.1)] rounded-[200px]">
          <Star />
          <span className="font-mono font-semibold text-[12px] leading-5.25 tracking-[0.09em] uppercase text-[#8E90A1]  h-5.25 flex items-center">
            DESIGN. ESTRATÉGIA. TECNOLOGIA.
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 ">
          <h1 className="font-itc-garamond-std font-light text-[44px] leading-13.25 text-center text-[#202026]  h-8.5 flex items-center justify-center">
            Não somos uma agência.
          </h1>
          <h2 className="font-itc-garamond-std italic font-light text-[48px] leading-14.5 text-center text-[#202026]  h-[38.58px] flex items-center justify-center">
            Somos <span className="text-[#9E372A]">resultados</span>.
          </h2>
        </div>

        <div className="flex flex-col items-center gap-2.25 max-w-103.5">
          <p className="font-sans text-[14px] leading-4.75 text-[#8E90A1]">
            Não entregamos apenas arquivo. Por trás de cada projeto existe alguém que estudou seu negócio, entendeu seu cliente e tomou decisões com propósito. Resultado real. Presença real.
          </p>

          <div className="flex flex-row items-start gap-1 h-9">
            <Link
              href="/portfolio"
              className="flex flex-row justify-center items-center px-4 py-2 gap-2.5 h-9 bg-white border border-dashed border-[rgba(114,123,142,0.28)] rounded-[200px] hover:border-[#9E372A] transition-colors group"
            >
              <span className="font-sans text-[14px] leading-5 text-center text-[#8E90A1] group-hover:text-[#9E372A] transition-colors">
                Conheça nosso portfólio
              </span>
            </Link>

            <Link
              href="/diagnostico"
              className="flex flex-row justify-center items-center px-4 py-2 gap-2.5 h-9 bg-[#12141B] border border-[rgba(114,123,142,0.1)] rounded-[200px] hover:bg-[#9E372A] transition-colors group"
              onMouseEnter={() => setShowFloatingMessage(true)}
              onMouseLeave={() => setShowFloatingMessage(false)}
            >
              <Star color="#FFFFFF" className="group-hover:fill-[#FFFFFF] transition-colors" />
              <span className="font-sans text-[14px] leading-5 text-center text-white">
                Quero meu diagnóstico
              </span>
            </Link>
          </div>
        </div>

        <FloatingMessage
          messages={["Sem reunião de 3 horas."]}
          isVisible={showFloatingMessage}
        />
      </div>
    </section>
  );
};

export default HeroSection;
