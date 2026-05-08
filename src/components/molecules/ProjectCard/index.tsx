"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { getImage } from "@/assets/images";
import FloatingMessage from "@/atoms/FloatingMessage";

export interface ProjectCardProps {
  title: string;
  category: string;
  image?: string;
  imageAlt?: string;
  href?: string;
  floatingMessages?: string[];
  className?: string;
}

const ProjectCard = ({
  title,
  category,
  image,
  imageAlt,
  href,
  floatingMessages = [],
  className,
}: ProjectCardProps) => {
  const src = image ?? getImage("fallback").src;
  const [showFloatingMessage, setShowFloatingMessage] = useState(false);
  const hasFloating = floatingMessages.length > 0;

  const showFloatingHandlers = hasFloating
    ? {
        onMouseEnter: () => setShowFloatingMessage(true),
        onMouseLeave: () => setShowFloatingMessage(false),
      }
    : {};

  const Wrapper = href ? Link : "div";
  const wrapperProps = href ? { href } : {};

  return (
    <>
      <Wrapper
        {...(wrapperProps as { href: string })}
        className={cn(
          "relative block w-[563.5px] h-94.75 rounded-[14px] overflow-hidden border border-[rgba(114,123,142,0.1)] bg-[rgba(114,123,142,0.05)] group",
          href && "cursor-pointer",
          className
        )}
        {...showFloatingHandlers}
      >
        <Image
          src={src}
          alt={imageAlt ?? title}
          fill
          sizes="(min-width: 1216px) 563px, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        <div className="absolute left-0 right-0 bottom-0 h-[182.09px] flex flex-col justify-end items-start px-11.5 py-10.5 gap-2.5 bg-[linear-gradient(1.74deg,rgba(251,251,251,0.69)_1.47%,rgba(250,250,250,0)_98.53%)] rounded-b-[14px]">
          <div className="flex flex-col items-start p-0 gap-1 w-79.25 max-w-full">
            <span className="font-mono font-semibold text-[12px] leading-5.25 tracking-[0.09em] uppercase text-[#8E90A1] self-stretch">
              {category}
            </span>
            <h3 className="font-itc-garamond-std font-light text-[30px] leading-9 text-[#434A57]">
              {title}
            </h3>
          </div>
        </div>
      </Wrapper>

      {hasFloating && (
        <FloatingMessage
          messages={floatingMessages}
          isVisible={showFloatingMessage}
        />
      )}
    </>
  );
};

export default ProjectCard;
