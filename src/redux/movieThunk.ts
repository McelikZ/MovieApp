import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMovieService, Movie } from "../services/movieAppService";

export const fetchMovie = createAsyncThunk<
  { endpoint: string; movies: Movie[] }, // payload tipi
  string // arg tipi
>("data/movieData", async (endpoint, { rejectWithValue }) => {
  try {
    const movies = await fetchMovieService(endpoint);
    console.log(
      endpoint,
      movies.map((m) => m.title)
    );

    console.log(
      `Movies for ${endpoint}: [${movies.map((m) => m.title).join(", ")}]`
    );
    return { endpoint, movies }; // endpoint’i payload’a ekliyoruz
  } catch (error: any) {
    return rejectWithValue(error.message || "Unknown error");
  }
});
