"use client"

import { useEffect, useRef, useCallback } from "react"
// import SkeletonCard from "./SkeletonCard"
import type { Movie, ViewMode } from "@/types/movie"
import MovieCard from "../movieCard";
import "./movieList.scss";
import SkeletonCard from "../skeletonCard";

interface MovieListProps {
  movies: Movie[]
  viewMode: ViewMode
  onLoadMore: () => void
  hasMore: boolean
  loading: boolean
}

export default function MovieList({ movies, viewMode, onLoadMore, hasMore, loading }: MovieListProps) {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const loadMoreRef = useRef<HTMLDivElement>(null)

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries
      if (target.isIntersecting && hasMore && !loading) {
        onLoadMore()
      }
    },
    [hasMore, loading, onLoadMore],
  )

  useEffect(() => {
    const element = loadMoreRef.current
    if (!element) return

    observerRef.current = new IntersectionObserver(handleObserver, {
      threshold: 0.1,
    })

    observerRef.current.observe(element)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [handleObserver])

  if (movies.length === 0 && !loading) {
    return (
      <div className="emptyState">
        <p>No movies found</p>
      </div>
    )
  }

  return (
    <div className="movieList">
      <div className={`movieGrid ${viewMode}`}>
        {movies.map((movie, index) => (
          <MovieCard key={`${movie.id}_${index}`} movie={movie} viewMode={viewMode} />
        ))}

        {loading &&
          Array.from({ length: 8 }).map((_, index) => <SkeletonCard key={`skeleton-${index}`} viewMode={viewMode} />)}
      </div>

      {hasMore && (
        <div ref={loadMoreRef} className="loadMore">
          {loading && <div className="loadingText">Loading more movies...</div>}
        </div>
      )}
    </div>
  )
}
