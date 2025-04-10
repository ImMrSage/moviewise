import fetchMovieById from "../api/getMovieById";
import Movie from "@/components/Movie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function MovieDetail() {
  const router = useRouter();
  const id = router.query / id;

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    async function getMovie() {
      const movie = await fetchMovieById(id);
      setMovie(movie);
      setLoading(false);
    }
    getMovie();
  }, [id]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!movie) {
    return <div>No movie found</div>;
  }

  return <Movie movie={movie} priority />;
}
