"use client";

import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import IconGrid from "./IconGrid";
import ContentCard from "./ContentCard";
import { ToolsSectionProps } from "./types";
import { topRowIcons, leftSideGridIcons, rightSideGridIcons } from "./data";

const ToolsSection = ({ className }: ToolsSectionProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleHover = useCallback((index: number | null) => {
    setHoveredIndex(index);
  }, []);

  return (
    <section className={cn("w-full bg-white dark:bg-[#0A0A0A] relative overflow-hidden border-t border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)]", className)}>
      <div className="relative w-full">
        <IconGrid icons={topRowIcons} cols={12} mobileCols={4} smCols={6} hoveredIndex={hoveredIndex} onHover={handleHover} startIndex={0} />
        <IconGrid icons={topRowIcons} cols={12} mobileCols={4} smCols={6} hoveredIndex={hoveredIndex} onHover={handleHover} startIndex={12} />
        <IconGrid icons={topRowIcons} cols={12} mobileCols={4} smCols={6} hoveredIndex={hoveredIndex} onHover={handleHover} startIndex={24} />

        <div className="grid grid-cols-1 items-stretch pointer-events-none md:grid-cols-12">
          <div className="hidden md:col-span-3 md:block">
            <IconGrid icons={leftSideGridIcons} cols={3} hoveredIndex={hoveredIndex} onHover={handleHover} startIndex={36} enablePointerEvents drawRightEdge />
          </div>
          <div className="md:col-span-6">
            <ContentCard />
          </div>
          <div className="hidden md:col-span-3 md:block">
            <IconGrid icons={rightSideGridIcons} cols={3} hoveredIndex={hoveredIndex} onHover={handleHover} startIndex={45} enablePointerEvents />
          </div>
        </div>

        <IconGrid icons={topRowIcons} cols={12} mobileCols={4} smCols={6} hoveredIndex={hoveredIndex} onHover={handleHover} startIndex={54} />
        <IconGrid icons={topRowIcons} cols={12} mobileCols={4} smCols={6} hoveredIndex={hoveredIndex} onHover={handleHover} startIndex={66} />
        <IconGrid icons={topRowIcons} cols={12} mobileCols={4} smCols={6} hoveredIndex={hoveredIndex} onHover={handleHover} startIndex={78} drawBottomEdge={false} />
      </div>
    </section>
  );
};

export default ToolsSection;
