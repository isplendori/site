"use client";

import Link from "next/link";
import { CSSProperties, useEffect, useLayoutEffect, useRef, useState } from "react";

import FloatingMessage from "@/atoms/FloatingMessage";
import { cn } from "@/lib/utils";

export interface InlineCtaSectionProps {
  className?: string;
}

const terms = [
  "post sem direção",
  "site confuso",
  "identidade frágil",
  "campanha solta",
  "landing page morna",
  "feed sem ritmo",
  "projeto sem critério",
  "marca sem sistema",
  "tráfego sem destino",
];

const InlineCtaSection = ({ className }: InlineCtaSectionProps) => {
  const [showFloatingMessage, setShowFloatingMessage] = useState(false);
  const [activeTermIndex, setActiveTermIndex] = useState(0);
  const [isSwapping, setIsSwapping] = useState(false);
  const [termWidth, setTermWidth] = useState(0);
  const measureRef = useRef<HTMLSpanElement>(null);
  const activeTerm = terms[activeTermIndex];

  useLayoutEffect(() => {
    const updateTermWidth = () => {
      if (!measureRef.current) return;
      setTermWidth(measureRef.current.offsetWidth);
    };

    updateTermWidth();
    window.addEventListener("resize", updateTermWidth);

    return () => window.removeEventListener("resize", updateTermWidth);
  }, [activeTerm]);

  useEffect(() => {
    const swapInterval = window.setInterval(() => {
      setIsSwapping(true);

      window.setTimeout(() => {
        setActiveTermIndex((currentIndex) => (currentIndex + 1) % terms.length);
        setIsSwapping(false);
      }, 220);
    }, 1800);

    return () => window.clearInterval(swapInterval);
  }, []);

  return (
    <section
      className={cn(
        "w-full bg-white dark:bg-[#0A0A0A] flex flex-col items-center justify-center py-24",
        className
      )}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-row items-center gap-4">
          <span className="font-instrument-serif font-light text-[24px] leading-7.5 text-[#434A57]">
            Chega de
          </span>

          <Link
            href="/portfolio"
            className="inline-flex h-9 items-center justify-center overflow-hidden rounded-[200px] border border-dashed border-[#F1F2F4] bg-white px-4 py-2 transition-[width,background-color,border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#9E372A] hover:bg-[#EADCDB] dark:bg-[#0A0A0A] dark:hover:bg-[#2A1716] group"
            onMouseEnter={() => setShowFloatingMessage(true)}
            onMouseLeave={() => setShowFloatingMessage(false)}
            style={{ width: termWidth ? `${termWidth + 32}px` : undefined } as CSSProperties}
          >
            <span
              className={cn(
                "inline-rotating-text flex items-center whitespace-nowrap text-center font-sans text-[14px] font-normal leading-5 text-[#8E90A1] group-hover:text-[#9E372A]",
                isSwapping && "is-swapping"
              )}
              aria-live="polite"
            >
              {activeTerm}
            </span>
            <span
              ref={measureRef}
              className="pointer-events-none absolute -z-10 h-0 overflow-hidden whitespace-nowrap font-sans text-[14px] font-normal leading-5 opacity-0"
              aria-hidden="true"
            >
              {activeTerm}
            </span>
          </Link>

          <span className="font-instrument-serif font-light text-[24px] leading-7.5 text-[#434A57]">
            segurando seu crescimento.
          </span>
        </div>
      </div>

      <FloatingMessage
        messages={["O PROBLEMA APARECE AQUI."]}
        isVisible={showFloatingMessage}
      />
    </section>
  );
};

export default InlineCtaSection;
