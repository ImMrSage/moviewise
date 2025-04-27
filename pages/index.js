import MoviesList from "@/components/MoviesList";

export default function HomePage({ movies, favorites, setFavorites }) {
  return (
    <MoviesList
      movies={movies}
      favorites={favorites}
      setFavorites={setFavorites}
    />
  );
}
