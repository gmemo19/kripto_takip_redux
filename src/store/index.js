import { configureStore } from '@reduxjs/toolkit'
import trendCoinsReducer from './trendCoinSlice'; 
import coinsListReducer from './coinsList'; 
import coinsPrices from './coinsPrices';
import CoinDetail from './detailCoin';
import favoritesReducer from './favorites';

export default configureStore({
  reducer: {
    trendCoins: trendCoinsReducer,
    coins: coinsListReducer,
    graphicCoin: coinsPrices,
    coinDetail: CoinDetail,
    favorites: favoritesReducer,
  },
});
