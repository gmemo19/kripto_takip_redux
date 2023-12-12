import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCoinDetail = createAsyncThunk(
  'coinDetail/fetchCoinDetail',
  async (coinId) => {
    try {
      const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`, {
        params: {
          vs_currency: 'usd',
          market_chart: true,
          localization: false,
          sparkline: false,
        },
      });
      const sparkline7d = res.data.market_data.sparkline_7d;
      const sparkline7dPrice = sparkline7d ? sparkline7d.price : [];

      return {
        name: res.data.name,
        image: res.data.image.large,
        id: res.data.id,
        currentPrice: res.data.market_data.current_price.usd,
        symbol: res.data.symbol,
        marketRank: res.data.market_cap_rank,
        high24h: res.data.market_data.high_24h.usd,
        low24h: res.data.market_data.low_24h.usd,
        priceChange24h: res.data.market_data.price_change_24h,
        sparkline7d: sparkline7dPrice,
      };
    } catch (error) {
      throw new Error('Kripto Para detayları alınırken bir hata oluştu: ' + error.message);
    }
  }
);

const coinDetail = createSlice({
  name: 'coinDetail',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoinDetail.fulfilled, (state, action) => {
        return { ...action.payload };
      })
      .addCase(fetchCoinDetail.rejected, (state, action) => {
        console.error(action.error.message);
      });
  },
});

export default coinDetail.reducer;
