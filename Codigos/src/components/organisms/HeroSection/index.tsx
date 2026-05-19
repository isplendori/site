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
  eyebrow?: string;
  titleLineOneWords?: string[];
  titleLineTwoWords?: string[];
  titleLineTwoAccentWord?: string;
  titleLineOneAriaLabel?: string;
  titleLineTwoAriaLabel?: string;
  description?: string;
  portfolioButtonText?: string;
  diagnosticButtonText?: string;
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

const HeroSection = ({
  className,
  descriptionClassName,
  eyebrow = "DESIGN. ESTRATÉGIA. TECNOLOGIA.",
  titleLineOneWords = ["Sua", "marca", "não", "precisa", "gritar."],
  titleLineTwoWords = ["Precisa", "ser", "lembrada."],
  titleLineTwoAccentWord = "lembrada.",
  titleLineOneAriaLabel = "Sua marca não precisa gritar.",
  titleLineTwoAriaLabel = "Precisa ser lembrada.",
  description = "A Splendori organiza estratégia, visual e tecnologia para marcas que cansaram de parecer improviso. Cada entrega nasce com intenção, aplicação real e direção para crescer.",
  portfolioButtonText = "Ver projetos",
  diagnosticButtonText = "Diagnosticar minha marca",
}: HeroSectionProps) => {
  const [showFloatingMessage, setShowFloatingMessage] = useState(false);
  const [showPortfolioMessage, setShowPortfolioMessage] = useState(false);

  return (
    <section
      className={cn(
        "hero-root relative flex w-full flex-col items-center justify-center px-4 py-20 md:px-0 md:min-h-[70vh] lg:min-h-[102vh]",
        className,
      )}
    >
      <div className="hero-architecture-reveal absolute inset-0 -z-10 hidden md:flex items-start justify-center overflow-hidden pointer-events-none">
        <HeroArchitecture className="w-full max-w-302.5 h-auto" />
      </div>

      <div className="relative z-10 mt-8 flex w-full flex-col items-center gap-4.5 md:mt-[110px]">
        <div className="hero-support-reveal flex h-auto min-h-9 max-w-full flex-row justify-center items-center px-4 py-2 gap-2.5 bg-white dark:bg-[#0A0A0A] border border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] rounded-[200px]" style={{ animationDelay: "180ms" }}>
          <Star />
          <span className="tagline-text flex h-5.25 items-center text-[#8E90A1]">
            {eyebrow}
          </span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <h1
            className="hero-copy-reveal font-instrument-serif font-light text-[38px] leading-[40px] text-center text-[#202026] dark:text-[#F1F2F4] md:text-[44px] md:leading-11.25"
            aria-label={titleLineOneAriaLabel}
          >
            {renderWords(titleLineOneWords, undefined, 420)}
          </h1>
          <h2
            className="hero-copy-reveal font-instrument-serif italic font-light text-[38px] leading-[34px] text-center text-[#202026] dark:text-[#F1F2F4] md:text-[44px] md:leading-9.5"
            aria-label={titleLineTwoAriaLabel}
          >
            {renderWords(titleLineTwoWords, titleLineTwoAccentWord, 780)}
          </h2>
        </div>

        <div className="flex flex-col items-center gap-5.25 w-full max-w-full md:max-w-103.5 px-4 md:px-0">
          <p className={cn(
            "hero-support-reveal font-sans text-[14px] leading-4.75 text-[#8E90A1] text-center",
            descriptionClassName,
          )}
          style={{ animationDelay: "1120ms" }}
          >
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-1 h-auto sm:h-9 mt-4 sm:mt-0">
            <Link
              href="/portfolio"
              className="hero-support-reveal flex flex-row justify-center items-center px-4 py-2 gap-2.5 h-9 bg-white dark:bg-[#0A0A0A] border border-dashed border-[rgba(114,123,142,0.28)] dark:border-[rgba(255,255,255,0.2)] rounded-[200px] hover:border-[#9E372A] hover:bg-[#EADCDB] dark:hover:bg-[#2A1716] transition-colors group"
              style={{ animationDelay: "1350ms" }}
              onMouseEnter={() => setShowPortfolioMessage(true)}
              onMouseLeave={() => setShowPortfolioMessage(false)}
            >
              <span className="font-sans text-[14px] leading-5 text-center text-[#8E90A1] group-hover:text-[#9E372A] transition-colors">
                {portfolioButtonText}
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
                {diagnosticButtonText}
              </span>
            </Link>
          </div>
        </div>

        <FloatingMessage
        messages={["Sem reunião infinita."]}
          isVisible={showFloatingMessage}
        />
        <FloatingMessage
        messages={["OLHE COM CALMA."]}
          isVisible={showPortfolioMessage}
        />
      </div>
    </section>
  );
};

export default HeroSection;
