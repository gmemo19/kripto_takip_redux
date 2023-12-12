import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchCoinsPrices = createAsyncThunk(
    'graphicCoin/fetchCoinsPrices',
    async (id) => {
        try {
            const res = await axios.get(
                `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=60&precision=3`
              );
              const graphData = res.data.prices.map((price) => {
                const [timestamp, p] = price;
                const date = new Date(timestamp).toLocaleDateString("en-us");      
          
                
                return {
                  Date: date,
                  Price: p,
                };
              });
              return { id, graphData };
        }catch (error) {
            console.error(
              "Kripto grafik verileri alınırken bir hata oluştu",
              error.message
            );
          }
    }
);

const coinsPrices = createSlice({
    name: 'coinsPrices',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchCoinsPrices.fulfilled, (state, action) => {
          return [...action.payload.graphData];
        })
        .addCase(fetchCoinsPrices.rejected, (state, action) => {
          console.error(action.error.message);
        });
    },
  });
  
  export default coinsPrices.reducer;