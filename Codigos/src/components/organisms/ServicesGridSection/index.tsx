"use client";

import { cn } from "@/lib/utils";
import ServiceCard from "@/molecules/ServiceCard";

export interface ServicesGridSectionProps {
  className?: string;
}

const services = [
  "Identidade Visual",
  "UI/UX",
  "Social Media",
  "Sites",
  "Desenvolvimento Web",
  "Tráfego Pago",
];

const ServicesGridSection = ({ className }: ServicesGridSectionProps) => {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.";

  return (
    <section
      className={cn(
        "grid w-full grid-cols-1 items-stretch bg-white dark:bg-[#0A0A0A] sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {services.map((title) => (
        <ServiceCard
          key={title}
          title={title}
          description={description}
          className="min-h-48.75 w-full border border-[#F1F2F4]"
        />
      ))}
    </section>
  );
};

export default ServicesGridSection;
