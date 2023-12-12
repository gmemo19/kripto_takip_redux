import axios from "axios";

// export const fetchTrendCoins = async (setTrendingCoins) => {
//   try {
//     const res = await axios.get(
//       "https://api.coingecko.com/api/v3/search/trending"
//     );
//     const trendCoins = res.data.coins.map((trendCoin) => {
//       return {
//         name: trendCoin.item.name,
//         image: trendCoin.item.large,
//         id: trendCoin.item.id,
//         priceBtc: trendCoin.item.price_btc,
//         symbol: trendCoin.item.symbol,
//         marketRank: trendCoin.item.market_cap_rank,
//       };
//     });
//     setTrendingCoins(trendCoins);
//   } catch (error) {
//     console.error("Veri alınırken bir hata oluştu:", error.message);
//   }
// };

// export const fetchCoinData = async (setCoins) => {
//   try {
//     const res = await axios.get(
//       "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en"
//     );
//     const crpyto = res.data.map((coin) => {
//       return {
//         name: coin.name,
//         image: coin.image,
//         id: coin.id,
//         currentPrice: coin.current_price,
//         symbol: coin.symbol,
//         marketRank: coin.market_cap_rank,
//         high24h: coin.high_24h,
//         low24h: coin.low_24h,
//         priceChange24h: coin.price_change_24h,
//         sparkline7d: coin.sparkline_in_7d,
//       };
//     });
//     setCoins(crpyto);
//   } catch (error) {
//     console.error(
//       "Kripto Para verileri alınırken bir hata oluştu",
//       error.message
//     );
//   }
// };

// export const fetchGraphData = async (id, setGraphicCoin) => {
//   try { 
//     const res = await axios.get(
//       `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7&precision=3`
//     );


//     const graphData = res.data.prices.map((price) => {
//       const [timestamp, p] = price;
//       const date = new Date(timestamp).toLocaleDateString("en-us");      

      
//       return {
//         Date: date,
//         Price: p,
//       };
//     });
//     setGraphicCoin(graphData);
//   } catch (error) {
//     console.error(
//       "Kripto grafik verileri alınırken bir hata oluştu",
//       error.message
//     );
//   }
// };
