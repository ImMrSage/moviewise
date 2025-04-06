export default function MoviesList({ movies }) {
  if (!movies || movies.length === 0) {
    return <p>No movies to show</p>;
  }
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
        </li>
      ))}
    </div>
  );
}
