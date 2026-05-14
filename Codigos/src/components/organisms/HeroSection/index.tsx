"use client";

import { useState } from "react";
import Link from "next/link";
import Star from "@/components/atoms/Icon/Star";
import FloatingMessage from "@/atoms/FloatingMessage";
import HeroArchitecture from "@/atoms/HeroArchitecture";
import { cn } from "@/lib/utils";

export interface HeroSectionProps {
  className?: string;
  descriptionClassName?: string;
}

const renderWords = (words: string[], accentWord?: string, baseDelay = 0) => {
  return words.map((word, index) => (
    <span
      key={`${word}-${index}`}
      className={cn(
        "hero-word inline-block",
        word === accentWord && "text-[#9E372A]"
      )}
      style={{ animationDelay: `${baseDelay + index * 80}ms` }}
    >
      {word}
      {index < words.length - 1 ? "\u00a0" : ""}
    </span>
  ));
};

const HeroSection = ({ className, descriptionClassName }: HeroSectionProps) => {
  const [showFloatingMessage, setShowFloatingMessage] = useState(false);

  return (
    <section
      className={cn(
        "hero-root relative flex w-full flex-col items-center justify-center py-16 md:min-h-[70vh] lg:min-h-[102vh]",
        className,
      )}
    >
      <div className="hero-architecture-reveal absolute inset-0 -z-10 hidden md:flex items-start justify-center overflow-hidden pointer-events-none">
        <HeroArchitecture className="w-full max-w-302.5 h-auto" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4.5 mt-[110px]">
        <div className="hero-support-reveal flex flex-row justify-center items-center px-4 py-2 gap-2.5 h-9 bg-white dark:bg-[#0A0A0A] border border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] rounded-[200px]" style={{ animationDelay: "180ms" }}>
          <Star />
          <span className="font-mono font-semibold text-[12px] leading-5.25 tracking-[0.09em] uppercase text-[#8E90A1]  h-5.25 flex items-center">
            DESIGN. ESTRATÉGIA. TECNOLOGIA.
          </span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <h1
            className="hero-copy-reveal font-instrument-serif font-light text-[44px] leading-11.25 text-center text-[#202026] dark:text-[#F1F2F4]"
            aria-label="Não somos uma agência."
          >
            {renderWords(["Não", "somos", "uma", "agência."], undefined, 420)}
          </h1>
          <h2
            className="hero-copy-reveal font-instrument-serif italic font-light text-[44px] leading-9.5 text-center text-[#202026] dark:text-[#F1F2F4]"
            aria-label="Somos resultados."
          >
            {renderWords(["Somos", "resultados."], "resultados.", 780)}
          </h2>
        </div>

        <div className="flex flex-col items-center gap-5.25 w-full max-w-full md:max-w-103.5 px-4 md:px-0">
          <p className={cn(
            "hero-support-reveal font-sans text-[14px] leading-4.75 text-[#8E90A1] text-center",
            descriptionClassName,
          )}
          style={{ animationDelay: "1120ms" }}
          >
            Não entregamos apenas arquivo. Por trás de cada projeto existe alguém que estudou seu negócio, entendeu seu cliente e tomou decisões com propósito. Resultado real. Presença real.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-1 h-auto sm:h-9 mt-4 sm:mt-0">
            <Link
              href="/portfolio"
              className="hero-support-reveal flex flex-row justify-center items-center px-4 py-2 gap-2.5 h-9 bg-white dark:bg-[#0A0A0A] border border-dashed border-[rgba(114,123,142,0.28)] dark:border-[rgba(255,255,255,0.2)] rounded-[200px] hover:border-[#9E372A] transition-colors group"
              style={{ animationDelay: "1350ms" }}
            >
              <span className="font-sans text-[14px] leading-5 text-center text-[#8E90A1] group-hover:text-[#9E372A] transition-colors">
                Conheça nosso portfólio
              </span>
            </Link>

            <Link
              href="/diagnostico"
              className="hero-support-reveal flex flex-row justify-center items-center px-4 py-2 gap-2.5 h-9 bg-[#12141B] dark:bg-[#F1F2F4] border border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] rounded-[200px] hover:bg-[#9E372A] transition-colors group"
              style={{ animationDelay: "1500ms" }}
              onMouseEnter={() => setShowFloatingMessage(true)}
              onMouseLeave={() => setShowFloatingMessage(false)}
            >
              <Star color="#FFFFFF" className="group-hover:fill-[#FFFFFF] transition-colors" />
              <span className="font-sans text-[14px] leading-5 text-center text-white dark:text-[#12141B]">
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
