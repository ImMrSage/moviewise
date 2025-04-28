import GlobalStyle from "../styles";
import { useEffect, useState } from "react";
import fetchMovies from "../lib/fetchMovies";
import useLocalStorage from "use-local-storage";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  console.log("Favorites:", favorites);

  useEffect(() => {
    async function getMovies() {
      const movies = await fetchMovies();
      setMovies(movies);
      setLoading(false);
    }
    getMovies();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!movies.length) {
    return <div>No movies found</div>;
  }

  return (
    <>
      <Link href="/">Home</Link>
      <br></br>
      <Link href="/movies/favorites">Favorites</Link>
      <GlobalStyle />
      <Component
        {...pageProps}
        movies={movies}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </>
  );
}
