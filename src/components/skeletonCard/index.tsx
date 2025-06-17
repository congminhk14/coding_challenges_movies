import type { ViewMode } from "@/types/movie";
import './skeletonCard.scss';

interface SkeletonCardProps {
  viewMode: ViewMode
}

const SkeletonCard = ({ viewMode }: SkeletonCardProps) => {
  return (
    <div className={`skeletonCard ${viewMode}`}>
      <div className="skeletonImage"></div>
      <div className="skeletonContent">
        <div className="skeletonTitle"></div>
        <div className="skeletonYear"></div>
        {viewMode === "list" && (
          <>
            <div className="skeletonOverview"></div>
            <div className="skeletonOverview"></div>
          </>
        )}
      </div>
    </div>
  )
}

export default SkeletonCard;
