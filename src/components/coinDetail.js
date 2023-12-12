import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCoinDetail } from "../store/detailCoin";
import { fetchCoinsPrices } from "../store/coinsPrices";
import GraphicCoin from "./graphicCoin";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { addToFavorites, removeFromFavorites } from "../store/favorites";


function CoinDetail() {
  const dispatch = useDispatch();
  const coinDetail = useSelector((state) => state.coinDetail);
  const { id } = useParams();
  const favorites = useSelector((state) => state.favorites.list);


  useEffect(() => {
    dispatch(fetchCoinDetail(id));
    dispatch(fetchCoinsPrices(id));
  }, [dispatch, id]);

  if (!coinDetail.id) {
    return <div>Loading...</div>;
  }
  console.log(coinDetail)

  const isFavorite = favorites.some((favorite) => favorite.id === coinDetail.id);

  return (
    <Box height={"100%"}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "25px",
          flexGrow:"1"

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
        <Box sx={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",mt:"15px",ml:"20px",mb:"20px"}}> 

        <Box height={"100px"} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>

          <img
            src={coinDetail.image}
            alt={coinDetail.name}
            style={{ width: "32px", height: "32px" }}
          />
          <Box  sx={{fontWeight:"bold",fontSize:"30px",textAlign:"center",marginLeft:"10px"}}>{coinDetail.name}</Box>
        </Box>
        <Box height={"100px"} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}> 

        <BookmarkIcon sx={{fontSize: "2rem", minWidth: "2rem"}} onClick={() => {
            if (isFavorite) {
              dispatch(removeFromFavorites(coinDetail.id));
            } else {
              dispatch(addToFavorites(coinDetail));
            }
          }}
          color={isFavorite ? "primary" : "inherit"}/>
        </Box>
        </Box>
        <GraphicCoin coinId={id} />
        <TableContainer sx={{boxSizing:"border-box",mt:"50px"}}>
          <Table  aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{fontWeight:"bold"}}>Market Sıralaması</TableCell>
                <TableCell align="center" sx={{fontWeight:"bold"}}>Sembol</TableCell>
                <TableCell align="center" sx={{fontWeight:"bold"}}>En Yüksek (GÜN)</TableCell>
                <TableCell align="center" sx={{fontWeight:"bold"}}>En Düşük (GÜN)</TableCell>
                <TableCell align="center" sx={{fontWeight:"bold"}}>Fiyat Değişimi (GÜN)</TableCell>
                <TableCell align="center" sx={{fontWeight:"bold"}}>Güncel Değer (USD)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
                <TableRow
                  key={coinDetail.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                 
                  <TableCell align="center">{coinDetail.marketRank}</TableCell>
                  <TableCell align="center">{coinDetail.symbol}</TableCell>
                  <TableCell align="center">{coinDetail.high24h}</TableCell>
                  <TableCell align="center">{coinDetail.low24h}</TableCell>
                  <TableCell align="center">{coinDetail.priceChange24h}</TableCell>
                  <TableCell align="center">{coinDetail.currentPrice}</TableCell>
                </TableRow>
             
            </TableBody>
          </Table>
        </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}

export default CoinDetail;

