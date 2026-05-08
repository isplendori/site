import Image from "next/image";

import { cn } from "@/lib/utils";
import { getImage } from "@/assets/images";

export interface TeamCardProps {
  image?: string;
  imageAlt?: string;
  role: string;
  name: string;
  description: string;
  tags: string[];
  className?: string;
}

const TeamCard = ({
  image,
  imageAlt,
  role,
  name,
  description,
  tags,
  className,
}: TeamCardProps) => {
  const src = image ?? getImage("fallback").src;

  return (
    <div
      className={cn(
        "flex flex-col items-start gap-4.5 p-9 w-full h-full",
        className
      )}
    >
      <div className="relative w-22 h-22 rounded-md overflow-hidden bg-[#9E372A]">
        <Image
          src={src}
          alt={imageAlt ?? name}
          fill
          sizes="88px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col items-start gap-1.5 w-full">
        <span className="font-mono font-semibold text-[12px] leading-5.25 tracking-[0.09em] uppercase text-[#8E90A1]">
          {role}
        </span>
        <h3 className="font-itc-garamond-std font-light text-[36px] leading-10.75 text-[#434A57]">
          {name}
        </h3>
      </div>

      <p className="font-sans font-normal text-[14px] leading-4.75 text-[#8E90A1] max-w-105">
        {description}
      </p>

      <div className="flex flex-row flex-wrap items-start gap-1.5"
      >
        {tags.map((tag) => (
          <div key={tag}
            className="flex flex-row justify-center items-center px-4 py-2 gap-2.5 h-9 bg-white border border-dashed border-[rgba(114,123,142,0.28)] rounded-[200px] hover:border-[#9E372A] transition-colors group"
          >
            <span key={tag} className="font-sans font-normal text-[14px] leading-5 text-center text-[#8E90A1] flex items-center group-hover:text-[#9E372A] transition-colors">
              {tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
