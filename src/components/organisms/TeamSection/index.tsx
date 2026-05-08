import { cn } from "@/lib/utils";
import TeamCard, { type TeamCardProps } from "@/molecules/TeamCard";

export interface TeamSectionProps {
  members: TeamCardProps[];
  className?: string;
}

const TeamSection = ({ members, className }: TeamSectionProps) => {
  return (
    <section
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 w-full bg-white border-y border-[rgba(114,123,142,0.1)]",
        className
      )}
    >
      {members.map((member, index) => (
        <div
          key={member.name}
          className={cn(
            "flex w-full",
            index > 0 && "md:border-l border-[rgba(114,123,142,0.1)]"
          )}
        >
          <TeamCard {...member} />
        </div>
      ))}
    </section>
  );
};

export default TeamSection;
