import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendCoins } from "../store/trendCoinSlice";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import debounce from "../helpers/debounce";


function TrendingCoins({}) {

  const dispatch = useDispatch();
  const trendingCoins = useSelector((state) => state.trendCoins);

  

  useEffect(() => {
    dispatch(fetchTrendCoins());
  }, [dispatch]);
  console.log(trendingCoins)

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "25px",
      }}
    >
      <Box
        sx={{
          width: "970px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
          <Box fontSize={"20px"} fontWeight={"bold"} marginLeft={"12px"}>
            Trend Coinler
          </Box>
          <TrendingUpIcon sx={{ml:"10px"}}/>
        </Box>
        <TableContainer sx={{height:"750px",boxSizing:"border-box"}}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{position:"sticky",top: "0",zIndex: "999",backgroundColor:"#ffffff"}}>
              <TableRow>
              <TableCell sx={{fontWeight:"bold"}}>Logo</TableCell>
                <TableCell sx={{fontWeight:"bold"}}>İsim</TableCell>
                <TableCell align="center" sx={{fontWeight:"bold"}}>Sembol</TableCell>
                <TableCell align="center" sx={{fontWeight:"bold"}}>Market Sıralaması</TableCell>
                <TableCell align="center" sx={{fontWeight:"bold"}}>Değer (BTC)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {trendingCoins?.map((trend) => (
                <TableRow
                  key={trend.id}
                  sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        "&:hover": {
                          backgroundColor: "#f0f0f0", 
                        },
                      }}
                >
                  <TableCell component="th" scope="row">
                    <img src={trend.image} alt={trend.name} style={{ width: "25px", height: "25px" }} />
                  </TableCell>
                  <TableCell>{trend.name}</TableCell>
                  <TableCell align="center">{trend.symbol}</TableCell>
                  <TableCell align="center">{trend.marketRank}</TableCell>
                  <TableCell align="center">{trend.priceBtc}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default TrendingCoins;
