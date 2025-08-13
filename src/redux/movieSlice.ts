import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface MovieState {
  // State alanlarını buraya ekleyebilirsin
}

const initialState: MovieState = {
  // Başlangıç state değerleri
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    // Örnek reducer:
    // setMovies: (state, action: PayloadAction<Movie[]>) => {}
  },
  extraReducers: (builder) => {
    // Async işlemler için builder kullanabilirsin
    // builder.addCase(someAsyncThunk.fulfilled, (state, action) => {})
  },
})

// export const { setMovies } = movieSlice.actions
export default movieSlice.reducer
