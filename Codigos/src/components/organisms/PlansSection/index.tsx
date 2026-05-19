import type { ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

const CheckCircleIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="9" stroke="#000" strokeWidth="1.5" />
    <path
      d="M6 10l3 3 5-6"
      stroke="#000"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export interface PlansFreePlan {
  name: ReactNode;
  ctaText: string;
  ctaHref?: string;
}

export interface PlansMonthlyPlan {
  title: string;
  features: string[];
  includedLabel: string;
  price: string;
  priceSuffix: string;
}

export interface PlansGuarantee {
  title: string;
  description: string;
}

export interface PlansSectionProps {
  badge?: string;
  title?: ReactNode;
  freePlan: PlansFreePlan;
  monthlyPlan: PlansMonthlyPlan;
  guarantees: PlansGuarantee[];
  className?: string;
}

const PlansSection = ({
  badge,
  title,
  freePlan,
  monthlyPlan,
  guarantees,
  className,
}: PlansSectionProps) => {
  const halfFeatures = Math.ceil(monthlyPlan.features.length / 2);
  const leftFeatures = monthlyPlan.features.slice(0, halfFeatures);
  const rightFeatures = monthlyPlan.features.slice(halfFeatures);

  return (
    <section
      className={cn(
        "box-border flex flex-col justify-center items-center p-0 gap-13.5 w-full bg-white dark:bg-[#0A0A0A] border-x border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] pt-10 pb-24",
        className
      )}
    >
      <div className="flex flex-col justify-center items-center p-0 gap-4.25 w-181.5 max-w-full py-14.5">
        <div className="flex flex-col justify-center items-center p-0 w-131 max-w-full">
          {badge && (
            <span className="tagline-text text-center text-[#8E90A1]">
              {badge}
            </span>
          )}
          {title && (
            <h2 className="font-instrument-serif font-light text-[36px] leading-10.75 text-[#434A57] text-center">
              {title}
            </h2>
          )}
        </div>
      </div>

      <div className="flex flex-row justify-center items-start p-0 gap-2.5 w-291.5 max-w-full">
        <div className="box-border flex flex-row items-start p-[17px_29px_32px] gap-2.5 w-114.5 h-120.25 bg-white dark:bg-[#0A0A0A] border border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] rounded-[20px]">
          <div className="relative flex flex-col justify-end items-start p-0 w-100 h-108">
            <div
              className="absolute top-3 left-0 w-100 h-62.5 bg-[#9E372A] rounded-[20px]"
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col items-start p-0 gap-11.25 w-41.5">
              <Link
                href={freePlan.ctaHref ?? "#"}
                className="flex flex-row justify-center items-center px-4 py-2 gap-2.5 w-41.5 h-9 bg-[#12141B] dark:bg-[#F1F2F4] border border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] rounded-[200px] hover:bg-[#1c1f29] transition-colors"
              >
                <span className="w-[10.46px] h-[10.46px] bg-[#9E372A]" aria-hidden="true" />
                <span className="font-sans font-medium text-[14px] leading-5 text-center text-white dark:text-[#12141B] flex items-center">
                  {freePlan.ctaText}
                </span>
              </Link>

              <div className="font-sans font-medium text-[30px] leading-12.5 tracking-[-1px] text-black w-41.5">
                {freePlan.name}
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-start p-[43px_34px] gap-5.75 w-174.5 h-120.25 overflow-hidden rounded-[20px] border border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] bg-[#0B0C10]">
          <div
            className="absolute -right-10 -bottom-12 w-66.25 h-66 rotate-[-7.67deg] bg-[#9E372A] rounded-[40px] opacity-90"
            aria-hidden="true"
          />
          <div
            className="absolute right-10 bottom-10 w-16 h-16 rounded-full border-[6px] border-black"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col items-start p-0 gap-2.5 w-139.5 max-w-full">
            <div className="flex flex-row justify-between items-center p-0 w-full">
              <h3 className="font-sans font-medium text-[24px] leading-7.5 text-white dark:text-[#12141B]">
                {monthlyPlan.title}
              </h3>
            </div>
          </div>

          <div className="relative z-10 w-157.5 max-w-full">
            <div className="absolute left-16.5 -top-4 z-20 flex flex-col justify-center items-center px-2.5 py-2.5 bg-[#202026] dark:bg-white border border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] rounded-sm">
              <span className="tagline-text text-[#727B8E] dark:text-[#A0A8B8]">
                {monthlyPlan.includedLabel}
              </span>
            </div>

            <div className="flex flex-col items-start p-8 w-full bg-white dark:bg-[#0A0A0A] rounded-lg shadow-[inset_0px_1px_0.25px_rgba(255,255,255,0.16),inset_0px_2px_1px_rgba(255,255,255,0.11)]">
              <div className="flex flex-row items-center gap-20.5 w-full">
                <div className="flex flex-col items-start p-0">
                  {leftFeatures.map((feature) => (
                    <span
                      key={feature}
                      className="font-sans font-normal text-[14px] leading-4.75 text-[#434A57]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="w-px h-25 bg-[rgba(114,123,142,0.1)]" />

                <div className="flex flex-col items-start p-0">
                  {rightFeatures.map((feature) => (
                    <span
                      key={feature}
                      className="font-sans font-normal text-[14px] leading-4.75 text-[#434A57]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex flex-row items-end p-0 gap-1 mt-auto">
            <span className="font-sans font-medium text-[40px] leading-14 tracking-[-2px] text-white dark:text-[#12141B]">
              {monthlyPlan.price}
            </span>
            <span className="font-sans font-normal text-[14px] leading-5 text-white dark:text-[#12141B]">
              {monthlyPlan.priceSuffix}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center p-0 gap-4.25 w-291 max-w-full">
        {guarantees.map((guarantee) => (
          <div
            key={guarantee.title}
            className="box-border flex flex-col justify-center items-center px-0 py-2 gap-2.5 flex-1 h-42 bg-white dark:bg-[#0A0A0A] border border-dashed border-[rgba(114,123,142,0.28)] dark:border-[rgba(255,255,255,0.2)] rounded-[20px]"
          >
            <div className="flex flex-row items-center p-0 gap-2.5 w-116.5 max-w-full">
              <div className="shrink-0">
                <CheckCircleIcon />
              </div>
              <h3 className="font-instrument-serif font-light text-[24px] leading-7.25 text-[#434A57]">
                {guarantee.title}
              </h3>
            </div>
            <p className="font-sans font-normal text-[14px] leading-4.75 text-[#8E90A1] w-116.5 max-w-full">
              {guarantee.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlansSection;
