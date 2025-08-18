import axios from "axios";

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  fullPosterPath?: string;
  videos?: {
    results: {
      id: string;
      key: string;
      name: string;
      site: string;
      type: string;
    }[];
  };
  cast?: CastMember[]; // ✅ Cast bilgisi
}

const API_KEY = "24f10a55f1f556fa6250794d0f21132f";
const BASE_URL = "https://api.themoviedb.org/3";
export const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export const fetchMovieService = async (
  endpoint: string,
  page = 1
): Promise<Movie[]> => {
  try {
    // Film listesini çek
    const response = await axios.get<{ results: Movie[] }>(
      `${BASE_URL}/movie/${endpoint}`,
      {
        params: { api_key: API_KEY, language: "en-US", page },
      }
    );

    const moviesWithDetails = await Promise.all(
      response.data.results.map(async (movie) => {
        const fullPosterPath = movie.poster_path
          ? `${IMAGE_URL}${movie.poster_path}`
          : "";

        // Videoları çek
        const videoRes = await axios.get(`${BASE_URL}/movie/${movie.id}/videos`, {
          params: { api_key: API_KEY, language: "en-US" },
        });

        // Cast bilgilerini çek
        const castRes = await axios.get(`${BASE_URL}/movie/${movie.id}/credits`, {
          params: { api_key: API_KEY, language: "en-US" },
        });

        return {
          ...movie,
          fullPosterPath,
          videos: videoRes.data,
          cast: castRes.data.cast.slice(0, 10).map((c: any) => ({
            id: c.id,
            name: c.name,
            character: c.character,
            profile_path: c.profile_path,
          })),
        };
      })
    );

    return moviesWithDetails;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};
