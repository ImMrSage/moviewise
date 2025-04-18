const API_KEY = "d3571033306f8e443ead5ad19803b4b3";
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

export default async function fetchMovies() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log("Fetched movies:", data.results); // Log the fetched movies
    if (!response.ok) {
      throw new Error(`Error fetching movies: ${data.status_message}`);
    }
    return data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return []; // Return an empty array in case of error
  }
}
