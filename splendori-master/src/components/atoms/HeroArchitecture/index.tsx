import Image from "next/image";

import { cn } from "@/lib/utils";

export interface HeroArchitectureProps {
  className?: string;
}

const HeroArchitecture = ({ className }: HeroArchitectureProps) => {
  return (
    <Image
      src="/hero-architecture.svg"
      alt=""
      aria-hidden
      width={1216}
      height={892}
      priority
      unoptimized
      className={cn(
        "pointer-events-none select-none h-full w-full",
        className,
      )}
    />
  );
};

export default HeroArchitecture;
