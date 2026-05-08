import { memo } from "react";
import HoverBrandIcon from "@/molecules/HoverBrandIcon";
import { IconComponent } from "./types";

interface IconGridProps {
  icons: IconComponent[];
  cols: number;
  startIndex?: number;
  hoveredIndex: number | null;
  enablePointerEvents?: boolean;
  onHover: (index: number | null) => void;
}

const IconGrid = memo(({ icons, cols, hoveredIndex, onHover, startIndex = 0, enablePointerEvents = false }: IconGridProps) => {
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
            className="flex items-center size-[101.3px] justify-center border border-[rgba(114,123,142,0.06)]"
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
