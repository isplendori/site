"use client";

import { useState, ReactNode } from "react";
import Link from "next/link";
import { ArrowUpLeft, FloatingMessage } from "@/components";

interface SolutionButtonProps {
  href: string;
  text: string;
  icon?: ReactNode;
  showFloatingMessage?: boolean;
  floatingMessages?: string[];
}

const SolutionButton = ({
  href,
  text,
  icon,
  showFloatingMessage = false,
  floatingMessages = []
}: SolutionButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultIcon = (
    <div className="w-2 h-2 [&_path]:transition-colors [&_path]:group-hover:stroke-[#9E372A]">
      <ArrowUpLeft stroke="#8E90A1" />
    </div>
  );

  return (
    <>
      {showFloatingMessage && <FloatingMessage messages={floatingMessages} isVisible={isHovered} />}
      <Link
        href={href}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex flex-row justify-center items-center px-4 py-2 gap-2.5 h-9 bg-white dark:bg-[#0A0A0A] border border-dashed border-[rgba(114,123,142,0.28)] dark:border-[rgba(255,255,255,0.2)] rounded-[200px] hover:border-[#9E372A] hover:bg-[#EADCDB] dark:hover:bg-[#2A1716] transition-colors group"
      >
        <span className="font-sans font-normal text-[14px] leading-5 text-center text-[#8E90A1] flex items-center group-hover:text-[#9E372A] transition-colors">
          {text}
        </span>
        {icon || defaultIcon}
      </Link>
    </>
  );
};

export default SolutionButton;
