import MoviesList from "@/components/MoviesList";
import Pagination from "@/components/Pagination";

export default function HomePage({
  movies,
  favorites,
  setFavorites,
  page,
  totalPages,
}) {
  if (page > 500) {
    return <p>Only the first 500 pages are accessible.</p>;
  }

  return (
    <>
      <MoviesList
        movies={movies}
        favorites={favorites}
        setFavorites={setFavorites}
      />
      <Pagination page={page} totalPages={totalPages} />
    </>
  );
}
