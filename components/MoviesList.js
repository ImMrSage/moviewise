import Movie from "./Movie";

export default function MoviesList({ movies }) {
  if (!movies) {
    return <p>Loading...</p>;
  }
  if (movies.length === 0) {
    return <p>No movies to show</p>;
  }
  return (
    <ul>
      {movies.map((movie, index) => (
        <Movie key={movie.id} movie={movie} priority={index === 0} />
      ))}
    </ul>
  );
}
