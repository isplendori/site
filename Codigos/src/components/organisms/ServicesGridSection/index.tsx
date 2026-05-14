"use client";

import { cn } from "@/lib/utils";
import ServiceCard from "@/molecules/ServiceCard";

export interface ServicesGridSectionProps {
  className?: string;
}

const ServicesGridSection = ({ className }: ServicesGridSectionProps) => {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.";

  return (
    <section
      className={cn(
        "flex flex-col items-start p-0 w-full h-97.5 bg-white dark:bg-[#0A0A0A]",
        className
      )}
    >
      <div className="flex flex-row items-center p-0 w-full h-48.75">
        <ServiceCard
          title="Identidade Visual"
          description={description}
          className="w-101.5 border border-[#F1F2F4] border-l-0"
        />
        <ServiceCard
          title="UI/UX"
          description={description}
          className="w-101.25 border-y border-[#F1F2F4] border-x-0"
        />
        <ServiceCard
          title="Social Media"
          description={description}
          className="w-101.25 border border-[#F1F2F4] border-r-0"
        />
      </div>

      <div className="flex flex-row items-center p-0 w-full h-48.75">
        <ServiceCard
          title="Sites"
          description={description}
          className="w-101.5 border border-[#F1F2F4] border-l-0 border-t-0"
        />
        <ServiceCard
          title="Desenvolvimento Web"
          description={description}
          className="w-101.25 border-b border-[#F1F2F4] border-x-0 border-t-0"
        />
        <ServiceCard
          title="Tráfego Pago"
          description={description}
          className="w-101.25 border border-[#F1F2F4] border-r-0 border-t-0"
        />
      </div>
    </section>
  );
};

export default ServicesGridSection;
