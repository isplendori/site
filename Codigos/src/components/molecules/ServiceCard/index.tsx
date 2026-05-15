"use client";

import { cn } from "@/lib/utils";
import Star from "@/components/atoms/Icon/Star";

export interface ServiceCardProps {
  title: string;
  description: string;
  className?: string;
}

const ServiceCard = ({ title, description, className }: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "box-border flex min-h-48.75 w-full flex-row items-center justify-start gap-2.5 border-dashed border-[#F1F2F4] bg-white p-6 dark:bg-[#0A0A0A] sm:justify-center sm:p-[8px_16px]",
        className
      )}
    >
      <div className="flex w-full max-w-65.5 flex-col items-start gap-4.5 p-0">
        <div className="box-border flex flex-row justify-center items-center p-0 gap-2.5 w-11 h-11 bg-white dark:bg-[#0A0A0A] border border-[#F1F2F4] rounded-sm">
          <Star width={18} height={18} color="#1A1A20" />
        </div>

        <div className="flex w-full flex-col items-start gap-1.25 p-0">
          <div className="font-figtree font-medium text-[16px] leading-4.75 flex items-center text-[#434A57] self-stretch">
            {title}
          </div>
          <p className="font-sans font-normal text-[14px] leading-4.75 text-[#8E90A1]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
