import MoviesList from "@/components/MoviesList";
import { useRouter } from "next/router";

export default function HomePage({ movies, favorites, setFavorites, page }) {
  const router = useRouter();
  return (
    <>
      <MoviesList
        movies={movies}
        favorites={favorites}
        setFavorites={setFavorites}
      />
      <button
        onClick={() => router.push(`/?page=${page - 1}`)}
        disabled={page === 1}
      >
        ⬅️
      </button>
      <button onClick={() => router.push(`/?page=${page + 1}`)}>➡️</button>
    </>
  );
}
