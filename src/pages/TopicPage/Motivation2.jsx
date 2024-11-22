import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

const Motivation2 = () => {
  return (
    <Box
      sx={{
        position: "relative",
        background:
          "url(path_to_your_background_image.jpg) no-repeat center center",
        backgroundSize: "cover",
        color: "#000",
        height: "80vh",
        textAlign: "center",
        padding: "100px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6} sx={{ width: "1500px" }}>
          <Typography
            variant="body1"
            sx={{ color: "#aaa", marginBottom: "10px" }}
          >
            Что вам действительно нужно для успеха
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", marginBottom: "20px" }}
          >
            Инструменты, Стратегия <br /> & Психология
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#aaa", marginBottom: "30px" }}
          >
            Это изменит то, кем вы являетесь навсегда
          </Typography>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        sx={{
          background: "linear-gradient(90deg, #00f, #007bff)",
          borderRadius: "50px",
          padding: "12px 30px",
          fontSize: "18px",
          fontWeight: "bold",
          color: "#fff",
          "&:hover": {
            background: "linear-gradient(90deg, #007bff, #00f)",
          },
        }}
      >
        Бесплатная сессия
      </Button>
    </Box>
  );
};

export default Motivation2;
