import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

const MotivationActNow = ({ themeGradient }) => {
  const defaultGradient = "linear-gradient(to right, #0000fb, #0000a3)";
  const buttonGradient = themeGradient || defaultGradient;

  return (
    <Box
      sx={{
        position: "relative",
        backgroundSize: "cover",
        color: "#000",
        width: "100%",
        height: "80vh",
        textAlign: "center",
        padding: "100px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              marginBottom: "20px",
              fontSize: { xs: "28px", md: "50px" },
            }}
          >
            Действуй сейчас и создай те изменения, которые хочешь видеть.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#aaa",
              marginBottom: "30px",
              fontSize: { xs: "16px", md: "18px" },
            }}
          >
            Устраните разрыв между вашей текущей точкой и желаемой целью с
            помощью доказанных научных стратегических сессий Владислава Кронина.
          </Typography>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        sx={{
          background: buttonGradient,
          borderRadius: "50px",
          padding: "12px 30px",
          fontSize: { xs: "16px", md: "18px" },
          fontWeight: "bold",
          color: "#fff",
          "&:hover": {
            background: buttonGradient,
          },
        }}
      >
        Бесплатная сессия
      </Button>
    </Box>
  );
};

export default MotivationActNow;
