'use client';
import "./home.scss";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { Movie, MovieCategory, ViewMode } from "@/types/movie";
import LoadingSpinner from "@/components/loadingSpinner";
import MovieList from "@/components/movieList";
import ErrorMessage from "@/components/errorMessage";
import MovieService from "@/services/movieService";
import Header from "@/components/header";

const Home = () => {
  const [activeTab, setActiveTab] = useState<MovieCategory>("now_playing");
  const [page, setPage] = useState(1);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [loading, setLoading] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([])
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [searchDebounced, setSearchDebounced] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchDebounced(search);
      setPage(1);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  const fetchMovies = useCallback(async (pageNum = 1, reset = true) => {
    setLoading(true);
    setError(null);

    try {
      const url = (searchDebounced.trim() !== '') ? `search/movie?query=${encodeURIComponent(searchDebounced)}&include_adult=false&language=en-US&page=${pageNum}` : `movie/${activeTab}?language=en-US&page=${pageNum}`;
      const response = await MovieService.get(url);
      const results = response?.results || [];

      setFilteredMovies(prev => reset ? results : [...prev, ...results]);
      setHasMore(pageNum < response.total_pages);
      setPage(pageNum);
    } catch (err) {
      setError("Failed to load movies. Please check your internet connection and try again.");
    } finally {
      setLoading(false);
    }
  }, [activeTab, searchDebounced]);

  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      fetchMovies(page + 1, false);
    }
  }, [loading, hasMore, page, fetchMovies]);

  const resetAndFetch = useCallback(() => {
    setFilteredMovies([]);
    setPage(1);
    setHasMore(false);

    window.scrollTo({ top: 0, behavior: 'smooth' });

    fetchMovies();
  }, [fetchMovies]);

  useEffect(() => {
    resetAndFetch();
  }, [searchDebounced, activeTab]);

  const handleTabChange = (tab: MovieCategory) => {
    setActiveTab(tab);
    setPage(1);
  }

  const memoizedMovieList = useMemo(
    () => (
      <MovieList
        movies={filteredMovies}
        viewMode={viewMode}
        onLoadMore={loadMore}
        hasMore={hasMore}
        loading={loading && page > 1}
      />
    ),
    [filteredMovies, viewMode, hasMore, loading, page, loadMore],
  )

  return (
    <div id="homepage">
      <Header
        activeTab={activeTab}
        handleTabChange={handleTabChange}
        viewMode={viewMode}
        setViewMode={setViewMode}
        search={search}
        setSearch={setSearch} />

      <div className="main">
        {error && <ErrorMessage message={error} onRetry={() => fetchMovies()} />}

        {(loading && page === 1 && filteredMovies.length === 0) ? <LoadingSpinner /> : memoizedMovieList}
      </div>
    </div>
  )
};

export default Home;