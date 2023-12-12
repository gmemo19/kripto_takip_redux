import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { addToFavorites, removeFromFavorites } from "../store/favorites";


function Portfolio() {
    const favorites = useSelector((state) => state.favorites.list);
    const navigate = useNavigate();
    const dispatch = useDispatch();


  return (
  <Box sx={{
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "25px",
  }}>
  <Box sx={{
          width: "970px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}>
        <Box sx={{display:"flex",fontWeight:"bold",fontSize:"20px",width:"100%",ml:"30px",mt:"20px"}}>Favorilerim</Box>
   <TableContainer sx={{ height: "750px", boxSizing: "border-box",mt:"15px" }}>
          <Table aria-label="simple table">
            <TableHead sx={{position:"sticky",top: "0",zIndex: "999",backgroundColor:"#ffffff"}}>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Logo</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>İsim</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Sembol
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Market Sıralaması
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Değer (USD)
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Favorilerden Çıkar
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {favorites.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    Favori coin bulunmamaktadır.
                  </TableCell>
                </TableRow>
              ) : (
                favorites.map((coin) => (
                  <TableRow
                    key={coin.id}
                    sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        "&:hover": {
                          backgroundColor: "#f0f0f0", 
                          cursor: "pointer",
                        },
                      }}
                  >
                    <TableCell component="th" scope="row">
                      <img
                        src={coin.image}
                        alt={coin.name}
                        style={{ width: "25px", height: "25px" }}
                      />
                    </TableCell>
                    <TableCell onClick={() => navigate("/coins/" + coin.id)}>
                      {coin.name}
                    </TableCell>
                    <TableCell align="center" onClick={() => navigate("/coins/" + coin.id)}>{coin.symbol}</TableCell>
                    <TableCell align="center" onClick={() => navigate("/coins/" + coin.id)}>{coin.marketRank}</TableCell>
                    <TableCell align="center" onClick={() => navigate("/coins/" + coin.id)}>{coin.currentPrice}</TableCell>
                    <TableCell align="center">
                      <BookmarkIcon
                        onClick={() => {
                          const isFavorite = favorites.some(
                            (favorite) => favorite.id === coin.id
                          );

                          console.log("isFavorite:", isFavorite);

                          if (isFavorite) {
                            dispatch(removeFromFavorites(coin.id));
                          } else {
                            dispatch(addToFavorites(coin));
                          }
                        }}
                        color={
                          favorites.some((favorite) => favorite.id === coin.id)
                            ? "primary"
                            : "inherit"
                        }
                      />
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>

  </Box>
  </Box> 
  );
}

export default Portfolio;