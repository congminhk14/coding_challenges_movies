"use client";

import { useState } from "react";
import type { Movie, ViewMode } from "@/types/movie";
import LazyImage from "../lazyImage";
import './movieCard.scss';
import { useRouter } from "next/navigation";

interface MovieCardProps {
  movie: Movie
  viewMode: ViewMode
}

export default function MovieCard({ movie, viewMode }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const formatDate = (dateString: string) => {
    return new Date(dateString).getFullYear();
  }

  const formatRating = (rating: number) => {
    return rating.toFixed(1)
  }

  return (
    <div
      className={`movieCard ${viewMode} ${isHovered && "hovered"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      onClick={() => router.push(`/movie/${movie.id}`)}
    >
      <div className="imageContainer">
        <LazyImage
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="poster"
        />
      </div>

      <div className="content">
        <div className="voting">
          <div className="rating">
            <span className="star">★</span>
            <span>{movie.vote_average ? formatRating(movie.vote_average) : 0}</span>
          </div>
        </div>
        <h3 className="title">{movie.title}</h3>
        <p className="year">{(movie.release_date && movie.release_date !== '') ? formatDate(movie.release_date) : ''}</p>
        {viewMode === "list" && <p className="overview">{movie.overview}</p>}
      </div>
    </div>
  )
}
