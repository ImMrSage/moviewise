const API_KEY = "d3571033306f8e443ead5ad19803b4b3";
const MAX_PAGE = 500;

export default async function fetchMovies(page = 1) {
  try {
    const limitedPage = Math.min(page, MAX_PAGE);
    const API_URL = `https://api.themoviedb.org/3/movie/popular?page=${limitedPage}&api_key=${API_KEY}`;
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log("Data:", data);
    console.log("Fetched movies:", data.results); // Log the fetched movies
    if (!response.ok || !data.results) {
      throw new Error(`Error fetching movies: ${data.status_message}`);
    }
    return {
      movies: data.results || [],
      totalPages: Math.min(data.total_pages || 1, MAX_PAGE),
    };
  } catch (error) {
    console.error("Error fetching movies:", error);
    return {
      movies: [], // Return an empty array in case of error
      totalPages: 1, // Fallback so app doesn't break
    };
  }
}
