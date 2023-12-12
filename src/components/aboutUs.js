import { Box, Typography } from "@mui/material";
import React from "react";

function AboutUs() {



 
      return (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            minHeight: "100vh", 
            mt:"25px"
          }}
        >
          <Box
            sx={{
              width: "100%", 
              maxWidth: "970px", 
              padding: "20px", 
              boxSizing: "border-box",
            }}
          >
            <Typography variant="h4" gutterBottom>
              Hakkımızda
            </Typography>
            <Typography>
              Kripto Para Birimlerini takip etmek için bir numaralı adres.
            </Typography>
          </Box>
        </Box>
      );
    };
    
    
 

export default AboutUs;