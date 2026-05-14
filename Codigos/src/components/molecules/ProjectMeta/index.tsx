interface ProjectMetaProps {
  year?: string | number;
  responsible?: string;
  category?: string;
}

const ProjectMeta = ({ year, responsible, category }: ProjectMetaProps) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-10 py-12 border-t border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] reveal-element">
      <div className="flex flex-col gap-3 items-center text-center">
        <p className="text-[11px] uppercase tracking-[0.18em] text-[#8E90A1] font-semibold">Quando foi efetuado</p>
        <p className="text-2xl font-instrument-serif italic text-[#202026] dark:text-[#F8FAFC]">
          {year || "2024"}
        </p>
      </div>
      <div className="flex flex-col gap-3 items-center text-center">
        <p className="text-[11px] uppercase tracking-[0.18em] text-[#8E90A1] font-semibold">Responsável</p>
        <p className="text-2xl font-instrument-serif italic text-[#202026] dark:text-[#F8FAFC]">
          {responsible || "Splendori Team"}
        </p>
      </div>
      <div className="flex flex-col gap-3 items-center text-center">
        <p className="text-[11px] uppercase tracking-[0.18em] text-[#8E90A1] font-semibold">Área</p>
        <p className="text-2xl font-instrument-serif italic text-[#202026] dark:text-[#F8FAFC]">
          {category || "Design Estratégico"}
        </p>
      </div>
    </div>
  );
};

export default ProjectMeta;
