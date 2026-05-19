"use client";

import { cn } from "@/lib/utils";
import ServiceCard from "@/molecules/ServiceCard";

export interface ServicesGridSectionProps {
  className?: string;
}

const services = [
  {
    title: "Identidade Visual",
    description:
      "Sistema de marca com direção, uso real e consistência para a empresa deixar de parecer diferente a cada ponto de contato.",
  },
  {
    title: "UI/UX",
    description:
      "Interfaces pensadas para leitura, decisão e conversão, sem sacrificar clareza por efeito visual.",
  },
  {
    title: "Social Media",
    description:
      "Conteúdo com ritmo, tensão e repertório para prender atenção antes de tentar vender qualquer coisa.",
  },
  {
    title: "Sites",
    description:
      "Páginas que explicam valor com precisão, sustentam confiança e conduzem o visitante para o próximo passo.",
  },
  {
    title: "Desenvolvimento Web",
    description:
      "Construção técnica para que a experiência funcione bem, carregue rápido e continue segura depois da entrega.",
  },
  {
    title: "Tráfego Pago",
    description:
      "Campanhas com mensagem, destino e leitura de dados alinhados. O clique precisa encontrar uma marca preparada.",
  },
];

const ServicesGridSection = ({ className }: ServicesGridSectionProps) => {
  return (
    <section
      className={cn(
        "grid w-full grid-cols-1 items-stretch bg-white dark:bg-[#0A0A0A] sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {services.map((service) => (
        <ServiceCard
          key={service.title}
          title={service.title}
          description={service.description}
          className="min-h-48.75 w-full border border-[#F1F2F4]"
        />
      ))}
    </section>
  );
};

export default ServicesGridSection;
