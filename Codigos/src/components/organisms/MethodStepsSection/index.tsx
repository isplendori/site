import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { getImage } from "@/assets/images";
import ArrowUpRight from "@/atoms/Icon/ArrowUpRight";

export interface MethodStep {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

export interface MethodStepsSectionProps {
  badge?: string;
  title?: ReactNode;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  steps: MethodStep[];
  className?: string;
}

const MethodStepsSection = ({
  badge,
  title,
  description,
  buttonText,
  buttonHref = "#",
  steps,
  className,
}: MethodStepsSectionProps) => {
  return (
    <section
      className={cn(
        "box-border flex flex-col lg:flex-row items-start w-full bg-white dark:bg-[#0A0A0A] border-x border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] px-4 lg:px-13.5 py-11 gap-12 lg:gap-27",
        className
      )}
    >
      <div className="flex flex-col items-start p-0 gap-3.5 w-full lg:w-107.25 lg:sticky top-25 self-start">
        <div className="flex flex-col items-start p-0 w-full lg:w-79.5">
          {badge && (
            <span className="tagline-text text-[#8E90A1]">
              {badge}
            </span>
          )}
          {title && (
            <h2 className="font-instrument-serif font-light text-[36px] leading-10.75 text-[#434A57]">
              {title}
            </h2>
          )}
        </div>

        {description && (
          <p className="font-sans font-normal text-[14px] leading-4.75 text-[#8E90A1] self-stretch">
            {description}
          </p>
        )}

        {buttonText && (
          <Link
            href={buttonHref}
            className="flex flex-row justify-center items-center px-4 py-2 gap-2.5 h-9 bg-white dark:bg-[#0A0A0A] border border-dashed border-[rgba(114,123,142,0.28)] dark:border-[rgba(255,255,255,0.2)] rounded-[200px] hover:border-[#9E372A] transition-colors group"
          >
            <span className="font-sans font-normal text-[14px] leading-5 text-center text-[#8E90A1] flex items-center group-hover:text-[#9E372A] transition-colors">
              {buttonText}
            </span>
            <div className="w-2 h-2 [&_path]:transition-colors [&_path]:group-hover:stroke-[#9E372A]">
              <ArrowUpRight stroke="#8E90A1" />
            </div>
          </Link>
        )}
      </div>

      <div className="flex flex-col items-stretch w-full lg:w-142.75">
        {steps.map((step, index) => {

          const isLast = index === steps.length - 1;
          const visualSrc = step.image ?? getImage("fallback").src;

          return (
            <div key={index} className="flex flex-row items-start gap-5 w-full">
              <div className="relative shrink-0 w-5 self-stretch">
                <div className="relative z-10 flex flex-row justify-center items-center w-5 h-5 bg-[#9E372A] rounded-full border border-[#E4E7EC]">
                  <span className="font-sans font-medium text-[12px] leading-3 text-white dark:text-[#12141B]">
                    {index + 1}
                  </span>
                </div>
                {!isLast && (
                  <div className="absolute top-5 bottom-0 left-1/2 -translate-x-1/2 w-px bg-[#E4E7EC]" />
                )}
              </div>

              <div
                className={cn(
                  "flex flex-col items-center justify-center gap-5 flex-1",
                  !isLast && "pb-8"
                )}
              >
                <div className="flex flex-col items-start gap-2.825 w-full">
                  <h3 className="font-figtree font-medium text-[16px] leading-4.75 text-[#434A57] self-stretch">
                    {step.title}
                  </h3>
                  <p className="font-sans font-normal text-[14px] leading-4.75 text-[#8E90A1] self-stretch">
                    {step.description}
                  </p>
                </div>

                <div className="relative flex flex-row justify-center items-center w-full h-[279.17px] rounded-md border border-[#E4E7EC] bg-[rgba(114,123,142,0.03)] overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${getImage("background_card_metodo").src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                  <div className="relative z-10 w-40 h-40">
                    <Image
                      src={visualSrc}
                      alt={step.imageAlt ?? step.title}
                      fill
                      sizes="160px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MethodStepsSection;
