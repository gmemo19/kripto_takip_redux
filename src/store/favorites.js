
import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: { 
    list: [], 
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.list.push(action.payload);
      console.log('Added to favorites:', action.payload);
    },
    removeFromFavorites: (state, action) => {
        state.list = state.list.filter((coin) => coin.id !== action.payload);
      },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;


