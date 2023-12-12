import HomePage from "./components/homePage";
import AboutUs from "./components/aboutUs";
import CoinList from "./components/coinList";
import Profile from "./components/profile";

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about',
    component: AboutUs,
  },
  {
    path: '/coins',
    component: CoinList,
  },
  {
    path: '/profile',
    component: Profile,
  },
];

export default routes;
