'use client';
import React from 'react';
import { MovieInterface } from '@/interfaces/movie.interface';
import LazyImage from '@/components/lazyImage';
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon, CalendarIcon, ClockIcon, CurrencyDollarIcon, GlobeAltIcon, StarIcon, UsersIcon } from '@heroicons/react/20/solid';
import './movieDetail.scss';

type Props = {
  movie: MovieInterface;
};

const MovieDetail = ({ movie }: Props) => {
  const router = useRouter();

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const backdropUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  return (
    <div className="movieDetail">
      <div className="summaryInformation">
        {backdropUrl && (
          <div className="backdrop">
            <LazyImage src={backdropUrl} alt={movie.title} />
            <div className="backgroupOverlay"></div>
          </div>
        )}
        
        <div className="content">
          <button 
            className="backButton"
            onClick={() => router.push('/')}
          >
            <ArrowLeftIcon className='iconBack' />
            Back to Homepage
          </button>
          
          <div className="mainInformation">
            <div className="poster">
              <LazyImage src={posterUrl} alt={movie.title} />
            </div>
            
            <div className="basicInformation">
              <h1 className="title">{movie.title}</h1>
              {movie.tagline && (
                <p className="tagline">"{movie.tagline}"</p>
              )}
              
              <div className="metaInformation">
                <div className="metaItem">
                  <StarIcon className="metaIcon" />
                  <span>{movie.vote_average.toFixed(1)} ({movie.vote_count.toLocaleString()} votes)</span>
                </div>
                <div className="metaItem">
                  <CalendarIcon className="metaIcon" />
                  <span>{formatDate(movie.release_date)}</span>
                </div>
                <div className="metaItem">
                  <ClockIcon className="metaIcon" />
                  <span>{formatDuration(movie.runtime)}</span>
                </div>
              </div>
              
              <div className="categories">
                {movie.genres.map(genre => (
                  <span key={genre.id} className="category">
                    {genre.name}
                  </span>
                ))}
              </div>
              
              <div className="status">
                <span className={`statusBadge ${movie.status.toLowerCase()}`}>
                  {movie.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mainContent">
        <div className="section">
          <h2>Overview</h2>
          <p className="overview">{movie.overview}</p>
        </div>

        <div className="stats">
          {movie.budget > 0 && (
            <div className="stat">
              <CurrencyDollarIcon className="statIcon" />
              <div>
                <span className="statLabel">Budget</span>
                <span className="statValue">{formatCurrency(movie.budget)}</span>
              </div>
            </div>
          )}
          
          {movie.revenue > 0 && (
            <div className="stat">
              <CurrencyDollarIcon className="statIcon" />
              <div>
                <span className="statLabel">Revenue</span>
                <span className="statValue">{formatCurrency(movie.revenue)}</span>
              </div>
            </div>
          )}
          
          <div className="stat">
            <UsersIcon className="statIcon" />
            <div>
              <span className="statLabel">Popularity</span>
              <span className="statValue">{movie.popularity.toFixed(0)}</span>
            </div>
          </div>
          
          <div className="stat">
            <GlobeAltIcon className="statIcon" />
            <div>
              <span className="statLabel">Language</span>
              <span className="statValue">{movie.original_language.toUpperCase()}</span>
            </div>
          </div>
        </div>

        <div className="origin">
          {movie.production_countries.length > 0 && (
            <div className="section">
              <h3>Production Countries</h3>
              <div className="countries">
                {movie.production_countries.map(country => (
                  <span key={country.iso_3166_1} className="country">
                    {country.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {movie.spoken_languages.length > 0 && (
            <div className="section">
              <h3>Spoken Languages</h3>
              <div className="languages">
                {movie.spoken_languages.map(language => (
                  <span key={language.iso_639_1} className="language">
                    {language.english_name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {movie.homepage && (
          <div className="section">
            <a 
              href={movie.homepage} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btnMoveToHomePageMovie"
            >
              Visit Official Website
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;