"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { getImage } from "@/assets/images";
import FloatingMessage from "@/atoms/FloatingMessage";

export interface TeamMemberCardProps {
  name: string;
  role: string;
  image?: string;
  imageAlt?: string;
  floatingMessages?: string[];
  className?: string;
}

const TeamMemberCard = ({
  name,
  role,
  image,
  imageAlt,
  floatingMessages = [],
  className,
}: TeamMemberCardProps) => {
  const src = image ?? getImage("fallback").src;
  const [showFloatingMessage, setShowFloatingMessage] = useState(false);
  const hasFloating = floatingMessages.length > 0;

  const showFloatingHandlers = hasFloating
    ? {
        onMouseEnter: () => setShowFloatingMessage(true),
        onMouseLeave: () => setShowFloatingMessage(false),
      }
    : {};

  return (
    <>
      <div
        className={cn(
          "flex flex-col items-start p-0 gap-3 w-35.75 h-48.5",
          className
        )}
        {...showFloatingHandlers}
      >
        <div className="relative w-35.75 h-35.75 rounded-2xl border border-[rgba(114,123,142,0.1)] overflow-hidden bg-[rgba(114,123,142,0.05)]">
          <Image
            src={src}
            alt={imageAlt ?? name}
            fill
            sizes="143px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col items-start p-0 w-35.75 h-9.75">
          <span className="font-sans font-normal text-[14px] leading-4.75 text-[#434A57] self-stretch">
            {name}
          </span>
          <span className="font-mono font-semibold text-[12px] leading-5.25 tracking-[0.09em] uppercase text-[#8E90A1] self-stretch">
            {role}
          </span>
        </div>
      </div>

      {hasFloating && (
        <FloatingMessage
          messages={floatingMessages}
          isVisible={showFloatingMessage}
        />
      )}
    </>
  );
};

export interface TeamMemberCtaCardProps {
  title: string;
  subtitle: string;
  href?: string;
  floatingMessages?: string[];
  className?: string;
}

export const TeamMemberCtaCard = ({
  title,
  subtitle,
  href,
  floatingMessages = [],
  className,
}: TeamMemberCtaCardProps) => {
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
          "flex flex-col items-start p-0 gap-3 w-35.75 h-48.5 group",
          href && "cursor-pointer",
          className
        )}
        {...showFloatingHandlers}
      >
        <div className="w-35.75 h-35.75 rounded-2xl border border-dashed border-[rgba(114,123,142,0.28)] bg-[rgba(114,123,142,0.1)] transition-colors group-hover:border-[#9E372A]" />

        <div className="flex flex-col items-start p-0 w-35.75 h-9.75">
          <span className="font-sans font-normal text-[14px] leading-4.75 text-[#434A57] transition-colors group-hover:text-[#9E372A]">
            {title}
          </span>
          <span className="font-mono font-semibold text-[12px] leading-5.25 tracking-[0.09em] uppercase text-[#8E90A1] self-stretch">
            {subtitle}
          </span>
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

export default TeamMemberCard;
