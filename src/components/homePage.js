import { Box } from "@mui/material";
import React from "react";
import TrendingCoins from "./trendingCoins";

function HomePage() {

  return (
  <Box>
  <Box  sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "25px",
          flexGrow:"1"

        }}>
<Box sx={{
            width: "970px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}>

</Box>
  </Box>
    <TrendingCoins />
  </Box> 
  );
}

export default HomePage;