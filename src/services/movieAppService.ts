import axios from "axios";

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  fullPosterPath?: string; // opsiyonel
}

const API_KEY = "24f10a55f1f556fa6250794d0f21132f";
const BASE_URL = "https://api.themoviedb.org/3";
export const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export const fetchMovieService = async (
  endpoint: string,
  page = 1
): Promise<Movie[]> => {
  try {
    const response = await axios.get<{ results: Movie[] }>(
      `${BASE_URL}/movie/${endpoint}`,
      {
        params: { api_key: API_KEY, language: "en-US", page },
      }
    );

    // poster_path null ise default bir görsel ekleyebilirsin
    const moviesWithFullPoster = response.data.results.map((movie) => ({
      ...movie,
      fullPosterPath: movie.poster_path
        ? `${IMAGE_URL}${movie.poster_path}`
        : "", // boş string veya default url
    }));

    return moviesWithFullPoster;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};
