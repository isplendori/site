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
          eyebrow="ANTES DE PROPOR"
          title="Diagnóstico"
          description="Lemos o negócio, o público e os pontos de atrito da marca para separar problema real de gosto pessoal."
          stepIndex={0}
          className="min-h-63.75 border-l-0"
        />
        <ProcessCard
          eyebrow="COM DIREÇÃO"
          title="Estrutura"
          description="Definimos formato, prioridade e caminho de execução. A marca ganha regra antes de ganhar acabamento."
          stepIndex={1}
          className="min-h-63.75 border-l-0"
        />
        <ProcessCard
          eyebrow="COM ACOMPANHAMENTO"
          title="Execução"
          description="Produzimos com cadência, revisão e critério. Você acompanha o avanço sem precisar decifrar o processo."
          stepIndex={2}
          className="min-h-63.75 border-l-0 border-r-0"
        />
      </div>
    </section>
  );
};

export default ProcessCardsSection;
