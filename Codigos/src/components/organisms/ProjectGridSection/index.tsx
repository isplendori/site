import { cn } from "@/lib/utils";
import ProjectCard, { type ProjectCardProps } from "@/molecules/ProjectCard";

export interface ProjectGridSectionProps {
  projects: ProjectCardProps[];
  columns?: number;
  className?: string;
}

const ProjectGridSection = ({
  projects,
  columns = 2,
  className,
}: ProjectGridSectionProps) => {
  const rows: ProjectCardProps[][] = [];
  for (let i = 0; i < projects.length; i += columns) {
    rows.push(projects.slice(i, i + columns));
  }

  return (
    <section
      className={cn(
        "box-border flex flex-col justify-center items-center p-0 gap-2.25 w-full bg-white dark:bg-[#0A0A0A] border-x border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] py-10",
        className
      )}
    >
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="reveal-element flex flex-row flex-wrap md:flex-nowrap justify-center md:justify-start items-center p-0 gap-2.25 w-full md:w-284 max-w-full"
          style={{ transitionDelay: `${rowIndex * 120}ms` }}
        >
          {row.map((project) => (
            <ProjectCard key={project.title + project.category} {...project} />
          ))}
        </div>
      ))}
    </section>
  );
};

export default ProjectGridSection;
