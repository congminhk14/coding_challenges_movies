import MovieDetail from "@/components/movieDetail";
import MovieNotFound from "@/components/movieNotFound";
import MovieService from "@/services/movieService";
import { Metadata, ResolvingMetadata } from "next";
import { cache } from "react";

type Props = {
  params: { id: string };
};

const fetchMovieDetail = cache(async (id: string) => {
  try {
    const res = await MovieService.get(`movie/${id}?language=en-US`);
    return res || null;
  } catch (error) {
    return null;
  }
});

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = await params;
  const movie = await fetchMovieDetail(id);

  if (!movie) {
    return {
      title: `Movie Not Found | MovieFlix`,
      description: "The movie you are looking for does not exist.",
    };
  }

  return {
    title: `${movie.title} | MovieFlix`,
    description: movie.overview,
    keywords:
      "MovieFlix, watch movies online, stream movies, free movies, movie streaming, movie database, film reviews, movie ratings, trending movies, popular movies, top rated films, new releases, now playing, action movies, drama films, comedy movies, movie trailers, Hollywood films, watch trailers, full movies online",
    openGraph: {
      title: `${movie.title} | MovieFlix`,
      images: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      description: movie.overview,
    },
  };
}

const EventDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  const movie = await fetchMovieDetail(id);

  if (!movie) {
    return <MovieNotFound />
  }

  return <MovieDetail movie={movie} />;
};

export default EventDetailPage;
