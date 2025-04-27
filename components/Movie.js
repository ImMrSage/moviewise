import Image from "next/image";
import Link from "next/link";
import formatDuration from "@/lib/formatDuration";

export default function Movie({
  movie,
  favorites,
  setFavorites,
  priority,
  showDetails = false,
}) {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  console.log("Favorites:", favorites);

  const isFavorite =
    Array.isArray && favorites.some((fav) => fav.id === movie.id);

  function toggleFavorite() {
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  }

  return (
    <li key={movie.id}>
      <h2>{movie.title}</h2>
      <p>Release Date: {movie.release_date}</p>
      {showDetails && (
        <>
          <p>
            Genre: |{" "}
            {movie.genres?.map((genre) => `${genre.name} | `) || "Unknown"}
          </p>
          <p>Duration: {formatDuration(movie.runtime)}</p>
        </>
      )}
      <p>Rating: {movie.vote_average}</p>
      {movie.poster_path && (
        <Link href={`/movies/${movie.id}`}>
          <Image
            src={`${imageBaseUrl}${movie.poster_path}`}
            alt={movie.title}
            width={200}
            height={300}
            priority={priority} // Use priority prop to load the first image faster
          />
        </Link>
      )}
      <button type="button" onClick={toggleFavorite}>
        {isFavorite ? "💔" : "❤️"}
      </button>
      {showDetails && (
        <>
          <p>{movie.overview}</p>
          <p>Directed by {movie.director}</p>
        </>
      )}
    </li>
  );
}
