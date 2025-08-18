import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMovieService, Movie } from "../services/movieAppService";

export const fetchMovie = createAsyncThunk<
  { endpoint: string; movies: Movie[] },
  string
>("data/movieData", async (endpoint, { rejectWithValue }) => {
  try {
    const movies = await fetchMovieService(endpoint);
    return { endpoint, movies };
  } catch (error: any) {
    return rejectWithValue(error.message || "Unknown error");
  }
});
