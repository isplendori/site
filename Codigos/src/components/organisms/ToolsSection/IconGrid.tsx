import { memo } from "react";
import HoverBrandIcon from "@/molecules/HoverBrandIcon";
import { cn } from "@/lib/utils";
import { IconComponent } from "./types";

interface IconGridProps {
  icons: IconComponent[];
  cols: number;
  startIndex?: number;
  hoveredIndex: number | null;
  enablePointerEvents?: boolean;
  drawRightEdge?: boolean;
  drawBottomEdge?: boolean;
  onHover: (index: number | null) => void;
}

const IconGrid = memo(({ icons, cols, hoveredIndex, onHover, startIndex = 0, enablePointerEvents = false, drawRightEdge = false, drawBottomEdge = true }: IconGridProps) => {
  return (
    <div
      className={`grid ${enablePointerEvents ? "pointer-events-auto" : ""}`}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {icons.map((IconComponent, idx) => {
        const globalIdx = startIndex + idx;
        return (
          <div
            key={globalIdx}
            onMouseEnter={() => onHover(globalIdx)}
            onMouseLeave={() => onHover(null)}
            className={cn(
              "flex size-[101.333px] items-center justify-center border-[rgba(114,123,142,0.1)] transition-colors hover:bg-[#EADCDB] dark:hover:bg-[#2A1716]",
              drawBottomEdge && "border-b",
              (drawRightEdge || (idx + 1) % cols !== 0) && "border-r"
            )}
          >
            <HoverBrandIcon IconComponent={IconComponent} isHovered={hoveredIndex === globalIdx} />
          </div>
        );
      })}
    </div>
  );
});

IconGrid.displayName = "IconGrid";

export default IconGrid;
