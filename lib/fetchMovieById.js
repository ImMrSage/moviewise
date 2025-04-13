export default async function fetchMovieById(id) {
  console.log("⛏️ fetchMovieById called with ID:", id);

  const API_KEY = "d3571033306f8e443ead5ad19803b4b3";
  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  console.log("Fetching movie from URL:", API_URL);
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch movie data");
  }
  return await response.json();
}
