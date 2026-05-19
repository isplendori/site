"use client";

import { useEffect, useId, useState } from "react";
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
  description?: string;
  specialties?: string[];
  href?: string;
  external?: boolean;
  enableModal?: boolean;
  className?: string;
}

const TeamMemberCard = ({
  name,
  role,
  image,
  imageAlt,
  floatingMessages = [],
  description,
  specialties = [],
  href,
  external = false,
  enableModal = true,
  className,
}: TeamMemberCardProps) => {
  const src = image ?? getImage("fallback").src;
  const [showFloatingMessage, setShowFloatingMessage] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const titleId = useId();
  const hasFloating = floatingMessages.length > 0;
  const canOpenModal = enableModal && !href;

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsModalOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const showFloatingHandlers = hasFloating
    ? {
        onMouseEnter: () => setShowFloatingMessage(true),
        onMouseLeave: () => setShowFloatingMessage(false),
      }
    : {};

  const cardContent = (
    <>
      <button
        type="button"
        className={cn(
          "relative w-35.75 h-35.75 rounded-2xl border border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] overflow-hidden bg-[rgba(114,123,142,0.05)] group/image focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E372A] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0A0A0A]",
          canOpenModal && "cursor-pointer"
        )}
        onClick={canOpenModal ? () => setIsModalOpen(true) : undefined}
        aria-label={canOpenModal ? `Abrir perfil de ${name}` : undefined}
        disabled={!canOpenModal}
      >
        <Image
          src={src}
          alt={imageAlt ?? name}
          fill
          sizes="143px"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/image:scale-[1.025]"
        />
      </button>

      <div className="flex flex-col items-start p-0 w-35.75 h-9.75">
        <button
          type="button"
          className={cn(
            "font-sans font-normal text-[14px] leading-4.75 text-[#434A57] self-stretch text-left transition-colors focus-visible:outline-none focus-visible:text-[#9E372A]",
            canOpenModal && "hover:text-[#9E372A] cursor-pointer"
          )}
          onClick={canOpenModal ? () => setIsModalOpen(true) : undefined}
          disabled={!canOpenModal}
        >
          {name}
        </button>
        <span className="tagline-text self-stretch text-[#8E90A1]">
          {role}
        </span>
      </div>
    </>
  );

  const linkedContent = href ? (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex flex-col items-start p-0 gap-3 w-35.75 h-48.5 group"
    >
      <div className="relative w-35.75 h-35.75 rounded-2xl border border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] overflow-hidden bg-[rgba(114,123,142,0.05)]">
        <Image
          src={src}
          alt={imageAlt ?? name}
          fill
          sizes="143px"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
        />
      </div>

      <div className="flex flex-col items-start p-0 w-35.75 h-9.75">
        <span className="font-sans font-normal text-[14px] leading-4.75 text-[#434A57] self-stretch transition-colors group-hover:text-[#9E372A]">
          {name}
        </span>
        <span className="tagline-text self-stretch text-[#8E90A1]">
          {role}
        </span>
      </div>
    </Link>
  ) : (
    cardContent
  );

  return (
    <>
      <div
        className={cn(
          "flex flex-col items-start p-0 gap-3 w-35.75 h-48.5",
          className
        )}
        {...showFloatingHandlers}
      >
        {linkedContent}
      </div>

      {hasFloating && (
        <FloatingMessage
          messages={floatingMessages}
          isVisible={showFloatingMessage}
        />
      )}

      {isModalOpen && (
        <div
          data-testid="profile-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#12141B]/32 px-4 backdrop-blur-md animate-profile-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Fechar perfil ao clicar fora"
            onClick={() => setIsModalOpen(false)}
          />

          <div
            data-testid="profile-modal"
            className="relative z-10 grid w-full max-w-182 overflow-hidden rounded-md border border-[rgba(114,123,142,0.14)] bg-white shadow-[0_24px_80px_rgba(18,20,27,0.18)] animate-profile-modal dark:border-[rgba(255,255,255,0.12)] dark:bg-[#0A0A0A] md:grid-cols-[0.85fr_1.15fr]"
            onMouseDown={(event) => event.stopPropagation()}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(114,123,142,0.14)] bg-white/85 font-sans text-[18px] leading-none text-[#434A57] backdrop-blur-sm transition-colors hover:border-[#9E372A] hover:text-[#9E372A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E372A] dark:bg-[#12141B]/85 dark:text-[#F1F2F4]"
              aria-label="Fechar perfil"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>

            <div className="relative min-h-72 bg-[rgba(114,123,142,0.05)] md:min-h-112">
              <Image
                src={src}
                alt={imageAlt ?? name}
                fill
                sizes="(min-width: 768px) 310px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-between gap-10 p-8 md:p-10">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <span className="tagline-text text-[#8E90A1]">
                    {role}
                  </span>
                  <h3
                    id={titleId}
                    className="font-instrument-serif text-[44px] font-light leading-12 text-[#434A57] md:text-[56px] md:leading-14"
                  >
                    {name}
                  </h3>
                </div>

                <p className="max-w-104 font-sans text-[14px] leading-5.5 text-[#8E90A1]">
                  {description ??
                    "Perfil em construção. Em breve, este espaço recebe mais detalhes sobre a atuação, repertório e presença dessa pessoa no time."}
                </p>
              </div>

              {specialties.length > 0 && (
                <div className="flex flex-col gap-3">
                  <span className="tagline-text text-[#8E90A1]">
                    Especialidades
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="rounded-[200px] border border-dashed border-[rgba(114,123,142,0.28)] px-4 py-2 font-sans text-[14px] leading-5 text-[#8E90A1]"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export interface TeamMemberCtaCardProps {
  title: string;
  subtitle: string;
  href?: string;
  external?: boolean;
  floatingMessages?: string[];
  className?: string;
}

export const TeamMemberCtaCard = ({
  title,
  subtitle,
  href,
  external = false,
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
  const wrapperProps = href
    ? {
        href,
        target: external ? "_blank" : undefined,
        rel: external ? "noopener noreferrer" : undefined,
      }
    : {};

  return (
    <>
      <Wrapper
        {...(wrapperProps as { href: string; target?: string; rel?: string })}
        className={cn(
          "flex flex-col items-start p-0 gap-3 w-35.75 h-48.5 group",
          href && "cursor-pointer",
          className
        )}
        {...showFloatingHandlers}
      >
        <div className="w-35.75 h-35.75 rounded-2xl border border-dashed border-[rgba(114,123,142,0.28)] dark:border-[rgba(255,255,255,0.2)] bg-[rgba(114,123,142,0.1)] transition-colors group-hover:border-[#9E372A]" />

        <div className="flex flex-col items-start p-0 w-35.75 h-9.75">
          <span className="font-sans font-normal text-[14px] leading-4.75 text-[#434A57] transition-colors group-hover:text-[#9E372A]">
            {title}
          </span>
          <span className="tagline-text self-stretch text-[#8E90A1]">
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
