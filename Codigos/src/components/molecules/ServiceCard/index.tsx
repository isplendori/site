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
        "box-border flex flex-row justify-center items-center p-[8px_16px] gap-2.5 h-48.75 bg-white dark:bg-[#0A0A0A] border-dashed border-[#F1F2F4]",
        className
      )}
    >
      <div className="flex flex-col items-start p-0 gap-4.5 w-65.5 h-31">
        <div className="box-border flex flex-row justify-center items-center p-0 gap-2.5 w-11 h-11 bg-white dark:bg-[#0A0A0A] border border-[#F1F2F4] rounded-sm">
          <Star width={18} height={18} color="#1A1A20" />
        </div>

        <div className="flex flex-col items-start p-0 gap-1.25 w-65.5 h-15.5">
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
