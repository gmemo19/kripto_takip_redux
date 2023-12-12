import {
  Box,
  IconButton,
  InputBase,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import debounce from "../helpers/debounce";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoinsList } from "../store/coinsList";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { addToFavorites, removeFromFavorites } from "../store/favorites";

function CoinList() {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins);
  const [foundedCoinsList, setFoundedCoinsList] = useState();
  const [searchIsFocused, setSearchIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.favorites.list);

  useEffect(() => {
    const fetchCoinsListDebounced = debounce(fetchCoinsList, 2000);
    dispatch(fetchCoinsList());
  }, [dispatch]);

  useEffect(() => {
    const filteredCoins = coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFoundedCoinsList(filteredCoins);
  }, [searchValue, coins]);

  const renderSearchArea = () => {
    const handleSearchFocused = () => {
      setSearchIsFocused(true);
    };

    const handleSearchBlur = () => {
      setSearchIsFocused(false);
    };

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
          <Box
            height={"75px"}
            marginLeft={"22px"}
            sx={{ width: "100%", display: "flex", alignItems: "center" }}
          >
            <Paper
              elevation={0}
              className={"input-base-area"}
              sx={{
                display: "flex",
                boxSizing: "border-box",
                width: "100%",
                backgroundColor: searchIsFocused ? "#E9EDE9" : "#F1F5F1",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1, width: "100%" }}
                placeholder={"Kripto Ara"}
                inputProps={{ "aria-label": "Kripto Ara" ?? "" }}
                value={searchValue}
                onFocus={handleSearchFocused}
                onBlur={handleSearchBlur}
                onChange={(event) => {
                  setSearchValue(event.target.value);
                }}
              />
              <IconButton
                type="button"
                sx={{ p: "10px" }}
                onClick={() => {
                  if (searchValue !== "") {
                    setSearchValue("");
                  }
                }}
              >
                {searchValue === "" ? <SearchIcon /> : <CloseIcon />}
              </IconButton>
            </Paper>
          </Box>
          <TableContainer sx={{ height: "750px", boxSizing: "border-box" }}>
            <Table aria-label="simple table">
              <TableHead
                sx={{
                  position: "sticky",
                  top: "0",
                  zIndex: "999",
                  backgroundColor: "#ffffff",
                }}
              >
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
                    Favoriye Ekle
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(searchValue === "" ? coins : foundedCoinsList)?.map(
                  (coin) => (
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
                            favorites.some(
                              (favorite) => favorite.id === coin.id
                            )
                              ? "primary"
                              : "inherit"
                          }
                        />
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    );
  };
  return renderSearchArea();
}

export default CoinList;
