"use client";

import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import IconGrid from "./IconGrid";
import ContentCard from "./ContentCard";
import { ToolsSectionProps } from "./types";
import { topRowIcons, sideGridIcons } from "./data";

const ToolsSection = ({ className }: ToolsSectionProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleHover = useCallback((index: number | null) => {
    setHoveredIndex(index);
  }, []);

  return (
    <section className={cn("w-full bg-white dark:bg-[#0A0A0A] relative overflow-hidden border-y border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)]", className)}>
      <div className="relative w-full">
        <IconGrid icons={topRowIcons} cols={12} hoveredIndex={hoveredIndex} onHover={handleHover} startIndex={0} />
        <IconGrid icons={topRowIcons} cols={12} hoveredIndex={hoveredIndex} onHover={handleHover} startIndex={12} />
        <IconGrid icons={topRowIcons} cols={12} hoveredIndex={hoveredIndex} onHover={handleHover} startIndex={24} />

        <div className="flex flex-col md:flex-row items-center justify-center pointer-events-none">
          <div className="hidden md:block">
            <IconGrid icons={sideGridIcons} cols={3} hoveredIndex={hoveredIndex} onHover={handleHover} startIndex={36} enablePointerEvents />
          </div>
          <ContentCard />
          <div className="hidden md:block">
            <IconGrid icons={sideGridIcons} cols={3} hoveredIndex={hoveredIndex} onHover={handleHover} startIndex={45} enablePointerEvents />
          </div>
        </div>

        <IconGrid icons={topRowIcons} cols={12} hoveredIndex={hoveredIndex} onHover={handleHover} startIndex={54} />
        <IconGrid icons={topRowIcons} cols={12} hoveredIndex={hoveredIndex} onHover={handleHover} startIndex={66} />
        <IconGrid icons={topRowIcons} cols={12} hoveredIndex={hoveredIndex} onHover={handleHover} startIndex={78} />
      </div>
    </section>
  );
};

export default ToolsSection;
