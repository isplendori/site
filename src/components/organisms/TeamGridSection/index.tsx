import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import TeamMemberCard, {
  TeamMemberCtaCard,
  type TeamMemberCardProps,
  type TeamMemberCtaCardProps,
} from "@/molecules/TeamMemberCard";

export interface TeamGridSectionProps {
  title: ReactNode;
  badge?: string;
  members: TeamMemberCardProps[];
  emptyCard?: TeamMemberCtaCardProps;
  columns?: number;
  className?: string;
  borderTop?: boolean;
  borderBottom?: boolean;
  height?: number;
}

const TeamGridSection = ({
  title,
  badge,
  members,
  emptyCard,
  columns = 4,
  className,
  borderTop = true,
  borderBottom = true,
  height = 506,
}: TeamGridSectionProps) => {
  const items = [
    ...members.map((m) => ({ kind: "member" as const, data: m })),
    ...(emptyCard ? [{ kind: "cta" as const, data: emptyCard }] : []),
  ];

  const rows: typeof items[] = [];
  for (let i = 0; i < items.length; i += columns) {
    rows.push(items.slice(i, i + columns));
  }

  return (
    <section
      className={cn(
        "box-border flex flex-col justify-center items-center p-0 gap-5.25 w-full bg-white",
        borderTop && "border-t border-[rgba(114,123,142,0.1)]",
        borderBottom && "border-b border-[rgba(114,123,142,0.1)]",
        className
      )}
      style={{ minHeight: `${height}px` }}
    >
      <div className="flex flex-col items-start p-0 w-159.5 max-w-full">
        {badge && (
          <span className="font-mono font-semibold text-[12px] leading-5.25 tracking-[0.09em] uppercase text-[#8E90A1]">
            {badge}
          </span>
        )}
        <h2 className="font-itc-garamond-std font-light text-[36px] leading-10.75 text-[#434A57]">
          {title}
        </h2>
      </div>

      <div className="flex flex-col items-start gap-5.5 w-159.5 max-w-full">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-row items-center p-0 gap-5.5 w-159.5 max-w-full"
          >
            {row.map((item) =>
              item.kind === "member" ? (
                <TeamMemberCard key={item.data.name} {...item.data} />
              ) : (
                <TeamMemberCtaCard key={item.data.title} {...item.data} />
              )
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamGridSection;
