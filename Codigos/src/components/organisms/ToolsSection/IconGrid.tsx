import { memo, type CSSProperties } from "react";
import HoverBrandIcon from "@/molecules/HoverBrandIcon";
import { cn } from "@/lib/utils";
import { IconComponent } from "./types";

interface IconGridProps {
  icons: IconComponent[];
  cols: number;
  mobileCols?: number;
  smCols?: number;
  startIndex?: number;
  hoveredIndex: number | null;
  enablePointerEvents?: boolean;
  drawRightEdge?: boolean;
  drawBottomEdge?: boolean;
  onHover: (index: number | null) => void;
}

const IconGrid = memo(({ icons, cols, mobileCols = cols, smCols = cols, hoveredIndex, onHover, startIndex = 0, enablePointerEvents = false, drawRightEdge = false, drawBottomEdge = true }: IconGridProps) => {
  const gridStyle = {
    "--mobile-cols": mobileCols,
    "--sm-cols": smCols,
    "--desktop-cols": cols,
  } as CSSProperties;

  return (
    <div
      className={cn(
        "grid grid-cols-[repeat(var(--mobile-cols),minmax(0,1fr))] sm:grid-cols-[repeat(var(--sm-cols),minmax(0,1fr))] md:grid-cols-[repeat(var(--desktop-cols),minmax(0,1fr))]",
        enablePointerEvents && "pointer-events-auto"
      )}
      style={gridStyle}
    >
      {icons.map((IconComponent, idx) => {
        const globalIdx = startIndex + idx;
        const isMobileHidden = idx >= mobileCols;
        const isSmHidden = idx >= smCols;
        const isMobileRowEnd = idx === mobileCols - 1;
        const isSmRowEnd = idx === smCols - 1;
        const isDesktopRowEnd = (idx + 1) % cols === 0;

        return (
          <div
            key={globalIdx}
            onMouseEnter={() => onHover(globalIdx)}
            onMouseLeave={() => onHover(null)}
            className={cn(
              "flex aspect-square w-full min-w-0 items-center justify-center border-[rgba(114,123,142,0.1)] transition-colors hover:bg-[#EADCDB] dark:hover:bg-[#2A1716]",
              isMobileHidden && "hidden",
              isMobileHidden && !isSmHidden && "sm:flex",
              isSmHidden && "sm:hidden md:flex",
              drawBottomEdge && "border-b",
              (drawRightEdge || !isMobileRowEnd) && "border-r",
              !drawRightEdge && isMobileRowEnd && "border-r-0",
              !drawRightEdge && !isSmRowEnd && "sm:border-r",
              !drawRightEdge && isSmRowEnd && "sm:border-r-0",
              !drawRightEdge && !isDesktopRowEnd && "md:border-r",
              !drawRightEdge && isDesktopRowEnd && "md:border-r-0"
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
