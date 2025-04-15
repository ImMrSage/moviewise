import GlobalStyle from "../styles";
import { useEffect, useState } from "react";
import fetchMovies from "../lib/fetchMovies";

export default function App({ Component, pageProps }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <GlobalStyle />
      <Component {...pageProps} movies={movies} />
    </>
  );
}
