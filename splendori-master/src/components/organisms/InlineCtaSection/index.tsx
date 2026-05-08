"use client";

import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";
import FloatingMessage from "@/atoms/FloatingMessage";

export interface InlineCtaSectionProps {
  className?: string;
}

const InlineCtaSection = ({ className }: InlineCtaSectionProps) => {
  const [showFloatingMessage, setShowFloatingMessage] = useState(false);

  return (
    <section
      className={cn(
        "w-full bg-white flex flex-col items-center justify-center py-30",
        className
      )}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-row items-center gap-4">
          <span className="font-itc-garamond-std font-light text-[24px] leading-7.5 text-[#434A57]">
            Chega de
          </span>

          <Link
            href="/portfolio"
            className="flex flex-row justify-center items-center px-4 py-2 gap-2.5 w-52.25 h-9 bg-white border border-dashed border-[rgba(114,123,142,0.28)] rounded-[200px] hover:border-[#9E372A] transition-colors group"
            onMouseEnter={() => setShowFloatingMessage(true)}
            onMouseLeave={() => setShowFloatingMessage(false)}
          >
            <span className="font-sans font-normal text-[14px] leading-5 text-center text-[#8E90A1] flex items-center group-hover:text-[#9E372A] transition-colors">
              Edição de vídeos
            </span>
          </Link>

          <span className="font-itc-garamond-std font-light text-[24px] leading-7.5 text-[#434A57]">
            sem resultados.
          </span>
        </div>
      </div>

      <FloatingMessage
        messages={["VEM VER DE PERTO."]}
        isVisible={showFloatingMessage}
      />
    </section>
  );
};

export default InlineCtaSection;

