import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import CoinDetail from "./components/coinDetail";
import routes from "./routes";

function App() {
 


  return (
    <Box height={"100%"}>
      <Header />
      <Routes>
      {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.component />}
          />
        ))}
        <Route path="/coins/:id" element={<CoinDetail />} />
      </Routes>
    </Box>
  );
}

export default App;
