import { createAsyncThunk } from "@reduxjs/toolkit";

// Boş thunk: ne alıyor ne döndürüyor
export const test = createAsyncThunk<void, void>(
  'data/test',
  async (_, thunkAPI) => {
    try {
      // Buraya async işlemlerini ekleyebilirsin
      // Örnek: API çağrısı, localStorage işlemleri vb.
      console.log("Thunk çalıştı ama veri yok");
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
