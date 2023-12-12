import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTrendCoins = createAsyncThunk(
  'trendCoins/fetchTrendCoins',
  async () => {
    try {
      const res = await axios.get(
        'https://api.coingecko.com/api/v3/search/trending'
      );

      return res.data.coins.map((trendCoin) => ({
        name: trendCoin.item.name,
        image: trendCoin.item.large,
        id: trendCoin.item.id,
        priceBtc: trendCoin.item.price_btc,
        symbol: trendCoin.item.symbol,
        marketRank: trendCoin.item.market_cap_rank,
      }));
    } catch (error) {
      throw new Error('Veri alınırken bir hata oluştu: ' + error.message);
    }
  }
);

const trendCoinsSlice = createSlice({
  name: 'trendCoins',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendCoins.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchTrendCoins.rejected, (state, action) => {
        console.error(action.error.message);
      });
  },
});

export default trendCoinsSlice.reducer;


