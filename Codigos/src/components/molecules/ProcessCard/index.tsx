"use client";

import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";
import Star from "@/components/atoms/Icon/Star";

export interface ProcessCardProps {
  eyebrow: string;
  title: string;
  description: string;
  stepIndex?: number;
  className?: string;
}

const ProcessCard = ({ eyebrow, title, description, stepIndex = 0, className }: ProcessCardProps) => {
  return (
    <div
      className={cn(
        "process-step relative box-border flex flex-col items-start justify-start overflow-hidden bg-white dark:bg-[#0A0A0A] border border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] px-13.5 py-13.5",
        className
      )}
      data-step={stepIndex}
      style={{ "--process-delay": `${stepIndex * 180 + 160}ms` } as CSSProperties}
    >
      <div className="flex flex-col items-start p-0 gap-10.5 w-74.25 h-52.5">
        <div className="process-marker relative z-30 box-border flex flex-row justify-center items-center p-0 gap-2.5 w-11 h-11 bg-white dark:bg-[#0A0A0A] border border-[#F1F2F4] rounded-sm">
          <Star width={18} height={18} color="#1A1A20" />
        </div>

        <div className="flex flex-col items-start p-0 gap-2.5 w-74.25">
          <span className="process-eyebrow font-mono font-semibold text-[12px] leading-5.25 tracking-[0.09em] uppercase text-[#8E90A1]">
            {eyebrow}
          </span>
          <h3 className="font-figtree font-normal text-[20px] leading-6 text-[#434A57] flex items-center">
            {title}
          </h3>
          <p className="font-sans font-normal text-[14px] leading-4.75 text-[#8E90A1] self-stretch">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessCard;
