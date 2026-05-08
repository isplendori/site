import type { Metadata } from "next";

import { defaultBrands } from "@/app/page.data";
import { BrandDivider, HeroSection, MainLayout } from "@/components";

export const metadata: Metadata = {
  title: "Causas — Splendori",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
};

export default function CausasPage() {
  return (
    <MainLayout>
      <div className="flex w-full max-w-304 mx-auto flex-col items-center px-4 sm:px-0 sm:border-x border-[rgba(114,123,142,0.1)]">
        <HeroSection />
        <BrandDivider brands={defaultBrands} />
        <h1 className="font-itc-garamond-std font-light text-[44px] md:text-[56px] leading-tight text-[#202026] mb-6">
          Causas
        </h1>
        <p className="font-sans text-[16px] leading-6 text-[#8E90A1] max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
      </div>
    </MainLayout>
  );
}
