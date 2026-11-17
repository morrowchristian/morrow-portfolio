// src/components/Grid/Grid.tsx
import React, { forwardRef } from "react";
import "./Grid.css";

interface ResponsiveColumns {
  base: number;
  md?: number;
  lg?: number;
}

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: string | ResponsiveColumns;
  gap?: string;
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ children, columns = "repeat(auto-fill, minmax(280px, 1fr))", gap = "32px", style, className = "", ...props }, ref) => {
    
    const resolveColumns = (value: GridProps["columns"]) => {
      if (typeof value === "string") return value;

      if (typeof value === "object") {
        // For now, only base is applied.
        // Responsive breakpoints will be handled via useMediaQuery in the future.
        return `repeat(${value.base}, 1fr)`;
      }

      return "1fr";
    };

    // Merge the caller's className with "grid" — spreading ...props
    // after className="grid" used to drop the grid class entirely
    // (Portfolio/Resume/Services all pass an animate class), which
    // killed display: grid and stacked every card in one column.
    return (
      <div
        ref={ref}
        className={`grid ${className}`}
        style={{
          gridTemplateColumns: resolveColumns(columns),
          gap,
          ...style
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

/* TODO (Grid)
- Add full responsive support using useMediaQuery (md, lg breakpoints)
- Add spacing token presets for gap (sm/md/lg)
- Add alignment variants (center, justify, stretch)
- Add column presets (auto, fixed, masonry-like)
- Add animation staggering utilities for child elements
*/
