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
  reverse?: boolean;
}

const defaultTitle = (
  <>
    <span className="block">Sua marca já aparece</span>
    <span className="block">
      mas ainda não <span className="italic text-[#9E372A]">sustenta</span>.
    </span>
  </>
);

const defaultDescription =
  "Logo feito na pressa, redes sem direção, site que não explica valor. O cliente até chega, mas não encontra confiança suficiente para ficar, entender e chamar.";

const WordmarkSection = ({
  className,
  badge = "O PROBLEMA",
  title = defaultTitle,
  description = defaultDescription,
  buttonText = "Conheça nossa história",
  buttonHref = "/sobre",
  buttonVariant = "outline",
  floatingMessages = ["ENTENDA O PORQUÊ"],
  wordmark = "SPLENDOR·I",
  wordmarkClassName,
  hideWordmark = false,
  reverse = false,
}: WordmarkSectionProps) => {
  const [showFloatingMessage, setShowFloatingMessage] = useState(false);
  const hasFloating = floatingMessages.length > 0;
  const hasButton = Boolean(buttonText);
  const isProblemBadge = badge === "O PROBLEMA";

  const showFloatingHandlers = hasFloating
    ? {
      onMouseEnter: () => setShowFloatingMessage(true),
      onMouseLeave: () => setShowFloatingMessage(false),
    }
    : {};

  return (
    <section
      className={cn(
        "flex w-full flex-col items-stretch border-y border-[rgba(114,123,142,0.1)] bg-white dark:border-[rgba(255,255,255,0.1)] dark:bg-[#0A0A0A] md:h-126.5 md:flex-row md:items-center",
        hideWordmark && "justify-center",
        reverse && "md:flex-row-reverse",
        className
      )}
      {...(!hasButton ? showFloatingHandlers : {})}
    >
      <div
        className={cn(
          "box-border flex flex-col justify-center gap-2.5 p-6 md:h-full md:p-0",
          hideWordmark
            ? "items-center w-full md:px-13.5"
            : "items-start w-full md:w-1/2 md:px-13.5"
        )}
      >
        <div
          className={cn(
            "flex flex-col p-0 gap-3.5",
            hideWordmark ? "items-start w-full max-w-132.75" : "items-start w-full md:w-108.75"
          )}
        >
          <div className="flex w-full flex-col items-start p-0 md:w-108.75">
            <span className={cn(
              "tagline-text text-[#8E90A1] reveal-element",
              isProblemBadge && "anna-problem-kicker"
            )}>
              {badge}
            </span>

            <h2 className="font-instrument-serif text-[32px] font-light leading-[36px] text-[#434A57] reveal-element delay-[200ms] md:text-[36px] md:leading-10.75">
              {title}
            </h2>
          </div>

          <p className="font-sans font-normal text-[14px] leading-4.75 text-[#8E90A1] self-stretch reveal-element delay-[400ms]">
            {description}
          </p>

          {hasButton && (
            <div className="flex flex-row items-start gap-1 reveal-element delay-[600ms]">
              <Link
                href={buttonHref}
                className={cn(
                  "flex flex-row justify-center items-center px-4 py-2 gap-2.5 h-9 rounded-[200px] transition-colors group",
                  buttonVariant === "primary"
                    ? "bg-[#9E372A] border border-[#9E372A] hover:bg-[#7d2a20]"
                    : "bg-white dark:bg-[#0A0A0A] border border-dashed border-[rgba(114,123,142,0.28)] dark:border-[rgba(255,255,255,0.2)] hover:border-[#9E372A] hover:bg-[#EADCDB] dark:hover:bg-[#2A1716]"
                )}
                {...showFloatingHandlers}
              >
                <span
                  className={cn(
                    "font-sans text-[14px] leading-5 text-center flex items-center transition-colors",
                    buttonVariant === "primary"
                      ? "font-medium text-white dark:text-[#12141B] tracking-[0.06em] uppercase"
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
        <div className={cn(
          "relative box-border flex h-36 w-full flex-col items-center justify-end gap-2.5 overflow-hidden border-b border-[rgba(114,123,142,0.1)] bg-white p-0 dark:border-[rgba(255,255,255,0.1)] dark:bg-[#0A0A0A] md:h-full md:w-1/2",
          reverse ? "border-l" : "border-l border-r"
        )}>
          <div className={cn("mr-2.5 flex select-none items-center text-center font-instrument-serif text-[96px] font-normal leading-[60px] tracking-0 text-[rgba(50,55,81,0.1)] md:text-[180px] md:leading-17.5 ", wordmarkClassName)}>
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
