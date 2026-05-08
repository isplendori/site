"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import FloatingMessage from "@/atoms/FloatingMessage";
import ArrowUpRight from "@/atoms/Icon/ArrowUpRight";

export type WordmarkSectionButtonVariant = "outline" | "primary";

export interface WordmarkSectionProps {
  className?: string;
  badge?: string;
  title?: ReactNode;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  buttonVariant?: WordmarkSectionButtonVariant;
  floatingMessages?: string[];
  wordmark?: string;
  wordmarkClassName?: string;
  hideWordmark?: boolean;
}

const defaultTitle = (
  <>
    <span className="block">Sua marca foi feita</span>
    <span className="block">
      mas não foi <span className="italic text-[#9E372A]">pensada</span>.
    </span>
  </>
);

const defaultDescription =
  "Logo feito na correria, redes paradas, site na IA, identidade que não passa o que você vale. Não sobra tempo, não tem firmeza, e a sensação de que o negócio poderia ir mais longe fica só na cabeça.";

const WordmarkSection = ({
  className,
  badge = "O PROBLEMA",
  title = defaultTitle,
  description = defaultDescription,
  buttonText = "Conheça nossa história",
  buttonHref = "/sobre",
  buttonVariant = "outline",
  floatingMessages = ["SAIBA SOBRE NÓS"],
  wordmark = "SPLENDOR·I",
  wordmarkClassName,
  hideWordmark = false,
}: WordmarkSectionProps) => {
  const [showFloatingMessage, setShowFloatingMessage] = useState(false);
  const hasFloating = floatingMessages.length > 0;
  const hasButton = Boolean(buttonText);

  const showFloatingHandlers = hasFloating
    ? {
      onMouseEnter: () => setShowFloatingMessage(true),
      onMouseLeave: () => setShowFloatingMessage(false),
    }
    : {};

  return (
    <section
      className={cn(
        "flex flex-row items-center p-0 w-full h-126.5 border-y border-[rgba(114,123,142,0.1)] bg-white",
        hideWordmark && "justify-center",
        className
      )}
      {...(!hasButton ? showFloatingHandlers : {})}
    >
      <div
        className={cn(
          "box-border flex flex-col justify-center p-0 gap-2.5 h-full",
          hideWordmark
            ? "items-center w-full px-13.5"
            : "items-start w-1/2 px-13.5"
        )}
      >
        <div
          className={cn(
            "flex flex-col p-0 gap-3.5",
            hideWordmark ? "items-start w-132.75 max-w-full" : "items-start w-108.75"
          )}
        >
          <div className="flex flex-col items-start p-0 w-108.75">
            <span className="font-mono font-semibold text-[12px] leading-5.25 tracking-[0.09em] uppercase text-[#8E90A1]">
              {badge}
            </span>

            <h2 className="font-itc-garamond-std font-light text-[36px] leading-10.75 text-[#434A57]">
              {title}
            </h2>
          </div>

          <p className="font-sans font-semibold text-[14px] leading-4.75 text-[#8E90A1] self-stretch">
            {description}
          </p>

          {hasButton && (
            <div className="flex flex-row items-start gap-1">
              <Link
                href={buttonHref}
                className={cn(
                  "flex flex-row justify-center items-center px-4 py-2 gap-2.5 h-9 rounded-[200px] transition-colors group",
                  buttonVariant === "primary"
                    ? "bg-[#9E372A] border border-[#9E372A] hover:bg-[#7d2a20]"
                    : "bg-white border border-dashed border-[rgba(114,123,142,0.28)] hover:border-[#9E372A]"
                )}
                {...showFloatingHandlers}
              >
                <span
                  className={cn(
                    "font-sans text-[14px] leading-5 text-center flex items-center transition-colors",
                    buttonVariant === "primary"
                      ? "font-medium text-white tracking-[0.06em] uppercase"
                      : "font-normal text-[#8E90A1] group-hover:text-[#9E372A]"
                  )}
                >
                  {buttonText}
                </span>
                {buttonVariant === "outline" && (
                  <div className="w-2 h-2 [&_path]:transition-colors [&_path]:group-hover:stroke-[#9E372A]">
                    <ArrowUpRight stroke="#8E90A1" />
                  </div>
                )}
              </Link>
            </div>
          )}
        </div>
      </div>

      {!hideWordmark && (
        <div className="box-border flex flex-col justify-end items-center p-0 gap-2.5 w-1/2 h-full bg-white border-l border-r border-b border-[rgba(114,123,142,0.1)] overflow-hidden relative">
          <div className={cn("font-new-icon-serif font-normal text-[180px] leading-17.5 flex items-center text-center tracking-[-7px] text-[rgba(50,55,81,0.1)] select-none mr-2.5 ", wordmarkClassName)}>
            {wordmark}
          </div>
        </div>
      )}

      {hasFloating && (
        <FloatingMessage
          messages={floatingMessages}
          isVisible={showFloatingMessage}
        />
      )}
    </section>
  );
};

export default WordmarkSection;
