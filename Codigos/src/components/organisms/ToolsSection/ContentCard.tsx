"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, FloatingMessage } from "@/components";

const ContentCard = () => {
  const [showFloatingMessage, setShowFloatingMessage] = useState(false);

  return (
    <div className="pointer-events-auto flex min-h-75.75 w-full flex-1 flex-col items-center justify-center gap-3 border-r border-b border-[rgba(114,123,142,0.1)] bg-white px-6 py-10 backdrop-blur-[1px] dark:border-[rgba(255,255,255,0.1)] dark:bg-[#0A0A0A]/95 md:items-start md:px-24 md:py-0">
      <div className="flex w-full max-w-[414px] flex-col items-center md:items-start text-center md:text-left gap-3">
        <span className="font-mono font-semibold text-[12px] leading-5.25 tracking-[0.09em] uppercase text-[#8E90A1]">
          FERRAMENTAS
        </span>

        <h2 className="font-instrument-serif text-[32px] font-light leading-[34px] text-[#434A57] md:text-[36px] md:leading-[33px]">
          <span className="block">Conheça as ferramentas</span>
          <span className="block">
            por trás de cada <span className="italic text-[#9E372A]">entrega</span>.
          </span>
        </h2>

        <p className="font-sans font-normal text-[14px] leading-4.75 text-[#8E90A1] max-w-[414px]">
          Das melhores ferramentas do mercado para cada etapa do projeto. Desde design, vídeo,
          código e estratégia de conteúdo com o que há de mais preciso na área.
        </p>

        <Link
          href="/portfolio"
          className="flex h-9 w-full flex-row items-center justify-center gap-2.5 rounded-[200px] border border-dashed border-[rgba(114,123,142,0.28)] bg-white px-4 py-2 hover:border-[#9E372A] hover:bg-[#EADCDB] dark:border-[rgba(255,255,255,0.2)] dark:bg-[#0A0A0A] dark:hover:bg-[#2A1716] transition-colors group"
          onMouseEnter={() => setShowFloatingMessage(true)}
          onMouseLeave={() => setShowFloatingMessage(false)}
        >
          <span className="font-sans font-normal text-[14px] leading-5 text-center text-[#8E90A1] group-hover:text-[#9E372A] transition-colors">
            Conheça nosso portfólio
          </span>
          <div className="w-2 h-2 -100 [&_path]:transition-colors [&_path]:group-hover:stroke-[#9E372A]">
            <ArrowUpRight stroke="#8E90A1" />
          </div>
        </Link>
        <FloatingMessage
          messages={["VEM VER DE PERTO."]}
          isVisible={showFloatingMessage}
        />
      </div>
    </div>
  );
};

export default ContentCard;
