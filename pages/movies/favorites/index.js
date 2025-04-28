import MoviesList from "@/components/MoviesList";

export default function Favorites({ favorites, setFavorites }) {
  return (
    <MoviesList
      movies={favorites}
      favorites={favorites}
      setFavorites={setFavorites}
    />
  );
}
