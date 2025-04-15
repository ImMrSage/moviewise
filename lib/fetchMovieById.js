export default async function fetchMovieById(id) {
  console.log("⛏️ fetchMovieById called with ID:", id);

  const API_KEY = "d3571033306f8e443ead5ad19803b4b3";
  const base = `https://api.themoviedb.org/3/movie/${id}`;
  const movieResponse = await fetch(`${base}?api_key=${API_KEY}`);
  const creditsResponse = await fetch(`${base}/credits?api_key=${API_KEY}`);

  if (!movieResponse.ok || !creditsResponse.ok) {
    throw new Error("Failed to fetch movie data");
  }

  const movie = await movieResponse.json();
  const credits = await creditsResponse.json();
  const director = credits.crew.find((member) => member.job === "Director");

  console.log("🎬 Movie:", movie);
  console.log("👥 Credits:", credits);

  return { ...movie, director: director ? director.name : "Unknown" };
}
