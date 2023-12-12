import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Header() {



  return (
    <Box
      sx={{
        bgcolor: "#832DD7",
        height: "80px",
        minHeight:"80px",
        display: "flex",
        alignItems: "center",
        justifyContent:"center",
        width: "100%",
        boxSizing: "border-box",
        padding:"20px",
        position: "sticky",
        top: "0",
        zIndex: "999",
        transition: "z-index 0.3s"
      }}
    >
    <Box sx={{width:"970px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
    <Box sx={{display:"flex",width:"100%"}}>
    <Box color={"#ffffff"} fontSize={"25px"}>Mini Kripto</Box>
    </Box>
    <Box sx={{display:"flex",width:"100%",justifyContent:"flex-end",flexGrow:"1"}}>
    <Link to="/" style={{color:"#ffffff",fontSize:"18px",textDecoration: "none",marginRight:"28px"}}>Ana Sayfa</Link>
    <Link to="/coins" style={{color:"#ffffff",fontSize:"18px",textDecoration: "none",marginRight:"28px"}}>Kripto Paralar</Link>
    <Link to="/about" style={{color:"#ffffff",fontSize:"18px",textDecoration: "none",marginRight:"28px"}}>Hakkımızda</Link>
    <Link to="/profile" style={{color:"#ffffff",fontSize:"18px",textDecoration: "none"}}>Profil</Link>
    </Box>
    </Box>

    </Box>
  );
}

export default Header;