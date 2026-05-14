"use client";

import { cn } from "@/lib/utils";
import ProcessCard from "@/molecules/ProcessCard";

export interface ProcessCardsSectionProps {
  className?: string;
}

const ProcessCardsSection = ({ className }: ProcessCardsSectionProps) => {
  return (
    <section className={cn("process-timeline relative w-full bg-white dark:bg-[#0A0A0A]", className)}>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full">
        <ProcessCard
          eyebrow="SEM COMPROMISSO"
          title="Diagnóstico"
          description="Entendemos seu negócio, analisamos seus concorrentes e identificamos onde está a oportunidade do seu comércio."
          stepIndex={0}
          className="min-h-63.75 border-l-0"
        />
        <ProcessCard
          eyebrow="SEM ENROLAÇÃO"
          title="Alinhamento"
          description="Chegamos juntos no formato e valor que faz sentido para o seu momento: assinatura ou por projeto específico."
          stepIndex={1}
          className="min-h-63.75 border-l-0"
        />
        <ProcessCard
          eyebrow="INICIAMOS EM 48H"
          title="Execução"
          description="Contrato assinado, projeto iniciado em até 48 horas úteis. Com acompanhamento real, sem sumiço."
          stepIndex={2}
          className="min-h-63.75 border-l-0 border-r-0"
        />
      </div>
    </section>
  );
};

export default ProcessCardsSection;
