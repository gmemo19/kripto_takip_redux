import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCoinsList = createAsyncThunk(
  'coins/fetchCoinsList',
  async () => {
    try {
      const res = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en'
      );

      return res.data.map((coin) => ({
        name: coin.name,
        image: coin.image,
        id: coin.id,
        currentPrice: coin.current_price,
        symbol: coin.symbol,
        marketRank: coin.market_cap_rank,
        high24h: coin.high_24h,
        low24h: coin.low_24h,
        priceChange24h: coin.price_change_24h,
        sparkline7d: coin.sparkline_in_7d,
      }));
    } catch (error) {
      throw new Error('Kripto Para verileri alınırken bir hata oluştu' + error.message);
    }
  }
);

const coinsList = createSlice({
  name: 'coins',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoinsList.fulfilled, (state, action) => {
        return [...action.payload];
      })
      .addCase(fetchCoinsList.rejected, (state, action) => {
        console.error(action.error.message);
      });
  },
});

export default coinsList.reducer;
