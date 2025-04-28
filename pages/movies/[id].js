import fetchMovieById from "../../lib/fetchMovieById";
import Movie from "@/components/Movie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function MovieDetail({ favorites, setFavorites }) {
  const router = useRouter();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("router.isReady:", router.isReady);
    console.log("router.query.id:", router.query.id);

    if (!router.isReady) return;

    const id = router.query.id; // destructure id from router.query

    if (!id) return; // safety check

    async function getMovie() {
      const movie = await fetchMovieById(id);
      setMovie(movie);
      setLoading(false);
    }

    getMovie();
  }, [router.isReady, router.query.id]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!movie) {
    return <div>No movie found</div>;
  }

  return (
    <>
      <Movie
        movie={movie}
        favorites={favorites}
        setFavorites={setFavorites}
        priority
        showDetails
      />
    </>
  );
}
