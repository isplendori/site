"use client";

import { getImage } from "@/assets/images";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import FloatingMessage from "@/atoms/FloatingMessage";

export interface HumanMadeSectionProps {
  className?: string;
}

const HumanMadeSection = ({ className }: HumanMadeSectionProps) => {
  const [showFloatingMessage, setShowFloatingMessage] = useState(false);

  return (
    <section
      className={cn("relative w-full h-50 mt-40", className)}
      onMouseEnter={() => setShowFloatingMessage(true)}
      onMouseLeave={() => setShowFloatingMessage(false)}
    >
      <Image
        width={1566}
        height={200}
        alt="Splendori"
        src={getImage("made").src}
        className="object-cover w-[stretch]"
      />

      <FloatingMessage
        messages={["A IA AINDA NÃO CONSEGUIU NOS SUBSTITUIR."]}
        isVisible={showFloatingMessage}
      />
    </section>
  );
};

export default HumanMadeSection;

