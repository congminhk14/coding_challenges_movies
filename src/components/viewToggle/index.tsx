"use client"

import type { ViewMode } from "@/types/movie"

interface ViewToggleProps {
  viewMode: ViewMode
  onViewModeChange: (mode: ViewMode) => void
}

const ViewToggle = ({ viewMode, onViewModeChange }: ViewToggleProps) => {
  return (
    <div className="viewToggle">
      <button
        className={`toggleButton ${viewMode === "grid" && "active"}`}
        onClick={() => onViewModeChange("grid")}
        aria-label="Grid view"
      >
        ⊞
      </button>
      <button
        className={`toggleButton ${viewMode === "list" && "active"}`}
        onClick={() => onViewModeChange("list")}
        aria-label="List view"
      >
        ☰
      </button>
    </div>
  )
}

export default ViewToggle;
